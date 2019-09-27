import GithubFeed from './components/GithubFeed.vue'
import SkeletonScreen from './components/SkeletonScreen.vue'
import SkeletonHeaderScreen from './components/SkeletonHeaderScreen.vue'

import PushEvent from './components/events/PushEvent.vue'
import PullRequestEvent from './components/events/PullRequestEvent.vue'
import CreateEvent from './components/events/CreateEvent.vue'
import DeleteEvent from './components/events/DeleteEvent.vue'
import WatchEvent from './components/events/WatchEvent.vue'
import IssuesEvent from './components/events/IssuesEvent.vue'
import IssueCommentEvent from './components/events/IssueCommentEvent.vue'
import ForkEvent from './components/events/ForkEvent.vue'
import CommitCommentEvent from './components/events/CommitCommentEvent.vue'
import PublicEvent from './components/events/PublicEvent.vue'

function install(Vue) {
  if (install.installed) return
  install.installed = true
  Vue.component('github-feed', GithubFeed)
  Vue.component('push-event', PushEvent)
  Vue.component('pull-request-event', PullRequestEvent)
  Vue.component('create-event', CreateEvent)
  Vue.component('watch-event', WatchEvent)
  Vue.component('delete-event', DeleteEvent)
  Vue.component('issues-event', IssuesEvent)
  Vue.component('issue-comment-event', IssueCommentEvent)
  Vue.component('commit-comment-event', CommitCommentEvent)
  Vue.component('fork-event', ForkEvent)
  Vue.component('public-event', PublicEvent)
  Vue.component('skeleton-screen', SkeletonScreen)
  Vue.component('skeleton-header-screen', SkeletonHeaderScreen)
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

export {
  GithubFeed,
  PushEvent,
  PullRequestEvent,
  CreateEvent,
  WatchEvent,
  DeleteEvent,
  IssuesEvent,
  IssueCommentEvent,
  ForkEvent,
  CommitCommentEvent,
  PublicEvent,
  SkeletonScreen,
  SkeletonHeaderScreen
}

export default plugin
