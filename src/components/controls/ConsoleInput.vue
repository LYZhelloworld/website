<template>
  <div>
    <span>&gt;&nbsp;</span>
    <input class="console-input" />
  </div>
</template>

<style scoped>
div {
  background-color: black;
  color: white;
  font-family: Consolas, "Courier New", monospace;
  font-size: 14px;
  display: flex;
}

.console-input {
  background-color: black;
  color: white;
  border-width: 0px;
  box-sizing: border-box;
  height: 20px;
  width: 100%;
  display: inline-block;
}

.console-input:focus {
  outline: none;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>
