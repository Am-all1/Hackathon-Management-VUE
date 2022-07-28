<template>
  <!-- BODY -->
  <body>
    <section id="bodyImage">
      <h2>Prochain évènement</h2>
      <h2>J - 10</h2>
    </section>
  </body>
</template>

<script>
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

<style scoped></style>
