<template>
  <div class="main align-items-center justify-content-center mb-auto">
    <HomePageWithPuzzle v-if="stage === 0" @next-level="stage++" />
    <LevelOne v-else-if="stage === 1" @next-level="stage++" />
    <LevelTwo v-else-if="stage === 2" @next-level="stage++" />
    <LevelThree v-else-if="stage === 3" @next-level="stage++" />
    <LevelFour v-else-if="stage === 4" @next-level="stage++" />
    <LevelFive v-else-if="stage === 5" @next-level="stage++" />
    <LevelSix v-else-if="stage === 6" @next-level="stage++" />
    <LevelSeven v-else-if="stage === 7" @next-level="stage++" />
    <LevelEight v-else-if="stage === 8" @next-level="stage++" />
    <LevelNine v-else-if="stage === 9" @next-level="stage++" />
    <LevelTen v-else-if="stage === 10" @next-level="stage++" />
    <EndOfGame v-else @restart="stage = 0" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HomePageWithPuzzle from "./puzzles/HomePageWithPuzzle.vue";
import LevelOne from "./puzzles/Level01.vue";
import LevelTwo from "./puzzles/Level02.vue";
import LevelThree from "./puzzles/Level03.vue";
import LevelFour from "./puzzles/Level04.vue";
import LevelFive from "./puzzles/Level05.vue";
import LevelSix from "./puzzles/Level06.vue";
import LevelSeven from "./puzzles/Level07.vue";
import LevelEight from "./puzzles/Level08.vue";
import LevelNine from "./puzzles/Level09.vue";
import LevelTen from "./puzzles/Level10.vue";
import EndOfGame from "./puzzles/EndOfGame.vue";

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
    LevelThree,
    LevelFour,
    LevelFive,
    LevelSix,
    LevelSeven,
    LevelEight,
    LevelNine,
    LevelTen,
    EndOfGame,
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
  display: flex;
  flex-direction: column;
}

nav {
  margin-bottom: auto;
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
