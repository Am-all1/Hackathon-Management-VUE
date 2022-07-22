<template>
  <!-- APPEL DU COMPOSANT EventUnique avec en props les valeurs de l'événement séléctionné grâce à l'id passé en paramètre d'URL -->
  <div class="eventDisplay">
    <EventUnique
      v-if="event.id != null"
      :name="event.name"
      :start="event.start"
      :end="event.end"
      :location="event.location"
      :event_id="event.id"
    />

    <!-- APPEL DU COMPOSANT CreateGroup AFIN D'AFFICHER LE FORMULAIRE DE CREATION DE GROUPE -->
    <div class="groupFormDisplay">
      <CreateGroup :event_id="event.id" @groupCreated="getGroupUnique" />
    </div>

    <!-- APPEL DU COMPOSANT GroupUnique AVEC UN v-for AFIN D'AFFICHER LA LISTE DES GROUPES LIES A CET EVENEMENT -->
    <div class="allGroupsInEvent">
      <GroupUnique
        v-for="group in groups"
        :key="group.id"
        :name="group.name"
        :subject="group.subject"
        :room="group.room"
        :members="group.members"
        :abilities="group.abilities"
        :group_id="group.id"
      />
    </div>
  </div>
</template>

<script>
import EventUnique from "@/components/EventUnique.vue";
import CreateGroup from "@/components/CreateGroup.vue";
import GroupUnique from "@/components/GroupUnique.vue";

export default {
  mounted() {
    this.getEventUnique();
  },
  data() {
    return {
      event: {},
      groups: [], // à vérifier : le type "tableau" est-il le plus approprié ?
    };
  },

  components: {
    EventUnique,
    CreateGroup,
    GroupUnique,
  },

  methods: {
    /* Récupération des données de l'event unique sur lequel on se trouve */
    async getEventUnique() {
      const response = await fetch(
        "http://127.0.0.1:8000/api/events/" + this.$route.params.id,
        {
          method: "GET",
          // params: { event_id: id },
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
      const data = await response.json();
      this.event = data.event;
    },

    /* Récupération de tous les groups uniques, liés à l'événement dans lequel on se trouve */
    async getGroupUnique() {
      const response = await fetch(
        // en-dessous : adapter les paramètres dynamiques afin d'utiliser l'id de l'event ____________ A VERIFIER  :o
        "http://127.0.0.1:8000/api/events/" +
          this.$route.params.id +
          "/groups/",
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
  },
};
</script>

<style scoped></style>
