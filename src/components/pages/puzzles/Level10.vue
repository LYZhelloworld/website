<template>
  <MyAvatar />
  <p class="mb-4 display-4" ref="message">Hello, world.</p>
  <ButtonViewInGithub />
  <a class="btn btn-secondary mx-1" @click="secret">The end</a>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MyAvatar from "@/components/controls/MyAvatar.vue";
import ButtonViewInGithub from "@/components/controls/ButtonViewInGithub.vue";

export default defineComponent({
  components: {
    MyAvatar,
    ButtonViewInGithub,
  },
  name: "LevelTen",
  created() {
    document.title = "X";
  },
  methods: {
    secret() {
      let ans = prompt(
        "Nothing is true. Everything is permitted.\n--Assassin's Creed"
      );
      if (ans === null) {
        return;
      }
      this.nextLevel();
    },
    nextLevel() {
      this.$emit("next-level");
    },
  },
  emits: ["next-level"],
});
</script>
