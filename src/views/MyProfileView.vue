<template>
  <div class="">
    <h2>Mon profil</h2>
    <MyProfile
      v-for="user in users"
      :key="user.id"
      :firstname="user.firstname"
      :lastname="user.lastname"
      :email="user.email"
      :bio="user.bio"
      :linkedIn="user.linkedIn"
      :website="user.website"
      :portfolio="user.portfolio"
      :github="user.github"
      :user_id="user.id"
    />
  </div>
</template>

<script>
import MyProfile from "@/components/MyProfile.vue";

export default {
  // beforeMount() {
  //   this.getUser();
  // },
  data() {
    return {
      users: [],
    };
  },
  components: {
    MyProfile,
  },
  methods: {
    async getUser() {
      const response = await fetch(
        "http://127.0.0.1:8000/api/myprofil/" + this.$route.params.user_id,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("savedUserToken")}`,
          },
        }
      );
      const data = await response.json();
      this.user = data.user;
      console.log(data);
    },
  },
};
</script>

<style scoped></style>
