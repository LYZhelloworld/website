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
</style>
