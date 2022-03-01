<template>
  <div class="block" v-if="showBlock" @click="stopTimer">
      click me
  </div>
</template>

<script>
export default {
name: 'block',
 props: ['delay'],
 data(){
     return{
         showBlock: false,
         timer: null,
         reactionTime: 0,
     }
 },
 methods: {
     startTimer(){
         this.timer = setInterval(()=> {
             this.reactionTime += 10
         }, 10)
     },
     stopTimer(){
         clearInterval(this.timer)
         this.$emit('endGame', this.reactionTime)
     },
 },
 mounted(){
     setTimeout(()=>{
        this.startTimer()
        this.showBlock =  true
     }, this.delay)
 }
}

</script>

<style>
.block {
    width: 500px;
    border-radius: 20px;
    background: #0faf87;
    color: wheat;
    text-align: center;
    padding: 100px 0;
    margin: 40px auto;
}
</style>