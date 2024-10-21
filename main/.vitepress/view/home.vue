<script setup>
import homeList from "./home-list.vue"
import slide from "./slide.vue"
</script>

<template>
  <div class="home">
    <div class="slide-view">
      <slide type="vue" />
    </div>
    <div class="content">
      <home-list type="vue" />
    </div>
  </div>
</template>

<style scoped>
.home {
  height: 100vh;
  width: 72%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}

.content {
  flex: 1;
}</style>
