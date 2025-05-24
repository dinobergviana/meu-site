import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/home/Home.vue";
// import MiniGame from "../pages/mini-game/index.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/mini-game",
    name: "MiniGame",
    component: () => import("../pages/mini-game/index.vue")
  }
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
