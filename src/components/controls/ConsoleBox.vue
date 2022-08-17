<template>
  <div ref="consoleBox" class="console-box">{{ content }}</div>
</template>

<style scoped>
.console-box {
  background-color: black;
  color: white;
  border-width: 0px;
  font-family: Consolas, "Courier New", monospace;
  font-size: 14px;
  width: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  word-wrap: break-word;
  white-space: pre-wrap;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";

// The duration between displaying characters in milliseconds.
const DISPLAY_DELAY = 10;

export default defineComponent({
  name: "ConsoleBox",
  data() {
    return {
      content: "",
    };
  },
  methods: {
    async write(data: string) {
      let arr = Array.from(data);
      console.log("display", arr);
      for (let i in arr) {
        this.content += arr[i];
        this.scrollToBottom();
        await new Promise((resolve) => setTimeout(resolve, DISPLAY_DELAY));
      }
    },
    async writeLine(data: string) {
      await this.write(data + "\n");
    },
    scrollToBottom() {
      let consoleBox = this.$refs.consoleBox as HTMLDivElement;
      consoleBox.scrollTop = consoleBox.scrollHeight;
    },
  },
});
</script>
