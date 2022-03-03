<template>
  
<h1>json-server home</h1>
<small>fetch api from file data/db.json with json-server <br>
  to start after npm installation json-server --watch data/db.json --port 3000
   </small>
  <div v-if="error">{{error}}</div>
  <div v-if="posts.length" class="postslist">
  <div class="actions"><router-link to="/create">Create</router-link></div>
  <div style="display: flex;">
  <PostList :posts="posts" />
  <TagList :posts="posts" />
  </div>

  </div>
  <div v-else><Loader /></div>
</template>

<script>
import PostList from "@/components/PostList.vue";
import Loader from '@/components/Loader.vue'
import TagList from '@/components/TagList.vue'
import getPostsFB from '@/composables/getPostsFB'
export default {
    name: 'jsonserver',
      components: {
    PostList, Loader,TagList
  },
    setup(){

       const {posts, error, loadPosts} = getPostsFB()
    loadPosts()
    return {posts, error}
    }

}
</script>

<style>

</style>