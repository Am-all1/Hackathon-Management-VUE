<template>
  <section>
    <div>
      <button @click="submit">Inscrire</button>
      <div>
        <Formulaire></Formulaire>
      </div>
    </div>
  </section>
</template>

<script>
// import Generique from "./Generique.vue";
import Formulaire from "./Formulaire.vue";

export default {
  components: {
    // Generique,
    Formulaire
},
  data() {
    return {
      formulaireData: [],
    };
  },
  methods: {
    async submit() {
      let retourRequete = await fetch(
      );
      let donnees = await retourRequete.json();
      this.formulaireData = donnees.list;
    },
  },
};
</script>

<style scoped></style>









