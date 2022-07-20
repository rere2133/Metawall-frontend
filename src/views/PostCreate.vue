<template>
    <div>
        <div class="card card_double_card text-center p-3 mb-4">
            <h5 class="mb-0 fw-bold">張貼動態</h5> 
        </div>
        <div class="card card_border_bottom p-2rem">
            <span class="mb-1">貼文內容</span> 
            <div class="form-floating mb-3">
                <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 169px"></textarea>
                <label for="floatingTextarea2" class="text-black-50">輸入您的貼文內容</label>
            </div>
            <div class="mb-3">
                <button class="btn btn-dark px-2rem py-1">上傳圖片</button>
            </div>
            <img class="wall_card_img mb-2rem" src="/img/wall_image.png" alt="">
            <small class="errorText text-center mb-3 w-50 mx-auto">
                圖片檔案過大，僅限 1mb 以下檔案 <br/>圖片格式錯誤，僅限 JPG、PNG 圖片
            </small>
            <div class="d-grid gap-2 col-7 mx-auto">
                <div class="btn btn-primary custom_btn mb-2 fw-bold" disabled="true">送出貼文</div>
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
<style scoped lang='scss'>
.form-control{
    border-radius: 0px;
}
</style>