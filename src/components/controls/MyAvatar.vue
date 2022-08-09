<template>
  <img
    src="@/assets/avatar.png"
    class="avatar fadein"
    :alt="alt"
    @click="click"
  />
</template>

<style scoped>
.avatar {
  width: 100%;
  max-width: 200px;
  height: auto;
  border-radius: 50%;
  border: 2px solid #ddd;
}

img.fadein {
  animation-name: fadein;
  animation-duration: 1s;
  -webkit-animation-name: fadein;
  -webkit-animation-duration: 1s;
  -moz-animation-name: fadein;
  -moz-animation-duration: 1s;
}

@keyframes fadein {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@-webkit-keyframes fadein {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@-moz-keyframes fadein {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
</style>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    alt: {
      type: String,
      default: "Avatar",
    },
  },
  methods: {
    click() {
      this.$emit("click");
    },
  },
  emits: ["click"],
});
</script>
