<template>
  <div>
    <form class="form" @submit.prevent="submitForm">
      <label for="title">Title</label>
      <input v-model="title" type="text" name="title" required />
      <label for="body">Text</label>
      <textarea v-model="body" name="body" required></textarea>
      <label for="tags">Tags (hit enter to add tag)</label>
      <input v-model="tag" type="text" name="tags" @keydown.enter.prevent="addTag" />
      <div>
        <div class="pill" v-for="skill in tags" :key="skill">
            {{ skill }} <a @click="removeSkill(skill)">&times;</a>
        </div>
        </div>
      <div class="submit">
        <button>Submit</button>
      </div>

    </form>
    <p>Title: {{title}}</p>
    <p>Body: {{body}}</p>
    <p>Tag : {{tag}}</p>
    <p>{{tags}}</p>
  </div>
</template>

<script>
import { collection, addDoc } from "firebase/firestore/lite"; 
import { ref } from "@vue/reactivity";
import db from '@/firebase/config.js'
import createPost from '@/composables/createPost'
import { useRouter } from 'vue-router';
export default {
  name: "form-post",
  setup() {

    const title = ref("");
    const body = ref("");
    const tag = ref("");
    const tags = ref([]);

    const router = useRouter()

    const addTag = () => {
        if(tags.value.includes(tag.value) === false){
            tags.value.push(tag.value)
        } 
        tag.value = ''
    }
    const removeSkill = (skill) => {
      tags.value.splice(tags.value.indexOf(skill), 1);
    }
    const submitForm = async () => {
        // const id = Math.floor(Math.random() * (99 - 10 + 1)) + 10
        let data = {title: title.value, body: body.value, tags: tags.value}
          try {
            const docRef = await addDoc(collection(db, "posts"),
            data);
              console.log("Document written with ID: ", docRef.id);
          } catch (e) {
              console.error("Error adding document: ", e);
          }
        router.push({name: 'posts'})
        // console.log(data);
    }

    return { title, body, tag, tags, addTag, removeSkill, submitForm };
  },
};
</script>

<style>
</style>