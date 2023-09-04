<script setup>
import { onMounted, ref } from "vue"
import { useData } from 'vitepress'
const pageInfo = useData()
const props = defineProps({
  type: {
    type: String,
    default: ''
  }
})

let list = ref([])

onMounted(() => {
  const { site } = pageInfo
  fetch(`${site.value.base}json/${props.type}.json`).then(res => res.json()).then(res => {
    list.value = res
    console.log(res);
  })
})
</script>

<template>
  <div class="list">
    <div v-for="item in list" :key="item.path" class="list-item">
      <div class="title">
        {{ item.title }} 
        <span>{{ item.author }}</span>
      </div>
      <div class="tag-view">
        <span class="tag" v-for="tag in item.tag" :key="tag">{{ tag }}</span>
      </div>
      <div class="introduction">
        {{ item.introduction }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.list {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
}

.list .list-item {
  border: 1px solid #ccc;
  padding: 12px 9px 12px 18px;
  border-radius: 12px;
  margin: 6px;
  flex-basis: calc(50% - 24px);
  margin: 12px;
  height: 240px;
}

.list-item .title {
  font-weight: 600;
  color: #212121;
  line-height: 44px   ;
}

.list-item .tag-view .tag {
  padding: 4px 12px;
  background-color: #e18a3b;
  border-radius: 9px;
  font-size: 10px;
  margin: 3px 4px;
  color: #fff;
}

</style>
