<template>
  <section>
    <div>
      <h1>Inscription d'un nouveau groupe</h1>
      <br />

      <form @submit.prevent="createGroup">
        <p>Nom du groupe :</p>
        <input type="text" name="name" v-model="name" />
        <p>Sujet du groupe :</p>
        <input type="text" name="subject" v-model="subject" />
        <p>Salle :</p>
        <input type="text" name="room" v-model="room" />
        <p>Nombre de personnes :</p>
        <input type="text" name="members" v-model="members" />
        <p>Compétences :</p>
        <input type="text" name="abilities" v-model="abilities" />
        <input type="hidden" name="event_id" />
        <input type="submit" value="s'inscrire" />
      </form>
      <p>{{ feedbackMessage }}</p>
    </div>
    <hr />
  </section>
</template>

<script>
export default {
  data() {
    return {
      groups: [],
      subject: "",
      name: "",
      room: "",
      members: "",
      abilities: "",
      feedbackMessage: "",
    };
  },
  props: {
    event_id: Number,
  },

  methods: {
    /* Création d'un groupe */
    async createGroup() {
      const body = {
        subject: this.subject,
        name: this.name,
        room: this.room,
        members: this.members,
        abilities: this.abilities,
        event_id: this.event_id,
      };

      const response = await fetch("http://127.0.0.1:8000/api/groups", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },

        body: JSON.stringify(body),
      });

      const data = await response.json();

      this.feedbackMessage = data.message;

      this.$emit("groupCreated");

      this.subject = "";
      this.name = "";
      this.room = "";
      this.members = "";
      this.abilities = "";
    },

    /* async getGroup() {
      const response = await fetch("http://127.0.0.1:8000/api/groups", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      const data = await response.json();
      this.groups = data.groups;
    }, */
  },

  mounted() {
    this.getGroup();
  },
};
</script>

<style scoped>
li {
  list-style-type: none;
}
</style>
