<template>
  <div>
    <h1 class="linkTitlePage">Création de votre compte</h1>
    <form @submit.prevent="createUser">
      <div>
        <label for="firstname">Prénom : </label>
        <input
          type="text"
          name="firstname"
          id="firstname"
          placeholder="Prénom"
          v-model="firstname"
        />
      </div>
      <br />
      <div>
        <label for="lastname">Nom : </label>
        <input
          type="text"
          name="lasttname"
          id="lastname"
          placeholder="Nom"
          v-model="lastname"
        />
      </div>
      <br />
      <div>
        <label for="email">Email : </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          v-model="email"
        />
      </div>
      <br />
      <div>
        <label for="password">Mot de passe : </label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="password"
          v-model="password"
        />
      </div>
      <br />
      <input type="submit" value="Valider" />
    </form>

    <p v-if="status == true">
      Création de compte réussie
      <br />
    </p>
    <p v-else-if="status == false">Création de compte échouée</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      status: null,
      message: "",
      users: [],
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    };
  },
  methods: {
    /* Création d'un user */
    async createUser() {
      const body = {
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
        password: this.password,
      };

      const response = await fetch("http://127.0.0.1:8000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(body),
      });
      const data = await response.json();

      console.log(data);
      this.message = data.message;
      this.status = data.status;
    },
  },
};
</script>
<style>
.linkTitlePage{
    BACKGROUND-COLOR: #ed4c4c;
    MARGIN-LEFT: 30%;
    margin-right: 30%                                      
}

</style>