<template>
  <MyAvatar />
  <p class="mb-4 display-4" ref="message">Hello, world.</p>
  <ButtonViewInGithub />
  <a class="btn btn-secondary mx-1" @click="secret">Next Level</a>
  <p v-html="cipherText"></p>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MyAvatar from "@/components/controls/MyAvatar.vue";
import ButtonViewInGithub from "@/components/controls/ButtonViewInGithub.vue";
import { charToBin, convertToQuadrants } from "@/utils/bin";

export default defineComponent({
  name: "LevelSix",
  components: {
    MyAvatar,
    ButtonViewInGithub,
  },
  created() {
    document.title = "VI - 7";
  },
  data() {
    return {
      secretString: "world",
    };
  },
  computed: {
    cipherText() {
      const key = "hello";
      const zero = "&#9626;";
      const one = "&#9630;";

      let result = "";
      for (let i = 0; i < this.secretString.length; i++) {
        let bin = (
          this.secretString.charCodeAt(i) ^ key.charCodeAt(i)
        ).toString(2);
        if (bin.length < 8) {
          bin = "0".repeat(8 - bin.length) + bin;
        }
        for (let j = 0; j < bin.length; j++) {
          result += bin[j] === "0" ? zero : one;
        }
        result += convertToQuadrants(
          charToBin(this.secretString.charCodeAt(i) ^ key.charCodeAt(i))
        );
      }
      return result;
    },
  },
  methods: {
    secret() {
      let ans = prompt("hello");
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
