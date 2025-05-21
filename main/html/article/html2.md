---
title: 常用HTML标签
author: wx
date: '2022-09-02'
showAccessNumber: true,
categories:
  - 知识积累
tag: 
  - HTML
  - 基础
---

1. details 独占手风琴
```html
<details name="exclusive">
  <summary> 点击我 </summary>
  Something small enough to escape casual notice.
</details>
```
设置不同状态下的样式
```css
details {
  border: 1px solid #aaa;
  border-radius: 4px;
  padding: 0.5em 0.5em 0;
}

summary {
  font-weight: bold;
  margin: -0.5em -0.5em 0;
  padding: 0.5em;
}

details[open] {
  padding: 0.5em;
}

details[open] summary {
  border-bottom: 1px solid #aaa;
  margin-bottom: 0.5em;
}
```
