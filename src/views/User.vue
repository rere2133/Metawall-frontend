<template>
    <div class="user">
        <div class="card card_double_card text-center p-3 mb-4">
            修改個人資料
        </div>
        <button type="button" class="btn ms-3"
        :class="tab==0?'btn-dark':'btn-light'"
        @click="tab=0"
        >暱稱修改</button>
        <button type="button" class="btn" :class="tab==1?'btn-dark':'btn-light'"
        @click="tab=1"
        >重設密碼</button>

        <div class="card user_card card_border_bottom p-4">
            <div v-if="tab==0">
                <UserInfo/>
            </div>
            <div v-else>
                <UserPasswordSet/>
            </div>
            
        </div>
    </div>
</template>
<script>
import UserInfo from "@/components/UserInfo.vue"
import UserPasswordSet from "@/components/UserPasswordSet.vue"
export default {    
    components:{
        UserInfo,
        UserPasswordSet
    },
    data(){
        return{
            tab: 0,
        }
    }
}
</script>