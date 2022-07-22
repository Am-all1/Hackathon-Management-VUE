
<template>
  <section>
    <div>
      <h1>Domaine de compétences</h1>
      <br />

      <form>
        <p>Developpeur</p>
        <input type="checkbox" name="dev" v-model="dev" />
        <p>UI/UX</p>
        <input type="checkbox" name="design" v-model="design" />
        <p>Maker</p>
        <input type="checkbox" name="maker" v-model="maker" />
        <p>Management</p>
        <input type="checkbox" name="management" v-model="management" />
        <p>Commercial</p>
        <input type="checkbox" name="commercial" v-model="commercial" />
        <p>Communication</p>
        <input type="checkbox" name="communication" v-model="communication" />
        <p>OPS</p>
        <input type="checkbox" name="ops" v-model="ops" />
        <p>design graphique</p>
        <input type="checkbox" name="desiGraph" v-model="design" />
        <br>
        <br>
        <input type="submit" value="valider" />
      </form>
    </div>
  </section>
</template>

<script>

export default {
  data() {
    return {
      users: [],
      dev: "",
      design: "",
      maker: "",
      management: "",
      commercial: "",
      communication: "",
      ops: "", 
      designGraph:"",
    };
  },

  methods: {
    /* Récupération */
    async getAbilities() {
      const response = await fetch("http://127.0.0.1:8000/api/users", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      const data = await response.json();
      this.abilities = data.abilities;
    },

    /* Création des modifs */
    async createAbilities() {
      const body = {
        dev: this.dev,
        design: this.design,
        maker: this.maker,
        management: this.management,
        commercial: this.commercial,
        communication: this.communication,
        ops: this.ops,
        designGraph: this.designGraph,
      };

      const response = await fetch("http://127.0.0.1:8000/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(body),
      });

      const data = await response.json();

      this.feedbackMessage = data.message;

      this.getAbilities();

      // firstname: this.firstname,
      // lastname: this.lastname,
      // email: this.email,
      // password: this.password,
    },
  },

  mounted() {
    this.getAbilities();
  },
};
</script>

