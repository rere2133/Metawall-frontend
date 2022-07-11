<template>
    <div class="login login_wrapper">
        <div class="login_content">
            <div class="left p-4">
                <img src="../img/login_image.png" alt="">
            </div>
            <!-- signup -->
            <div class="right p-5">
                <img class="logo" src="../img/logo.png"/>
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
                    <div class="mb-2rem">
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
                </form>
                <div class="d-grid gap-2 my-3">
                    <button type="submit" @click.stop.prevent="submit" class="btn btn-primary">註冊</button>
                </div>
                <p class="btn-text" @click="$router.push('/login')">登入</p>
            </div>
        </div>
    </div>
</template>
<script>
export default{
    name: "Login",
    data(){
        return{
            nickName: "",
            email: "",
            password: "",
            nickNameBlured: false,
            emailBlured: false,
            passwordBlured: false,
            valid: false,
            submitted: false,
        }
    },
    methods:{
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
        submit(){
            this.validate();
            if(this.valid){
                this.submitted = true
            }
        }
    }
}
</script>