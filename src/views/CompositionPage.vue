<template>
  <h1>Composition API</h1>
  <div style="border: 1px solid red;padding:20px;">
      <h3>Refs</h3>
      <hr>
  <div @click="fClickTest">
      Name:{{name}}
      <br> Age: {{age}}
      
  </div>
  <hr>
  <div ref="div">
          <div>refs: name, age and div element</div>
          <input type="text" name="" v-model="name">
          <button @click="age++">add age {{age}}</button>
      </div>
  </div>
  <div style="border: 1px solid red;padding:20px;">
      <h3>reactiv refs</h3>
      <hr>
  <div @click="updateNinjaOne">
      Name:{{ninjaOne.name}}
      <br> Age: {{ninjaOne.age}}
      <hr>
  </div>
  <div @click="updateNinjaTwo">
      Name:{{ninjaTwo.name}}
      <br> Age: {{ninjaTwo.age}}
      <hr>
  </div>

  </div>
  <div style="border: 1px solid red;padding:20px;">
      <h3>Computed </h3>
        <div>
            <input type="text" name="" v-model="search">
            <div v-for="name in searchListNames" :key="name">
                {{name}}
            </div>
        </div>
  </div>
</template>

<script>
import { ref, reactive } from '@vue/reactivity';
import { computed, watch } from '@vue/runtime-core';
export default {
    name: 'compositionapi',
    setup(){
        //refs
        let div = ref(null);
        const name = ref('Bjesovi');
        const age = ref(23);
        //reactove refs
        const ninjaOne = ref({name: 'Nakitu Ref', age:42})
        const ninjaTwo = reactive({name: 'Yoshi Reactiv', age:44})

        //computed
        const search = ref('')
        const list = ref(['pera', 'mika','zika', 'laza', 'milos', 'pizdec'])


        const fClickTest = () => {
            // console.log(div.value)
            // div.value.innerHTML = '<h1>aaa</h1>'
            name.value= "Vreme je"
            age.value= 35
        }

        const updateNinjaOne = () => {
            ninjaOne.value.age = 43
        }
        const updateNinjaTwo = () => {
            ninjaTwo.age = 45
        }

        const searchListNames = computed(() => {
            return list.value.filter(name => name.includes(search.value))
        })


        return {
            name,
            age,
            fClickTest,
            div,

            ninjaOne,
            ninjaTwo,
            updateNinjaOne,
            updateNinjaTwo,

            search,
            searchListNames
        }
    }

}
</script>

<style>

</style>