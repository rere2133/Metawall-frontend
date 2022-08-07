<template>
<div>
    {{test}}
    <button class="btn" @click="test = !test">test</button>
   <!-- Button trigger modal -->
<button type="button" class="btn btn-primary" id="trigger" ref="trigger">
  Launch demo modal
</button>

<!-- Modal -->
<!-- <div class="modal fade show" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-modal="true" role="dialog" style="display: block;"> -->
<div class="modal fade" id="target" ref="target" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
</div>
    
</template>
<script>
    import { Modal } from "bootstrap"
    export default {
        data() {
            return {
                test: false,
            }
        },
        mounted(){
          console.log(this.$refs.trigger);
            // const trigger = this.$slots['trigger'][0].elm
            // const target = this.$slots['target'][0].elm
            const trigger = this.$refs.trigger
            const target = this.$refs.target
            trigger.addEventListener('click',()=>{
              const myModal = new Modal(target,{})
              myModal.show()
            })
        }
    }
</script>
<style lang="scss" scoped>

</style>