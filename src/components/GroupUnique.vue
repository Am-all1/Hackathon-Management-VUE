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
    <p>*****************************</p>
    <p>
      POUR VERFICATION : ce groupe appartient à l'événement event_id =
      {{ event_id }} et a pour group_id : {{ group_id }}
    </p>

    <router-link
      v-if="!viewing"
      :to="{
        name: 'GroupUniqueShow',
        params: {
          group_id: this.group_id,
        },
      }"
      ><button>Voir le groupe</button>
    </router-link>
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
    event_id: Number,
    viewing: Boolean,
  },
};
</script>
