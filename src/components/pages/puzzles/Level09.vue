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
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ButtonViewInGithub from "@/components/controls/ButtonViewInGithub.vue";

export default defineComponent({
  name: "LevelNine",
  components: {
    ButtonViewInGithub,
  },
  created() {
    document.title = "IX";
  },
  data() {
    return {
      secretString: "14285709",
    };
  },
  methods: {
    secret() {
      let ans = prompt("Did you pay attention to the title?");
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
