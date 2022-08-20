<template>
  <div class="container">
    <div ref="consoleBox" class="console-box">{{ content }}</div>
    <div class="console-input">
      <span>&gt;&nbsp;</span>
      <input ref="input" @keydown="onkeydown" />
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}

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
  flex: 1;
}

.console-input,
.console-input input {
  background-color: black;
  color: white;
  font-family: Consolas, "Courier New", monospace;
  font-size: 14px;
}

.console-input {
  display: flex;
}

.console-input input {
  border-width: 0px;
  flex: 1;
}

.console-input input:focus {
  outline: none;
}
</style>

<script lang="ts">
import CommandPrompt from "@/console/CommandPrompt";
import { defineComponent } from "vue";

/**
 * The component of a console.
 * @constructor
 */
export default defineComponent({
  mounted() {
    this.focus();
    this.commandPrompt.startAsync();
  },
  data() {
    return {
      /**
       * The content to display.
       */
      content: "",

      /**
       * The command prompt.
       */
      commandPrompt: new CommandPrompt((data) => this.write(data)),
    };
  },
  methods: {
    /**
     * Focuses the input box.
     */
    focus() {
      (this.$refs.input as HTMLInputElement).focus();
    },
    /**
     * Writes data to the console output.
     * @param {string} data The data to output.
     */
    write(data: string) {
      this.content += data;
      this.scrollToBottom();
    },
    /**
     * Scrolls the output box to bottom.
     */
    scrollToBottom() {
      const consoleBox = this.$refs.consoleBox as HTMLDivElement;
      if (consoleBox !== null) {
        consoleBox.scrollTop = consoleBox.scrollHeight;
      }
    },
    /**
     * The event handler of `keydown` event of the input box.
     *
     * It will emits `exec` event with the command if Enter key is pressed.
     *
     * @param {KeyboardEvent} e The event arguments.
     */
    onkeydown(e: KeyboardEvent) {
      if (e.key === "Enter") {
        const inputElement = this.$refs.input as HTMLInputElement;
        const command = inputElement.value;
        inputElement.value = "";
        this.commandPrompt.input(command);
      }
    },
  },
});
</script>
