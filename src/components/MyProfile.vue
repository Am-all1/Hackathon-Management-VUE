<template>
  <hr />
  <div>
    <h1>Mon profil</h1>
    <!-- <span>{{ picture }}</span> -->
    <div id="blocContainer">
      <div id="leftContainer" class="container">
        <div>
          <p>Biographie:</p>
          <p>{{ user.bio }}</p>
        </div>
      </div>
      <div id="centerContainer" class="container">
        <p>
          Prénom: <span>{{ user.firstname }}</span>
        </p>
        <p>
          Nom: <span>{{ user.lastname }}</span>
        </p>
        <p>
          Email: <span>{{ user.email }}</span>
        </p>
        <p>
          Mot de passe: <span>{{ user.password }}</span>
        </p>
      </div>
      <div id="rightContainer" class="container">
        <p>
          LinkedIn: <span>{{ user.linkedIn }}</span>
        </p>
        <p>
          GitHub: <span>{{ user.github }}</span>
        </p>
        <p>
          Website: <span>{{ user.website }}</span>
        </p>
        <p>
          PortFolio: <span>{{ user.portfolio }}</span>
        </p>
      </div>
    </div>
    <div id="btnBloc">
      <div>
        <button @click="redirectionBadge">Badge</button>
      </div>
      <div>
        <button @click="$router.push('/modifications')">Modifier</button>
      </div>
      <div>
        <button @click="disconnect">Se déconnecter</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.getUserById();
    this.saveUrl();
  },
  data() {
    return {
      user: [],
    };
  },
  props: {
    token: String,
  },
  // Récupérer les infos d'un USER
  methods: {
    async getUserById() {
      const response = await fetch("http://127.0.0.1:8000/api/my-profile/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${localStorage.getItem("savedUserToken")}`,
        },
      });
      const data = await response.json();
      this.user = data.user;
    },

    disconnect() {
      localStorage.removeItem("savedUserToken");
      window.location.reload();
    },
    redirectionBadge() {
      window.location.href = "/#/pageqrcode";
    },
    saveUrl() {
      console.log(window.location);
      localStorage.setItem("@currentUrl", window.location.href);
    },
  },
};
</script>
<style scoped>
h1,
p {
  color: rgb(86, 82, 82);
}

label {
  margin: 10px;
}

#blocContainer {
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: left;
  height: 280px;
  margin-top: 50px;
}

#centerContainer {
  margin: 0px 40px 20px 40px;
}

#leftContainer {
  margin-left: 240px;
}

#rightContainer {
  margin-right: 240px;
}

.container {
  width: 20%;
}

button {
  border: 2px solid GREY;
  background-color: white;
  color: grey;
  height: 60px;
  width: 180px;
  cursor: pointer;
  padding: 10px;
  font-size: 20px;
}

button:hover {
  border: 2px solid rgb(219, 117, 117);
  background-color: rgb(219, 117, 117);
  color: white;
  font-weight: bold;
}

#btnBloc {
  display: flex;
  justify-content: center;
  position: relative;
  padding-bottom: 5%;
}
</style>
