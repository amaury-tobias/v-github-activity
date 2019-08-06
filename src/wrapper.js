import * as components from './index'

if (typeof Vue !== 'undefined') {
  for (const name in components) {
    /* eslint-disable no-undef */
    Vue.component(name, components[name])
  }
}
