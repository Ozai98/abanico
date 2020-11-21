<template>
  <div id="container">
    <div id="map" v-on:click="closeBio()">
      <iframe
        id="displaying-map"
        src="https://snazzymaps.com/embed/272481"
        width="100%"
        height="100%"
        style="border:none;"
      ></iframe>
    </div>
    <div id="container-explorer">
      <button id="bottom-explorer-div" v-on:click="$router.push('/explorer')">
        Explora lugares turísticos
      </button>
    </div>
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
@media screen and (max-width: 600px) {
  #map {
    height: 71vh;
    width: 100vw;
    margin: 0;
  }
  #container-explorer {
    height: 4vh;
    width: 100vw;
    text-align: center;
  }
  #bottom-explorer-div {
    width: 50%;
    height: 3vh;
    margin: 0.5vh 0;
    background-color: white;
    color: #ff6d2d;
    outline: none;
    border: none;
    font-size: 2vh;
    font-weight: 700;
    border-radius: 2vh;
    border: 1px solid #ff6d2d;
  }
}
@media screen and (min-width: 601px) {
  #map {
    position: absolute;
    height: 100vh;
    width: 80vw;
    top: 0;
    right: 0;
    z-index: 1;
  }
  #container-explorer {
    display: none;
  }
}
</style>
