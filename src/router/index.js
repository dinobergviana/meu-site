import { createRouter, createWebHistory } from "vue-router";

import HomePage from "../pages/home/Home.vue";
import GCManagerPage from "../pages/projects/gc-manager/gc-manager.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/projects/gc-manager",
    name: "GCManagerPage",
    component: GCManagerPage,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
