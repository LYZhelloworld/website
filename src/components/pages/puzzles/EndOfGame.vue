<template>
  <div class="container text-white text-center mb-5">
    <div class="row">
      <div class="col">
        <img src="@/assets/avatar.png" class="avatar fadein" />
      </div>
    </div>
    <div class="row mt-4">
      <div class="col text-left">
        <p class="display-4">The end</p>
        <p>Thank you for playing this game. Hope you enjoy it.</p>
        <ButtonViewInGithub />
        <a class="btn btn-secondary mx-1" @click="restart">Restart</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ButtonViewInGithub from "@/components/controls/ButtonViewInGithub.vue";

export default defineComponent({
  components: {
    ButtonViewInGithub,
  },
  created() {
    document.title = "The End";
  },
  methods: {
    restart() {
      this.$emit("restart");
    },
  },
  emits: ["restart"],
});
</script>
