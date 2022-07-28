import { createRouter, createWebHashHistory } from "vue-router";
import LoginView from "../views/LoginView.vue";
import DisconnectedView from "../views/DisconnectedView.vue";
import NotFoundView from "../views/NotFoundView.vue";
import EventListView from "../views/EventListView.vue";
import EventUniqueView from "../views/EventUniqueView.vue";
import MyProfileView from "../views/MyProfileView.vue";
import CreateSlotsView from "../views/CreateSlotsView.vue";
import CreateUserView from "../views/CreateUserView.vue";
import AdminView from "../views/AdminView.vue";
import GroupView from "../views/GroupView.vue";
import ModifyProfilView from "../views/ModifyProfilView.vue";
import Abilities from "../components/Abilities.vue"; // A laisser pour tester l'affichage
import GroupUniqueView from "../views/GroupUniqueView.vue";
import HomeView from "../views/HomeView.vue";
import QrGenerator from "../components/QrGenerator.vue";
import PageQrCodeView from "../views/PageQrCodeView.vue";
import TestHomeView from "../views/TestHomeView.vue";

const routes = [
  {
    path: "/home",
    name: "home",
    component: HomeView,
  },

  {
    path: "/qrgenerator",
    name: "qr code",
    component: QrGenerator,
  },
  {
    path: "/home",
    name: "home",
    component: TestHomeView,
  },

  {
    path: "/pageqrcode",
    name: "pageqrcode",
    component: PageQrCodeView,
  },
  {
    path: "/login",
    name: "connexion",
    component: LoginView,
  },
  {
    path: "/group",
    name: "group",
    component: GroupView,
  },

  {
    path: "/disconnected",
    name: "deconnexion",
    component: DisconnectedView,
  },

  {
    path: "/create-user/:event_id",
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
    component: ModifyProfilView,
  },

  {
    path: "/mon-profil/",
    name: "mon-profil",
    component: MyProfileView,
    props: true,
  },

  {
    path: "/:pathMatch(.*)",
    name: "NotFound",
    component: NotFoundView,
  },

  {
    path: "/eventlist",
    name: "eventlist",
    component: EventListView,
  },

  {
    path: "/eventunique/:event_id",
    name: "EventUnique",
    component: EventUniqueView,
    props: true,
  },

  {
    path: "/groupuniqueshow/:group_id",
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
    path: "/admin",
    name: "admin",
    component: AdminView,
  },

  {
    path: "/abilities",
    name: "Competences",
    component: Abilities,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
