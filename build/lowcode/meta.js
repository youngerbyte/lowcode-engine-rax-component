!function e(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.RaxLowcodeTestMeta=n():t.RaxLowcodeTestMeta=n()}(window,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function t(){return e.default}:function t(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.r(t),n.d(t,"components",(function(){return j})),n.d(t,"componentList",(function(){return x}));var c,a=[{title:"RaxLowcodeTest",screenshot:"",schema:{componentName:"RaxLowcodeTest",props:{}}}],p=o(o({},{componentName:"RaxLowcodeTest",title:"RaxLowcodeTest",docUrl:"",screenshot:"",devMode:"proCode",npm:{package:"rax-lowcode-test",version:"0.0.1-beta.1",exportName:"default",main:"src/index.tsx",destructuring:!1,subName:""},configure:{props:[{title:{label:{type:"i18n","en-US":"name","zh-CN":"\u540d\u79f0111"},tip:"name | \u540d\u79f0111"},name:"name",description:"\u540d\u79f0111",setter:{componentName:"StringSetter",isRequired:!0,initialValue:""}},{title:{label:{type:"i18n","en-US":"content","zh-CN":"\u5185\u5bb9222"},tip:"content | \u5185\u5bb9222"},name:"content",description:"\u5185\u5bb9222",setter:{componentName:"StringSetter",isRequired:!0,initialValue:""}},{title:{label:{type:"i18n","en-US":"uri","zh-CN":"\u56fe\u7247\u5730\u5740, \u4f8b\u5982\uff1a'"},tip:"uri | \u56fe\u7247\u5730\u5740, \u4f8b\u5982\uff1a'https://github.githubassets.com/images/modules/profile/achievements/pull-shark-default.png'"},name:"uri",description:"\u56fe\u7247\u5730\u5740, \u4f8b\u5982\uff1a'https://github.githubassets.com/images/modules/profile/achievements/pull-shark-default.png'",setter:{componentName:"StringSetter",isRequired:!0,initialValue:""}},{title:{label:{type:"i18n","en-US":"imgHeight","zh-CN":"\u56fe\u7247\u9ad8\u5ea6"},tip:"imgHeight | \u56fe\u7247\u9ad8\u5ea6"},name:"imgHeight",description:"\u56fe\u7247\u9ad8\u5ea6",setter:{componentName:"NumberSetter",isRequired:!0,initialValue:0}},{title:{label:{type:"i18n","en-US":"imgWidth","zh-CN":"\u56fe\u7247\u5bbd\u5ea6"},tip:"imgWidth | \u56fe\u7247\u5bbd\u5ea6"},name:"imgWidth",description:"\u56fe\u7247\u5bbd\u5ea6",setter:{componentName:"NumberSetter",isRequired:!0,initialValue:0}},{title:{label:{type:"i18n","en-US":"nameFontSize","zh-CN":"\u540d\u5b57\u5b57\u4f53\u5927\u5c0f"},tip:"nameFontSize | \u540d\u5b57\u5b57\u4f53\u5927\u5c0f"},name:"nameFontSize",description:"\u540d\u5b57\u5b57\u4f53\u5927\u5c0f",setter:{componentName:"NumberSetter",isRequired:!0,initialValue:0}},{title:{label:{type:"i18n","en-US":"contentFontSize","zh-CN":"\u5185\u5bb9\u5b57\u4f53\u5927\u5c0f"},tip:"contentFontSize | \u5185\u5bb9\u5b57\u4f53\u5927\u5c0f"},name:"contentFontSize",description:"\u5185\u5bb9\u5b57\u4f53\u5927\u5c0f",setter:{componentName:"NumberSetter",isRequired:!0,initialValue:0}},{title:{label:{type:"i18n","en-US":"ref","zh-CN":"ref"}},name:"ref",setter:{componentName:"MixedSetter",props:{setters:[{componentName:"FunctionSetter"},{componentName:"ObjectSetter",props:{config:{items:[{title:{label:{type:"i18n","en-US":"T","zh-CN":"T"}},name:"T",setter:{componentName:"MixedSetter",isRequired:!0,props:{}}},{title:{label:{type:"i18n","en-US":"current","zh-CN":"current"}},name:"current",setter:{componentName:"ObjectSetter",props:{config:{extraSetter:{componentName:"MixedSetter",isRequired:!1,props:{}}}},isRequired:!0,initialValue:{}}}],extraSetter:{componentName:"MixedSetter",isRequired:!1,props:{}}}}}]}}},{title:{label:{type:"i18n","en-US":"key","zh-CN":"key"}},name:"key",setter:{componentName:"MixedSetter",props:{setters:[{componentName:"StringSetter",isRequired:!1,initialValue:""},{componentName:"NumberSetter",isRequired:!1,initialValue:0}]}}}],supports:{style:!0},component:{}}}),{},{snippets:a});function u(e){return f(e)||m(e)||s(e)||l()}function l(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function s(e,t){if(e){if("string"==typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(e,t):void 0}}function m(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function f(e){if(Array.isArray(e))return d(e)}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){g(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var S={};function O(e){var t=[{title:"\u5e38\u7528",icon:"",children:[]},{title:"\u5bb9\u5668",icon:"",children:[]},{title:"\u5bfc\u822a",icon:"",children:[]},{title:"\u5185\u5bb9",icon:"",children:[]},{title:"Feedback \u53cd\u9988",icon:"",children:[]}],n={"\u539f\u5b50\u7ec4\u4ef6":!0},r={};return e.forEach((function(e){var o=e.category||"\u5176\u4ed6";e.group&&!r[e.componentName]&&(r[e.componentName]=e.group),e.group&&!n[e.group]&&(n[e.group]=!0);var i=t.find((function(e){return e.title===o}));i||(i={title:o,icon:"",children:[]},t.push(i)),e.snippets&&i.children.push({componentName:e.componentName,title:e.title||e.componentName,sort:{category:i.title,group:r[e.componentName]||"\u539f\u5b50\u7ec4\u4ef6",priority:S[i.title]||0},icon:"",package:e.npm.pkg,snippets:e.snippets||[]})})),t}function N(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"rax-lowcode-test",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"0.0.1-beta.1",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{"@alifd/next":"1.25.23","@alifd/meet":"2.6.3",antd:"4.17.3"};if(!e||!n)return e;var o=e.npm;return o?("object"===h(r)&&r[o.package]?e.npm=y(y({},o),{},{version:r[o.package]}):o.package===t&&(e.npm=y(y({},o),{},{version:n})),e):e}["\u57fa\u7840\u5143\u7d20","\u5e03\u5c40\u5bb9\u5668\u7c7b","\u8868\u683c\u7c7b","\u8868\u5355\u8be6\u60c5\u7c7b","\u5e2e\u52a9\u7c7b","\u5bf9\u8bdd\u6846\u7c7b","\u4e1a\u52a1\u7c7b","\u901a\u7528","\u5f15\u5bfc","\u4fe1\u606f\u8f93\u5165","\u4fe1\u606f\u5c55\u793a","\u4fe1\u606f\u53cd\u9988"].reverse().forEach((function(e,t){S[e]=++t}));var v,j=[];[p].forEach((function(e){Array.isArray(e)?j.push.apply(j,u(e.map((function(e){return N(e)})))):e.components?j.push.apply(j,u(e.components.map((function(e){return N(e)})))):j.push(N(e))}));var x=O(j),w=!0}])}));