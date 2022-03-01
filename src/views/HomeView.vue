<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <Modal
      :theme="theme"
      :showModal="showModal"
      @close="toggleModal('showModal')"
    >
      <template v-slot:links>
        <a @click="toggleModal('showModal')" href="#">Zatvori</a>
        <a href="#">Ok</a>
      </template>
      <h1>Text header</h1>
      <p>Paragraf text</p>
    </Modal>
    <Modal
      :theme="theme"
      :showModal="toggleModaltwov"
      @close="toggleModal('toggleModaltwov')"
    >
      <template v-slot:links>
        <a @close="toggleModaltwo" href="#">Duvaj shupak</a>
        <a @click="toggleModal('toggleModaltwov')" href="#">cancel</a>
      </template>
      <h1>trecy</h1>
      <p>treci text</p>
    </Modal>
    <button @click="toggleModal('showModal')">Modal</button>
    <button @click="toggleModal('toggleModaltwov')">Modal drugi</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Modal from "@/components/Modal.vue";

export default {
  name: "HomeView",
  data() {
    return {
      text: "neki title",
      header: "Header tekst",
      theme: "saaa",
      showModal: false,
      toggleModaltwov: false,
    };
  },
  components: {
    HelloWorld,
    Modal,
  },
  methods: {
    toggleModal(modal) {
      this.$data[modal] = !this.$data[modal];
    },
    // toggleModaltwo() {
    //   this.toggleModaltwov = !this.toggleModaltwov
    // }
  },
};
</script>
