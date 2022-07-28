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
      <button class="test">Montrer l'évènement</button></router-link
    >

    <button @click="deleteEvent">Supprimer</button>
    <hr />
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    start: String,
    end: String,
    location: String,
    event_id: Number,
  },

  methods: {
    async deleteEvent(event) {
      const response = await fetch(
        "http://127.0.0.1:8000/api/events/" + this.$route.params.event_id,

        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );

      const data = await response.json();
      this.events = data.events;
      this.events.splice(this.events.indexOf(event), 1);
    },
  },
};
</script>
<style scoped></style>
