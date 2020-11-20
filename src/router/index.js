import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Explorer from "@/views/Explorer.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/explorer",
    name: "Explorer",
    component: Explorer,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
