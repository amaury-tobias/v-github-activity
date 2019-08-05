<template>
  <div class="feed">
    <div class="header-wrapper">
      <div class="header">
        <octicon class="github-icon" name="mark-github" scale="3"></octicon>
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
            <push-event :event="event" v-if="event.type === 'PushEvent'"></push-event>
            <pull-request-event
              :event="event"
              v-if="event.type === 'PullRequestEvent'"
            ></pull-request-event>
            <create-event :event="event" v-if="event.type === 'CreateEvent'"></create-event>
            <watch-event :event="event" v-if="event.type === 'WatchEvent'"></watch-event>
            <delete-event :event="event" v-if="event.type === 'DeleteEvent'"></delete-event>
            <issues-event :event="event" v-if="event.type === 'IssuesEvent'"></issues-event>
            <issue-comment-event
              :event="event"
              v-if="event.type === 'IssueCommentEvent'"
            ></issue-comment-event>
            <fork-event :event="event" v-if="event.type === 'ForkEvent'"></fork-event>
            <commit-comment-event
              :event="event"
              v-if="event.type === 'CommitCommentEvent'"
            ></commit-comment-event>
            <public-event :event="event" v-if="event.type === 'PublicEvent'"></public-event>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Octicon from 'vue-octicon/components/Octicon'
import 'vue-octicon/icons/mark-github'
import service from '../services/GithubService'

import PushEvent from './events/PushEvent.vue'
import PullRequestEvent from './events/PullRequestEvent.vue'
import CreateEvent from './events/CreateEvent.vue'
import DeleteEvent from './events/DeleteEvent.vue'
import WatchEvent from './events/WatchEvent.vue'
import IssuesEvent from './events/IssuesEvent.vue'
import IssueCommentEvent from './events/IssueCommentEvent.vue'
import ForkEvent from './events/ForkEvent.vue'
import CommitCommentEvent from './events/CommitCommentEvent.vue'
import PublicEvent from './events/PublicEvent.vue'

export default {
  name: 'github-feed',
  components: {
    Octicon,
    PushEvent,
    PullRequestEvent,
    CreateEvent,
    DeleteEvent,
    WatchEvent,
    IssuesEvent,
    IssueCommentEvent,
    ForkEvent,
    CommitCommentEvent,
    PublicEvent
  },
  props: {
    login: { required: true }
  },
  data: () => ({
    user: {},
    events: [],
    loading: false,
    error: false
  }),
  created() {
    service
      .user(this.login)
      .then(response => {
        this.user = response.data
        service
          .events(this.login)
          .then(events => {
            this.loading = false
            this.error = false
            this.events = events.data
          })
          .catch(() => {
            this.loading = false
            this.error = true
          })
      })
      .catch(() => {
        this.loading = false
        this.error = true
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
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
    'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', Arial, sans-serif;
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

@media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) {
  .event-octicon {
    display: none !important;
  }
}
</style>
