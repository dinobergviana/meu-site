import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/home/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
