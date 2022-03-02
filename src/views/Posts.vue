<template>
  <h1>Posts</h1>
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
import getPosts from "@/composables/getPosts"
import Loader from '@/components/Loader.vue'
import TagList from '@/components/TagList.vue'

export default {
  name: "posts",
  components: {
    PostList, Loader,TagList
  },
  setup() {

    const {posts, error, loadPosts} = getPosts()
    loadPosts()
    return {posts, error}
  },
  
};
</script>

<style>
.postslist{
  text-align: left;
  padding: 0 2em;
  margin:1em;
  border: 1px solid black;
  border-radius: 10px;
}
.actions {
  text-align: right;
}
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
</style>