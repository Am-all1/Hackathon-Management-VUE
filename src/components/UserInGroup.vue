<template>
  <div>
    <label for="">Recherche de participant : </label>
    <input
      type="text"
      v-model="searchTerm"
      class=""
      placeholder="Entrez un participant"
    />
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
          <td class="td">Add</td>
        </tr>
        <tr v-for="user in filterByName" :key="user.id">
          <td>{{ user.firstname }}</td>
          <td>{{ user.lastname }}</td>
          <td>{{ user.email }}</td>
          <td><button>+</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  beforeMount() {
    this.getUsers();
  },
  data() {
    return {
      users: [],
      searchTerm: "",
    };
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
  props: {
    firstname: String,
    lastname: String,
    email: String,
  },
  methods: {
    /* Recherche de tous les utilisateurs inscris */
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
</style>
