<template>
    <div class="alertToasts">
        <div class="position-absolute top-0 start-50 translate-middle-x" style="z-index:1;">
            <div v-show="alert.dialog" role="alert" aria-live="assertive" aria-atomic="true" class="toast fade show">
                <div class="toast-header">
                    <img style="max-width:24px;" src="/img/ava1.png" class="rounded me-2" alt="/img/ava1.png">
                    <strong class="me-auto">{{alert.title}}</strong>
                </div>
                <div class="toast-body">
                    {{alert.msg}}
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    data() {
        return {
            showToast: false,
        }
    },
    computed:{
        ...mapGetters([
            'alert'
        ])
    },
}
</script>
<style lang="scss" scoped>

</style>