<template>
    <div>
        <div class="card card_double_card text-center p-3 mb-4">
            <h5 class="mb-0 fw-bold">我按讚的貼文</h5> 
        </div>
        <div v-for="item in likeList" :key="item._id" class="card card_border_bottom mb-3">
            <div class="row justify-content-between align-items-end">
                <div class="col-8 d-flex">
                    <img v-if="item.user.photo" class="avatar avatar_lg avatar_border me-3" :src="item.user.photo"/>
                    <div v-else class="avatar avatar_lg avatar_btn me-3">
                        <i  class="bi bi-person-fill"></i>
                    </div>
                    <div>
                        <h6 class="linkText nickName">{{ item.user.name }}</h6>
                        <span class="text-black-50">發文時間：{{ timeFormate(item.createAt) }}</span>
                    </div>
                </div>
                <div class="col-3 d-flex justify-content-around align-items-end">
                    <div @click="dislike(item._id)" class="me-3 text-center point linkText">
                        <i class="fa-regular fa-thumbs-up thumbIcon me-1 point active mb-1"></i>
                        <p class="mb-0 fw-bold">取消</p>
                    </div>
                    <div @click="goWall(item._id)" class="text-center point linkText">
                        <i class="bi bi-arrow-right-circle fs-5"></i>
                        <p class="mb-0 fw-bold">查看</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import moment from 'moment'
import { mapGetters,mapActions } from "vuex"
import { deleteLike } from '../api/posts'

export default {
    data(){
        return{
            followingData:[
                {
                    id: 1,
                    img: '/img/ava1.png',
                    nickName: '愛爾敏',
                    followDate: '2022/1/10 12:00',
                    followDays: 90
                },
                {
                    id: 2,
                    img: '/img/ava2.png',
                    nickName: '米歇爾',
                    followDate: '2022/1/10 12:00',
                    followDays: 90
                }
            ]
        }
    },
    computed:{
        ...mapGetters([
            'likeList'
        ])
    },
    mounted(){
        this.getLikeList()
    },
    methods:{
        ...mapActions([
            'getLikeList'
        ]),
        timeFormate(date){
            return moment(date).format('YYYY/MM/DD HH:mm:ss');
        },
        async dislike(id){
            try {
                let res = await deleteLike(id)
                console.log({res});
                await this.getLikeList()
            } catch (err) {
                console.log({err});
            }
        },
        goWall(id){
            this.$router.push(`/metaWall#${id}`)
        }
    }
}
</script>
<style scoped lang='scss'>
.card{
    padding: 16px;
}
.avatar{
    padding: 2px;
}
</style>