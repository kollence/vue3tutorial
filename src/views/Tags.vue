<template>
  <div>
      <h1>Posts with Tag: {{tag}}</h1>
    <div v-if="error">{{error}}</div>
    <div v-if="posts.length" class="postslist">
    <PostList :posts="filterByTags" />
    </div>
  <div v-else><Loader /></div>
  </div>
</template>

<script>
import PostList from '@/components/PostList.vue'
import Loader from '@/components/Loader.vue'
import getPosts from '@/composables/getPosts'
import { computed } from '@vue/runtime-core'
import { useRoute } from 'vue-router'
export default {
    name:'tags',
    components: {PostList, Loader},
    setup(){
        const route = useRoute()
        const tag = route.params.tag

        const {posts, error, loadPosts } = getPosts()

        loadPosts()

        const filterByTags = computed(() => {
            return  posts.value.filter(post => post.tags.includes(route.params.tag))
        })

        return {error, posts, filterByTags, tag}
    }

}
</script>

<style>

</style>