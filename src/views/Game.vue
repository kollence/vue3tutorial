<template>
  <h1>Ninja timer</h1>
  <button @click="start" :disabled="isPlaying">Play</button>
  <Block v-if="isPlaying" :delay="delay" @endGame="stop" />
  <Results :result="result" v-if="!isPlaying" />
</template>

<script>
import Block from "@/components/Block.vue";
import Results from "@/components/Results.vue";
export default {
  name: "game",
  components: {
    Block,
    Results,
  },
  data() {
    return {
      isPlaying: false,
      delay: null,
      result: 0,
    };
  },
  methods: {
    start() {
      this.delay = 2000 + Math.random() * 5000;
      this.isPlaying = true;
      // console.log(this.delay);
    },
    stop(data) {
      this.isPlaying = false;
      this.result = data;
    },
  },
};
</script>

<style scoped>
button {
    background: #0faf87;
    color: whitesmoke;
    border: 1px solid rebeccapurple;
    border-radius: 15px;
    padding: 7px 15px;
    cursor:pointer;
    font-size: 1rem;
    margin: 10px;
    letter-spacing: 2px;
}

button[disabled] {
    opacity: 0.2;
    cursor: not-allowed;
}
</style>