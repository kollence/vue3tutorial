
import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
     apiKey: "AIzaSyDcG9fzZzstOmcGABry-KvFGxY-ocWzi4A",
    authDomain: "quickstart-vue3.firebaseapp.com",
    projectId: "quickstart-vue3",
    storageBucket: "quickstart-vue3.appspot.com",
    messagingSenderId: "628819970455",
    appId: "1:628819970455:web:f4e3d58db4e7051f5d9cd2"   
}
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// const firebaseApp = firebase.initializeApp(config);
// const timestamp = firebase.firestore.FieldValue.serverTimestamp;
// Initialize Cloud Firestore through Firebase
// import { initializeApp } from "firebase/app"
// import { getFirestore } from "firebase/firestore"
// export {timestamp }
export default db

// const firebaseApp = initializeApp({
//     apiKey: "AIzaSyDcG9fzZzstOmcGABry-KvFGxY-ocWzi4A",
//     authDomain: "quickstart-vue3.firebaseapp.com",
//     projectId: "quickstart-vue3",
//     storageBucket: "quickstart-vue3.appspot.com",
//     messagingSenderId: "628819970455",
//     appId: "1:628819970455:web:f4e3d58db4e7051f5d9cd2"
// });

// const db = getFirestore();
// export { db}