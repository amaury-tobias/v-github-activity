<template>
  <div class="github-event">
    <octicon class="event-octicon octicon octicon-star dashboard-event-icon" name="star" />
    <div style="display: inline-block;" class="event-text" v-if="event">
      <a style="text-transform: capitalize;">{{ event.actor.login }}</a>
      <b>
        starred
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
import 'vue-octicon/icons/star'
import { fromNow } from '../../utils/FormatTools'

export default {
  name: 'watch-event',
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
