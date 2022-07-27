<template>
  <section>
    <div>
      <h1 class="linkTitlePage">Mon espace administrateur</h1>
      <br />
      <label for="">Choix de l'évènement:</label>
      <br />
      <select name="" id="">
        <option v-for="event in events" :key="event.id">
          {{ event.name }} - {{ event.location }} - {{ event.start }} -
          {{ event.end }}
        </option>
      </select>
    </div>
    <div>
      <h1>Liste des utilisateurs inscrits à l'évènement</h1>
      <br />
      <table>
        <tr>
          <th>Nom</th>
          <th>Prénom</th>
          <th>Adresse email</th>
          <th>Accréditation</th>
          <th>Action</th>
        </tr>
      </table>
      <table>
        <p></p>
        <tr v-for="event_user in event_users" :key="event_user.id">
          <th>{{ event_user.user_lastname }}</th>
          <th>{{ event_user.user_firstname }}</th>
          <th>{{ event_user.user_email }}</th>
          <th>{{ role.authorization }}</th>
        </tr>
      </table>
    </div>
  </section>
</template>

<script>
import EventUnique from "@/components/EventUnique.vue";

export default {
  components: {
    EventUnique,
  },
  data() {
    return {
      events: [],
      name: "",
      start: "",
      end: "",
      location: "",
      event_users: [],
      user_lastname: "",
      user_firstname: "",
      user_email: "",
    };
  },

  methods: {
    /* Récupération des events */
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
  },
};
</script>

<style scoped></style>
