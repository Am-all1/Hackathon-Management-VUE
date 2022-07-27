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
</template>

<script>
/* Import des composants */
import GroupUnique from "@/components/GroupUnique.vue";
import UsersInEvent from "@/components/UsersInEvent.vue";
import UsersInGroup from "@/components/UsersInGroup.vue";

export default {
  beforeMount() {
    this.getGroupUniqueWithUsers();
  },

  /* Enregistrement des composents utilisés */
  components: {
    GroupUnique,
    UsersInEvent,
    UsersInGroup,
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
  },
};
</script>
