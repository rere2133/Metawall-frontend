<template>
  <div class="home">
    <button ref="trigger" class="d-none"></button>
    <div class="modal fade" id="target" tabindex="-1" ref="target">
      <ConfirmModal/>
    </div>
    <div v-show="postUserData._id" class="card card_double_card follow_card mb-3">
        <div class="row justify-content-between align-items-center">
            <div class="col-8 d-flex align-items-center">
                <img v-if="postUserData.photo" class="follow_card_img m-2" :src="postUserData.photo"/>
                <div v-else class="follow_card_noImg">
                  <i class="bi bi-person-fill"></i>
                </div>
                <div class="follow_card_content p-3">
                    <h6 class="linkText nickName">{{postUserData.name}}</h6>
                    <span>{{
                      postUserData._id? postUserData.followers.length: 0
                    }} 人追蹤</span>
                </div>
            </div>
            <div v-show="postUserData._id != userInfo._id" class="col-4 text-end">
                <button v-if="!isFollowed" @click="toggleFollow('follow')" class="btn btn-primary custom_btn custom_btn_sm me-3 px-2rem py-1 text-nowrap">追蹤</button>
                <button v-else @click="toggleFollow('unfollow')" class="btn btn-primary custom_btn custom_btn_sm cancel text-nowrap me-3 px-2rem py-1">取消追蹤</button>
            </div>
        </div>
    </div>
    <div class="d-flex">
      <select v-model="timeSort" @change="getPostsData" class="form-select me-2 w-50" aria-label="Default select example">
        <option selected value="desc">最新貼文</option>
        <option value="asc">由舊到新</option>
      </select>
      <div class="input-group">
        <input v-model="search" @keypress.enter="getPostsData" type="text" class="form-control" placeholder="搜尋貼文" aria-label="Recipient's username" aria-describedby="button-addon2">
        <button @click="getPostsData" class="btn btn-primary" type="button" id="button-addon2">
          <i class="bi bi-search"></i>
        </button>
      </div>
    </div>
    <div v-if="postItems.length==0" class="card wall_card card_border_bottom my-2">
      <div class="wall_card_content my-3 text-center text-black-50">
        目前尚無動態，新增一則貼文吧！
      </div>
    </div>
    <div v-else :id="post._id" class="card wall_card card_border_bottom my-2" v-for="post in postItems" :key="post.id" >
      <div class="d-inline-flex align-items-end">
        <img v-if="post.user.photo" class="avatar avatar_md avatar_border me-3 p-1" :src="post.user.photo"/>
        <div v-else class="avatar avatar_md avatar_btn avatar_btn_md me-3">
            <i  class="bi bi-person-fill"></i>
        </div>
        <div>
          <p @click="goUserPosts(post.user._id)" class="nickName linkText mb-0">{{post.user.name}}</p>
          <small class="caption">{{timeFormate(post.createAt)}}</small>
        </div>
        <div v-show="userInfo.name == post.user.name" class="dropdown ms-auto">
          <i class="bi bi-three-dots point" data-bs-toggle="dropdown"></i>
          <ul class="dropdown-menu postCard" style="right: 0;">
            <li><a class="dropdown-item" @click="$router.push(`/metaWall/postCreate/${post._id}`)">編輯</a></li>
            <li><a class="dropdown-item" @click="openModal(post._id)">刪除</a></li>
          </ul>
        </div>
      </div>
      <div class="wall_card_content my-3">
        {{post.content}}
      </div>
      <img v-show="post.image" class="wall_card_img" :src="post.image" alt="">
      <div class="d-flex mt-3 align-items-center">
        <i @click="toggleLike(post)" class="fa-regular fa-thumbs-up thumbIcon me-1 point" :class="{'active':post.likes.length>0}"></i>
        <span class="ms-1">{{post.likes.length}}</span>
      </div>
    </div>
  </div>  
</template>

<script>
import moment from 'moment'
import { Modal } from 'bootstrap'
import { getPost, getPosts, deletePost, addLike, deleteLike, getUserPosts } from '../api/posts'
import { followFriend, unfollowFriend } from "../api/users"
import { mapMutations,mapGetters,mapActions } from "vuex"
import ConfirmModal from '../components/ConfirmModal.vue'
export default {
  name: 'HomeView',
  components: {ConfirmModal},
  data(){
    return{
      postItems: [],
      search : "",
      timeSort: "desc",
      myModal: {},
      postUserData:{},
      isFollowed: false,
    }
  },
  mounted(){
    this.getPostsData("init");
    this.getLikeList();
    const trigger = this.$refs.trigger
    const target = this.$refs.target
    trigger.addEventListener('click',()=>{
      this.myModal = new Modal(target,{})
      this.myModal.show()
    })
  },
  computed:{
    ...mapGetters([
      'userInfo',
      'likeListByUserId'
    ]),
    postUserId(){
      return this.$route.params.userId
    },
  },
  methods:{
    ...mapMutations([
      'setConfirmMsg',
      'setConfirmLoading',
      'setAlert'
    ]),
    ...mapActions([
      'getLikeList'
    ]),
    async getPostsData(init){
      let params={
        timeSort: this.timeSort,
        search: this.search
      }
      // let hash = this.$route.hash.substring(1)
      // console.log(this.$route);
      try{
        let res = {}
        let userId = this.$route.params.userId
        if(userId){
          res = await this.goUserPosts(userId)
        }else{
          res = await getPosts(params)
        }
        // ??? 沒印象為啥加hash & init ???
        // let res = {}
        // if(hash && init=="init") {
        //   console.log("in init");
        //   res = await getPost(hash)
        // }
        // else {
        //   res = await getPosts(params)
        //   this.$router.push('/metaWall')
        // }
        console.log({res});
        let data = res.data
        if(data.status){
          this.postItems = data.posts
        }
      }catch(err){
        console.log({err});
      }
    },
    timeFormate(date){
        return moment(date).format('YYYY/MM/DD HH:mm:ss');
    },
    openModal(id){
      this.setConfirmMsg({
        title: "提示",
        content: "確認要刪除此貼文嗎？",
        action: async ()=> {
          this.setConfirmLoading(true)
          try{
            let res = await deletePost(id)
            console.log({res});
            if(res.data.status){
              await this.getPostsData()
            }
            this.myModal.hide()
          }catch(err){
            console.log(err);
          }
          this.setConfirmLoading(false)
          window.scrollTo(0,0)
          this.setAlert({
              dialog: true,
              title: "刪除成功",
              msg: "貼文已刪除"
          })
        }
      })
      const trigger = this.$refs.trigger
      trigger.click()
    },
    async toggleLike(post){
      try {
        let res = {}
        if(this.likeListByUserId.includes(post._id)){
          post.likes.length --
          res = await deleteLike(post._id)
        }else{
          post.likes.length ++
          res = await addLike(post._id)
        }
        console.log({res});
        await this.getPostsData()
        await this.getLikeList()
      } catch (err) {
        console.log({err});
      }
    },
    async goUserPosts(userId){
      try {
          if(!this.postUserId && userId) this.$router.push(`/metaWall/${userId}`)
          let res = await getUserPosts(userId)
          console.log({res});
          let data = res.data
          if( data.status == "success" ){
            this.postItems = data.postList
            this.postUserData = data.userData
            let isFollowFriend = this.postUserData.followers.find((el)=> el.user == this.userInfo._id)
            if(isFollowFriend){
              this.isFollowed = true
            }else {
              this.isFollowed = false
            }
          }
      } catch (err) {
          console.log({err});
      }
    },
    async toggleFollow(status){
      // console.log(this.postUserData._id);
      try {
        let res = {}
        if(status=="follow"){
          res = await followFriend(this.postUserData._id)
        }else if(status=="unfollow"){
          res = await unfollowFriend(this.postUserData._id)
        }
        console.log({res});
        await this.goUserPosts(this.postUserId)
      } catch (err) {
        console.log({err});
      }
    }
  }
}
</script>