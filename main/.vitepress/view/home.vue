<script setup>
import list from "./list.vue"
import { useData } from 'vitepress'
console.log(useData())
const { frontmatter } = useData()
</script>

<template>
  <div class="home">
    <div class="slide-view">
      <div class="user-info">
        <img class="avator" :src="frontmatter.info.avator" alt="头像" />
        <div class="name">{{frontmatter.info.name}}</div>
        <div class="motto">🛞{{ frontmatter.info.motto }}</div>
      </div>
      <div class="panel">
        <div class="panel-item">✍️ 312</div>
        <div class="panel-item">🕐 2023-05-12</div>
        <div class="panel-item">👁️ 215</div>
      </div>
      <ul>
        <li v-for="item in frontmatter.info.features" :key="item.title">
          <div class="title">{{ item.title }}</div>
        </li>
      </ul>
    </div>
    <div class="content">
      <list type="vue" />
    </div>
  </div>
</template>

<style scoped>
.home {
  height: 40vh;
  width: 72%;
  margin: 0 auto;
  display: flex;
}

.slide-view {
  flex-basis: 30%;
  text-align: center;
}

.slide-view .avator {
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

.content {
  flex: 1;
}</style>
