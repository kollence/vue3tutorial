import { createRouter, createWebHistory  } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/game',
    name: 'game',
    component: () => import(/* webpackChunkName: "about" */ '../views/Game.vue')
  },
  {
    path: '/formpage',
    name: 'formpage',
    component: () => import(/* webpackChunkName: "about" */ '../views/FormPage.vue')
  },
  {
    path: '/compositionapi',
    name: 'compositionapi',
    component: () => import(/* webpackChunkName: "about" */ '../views/CompositionPage.vue')
  },
  {
    path: '/posts',
    name: 'posts',
    component: () => import(/* webpackChunkName: "about" */ '../views/Posts.vue')
  },
  {
    path: '/post/:id',
    name: 'post',
    component: () => import(/* webpackChunkName: "about" */ '../views/Post.vue'),
    props: true
  },
  {
    path: '/create',
    name: 'create-post',
    component: () => import('../views/CreatePost.vue')
  },
  {
    path: '/tags/:tag',
    name: 'tags',
    component: () => import('../views/Tags.vue'),
    props: true
  },
  {
    path: '/firebase',
    name: 'firebase',
    component: () => import('../views/Firebase.vue'),
  }
  
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
