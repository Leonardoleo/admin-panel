import{_ as e}from"./CodePreviewEditor.974e40e8.js";import{s as o,f as n,e as t,g as l,y as s,o as a}from"./vendor.14c8fa3c.js";import{_ as p}from"./Dropdown.9636731c.js";import"./_commonjsHelpers.f3315417.js";const r={name:"DropdownExample",components:{CodePreviewEditor:e},data:()=>({components:{dropdown:o(p)},codeBasicUsage:'<dropdown>\n  <button class="px-3 py-2 bg-purple-500 text-white rounded-md">Click me!</button>\n  <template #body>\n    <ul>\n      <li class="px-3 py-2 text-gray-500 hover:bg-gray-50">Item 1</li>\n      <li class="px-3 py-2 text-gray-500 hover:bg-gray-50">Item 2</li>\n      <li class="px-3 py-2 text-gray-500 hover:bg-gray-50">Item 3</li>\n    </ul>\n  </template>\n</dropdown>',codeBodyClickHide:'<dropdown hide-on-click>\n  <button class="px-3 py-2 bg-purple-500 text-white rounded-md">Click me!</button>\n  <template #body>\n    <p class="text-sm text-purple-500 px-3">This content will be hidden if you click any area of dropdown body.</p>\n    <ul>\n      <li class="px-3 py-2 text-gray-500 hover:bg-gray-50">Item 1</li>\n      <li class="px-3 py-2 text-gray-500 hover:bg-gray-50">Item 2</li>\n      <li class="px-3 py-2 text-gray-500 hover:bg-gray-50">Item 3</li>\n    </ul>\n  </template>\n</dropdown>'})},i={class:"page-example"},c=l("h1",null,"Dropdown",-1),d=l("p",null,"Toggleable menu for displaying lists of links and actions.",-1),m=l("h2",{class:"mt-8"},"Basic usage",-1),u=l("p",null,"Click on the dropdown menu to unfold it for more actions.",-1),g=l("h2",{class:"mt-8"},"Menu hiding behavior",-1),y=l("p",null,[s("Use "),l("code",null,"hide-on-click"),s(" to define if menu closes on clicking.")],-1);r.render=function(o,l,s,p,r,x){const b=e;return a(),n("div",i,[c,d,m,u,t(b,{source:r.codeBasicUsage,components:r.components},null,8,["source","components"]),g,y,t(b,{source:r.codeBodyClickHide,components:r.components},null,8,["source","components"])])};export{r as default};
