<template>
  <MyAvatar />
  <p class="mb-4 display-4" ref="message">Hello, world.</p>
  <ButtonViewInGithub />
  <a class="btn btn-secondary mx-1" @click="secret">Next Level</a>
  <p>\int_1^\infty \frac{1}{x^2}\mathrm{d}x</p>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MyAvatar from "@/components/controls/MyAvatar.vue";
import ButtonViewInGithub from "@/components/controls/ButtonViewInGithub.vue";

export default defineComponent({
  name: "LevelFour",
  components: {
    MyAvatar,
    ButtonViewInGithub,
  },
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
