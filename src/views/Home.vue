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
}
</style>
