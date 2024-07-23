import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/home/Home.vue'
import MyJourneyPartOne from '../pages/my-journey/my-journey-part-one.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/minha-jornada-parte-um',
    name: 'MyJourneyPartOne',
    component: MyJourneyPartOne
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})

