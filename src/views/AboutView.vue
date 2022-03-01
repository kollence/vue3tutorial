<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Modal @close="closeModal" :theme="theme" :showModal="showModal">
      <h1>Modal about</h1>
      <p>AAAaasd</p>
      <template v-slot:links>
        <a href="#">Gubi se</a>
        <a @click="toggleModal('showModal')" href="#">Idi kuci</a>
      </template>
    </Modal>
    <button @click="toggleModal('showModal')">Open Moda About</button>
  </div>
</template>
<script>
import Modal from "@/components/Modal.vue";

export default {
  components: {
    Modal,
  },
  data() {
    return {
      theme: "szs",
      showModal: false,
    };
  },
  methods: {
    closeModal() {
      this.showModal = !this.showModal;
    },
    toggleModal(modal) {
      this.$data[modal] = !this.$data[modal];
    },
  },
};
</script>