if(!self.define){let e,i={};const n=(n,d)=>(n=new URL(n+".js",d).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(d,r)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let o={};const c=e=>n(e,s),f={module:{uri:s},exports:o,require:c};i[s]=Promise.all(d.map((e=>f[e]||c(e)))).then((e=>(r(...e),o)))}}define(["./workbox-ab24e45d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"apple-touch-icon.png",revision:"faed8bed44417ea1991f36c6fb64fac4"},{url:"assets/index.8fdbebb0.js",revision:null},{url:"assets/index.d9a4b3ea.css",revision:null},{url:"favicon.ico",revision:"d702c300e967be31d6d5324a99e505e9"},{url:"index.html",revision:"9e53f83b836abd22a292b755d8be84cf"},{url:"mask-icon.svg.svg",revision:"0b7a4cf40c446e810f1c6a3a9987cefc"},{url:"pwa-192x192.png",revision:"89f8804ef0c154a707adecfdf753fe75"},{url:"pwa-512x512.png",revision:"78aa8dd9d86fdd9795eb9396c13557ed"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"favicon.ico",revision:"d702c300e967be31d6d5324a99e505e9"},{url:"apple-touch-icon.png",revision:"faed8bed44417ea1991f36c6fb64fac4"},{url:"pwa-192x192.png",revision:"89f8804ef0c154a707adecfdf753fe75"},{url:"pwa-512x512.png",revision:"78aa8dd9d86fdd9795eb9396c13557ed"},{url:"manifest.webmanifest",revision:"91141629dd242fba41f839156312c867"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
