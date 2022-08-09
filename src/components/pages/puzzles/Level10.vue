<template>
  <HomePageContent />
  <a class="btn btn-secondary mx-1" @click="secret">The end</a>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HomePageContent from "@/components/controls/HomePageContent.vue";

export default defineComponent({
  components: {
    HomePageContent,
  },
  name: "LevelTen",
  created() {
    document.title = "X";
  },
  methods: {
    secret() {
      let ans = prompt(
        "Nothing is true. Everything is permitted.\n--Assassin's Creed"
      );
      if (ans === null) {
        return;
      }
      this.nextLevel();
    },
    nextLevel() {
      this.$emit("next-level");
    },
  },
  emits: ["next-level"],
});
</script>
