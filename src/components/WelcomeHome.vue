<template>
  <div id="container">
    <div id="logo-spacer">
      <img
        class="logo"
        src="@/assets/abanico_isologotipo.png"
        alt="logo abanico"
      />
    </div>
    <h1>Bienvenido a Penco</h1>
    <div id="yellow-band">
      <h2>Conoce a nuestros anfitriones</h2>
    </div>
    <div id="wrapper-anfitriones">
      <div id="anfitriones-div">
        <div class="profile-pic-div">
          <img
            class="profile-pic"
            src="@/assets/perfil_1.jpeg"
            alt="foto anfitrión"
            v-on:click="openAnfitrion1()"
          />
        </div>
        <div class="profile-pic-div">
          <img
            class="profile-pic"
            src="@/assets/perfil_2.jpg"
            alt="foto anfitrión"
            v-on:click="openAnfitrion2()"
          />
        </div>
        <div class="profile-pic-div">
          <img
            class="profile-pic"
            src="@/assets/perfil_3.jpg"
            alt="foto anfitrión"
            v-on:click="openAnfitrion3()"
          />
        </div>
      </div>
    </div>
    <button id="go-to-explorer" v-on:click="$router.push('/explorer')">
      Explora lugares turísticos
    </button>
  </div>
</template>

<script>
import EventBus from "../eventBus.js";
export default {
  methods: {
    openAnfitrion1() {
      EventBus.$emit("openAnfi1");
    },
    openAnfitrion2() {
      EventBus.$emit("openAnfi2");
    },
    openAnfitrion3() {
      EventBus.$emit("openAnfi3");
    },
  },
};
</script>

<style scoped>
div {
  background-color: transparent;
}

@media screen and (max-width: 600px) {
  h1 {
    color: #4d3b39;
    font-size: 3vh;
    font-weight: 700;
    margin: 2vh;
    text-align: right;
    width: 80%;
    padding-top: 1vh;
  }
  .logo {
    height: 5vh;
    max-width: 30vw;
    top: 2vh;
    left: 2vh;
  }
  #yellow-band {
    margin-left: 20%;
    background-color: #ffe164;
    border-radius: 20px 0px 0px 20px;
    width: 80%;
    height: 3vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
  }
  #yellow-band > h2 {
    font-weight: 800;
    margin: auto;
    font-size: 2vh;
  }
  #container {
    height: 25vh;
    display: flex;
    flex-direction: column;
    width: 100vw;
  }
  #wrapper-anfitriones {
    width: 100%;
  }
  #anfitriones-div {
    margin: auto;
    margin-top: 1vh;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    width: 80%;
  }
  .profile-pic-div {
    height: 8vh;
    overflow: hidden;
    border-radius: 100%;
    border: 8px solid #f9d9d2;
  }
  .profile-pic {
    height: 8vh;
  }
  #go-to-explorer {
    display: none;
  }
}
@media screen and (min-width: 601px) {
  h1 {
    color: #4d3b39;
    font-size: 2vw;
    font-weight: 700;
    margin: auto;
  }
  #yellow-band {
    background-color: #ffe164;
    border-radius: 0px 20px 20px 0;
    width: 80%;
    height: 4vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
  }
  #yellow-band > h2 {
    font-weight: 800;
    margin: auto;
  }
  #container {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    height: 100vh;
    max-height: 100vh;
    min-width: 688.41px;
    display: flex;
    flex-direction: column;
    width: 40vw;
    background-image: url("../assets/sidebar-home.svg");
    background-size: cover;
  }
  #logo-spacer {
    width: 100%;
    height: 40vh;
    text-align: left;
  }
  #wrapper-anfitriones {
    height: 20%;
    width: 100%;
  }
  #anfitriones-div {
    margin: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    width: 60%;
  }
  .profile-pic-div {
    height: 10vh;
    overflow: hidden;
    border-radius: 100%;
    border: 8px solid #f9d9d2;
  }
  .profile-pic-div:hover {
    border: 8px solid #ff6d2d;
    cursor: pointer;
  }
  .profile-pic {
    height: 10vh;
  }
  #go-to-explorer {
    margin: auto;
    width: 50%;
    background-color: white;
    color: #ff6d2d;
    outline: none;
    border: none;
    font-size: 1.5em;
    font-weight: 700;
    border-radius: 2vw;
    padding: 4px;
    border: 1px solid #ff6d2d;
  }

  #go-to-explorer:hover {
    cursor: pointer;
    transform: scale(1.05) perspective(1px);
    color: white;
    background-color: #ff6d2d;
  }
}
</style>
