import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "WISH",
  description: "My Blog",
  base: "/blog",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '其他', link: '/markdown-examples' },
      { text: '关于', link: '/markdown-examples' }
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
      { icon: 'github', link: 'https://github.com/Wxinger/blog' },
      { icon: "mdn", link: "https://developer.mozilla.org/zh-CN/"}
    ],
  }
})

