<template>
  <HomePageContent />
  <a class="btn btn-secondary mx-1" @click="secret">Next Level</a>
  <p>\int_1^\infty \frac{1}{x^2}\mathrm{d}x</p>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HomePageContent from "@/components/controls/HomePageContent.vue";

export default defineComponent({
  name: "LevelFour",
  components: {
    HomePageContent,
  },
  created() {
    document.title = "IV - 8";
  },
  data() {
    return {
      secretString: "1",
    };
  },
  methods: {
    secret() {
      let ans = prompt("Please input the password.");
      if (ans === this.secretString) {
        this.nextLevel();
        return;
      }
    },
    nextLevel() {
      this.$emit("next-level");
    },
  },
  emits: ["next-level"],
});
</script>
