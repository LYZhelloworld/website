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

/**
 * The duration between displaying characters in milliseconds.
 */
const DISPLAY_DELAY = 10;

/**
 * The component for displaying output of the console.
 * @constructor
 */
export default defineComponent({
  name: "ConsoleBox",
  data() {
    return {
      /**
       * The content to display.
       */
      content: "",
    };
  },
  methods: {
    /**
     * Writes data to the console output.
     * @param {string} data The data to output.
     */
    async write(data: string) {
      let arr = Array.from(data);
      console.log("display", arr);
      for (let i in arr) {
        this.content += arr[i];
        this.scrollToBottom();
        await new Promise((resolve) => setTimeout(resolve, DISPLAY_DELAY));
      }
    },
    /**
     * Scrolls the output box to bottom.
     */
    scrollToBottom() {
      let consoleBox = this.$refs.consoleBox as HTMLDivElement;
      consoleBox.scrollTop = consoleBox.scrollHeight;
    },
  },
});
</script>
