<template>
  <div class="skeleton-header">
    <div class="event-octicon avatar"></div>
    <div class="event-text line"></div>
    <br />
    <ul>
      <li style="list-style: none" class="event-text event-detail line"></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'skeleton-header-screen'
}
</script>

<style scoped>
.skeleton-header .avatar {
  float: left;
  width: 35px;
  height: 35px;
  background-color: #ccc;
  border-radius: 100%;
  background-image: linear-gradient(90deg, #ddd 0px, #e8e8e8 40px, #ddd 80px);
  background-size: 600px;
  animation: shine-avatar 1.6s infinite linear;
}
.skeleton-header .line {
  float: left;
  background-image: linear-gradient(90deg, #ddd 0px, #e8e8e8 40px, #ddd 80px);
  background-size: 600px;
  animation: shine-lines 1.6s infinite linear;
}
.skeleton-header .avatar + .line {
  height: 26px;
  display: block;
  width: 50%;
}
.skeleton-header ul li ~ .line {
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
