---
prev: false
next: /demo/
---

# Gude

[[toc]]

## Instalation

```bash
npm install v-github-activity
```

## Usage

v-github-activity is a UMD module, so it can be used in both a Vue and Nuxt instance as well as in a non-modular environment where `githubFeed` will be registered as a global variable.

## Vue

### As Vue component

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

### Vue global component

```js
import Vue from 'vue'
import githubFeed from 'v-github-activity'

Vue.use(githubFeed)
```

> The component is now registered globally

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

## Browser

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

## Properties

| Name  |      Required      |  Type  |
| ----- | :----------------: | :----: |
| login | :white_check_mark: | String |
| token | :white_check_mark: | String |

> The `token` will be used to increase the number of `requests` allowed by the Github API.

## Events

> The event contains the error state of the component and the error triggered

| Name    | Arguments             |
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
