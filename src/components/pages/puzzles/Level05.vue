<template>
  <div class="container text-white text-center mb-5">
    <div class="row">
      <div class="col">
        <img src="@/assets/avatar.png" class="avatar fadein" />
      </div>
    </div>
    <div class="row mt-4">
      <div class="col">
        <p class="mb-4 display-4" ref="message">Hello, world.</p>
        <a
          class="btn btn-success mx-1"
          href="https://github.com/LYZhelloworld"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fa-brands fa-github"></i>
          View in GitHub
        </a>
        <a class="btn btn-secondary mx-1" @click="secret">Next Level</a>
        <p v-html="cipherText"></p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { charToBin, convertToQuadrants } from "@/utils/bin";
import { defineComponent } from "vue";

export default defineComponent({
  name: "LevelFive",
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
