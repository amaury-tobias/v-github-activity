<template>
  <div id="app">
    <h1>v-github-activity</h1>
    <github-feed login="amaury-tobias" />
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
h1 {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
