<template>
  <div>
    <AlertToasts/>
    <Loading 
      :active="globalLoading"
      loader="dots"
      color="#2E96D6"
      is-full-page
    />
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
import AlertToasts from '@/components/AlertToasts.vue'
//loading
import Loading from 'vue3-loading-overlay/dist/index';
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';
import { mapGetters,mapActions } from 'vuex'
export default{
  components:{
    NavBar,
    SideBar,
    AlertToasts,
    Loading
  },
  data(){
    return{
      // globalLoading: true,
    }
  },
  computed:{
    ...mapGetters([
      'globalLoading'
    ])
  },
  mounted(){
    // this.getProfileData()
  },
  methods:{
    // ...mapActions([
    //   'getProfileData'
    // ])
  }
}
</script>
<style lang="scss">
@import './assets/scss/main.scss'
</style>
