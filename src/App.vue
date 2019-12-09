<template>
  <div id="app">
    <github-feed
      login="amaury-tobias"
      :token="'960cc7bee6f951d0cf0a4300761063ca316d94be'"
    />
  </div>
</template>

<script>
export default {
  name: 'App',
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
