<template>
  <div class="container">
    <div class="side-bar">
      <div class="header">
        <img
          class="logo"
          src="@/assets/abanico_isologotipo.png"
          alt="logo abanico"
          v-on:click="$router.push('/')"
        />
        <h2>Bienvenido a Penco</h2>
      </div>
      <div class="place-list">
        <div id="pink-band">
          <h2>Lugares</h2>
        </div>
        <div class="button-list">
          <button id="imp" class="place-button">Importantes</button>
          <button id="eat" class="place-button">Dónde comer</button>
          <button id="atm" class="place-button">Cajas vecinas</button>
          <button id="trade" class="place-button">Comercio</button>
        </div>
      </div>
    </div>
    <div class="map">
      <ExplorerMap />
    </div>
  </div>
</template>

<script>
import ExplorerMap from "@/components/ExplorerMap.vue";
export default {
  components: {
    ExplorerMap,
  },
};
</script>

<style scoped>
.container {
  width: 100vw;
  max-width: 100%;
  height: 100vh;
  max-height: 100%;
  display: flex;
  flex-direction: row;
}
.side-bar {
  background-image: url("../assets/side-bar.svg");
  background-size: cover;
  width: 32vw;
  height: 100vh;
  z-index: 2;
  grid-template: ;
}
.map {
  width: 50vw;
}
.header {
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 30vh;
}
.header > h2 {
  margin-top: 40px;
}
.place-list {
  height: 70vh;
  max-height: 100%;
  width: 100%;
  justify-content: flex-start;
}
.place-button {
  color: #4d3b39;
  font-size: 1em;
  font-weight: 700;
  width: 30%;
  height: 3vh;
  border: none;
  background-color: #ffe164;
  border-radius: 15px;
  outline: none;
}
.place-button:hover {
  cursor: pointer;
  transform: scale(1.05) perspective(1px);
}
.place-button:focus {
  background-color: #ff6d2d;
  color: white;
}
.button-list {
  height: 35vh;
  justify-content: space-around;
  align-items: flex-end;
}
.place-list,
.button-list {
  display: flex;
  flex-direction: column;
  outline: none;
}
#pink-band {
  background-color: #f9d9d2;
  border-radius: 0px 20px 20px 0;
  width: 80%;
  height: 3vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 3vh;
}
#pink-band > h2 {
  font-weight: 700;
  font-size: 1.2em;
  text-align: right;
  padding-right: 3vw;
}
#imp {
  margin-right: 22.5%;
}
#eat {
  margin-right: 25%;
}
#atm {
  margin-right: 27.5%;
}
#trade {
  margin-right: 30%;
}
</style>
