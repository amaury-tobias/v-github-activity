<template>
  <div class="feed">
    <div class="header-wrapper">
      <div class="header">
        <svg
          class="github-icon"
          xmlns="http://www.w3.org/2000/svg"
          width="35"
          height="35"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
          />
        </svg>
        <a :href="user.html_url" target="_blank" class="github-profile">
          <div style="font-size: 26px; line-height: 30px">
            {{ user.name }}
          </div>
          <div class="github-username">
            {{ user.login }}
          </div>
        </a>
      </div>
    </div>
    <div class="events-wrapper">
      <div class="feed-list">
        <div class="event-list">
          <div v-for="event in events" :key="event.id">
            <component :is="event.type" :event="event" />

            <push-event v-if="event.type === 'PushEvent'" :event="event" />
            <pull-request-event
              v-if="event.type === 'PullRequestEvent'"
              :event="event"
            />
            <create-event v-if="event.type === 'CreateEvent'" :event="event" />
            <watch-event v-if="event.type === 'WatchEvent'" :event="event" />
            <delete-event v-if="event.type === 'DeleteEvent'" :event="event" />
            <issues-event v-if="event.type === 'IssuesEvent'" :event="event" />
            <issue-comment-event
              v-if="event.type === 'IssueCommentEvent'"
              :event="event"
            />
            <fork-event v-if="event.type === 'ForkEvent'" :event="event" />

            <commit-comment-event
              v-if="event.type === 'CommitCommentEvent'"
              :event="event"
            />

            <public-event v-if="event.type === 'PublicEvent'" :event="event" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PushEvent from './events/PushEvent.js'
import WatchEvent from './events/WatchEvent.js'
import ReleaseEvent from './events/ReleaseEvent.js'

import PullRequestEvent from './events/PullRequestEvent.vue'
import CreateEvent from './events/CreateEvent.vue'
import DeleteEvent from './events/DeleteEvent.vue'

import IssuesEvent from './events/IssuesEvent.vue'
import IssueCommentEvent from './events/IssueCommentEvent.vue'
import ForkEvent from './events/ForkEvent.vue'
import CommitCommentEvent from './events/CommitCommentEvent.vue'
import PublicEvent from './events/PublicEvent.vue'

import service from '../services/GithubService'

export default {
  name: 'GithubFeed',
  components: {
    PushEvent,
    WatchEvent,
    ReleaseEvent,
    PullRequestEvent,
    CreateEvent,
    DeleteEvent,
    IssuesEvent,
    IssueCommentEvent,
    ForkEvent,
    CommitCommentEvent,
    PublicEvent
  },
  props: {
    login: { required: true, type: String },
    token: { required: false, type: String, default: undefined }
  },
  data: () => ({
    user: {},
    events: [],
    loading: true,
    error: false
  }),
  mounted() {
    service
      .user(this.login, this.token)
      .then(res => {
        this.user = res
        service.events(this.login, this.token).then(events => {
          this.loading = false
          this.error = false
          this.events = events
          this.$emit('status', false, null)
        })
      })
      .catch(e => {
        console.warn(e)
        this.loading = false
        this.error = true
        this.$emit('status', true, e)
      })
  }
}
</script>

<style>
.feed {
  position: relative;
  display: table;
  height: 500px;
  min-height: 200px;
  width: 100%;
  min-width: 100%;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', Arial,
    sans-serif;
  font-size: 1rem;
  color: #373a3c;
}
.header-wrapper {
  display: table-row;
  height: 1px;
}
.header {
  display: table-cell;
  top: 1px;
  left: 1px;
  padding: 10px;
  border-bottom: 1px solid #ddd;
}

.github-icon {
  display: inline-flex;
  float: left;
  padding: 9px 0 0;
  width: 35px;
  height: 35px;
}

.github-username {
  font-size: 20px;
  font-style: normal;
  font-weight: 300;
  line-height: 24px;
  color: #666;
}
.github-profile {
  display: inline-flexbox;
  float: left;
  margin: 0 auto;
  padding: 6px 10px 5px;
  color: #495961;
  font-size: 20px;
  text-decoration: none;
  margin-left: 10px;
}
.github-profile:hover {
  color: #495961;
  text-decoration: none;
}

.events-wrapper {
  height: 100%;
  display: table-row;
}
.feed-list {
  overflow-y: auto;
  position: relative;
  display: table-cell;
}
.event-list {
  overflow-y: scroll;
  max-height: 500px;
  width: 100%;
  min-height: 100px;
}
.github-event {
  border-top: 1px solid #f1f1f1;
  padding: 1em 0 0;
  padding: 1.5em 0 1.5em 25px;
}
.event-octicon {
  color: #bbb;
  fill: #bbb;
  margin-right: 10px;
}
.event-time {
  display: inline-block;
  font-size: 12px;
  margin-left: 3px;
  color: #bbb;
}
.event-link {
  color: #1798d8;
}
.event-link:hover {
  color: #1798d8;
}
.event-text {
  font-size: 13px;
}
.event-detail {
  color: #666666;
}

@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
  .event-octicon {
    display: none !important;
  }
  .github-icon {
    display: none !important;
  }
}
</style>
