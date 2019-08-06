<template>
  <div class="github-event" style="padding-bottom: 0.5em !important;">
    <svg
      v-if="event.payload.action === 'opened'"
      class="event-octicon"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 14 16"
    >
      <path
        fill-rule="evenodd"
        d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"
      />
    </svg>
    <svg
      v-else
      class="event-octicon"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
    >
      <path
        fill-rule="evenodd"
        d="M7 10h2v2H7v-2zm2-6H7v5h2V4zm1.5 1.5l-1 1L12 9l4-4.5-1-1L12 7l-1.5-1.5zM8 13.7A5.71 5.71 0 0 1 2.3 8c0-3.14 2.56-5.7 5.7-5.7 1.83 0 3.45.88 4.5 2.2l.92-.92A6.947 6.947 0 0 0 8 1C4.14 1 1 4.14 1 8s3.14 7 7 7 7-3.14 7-7l-1.52 1.52c-.66 2.41-2.86 4.19-5.48 4.19v-.01z"
      />
    </svg>
    <div style="display: inline-block;" class="event-text" v-if="event">
      <a style="text-transform: capitalize;">{{ event.actor.login }}</a>
      <b>
        {{ event.payload.action }} issue
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
    <ul>
      <li class="event-text event-detail" style="list-style: none">
        {{ event.payload.issue.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import { fromNow } from '../../utils/FormatTools'

export default {
  name: 'issues-event',
  props: {
    event: { required: true }
  },
  methods: {
    fromNow
  }
}
</script>

<style></style>
