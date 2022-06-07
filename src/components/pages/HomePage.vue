<template>
  <HomePageWithPuzzle v-if="stage === 0" @next-level="stage++" />
  <LevelOne v-else-if="stage === 1" @next-level="stage++" />
  <LevelTwo v-else-if="stage === 2" @next-level="stage++" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HomePageWithPuzzle from "./puzzles/HomePageWithPuzzle.vue";
import LevelOne from "./puzzles/LevelOne.vue";
import LevelTwo from "./puzzles/LevelTwo.vue";

export default defineComponent({
  data() {
    return {
      stage: 0,
    };
  },
  components: {
    HomePageWithPuzzle,
    LevelOne,
    LevelTwo,
  },
});
</script>

<style>
html,
body {
  width: 100%;
  height: 100%;
  background-color: rgb(var(--bs-primary-rgb)) !important;
}

#app {
  height: 100%;
}

.avatar {
  width: 100%;
  max-width: 200px;
  height: auto;
  border-radius: 50%;
  border: 5px solid #fff;
}

img.fadein {
  animation-name: fadein;
  animation-duration: 1s;
  -webkit-animation-name: fadein;
  -webkit-animation-duration: 1s;
  -moz-animation-name: fadein;
  -moz-animation-duration: 1s;
}

@keyframes fadein {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@-webkit-keyframes fadein {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@-moz-keyframes fadein {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
</style>
