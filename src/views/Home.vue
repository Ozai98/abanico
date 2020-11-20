<template>
  <div class="home">
    <WelcomeHome />
    <WelcomeMap />
    <BioAnfitrion />
  </div>
</template>

<script>
// @ is an alias to /src
import WelcomeHome from "@/components/WelcomeHome.vue";
import WelcomeMap from "@/components/WelcomeMap.vue";
import BioAnfitrion from "@/components/BioAnfitrion.vue";

export default {
  name: "Home",
  components: {
    WelcomeHome,
    WelcomeMap,
    BioAnfitrion,
  },
};
</script>

<style scoped>
.home {
  width: 100vw;
  height: 100vh;
  max-width: 100%;
  max-height: 100%;
  background-color: black;
}
#ex {
  width: 100vw;
  height: 500px;
  color: transparent;
  overflow: hidden;
}
#int {
  width: 800px;
  height: 800px;
  background-color: black;
  margin-left: -70%;
  margin-top: -20%;
  transform: rotate(-10deg);
}
</style>
