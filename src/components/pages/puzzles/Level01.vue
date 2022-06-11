<template>
  <div class="main d-flex align-items-center justify-content-center h-100">
    <div class="container text-white text-center mb-5">
      <div class="row">
        <div class="col">
          <img src="@/assets/avatar.png" class="avatar fadein" alt="avatar" />
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
          <p class="text-primary">{{ secretString }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { generateSecret } from "@/utils/secret";

export default defineComponent({
  name: "LevelOne",
  created() {
    document.title = "I - 1";
  },
  data() {
    return {
      secretString: generateSecret(),
    };
  },
  methods: {
    secret() {
      let ans = prompt(
        "Steganography is the practice of concealing a message within another message or a physical object."
      );
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
