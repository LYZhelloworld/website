<template>
  <HomePageContent />
  <a class="btn btn-secondary mx-1" @click="secret">Next Level</a>
  <p>{{ cipherText }}</p>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { shifting, getRandomNumberInRange } from "@/utils/secret";
import HomePageContent from "@/components/controls/HomePageContent.vue";

export default defineComponent({
  name: "LevelThree",
  components: {
    HomePageContent,
  },
  created() {
    document.title = "III - 2";
  },
  data() {
    return {
      secretString: "lorem ipsum dolor sit amet",
    };
  },
  computed: {
    cipherText() {
      return shifting(this.secretString, getRandomNumberInRange(1, 26));
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
