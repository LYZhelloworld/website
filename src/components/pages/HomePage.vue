<template>
  <HomePageWithPuzzle v-if="stage === 0" @next-level="stage++" />
  <LevelOne v-else-if="stage === 1" @next-level="stage++" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HomePageWithPuzzle from "./puzzles/HomePageWithPuzzle.vue";
import LevelOne from "./puzzles/LevelOne.vue";

export default defineComponent({
  data() {
    return {
      stage: 0,
    };
  },
  components: {
    HomePageWithPuzzle,
    LevelOne,
  },
});
</script>
