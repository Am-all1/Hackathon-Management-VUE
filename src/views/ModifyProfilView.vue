<template>
  <div>
    <h1>Modifier votre profil</h1>

    <form @submit.prevent="ModifyProfil">
      <div>
        <label for="firstname">Prénom: </label>
        <br />
        <input
          type="text"
          name="firstname"
          id="firstname"
          v-model="user.firstname"
        />
      </div>

      <br />

      <div>
        <label for="lastname">Nom: </label>
        <br />
        <input
          type="text"
          name="lasttname"
          id="lastname"
          v-model="user.lastname"
        />
      </div>

      <br />

      <div>
        <label for="email">Email: </label>
        <br />
        <input type="email" name="email" id="email" v-model="user.email" />
      </div>

      <br />

      <div>
        <label for="password">Mot de passe: </label>
        <br />
        <input
          type="password"
          name="password"
          id="password"
          v-model="user.password"
        />
      </div>

      <br />

      <div>
        <label for="linkedIn">Linkedin: </label>
        <br />
        <input
          type="text"
          name="linkedIn"
          id="linkedIn"
          v-model="user.linkedIn"
        />
      </div>

      <br />

      <div>
        <label for="github">Github: </label>
        <br />
        <input type="text" name="github" id="github" v-model="user.github" />
      </div>

      <br />

      <div>
        <label for="website">Website: </label>
        <br />
        <input type="text" name="website" id="website" v-model="user.website" />
      </div>

      <br />

      <div>
        <label for="portfolio">Portfolio: </label>
        <br />
        <input
          type="text"
          name="portfolio"
          id="portfolio"
          v-model="user.portfolio"
        />
      </div>

      <br />

      <div>
        <label for="bio">Bio: </label>
        <br />
        <textarea name="bio" id="bio" v-model="user.bio"></textarea>
      </div>

      <br />

      <!-- <div>
        <label for="picture">Photo: </label>
        <br />
        <input
          type="image"
          alt="image"
          name="picture"
          id="picture"
          v-model="user.picture"
        />
        <FileUploadView></FileUploadView>
      </div> -->

      <input type="submit" value="Valider les modifications" />
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
      user: {},
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
      const body = this.user;
      console.log(body);

      const response = await fetch("http://127.0.0.1:8000/api/update-profile", {
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
