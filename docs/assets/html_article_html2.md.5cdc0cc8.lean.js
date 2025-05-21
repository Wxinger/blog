import{_ as n,o as a,c as l,O as p}from"./chunks/framework.1396f752.js";const m=JSON.parse('{"title":"常用HTML标签","description":"","frontmatter":{"title":"常用HTML标签","author":"wx","date":"2022-09-02","showAccessNumber":"true,","categories":["知识积累"],"tag":["HTML","基础"]},"headers":[],"relativePath":"html/article/html2.md","filePath":"html/article/html2.md","lastUpdated":null}'),e={name:"html/article/html2.md"};function o(t,s,c,r,i,E){return a(),l("div",null,s[0]||(s[0]=[p(`<ol><li>details 独占手风琴</li></ol><div class="language-html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">details</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">name</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;exclusive&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">summary</span><span style="color:#E1E4E8;">&gt; 点击我 &lt;/</span><span style="color:#85E89D;">summary</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  Something small enough to escape casual notice.</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">details</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">details</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">name</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;exclusive&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">summary</span><span style="color:#24292E;">&gt; 点击我 &lt;/</span><span style="color:#22863A;">summary</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  Something small enough to escape casual notice.</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">details</span><span style="color:#24292E;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>设置不同状态下的样式</p><div class="language-css vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#85E89D;">details</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  border: 1px solid </span><span style="color:#FDAEB7;font-style:italic;">#aaa;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">border-radius</span><span style="color:#E1E4E8;">: 4px;</span></span>
<span class="line"><span style="color:#E1E4E8;">  padding: 0</span><span style="color:#B392F0;">.5em 0.5em</span><span style="color:#E1E4E8;"> 0;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#85E89D;">summary</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">font-weight</span><span style="color:#E1E4E8;">: bold;</span></span>
<span class="line"><span style="color:#E1E4E8;">  margin: -0</span><span style="color:#B392F0;">.5em -0.5em</span><span style="color:#E1E4E8;"> 0;</span></span>
<span class="line"><span style="color:#E1E4E8;">  padding: 0.5em;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#85E89D;">details</span><span style="color:#E1E4E8;">[</span><span style="color:#B392F0;">open</span><span style="color:#E1E4E8;">] {</span></span>
<span class="line"><span style="color:#E1E4E8;">  padding: 0.5em;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#85E89D;">details</span><span style="color:#E1E4E8;">[</span><span style="color:#B392F0;">open</span><span style="color:#E1E4E8;">] </span><span style="color:#85E89D;">summary</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">border-bottom</span><span style="color:#E1E4E8;">: 1px solid </span><span style="color:#FDAEB7;font-style:italic;">#aaa;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">margin-bottom</span><span style="color:#E1E4E8;">: 0.5em;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#22863A;">details</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  border: 1px solid </span><span style="color:#B31D28;font-style:italic;">#aaa;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">border-radius</span><span style="color:#24292E;">: 4px;</span></span>
<span class="line"><span style="color:#24292E;">  padding: 0</span><span style="color:#6F42C1;">.5em 0.5em</span><span style="color:#24292E;"> 0;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#22863A;">summary</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">font-weight</span><span style="color:#24292E;">: bold;</span></span>
<span class="line"><span style="color:#24292E;">  margin: -0</span><span style="color:#6F42C1;">.5em -0.5em</span><span style="color:#24292E;"> 0;</span></span>
<span class="line"><span style="color:#24292E;">  padding: 0.5em;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#22863A;">details</span><span style="color:#24292E;">[</span><span style="color:#6F42C1;">open</span><span style="color:#24292E;">] {</span></span>
<span class="line"><span style="color:#24292E;">  padding: 0.5em;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#22863A;">details</span><span style="color:#24292E;">[</span><span style="color:#6F42C1;">open</span><span style="color:#24292E;">] </span><span style="color:#22863A;">summary</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">border-bottom</span><span style="color:#24292E;">: 1px solid </span><span style="color:#B31D28;font-style:italic;">#aaa;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">margin-bottom</span><span style="color:#24292E;">: 0.5em;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div>`,4)]))}const d=n(e,[["render",o]]);export{m as __pageData,d as default};
