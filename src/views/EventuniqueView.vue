<template>
  <div class="">
    <Eventunique
      v-if="event.id != null"
      :name="event.name"
      :start="event.start"
      :end="event.end"
      :location="event.location"
      :event_id="event.id"
    />

    <Formulaire />
  </div>
</template>

<script>
import Eventunique from "@/components/Eventunique.vue";
import Formulaire from "@/components/Formulaire.vue";
export default {
  mounted() {
    this.getEventUnique();
  },
  data() {
    return {
      event: {},
    };
  },

  components: {
    Eventunique,
    Formulaire,
  },
  props: {
    // name: String,
    // start: String,
    // end: String,
    // location: String,
    // event_id: Number,
  },

  methods: {
    /* Récupération des events unique */
    async getEventUnique() {
      const response = await fetch(
        "http://127.0.0.1:8000/api/events/" + this.$route.params.id,
        {
          method: "GET",
          // params: { event_id: id },
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
      const data = await response.json();
      this.event = data.event;
    },
  },
};
</script>

<style scoped></style>
