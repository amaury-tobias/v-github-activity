<template>
  <div class="github-event">
    <svg
      class="event-octicon"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 12 16"
    >
      <path
        fill-rule="evenodd"
        d="M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z"
      />
    </svg>
    <div v-if="event" style="display: inline-block;" class="event-text">
      <a style="text-transform: capitalize;">{{ event.actor.login }}</a>
      <b>
        deleted {{ event.payload.ref_type }}
        <a class="event-link" href="#">{{ event.payload.ref }}</a> at
        <a
          class="event-link"
          :href="'https://github.com/' + event.repo.name"
          target="_blank"
          >{{ event.repo.name }}</a
        ></b
      >
    </div>
    <div v-if="event" class="event-time">
      {{ fromNow(event.created_at) }}
    </div>
  </div>
</template>

<script>
import { fromNow } from '../../utils/FormatTools'

export default {
  name: 'DeleteEvent',
  props: {
    event: { required: true }
  },
  methods: {
    fromNow
  }
}
</script>

<style></style>
