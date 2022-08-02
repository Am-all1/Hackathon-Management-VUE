<template>
  <div class="row">
    <div class="col-sm-12" id="blup">
      <div class="card text-bg-light mb-3" style="max-width: 30rem">
        <div class="card-header">{{ name }}</div>
        <div class="card-body">
          <h5 class="card-title">Light card title</h5>
          <h5 class="card-title">{{ event_id }}</h5>
          <p class="card-text">Date de début: {{ start }}</p>
          <p class="card-text">Date de fin: {{ end }}</p>
          <p class="card-text">Lieu: {{ location }}</p>
          <p class="card-text">
            <small class="text-muted">Last updated 3 mins ago</small>
          </p>
          <router-link
            :to="{
              name: 'EventUnique',
              params: {
                event_id: this.event_id,
              },
            }"
          >
            <button class="btn btn-primary">Montrer l'évènement</button>
          </router-link>
        </div>
      </div>
    </div>
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
    async deleteEvent() {
      console.log(this.event_id);
      const response = await fetch(
        "http://127.0.0.1:8000/api/events/" + $event_id,

        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );

      const data = await response.json();

      this.events.splice(this.events.indexOf(event), 1);
    },
  },
};
</script>

<style scoped></style>
