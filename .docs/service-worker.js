if(!self.define){let e,s={};const r=(r,i)=>(r=new URL(r+".js",i).href,s[r]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=s,document.head.appendChild(e)}else e=r,importScripts(r),s()})).then((()=>{let e=s[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(i,n)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let u={};const t=e=>r(e,o),l={module:{uri:o},exports:u,require:t};s[o]=Promise.all(i.map((e=>l[e]||t(e)))).then((e=>(n(...e),u)))}}define(["./workbox-6567b62a"],(function(e){"use strict";e.setCacheNameDetails({prefix:"vue-test01"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/Vue_ex/css/app.71e3a96d.css",revision:null},{url:"/Vue_ex/index.html",revision:"2e76ae2431f7cdd554842a379f13adae"},{url:"/Vue_ex/js/about.45f97bfb.js",revision:null},{url:"/Vue_ex/js/app.b8ca9c50.js",revision:null},{url:"/Vue_ex/js/chunk-vendors.79e59b85.js",revision:null},{url:"/Vue_ex/manifest.json",revision:"8161ec3dba19fee5a68201999a0d8328"},{url:"/Vue_ex/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map