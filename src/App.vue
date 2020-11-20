<template>
  <div id="app">
    <!-- <div id="nav"><router-link to="/">Home</router-link> |</div> -->
    <router-view />
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap");

* {
  margin: 0;
  padding: 0;
  font-family: "Nunito", sans-serif;
}
.logo {
  height: 8vh;
  max-width: 6vw;
  position: absolute;
  top: 1vw;
  left: 1vw;
  cursor: pointer;
}
h2 {
  color: #4d3b39;
}
</style>
