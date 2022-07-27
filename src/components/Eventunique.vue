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
    deleteEvent(e) {
      const index = e.target.dataset.index;
      this.doneList.splice(index, 1);
    },
  },
};
</script>
<style scoped></style>
