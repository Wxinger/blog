<script setup>
import { useData } from 'vitepress'
import user from "../assets/user.jpg"
const { frontmatter, theme } = useData()
</script>

<template>
  <div class="slide">
    <div class="slide-wrap" >
      <div class="slide-view">
        <div class="user-info">
          <img class="avatar" :src="user" alt="头像" />
          <div class="name">{{ frontmatter.info.name }}</div>
          <div class="motto">{{ frontmatter.info.motto }}</div>
        </div>
        <div class="panel">
          <div class="panel-item">✍️ 312</div>
          <div class="panel-item">🕐 2023-05-12</div>
          <div class="panel-item">👁️ 215</div>
        </div>
        <div class="descript">
          {{ frontmatter.info.description }}
        </div>
      </div>
      <div class="content">

      </div>
    </div>
  </div>
</template>

<style scoped>
.slide {
  width: 100%;
  text-align: center;
}

.slide-wrap {
  display: flex;
}

.slide-view {
  flex-basis: 30%;
  text-align: center;
}

.content {
  flex: 1
}

.slide .slide-wrap {
  background-size: 100% 240%;
  background-position: 0 4%;
}


.slide-view .avatar {
  width: 64px;
  height: 64px;
  border: 1px solid #ccc;
  border-radius: 50%;
  display: inline-block;
  margin: 24px auto;
}

.slide-view .name {
  font-size: 18px;
  font-weight: 600;
  line-height: 44px;
}

.slide-view .motto {
  color: #e18a3b;
  line-height: 44px;
}

.slide-view .panel {
  font-size: 14px;
  line-height: 36px;
  display: flex;
  align-items: center
}

.slide-view .panel-item {
  flex: 1;
  text-align: center;
  line-height: 44px;
}

.slide-view .descript {
  font-size: 14px;
  color: #7e7e7e;
}
</style>
