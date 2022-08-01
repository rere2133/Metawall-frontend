<template>
    <div class="login login_wrapper">
        <div class="login_content">
            <div class="left p-4">
                <img src="/img/login_image.png" alt="">
            </div>
            <!-- login -->
            <div class="right p-5">
                <img class="logo" src="/img/logo.png"/>
                <h1 class="mb-5">到元宇宙展開全新社交圈</h1>
                <form>
                    <div class="mb-3">
                        <input 
                        v-model="email"
                        type="email" class="form-control"
                        :class="{'is-invalid': !validValue(email) && emailBlured }"
                        placeholder="Email">
                    </div>
                    <div class="mb-2rem">
                        <input 
                        v-model="password"
                        type="password" class="form-control" :class="{'is-invalid': !validValue(password) && passwordBlured }" placeholder="Password">
                    </div>
                </form>
                <small v-show="errorMsg && (emailBlured || passwordBlured)" class="errorText">{{errorMsg}}</small>
                <small v-show="apiErrorMsg" class="errorText">{{apiErrorMsg}}</small>
                <div class="d-grid gap-2 my-3">
                    <button type="submit" @click.stop.prevent="submit" class="btn btn-primary" >
                        <span v-if="loading" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                        <span v-else> 登入 </span>
                    </button>
                </div>
                <p class="btn-text" @click="$router.push('/signup')">註冊帳號</p>
            </div>
        </div>
    </div>
</template>
<script>
import { mapMutations } from 'vuex'
import { userLogin } from '../api/auth'
export default{
    name: "Login",
    data(){
        return{
            errorMsg: "",
            apiErrorMsg: "",
            email: "kim1@gmail.com",
            password: "1234567a",
            valid: false,
            emailBlured: false,
            passwordBlured: false,
            submitted: false,
            loading: false,
        }
    },
    methods:{
        ...mapMutations([
            'setAlert'
        ]),
        validate(){
            this.emailBlured = true;
            this.passwordBlured = true;
            if(this.validValue(this.email) && this.validValue(this.password)){
                this.valid = true
            }
        },
        validValue(val){
            if(!val){
                this.errorMsg = "帳號或密碼不得為空白"
                return false
            }else {
                this.errorMsg = ""
                return true
            }
        },
        submit(){
            this.validate();
            if(this.valid){
                this.submitted = true
                this.login()
            }
        },
        async login(){
            this.loading = true
            try{
                let postData = {
                    email: this.email,
                    password: this.password,
                }
                let res = await userLogin(postData)
                if(res.status==200){
                    localStorage.setItem("meta_token",res.data.token)
                    this.setAlert({
                        dialog: true,
                        title: "登入成功",
                        msg: `Hello ${res.data.user} ! 歡迎來到 MetaWall!`
                    })
                    await setTimeout(()=>{
                        this.setAlert({ dialog: false })
                    },3000)
                    this.$router.push('/metaWall')
                }else{

                    this.apiErrorMsg= "註冊發生錯誤，請稍後再試"
                }
                this.loading = false
            }catch(err){
                // console.log(err);
                console.log(err.response.data.message || err);
                this.apiErrorMsg = err.response.data.message || err
                this.loading = false
            }
        },
    }
}
</script>