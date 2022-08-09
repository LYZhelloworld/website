<template>
  <NavBar :items="navBarItems" :selected="0" />
  <HomePage />
</template>

<script lang="ts">
import NavBar from "./components/controls/NavBar.vue";
import HomePage from "./components/pages/HomePage.vue";
import { defineComponent } from "vue";

const NAVBAR_ITEMS = ["Home"];

export default defineComponent({
  components: {
    NavBar,
    HomePage,
  },
  data() {
    return {
      navBarItems: NAVBAR_ITEMS,
    };
  },
});
</script>
