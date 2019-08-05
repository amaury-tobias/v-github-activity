import component from './components/GithubFeed.vue'

const install = function install(Vue) {
  Vue.component('github-feed', component)
}

const plugin = {
  install
}

let GlobalVue = null
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue
}
if (GlobalVue) {
  GlobalVue.use(plugin)
}

component.install = install

export default component
