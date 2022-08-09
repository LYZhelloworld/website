<template>
  <MyAvatar />
  <p class="mb-4 display-4" ref="message">Hello, world.</p>
  <ButtonViewInGithub />
  <a class="btn btn-secondary mx-1" @click="secret">Next Level</a>
  <p v-html="cipherText"></p>
</template>

<script lang="ts">
import { charToBin, convertToQuadrants } from "@/utils/bin";
import { defineComponent } from "vue";
import MyAvatar from "@/components/controls/MyAvatar.vue";
import ButtonViewInGithub from "@/components/controls/ButtonViewInGithub.vue";

export default defineComponent({
  name: "LevelFive",
  components: {
    MyAvatar,
    ButtonViewInGithub,
  },
  created() {
    document.title = "V - 5";
  },
  data() {
    return {
      secretString: "main",
    };
  },
  computed: {
    cipherText() {
      let result = "";
      for (let i = 0; i < this.secretString.length; i++) {
        result += convertToQuadrants(charToBin(this.secretString[i]));
      }
      return result;
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
