import { createRouter, createWebHashHistory } from "vue-router";
import LoginView from "../views/LoginView.vue";
import NotFoundView from "../views/NotFoundView.vue";
import CreateEventsView from "../views/CreateEventsView.vue";
import GroupView from "../views/GroupView.vue";
import EventuniqueView from "../views/EventuniqueView.vue";
import ProfilView from "../views/ProfilView.vue";
import CreateSlotsView from "../views/CreateSlotsView.vue";
import CreateUserView from "../views/CreateUserView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
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
  },

  {
    path: "/connexion",
    name: "Connexion",
    component: ConnexionView,
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

  {
    path: "/profil",
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
    name: "eventunique",
    component: EventuniqueView,
    props: true,
  },

  {
    path: "/slots",
    name: "createSlots",
    component: CreateSlotsView,
  },
];
