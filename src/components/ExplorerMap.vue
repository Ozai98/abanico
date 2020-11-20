<template>
  <div id="map" v-on:click="closeBio()">
    <iframe
      src="https://snazzymaps.com/embed/275315"
      width="100%"
      height="100%"
      style="border:none;"
    ></iframe>
  </div>
</template>

<script>
import EventBus from "@/eventBus.js";

export default {
  name: "WelcomeMap",
  methods: {
    closeBio() {
      EventBus.$emit("closeBio");
    },
  },
};
</script>

<style scoped>
#map {
  position: absolute;
  height: 100vh;
  width: 90vw;
  top: 0;
  right: 0;
  z-index: 1;
}
</style>
