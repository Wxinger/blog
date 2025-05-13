import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "WISH",
  description: "My Blog",
  base: "/blog",
  markdown: {
    lineNumbers: true, //显示代码行数
  },
  lastUpdated: true, //以git提交的时间为更新时间
  themeConfig: {
    nav: [
      { text: '前端宝藏', link: '/' },
      { text: '个人文章', link: '/common/index' },
      { text: '心愿杂谈', link: '/common/index' }
    ],

    sidebar: [
      {
        text: '导航',
        items: [
          { text: 'HTML', link: '/markdown-examples' },
          { text: 'CSS', link: '/css/index' },
          { text: 'JavaScript', link: '/js/index' },
          { text: 'Vue', link: '/vue/index' },
          { text: 'React', link: '/react/index' }
        ]
      }
    ],
    search: {
      provider: 'local',
    },
    i18nRouting: true,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Wxinger/blog' }
    ]
  }
})

