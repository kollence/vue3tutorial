<template>
  <div v-if="showModal" class="backdrop" @click.self="closeModal">
      <div class="modal" :class="{ sale: theme === 'sale' }">
          <slot>Default</slot>
          <div class="actions">
            <slot name="links"></slot>
              
          </div>
      </div>
  </div>
</template>

<script>
export default {
    props: ['theme', 'showModal'],
    methods:{
        closeModal(){
            this.$emit('close')
        }
    }
}
</script>

<style>
.modal {
    width: 400px;
    padding: 20px;
    margin: 100px auto;
    background: white;
    border-radius: 10px;
}
.backdrop {
    top: 0;
    position: fixed;
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
}
.modal h1 {
    color: green;
    padding: 0;
}
.modal.sale{
    background: crimson;
    color: wheat;
}
.modal.sale h1{
    color: rgb(255, 199, 96);
}
.modal .actions {
    text-align: center;
    margin:  30px 0 10px 0;
}
.modal .actions a{
    color: #333;
    padding: 8px;
    border: 1px solid gray;
    text-decoration: none;
    border-radius: 4px;
    margin: 10px;
}
</style>