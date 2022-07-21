<template>
  <div id="mainContainer">
    <!-- Formulaire de connexion -->
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

    <p v-if="result === true" class="success">
      Connexion réussie
      <br />
    </p>
    <p v-else-if="result === false" class="error">Connexion échouée</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      result: null,
      token: "",
    };
  },

  methods: {
    async login() {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: this.email,
          password: this.password,
        }),
      };

      const response = await fetch("http://127.0.0.1:8000/api/users", options);

      const data = await response.json();

      this.result = data.success;
      if (data.success === true) {
        this.token = data.token;
      }
    },
  },
};
</script>
