<template>
  <div>
    <nav class="navbar bg-light nav w-100">
      <div class="container">
        <span class="navbar-brand mb-0 h1 logo point" @click="goHomePage">MetaWall</span>
        <div>
          <div class="d-flex dropdown" id="dropdownMenuButton1"  data-bs-toggle="dropdown" aria-expanded="false">
            <div class="d-flex align-items-center">
                <img v-if="user.photo" :src="user.photo" alt="" class="avatar me-2 avatar_border">
                <div v-else class="avatar avatar_btn me-3">
                  <i  class="bi bi-person-fill"></i>
              </div>
                <p class="member_btn mb-0">Member</p>
            </div>
            <ul class="dropdown-menu member_list py-0 mt-2 position-absolute text-center" aria-labelledby="dropdownMenuButton1">
              <li @click="go('/metaWall')" class="dropdown-item">我的貼文牆</li>
              <li @click="go('/user')" class="dropdown-item">修改個人資料</li>
              <li @click="go('/login')" class="dropdown-item">登出</li>
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
  },
  computed:{
    user(){
      return this.$store.getters.userInfo
    },
  },
  methods:{
    go(path){
      this.$router.push(path)
    },
    async goHomePage(){
      location.replace(`${location.origin}/metaWall`)
    }
  }

  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
