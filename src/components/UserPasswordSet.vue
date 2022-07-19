<template>
    <div class="user_card_content">
        <label for="basic-url" class="form-label" style="align-self: start;">輸入新密碼</label>
        <div class="input-group mb-3">
        <input v-model="password1" type="text" class="form-control user_nick_input" id="basic-url" aria-describedby="basic-addon3">
        </div>
        <label for="basic-url" class="form-label" style="align-self: start;">再次輸入</label>
        <div class="input-group mb-2rem">
        <input v-model="password2" type="text" class="form-control user_nick_input" id="basic-url" aria-describedby="basic-addon3">
        </div>
        <div class="d-grid gap-2">
            <div class="btn btn-primary custom_btn card_border_bottom mb-2" :disabled="disabled">重設密碼</div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                password1: "",
                password2: ""
            }
        },
        computed:{
            disabled(){
                if((!this.password1 || !this.password2) || this.password1!=this.password2) return true
                else return false
            }
        }
    }
</script>
<style lang="scss" scoped>

</style>