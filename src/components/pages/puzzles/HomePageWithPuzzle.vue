<template>
  <HomePageContent @image-click="clickImage" />
  <a class="btn btn-secondary mx-1" v-if="showSecret" @click="secret"
    >Admin Portal</a
  >
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HomePageContent from "@/components/controls/HomePageContent.vue";

export default defineComponent({
  created() {
    document.title = "Hello, world.";
  },
  components: {
    HomePageContent,
  },
  data() {
    return {
      secretCounter: 0,
      showSecret: false,
    };
  },
  methods: {
    clickImage() {
      if (this.showSecret) return;

      const clicksRequired = 6;
      this.secretCounter++;
      if (this.secretCounter >= 3 && this.secretCounter < clicksRequired) {
        (this.$refs.message as HTMLParagraphElement).innerText = `You are now ${
          clicksRequired - this.secretCounter
        } clicks away from being a developer.`;
      } else if (this.secretCounter === clicksRequired) {
        (this.$refs.message as HTMLParagraphElement).innerText =
          "Hello, world.";
        this.showSecret = true;
      }
    },
    secret() {
      const answer = "123456";
      let ans = prompt("Please enter the password.");
      if (ans === answer) {
        this.nextLevel();
        return;
      }
      ans = prompt("Please enter the password.\nThe most common one.");
      if (ans === answer) {
        this.nextLevel();
        return;
      }
    },
    nextLevel() {
      this.$emit("nextLevel");
    },
  },
  emits: ["nextLevel"],
});
</script>
