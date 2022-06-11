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
          <p>PRE {{ preOrder }}</p>
          <p>IN {{ inOrder }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Tree } from "@/utils/tree";
import { defineComponent } from "vue";

export default defineComponent({
  name: "LevelEight",
  created() {
    document.title = "VIII - 9";
  },
  data() {
    return {
      tree: new Tree([
        "A",
        ["B", ["C", null, null], ["D", null, null]],
        ["E", ["F", ["G", null, null], ["H", null, null]], ["I", null, null]],
      ]),
    };
  },
  computed: {
    preOrder() {
      return this.tree.preOrder().join("");
    },
    inOrder() {
      return this.tree.inOrder().join("");
    },
    postOrder() {
      return this.tree.postOrder().join("");
    },
  },
  methods: {
    secret() {
      let ans = prompt("POST");
      if (ans?.toUpperCase() === this.postOrder) {
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
