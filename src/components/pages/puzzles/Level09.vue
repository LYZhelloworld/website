<template>
  <HomePageContent />
  <a class="btn btn-secondary mx-1" @click="secret">Next Level</a>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HomePageContent from "@/components/controls/HomePageContent.vue";

export default defineComponent({
  name: "LevelNine",
  components: {
    HomePageContent,
  },
  created() {
    document.title = "IX";
  },
  data() {
    return {
      secretString: "14285709",
    };
  },
  methods: {
    secret() {
      let ans = prompt("Did you pay attention to the title?");
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
