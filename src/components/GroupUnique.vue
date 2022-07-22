<template>
  <div class="groupDiv">
    <h2>Nom du Groupe : {{ name }}</h2>
    <p>Sujet : {{ subject }}</p>
    <p>Salle : {{ room }}</p>
    <p>Nombre de membres : {{ members }}</p>
    <p>
      Compétences de qualité qualitative qualitantement parlant :
      {{ abilities }}
    </p>

    <router-link
      :to="{
        name: 'GroupUniqueShow',
        params: {
          id: this.group_id,
        },
      }"
    >
      Voir le groupe</router-link
    >
    <button>Supprimer</button>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    subject: String,
    room: String,
    members: Number,
    abilities: String,
    group_id: Number,
  },
};
</script>
