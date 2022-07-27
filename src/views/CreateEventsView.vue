<template>
  <div class="">
    <CreateEvents @created="getEvents" />
  </div>
  <hr />
  <h2>Liste des évènements:</h2>
  <div>
    <form>
      <EventUnique
        v-for="event in events"
        :key="event.id"
        :name="event.name"
        :start="event.start"
        :end="event.end"
        :location="event.location"
        :event_id="event.id"
      />
    </form>
  </div>
</template>

<script>
import CreateEvents from "@/components/CreateEvents.vue";
import EventUnique from "@/components/EventUnique.vue";
import QrcodeVue from "qrcode.vue";

export default {
  beforeMount() {
    this.test();
  },

  components: {
    CreateEvents,
    EventUnique,
    QrcodeVue,
  },
  data() {
    return {
      events: [],
      token: localStorage.getItem("savedUserToken"),
      QRValue: null,
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
    deleteEvent: function (event) {
      this.events.splice(this.event);
    },
  },
};
</script>

<style scoped></style>
