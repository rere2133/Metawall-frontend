<template>
    <div class="card p-4 d-flex flex-column justify-content-between" style="min-height:300px;">
        <div @click="$router.push('/metaWall/postCreate')" class="btn btn-primary custom_btn mb-2 fw-bold">張貼動態</div>
        <div class="sidebar_item">
            <img class="avatar avatar_lg me-3" src="/img/user.png"/>
            <span class="h6">邊緣小杰</span>
        </div>
        <div @click="$router.push('/user/followingList')" class="d-flex align-items-baseline sidebar_item">
            <div class="avatar avatar_lg avatar_btn me-3">
                <i class="bi bi-bell mb-1"></i>
            </div>
            <span class="h6">追蹤名單</span>
        </div>
        <div @click="$router.push('/user/likeList')" class="d-flex align-items-baseline sidebar_item">
            <div class="avatar avatar_lg avatar_btn me-3">
                <i class="bi bi-hand-thumbs-up mb-1"></i>
            </div>
            <span class="h6">我按讚的文章</span>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>