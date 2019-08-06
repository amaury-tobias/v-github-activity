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
        d="M4 3H3V2h1v1zM3 5h1V4H3v1zm4 0L4 9h2v7h2V9h2L7 5zm4-5H1C.45 0 0 .45 0 1v12c0 .55.45 1 1 1h4v-1H1v-2h4v-1H2V1h9.02L11 10H9v1h2v2H9v1h2c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1z"
      />
    </svg>
    <div style="display: inline-block;" class="event-text" v-if="event">
      <a style="text-transform: capitalize;">{{ event.actor.login }}</a>
      <b>
        pushed to
        <a
          class="event-link"
          :href="'https://github.com/' + event.repo.name + '/tree/' + branch(event.payload.ref)"
          target="_blank"
          >{{ branch(event.payload.ref) }}</a
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
      <li
        v-for="commit in event.payload.commits"
        class="event-text event-detail"
        style="list-style: none"
        :key="commit.sha"
      >
        <a
          :href="'https://github.com/' + event.repo.name + '/commit/' + commit.sha"
          target="_blank"
          class="event-link"
          >{{ hash(commit.sha) }}</a
        >
        {{ commit.message }}
      </li>
    </ul>
  </div>
</template>

<script>
import { fromNow, hash, branch } from '../../utils/FormatTools'

export default {
  name: 'push-event',
  props: {
    event: { required: true }
  },
  methods: {
    fromNow,
    hash,
    branch
  }
}
</script>

<style></style>
