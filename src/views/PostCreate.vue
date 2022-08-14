<template>
    <div>
        <div class="card card_double_card text-center p-3 mb-4">
            <h5 class="mb-0 fw-bold">張貼動態</h5> 
        </div>
        <div class="card card_border_bottom p-2rem">
            <span class="mb-1">貼文內容</span> 
            <div class="form-floating mb-3">
                <textarea v-model="content" class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 169px"></textarea>
                <label for="floatingTextarea2" class="text-black-50">輸入您的貼文內容</label>
                <!-- ===== TAGS Pending ===== -->
                    <!-- <div class="tags p-2">
                        <i class="bi bi-tags" @click="addBtn"></i>
                        <button v-for="i in btns" :key="i" type="button" class="btn btn-sm ms-1 pe-1 py-0" :class="`btn-${i}`">Primary
                            <i class="bi bi-x"></i>
                        </button>
                    </div>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"> -->
                <!-- ===== TAGS Pending ===== -->
            </div>
            <div class="mb-3 visually-hidden">
                <input class="form-control" ref="fileUpload" @change="previewFile" type="file" id="formFile">
            </div>
            <div class="mb-3" >
                <button @click="uploadImg" class="btn btn-dark px-2rem py-1 mb-1">
                    <loading-spinner v-if="loading"/>
                    <span v-else>
                        上傳圖片
                    </span>
                </button>
                <p class="caption">圖片尺寸比例限制 1:1</p>
            </div>
            <img v-show="uploadImgPreview" class="wall_card_img mb-2rem" :src="uploadImgPreview" alt="">
            <error-msg class="text-center mb-3 mx-auto"/>
            <div class="d-grid gap-2 col-7 mx-auto">
                <div v-if="!editMode" @click="submit" class="btn btn-primary custom_btn mb-2 fw-bold">送出貼文</div>
                <div v-else @click="editSubmit" class="btn btn-primary custom_btn mb-2 fw-bold">更新貼文</div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapMutations } from "vuex"
import { getPost, createPost, editPost } from "../api/posts"
import { uploadImgFile } from "../api/upload"
import ErrorMsg from '../components/ErrorMsg.vue'
import LoadingSpinner from "../components/LoadingSpinner.vue"

export default {
    components:{
        ErrorMsg,
        LoadingSpinner
    },
    data(){
        return{
            uploadImgPreview: "",
            // uploadImgPreview: "https://i.imgur.com/ZpclROZ.jpg",
            loading: false,
            btns: 1,
            content: "上傳內容測試",
            editMode: false,
            postId: ""
        }
    },
    computed:{
        authToken(){
            return localStorage.getItem('meta_token')
        }
    },
    mounted(){
        this.getPostData()
    },
    methods:{
        ...mapMutations([
            'setErrMsg',
            'setAlert'
        ]),
        async getPostData(){
            this.postId = this.$route.params.id
            this.editMode = false
            if(this.postId != ""){
                this.editMode = true
                try{
                    let res = await getPost(this.postId)
                    console.log({res});
                    if(res.data.status){
                        const post = res.data.posts[0]
                        this.content = post.content
                        this.uploadImgPreview = post.image
                    }
                }catch(err){
                    console.log(err);
                }
            }
        },
        addBtn(){
            if(this.btns >= 4) return
            this.btns ++
        },
        uploadImg(){
            this.setErrMsg("")
            this.$refs.fileUpload.click()
        },
        async previewFile(e){
            console.log(e.target.files)
            this.loading = true
            try {
                let formData = new FormData()
                formData.append("",e.target.files[0])
                let res = await uploadImgFile (formData)
                console.log({res});
                let data = res.data
                if(res.status==200 && data.status == "success"){
                    this.uploadImgPreview = data.imgUrl
                }
            } catch (err) {
                console.log(err.response.data.message ||err);
                if (err.response.data.message){
                    this.setErrMsg(err.response.data.message)
                }
            }
            this.loading = false
        },
        async submit(){
            try {
                let payload={
                    content: this.content,
                    image: this.uploadImgPreview
                }
                let res = await createPost(payload)
                if(res.status == 200 && res.data.status == true){
                    window.scrollTo(0,0)
                    this.$router.push('/metawall')
                    this.setAlert({
                        dialog: true,
                        title: "新增成功",
                        msg: "您已成功新增一則貼文！"
                    })
                }
            } catch (err) {
                console.log(err)
            }
        },
        async editSubmit(){
            try {
                let payload={
                    content: this.content,
                    image: this.uploadImgPreview
                }
                let res = await editPost(this.postId, payload)
                console.log({res});
                if(res.data.status == true){
                    window.scrollTo(0,0)
                    this.$router.push('/metawall')
                    this.setAlert({
                        dialog: true,
                        title: "更新成功",
                        msg: "您已成功編輯一則貼文！"
                    })
                }
            } catch (err) {
                console.log(err)
            }
        }
    }
}
</script>
<style scoped lang='scss'>
.form-control{
    border-radius: 0px;
}
</style>