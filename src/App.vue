<template>
  <NavBar />
  <HomePage />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import NavBar from './components/NavBar.vue';
import HomePage from './components/HomePage.vue';

@Options({
  components: {
    NavBar,
    HomePage,
  },
})
export default class App extends Vue { }
</script>

<style>
</style>
