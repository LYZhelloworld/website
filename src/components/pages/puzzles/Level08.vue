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
        <ButtonViewInGithub />
        <a class="btn btn-secondary mx-1" @click="secret">Next Level</a>
        <p>PRE {{ preOrder }}</p>
        <p>IN {{ inOrder }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ButtonViewInGithub from "@/components/controls/ButtonViewInGithub.vue";
import { Tree } from "@/utils/tree";

export default defineComponent({
  name: "LevelEight",
  components: {
    ButtonViewInGithub,
  },
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
