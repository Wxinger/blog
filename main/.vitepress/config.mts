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
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '个人文章', link: '/' },
      { text: '前端宝藏', link: '/markdown-examples' },
      { text: '关于自己', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: '导航',
        items: [
          { text: 'HTML', link: '/markdown-examples' },
          { text: 'CSS', link: '/css/index' },
          { text: 'JavaScrpt', link: '/js/index' },
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
    ],
    userInfo: {
      name: "王鑫",
      avatar: './assets/'
    }
  }
})

