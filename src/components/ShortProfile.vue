<template>
  <div class="ShortProfileLine">
    <p>{{ firstname }}</p>
    <p>{{ lastname }}</p>
    <p>{{ email }}</p>

    <router-link
      :to="{
        name: 'Profil',
        params: {
          user_id: this.user_id,
        },
      }"
    >
      <button class="showBtn">Détails du profil</button>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    firstname: String,
    lastname: String,
    email: String,
    user_id: Number,
  },
};
</script>
