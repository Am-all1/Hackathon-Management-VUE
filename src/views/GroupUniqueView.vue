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

  <!-- APPEL DU COMPOSANT QUI PERMET D'AJOUTER UN PARTICIPANT AU GROUPE QUE L'ON CONSULTE -->
  <div class="addUserFormDisplay">
    <h2>AJOUTER UN USER DANS CE GROUPE</h2>
    <UserInGroup />
  </div>

  <hr />
  <!-- APPEL DU COMPOSANT QUI AFFICHE LES PARTICIPANTS INSCRITS DANS LE GROUPE QUE L'ON CONSULTE, avec un v-for -->
  <div class="allUsersInGroup">
    <h2>Liste des utilisateurs dans ce groupe :</h2>
    <ShortProfile
      v-for="user in users"
      :key="user.id"
      :firstname="user.firstname"
      :lastname="user.lastname"
      :email="user.email"
      :user_id="user.id"
    />
  </div>
</template>

<script>
/* Import des composants */
import GroupUnique from "@/components/GroupUnique.vue";
import UserInGroup from "@/components/UserInGroup.vue";
import ShortProfile from "@/components/ShortProfile.vue";

export default {
  beforeMount() {
    this.getGroupUniqueWithUsers();
    //this.getGroupUsers(); // PAS UTILE SI getGroupUniqueWithUsers APPORTE LES UTILISATEURS -> à tester
  },

  /* Enregistrement des composents utilisés */
  components: {
    GroupUnique,
    UserInGroup,
    ShortProfile,
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
  },
};
</script>
