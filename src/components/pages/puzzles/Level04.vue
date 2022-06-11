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
          <p>\int_1^\infty \frac{1}{x^2}\mathrm{d}x</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "LevelFour",
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
