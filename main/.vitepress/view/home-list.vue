<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import { useData } from 'vitepress'
import htmlSvg from "../assets/html.svg"
import cssSvg from "../assets/css.svg"
import javascriptSvg from "../assets/javascript-map.svg"
import vueSvg from "../assets/vue.svg"
import reactSvg from "../assets/react.svg"
import otherSvg from "../assets/other.svg"
const { frontmatter } = useData()

const props = defineProps({
  type: {
    type: String,
    default: ''
  }
})

let list = ref([
  {
    icon: htmlSvg,
    title: 'HTML',
    description: '这玩意还要单独分类么？',
    link: '/html/',
  },
  {
    icon: cssSvg,
    title: 'Css',
    description: '新特性？新动画？新布局？啥都不是！',
    link: '/css/',
  },
  {
    icon: javascriptSvg,
    title: "JavaScript",
    description: "这年头还有人看原生的JavaScript？",
    link: '/js/'
  },
  {
    icon: vueSvg,
    title: "Vue",
    description: "狗都会的VUE！",
    link: '/vue/',
  },
  {
    icon: reactSvg,
    title: "React",
    description: "这么简单的东西，还用学？",
    link: '/react/'
  },
  {
    icon: otherSvg,
    title: "其他",
    description: "什么都没有，什么都有！",
    link: '/common/'
  }
])

const currentTheme = ref('dark')

let observer
onMounted(() => {
  currentTheme.value = document.documentElement.classList.contains('dark') ? 'dark' : 'light' 
  observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.attributeName === 'class') {
        const theme = document.documentElement.classList.contains('dark') ? 'dark' : 'light'
        currentTheme.value = theme
      }
    })
  })

  observer.observe(document.documentElement, {
    attributes: true
  })
})

watch(() => currentTheme, (newVal) => {
  frontmatter.value.theme = newVal
}, { immediate: true })

onBeforeUnmount(() => {
  if (observer instanceof MutationObserver) {
    observer.disconnect()
  }
})

</script>

<template>
  <div class="list">
    <div v-for="item in list" :key="item.path" :class="'list-item ' + currentTheme">
      <div class="list-item">
        <div class="title-wrap">
          <div class="icon">
            <img :src="item.icon" alt="icon">
          </div>
          <a :href="item.link" class="title">
            {{ item.title }} 
          </a>
        </div>
        <p class="description">
          {{ item.description }}
        </p>
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

.list .list-item .icon {
  width: 48px;
  height: 48px;
  background-color: #c7c7c742;
  padding: 9px;
  border-radius: 4px;
}

.list .list-item {
  padding: 9px;
  border-radius: 12px;
  margin: 6px;
  margin: 12px;
  cursor: pointer;
  min-width: calc(25% - 24px);
}

.list-item.light {
  background-color: rgba(240, 248, 255, 0.80);
}

.list-item.dark {
  background-color: rgba(0, 0, 0, 0.80);
}

.list-item .title-wrap {
  display: flex;
  align-items: center;
}

.list-item .title {
  font-weight: 600;
  line-height: 44px;
  margin-left: 12px;
}

.list-item .title.light {
  color: #212121;
}

.list-item .title.dark {
  color: #fff;
}

.list-item .description {
  font-size: 14px;
  color: #807f7f;
  margin-top: 6px;
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
