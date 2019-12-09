import Vue from 'vue'
import App from './App.vue'

import { GithubFeed } from './build'

// Vue.use(vGithubActivity)
Vue.component('github-feed', GithubFeed)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
