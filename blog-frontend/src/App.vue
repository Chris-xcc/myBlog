<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <main-bar></main-bar>
  </div>
</template>

<script>
import MainBar from './components/Main';
export default {
  name: 'App',
  components: {
    MainBar
  }
}
</script>

<style>
html,body{
  height: 100%;
}
#app {
 height: 100%;
}
</style>
