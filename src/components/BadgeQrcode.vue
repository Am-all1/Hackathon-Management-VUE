<template>
  <div id="container">
    <h1>Badge</h1>
    <div id="stylePara">
      <p>Prénom: {{ user.firstname }}</p>
      <p>Nom: {{ user.lastname }}</p>
      <p>Email: {{ user.email }}</p>
      {{ currentUrl }}
    </div>
    <form>
      <input type="hidden" v-model="currentUrl" />
    </form>
    <qrcode-vue v-if="currentUrl" :value="currentUrl" :size="size" level="H" />
  </div>
</template>

<script>
import QrcodeVue from "qrcode.vue";

export default {
  beforeMount() {
    this.currentUrl = localStorage.getItem("@currentUrl");
  },
  mounted() {
    this.getUser();
  },

  components: {
    QrcodeVue,
  },
  data() {
    return {
      user: [],
      currentUrl: "",
    };
  },

  props: {
    token: String,
  },

  methods: {
    async getUser() {
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
  },
};
</script>

<style scoped>
#container {
  margin: 20px;
}
#stylePara {
  margin: 50px;
}
</style>
