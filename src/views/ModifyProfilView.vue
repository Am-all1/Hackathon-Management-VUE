<template>
  <div>
    <h1>Modifier mon profil</h1>
    <form @submit.prevent="ModifyProfil">
      <div id="formStyle">
        <div id="formStyleLeftContainer">
          <label for="firstname">Prénom : </label>
          <br>
          <input
            type="text"
            name="firstname"
            id="firstname"
            :placeholder="user.firstname"
            v-model="firstname"
          />
          <br>
          <label for="lastname">Nom : </label>
          <br>
          <input
            type="text"
            name="lasttname"
            id="lastname"
            placeholder="{{lastname}}"
            v-model="lastname"
          />
          <br>
          <label for="email">Email: </label>
          <br>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="{{email}}"
            v-model="email"
          />
          <br>
          <label for="password">Mot de passe : </label>
          <br>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="{{password}}"
            v-model="password"
          />
      </div>

      <div id="formStyleCenterContainer">
        <label for="firstname">linkedIn : </label>
        <br>
        <input
          type="text"
          name="linkedin"
          id="linkedin"
          placeholder="{{linkedIn}}"
          v-model="linkedin"
        />
        <br />
          <label for="firstname">Github </label>
          <br>
          <input
            type="text"
            name="linkedin"
            id="linkedin"
            placeholder="{{github}}"
            v-model="github"
          />
        <br />
          <label for="firstname">Website :</label>
          <br>
          <input
            type="text"
            name="website"
            id="website"
            placeholder="{{website}}"
            v-model="website"
          />
        <br />
          <label for="firstname">Portfolio :</label>
          <br>
          <input
            type="text"
            name="portfolio"
            id="portfolio"
            placeholder="{{portfolio}}"
            v-model="portfolio"
          />
      </div>
      <div>
        <label for="firstname">Photo :</label>
        <br>
        <input
          type="image"
          name="picture"
          id="picture"
          placeholder="{{picture}}"
          v-model="picture"
        />
        <FileUploadView></FileUploadView>
        <br>
        <label for="firstname">Bio :</label>
        <textarea
          name="bio"
          id="bio"
          placeholder="{{bio}}"
          v-model="bio"
        ></textarea>
      </div>

      <input type="submit" value="Valider" id="button"/>
    </form>

    <p>{{ feedBackmessage }}</p>
  </div>
</template>

<script>
// import FileUpload from './FileUploadView.vue';
import FileUploadView from "./FileUploadView.vue";
export default {
  data() {
    return {
      users: [],
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      linkedin: "",
      github: "",
      website: "",
      portfolio: "",
      bio: "",
      picture: "",
      feedBackmessage: "",
    };
  },
  methods: {
    /* Récupération */
    async getModifyProfil() {
      const response = await fetch("http://127.0.0.1:8000/api/users", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      const data = await response.json();
      this.events = data.events;
    },
    /* Création des modifs */
    async createModifyProfil() {
      const body = {
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
        password: this.password,
        linkedin: this.linkedin,
        github: this.github,
        website: this.website,
        portfolio: this.portfolio,
        bio: this.bio,
        picture: this.picture,
      };
      const response = await fetch("http://127.0.0.1:8000/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(body),
      });
      const data = await response.json();
      this.feedbackMessage = data.message;
      this.getModifyProfil();
      // firstname: this.firstname,
      // lastname: this.lastname,
      // email: this.email,
      // password: this.password,
    },
  },
  mounted() {
    this.getModifyProfil();
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
  align-content: center;
  justify-content: center;
  align-items: stretch;
}

#formStyleCenterContainer {
  margin: 0px 40px 20px 40px;
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
}

#button:hover {
  border: 2px solid rgb(219, 117, 117);
  background-color: rgb(219, 117, 117);
  color: white;
  font-weight: bold;
}
</style>
