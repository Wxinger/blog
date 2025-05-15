---
title: vue2源码解读
author: wx
date: '2022-08-15'
showAccessNumber: true,
categories:
  - 源码解读
tag: 
  - 源码
  - VUE
---

# 源码解读
  ## 版本

  runtime-only 通过vue-loader 将 vue 文件编译成javascript代码，在编译过程中会将 template代码编译成render函数，所以运行时是不用编译的， 编译是离线的时候做的
runtime-complie 我们如果没有对代码做预编译，但又使用了 Vue 的 template 属性并传入一个字符串，则需要在客户端编译模板