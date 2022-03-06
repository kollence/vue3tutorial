<template>
   <div>
       {{counter.count}}
       <button @click="counter.increment">add</button>
   </div>
</template>

<script>
import { useCounterStore } from '@/store/counter'

export default {
  setup() {
    const counter = useCounterStore()

    
    return {counter}
  },
}
</script>

<style>

</style>
