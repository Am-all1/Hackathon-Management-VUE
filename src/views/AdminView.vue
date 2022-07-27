<template>
  <div>
    <Admin />
  </div>
</template>

<script>
import Admin from "@/components/Admin.vue";
export default {
  data() {
    return {};
  },
  components: {
    Admin,
  },
};
</script>

<style scoped>
h1,
h2,
table {
  color: rgb(86, 82, 82);
}
form {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: center;
  align-items: stretch;
}

button {
  border: 2px solid GREY;
  background-color: white;
  color: grey;
  height: 30px;
  width: 90px;
  cursor: pointer;
  padding: 10px;
  font-size: 20px;
  display: inline-flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
}

button:hover {
  border: 2px solid rgb(219, 117, 117);
  background-color: rgb(219, 117, 117);
  color: white;
  font-weight: bold;
}
</style>
