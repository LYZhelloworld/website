<template>
  <NavBar />
  <HomePage />
</template>

<script>
import NavBar from './components/NavBar.vue'
import HomePage from './components/HomePage.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    HomePage
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
