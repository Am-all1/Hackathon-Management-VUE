import { createRouter, createWebHashHistory } from "vue-router";
import LoginView from "../views/LoginView.vue";
import NotFoundView from "../views/NotFoundView.vue";
import CreateEventsView from "../views/CreateEventsView.vue";
import GroupView from "../views/GroupView.vue";
import EventUniqueView from "../views/EventUniqueView.vue";
import ProfilView from "../views/ProfilView.vue";
import CreateSlotsView from "../views/CreateSlotsView.vue";
import CreateUserView from "../views/CreateUserView.vue";
import GroupView from "../views/GroupView.vue";
import ModifyProfilView from "../views/ModifyProfilView.vue";
import Abilities from "../components/Abilities.vue"
import GroupUniqueView from "../views/GroupUniqueView.vue";

const routes = [
  {
    path: "/group",
    name: "group",
    component: GroupView,
  },

  {
    path: "/login",
    name: "connexion",
    component: LoginView,
  },

  {
    path: "/create-user",
    name: "creation de compte",
    component: CreateUserView,
  },
  // {
  //   path: "/about",
  //   name: "about",
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  //   meta: {
  //     title: "A propos",
  //   },
  // },

  {
    path: "/modifications",
    name: "Modification de profil",
    component:ModifyProfilView,
  },

  {
    path: "/profil/",
    name: "profil",
    component: ProfilView,
  },

  {
    path: "/:pathMatch(.*)",
    name: "NotFound",
    component: NotFoundView,
  },

  {
    path: "/create-event",
    name: "createEventAdmin",
    component: CreateEventsView,
  },

  {
    path: "/eventunique/:id",
    name: "EventUnique",
    component: EventUniqueView,
    props: true,
  },

  {
    path: "/groupuniqueshow/:id",
    name: "GroupUniqueShow",
    component: GroupUniqueView,
    props: true,
  },

  {
    path: "/slots",
    name: "createSlots",
    component: CreateSlotsView,
  },

  {
    path: "/abilities",
    name: "Competences",
    component:Abilities,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
