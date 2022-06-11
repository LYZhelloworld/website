<template>
  <div class="container text-white text-center mb-5">
    <div class="row">
      <div class="col">
        <img
          src="@/assets/avatar.png"
          class="avatar fadein"
          alt="avatar"
          @click="clickImage"
        />
      </div>
    </div>
    <div class="row mt-4">
      <div class="col">
        <p class="mb-4 display-4" ref="message">Hello, world.</p>
        <ButtonViewInGithub />
        <a class="btn btn-secondary mx-1" v-if="showSecret" @click="secret"
          >Admin Portal</a
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ButtonViewInGithub from "@/components/controls/ButtonViewInGithub.vue";

export default defineComponent({
  created() {
    document.title = "Hello, world.";
  },
  components: {
    ButtonViewInGithub,
  },
  data() {
    return {
      secretCounter: 0,
      showSecret: false,
    };
  },
  methods: {
    clickImage() {
      if (this.showSecret) return;

      const clicksRequired = 6;
      this.secretCounter++;
      if (this.secretCounter >= 3 && this.secretCounter < clicksRequired) {
        (this.$refs.message as HTMLParagraphElement).innerText = `You are now ${
          clicksRequired - this.secretCounter
        } clicks away from being a developer.`;
      } else if (this.secretCounter === clicksRequired) {
        (this.$refs.message as HTMLParagraphElement).innerText =
          "Hello, world.";
        this.showSecret = true;
      }
    },
    secret() {
      const answer = "123456";
      let ans = prompt("Please enter the password.");
      if (ans === answer) {
        this.nextLevel();
        return;
      }
      ans = prompt("Please enter the password.\nThe most common one.");
      if (ans === answer) {
        this.nextLevel();
        return;
      }
    },
    nextLevel() {
      this.$emit("nextLevel");
    },
  },
  emits: ["nextLevel"],
});
</script>
