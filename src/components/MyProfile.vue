<template>
  <h1>Mon profil</h1>

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
    this.getUserByToken();
    alert(this.user.id);
  },

  data() {
    return {
      user: [],
      /* firstname: "",
      lastname: "",
      email: "",
      bio: "",
      picture: "",
      linkedIn: "",
      github: "",
      website: "",
      portfolio: "",
      user_id: "", */
    };
  },

  props: {
    token: String,
  },

  // Récupérer les infos d'un USER
  methods: {
    async getUserByToken() {
      alert("entrée dans getUsersByToken");
      const response = await fetch(
        "http://127.0.0.1:8000/api/my-profile/" + this.token,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: 'Bearer ${localStorage.getItem("savedUserToken")}',
          },
        }
      );
      alert("Fetch passé");
      const data = await response.json();
      this.user = data.user;
    },
  },
};
</script>
