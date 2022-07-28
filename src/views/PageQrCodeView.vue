<template>
  <hr />
  <h1>Mon badge</h1>
  <MyProfil
    v-for="user in users"
    :key="user.id"
    :lastname="user.lastname"
    :firstname="user.firstname"
  ></MyProfil>
  <form>
    <input type="hidden" v-model="QRValue" />
  </form>
  <qrcode-vue v-if="QRValue" :value="value" :size="size" level="H" />
</template>

<script>
import MyProfile from "@/components/MyProfile.vue";
import QrcodeVue from "qrcode.vue";

export default {
  components: {
    MyProfile,
    QrcodeVue,
  },
  data() {
    return {
      users: [],
      token: localStorage.getItem("savedUserToken"),
      QRValue: "currentUrl",
    };
  },

  methods: {
    async getUser() {
      const response = await fetch(
        "http://127.0.0.1:8000/api/users/" + this.$route.params.user_id,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${localStorage.getItem("savedUserToken")}`,
          },
        }
      );
      const data = await response.json();
      this.user = data.user;
    },
    test() {
      var currentUrl = window.location.pathname;
      console.log("test");
      console.log(currentUrl);
    },
  },
};
</script>
