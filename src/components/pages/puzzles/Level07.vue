<template>
  <HomePageContent />
  <a class="btn btn-secondary mx-1" @click="secret">Next Level</a>
  <p>{{ cipherText }}</p>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { convertToMorseCode } from "@/utils/morse";
import HomePageContent from "@/components/controls/HomePageContent.vue";

export default defineComponent({
  name: "LevelSeven",
  components: {
    HomePageContent,
  },
  created() {
    document.title = "VII - 0";
  },
  data() {
    return {
      secretString: "HELLOWORLD",
    };
  },
  computed: {
    cipherText() {
      const message = "CQ CQ CQ\nDE HELLOWORLD\nK";
      return convertToMorseCode(message);
    },
  },
  methods: {
    secret() {
      let ans = prompt(convertToMorseCode("QRZ?"));
      if (ans?.toUpperCase() === this.secretString) {
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
