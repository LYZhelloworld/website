<template>
  <HomePageContent />
  <a class="btn btn-secondary mx-1" @click="secret">Next Level</a>
  <p v-html="cipherText"></p>
</template>

<script lang="ts">
import { charToBin, convertToQuadrants } from "@/utils/bin";
import { defineComponent } from "vue";
import HomePageContent from "@/components/controls/HomePageContent.vue";

export default defineComponent({
  name: "LevelFive",
  components: {
    HomePageContent,
  },
  created() {
    document.title = "V - 5";
  },
  data() {
    return {
      secretString: "main",
    };
  },
  computed: {
    cipherText() {
      let result = "";
      for (let i = 0; i < this.secretString.length; i++) {
        result += convertToQuadrants(charToBin(this.secretString[i]));
      }
      return result;
    },
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
