<template>
  <MyAvatar @click="imageClick" :alt="imageAlt" />
  <p class="display-4" ref="message"><strong>Helloworld</strong></p>
  <p class="lead">0 error(s), 0 warning(s).</p>
  <ButtonViewInGithub />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MyAvatar from "./MyAvatar.vue";
import ButtonViewInGithub from "./ButtonViewInGithub.vue";

export default defineComponent({
  components: {
    MyAvatar,
    ButtonViewInGithub,
  },
  props: {
    imageAlt: String,
  },
  methods: {
    imageClick() {
      this.$emit("image-click");
    },
  },
  emits: ["image-click"],
});
</script>
