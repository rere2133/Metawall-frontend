<template>
<div>
    {{test}}
    <button class="btn" @click="test = !test">test</button>
   <!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>

<!-- Modal -->
<div class="modal fade show" :class="{'show':test}" id="exampleModal" tabindex="-1" aria-modal="true" aria-labelledby="exampleModalLabel">
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
    export default {
        data() {
            return {
                test: false,
            }
        }
    }
</script>
<style lang="scss" scoped>

</style>