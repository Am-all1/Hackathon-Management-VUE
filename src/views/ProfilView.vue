<template>
  <div class="">
    <Profil
      :firstname="firstname"
      :lastname="lastname"
      :email="email"
      :bio="bio"
    >
    </Profil>
  </div>
</template>

<script>
import Profil from "@/components/Profil.vue";
export default {
  components: {
    Profil,
  },
  data() {
    return {
      user: [],
    };
  },

  methods: {
    async getProfil() {
      const options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("savedUserToken")}`,
        },
      };

      const response = await fetch(
        "http://127.0.0.1:8000/api/profil/{user_id}",
        options
      );
      const data = await response.json();
      this.user = data;
      console.log(data);
      console.log(this.user);
    },
  },
};
</script>

<style scoped></style>
