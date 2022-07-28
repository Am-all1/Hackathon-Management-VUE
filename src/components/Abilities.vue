<template>
  <hr />
  <section>
    <div>
      <h1>Mes compétences</h1>
      <br />

      <form>
        <div id="formStyle">
          <p>Développeur</p>
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
          <input type="checkbox" name="desiGraph" v-model="designGraphique" />
          <br />
        </div>
        <input type="submit" value="Valider" id="button" />
        <br />
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
      designGraph: "",
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

<style scoped>
h1,
p,
label {
  color: rgb(86, 82, 82);
}

p {
  padding: 5px;
  margin-left: 20px;
}

input {
  margin-left: 10px;
  top: -7px;
  position: relative;
}

#formStyle {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

#button {
  border: 2px solid GREY;
  background-color: white;
  color: grey;
  height: 60px;
  width: 180px;
  cursor: pointer;
  padding: 10px;
  font-size: 20px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

#button:hover {
  border: 2px solid rgb(219, 117, 117);
  background-color: rgb(219, 117, 117);
  color: white;
  font-weight: bold;
}
</style>
