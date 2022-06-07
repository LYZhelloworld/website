<template>
  <NavBar />
  <HomePage />
</template>

<script lang="ts">
import NavBar from "./components/NavBar.vue";
import HomePage from "./components/HomePage.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    NavBar,
    HomePage,
  },
});
</script>
