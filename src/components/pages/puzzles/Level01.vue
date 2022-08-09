<template>
  <MyAvatar />
  <p class="mb-4 display-4" ref="message">Hello, world.</p>
  <ButtonViewInGithub />
  <a class="btn btn-secondary mx-1" @click="secret">Next Level</a>
  <p class="text-white">{{ secretString }}</p>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { generateSecret } from "@/utils/secret";
import MyAvatar from "@/components/controls/MyAvatar.vue";
import ButtonViewInGithub from "@/components/controls/ButtonViewInGithub.vue";

export default defineComponent({
  name: "LevelOne",
  components: {
    MyAvatar,
    ButtonViewInGithub,
  },
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
