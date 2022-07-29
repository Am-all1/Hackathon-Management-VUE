<template>
  <h1>Modifier mon profil</h1>
  <div class="modifProfil">
    <form @submit.prevent="ModifyProfil">
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          name="firstname"
          id="firstname"
          v-model="user.firstname"
        />
        <span
          style="background-color: rgb(219, 117, 117)"
          class="input-group-text"
          id="basic-addon2"
          >Nom</span
        >
      </div>
      <div class="input-group mb-3">
        <span
          style="background-color: rgb(219, 117, 117)"
          class="input-group-text"
          id="basic-addon1"
          >Prénom</span
        >
        <input
          type="text"
          class="form-control"
          name="lastname"
          id="lastname"
          v-model="user.lastname"
        />
      </div>

      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Nom d'utilisateur"
          aria-label="Nom d'utilisateur"
        />
        <span
          style="background-color: rgb(219, 117, 117)"
          class="input-group-text"
          >@</span
        >
        <input
          type="text"
          class="form-control"
          placeholder="domaine.example"
          aria-label="Server"
        />
      </div>

      <div class="input-group mb-3">
        <input
          type="email"
          class="form-control"
          name="password"
          id="password"
          placeholder="Votre nouveau Mot de passe"
        />
        <span
          style="background-color: rgb(219, 117, 117)"
          class="input-group-text"
          id="basic-addon2"
          >Mot de passe</span
        >
      </div>

      <label for="basic-url" class="form-label">Autres informations</label>
      <div class="input-group mb-3">
        <span
          style="background-color: rgb(219, 117, 117)"
          class="input-group-text"
          id="basic-addon3"
          >Profil LinkedIn</span
        >
        <input
          type="text"
          class="form-control"
          name="linkedin"
          id="linkedin"
          v-model="user.linkedIn"
        />
      </div>

      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          name="website"
          id="website"
          v-model="user.website"
        />
        <span
          style="background-color: rgb(219, 117, 117)"
          class="input-group-text"
          >Website</span
        >
      </div>

      <div class="input-group mb-3">
        <span
          style="background-color: rgb(219, 117, 117)"
          class="input-group-text"
          id="basic-addon3"
          >Portfolio</span
        >
        <input
          type="text"
          class="form-control"
          name="portfolio"
          id="portfolio"
          v-model="user.portfolio"
        />
      </div>

      <div class="input-group">
        <textarea
          class="form-control"
          aria-label="With textarea"
          name="bio"
          id="bio"
          v-model="user.bio"
        ></textarea>
        <span
          style="background-color: rgb(219, 117, 117)"
          class="input-group-text"
          >Bio</span
        >
      </div>

      <input type="submit" value="Valider" id="button" />
      <br />
      <input type="submit" @click="profilBack" value="Valider" id="button" />
    </form>
    <p>{{ feedBackmessage }}</p>
  </div>
</template>

<script>
// import FileUpload from './FileUploadView.vue';
// import FileUploadView from "./FileUploadView.vue";
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
      bio: "",
      feedBackmessage: "",
      bio: "",
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

      // redirection vers la page profil
      window.location.href = "/#/mon-profil";
    },
  },

  // components: { FileUploadView },
};
</script>

<style scoped>
.modifProfil {
  width: 70%;
  display: flex;
  justify-content: center;
  margin-left: 14rem;
  margin-top: 2rem;
  margin-bottom: 4rem;
}

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

  cursor: pointer;
  padding: 10px;
  font-size: 20px;
}

#btnBloc {
  display: flex;
  justify-content: center;
  gap: 1%;
}

#button:hover {
  border: 2px solid rgb(219, 117, 117);
  background-color: rgb(219, 117, 117);
  color: white;
  font-weight: bold;
}
</style>
