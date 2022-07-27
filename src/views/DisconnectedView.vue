<template>
  <div>
    <button @click="disconnect">déconnexion</button>
  </div>
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

