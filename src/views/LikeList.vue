<template>
    <div>
        <div class="card card_double_card text-center p-3 mb-4">
            <h5 class="mb-0 fw-bold">我按讚的貼文</h5> 
        </div>
        <div v-for="item in followingData" :key="item.id" class="card card_border_bottom mb-3">
            <div class="row justify-content-between align-items-end">
                <div class="col-8 d-flex">
                    <img class="avatar avatar_lg avatar_border me-3" :src="item.img"/>
                    <div>
                        <h6 class="linkText nickName">{{ item.nickName }}</h6>
                        <span class="text-black-50">發文時間：{{ item.followDate }}</span>
                    </div>
                </div>
                <div class="col-3 d-flex justify-content-around">
                    <div class="me-3 text-center point linkText">
                        <i class="bi bi-hand-thumbs-up fs-5 text-primary"></i>
                        <p class="mb-0 fw-bold">取消</p>
                        
                    </div>
                    <div class="text-center point linkText">
                        <i class="bi bi-arrow-right-circle fs-5"></i>
                        <p class="mb-0 fw-bold">查看</p>
                    </div>
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