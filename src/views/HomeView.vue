<template>
  <div class="home">
    <div class="card card_double_card follow_card mb-3">
            <div class="row justify-content-between align-items-center">
                <div class="col-8 d-flex">
                    <img class="follow_card_img m-2" src="/img/ava4.png"/>
                    <div class="follow_card_content p-3">
                        <h6 class="linkText nickName">阿爾敏</h6>
                        <span>987,987 人追蹤</span>
                    </div>
                </div>
                <div class="col-4 text-end">
                    <button class="btn btn-primary custom_btn custom_btn_sm me-3 px-2rem py-1">追蹤</button>
                </div>
            </div>
        </div>
    <div class="d-flex">
      <select class="form-select me-2 w-50" aria-label="Default select example">
        <option selected>最新貼文</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
      <div class="input-group">
        <input type="text" class="form-control" placeholder="搜尋貼文" aria-label="Recipient's username" aria-describedby="button-addon2">
        <button class="btn btn-primary" type="button" id="button-addon2">
          <i class="bi bi-search"></i>
        </button>
      </div>
    </div>
    <div class="card wall_card card_border_bottom my-2" v-for="item in 4" :key="item">
      <div class="d-inline-flex align-items-end">
        <img class="avatar avatar_md avatar_border me-3 p-1" src="/img/ava2.png"/>
        <div>
          <p class="h6 mb-0">邊緣小杰</p>
          <small class="caption">2022/1/10 12:00</small>
        </div>
      </div>
      <div class="wall_card_content my-3">
        外面看起來就超冷.... 我決定回被窩繼續睡....
      </div>
      <img class="wall_card_img" src="/img/wall_image.png" alt="">
    </div>
  </div>  
</template>

<script>
export default {
  name: 'HomeView',
  data(){
    return{
      items: [1,2,3]
    }
  }
}
</script>