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
  },
  beforeCreate: () => {
    document.body.className = 'bg-primary'
    document.body.style.width = '100vw'
    document.body.style.height = '100vh'
  }
}
</script>

<style>
#app {
  height: 100%;
}
</style>
