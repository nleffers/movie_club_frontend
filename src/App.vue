<template>
  <div id="app">
    <vue-snotify />
    <nav-bar />
    <div class="container-fluid">
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
html, #app {
  min-height: 100vh;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  background-color: #eee;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.container-fluid {
  margin: auto;
  width: 60% !important;
  min-width: 1000px;
}
</style>
