<template>
    <div>
        <small v-show="errorMsg" class="errorText">{{errorMsg}}</small>
    </div>
</template>
<script>
    export default {
        data() {
            return {

            }
        },
        computed:{
            errorMsg(){
                return this.$store.getters.errMsg
            }
        }
    }
</script>
<style lang="scss" scoped>

</style>