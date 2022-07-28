<template>
  <div class=""><BadgeQrcode :token="this.token" /></div>
</template>

<script>
import MyProfile from "@/components/MyProfile.vue";
import BadgeQrcode from "@/components/BadgeQrcode.vue";

export default {
  data() {
    return {
      token: localStorage.getItem("savedUserToken"),
    };
  },

  components: {
    MyProfile,
    BadgeQrcode,
  },
};
</script>

<style scoped></style>
