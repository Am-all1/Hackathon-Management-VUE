<template>
  <header>
    <div id="logoBloc">
      <a href="https://lebocal.academy/"
        ><img src="./assets/logo_bocal.png" alt="" class="logo"
      /></a>
      <h1>HACKATHON</h1>
      <a href="https://www.nicestartsup.com/"
        ><img src="./assets/logo_nicestartup.png" alt="" class="logo"
      /></a>
    </div>
  </header>
  <nav>
    <router-link to="/home" class="links">Accueil</router-link> |
    <router-link to="/login" class="links">Connexion</router-link> |
    <router-link to="/disconnected" class="links">Déconnexion</router-link> |
    <router-link to="/mon-profil" class="links">Mon profil</router-link> |
    <router-link to="/modifications" class="links"
      >Modifier mon profil</router-link
    >
    | <router-link to="/eventlist">Evènements</router-link> |
    <router-link to="/admin" class="links">Espace admin</router-link> |
    <router-link to="/slots" class="links">Espace staff</router-link> |
    <router-link to="/abilities" class="links">Mes compétences</router-link> |
    <router-link to="/qrgenerator" class="links">Qr Code</router-link> |
    <router-link to="/testhome">Home</router-link> |
    <router-link to="/pageqrcode" class="links">Page avec QR Code</router-link>
  </nav>
  <div>
    <router-view />
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.min.css";
import HomeView from "./views/HomeView.vue";

export default {
  name: "App",
  components: { HomeView },

  data() {
    return {
      token: localStorage.getItem("savedUserToken"),
    };
  },
};
</script>

<style lang="scss">
//NAV
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  // color: #2c3e50;
}

header {
  h1 {
    font-size: 60px;
    font-weight: bold;
    color: rgb(86, 82, 82);
    margin: 20px;
  }
}

nav {
  p {
    font-size: 60px;
    font-weight: bold;
  }
  a {
    font-weight: bold;
    color: grey;

    &.router-link-exact-active {
      color: GREY;
    }
  }

  a:hover {
    background-color: rgb(219, 117, 117);
    color: white;
    cursor: pointer;
    margin: 5px;
    padding: 5px;
    text-decoration-line: underline;
  }
}

#logoBloc {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.logo {
  height: 60px;
  min-width: 40px;
  min-width: 100px;
}

.links {
  text-decoration-line: none;
}

nav {
  margin-bottom: 20px;
}
#navBar {
  background-color: whitesmoke;
  padding: 4%;
}

#navLink {
  text-decoration: none;
}
</style>
