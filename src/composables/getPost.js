import { ref } from "vue"

const getPost = (id) => {

    const post = ref(null)
    const error = ref(null)
    const loadPost = async () => {
        
        try{
            // await new Promise(res => {
            //     setTimeout(res, 3000)
            // })
            let data = await fetch(`http://localhost:3000/posts/${id}`)
            // console.log(data);
            if(!data.ok){
                throw Error('data not avaliable')
            }
             post.value = await data.json()

        } catch(err){
            error.value = err.message
            console.log(error.value);
        }
   }
   return {post, error, loadPost}
}

export default getPost