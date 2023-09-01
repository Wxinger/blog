<script setup>
import { onMounted, reactive } from "vue"
import { useData } from 'vitepress'
// import { parsePath } from "./common"
const pageInfo = useData()
const props = defineProps({
  root: {
    type: String,
    default: "./article/"
  }
})

let list = reactive([])


onMounted(() => {
  // 获取当前根目录下的所有文件 组成列表隐射
  // console.log(this)
  // const _list = parsePath(props.root)
  // this.list = _list
})
</script>

<template>
  <div class="list">
    列表
    <div v-for="(item, index) in list" :key="item.path" class="list-item">
      {{ index }}、{{ item.title }}
    </div>
  </div>
</template>

