import Vue from 'vue'
import App from './App.vue'

import vGithubActivity from './index'

Vue.config.productionTip = false

Vue.use(vGithubActivity)

new Vue({
  render: h => h(App)
}).$mount('#app')
