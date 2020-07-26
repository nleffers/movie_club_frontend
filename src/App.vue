<template>
  <div id="app">
    <div class="container-fluid">
      <nav-bar />
      <router-view />
    </div>
  </div>
</template>

<script>
import NavBar from './components/navigation/NavBar.vue'

export default {
  components: {
    NavBar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.container-fluid {
  margin: auto;
  width: 60% !important;
  min-width: 1000px;
}
</style>
