<template>
  <div class="eventDiv">
    <p>Nom: {{ name }}</p>
    <p>Date de début: {{ start }}</p>
    <p>Date de fin: {{ end }}</p>
    <p>Lieu: {{ location }}</p>
    <p>{{ event_id }}</p>

    <router-link
      v-if="!viewing"
      :to="{
        name: 'EventUnique',
        params: {
          event_id: this.event_id,
        },
      }"
    >
      <button class="test" @click="showEvent">
        Montrer l'évènement
      </button></router-link
    >

    <button @click="deleteEvent">Supprimer</button>
    <hr />
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "",
    };
  },
  props: {
    name: String,
    start: String,
    end: String,
    location: String,
    event_id: Number,
    viewing: Boolean,
  },

  methods: {
    showEvent() {
      console.log("Entrée showEvent");
      this.$emit("showing");
    },

    async deleteEvent() {
      console.log(
        "entrée dans méthode delete avec event_id : " + this.event_id
      );
      const response = await fetch(
        "http://127.0.0.1:8000/api/events/" + this.event_id,

        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );

      const data = await response.json();
      this.message = data.message;

      this.$emit("eventDeleted");
    },
  },
};
</script>
<style scoped></style>
