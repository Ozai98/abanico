<template>
  <div id="map" v-on:click="closeBio()">
    <iframe
      id="displaying-map"
      src="https://snazzymaps.com/embed/272481"
      width="100%"
      height="100%"
      style="border:none;"
    ></iframe>

    <!-- <gmap-map :center="center" :zoom="zoom" style="width: 100%; height: 100%;">
    </gmap-map> -->
  </div>
</template>

<script>
import Vue from "vue";
import * as VueGoogleMaps from "vue2-google-maps";
import EventBus from "@/eventBus.js";
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyCNYzBTscGdChO2WUAeFE6O-G9yLhEsTg0",
  },
});

export default {
  name: "WelcomeMap",
  data() {
    return {
      center: {
        lat: 36.60338869729776,
        lng: -4.643738644531254,
      },
      zoom: 7,
    };
  },
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
