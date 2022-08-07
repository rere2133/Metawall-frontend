<template>
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">{{confirmMsg.title}}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          {{confirmMsg.content}}
        </div>
        <div class="modal-footer">
          <div v-if="confirmMsg.loading">
            <div class="spinner-grow text-primary dotSpinner me-1" role="status"></div>
            <div class="spinner-grow text-primary dotSpinner me-1" role="status"></div>
            <div class="spinner-grow text-primary dotSpinner" role="status"></div>
          </div>
          <button v-show="!confirmMsg.loading" type="button" class="btn btn-secondary" data-bs-dismiss="modal">取消</button>
          <button v-show="!confirmMsg.loading" type="button" class="btn btn-primary" @click="confirmMsg.action">確定</button>
        </div>
      </div>
    </div>
</template>
<script>
import { mapGetters } from "vuex"
    export default {
        data() {
            return {
              loading: false
            }
        },
        computed:{
          ...mapGetters([
            'confirmMsg'
          ])
        },
        methods:{
        }
    }
</script>
