<template>
  <h1>Rezultatishen: {{result}} ms</h1>
  <p>Your level of rank: {{rank}}</p>
</template>

<script>
export default {
props: ['result'],
data(){
    return {
        rank: null
    }
},
mounted(){
    if(this.result < 250){
        this.rank = 'Ninja fingers'
    }else if(this.result < 350){
        this.rank = 'Rapid reflex'
    }else {
        this.rank = 'You suck'
    }
}
}
</script>

<style>

</style>