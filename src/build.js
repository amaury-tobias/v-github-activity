import component from './components/GithubFeed.vue'

export const GithubFeed = component

const plugin = {
  install(Vue) {
    if (this.installed) return
    this.installed = true
    Vue.component('github-feed', GithubFeed)
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}

export default plugin
