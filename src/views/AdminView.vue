<template>
  <h1>Mon espace administrateur</h1>
  <hr />
  <h2>Liste des évènements</h2>

  <form @submit="show_Event_users">
    <select name="" id="">
      <option v-for="event in events" :key="event.id">
        <p>
          {{ event.name }} - {{ event.location }} -
          {{ event.start }}
        </p>
      </option>
    </select>
    <button>Valider</button>
  </form>
  <hr />
  <h2>Liste des participants à l'évènement</h2>
  <table>
    <tr>
      <th>Nom</th>
      <th>Prénom</th>
      <th>Email</th>
      <th>Action</th>
    </tr>
    <tr v-for="event_user in events_users" :key="event_user.id">
      <td>{{ event_user.user_lastname }}</td>
      <td>{{ event_user.user_firstname }}</td>
      <td>{{ event_user.user_email }}</td>
      <td><button>supprimer</button></td>
    </tr>
  </table>
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
      event_users: [],
    };
  },
  mounted() {
    this.getEvents();
    this.show_Event_Users();
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
    async show_Event_Users() {
      const response = await fetch("http://127.0.0.1:8000/api/event_users", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      const data = await response.json();
      this.event_users = data.event_users;
      console.table(show_Event_Users());
    },
  },
};
</script>

<style scoped></style>
