if(!self.define){let e,s={};const i=(i,c)=>(i=new URL(i+".js",c).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(c,r)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let n={};const o=e=>i(e,a),d={module:{uri:a},exports:n,require:o};s[a]=Promise.all(c.map((e=>d[e]||o(e)))).then((e=>(r(...e),n)))}}define(["./workbox-4ca538ef"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/bot.svg",revision:"47d29dc3e0d6a21e5a1160a35a44be74"},{url:"assets/icon-192.png",revision:"75adc28cf1fc8361d42223449ba4dc26"},{url:"assets/icon-384.png",revision:"a6b835302e63588a265cb4e59c74a40a"},{url:"assets/icon-512.png",revision:"0e6ac5b90a70b8986de9497ea9277b5c"},{url:"assets/send.svg",revision:"f22dfd515be246f47f38bd886b6e4018"},{url:"assets/user.svg",revision:"e677db9317c94ac9541bbd1bf3868ba5"},{url:"index.html",revision:"058d8c5b5e18fafc1aae6e6bf44da398"},{url:"javascript.svg",revision:"87d1d2083848d70316c69d521947e98e"},{url:"package-lock.json",revision:"7ab20f56ac12fe5bd5d791b6a90a8ee5"},{url:"package.json",revision:"4afea130d00403a16ce8fccafdb61c6d"},{url:"public/favicon.ico",revision:"331a4e3be5a690a20252ca62de2c8119"},{url:"script.js",revision:"38f194f535fcab358840e967cacebec7"},{url:"style.css",revision:"7b6e2849e71b2cfb69e0ef0b9b5dd97d"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map