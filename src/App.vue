<template>
  <div id="app">
    <NavBar/>
    <Home/>
  </div>
</template>

<script>

import Home from "@/components/Home";
import NavBar from "@/components/NavBar";

export default {
  name: 'App',
  components: {
    NavBar,
    Home
  }
}
</script>

<style>
body {
  width: 100vw;
  height: 100vh;
}

#app {
  height: 100%;
}
</style>
