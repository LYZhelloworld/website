<template>
  <MyAvatar :alt="secretString" />
  <p class="mb-4 display-4" ref="message">Hello, world.</p>
  <ButtonViewInGithub />
  <a class="btn btn-secondary mx-1" @click="secret">Next Level</a>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MyAvatar from "@/components/controls/MyAvatar.vue";
import ButtonViewInGithub from "@/components/controls/ButtonViewInGithub.vue";
import { generateSecret } from "@/utils/secret";

export default defineComponent({
  name: "LevelTwo",
  components: {
    MyAvatar,
    ButtonViewInGithub,
  },
  created() {
    document.title = "II - 4";
  },
  data() {
    return {
      secretString: generateSecret(),
    };
  },
  methods: {
    secret() {
      let ans = prompt(
        "The alt attribute holds a text description of the image, which isn't mandatory but is incredibly useful for accessibility.\n" +
          "Screen readers read this description out to their users so they know what the image means."
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
