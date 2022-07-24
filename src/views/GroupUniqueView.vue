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
  </div>

  <hr />
  <!-- APPEL DU COMPOSANT QUI AFFICHE LES PARTICIPANTS INSCRITS DANS LE GROUPE QUE L'ON CONSULTE, avec un v-for -->
  <div class="allUsersInGroup">
    <h2>ICI LA LISTE DES PARTICIPANTS INSCRITS DANS CE GROUPE</h2>
  </div>
</template>

<script>
/* Import des composants */
import GroupUnique from "@/components/GroupUnique.vue";

export default {
  beforeMount() {
    this.getGroupUnique();
    //this.getGroupUsers();
  },
  /* Enregistrement des composents utilisés */
  components: {
    GroupUnique,
  },

  data() {
    return {
      group: [],
    };
  },
  methods: {
    /* Récupération du groupe à afficher, à partir de son id passé dynamiquement (params : group_id) */
    async getGroupUnique() {
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

    /* Récupération des utilisateurs qui font partie de ce groupe  */
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
  },
};
</script>
