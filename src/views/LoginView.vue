<template>
  <div class="card text-bg-$rouge-200 mb-3" style="max-width: 30rem">
    <div class="card-header">
      <h2>Connexion</h2>
    </div>
    <form
      @submit.prevent="login"
      class="card-body"
      action="connection_user.php"
      method="POST"
    >
      <div class="form-floating mb-3">
        <input
          type="email"
          class="form-control"
          id="emailInput"
          v-model="email"
          placeholder="nom@exemple.com"
          required
        />
        <label for="emailInput">Adresse email</label>
      </div>

      <div class="form-floating">
        <input
          type="password"
          class="form-control"
          id="password"
          v-model="password"
          placeholder="1234"
          required
        />
        <label for="password">Mot de passe</label>
      </div>
      <br />

      <div class="input">
        <button type="submit" class="btn btn-primary btn-lg">
          Se connecter
        </button>
      </div>
    </form>
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
.card {
  margin-left: 16rem;
}
h1,
label {
  color: rgb(86, 82, 82);
}

#mainContainer {
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
  position: static;
  top: 600px;
  padding-bottom: 5%;
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
