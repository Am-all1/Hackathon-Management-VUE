<template>
  <!-- Connexion-->
  <form @submit.prevent="login" v-if="mode == 'connexion'">
    <h1>Connexion</h1>
    <p>
      Tu n'as pas encore de compte ?
      <span class="card_action" @click="switchToCreateAccount()"
        >Créer un compte</span
      >
    </p>
    <div class="form-floating mb-3">
      <input
        v-model="email"
        type="email"
        class="form-control"
        name="email"
        id="floatingInput"
        placeholder="name@example.com"
      />
      <label for="floatingInput">Adresse email</label>
    </div>
    <div class="form-floating">
      <input
        v-model="password"
        type="password"
        class="form-control"
        name="password"
        id="floatingPassword"
        placeholder="Mot de passe"
      />
      <label for="floatingPassword">Mot de passe</label>
    </div>
    <button type="button">Connexion</button>
  </form>

  <!-- Creation d'un compte -->
  <form v-else>
    <h1>Création d'un compte</h1>
    <p>
      Tu veux revenir à la connexion ?
      <span class="card_action" @click="switchToConnexion()">Connexion</span>
    </p>

    <div class="form-floating mb-3">
      <input
        v-model="lastname"
        type="text"
        class="form-control"
        name="lastname"
        id="floatingInput"
        placeholder="Votre nom"
      />
      <label for="floatingInput">Nom</label>
    </div>
    <div class="form-floating mb-3">
      <input
        v-model="firstname"
        type="email"
        class="form-control"
        name="firstname"
        id="floatingInput"
        placeholder="Votre prénom"
      />
      <label for="floatingInput">Prénom</label>
    </div>
    <div class="form-floating mb-3">
      <input
        v-model="email"
        type="email"
        class="form-control"
        name="email"
        id="floatingInput"
        placeholder="name@example.com"
      />
      <label for="floatingInput">Adresse email</label>
    </div>
    <div class="form-floating">
      <input
        v-model="password"
        type="password"
        class="form-control"
        name="password"
        id="floatingPassword"
        placeholder="Mot de passe"
      />
      <label for="floatingPassword">Mot de passe</label>
    </div>
    <button @click="createAccount()" class="button">Valider</button>
  </form>
  <p v-show="errorMessage != null">{{ errorMessage }}</p>
</template>

<script>
export default {
  name: "Connexion",
  data: function () {
    return {
      mode: "connexion",
      lastname: "",
      firstname: "",
      email: "",
      password: "",
    };
  },

  methods: {
    switchToCreateAccount: function () {
      this.mode = "create";
    },
    switchToConnexion: function () {
      this.mode = "connexion";
    },
    createAccount: function () {
      console.log(this.lastname, this.firstname, this.email, this.password);
    },
    async login() {
      const options = {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify({
          email: this.email,
          password: this.password,
        }),
      };
      const response = await fetch("XXX", options);

      const data = await response.json();

      if (response.status === 200) {
        localStorage.setItem("@social-network:token", data.token);
        this.$router.replace("/");
        return;
      }
      this.errorMessage = data.message;
    },
  },
};
</script>
