<template>
  
<h1>Firebase home</h1>
</template>

<script>
import getPostsFB from '@/composables/getPostsFB'
export default {
    setup(){

        const {loadPosts} = getPostsFB()
        loadPosts()
        return {}
    }

}
</script>

<style>

</style>