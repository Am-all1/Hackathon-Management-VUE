import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CreateEventsView from "../views/CreateEventsView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
  },
  {
    path: "/create-event",
    name: "createEventAdmin",
    component: CreateEventsView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
