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
**注意**：iOS10以后版本不接受meta标签，可以通过js监听手势控制来实现禁止页面缩放：
```javascript
document.addEventListener('gesturestart', function (event) {
    event.preventDefault()
})
```

