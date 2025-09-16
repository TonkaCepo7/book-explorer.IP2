import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Books from "../pages/Books.vue";
import ManageBooks from "../pages/ManageBooks.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/books", name: "Books", component: Books },
  { path: "/manage", name: "ManageBooks", component: ManageBooks },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
