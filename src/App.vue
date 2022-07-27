<template>
  <nav>
    <router-link to="/">Accueil</router-link> |
    <!--     <router-link
      :to="{
        name: 'mon-profil',
        params: {
          token: this.token,
        },
      }"
    >
      Mon Profil</router-link
    > -->

    <router-link to="/mon-profil">Mon Profil</router-link> |
    <router-link to="/login">Connexion</router-link> |
    <router-link to="/disconnected">Deconnexion</router-link> |
    <router-link to="/create-user">Création de compte</router-link> |
    <router-link to="/create-event">Créer un évènement</router-link> |
    <router-link to="/admin">Espace admin</router-link> |
    <router-link to="/slots">Créer un créneau</router-link>|
    <router-link to="/modifications">Modifier mon profil</router-link>|
    <router-link to="/abilities">Mes compétences</router-link> |
    <router-link to="/qrgenerator">Qr Code</router-link> |
    <router-link to="/pageqrcode">Page avec QR Code</router-link>
  </nav>

  <div></div>
  <router-view />
</template>

<script>
export default {
  name: "App",
  components: {},

  data() {
    return {
      token: localStorage.getItem("savedUserToken"),
    };
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
