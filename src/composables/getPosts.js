import { ref } from "vue"
import  db  from "../firebase/config"
import { query, orderBy, collection, getDocs } from 'firebase/firestore/lite';


const getPosts = () => {

    const posts = ref([])
    const error = ref(null)

    const loadPosts = async () => {
        try{
                const postsCollection = collection(db, 'posts');
                const q = query(postsCollection, orderBy("createdAt", 'desc'));
                const getRes = await getDocs(q);
                posts.value = getRes.docs.map(doc => {
                    return {...doc.data(), id: doc.id}
                });

        } catch(err){
            error.value = err.message
            console.log(error.value);
        }
        
   }
   return {posts, error, loadPosts}
}

export default getPosts