<template>
  <div class="github-event">
    <svg
      class="event-octicon"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 10 16"
    >
      <path
        fill-rule="evenodd"
        d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"
      />
    </svg>
    <div v-if="event" style="display: inline-block;" class="event-text">
      <a style="text-transform: capitalize;">{{ event.actor.login }}</a>
      <b>
        forked
        <a
          class="event-link"
          :href="'https://github.com/' + event.repo.name"
          target="_blank"
          >{{ event.repo.name }}</a
        >
        to
        <a
          class="event-link"
          :href="event.payload.forkee.html_url"
          target="_blank"
          >{{ event.payload.forkee.full_name }}</a
        >
      </b>
    </div>
    <div v-if="event" class="event-time">
      {{ fromNow(event.created_at) }}
    </div>
  </div>
</template>

<script>
import { fromNow } from '../../utils/FormatTools'

export default {
  name: 'ForkEvent',
  props: {
    event: { required: true }
  },
  methods: {
    fromNow
  }
}
</script>

<style></style>
