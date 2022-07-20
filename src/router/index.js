import { createRouter, createWebHashHistory } from "vue-router";
import LoginView from "../views/LoginView.vue";
import NotFoundView from "../views/NotFoundView.vue";
import CreateEventsView from "../views/CreateEventsView.vue";
import CreateSlotsView from "../views/CreateSlotsView.vue";
import GroupView from "../views/GroupView.vue";

const routes = [
  {
    path: "/login",
    name: "connexion",
    component: LoginView,
    meta: {
      title: "Connexion",
    },
  },

  {
    path: "/group",
    name: "group",
    component: GroupView,
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
    path: "/:pathMatch(.*)",
    name: "NotFound",
    component: NotFoundView,
    meta: {
      title: "404 Not Found",
    },
  },
  {
    path: "/create-event",
    name: "createEventAdmin",
    component: CreateEventsView,
  },
  {
    path: "/slots",
    name: "createSlots",
    component: CreateSlotsView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
