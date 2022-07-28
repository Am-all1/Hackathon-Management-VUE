<template>
  <div class="eventDiv">
    <p>Nom: {{ name }}</p>
    <p>Date de début: {{ start }}</p>
    <p>Date de fin: {{ end }}</p>
    <p>Lieu: {{ location }}</p>
    <p>{{ event_id }}</p>

    <router-link
      :to="{
        name: 'EventUnique',
        params: {
          event_id: this.event_id,
        },
      }"
    >
      <button class="showBtn">Montrer l'évènement</button></router-link
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
  },

  methods: {
    async deleteEvent() {
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
