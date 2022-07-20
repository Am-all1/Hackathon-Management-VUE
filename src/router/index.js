import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ConnexionView from "../views/ConnexionView.vue";
import NotFoundView from "../views/NotFoundView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      title: "Accueil",
    },
  },
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
    path: "/connexion",
    name: "Connexion",
    component: ConnexionView,
    meta: {
      title: "Connexion",
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
