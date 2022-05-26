<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark">
    <div class="container">
      <a class="navbar-brand text-primary" href="https://github.com/LYZhelloworld/lyzhelloworld.github.io"
        target="_blank" rel="noopener noreferrer">
        lyzhelloworld.github.io
      </a>
      <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#nav-collapse">
        <span class="navbar-toggler-icon"></span>
      </button>
      <!-- Right aligned nav items -->
      <div class="collapse navbar-collapse" id="nav-collapse">
        <ul class="navbar-nav me-auto">
          <li class="nav-item"><a class="nav-link active" href="#">Home</a></li>
        </ul>

        <div>
          <a class="btn btn-outline-success" href="https://github.com/LYZhelloworld" target="_blank"
            rel="noopener noreferrer">Follow @LYZhelloworld</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
export default {
  name: "NavBar"
}
</script>

<style scoped>
</style>