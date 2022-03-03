import { ref } from "vue"

    const getPostsFB = () => {
    
        const posts = ref([])
        const error = ref(null)


       const loadPosts = async () => {
        
        try{
            let data = await fetch('http://localhost:3000/posts')
            // console.log(data);
            if(!data.ok){
                throw Error('data not avaliable')
            }
             posts.value = await data.json()

        } catch(err){
            error.value = err.message
            console.log(error.value);
        }
   }
   return {posts, error, loadPosts}
    }
    
    export default getPostsFB