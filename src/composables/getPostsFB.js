import { ref } from "vue"
import  db  from "../firebase/config"
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

    const getPostsFB = () => {
    
        const posts = ref([])
        const error = ref(null)
        const loadPosts = async () => {
            
            try{

                    const postsCollection = collection(db, 'posts');
                    const getRes = await getDocs(postsCollection);
                    const postsList = getRes.docs.map(doc => doc.data());
                    // return postsList;
                    console.log(postsList);
                
                // await collection(db , 'posts')
                // .then((querySnapshot) => {
                //     querySnapshot.forEach((doc) => {
                //         // doc.data() is never undefined for query doc snapshots
                //         console.log(doc.id, " => ", doc.data());
                //     });
                // })
                // .catch((error) => {
                //     console.log("Error getting documents: ", error);
                // });
                
    
            } catch(err){
                error.value = err.message
                console.log(error.value);
            }
       }
       return {posts, error, loadPosts}
    }
    
    export default getPostsFB