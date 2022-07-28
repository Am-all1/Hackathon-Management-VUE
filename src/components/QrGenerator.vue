<template>
  <hr />
  <div class="">
    <form>
      <h1 for="">Générer mon QR CODE</h1>
      <br />
      <input type="text" v-model="QRValue" />
    </form>
    <qrcode-vue v-if="QRValue" :value="value" :size="size" level="H" />
  </div>
  <div>
    <p>{{ error }}</p>
    <p>{{ decodeString }}</p>
    <qrcode-stream @init="onInit" @decode="onDecode"></qrcode-stream>
  </div>
</template>

<script>
import QrcodeVue from "qrcode.vue";
import { QrcodeStream } from "vue3-qrcode-reader";
export default {
  data() {
    return {
      value: "this.token",
      QRValue: null,
      error: "",
      decodeString: "",
    };
  },
  components: {
    QrcodeVue,
    QrcodeStream,
  },
  methods: {
    async onInit(promise) {
      try {
        const { capabilities } = await promise;

        // successfully initialized
      } catch (error) {
        if (error.name === "NotAllowedError") {
          this.error = "user denied camera access permisson";
        } else if (error.name === "NotFoundError") {
          this.error = "no suitable camera device installed";
        } else if (error.name === "NotSupportedError") {
          this.error = "page is not served over HTTPS (or localhost)";
        } else if (error.name === "NotReadableError") {
          this.error = "maybe camera is already in use";
        } else if (error.name === "OverconstrainedError") {
          this.error =
            "did you requested the front camera although there is none?";
        } else if (error.name === "StreamApiNotSupportedError") {
          this.error = "browser seems to be lacking features";
        }
      } finally {
        // hide loading indicator
      }
    },
    onDecode(decodeString) {
      this.decodeString = decodeString;
      window.location.replace(decodeString);
    },
  },
};
</script>
