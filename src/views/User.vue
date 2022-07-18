<template>
    <div>
        <div class="user">
            <div class="card card_double_card text-center p-3 mb-4">
                修改個人資料
            </div>
            <button type="button" class="btn btn-dark ms-3">暱稱修改</button>
            <button type="button" class="btn btn-light user_btn">重設密碼</button>
            <div class="card user_card card_border_bottom p-4">
                <img class="user_img mb-3" src="../img/user_default.png" alt="">
                <button type="button" class="btn btn-dark user_upload px-4 py-1 mb-3">上傳大頭照</button>
                <form>
                    <label for="basic-url" class="form-label" style="align-self: start;">暱稱</label>
                    <div class="input-group mb-3">
                    <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3">
                    </div>
                    <div>
                        <label class="form-label" style="align-self: start;">性別</label>
                    </div>
                    <div class="mb-4">
                        <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
                        <label class="form-check-label" for="inlineRadio1">男性</label>
                        </div>
                        <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
                        <label class="form-check-label" for="inlineRadio2">女性</label>
                        </div>
                    </div>
                    <div class="d-grid gap-2">
                        <div class="btn btn-warning custom_btn card_border_bottom mb-2">送出更新</div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
export default {    
    data(){
        return{
            
        }
    }
}
</script>