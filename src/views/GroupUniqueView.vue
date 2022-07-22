<template>
  <div class="groupDisplay">
    <GroupUnique
      v-if="group.id != null"
      :name="group.name"
      :subject="group.subject"
      :room="group.room"
      :members="group.members"
      :abilities="group.abilities"
      :group_id="group.id"
    />
  </div>
</template>

<script>
/* Import des composants */
import GroupUnique from "@/components/GroupUnique.vue";

export default {
  /* Enregistrement des composents utilisés */
  components: {
    GroupUnique,
  },
  /* Récupération de tous les groups uniques, liés à l'événement dans lequel on se trouve */
  async getGroupUnique() {
    const response = await fetch(
      // en-dessous : adapter les paramètres dynamiques afin d'utiliser l'id de l'event
      "http://127.0.0.1:8000/api/groups/", // + this.$route.params.id, //
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    const data = await response.json();
    this.groups = data.groups;
  },
};
</script>
