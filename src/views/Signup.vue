<template>
    <div class="login login_wrapper">
        <div class="login_content">
            <div class="left p-4">
                <img src="/img/login_image.png" alt="">
            </div>
            <!-- signup -->
            <div class="right p-5">
                <img class="logo" src="/img/logo.png"/>
                <h1 class="mb-5">註冊</h1>
                <form>
                    <div class="mb-3">
                        <input 
                        v-model="nickName"
                        type="nickName" class="form-control"
                        :class="{'is-invalid': !validNickName(nickName) && nickNameBlured }" @blur="nickNameBlured = true"
                        placeholder="暱稱">
                        <div class="invalid-feedback">
                            暱稱至少 2 個字元以上
                        </div>
                    </div>
                    <div class="mb-3">
                        <input 
                        v-model="email"
                        type="email" class="form-control" :class="{'is-invalid': !validEmail(email) && emailBlured }" @blur="emailBlured = true" placeholder="Email">
                        <div class="invalid-feedback">
                            Email 格式錯誤
                        </div>
                    </div>
                    <div class="mb-3">
                        <input 
                        v-model="password"
                        type="password" class="form-control" 
                        :class="{'is-invalid': !validPassword(password) && passwordBlured }"
                        @blur="passwordBlured = true"
                        placeholder="Password">
                        <div class="invalid-feedback">
                            密碼需至少 8 碼以上，並中英混合
                        </div>
                    </div>
                    <div class="mb-2rem">
                        <input 
                        v-model="password2"
                        type="password" class="form-control" 
                        :class="{'is-invalid': !validPassword2(password2) && password2Blured }"
                        @blur="password2Blured = true"
                        placeholder="PasswordConfirm">
                        <div class="invalid-feedback">
                            與密碼不相符
                        </div>
                    </div>
                </form>
                <small v-show="errorMsg" class="errorText">{{errorMsg}}</small>
                <div class="d-grid gap-2 my-3">
                    <button type="submit" @click.stop.prevent="submit" class="btn btn-primary">
                        <span v-if="loading" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                        <span v-else> 註冊 </span>
                    </button>
                    <!-- <button type="submit" @click.stop.prevent="signUp" class="btn btn-primary" :disabled="submitted">註冊</button> -->
                </div>
                <p class="btn-text" @click="$router.push('/login')">登入</p>
            </div>
        </div>
    </div>
</template>
<script>
import { mapMutations } from 'vuex'
import { userSignup } from '../api/auth'
export default{
    name: "Login",
    data(){
        return{
            loading: false,
            nickName: "kim",
            email: "kim5@gmail.com",
            password: "1234567a",
            password2: "1234567a",
            nickNameBlured: false,
            emailBlured: false,
            passwordBlured: false,
            password2Blured: false,
            valid: false,
            // submitted: false,
            errorMsg: ""
        }
    },
    methods:{
        ...mapMutations([
            'setAlert'
        ]),
        validate(){
            this.nickNameBlured = true;
            this.emailBlured = true;
            this.passwordBlured = true;
            if(
                this.validNickName(this.nickName) &&
                this.validEmail(this.email) &&
                this.validPassword(this.password)
            ){
                this.valid = true
            } else{
            }
        },
        validNickName(nickName){
            return nickName.length>=2 ? true : false
        },
        validEmail(email){
            const re = /(.+)@(.+){2,}\.(.+){2,}/;
            return re.test(email.toLowerCase());
        },
        validPassword(password){
            const re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
            return re.test(password)
        },
        validPassword2(password){
            return this.password == password
        },
        async submit(){
            this.validate();
            if(this.valid){
                // this.submitted = true
                await this.signUp()
            }
        },
        async signUp(){
            this.loading = true
            try{
                let postData = {
                    name: this.nickName,
                    email: this.email,
                    password: this.password,
                    confirmPassword: this.password2
                }
                let res = await userSignup(postData)
                if(res.status==201){
                    localStorage.setItem("meta_token",res.data.token)
                    this.setAlert({
                        dialog: true,
                        title: "註冊成功",
                        msg: `Hello ${this.nickName} ! 歡迎來到 MetaWall!`
                    })
                    await setTimeout(()=>{
                        this.setAlert({ dialog: false })
                    },3000)
                    this.$router.push('/metaWall')
                }else{
                    this.errorMsg= "註冊發生錯誤，請稍後再試"
                }
                this.loading = false
            }catch(err){
                console.log(err.response.data.message);
                this.errorMsg = err.response.data.message
                this.loading = false
            }
        },
    }
}
</script>