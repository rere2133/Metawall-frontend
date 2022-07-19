<template>
    <div class="user_card_content">
        <div class="text-center">
            <img class="user_img mb-3" src="../img/user_default.png" alt="">
        </div>
        <div class="text-center">
            <button type="button" class="btn btn-dark user_upload text-center px-4 py-1 mb-3">上傳大頭照</button>
        </div>
        <form>
            <label for="basic-url" class="form-label" style="align-self: start;">暱稱</label>
            <div class="input-group mb-3">
            <input v-model="nickName" type="text" class="form-control user_nick_input" id="basic-url" aria-describedby="basic-addon3">
            </div>
            <div>
                <label class="form-label" style="align-self: start;">性別</label>
            </div>
            <div class="mb-4">
                <div class="form-check form-check-inline">
                <input 
                v-model="gender"
                class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="male">
                <label class="form-check-label" for="inlineRadio1">男性</label>
                </div>
                <div class="form-check form-check-inline">
                <input 
                v-model="gender"
                class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="female">
                <label class="form-check-label" for="inlineRadio2">女性</label>
                </div>
            </div>
            <!-- <div class="errorText text-center">
                1.圖片寬高比必需為 1:1，請重新輸入 <br/>
                2. 解析度寬度至少 300像素以上，請重新輸入
            </div> -->
            <div class="d-grid gap-2">
                <div class="btn btn-primary custom_btn card_border_bottom mb-2">送出更新</div>
            </div>
        </form>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                nickName: "棒棒芮",
                gender: "male",
            }
        }
    }
</script>
<style lang="scss" scoped>

</style>