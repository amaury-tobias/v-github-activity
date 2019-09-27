---
prev: false
next: /es/demo/
---

# Guía

[[toc]]

## Instalación

```bash
npm install v-github-activity
```

## Uso

v-github-activity es un modulo UMD, por lo que puede ser utilizado en tanto en una instancia de Vue como en Nuxt como en un entorno non-modular donde `githubFeed` sera registrada como variable global.

## Vue

### Como componente de Vue

```vue {3,8}
<template>
  ...
  <github-feed login="amaury-tobias" />
  ...
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

### Global en Vue

```js
import Vue from 'vue'
import githubFeed from 'v-github-activity'

Vue.use(githubFeed)
```

> El componente queda registrado de manera global

## Nuxt

> `./plugins/githubFeed.js`

```js
import Vue from 'vue'
import githubFeed from 'v-github-activity'

Vue.use(githubFeed)
```

> `nuxt.config.js``

```js {3}
module.exports = {
  ...
  plugins: ['~/plugins/githubFeed.js']
  ...
}
```

> `pages/**/*.vue`

```vue
<github-feed login="amaury-tobias" />
```

## Navegador

```html
<!DOCTYPE html>
<html>
  <head>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script src="https://unpkg.com/v-github-activity"></script>
  </head>
  <body>
    <div id="app">
      <github-feed login="amaury-tobias" />
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

## Propiedades

| Nombre |     Requerido      |  Tipo  |
| ------ | :----------------: | :----: |
| login  | :white_check_mark: | String |
| token  | :white_check_mark: | String |

> El `token` sera utilizado para incrementar la cantidad de peticiones permitidas por el API de Github

## Eventos

> El evento contiene el estado de error del componente y el error lanzado

| Nombre  | Argumentos            |
| ------- | --------------------- |
| @status | `errorStatus` `error` |

## Build Setup

```bash
# install dependencies
npm install

# serve whith hot reload al localhost:8080
npm run serve

# build
npm run build
```
