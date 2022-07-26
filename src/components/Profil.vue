<template>
  <h1>Mon profil:</h1>

  <!-- <span>{{ picture }}</span> -->

  <!-- <p>Prénom: {{ user.firstname }}</p>
  <p>Nom: {{ user.lastname }}</p>
  <p>Email: {{ user.email }}</p>
  <p>Bio: {{ user.bio }}</p>
  <hr />
  <p>LinkedIn: {{ linkedIn }}</p>
  <p>Website: {{ website }}</p>
  <p>PortFolio: {{ portfolio }}</p>
  <p>GitHub: {{ github }}</p> -->

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
  // props: {
  //   firstname: String,
  //   lastname: string,
  //   email: string,
  //   bio: string,
  //   linkedIn: string,
  //   website: string,
  //   portfolio: string,
  //   github: string,
  // },
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
      token: localStorage.getItem("savedUserToken"),
    };
  },

  // Récupérer les infos d'un USER
  methods: {
    async getUsers() {
      const response = await fetch(
        "http://127.0.0.1:8000/api/profil/" + this.token,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: 'Bearer ${localStorage.getItem("savedUserToken")}',
          },
        }
      );
      const data = await response.json();
      this.users = data.users;
    },
  },

  mounted() {
    this.getUsers();
  },
};
</script>
