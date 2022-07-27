<template>
  <div>
    <h1>Modifier mon profil</h1>
    <form @submit.prevent="ModifyProfil">
      <div id="formStyle">
        <div id="formStyleLeftContainer">
          <label for="firstname">Prénom : </label>
          <br />
          <input
            type="text"
            name="firstname"
            id="firstname"
            placeholder="Prénom"
            v-model="firstname"
          />
          <br />
          <label for="lastname">Nom : {{ lastname }} </label><br />
          <input
            type="text"
            name="lasttname"
            id="lastname"
            placeholder="Nom"
            v-model="lastname"
          />
          <br />
          <label for="email">Email: {{ email }} : </label><br />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            v-model="email"
          />
          <br />
          <label for="password">Mot de passe : {{ password }} </label><br />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
            v-model="password"
          />
        </div>
        <div id="formStyleCenterContainer">
          <label for="firstname">linkedIn : {{ linkedIn }} </label><br />
          <input
            type="text"
            name="linkedin"
            id="linkedin"
            placeholder="lien Linkedin"
            v-model="linkedin"
          />
          <br />
          <label for="firstname">Github : {{ Github }} </label><br />
          <input
            type="text"
            name="linkedin"
            id="linkedin"
            placeholder="Lien Github"
            v-model="github"
          />
          <br />
          <label for="firstname">Website : {{ website }}</label
          ><br />
          <input
            type="text"
            name="website"
            id="website"
            placeholder="Site web"
            v-model="website"
          />
          <br />
          <label for="firstname">Portfolio : {{ portfolio }} </label><br />
          <input
            type="text"
            name="portfolio"
            id="portfolio"
            placeholder="Portfolio"
            v-model="portfolio"
          />
        </div>
        <div id="formStyleRightContainer">
          <label for="firstname">Photo : {{ picture }}</label
          ><br />
          <input
            type="image"
            name="picture"
            id="picture"
            placeholder="photo"
            v-model="picture"
          />
        </div>
      </div>
      <br />
      <input type="submit" value="Modifier" id="button" />
    </form>

    <p>{{ feedBackmessage }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [],
      firstname: "",
      lastname: "",
      email: "",
      password: "",
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
