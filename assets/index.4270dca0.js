import{r as e,c as t,o as n,a as o,b as r,d as s}from"./vendor.edbc74dd.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const i={name:"App"};i.render=function(o,r,s,i,a,d){const c=e("router-view");return n(),t(c)};const a={},d=function(e,t){return t&&0!==t.length?Promise.all(t.map((e=>{if((e=`/admin-panel/${e}`)in a)return;a[e]=!0;const t=e.endsWith(".css"),n=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${n}`))return;const o=document.createElement("link");return o.rel=t?"stylesheet":"modulepreload",t||(o.as="script",o.crossOrigin=""),o.href=e,document.head.appendChild(o),t?new Promise(((e,t)=>{o.addEventListener("load",e),o.addEventListener("error",t)})):void 0}))).then((()=>e())):e()},c=[{path:"/",component:()=>d((()=>import("./DefaultLayout.6029d359.js")),["assets/DefaultLayout.6029d359.js","assets/DefaultLayout.2dece791.css","assets/vendor.edbc74dd.js","assets/UserGroupIcon.2bb67e8c.js"]),children:[{path:"home",alias:"",name:"home",component:()=>d((()=>import("./Home.55a7ea7b.js")),["assets/Home.55a7ea7b.js","assets/UserGroupIcon.2bb67e8c.js","assets/vendor.edbc74dd.js"])},{path:"dev/getting-started",name:"dev-getting-started",component:()=>d((()=>import("./GettingStarted.c6d031a0.js")),["assets/GettingStarted.c6d031a0.js","assets/vendor.edbc74dd.js"])},{path:"dev/components/form",name:"dev-components-forms",component:()=>d((()=>import("./Index.1aa93ce2.js")),["assets/Index.1aa93ce2.js","assets/vendor.edbc74dd.js"])},{path:"dev/components/table",name:"dev-components-tables",component:()=>d((()=>import("./Index.087bd303.js")),["assets/Index.087bd303.js","assets/vendor.edbc74dd.js"])}]}],m=o({history:r(),routes:c}),l=s(i);l.use(m),l.mount("#app");
