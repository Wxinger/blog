import{_ as n,o as s,c as t,k as e,a as o}from"./chunks/framework.1396f752.js";const v=JSON.parse('{"title":"node版本升级","description":"","frontmatter":{"title":"node版本升级","author":"wx","date":"2023-12-01","showAccessNumber":"true,","categories":["知识积累"],"tag":["知识汇总","VUE"]},"headers":[],"relativePath":"vue/article/vue-project.md","filePath":"vue/article/vue-project.md","lastUpdated":1747129061000}'),r={name:"vue/article/vue-project.md"};function d(c,a,l,u,i,p){return s(),t("div",null,a[0]||(a[0]=[e("h1",{id:"记一次vue2-x项目中node版本升级",tabindex:"-1"},[o("记一次vue2.x项目中node版本升级 "),e("a",{class:"header-anchor",href:"#记一次vue2-x项目中node版本升级","aria-label":'Permalink to "记一次vue2.x项目中node版本升级"'},"​")],-1),e("p",null,[e("strong",null,"node为什么不能直接升级到指定版本")],-1),e("pre",null,[e("code",null,`项目的基础框架采用的网上的开源项目，但由于项目中sass-loader和node-sass的版本限制。导致当前能运行的node版本只能是11.x,所以，只需要解决sass的编译问题，即可升级到node16.x版本。
首先可以用16版本的node直接执行安装插件库： npm i;
我用的pnmp,途中会提示缺少一些库。安装指定要求安装即可。但需要注意安装库的版本，需要注意下webpack的适配问题。
我将node-sass替换成的 Dark Sass。 sass版本不能太高，太高的话，element-ui会有大量的scss样式的错误警告。
当然也可以直接将node-sass升级。只需要和node的版本对应即可。

至此，node升级成功，由 11.14.0 升级到 16.14.0; 

但是项目打包会有问题
`)],-1)]))}const x=n(r,[["render",d]]);export{v as __pageData,x as default};
