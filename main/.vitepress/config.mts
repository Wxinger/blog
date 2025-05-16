import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "WISH",
  description: "My Blog",
  base: "/blog",
  markdown: {
    lineNumbers: true, //显示代码行数
  },
  lang: 'zh-CN',
  lastUpdated: true, //以git提交的时间为更新时间
  appearance: 'dark',
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
          { text: 'HTML', link: '/html/index' },
          { text: 'CSS', link: '/css/index' },
          { text: 'JavaScript', link: '/js/index' },
          { text: 'Vue', link: '/vue/index' },
          { text: 'React', link: '/react/index' }
        ]
      }
    ],
    i18nRouting: true,
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Wxinger/blog' }
    ],
    lastUpdated: {
      text: '上次更新',
      formatOptions: {
        dateStyle: 'medium'
      }
    },
    outline: {
      label: '目录'
    },
    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                }
              }
            }
          }
        }
      }
    }
  }
})

