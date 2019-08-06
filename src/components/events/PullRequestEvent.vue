<template>
  <div class="github-event" style="padding-bottom: 0.5em !important;">
    <svg
      class="event-octicon"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 12 16"
    >
      <path
        fill-rule="evenodd"
        d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 10 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v6.56A1.993 1.993 0 0 0 2 15a1.993 1.993 0 0 0 1-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"
      />
    </svg>
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
import { fromNow } from '../../utils/FormatTools'

export default {
  name: 'pull-request-event',
  props: {
    event: { required: true }
  },
  methods: {
    fromNow
  }
}
</script>

<style></style>
