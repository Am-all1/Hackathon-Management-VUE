<template>
  <div id="mainContainer">
    <h1>Créer un créneau horaire</h1>

    <form @submit.prevent="createSlot">
      <div>
        <label for="title">Titre:</label>
        <br />
        <input type="text" name="title" v-model="title" />
      </div>

      <br />

      <div>
        <label for="teams">Nombre d'équipes:</label>
        <br />
        <input type="number" name="teams" v-model="teams" />
      </div>

      <br />

      <div>
        <label for="start">Heure de début:</label>
        <br />
        <input type="time" name="start" v-model="start" />
      </div>

      <br />

      <div>
        <label for="duration">Durée:</label>
        <br />
        <select name="duration" v-model="duration">
          <option disabled value="">Choisissez</option>
          <option>15 min</option>
          <option>30 min</option>
          <option>45 min</option>
          <option>60 min</option>
        </select>
      </div>
      <br />
      <input type="submit" value="Valider" id="button" />
    </form>

    <p>{{ feedbackMessage }}</p>

    <h2>Liste des créneaux:</h2>
    <ul>
      <li v-for="slot in slots" :key="slot.id">
        <p>Nom: {{ slot.title }}</p>
        <p>Date de début: {{ slot.start }}</p>
        <p>Date de fin: {{ slot.duration }}</p>
        <p>Lieu: {{ slot.teams }}</p>
        <button>Voir</button>
        <button>Supprimer</button>
        <hr />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slots: [],
      title: "",
      start: "",
      duration: "",
      teams: "",
      feedbackMessage: "",
    };
  },

  methods: {
    /* Récupération des slots */
    async getSlots() {
      const response = await fetch("http://127.0.0.1:8000/api/slots", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      const data = await response.json();
      this.slots = data.slots;
    },

    /* Création d'un slot */
    async createSlot() {
      const body = {
        title: this.title,
        start: this.start,
        duration: this.duration,
        teams: this.teams,
      };

      const response = await fetch("http://127.0.0.1:8000/api/slots", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(body),
      });

      const data = await response.json();

      this.feedbackMessage = data.message;

      this.getSlots();

      // vider les inputs
      this.title = "";
      this.start = "";
      this.duration = "";
      this.teams = "";
    },
  },

  // afficher au rechargement de la page
  mounted() {
    this.getSlots();
  },
};
</script>

<style scoped>
li {
  list-style-type: none;
}

h1,
form,
label,
h2,
li {
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
