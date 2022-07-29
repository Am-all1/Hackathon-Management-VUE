<template>
  <div class="slotsPage">
    <div>
      <CreateGroup />
    </div>
    <div class="s">
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
.slotsPage {
  display: flex;
  justify-content: center;
}
</style>
