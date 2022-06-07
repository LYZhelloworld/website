<template>
  <NavBar />
  <HomePage />
</template>

<script lang="ts">
import NavBar from "./components/controls/NavBar.vue";
import HomePage from "./components/pages/HomePage.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    NavBar,
    HomePage,
  },
});
</script>
