<template>
  <!-- APPEL DU COMPOSANT GroupUnique AFIN D'AFFICHER LES INFOS DU GROUPE QUE L'ON CONSULTE -->
  <div class="groupDisplay">
    <GroupUnique
      v-if="group.id != null"
      :name="group.name"
      :subject="group.subject"
      :room="group.room"
      :members="group.members"
      :abilities="group.abilities"
      :group_id="group.id"
      :event_id="group.event_id"
    />
  </div>
  <hr />

  <!-- APPEL DU COMPOSANT QUI PERMET D'AFFICHER TOUS LES PARTICIPANTS DE L EVENT -->
  <div class="addUserFormDisplay">
    <h2>AJOUTER UN USER DANS CE GROUPE</h2>
<<<<<<< HEAD
    <UsersInEvent
      :event_id="group.event_id"
      @UserAdded="getGroupUniqueWithUsers"
    />
  </div>

  <hr />
  <!-- APPEL DU COMPOSANT QUI AFFICHE LES PARTICIPANTS INSCRITS DANS LE GROUPE QUE L'ON CONSULTE -->
  <!-- <div class="allUsersInGroup">
    <h2>Liste des utilisateurs dans ce groupe :</h2>
    <UsersInGroup :user_id="user.id" :group_id="group.id" />
  </div> -->
=======
    <AddUserToGroup @UserAdded="getGroupUniqueWithUsers" />
  </div>

  <hr />
  <!-- APPEL DU COMPOSANT QUI AFFICHE LES PARTICIPANTS INSCRITS DANS LE GROUPE QUE L'ON CONSULTE, avec un v-for -->
  <div class="allUsersInGroup">
    <h2>LISTE DES UTILISATEURS DE CE GROUPE</h2>
    <!-- SI ON PEUT FAIRE MIEUX POUR L'AFFICHE DU TITRE DE TABLEAU, ALORS BANCO -->
    <ShortProfile
      v-for="user in users"
      :key="user.id"
      :firstname="user.firstname"
      :lastname="user.lastname"
      :email="user.email"
      :user_id="user.id"
    />
  </div>
>>>>>>> 3bd952e081206df5d4f419c74e6e1393b93b931b
</template>

<script>
/* Import des composants */
import GroupUnique from "@/components/GroupUnique.vue";
<<<<<<< HEAD
import UsersInEvent from "@/components/UsersInEvent.vue";
import UsersInGroup from "@/components/UsersInGroup.vue";
=======
import ShortProfile from "@/components/ShortProfile.vue";
import AddUserToGroup from "@/components/AddUserToGroup.vue";
import ArrayHead from "@/components/ArrayHead.vue";
>>>>>>> 3bd952e081206df5d4f419c74e6e1393b93b931b

export default {
  beforeMount() {
    this.getGroupUniqueWithUsers();
  },

  /* Enregistrement des composents utilisés */
  components: {
    GroupUnique,
<<<<<<< HEAD
    UsersInEvent,
    UsersInGroup,
=======
    ShortProfile,
    AddUserToGroup,
    ArrayHead,
>>>>>>> 3bd952e081206df5d4f419c74e6e1393b93b931b
  },

  data() {
    return {
      group: [],
      users: [],
    };
  },
  methods: {
    /**
     *
     * Récupération du groupe à afficher, à partir de son id passé dynamiquement (params : group_id)
     *
     * => on récupère les utilisateurs de ce groupe directement avec (grâce aux interconnections de tables via le pivot group_users)
     *
     * */
    async getGroupUniqueWithUsers() {
      const response = await fetch(
        "http://127.0.0.1:8000/api/groups/" + this.$route.params.group_id,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
      const data = await response.json();
      this.group = data.group;
      this.users = data.users;
      console.log("Affichage des users du groupe :" + data.users);
    },
<<<<<<< HEAD
=======
    /* Récupération des utilisateurs qui font partie de ce groupe

    *************************** CETTE PARTIE-CI N'EST PAS UTILE SI LA FONCTION getGroupUniqueWithUsers donne les utilisateurs


    async getGroupUsers() {
      const response = await fetch(
        "http://127.0.0.1:8000/api/groups/" + this.$route.params.group_id,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
      const data = await response.json();
      this.group = data.group;
    },

    */
>>>>>>> 3bd952e081206df5d4f419c74e6e1393b93b931b
  },
};
</script>
