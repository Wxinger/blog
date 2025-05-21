---
title: CSS常用知识点汇总
author: wx
date: '2022-09-02'
showAccessNumber: true,
categories:
  - 知识积累
tag: 
  - CSS
  - 基础
---

# CSS常用知识点汇总

1. Scrollbar-Gutter 和 Scrollbar-Color   
```css
  .scrollable {
    scrollbar-gutter: stable both-edges; // 在开始滚动钱保留滚动条空间，确保布局稳定，防止滚动条出现时的跳动
    scrollbar-color: #444 #ccc; //  滚动条颜色
  }
```

2. ::target-text 用于高亮显示通过内部链接到达的文本
```css
  ::target-text {
    background: yellow;
    color: black;
  }
```

3. Ruby布局 ruby-align 和 ruby-position 
```css
  ruby {
    ruby-align: center; // 允许你控制短注释（ruby文本）相对于主文本的位置
    ruby-position: over;
  }
```

4. 相对色语法
```css
  .element {
    background: light-dark(#ffffff, #000000);
  }
```
5. content-visibility 跳过屏幕外元素的渲染，直到它们滚动到视野中：
```css
  .lazy-load-section {
    content-visibility: auto;
  }
```css
提升长页面的性能

6. font-size-adjust 保持文本大小和可读性的一致性
```css
.text {
  font-family: "CustomFont", Arial, sans-serif;
  font-size-adjust: 0.5;
}
```

7. transition-behavior 虽然transition-timing-function 为我们提供了过渡控制，但 transition-behavior 引入了更多的控制，允许您在没有复杂 JavaScript 的情况下反转或暂停过渡。这为平滑的UI交互和更复杂的动画场景铺平了道路
```css
.card {
  transition-property: opacity, display;
  transition-duration: 0.25s;
  transition-behavior: allow-discrete;
}

.card.fade-out {
  opacity: 0;
  display: none;
}
```