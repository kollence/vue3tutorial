<template>
  <div class="tags">
      <div v-for="tag in tags" :key="tag" class="pill">
          <router-link :to="{name: 'tags', params: {tag: tag}}"> {{tag}} </router-link>
        </div>
  </div>
</template>

<script>
import getTags from '@/composables/getTags'

export default {
name:'taglist',
props: ['posts'],
    setup(props){

        const { tags } = getTags(props.posts)

        return {tags}
    }
}
</script>

<style>
.tags{
    max-width: 33%;
    padding: 2em;
}
</style>