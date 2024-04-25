import { createRouter, createWebHistory } from "vue-router";
import Hello from "./components/pages/Hello.vue";
import Home from "./components/pages/Home.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/hello", name: "Hello", component: Hello },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
