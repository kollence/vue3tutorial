import { ref } from "vue"


const getTags = (posts) => {
   const tags = ref([])
   const tagSet = new Set()

   posts.forEach(p => p.tags.forEach(t => tagSet.add(t)))

   tags.value = [...tagSet]

   return {tags}
}

export default getTags