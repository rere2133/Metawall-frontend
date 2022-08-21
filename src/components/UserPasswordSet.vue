<template>
    <div class="user_card_content">
        <label for="basic-url" class="form-label" style="align-self: start;">輸入新密碼</label>
        <div class="input-group mb-3">
        <input v-model="password" type="password" class="form-control user_nick_input" id="basic-url" aria-describedby="basic-addon3">
        </div>
        <label for="basic-url" class="form-label" style="align-self: start;">再次輸入</label>
        <div class="input-group mb-2rem">
        <input v-model="confirmPassword" type="password" class="form-control user_nick_input" id="basic-url" aria-describedby="basic-addon3">
        </div>
        <small v-show="apiErrorMsg" class="errorText">{{apiErrorMsg}}</small>
        <div class="d-grid gap-2">
            <div @click="resetSubmit" class="btn btn-primary custom_btn card_border_bottom mb-2" :disabled="disabled">重設密碼</div>
        </div>
    </div>
</template>
<script>
    import { editPassword } from "../api/users"
    import { mapMutations } from "vuex"
    export default {
        data() {
            return {
                password: "",
                confirmPassword: "",
                apiErrorMsg: ""
            }
        },
        computed:{
            disabled(){
                if((!this.password || !this.confirmPassword) || this.password!=this.confirmPassword) return true
                else return false
            }
        },
        methods:{
            ...mapMutations([
                'setAlert'
            ]),
            async resetSubmit(){
                try {
                    let res = await editPassword({
                        password: this.password,
                        confirmPassword : this.confirmPassword
                    })
                    console.log({res});
                    this.setAlert({
                        dialog: true,
                        title: "設定成功",
                        msg: `您的密碼已設定成功`
                    })
                    this.apiErrorMsg = ""
                    this.password = ""
                    this.confirmPassword= ""
                } catch (err) {
                    console.log({err});
                    this.apiErrorMsg = err.response.data.message || "發生錯誤，設定密碼失敗"
                }
            }
        }
    }
</script>
<style lang="scss" scoped>

</style>