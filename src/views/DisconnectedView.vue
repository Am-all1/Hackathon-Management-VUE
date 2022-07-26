<template>
  <div>
    <button @click="disconnect">déconnexion</button>
  </div>
  <QRgenerator></QRgenerator>
</template>

<script>
export default {
  methods: {
    disconnect() {
      localStorage.removeItem("savedUserToken");
      window.location.reload();
    },
  },
};
</script>
