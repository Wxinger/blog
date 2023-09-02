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
  })
})
</script>

<template>
  <div class="list">
    <div v-for="(item, index) in list" :key="item.path" class="list-item">
      <div class="title">
        {{ item.title }} 
      </div>
      <div class="tag"></div>
    </div>
  </div>
</template>

<style scoped>
.list {
  margin-top: 20px;
}

.list .list-item {
  border: 1px solid #ccc;
  padding: 12px 9px 12px 18px;
  border-radius: 12px;
  margin-bottom: 6px;
}

</style>
