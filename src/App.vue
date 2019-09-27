<template>
  <div id="app">
    <github-feed login="amaury-tobias" :token="token" />
  </div>
</template>

<script>
export default {
  name: 'app',
  data: () => ({
    token: process.env.VUE_APP_GH_TOKEN
  })
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
