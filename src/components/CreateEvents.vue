<template>
  <div>
    <h1>Créer un évènement</h1>

    <form @submit.prevent="createEvent">
      <div>
        <label for="name">Nom:</label>
        <br />
        <input type="text" name="name" v-model="name" />
      </div>

      <br />

      <div>
        <label for="start">Date et heure de début:</label>
        <br />
        <input type="datetime-local" name="start" v-model="start" />
      </div>

      <br />

      <div>
        <label for="end">Date et heure de fin:</label>
        <br />
        <input type="datetime-local" name="end" v-model="end" />
      </div>

      <br />

      <div>
        <label for="location">Lieu:</label>
        <br />
        <input type="text" name="location" v-model="location" />
      </div>

      <br />

      <input type="submit" value="Valider" id="button" />
    </form>

    <p>{{ feedbackMessage }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      start: "",
      end: "",
      location: "",
      feedbackMessage: "",
      token: localStorage.getItem("savedUserToken"),
    };
  },

  methods: {
    /* Création d'un event */
    async createEvent() {
      const body = {
        name: this.name,
        start: this.start,
        end: this.end,
        location: this.location,
      };

      const response = await fetch("http://127.0.0.1:8000/api/events", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${localStorage.getItem("savedUserToken")}`,
        },
        body: JSON.stringify(body),
      });
      const data = await response.json();

      this.feedbackMessage = data.message;

      this.$emit("created");

      this.name = "";
      this.start = "";
      this.end = "";
      this.location = "";
    },
  },
};
</script>

<style scoped>
li {
  list-style-type: none;
}

h1,
label {
  color: rgb(86, 82, 82);
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
}

#button:hover {
  border: 2px solid rgb(219, 117, 117);
  background-color: rgb(219, 117, 117);
  color: white;
  font-weight: bold;
}
</style>
