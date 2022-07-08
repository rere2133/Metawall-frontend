<template>
  <div class="home">
    <NavBar/>
    <div class="container mt-3">
      <div class="row">
        <div class="col-8">
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
          <div class="card wall_card my-2" v-for="item in 4" :key="item">
            <div class="d-inline-flex align-items-end">
              <img class="avatar avatar_md me-3" src="https://images.unsplash.com/photo-1656403861039-00b305b022c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"/>
              <div>
                <p class="h6 mb-0">邊緣小杰</p>
                <small class="caption">2022/1/10 12:00</small>
              </div>
            </div>
            <div class="wall_card_content my-3">
              外面看起來就超冷.... 我決定回被窩繼續睡....
            </div>
            <img class="wall_card_img" src="../img/wall_image.png" alt="">
          </div>
        </div>
        <div class="col-4">
          <div class="card p-4 d-flex flex-column justify-content-between" style="min-height:300px;">
              <div class="btn btn-primary custom_btn mb-2">張貼動態</div>
              <div class="sidebar_item">
                <img class="avatar avatar_lg me-3" src="../img/user.png"/>
                <span class="h6">邊緣小杰</span>
              </div>
              <div class="d-flex align-items-baseline sidebar_item">
                <div class="avatar avatar_lg avatar_btn me-3">
                  <i class="bi bi-bell mb-1"></i>
                </div>
                <span class="h6">追蹤名單</span>
              </div>
              <div class="d-flex align-items-baseline sidebar_item">
                <div class="avatar avatar_lg avatar_btn me-3">
                  <i class="bi bi-hand-thumbs-up mb-1"></i>
                </div>
                <span class="h6">我按讚的文章</span>
              </div>
          </div>
        </div>
      </div>
    </div>
    
  </div>  
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'HomeView',
  components: {
    NavBar
  },
  data(){
    return{
      items: [1,2,3]
    }
  }
}
</script>
