<template>
  <p class="display-4">The end</p>
  <p>Thank you for playing this game. Hope you enjoy it.</p>
  <a class="btn btn-secondary mx-1" @click="restart">Restart</a>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  components: {},
  created() {
    document.title = "The End";
  },
  methods: {
    restart() {
      this.$emit("restart");
    },
  },
  emits: ["restart"],
});
</script>
