<template>
  
  <div v-if="error">{{error}}</div>
  <div v-if="post">
    <h1>{{post.title}}</h1>
    <p>{{post.body}}</p>
    <div>
          <div class="pill" v-for="skill in post.tags" :key="skill">
            <router-link :to="{name: 'tags', params: {tag: skill}}">{{ skill }} </router-link>
          </div>
        </div>
  </div>
  
  <div v-else><Loader /></div>
</template>

<script>
import getPost from '@/composables/getPost'
import Loader from '@/components/Loader.vue'
export default {
name: 'post',
props: ['id'],
components: {
Loader
},
setup(props){

    const {post, error, loadPost} = getPost(props.id)

    loadPost()
    return {post,error}
}
}
</script>

<style>

</style>