<template>
    <div class="container p-5">
        <button v-for="route in routes" :key="route.title" type="button" class="btn btn-primary me-1" @click="$router.push(route.path)">{{route.title}}</button>
    </div>
</template>
<script>
export default {
    data(){
        return{
            routes:[
                {path: '/metaWall' , title: 'Home'},
                {path: '/login' , title: 'Login'},
                {path: '/signup' , title: 'Signup'},
                {path: '/user' , title: 'User'},
            ]
        }
    }
}
</script>