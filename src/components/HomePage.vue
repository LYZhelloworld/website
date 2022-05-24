<template>
  <div class="pt-5 bg-primary" style="height: 100%">
    <div class="container text-white text-center">
      <div class="row">
        <div class="col">
          <img src="@/assets/avatar.png" class="avatar fadein" alt="avatar" />
        </div>
      </div>
      <div class="row mt-4">
        <div class="col">
          <p class="mb-4 display-4">Hello, world.</p>
          <a class="btn btn-success mx-1" href="https://github.com/LYZhelloworld" target="_blank"
            rel="noopener noreferrer">
            View in GitHub
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
}
</script>

<style>
html,
body {
  width: 100%;
  height: 100%;
  background-color: rgba(var(--bs-primary-rgb), var(--bs-bg-opacity))
}

#app {
  height: 100%;
}
</style>

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