<template>
  <div class="github-event" style="padding-bottom: 0.5em !important;">
    <octicon class="event-octicon" name="comment" />
    <div style="display: inline-block;" class="event-text" v-if="event">
      <a style="text-transform: capitalize;">{{ event.actor.login }}</a>
      <b>
        <a class="event-link" :href="event.payload.comment.html_url" target="_blank">
          commented
        </a>
        on commit
        <a
          class="event-link"
          :href="
            'https://github.com/' + event.repo.name + '/commit/' + event.payload.comment.commit_id
          "
          target="_blank"
        >
          {{ hash(event.payload.comment.commit_id) }}</a
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
import Octicon from 'vue-octicon/components/Octicon'
import 'vue-octicon/icons/comment'
import { fromNow, hash } from '../../utils/FormatTools'

export default {
  name: 'commit-comment-event',
  components: { Octicon },
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
