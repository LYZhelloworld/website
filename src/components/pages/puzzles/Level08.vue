<template>
  <HomePageContent />
  <a class="btn btn-secondary mx-1" @click="secret">Next Level</a>
  <p>PRE {{ preOrder }}<br />IN {{ inOrder }}</p>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Tree } from "@/utils/tree";
import HomePageContent from "@/components/controls/HomePageContent.vue";

export default defineComponent({
  name: "LevelEight",
  components: {
    HomePageContent,
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
