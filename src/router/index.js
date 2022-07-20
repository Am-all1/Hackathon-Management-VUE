import { createRouter, createWebHashHistory } from "vue-router";
import LoginView from "../views/LoginView.vue";
import NotFoundView from "../views/NotFoundView.vue";

const routes = [
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
    meta: {
      title: "A propos",
    },
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
    meta: {
      title: "login",
    },
  },
  {
    path: "/:pathMatch(.*)",
    name: "NotFound",
    component: NotFoundView,
    meta: {
      title: "404 Not Found",
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
