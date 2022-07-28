<template>
  <hr />
  <div id="mainContainer">
    <h1>Créer un compte</h1>
    <form @submit.prevent="createUser" id="formStyle">
      <div>
        <label for="firstname">Prénom : </label>
        <br />
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
        <br />
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
        <br />
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
        <br />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="password"
          v-model="password"
        />
      </div>
      <input type="submit" value="Valider" id="button" />
      <br />
      <p v-if="status == true">
        Création de compte réussie
        <br />
      </p>
      <p v-else-if="status == false">Création de compte échouée</p>
    </form>
  </div>
</template>

<script>
import CreateUser from "@/components/CreateUser.vue";

export default {
  data() {
    return {};
  },

  components: {
    CreateUser,
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
  position: fixed;
  top: 600px;
}

#button:hover {
  border: 2px solid rgb(219, 117, 117);
  background-color: rgb(219, 117, 117);
  color: white;
  font-weight: bold;
}
</style>
