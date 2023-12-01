---
title: vue项目框架
author: wx
date: '2023-12-01'
showAccessNumber: true,
categories:
  - 知识积累
tag: 
  - 知识汇总
  - VUE
---

# 记一次vue2.x项目中node版本升级

  ** node为什么不能直接升级到指定版本
  > 项目的基础框架采用的网上的开源项目。但由于项目中sass-loader和node-sass的版本限制。导致当前能运行的node版本只能是11.x,所以，只需要解决sass的编译问题，即可升级到node16.x版本。
    首先可以用16版本的node直接执行安装插件库： npm i;
    我用的pnmp,途中会提示确少一些库。安装指定要求安装即可。但需要注意安装库的版本，需要注意下webpack的适配问题。
    我将node-sass替换成的 Dark Sass。 sass版本不能太高，太高的话，element-ui会有大量的scss样式的错误警告。
    当然也可以直接将node-sass升级。只需要和node的版本对应即可。

    至此，node升级成功，由 11.14.0 升级到 16.14.0;