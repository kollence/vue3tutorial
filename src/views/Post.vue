<template>
  <div v-if="error">{{ error }}</div>
  <div v-if="post">
    <h1>{{ post.title }}</h1>
    <p>{{ post.body }}</p>
    <div>
      <div class="pill" v-for="skill in post.tags" :key="skill">
        <router-link :to="{ name: 'tags', params: { tag: skill } }"
          >{{ skill }}
        </router-link>
      </div>
    </div>
    <button @click="removePost">Delete</button>
  </div>
  <div v-else><Loader /></div>
</template>

<script>
import { doc, deleteDoc } from "firebase/firestore/lite";
import db from '@/firebase/config.js'

import { useRouter } from 'vue-router';
import getPost from "@/composables/getPost";
import Loader from "@/components/Loader.vue";
export default {
  name: "post",
  props: ["id"],
  components: {
    Loader,
  },
  setup(props) {

    const router = useRouter()

    const { post, error, loadPost } = getPost(props.id);

    loadPost();

    const removePost = async () => {
        await deleteDoc(doc(db, "posts", props.id));
        router.push({name: 'posts'})
    }


    return { post, error, removePost };
  },
};
</script>

<style>
</style>