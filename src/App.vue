<template>
  <div class="container">
    <ConsoleBox ref="consoleBox" style="flex: 1" />
    <ConsoleInput @exec="onexec" />
  </div>
</template>

<style>
html,
body,
#app {
  width: 100%;
  height: 100%;
  margin: 0px;
  overflow: hidden;
}
</style>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import ConsoleBox from "@/components/controls/ConsoleBox.vue";
import ConsoleInput from "@/components/controls/ConsoleInput.vue";

/**
 * The application.
 * @constructor
 */
export default defineComponent({
  components: {
    ConsoleBox,
    ConsoleInput,
  },
  methods: {
    /**
     * The event handler of `exec` event of {@link ConsoleBox}.
     * @param {string} command The command to execute.
     */
    onexec(command: string) {
      let consoleBox = this.$refs.consoleBox as InstanceType<typeof ConsoleBox>;
      consoleBox.write(command + "\n");
      console.log(command, consoleBox);
    },
  },
});
</script>
