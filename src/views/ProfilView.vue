<template>
  <div class="">
    <!-- <Profil
      v-for="user in users"
      :key="user.id"
      :firstname="user.firstname"
      :lastname="user.lastname"
      :email="user.email"
      :bio="user.bio"
      :picture="user.picture"
      :linkedIn="user.linkedIn"
      :github="user.github"
      :website="user.website"
      :portfolio="user.portfolio"
    >
    </Profil> -->
    <input type="button" @click="qrCreate" value="Générer un badge" />
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
