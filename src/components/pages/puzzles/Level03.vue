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
import { shifting, getRandomNumberInRange } from "@/utils/secret";

export default defineComponent({
  name: "LevelThree",
  components: {
    ButtonViewInGithub,
  },
  created() {
    document.title = "III - 2";
  },
  data() {
    return {
      secretString: "lorem ipsum dolor sit amet",
    };
  },
  computed: {
    cipherText() {
      return shifting(this.secretString, getRandomNumberInRange(1, 26));
    },
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
