import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Sandbox from "../views/Sandbox.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/sandbox",
    name: "Sandbox",
    component: Sandbox,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
