<template>
    <div class="user_card_content">
        <div class="text-center">
            <img class="mb-3 avatar avatar_upload avatar_border p-2" :src="photo" alt="">
        </div>
        <div class="text-center">
            <input class="form-control visually-hidden" ref="fileUpload" @change="previewAvatar" type="file" id="formFile">
            <button @click="openUpload" type="button" class="btn btn-dark user_upload text-center px-4 py-1 mb-3">上傳大頭照</button>
        </div>
        <form>
            <label for="basic-url" class="form-label" style="align-self: start;">暱稱</label>
            <div class="input-group mb-3">
            <input v-model="name" type="text" class="form-control user_nick_input" id="basic-url" aria-describedby="basic-addon3">
            </div>
            <div>
                <label class="form-label" style="align-self: start;">性別</label>
            </div>
            <div class="mb-4">
                <div class="form-check form-check-inline">
                <input 
                v-model="sex"
                class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="male">
                <label class="form-check-label" for="inlineRadio1">男性</label>
                </div>
                <div class="form-check form-check-inline">
                <input 
                v-model="sex"
                class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="female">
                <label class="form-check-label" for="inlineRadio2">女性</label>
                </div>
            </div>
            <!-- <div class="errorText text-center">
                1.圖片寬高比必需為 1:1，請重新輸入 <br/>
                2. 解析度寬度至少 300像素以上，請重新輸入
            </div> -->
            <div class="d-grid gap-2">
                <div @click="editProfileSubmit" class="btn btn-primary custom_btn card_border_bottom mb-2 fw-bold">
                    <loading-spinner v-if="loading"/>
                    <span v-else>送出更新</span>
                </div>
            </div>
        </form>
    </div>
</template>
<script>
import { getProfile,editProfile } from "../api/users"
import { uploadImgFile } from "../api/upload"
import { mapMutations } from "vuex"
import LoadingSpinner from "./LoadingSpinner.vue"
import LoadingGlobal from "./LoadingGlobal.vue"
    export default {
        components:{ LoadingSpinner,LoadingGlobal },
        data() {
            return {
                name: "",
                sex: "",
                photo: "/img/ava3.png",
                uploadImg: "",
                loading: false
            }
        },
        async mounted(){
            await this.getProfileData()
        },
        methods:{
            ...mapMutations([
                'setAlert'
            ]),
            async getProfileData(){
                try{
                    let res = await getProfile()
                    let data = res.data.user
                    if(res.data.status=="success"){
                        this.name = data.name
                        this.sex = data.sex
                        this.photo = data.photo || this.photo
                    }
                }catch(err){
                    console.log(err);
                }
            },
            async editProfileSubmit(){
                try {
                    this.loading = true
                    let payload ={
                        name: this.name,
                        sex: this.sex,
                        photo : this.photo
                    }
                    let res = await editProfile(payload)
                    console.log({res});
                    if(res.data.status=="success"){
                        this.setAlert({
                            dialog: true,
                            title: "更新成功",
                            msg: res.data.msg
                        })
                    }
                    this.loading = false
                } catch (err) {
                    this.loading = false
                    console.log(err);
                }
            },
            openUpload(){
                this.$refs.fileUpload.click()
            },
            async previewAvatar(e){
                try {
                    let formData = new FormData()
                    formData.append("",e.target.files[0])
                    let res = await uploadImgFile (formData)
                    console.log({res});
                    let data = res.data
                    if(data.status == "success"){
                        this.photo = data.imgUrl
                    }
                } catch (err) {
                    console.log(err.response.data.message ||err);
                    // if (err.response.data.message){
                    //     this.setErrMsg(err.response.data.message)
                    // }
                }
            }
        }
    }
</script>
<style lang="scss" scoped>

</style>