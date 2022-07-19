<template>
  <div>
    <nav class="navbar bg-light nav w-100">
      <div class="container">
        <span class="navbar-brand mb-0 h1 logo" @click="$router.push('/')">MetaWall</span>
        <div>
          <div class="d-flex dropdown" id="dropdownMenuButton1"  data-bs-toggle="dropdown" aria-expanded="false">
            <div class="d-flex align-items-center" src="../img/user.png">
                <img src="../img/user.png" alt="" class="avatar me-2">
                <p class="member_btn mb-0">Member</p>
            </div>
            <ul class="dropdown-menu member_list py-0 mt-2 position-absolute text-center" aria-labelledby="dropdownMenuButton1">
              <li class="dropdown-item">我的貼文牆</li>
              <li class="dropdown-item">修改個人資料</li>
              <li class="dropdown-item">登出</li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </div>
  
</template>

<script>
export default {
  name: 'NavBar',
  data(){
    return{
      // isShowList: false,
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
