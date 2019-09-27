<template>
  <div class="github-event post">
    <div class="event-octicon avatar"></div>
    <div class="event-text line"></div>
    <ul>
      <li style="list-style: none" class="event-text event-detail line"></li>
      <li style="list-style: none" class="event-text event-detail line"></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'skeleton-screen'
}
</script>

<style scoped>
.post .avatar {
  float: left;
  width: 16px;
  height: 16px;
  background-color: #ccc;
  border-radius: 25%;
  background-image: linear-gradient(90deg, #ddd 0px, #e8e8e8 40px, #ddd 80px);
  background-size: 600px;
  animation: shine-avatar 1.6s infinite linear;
}
.post .line {
  float: left;
  height: 12px;

  background-image: linear-gradient(90deg, #ddd 0px, #e8e8e8 40px, #ddd 80px);
  background-size: 600px;
  animation: shine-lines 1.6s infinite linear;
}
.post .avatar + .line {
  display: block;
  width: 50%;
}
.post ul li ~ .line {
  display: block;
  background-color: #ddd;
  height: 10px;
  width: 40%;
}

@keyframes shine-lines {
  0% {
    background-position: 100%;
  }
  40%,
  100% {
    background-position: -150%;
  }
}
@keyframes shine-avatar {
  0% {
    background-position: 100%;
  }
  40%,
  100% {
    background-position: -150%;
  }
}
</style>
