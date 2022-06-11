<template>
  <div class="main d-flex align-items-center justify-content-center h-100">
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
  </div>
</template>

<script lang="ts">
import { charToBin, convertToQuadrants } from "@/utils/bin";
import { defineComponent } from "vue";

export default defineComponent({
  name: "LevelSix",
  created() {
    document.title = "VI - 7";
  },
  data() {
    return {
      secretString: "world",
    };
  },
  computed: {
    cipherText() {
      const key = "hello";
      const zero = "&#9626;";
      const one = "&#9630;";

      let result = "";
      for (let i = 0; i < this.secretString.length; i++) {
        let bin = (
          this.secretString.charCodeAt(i) ^ key.charCodeAt(i)
        ).toString(2);
        if (bin.length < 8) {
          bin = "0".repeat(8 - bin.length) + bin;
        }
        for (let j = 0; j < bin.length; j++) {
          result += bin[j] === "0" ? zero : one;
        }
        result += convertToQuadrants(
          charToBin(this.secretString.charCodeAt(i) ^ key.charCodeAt(i))
        );
      }
      return result;
    },
  },
  methods: {
    secret() {
      let ans = prompt("hello");
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
