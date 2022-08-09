<template>
  <nav class="navbar navbar-expand-md bg-dark navbar-dark">
    <div class="container">
      <a
        class="navbar-brand"
        href="https://github.com/LYZhelloworld/lyzhelloworld.github.io"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fa-brands fa-github"></i>
        lyzhelloworld.github.io
      </a>
      <button
        class="navbar-toggler"
        data-bs-toggle="collapse"
        data-bs-target="#nav-collapse"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <!-- Right aligned nav items -->
      <div class="collapse navbar-collapse" id="nav-collapse">
        <ul class="navbar-nav me-auto">
          <li class="nav-item" v-for="(item, index) in items" :key="index">
            <a
              :class="{ 'nav-link': true, active: selected === index }"
              href="#"
              @click="click(index)"
              >{{ item }}</a
            >
          </li>
        </ul>

        <div>
          <a
            class="btn btn-outline-success"
            href="https://github.com/LYZhelloworld"
            target="_blank"
            rel="noopener noreferrer"
            >Follow @LYZhelloworld</a
          >
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  props: {
    items: {
      type: Array as PropType<string[]>,
      required: true,
    },
    selected: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    click(index: number) {
      this.$emit("click", index);
    },
  },
  emits: ["click"],
});
</script>
