<template>
  <div class="pt-5 bg-primary" style="height: 100%">
    <b-container fluid="" class="text-white text-center">
      <b-row>
        <b-col>
          <img src="@/assets/avatar.png" class="avatar fadein" alt="avatar"/>
        </b-col>
      </b-row>
      <b-row class="mt-4">
        <b-col>
          <p class="mb-4 display-4">Hello, world.</p>
          <b-button
              variant="success"
              class="mx-1"
              href="https://github.com/LYZhelloworld"
              target="_blank"
              rel="noopener noreferrer">
            View in GitHub
          </b-button>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "HomePage"
}
</script>

<style scoped>
.avatar {
  width: 100%;
  max-width: 200px;
  height: auto;
  border-radius: 50%;
  border: 5px solid #fff;
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