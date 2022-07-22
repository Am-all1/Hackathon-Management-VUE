<template>
  <h1>Mon profil:</h1>

  <span>{{ picture }}</span>

  <ul>
    <li v-for="user in users" :key="user.id">
      <p>Nom: {{ user.firstname }}</p>
      <p>Date de début: {{ user.lastname }}</p>
      <p>Date de fin: {{ user.firstname }}</p>
      <p>Lieu: {{ user.teams }}</p>
      <button>Voir</button>
      <button>Supprimer</button>
      <hr />
    </li>
  </ul>

  <p>Prénom: {{ firstname }}</p>
  <p>Nom: {{ lastname }}</p>
  <p>Email: {{ email }}</p>
  <p>Bio: {{ bio }}</p>
  <hr />
  <p>LinkedIn: {{ linkedIn }}</p>
  <p>Website: {{ website }}</p>
  <p>PortFolio: {{ portfolio }}</p>
  <p>GitHub: {{ github }}</p>

  <!-- <div
    v-if="users.id != null"
    :firstname="user.firstname"
    :lastname="user.lastname"
    :email="user.email"
    :bio="user.bio"
  ></div> -->

  <button>Modifer le profil</button>
</template>

<script>
export default {
  mounted() {
    this.getDataProfil();
  },

  data() {
    return {
      users: [],
      firstname: "",
      lastname: "",
      email: "",
      bio: "",
      picture: "",
      linkedIn: "",
      github: "",
      website: "",
      portfolio: "",
    };
  },

  // Récupérer les infos d'un USER
  methods: {
    async getDataProfil() {
      const response = await fetch(
        "http://127.0.0.1:8000/api/profil/" + this.$route.params.id,
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
  },
};
</script>
