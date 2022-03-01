<template>
  <div class="post">
        <router-link :to="{name: 'post', params: {id: post.id}}">
        <h2>{{post.title}}</h2>
        </router-link>
        <p>{{snippet}}</p>
        <div>
          <div class="pill" v-for="skill in post.tags" :key="skill">
            <router-link :to="{name: 'tags', params: {tag: skill}}"> {{ skill }} </router-link>
          </div>
        </div>
        <small>user id {{post.userId}}</small>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
export default {
props: ['post'],
setup(props){
const snippet = computed(() => {
        return props.post.body.substring(0,100) +'...'
    })
return {snippet}
},
}
</script>

<style>
.post {
  border: 1px solid black;
  margin-bottom: 5px;
  padding: 3em;
  border-radius: 5px;
}
</style>