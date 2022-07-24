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
      :event_id="group.event_id"
    />
  </div>
</template>

<script>
/* Import des composants */
import GroupUnique from "@/components/GroupUnique.vue";

export default {
  beforeMount() {
    this.getGroupUnique();
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
  },
};
</script>
