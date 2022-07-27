<template>
 
  <nav>
    <div>
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
    <router-link to="/create-event">Créer un évènement</router-link> |
    <router-link to="/admin">Espace admin</router-link> |
    <router-link to="/slots">Créer un créneau</router-link>|
    <router-link to="/modifications">Modifier mon profil</router-link>|
    <router-link to="/abilities">Mes compétences</router-link> |
    <router-link to="/qrgenerator">Qr Code</router-link> |
    <router-link to="/pageqrcode">Page avec QR Code</router-link>
  </nav>

  <!-- <h1 id="titreAccueil">Hackathon <span id="letter">(s)</span> Manager</h1> -->
  <router-view />


<!-- <footer class="footer">

  <div>
    © 2022 Copyright: Nice Start(s) Up
  </div>
 
</footer> -->


</template>

<script>
import "bootstrap/dist/css/bootstrap.min.css";

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

// #titreAccueil {
//   color: black;
//   font-family: fantasy;
//   font-size: xx-large;
//   padding-top: 3%;
//   // background-color: #ed4c4c;
//   // text-align: center;
// }
// #letter {
//   color: red;
// }

// .footer{
//   background-color: rgba(0, 0, 0, 0.815);
//     position:absolute;
//    bottom:0; 
//    width:100%;
//    height:100px;
//    color: white;
// }
</style>
