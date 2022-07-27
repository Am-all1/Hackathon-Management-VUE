<template>
  <h1>Mon profil:</h1>

  <!-- <span>{{ picture }}</span> -->

  <p>Prénom: {{ user.firstname }}</p>
  <p>Nom: {{ user.lastname }}</p>
  <p>Email: {{ user.email }}</p>
  <p>Bio: {{ user.bio }}</p>
  <hr />
  <p>LinkedIn: {{ user.linkedIn }}</p>
  <p>Website: {{ user.website }}</p>
  <p>PortFolio: {{ user.portfolio }}</p>
  <p>GitHub: {{ user.github }}</p>

  <button>Modifer le profil</button>
</template>

<script>
export default {
  mounted() {
    this.getUserById();
  },

  data() {
    return {
      user: [],
    };
  },

  props: {
    token: String,
  },

  // Récupérer les infos d'un USER
  methods: {
    async getUserById() {
      const response = await fetch("http://127.0.0.1:8000/api/my-profile/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${localStorage.getItem("savedUserToken")}`,
        },
      });

      const data = await response.json();
      this.user = data.user;
    },
  },
};
</script>
