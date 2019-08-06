<template>
  <div class="github-event" style="padding-bottom: 0.5em !important;">
    <octicon class="event-octicon octicon dashboard-event-icon octicon-comment" name="comment" />
    <div style="display: inline-block;" class="event-text" v-if="event">
      <a style="text-transform: capitalize;">{{ event.actor.login }}</a>
      <b>
        <a class="event-link" :href="event.payload.comment.html_url" target="_blank">
          commented
        </a>
        on {{ event.payload.issue.pull_request ? 'pull request' : 'issue' }}
        <a class="event-link" :href="event.payload.issue.html_url" target="_blank">
          #{{ event.payload.issue.number }}</a
        >
        at
        <a class="event-link" :href="'https://github.com/' + event.repo.name" target="_blank">{{
          event.repo.name
        }}</a></b
      >
    </div>
    <div class="event-time" v-if="event">
      {{ fromNow(event.created_at) }}
    </div>
  </div>
</template>

<script>
import { fromNow } from '../../utils/FormatTools'

export default {
  name: 'issue-comment-event',
  props: {
    event: { required: true }
  },
  methods: {
    fromNow
  }
}
</script>

<style></style>
