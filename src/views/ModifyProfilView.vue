<template>
  <hr />
  <div>
    <h1>Modifier mon profil</h1>
    <form @submit.prevent="ModifyProfil" :token="this.token">
      <div id="formStyle">
        <div id="formStyleLeftContainer">
          <label for="bio">Biographie :</label>
          <br />
          <textarea
            name="bio"
            id="bio"
            :placeholder="user.bio"
            v-model="bio"
          ></textarea>
        </div>

        <div id="formStyleCenterContainer">
          <label for="firstname">Prénom : </label>
          <input
            type="text"
            name="firstname"
            id="firstname"
            :placeholder="user.firstname"
            v-model="firstname"
          />
          <br />
          <label for="lastname">Nom : </label>
          <input
            type="text"
            name="lastname"
            id="lastname"
            :placeholder="user.lastname"
            v-model="lastname"
          />
          <br />
          <label for="email">Email: </label>
          <input
            type="email"
            name="email"
            id="email"
            :placeholder="user.email"
            v-model="email"
          />
          <br />
          <label for="password">Mot de passe : </label>
          <input
            type="password"
            name="password"
            id="password"
            :placeholder="user.password"
            v-model="password"
          />
          <br />
        </div>
        <div id="formStyleRightContainer">
          <label for="firstname">LinkedIn :</label>
          <input
            type="text"
            name="linkedin"
            id="linkedin"
            :placeholder="user.linkedIn"
            v-model="linkedin"
          />
          <br />
          <label for="github">Github :</label>
          <input
            type="text"
            name="github"
            id="github"
            :placeholder="user.github"
            v-model="github"
          />
          <br />
          <label for="website">Website :</label>
          <input
            type="text"
            name="website"
            id="website"
            :placeholder="user.website"
            v-model="website"
          />
          <br />
          <label for="portfolio">Portfolio :</label>
          <input
            type="text"
            name="portfolio"
            id="portfolio"
            :placeholder="user.portfolio"
            v-model="portfolio"
          />
        </div>
        <input type="submit" value="Valider" id="button" />
      </div>
      <br />
    </form>
    <p>{{ feedBackmessage }}</p>
  </div>
</template>

<script>
// import FileUpload from './FileUploadView.vue';
import FileUploadView from "./FileUploadView.vue";
export default {
  mounted() {
    this.getUserById();
  },

  data() {
    return {
      user: [],
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      linkedIn: "",
      github: "",
      website: "",
      portfolio: "",
      feedBackmessage: "",
      token: localStorage.getItem("savedUserToken"),
    };
  },
  methods: {
    /* Récupération des infos du profil */
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

    /* UPDATE PROFIL */
    async ModifyProfil() {
      const body = {
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
        password: this.password,
        linkedIn: this.linkedIn,
        github: this.github,
        website: this.website,
        portfolio: this.portfolio,
        bio: this.bio,
        picture: this.picture,
      };
      const response = await fetch("http://127.0.0.1:8000/api/my-profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${localStorage.getItem("savedUserToken")}`,
        },
        body: JSON.stringify(body),
      });
      const data = await response.json();

      this.feedbackMessage = data.message;

      this.getUserById();
    },
  },

  components: { FileUploadView },
};
</script>

<style scoped>
h1,
label {
  color: rgb(86, 82, 82);
}

#formStyle {
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: left;
  height: 280px;
  margin-top: 50px;
}

#formStyleCenterContainer {
  margin: 0px 40px 20px 40px;
}

label {
  margin: 10px;
}

#button {
  border: 2px solid GREY;
  background-color: white;
  color: grey;
  height: 60px;
  width: 180px;
  cursor: pointer;
  padding: 10px;
  font-size: 20px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: fixed;
  top: 600px;
}

#button:hover {
  border: 2px solid rgb(219, 117, 117);
  background-color: rgb(219, 117, 117);
  color: white;
  font-weight: bold;
}
</style>
