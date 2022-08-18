<template>
  <ConsoleBox />
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

<script lang="ts">
import { defineComponent } from "vue";
import ConsoleBox from "@/components/controls/ConsoleBox.vue";

/**
 * The application.
 * @constructor
 */
export default defineComponent({
  components: {
    ConsoleBox,
  },
});
</script>
