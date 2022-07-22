<template>
  <div class="">
    <CreateEvents @created="getEvents" />
  </div>
  <hr />
  <h2>Liste des évènements:</h2>

  <EventUnique
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
import EventUnique from "@/components/EventUnique.vue";

export default {
  components: {
    CreateEvents,
    EventUnique,
  },
  data() {
    return {
      events: [],
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
        },
      });
      const data = await response.json();
      this.events = data.events;
    },
  },
};
</script>

<style scoped></style>
