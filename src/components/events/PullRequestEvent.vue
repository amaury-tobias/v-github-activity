<template>
  <div class="github-event" style="padding-bottom: 0.5em !important;">
    <octicon class="event-octicon" name="git-pull-request" />
    <div style="display: inline-block;" class="event-text" v-if="event">
      <a style="text-transform: capitalize;">{{ event.actor.login }}</a>
      <b>
        {{ event.payload.action }} pull request<a
          class="event-link"
          :href="event.payload.pull_request.html_url"
          target="_blank"
        >
          #{{ event.payload.number }}</a
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
    <ul>
      <li class="event-text event-detail" style="list-style: none">
        <b v-if="event.payload.pull_request.merged">[MERGED]</b>
        {{ event.payload.pull_request.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import Octicon from 'vue-octicon/components/Octicon'
import 'vue-octicon/icons/git-pull-request'
import { fromNow } from '../../utils/FormatTools'

export default {
  name: 'pull-request-event',
  components: { Octicon },
  props: {
    event: { required: true }
  },
  methods: {
    fromNow
  }
}
</script>

<style></style>
