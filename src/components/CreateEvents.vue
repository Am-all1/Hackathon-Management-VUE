<template>
  <div>
    <h1>Création d'un évènement:</h1>

    <form @submit.prevent="createEvent">
      <div>
        <label for="name">Nom:</label>
        <br />
        <input type="text" name="name" v-model="name" />
      </div>

      <br />

      <div>
        <label for="start">Date de début:</label>
        <br />
        <input type="date" name="start" v-model="start" />
      </div>

      <br />

      <div>
        <label for="end">Date de fin:</label>
        <br />
        <input type="date" name="end" v-model="end" />
      </div>

      <br />

      <div>
        <label for="location">Lieu:</label>
        <br />
        <input type="text" name="location" v-model="location" />
      </div>

      <br />

      <input type="submit" value="Valider" />
    </form>

    <p>{{ feedbackMessage }}</p>

    <h2>Liste des évènements:</h2>
    <ul>
      <li v-for="event in events" :key="event.id">
        <p>Nom: {{ event.name }}</p>
        <p>Date de début: {{ event.start }}</p>
        <p>Date de fin: {{ event.end }}</p>
        <p>Lieu: {{ event.location }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
// import { defineComponent } from "@vue/composition-api";

export default {
  data() {
    return {
      events: [],
      name: "",
      start: "",
      end: "",
      location: "",
      feedbackMessage: "",
    };
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

    /* Création d'un event */
    async createEvent() {
      const body = {
        name: this.name,
        start: this.start,
        end: this.end,
        location: this.location,
      };

      const response = await fetch("http://127.0.0.1:8000/api/events", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(body),
      });

      const data = await response.json();

      this.feedbackMessage = data.message;

      this.getEvents();

      this.name = "";
      this.start = "";
      this.end = "";
      this.location = "";
    },
  },

  mounted() {
    this.getEvents();
  },
};
</script>
