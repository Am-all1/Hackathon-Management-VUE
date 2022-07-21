<template>
  <h1>Mon profil:</h1>

  <span>{{ picture }}</span>

  <p>Prénom: {{ firstname }}</p>
  <p>Nom: {{ lastname }}</p>
  <p>Email: {{ email }}</p>
  <p>Bio: {{ bio }}</p>
  <hr />
  <p>LinkedIn: {{ linkedIn }}</p>
  <p>Website: {{ website }}</p>
  <p>PortFolio: {{ portfolio }}</p>
  <p>GitHub: {{ github }}</p>

  <button>Modifer le profil</button>
</template>

<script>
export default {
  data() {
    return {
      picture: this.picture,
      lastname: this.lastname,
      firstname: this.firstname,
      email: this.email,
      bio: this.bio,
      linkedIn: this.linkedIn,
      website: this.website,
      portfolio: this.portfolio,
      github: this.github,
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
