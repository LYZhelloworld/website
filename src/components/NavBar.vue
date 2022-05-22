<template>
  <b-navbar toggleable="md" type="dark" variant="dark">
    <b-container>
      <b-navbar-brand
          class="text-primary"
          href="https://github.com/LYZhelloworld/lyzhelloworld.github.io"
          target="_blank"
          rel="noopener noreferrer">
        lyzhelloworld.github.io
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#" active>Home</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-button
              variant="outline-success"
              href="https://github.com/LYZhelloworld"
              target="_blank"
              rel="noopener noreferrer">
            Follow @LYZhelloworld
          </b-button>
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style scoped>

</style>