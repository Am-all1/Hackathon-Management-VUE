<template>
<<<<<<< HEAD
  <div class="slotsPage">
=======
  <hr />
  <div class="componenterinos">
>>>>>>> baabe8279716ca74288c5f78fd04d6adf7961ef2
    <div>
      <CreateGroup />
    </div>
    <div>
      <CreateSlots />
    </div>
  </div>
</template>

<script>
import CreateSlots from "@/components/CreateSlots.vue";
import CreateGroup from "@/components/CreateGroup.vue";
export default {
  components: {
    CreateSlots,
    CreateGroup,
  },
};
</script>

<style scoped>
.componenterinos {
  /* display: flex;
  justify-content: center;
  gap: 12%; */
}
</style>
