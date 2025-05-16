---
title: 禁止页面缩放
author: wx
date: '2022-09-02'
showAccessNumber: true,
categories:
  - 知识积累
tag: 
  - HTML
  - 基础
---

# HTML 在移动端中禁止页面缩放
在移动端中，渲染HTML文档，是使用的是webview。  

阻止webView缩放,在webView中添加以下代码  

## 方案一 Viewport Meta 标签强制锁定（基础必选）​

```html
<meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,user-scalable=no" />
```

标签说明

```
width 　　　　 　　　　 // 设置 viewport 的宽度，正整数/字符串 device-width
height 　　　　　　　　 // 设置 viewport 的高度，正整数/字符串 device-height
initial-scale  　　　 // 设置设备宽度与 viewport大小之间的缩放比例，0.0-10.0之间的正数
maximum-scale 　　　　// 设置最大缩放系数，0.0-10.0之间的正数
minimum-scale 　　　　// 设置最小缩放系数，0.0-10.0之间的正数
user-scalable 　　　　// 如果设置为 no 用户将不能缩放网页，默认为 yes，yes / no
```

## 方案二 JavaScript 事件拦截（终极防御）​
```javascript
// 阻止双指缩进
document.addEventListener('gesturestart', function (event) {
    event.preventDefault()
})

// 阻止双击缩放
let lastTouchEnd = 0
document.addEventListener('touchend', function (event) {
  const now = Date.now();
  if (now - lastTouchEnd <= 300) e.preventDefault();
  lastTouchEnd = now;
}, { passive: false })

// 阻止键盘缩放
document.addEventListener('keydown', (e) => {
  if (e.ctrlKey && (e.key === '+' || e.key === '-')) {
    e.preventDefault();
  }
});
**注意**：iOS10以后版本不接受meta标签，可以通过js监听手势控制来实现禁止页面缩放  

**注意** Safari 15+ 会忽略user-scaleble

```
## 方案三  CSS 触摸事件拦截（增强防护）
```css
  html.body {
    touch-action: pan-x pan-y; /* 仅允许水平和垂直滚动 */
    -ms-touch-action: manipulation; /* IE 兼容 */
    overscroll-behavior: contain; /* 阻止边缘弹性效果 */
  }

  /* 禁用双击缩放（Android 专属） */
  * {
    touch-action: manipulation; 
  }
```
**注意** Chrome 80+ 默认启用双击缩放，需此属性覆盖

_____结束_____