<template>
  <div id="app4">
    <div id="container">
      <img src="./assets/logo.png">
      <HelloWorld msg="Welcome to Your Vue.js App"/>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app4',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app4 {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#container {
  padding: 5px;
  border: 1px solid green;
  display: inline-block;
}
</style>
