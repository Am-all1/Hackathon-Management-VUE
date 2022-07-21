<template>
  <h1>Profile here</h1>

  <ul>
    <li v-for="data in dataProfil" :key="data.id">
      <p>Prénom: {{ data.firstname }}</p>
      <p>Nom: {{ data.lastname }}</p>
      <p>Email: {{ data.email }}</p>
      <p>Bio: {{ data.bio }}</p>
      <hr />
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      dataProfil: [],
    };
  },

  // Récupérer les infos d'un USER
  methods: {
    async getDataProfil() {
      const response = await fetch("http://127.0.0.1:8000/api/AFAIRE", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      const data = await response.json();
      this.dataProfil = data.dataProfil;
    },
  },
};
</script>
