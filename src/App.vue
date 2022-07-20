<template>
  <div>
    <div v-if="!['/','/login','/signup'].includes($route.path)">
      <NavBar/>
      <div class="container mt-3">
        <div class="row">
          <div class="col-8">
            <router-view/>
          </div>
          <div class="col-4">
            <SideBar/>
          </div>
        </div>
      </div>
    </div>
    <router-view v-else />
  </div>
</template>
<script>
import NavBar from '@/components/NavBar.vue'
import SideBar from '@/components/SideBar.vue'
export default{
  components:{
    NavBar,
    SideBar
  }
}
</script>
<style lang="scss">
@import './assets/scss/main.scss'
</style>
