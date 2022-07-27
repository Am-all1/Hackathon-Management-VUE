<template>
  <section>
    <div>
      <h1 class="linkTitlePage">Mon espace administrateur</h1>
      <br />
      <label for="">Choix de l'évènement:</label>
      <br />
      <select v-model="selectedEvent_id">
        <option :value="null">Tous les événements</option>
        <option v-for="event in events" :key="event.id" :value="event.id">
          {{ event.name }}
          {{ event.location }}
          {{ event.id }}
        </option>
      </select>
    </div>
    {{ selectedEvent_id }}

    <!-- ICI LA LISTE DE TOUS LES UTILISATEURS -->
    <div class="filteredUsers" v-if="selectedEvent_id == null">
      <h1>Liste de tous les utilisateurs</h1>
      <br />
      <label for="">Recherche de participant : </label>
      <input
        type="text"
        v-model="searchTerm"
        class=""
        placeholder="Entrez un participant"
      />
      <div class="tableau">
        <table>
          <thead>
            <tr>
              <th>Utilisateurs</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="td">Prénom</td>
              <td class="td">Nom</td>
              <td class="td">Email</td>
              <td class="td">Role</td>
            </tr>

            <tr v-for="user in filterByName" :key="user.id">
              <td>{{ user.firstname }}</td>
              <td>{{ user.lastname }}</td>
              <td>{{ user.email }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- ***************  ICI LA LISTE DES UTILISATEURS D'UN EVENEMENT *************** -->
    <div
      class="filteredUsers"
      v-if="selectedEvent_id != null ? getUsersOfEvents() : false"
    >
      <h1>Liste des utilisateurs de l'événement séléctionné :</h1>
      <br />
      <label for="">Recherche de participant : </label>
      <input
        type="text"
        v-model="searchTerm"
        class=""
        placeholder="Entrez un participant"
      />
      <div class="tableau">
        <table>
          <thead>
            <tr>
              <th>Utilisateurs</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="td">Prénom</td>
              <td class="td">Nom</td>
              <td class="td">Email</td>
              <td class="td">Role</td>
            </tr>

            <tr v-for="user in filterByName" :key="user.id">
              <td>{{ user.firstname }}</td>
              <td>{{ user.lastname }}</td>
              <td>{{ user.email }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      users: [],
      searchTerm: "",
      events: [],
      selectedEvent_id: null,
    };
  },
  beforeMount() {
    this.getEvents();
    this.getUsers();
  },

  computed: {
    filterByName() {
      return this.users.filter((user) => {
        return (
          user.firstname
            .toLowerCase()
            .includes(this.searchTerm.toLowerCase()) ||
          user.lastname.toLowerCase().includes(this.searchTerm.toLowerCase())
        );
      });
    },
  },

  methods: {
    /* Recherche de tous les utilisateurs inscrits */
    async getUsers() {
      const response = await fetch("http://127.0.0.1:8000/api/showusers", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      const data = await response.json();
      this.users = data.users;
    },

    /* Recherche de tous les utilisateurs inscrits dans un événement */
    async getUsersOfEvents() {
      const response = await fetch(
        "http://127.0.0.1:8000/api/events/" + this.selectedEvent_id,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
      const data = await response.json();
      this.users = data.users;
    },

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

<style scoped>
table,
.td {
  border: 1px solid #333;
}

thead {
  background-color: #333;
  color: #fff;
}

.tableau {
  display: flex;
  justify-content: center;
  margin-top: 2%;
}
</style>
