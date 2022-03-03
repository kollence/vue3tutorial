import { ref } from "vue"
import  db  from "../firebase/config"
import { doc, getDoc } from 'firebase/firestore/lite';

const getPost = (id) => {

    const post = ref(null)
    const error = ref(null)
    const loadPost = async () => {
        
        try{
            const postCollection = doc(db, 'posts', id);
                const getRes = await getDoc(postCollection);
                if (getRes.exists()) {
                    post.value = {...getRes.data(), id: getRes.id}
                    // console.log("Document data:", post.value);
                  } else {
                      throw Error("This post does not exists")
                    // console.log("No such document!");
                  }

        } catch(err){
            error.value = err.message
            console.log(error.value);
        }
   }
   return {post, error, loadPost}
}

export default getPost