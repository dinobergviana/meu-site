import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/home/Home.vue'
import AboutMe from '../pages/about/About.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/about-me',
    name: 'About',
    component: AboutMe,
    meta: {
      seoTitle: 'Instruções'
    }
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})

