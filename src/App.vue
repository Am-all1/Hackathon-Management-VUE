<template>
  <!-- <div :style="{'background-image':'url(./assets/backgroundImg.jpg)'}">
</div> -->
  <nav id="navBar">
    <div id="navLinks">
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
    </div>
  </nav>

  <h1 id="titreAccueil">Hackathon <span id="letter">(s)</span> Manager</h1>
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

  // color: #2c3e50;
}
/* #logo{
 
background-image: url(https://th.bing.com/th/id/R.08515d233893d99818a0de75ab90801b?rik=JPoynv8qlF1apw&riu=http%3a%2f%2flucielabdj.cluster006.ovh.net%2fwp%2fwp-content%2fuploads%2f2016%2f11%2fNice-Starts-Up.png&ehk=2IQ1Ewjsmn9PNrwe5NRgcUURkg07zGqrjrIprrr20iI%3d&risl=&pid=ImgRaw&r=0);


} */

#titreAccueil {
  color: black;
  font-family: fantasy;
  font-size: xx-large;
  padding-top: 10%;
}
#letter {
  color: red;
}

// #body{
//   background-image: url(./assets/backgroundImg.jpg);
// }
a:hover {
  background-color: #ed4c4c;
  color: whitesmoke;
  padding: 1%;
  text-decoration: double;
  text-decoration-color: whitesmoke;
  text-decoration-line: underline;
}
nav {
  a {
    font-weight: bold;
    color: rgba(128, 128, 128, 0.781);
    text-decoration-line: none;

    &.router-link-exact-active {
      background-color: #ed4c4c;
      color: whitesmoke;
      padding: 1%;
      text-decoration: double;
      text-decoration-color: whitesmoke;
      text-decoration-line: underline;
    }
  }
}
#navBar {
  background-color: whitesmoke;
  padding: 4%;
}
#navLink {
  text-decoration: none;
}

// .footerDiv{
//   background-color: black;
//     position:absolute;
//    bottom:0;  /* on le colle en bas */
//    width:100%;
//    height:100px;   /* Hauteur du pied de page */
// }
</style>
