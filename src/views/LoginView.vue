<template>
  <div id="mainContainer">
    <!-- CreateGroup de connexion -->
    <form @submit.prevent="login">
      <div class="input-container">
        <label for="emailInput">Email : </label>
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
        <label for="password">Password : </label>
        <input
          type="password"
          id="password"
          v-model="password"
          placeholder="1234"
          required
        />
      </div>
      <br />
      <input type="submit" value="Se connecter" />
    </form>

    <p v-if="status == true">
      Connexion réussie
      <br />
    </p>
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
