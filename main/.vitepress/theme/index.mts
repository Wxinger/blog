import myLayout from "../view/myLayout.vue"
import DefaultTheme from 'vitepress/theme'

export default {
  ...DefaultTheme,
  Layout: myLayout,
  enhanceApp({app}) {
    // app.component('', )
  }
}