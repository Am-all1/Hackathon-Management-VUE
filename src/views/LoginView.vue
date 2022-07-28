<template>
  <hr />
  <div id="mainContainer">
    <h1>Espace connexion</h1>
    <!-- CreateGroup de connexion -->
    <form @submit.prevent="login" id="formStyle">
      <div class="input-container">
        <label for="emailInput" class="labelWidth">Email :</label>
        <br />
        <input
          type="email"
          id="emailInput"
          v-model="email"
          placeholder="nom@domaine.com"
          required
        />
      </div>
      <br />
      <div>
        <label for="password" class="labelWidth">Password : </label>
        <br />
        <input
          type="password"
          id="password"
          v-model="password"
          placeholder="1234"
          required
        />
      </div>
      <br />
      <br />
      <input type="submit" value="Se connecter" id="button" />
    </form>
    <br />
    <p v-if="status == true">Connexion réussie</p>
    <p v-else-if="status == false">Connexion échouée</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      status: null,
      message: "",
      token: localStorage.getItem("savedUserToken"),
    };
  },
  methods: {
    async login() {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          // Authorization: `Bearer ${localStorage.getItem("savedUserToken")}`,
        },
        body: JSON.stringify({
          email: this.email,
          password: this.password,
          token: this.token,
        }),
      };

      const response = await fetch(
        "http://127.0.0.1:8000/api/auth/login",
        options
      );

      const data = await response.json();

      this.message = data.message;
      this.status = data.status;
      if (data.status === true) {
        this.token = data.token;
      }
      this.saveUserToken();
    },

    saveUserToken() {
      console.log(this.token);
      localStorage.setItem("savedUserToken", this.token);
    },
  },
};
</script>

<style scoped>
h1,
label {
  color: rgb(86, 82, 82);
}

#mainContainer {
  display: flex;
  flex-direction: column;
}

#formStyle {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: center;
  align-items: center;
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
  position:static;
  top: 600px;
}

#button:hover {
  border: 2px solid rgb(219, 117, 117);
  background-color: rgb(219, 117, 117);
  color: white;
  font-weight: bold;
}

.labelWidth {
  margin: 10px;
}
</style>
