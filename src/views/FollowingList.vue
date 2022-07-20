<template>
    <div>
        <div class="card card_double_card text-center p-3 mb-4">
            <h5 class="mb-0 fw-bold">追蹤名單</h5> 
        </div>
        <div v-for="item in followingData" :key="item.id" class="card card_border_bottom mb-3">
            <div class="row justify-content-between align-items-end">
                <div class="col-8 d-flex">
                    <img class="avatar avatar_lg avatar_border me-3" :src="item.img"/>
                    <div>
                        <h6 class="linkText nickname">{{ item.nickName }}</h6>
                        <span class="text-black-50">追蹤時間：{{ item.followDate }}</span>
                    </div>
                </div>
                <div class="col-4 text-end">
                    <span>您已追蹤 {{ item.followDays }} 天！</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            followingData:[
                {
                    id: 1,
                    img: '/img/ava1.png',
                    nickName: '愛爾敏',
                    followDate: '2022/1/10 12:00',
                    followDays: 90
                },
                {
                    id: 2,
                    img: '/img/ava2.png',
                    nickName: '米歇爾',
                    followDate: '2022/1/10 12:00',
                    followDays: 90
                }
            ]
        }
    }
}
</script>
<style scoped lang='scss'>
.card{
    padding: 16px;
}
.avatar{
    padding: 2px;
}
</style>