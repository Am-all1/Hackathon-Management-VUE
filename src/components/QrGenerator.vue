<template>
  <div>
    <form>
      <label for="">Générer mon QR CODE</label>
      <br />
      <input type="text" v-model="QrValue" />
    </form>
    <br />
    <qrcode-vue v-if="QrValue" :value="QrValue" size="300" level="H" />
  </div>
</template>

<script>
import QrcodeVue from "qrcode.vue";

export default {
  data() {
    return {
      QrValue: null,
    };
  },
  components: {
    QrcodeVue,
  },
};
</script>
