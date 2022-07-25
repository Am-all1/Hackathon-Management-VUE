<template>
  <div class="">
    <CreateEvents />
  </div>
  <hr />
  <h2>Liste des évènements:</h2>
  <Eventunique
    v-for="event in events"
    :key="event.id"
    :name="event.name"
    :start="event.start"
    :end="event.end"
    :location="event.location"
    :event_id="event.id"
  />
</template>

<script>
import CreateEvents from "@/components/CreateEvents.vue";
import Eventunique from "@/components/Eventunique.vue";

export default {
  components: {
    CreateEvents,
    Eventunique,
  },
  data() {
    return {
      events: [],
      token: localStorage.getItem("savedUserToken"),
    };
  },
  mounted() {
    this.getEvents();
  },
  methods: {
    /* Récupération des events */
    async getEvents() {
      const response = await fetch("http://127.0.0.1:8000/api/events", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${localStorage.getItem("savedUserToken")}`,
        },
      });
      const data = await response.json();
      this.events = data.events;
    },
  },
};
</script>

<style scoped></style>
