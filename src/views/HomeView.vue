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

<style scoped>
/* BODY */
#bodyImage {
  opacity: 0.9;

  background-image: url("../assets/nice.jpeg");
  background-size: cover;
  height: 450px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 70px;
  text-shadow: 2px 2px 2px black;
}

h2 {
  margin: 40px;
  opacity: 1;
  font-size: 1em;
}
</style>
