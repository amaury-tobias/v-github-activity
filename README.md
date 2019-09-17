# v-github-activity

[![Made with vue](https://img.shields.io/badge/SUPPORT-ME-F16061?style=for-the-badge&logo=ko-fi&labelCoor=F16061&logoColo0)](https://ko-fi.com/amaury_tobias)
[![Made with vue](https://img.shields.io/badge/MADE%20WITH-VUE-brightgreen?style=for-the-badge&logo=vue.js)](https://vuejs.org/)
[![npm](https://img.shields.io/npm/v/v-github-activity?style=for-the-badge)](https://www.npmjs.com/package/v-github-activity)
![npm bundle size](https://img.shields.io/bundlephobia/min/v-github-activity?style=for-the-badge)
[![NPM](https://img.shields.io/npm/l/v-github-activity?style=for-the-badge)](LICENCE)

<!-- [![Build Status](https://img.shields.io/travis/amaury-tobias/v-avatar?style=for-the-badge)](https://travis-ci.org/amaury-tobias/v-avatar) -->

Componente Vue.js para mostrar la actividad de github.

Puedes encontrar algunos ejemplos [aquí](https://amaury-tobias.github.io/v-github-activity/)

## Instalación

`npm install v-github-activity`

## Uso

v-avatar es un modulo UMD, por lo que puede ser utilizado en tanto en una instancia de Vue como en Nuxt como en un entorno non-modular donde `githubFeed` sera registrada como variable global.

### VUE COMPONENT

```js
<template>
<div>
  <github-feed login="amaury-tobias" token='xxxxx'/>
</div>
</template>

<script>
import githubFeed from 'v-github-activity'

export default {
  components: {
    githubFeed
  }
}
</script>
```

### OR GLOBAL

```js
import Vue from 'vue'
import githubFeed from 'v-github-activity'

Vue.use(githubFeed)
```

### NUXT

`./plugins/githubActivity.js`

```js
import Vue from 'vue'
import githubFeed from 'v-github-activity'

Vue.use(githubFeed)
```

`nuxt.config.js`

```js
module.exports = {
  plugins: ['~/plugins/githubActivity.js']
}
```

`*.vue <template>`

```html
<github-feed login="amaury-tobias" token="xxxxx" />
```

### Browser

```html
<!DOCTYPE html>
<html>
  <head>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script src="https://unpkg.com/v-github-activity"></script>
  </head>
  <body>
    <div id="app">
      <github-feed login="amaury-tobias" token="xxxxx" />
    </div>
    <script>
      var app = new Vue({
        el: '#app',
        components: {
          githubFeed
        }
      })
    </script>
  </body>
</html>
```

## Props

| Name  | Required | Default | Type   | Description                                                                  |
| ----- | -------- | ------- | ------ | ---------------------------------------------------------------------------- |
| login | Y        | -       | String | GitHub username                                                              |
| token | N        | -       | String | Github Personal access tokens "OAUTH-TOKEN" to increase the api `rate_limit` |

## Build Setup

```bash
# install dependencies
npm install

# serve whith hot reload al localhost:8080
npm run serve

# build
npm run build
```

## Test

```bash
npm test
```

## License

Released under the [MIT](LICENSE) License.

## TO DO

- Unit testing
