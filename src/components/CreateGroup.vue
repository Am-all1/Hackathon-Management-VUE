<template>
  <section>
    <div>
      <h1>Créer un groupe</h1>
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
        <!-- 
          Compétences : LES COMPETENCES NE DOIVENT PAS ÊTRE AJOUTEES
          MANUELLEMENT ICI, MAIS IMPORTEES DANS LE GROUPE AUTOMATIQUEMENT LORS
          DE L'AJOUT D'UN PARTICIPANT
         -->
        <p>Compétences => L'input ci-dessous devra dégager</p>
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
  mounted() {
    //this.getGroup();
  },
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
      console.log(
        "Affichgae de données du body : subject = " +
          this.subject +
          " event_id = " +
          this.event_id
      );
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
};
</script>

<style scoped>
li {
  list-style-type: none;
}
</style>
