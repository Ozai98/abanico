<template>
  <div id="map" v-on:click="closeBio()">
    <iframe
      src="https://snazzymaps.com/embed/275315"
      width="100%"
      height="100%"
      style="border:none;"
      id="displaying-map"
    ></iframe>
  </div>
</template>

<script>
import EventBus from "@/eventBus.js";

export default {
  name: "WelcomeMap",
  mounted() {
    EventBus.$on("toImportant", function() {
      document.getElementById("displaying-map").src =
        "https://snazzymaps.com/embed/275315";
    });
    EventBus.$on("toEat", function() {
      document.getElementById("displaying-map").src =
        "https://snazzymaps.com/embed/275316";
    });
    EventBus.$on("toAtm", function() {
      document.getElementById("displaying-map").src =
        "https://snazzymaps.com/embed/275317";
    });
    EventBus.$on("toTrade", function() {
      document.getElementById("displaying-map").src =
        "https://snazzymaps.com/embed/275319";
    });
  },
};
</script>

<style scoped>
@media screen and (max-width: 600px) {
  #map {
    height: 78vh;
    width: 100vw;
  }
}
@media screen and (min-width: 601px) {
  #map {
    position: absolute;
    height: 100vh;
    width: 90vw;
    top: 0;
    right: 0;
    z-index: 1;
  }
}
</style>
