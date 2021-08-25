import{_ as e}from"./CodePreviewEditor.1ad9a42f.js";import{s as o,f as t,e as n,F as s,g as l,y as a,o as r}from"./vendor.14c8fa3c.js";import{_ as p}from"./Dropdown.9636731c.js";import"./_commonjsHelpers.0592d25c.js";const c={name:"DropdownExample",components:{CodePreviewEditor:e},data:()=>({components:{dropdown:o(p)},codeBasicUsage:'<dropdown>\n  <button class="px-3 py-2 bg-purple-500 text-white rounded-md">Click me!</button>\n  <template #body>\n    <ul>\n      <li class="px-3 py-2 text-gray-500 hover:bg-gray-50">Item 1</li>\n      <li class="px-3 py-2 text-gray-500 hover:bg-gray-50">Item 2</li>\n      <li class="px-3 py-2 text-gray-500 hover:bg-gray-50">Item 3</li>\n    </ul>\n  </template>\n</dropdown>',codeBodyClickHide:'<dropdown hide-on-click>\n  <button class="px-3 py-2 bg-purple-500 text-white rounded-md">Click me!</button>\n  <template #body>\n    <p class="text-sm text-purple-500 px-3">This content will be hidden if you click any area of dropdown body.</p>\n    <ul>\n      <li class="px-3 py-2 text-gray-500 hover:bg-gray-50">Item 1</li>\n      <li class="px-3 py-2 text-gray-500 hover:bg-gray-50">Item 2</li>\n      <li class="px-3 py-2 text-gray-500 hover:bg-gray-50">Item 3</li>\n    </ul>\n  </template>\n</dropdown>'})},i=l("h1",{class:"text-2xl font-medium mb-1"},"Dropdown",-1),d=l("p",{class:"text-base text-gray-800"},"Toggleable menu for displaying lists of links and actions.",-1),m=l("br",null,null,-1),u=l("h2",{class:"text-xl font-medium mb-1"},"Basic usage",-1),x=l("p",{class:"text-base text-gray-800"},"Click on the dropdown menu to unfold it for more actions.",-1),g=l("br",null,null,-1),y=l("h2",{class:"text-xl font-medium mb-1"},"Menu hiding behavior",-1),b=l("p",{class:"text-base text-gray-800"},[a("Use "),l("span",{class:"text-sm font-mono text-purple-500"},"hide-on-click"),a(" to define if menu closes on clicking.")],-1);c.render=function(o,l,a,p,c,f){const h=e;return r(),t(s,null,[i,d,m,u,x,n(h,{source:c.codeBasicUsage,components:c.components},null,8,["source","components"]),g,y,b,n(h,{source:c.codeBodyClickHide,components:c.components},null,8,["source","components"])],64)};export{c as default};