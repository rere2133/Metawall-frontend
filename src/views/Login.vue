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
                <div class="d-grid gap-2 my-3">
                    <button type="submit" @click.stop.prevent="submit" class="btn btn-primary" >登入</button>
                </div>
                <p class="btn-text" @click="$router.push('/signup')">註冊帳號</p>
            </div>
        </div>
    </div>
</template>
<script>
export default{
    name: "Login",
    data(){
        return{
            errorMsg: "",
            email: "",
            password: "",
            valid: false,
            emailBlured: false,
            passwordBlured: false,
            submitted: false,
        }
    },
    methods:{
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
            }
        }
    }
}
</script>