<template>
  <div class="github-event" style="padding-bottom: 0.5em !important;">
    <svg
      class="event-octicon"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
    >
      <path
        fill-rule="evenodd"
        d="M14 1H2c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h2v3.5L7.5 11H14c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1zm0 9H7l-2 2v-2H2V2h12v8z"
      />
    </svg>
    <div v-if="event" style="display: inline-block;" class="event-text">
      <a style="text-transform: capitalize;">{{ event.actor.login }}</a>
      <b>
        <a
          class="event-link"
          :href="event.payload.comment.html_url"
          target="_blank"
        >
          commented
        </a>
        on commit
        <a
          class="event-link"
          :href="
            'https://github.com/' +
              event.repo.name +
              '/commit/' +
              event.payload.comment.commit_id
          "
          target="_blank"
        >
          {{ hash(event.payload.comment.commit_id) }}</a
        >
        at
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
import { fromNow, hash } from '../../utils/FormatTools'

export default {
  name: 'CommitCommentEvent',
  props: {
    event: { required: true }
  },
  methods: {
    fromNow,
    hash
  }
}
</script>

<style></style>
