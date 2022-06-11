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
        <p>{{ cipherText }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ButtonViewInGithub from "@/components/controls/ButtonViewInGithub.vue";
import { convertToMorseCode } from "@/utils/morse";

export default defineComponent({
  name: "LevelSeven",
  components: {
    ButtonViewInGithub,
  },
  created() {
    document.title = "VII - 0";
  },
  data() {
    return {
      secretString: "HELLOWORLD",
    };
  },
  computed: {
    cipherText() {
      const message = "CQ CQ CQ\nDE HELLOWORLD\nK";
      return convertToMorseCode(message);
    },
  },
  methods: {
    secret() {
      let ans = prompt(convertToMorseCode("QRZ?"));
      if (ans?.toUpperCase() === this.secretString) {
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
