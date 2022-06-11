<template>
  <div class="main d-flex align-items-center justify-content-center h-100">
    <div class="container text-white text-center mb-5">
      <div class="row">
        <div class="col">
          <img src="@/assets/avatar.png" class="avatar fadein" />
        </div>
      </div>
      <div class="row mt-4">
        <div class="col text-left">
          <p class="display-4">The end</p>
          <p>Thank you for playing this game. Hope you enjoy it.</p>
          <a
            class="btn btn-success mx-1"
            href="https://github.com/LYZhelloworld"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa-brands fa-github"></i>
            View in GitHub
          </a>
          <a class="btn btn-secondary mx-1" @click="restart">Restart</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  created() {
    document.title = "The End";
  },
  methods: {
    restart() {
      this.$emit("restart");
    },
  },
  emits: ["restart"],
});
</script>
