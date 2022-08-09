<template>
  <MyAvatar @click="imageClick" :alt="imageAlt" />
  <p class="display-4"><strong>Helloworld</strong></p>
  <p class="lead">0 error(s), 0 warning(s).</p>
  <p v-if="message" class="text-muted">{{ message }}</p>

  <a
    class="btn btn-success mx-1"
    href="https://github.com/LYZhelloworld"
    target="_blank"
    rel="noopener noreferrer"
  >
    <i class="fa-brands fa-github"></i>
    View in GitHub
  </a>

  <a
    class="btn btn-primary mx-1"
    href="https://github.com/LYZhelloworld?tab=repositories"
    target="_blank"
    rel="noopener noreferrer"
  >
    <i class="fa-solid fa-book-bookmark"></i>
    Repositories
  </a>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MyAvatar from "./MyAvatar.vue";

export default defineComponent({
  components: {
    MyAvatar,
  },
  props: {
    imageAlt: String,
    message: String,
  },
  methods: {
    imageClick() {
      this.$emit("image-click");
    },
  },
  emits: ["image-click"],
});
</script>
