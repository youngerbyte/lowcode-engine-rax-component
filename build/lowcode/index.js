!function t(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.MyBizComponent=n():e.MyBizComponent=n()}(window,(function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function e(){return t.default}:function e(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=354)}([,,,,,,,,,,,function(t,e){function n(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}t.exports=n},,,function(t,e,n){var r=n(48),o="object"==typeof self&&self&&self.Object===Object&&self,i=r||o||Function("return this")();t.exports=i},,function(t,e){t.exports=window.PluginLowcodeEditor},function(t,e){function n(t){return null!=t&&"object"==typeof t}t.exports=n},,function(t,e,n){var r=n(80),o=n(81),i=n(82),c=n(83),a=n(84);function u(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}u.prototype.clear=r,u.prototype.delete=o,u.prototype.get=i,u.prototype.has=c,u.prototype.set=a,t.exports=u},function(t,e,n){var r=n(21);function o(t,e){for(var n=t.length;n--;)if(r(t[n][0],e))return n;return-1}t.exports=o},function(t,e){function n(t,e){return t===e||t!=t&&e!=e}t.exports=n},function(t,e,n){var r=n(47),o=n(91),i=n(92),c="[object Null]",a="[object Undefined]",u=r?r.toStringTag:void 0;function s(t){return null==t?void 0===t?a:c:u&&u in Object(t)?o(t):i(t)}t.exports=s},function(t,e,n){var r,o=n(29)(Object,"create");t.exports=o},function(t,e,n){var r=n(106);function o(t,e){var n=t.__data__;return r(e)?n["string"==typeof e?"string":"hash"]:n.map}t.exports=o},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},,,function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){var r=n(90),o=n(96);function i(t,e){var n=o(t,e);return r(n)?n:void 0}t.exports=i},function(t,e,n){var r=n(22),o=n(11),i="[object AsyncFunction]",c="[object Function]",a="[object GeneratorFunction]",u="[object Proxy]";function s(t){if(!o(t))return!1;var e=r(t);return e==c||e==a||e==i||e==u}t.exports=s},function(t,e,n){var r=n(50);function o(t,e,n){"__proto__"==e&&r?r(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n}t.exports=o},function(t,e,n){var r=n(30),o=n(55);function i(t){return null!=t&&o(t.length)&&!r(t)}t.exports=i},,,,,,,,,,,,,,function(t,e,n){var r,o,i=n(29)(n(14),"Map");t.exports=i},function(t,e,n){var r,o=n(14).Symbol;t.exports=o},function(t,e,n){(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.exports=n}).call(this,n(28))},function(t,e,n){var r=n(31),o=n(21);function i(t,e,n){(void 0!==n&&!o(t[e],n)||void 0===n&&!(e in t))&&r(t,e,n)}t.exports=i},function(t,e,n){var r=n(29),o=function(){try{var t=r(Object,"defineProperty");return t({},"",{}),t}catch(t){}}();t.exports=o},function(t,e,n){var r,o=n(120)(Object.getPrototypeOf,Object);t.exports=o},function(t,e){var n=Object.prototype;function r(t){var e=t&&t.constructor,r;return t===("function"==typeof e&&e.prototype||n)}t.exports=r},function(t,e,n){var r=n(121),o=n(17),i=Object.prototype,c=i.hasOwnProperty,a=i.propertyIsEnumerable,u=r(function(){return arguments}())?r:function(t){return o(t)&&c.call(t,"callee")&&!a.call(t,"callee")};t.exports=u},function(t,e){var n=Array.isArray;t.exports=n},function(t,e){var n=9007199254740991;function r(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}t.exports=r},function(t,e,n){(function(t){var r=n(14),o=n(123),i=e&&!e.nodeType&&e,c=i&&"object"==typeof t&&t&&!t.nodeType&&t,a,u=c&&c.exports===i?r.Buffer:void 0,s,f=(u?u.isBuffer:void 0)||o;t.exports=f}).call(this,n(25)(t))},function(t,e,n){var r=n(125),o=n(126),i=n(127),c=i&&i.isTypedArray,a=c?o(c):r;t.exports=a},function(t,e){function n(t,e){if(("constructor"!==e||"function"!=typeof t[e])&&"__proto__"!=e)return t[e]}t.exports=n},function(t,e,n){var r=n(131),o=n(133),i=n(32);function c(t){return i(t)?r(t,!0):o(t)}t.exports=c},function(t,e){var n=9007199254740991,r=/^(?:0|[1-9]\d*)$/;function o(t,e){var n=typeof t;return!!(e=null==e?9007199254740991:e)&&("number"==n||"symbol"!=n&&r.test(t))&&t>-1&&t%1==0&&t<e}t.exports=o},function(t,e){function n(t){return t}t.exports=n},,,,,,,,,,,,,,,,,function(t,e,n){var r=n(79),o=n(49),i=n(110),c=n(112),a=n(11),u=n(59),s=n(58);function f(t,e,n,p,l){t!==e&&i(e,(function(i,u){if(l||(l=new r),a(i))c(t,e,u,n,f,p,l);else{var h=p?p(s(t,u),i,u+"",t,e,l):void 0;void 0===h&&(h=i),o(t,u,h)}}),u)}t.exports=f},function(t,e,n){var r=n(19),o=n(85),i=n(86),c=n(87),a=n(88),u=n(89);function s(t){var e=this.__data__=new r(t);this.size=e.size}s.prototype.clear=o,s.prototype.delete=i,s.prototype.get=c,s.prototype.has=a,s.prototype.set=u,t.exports=s},function(t,e){function n(){this.__data__=[],this.size=0}t.exports=n},function(t,e,n){var r=n(20),o,i=Array.prototype.splice;function c(t){var e=this.__data__,n=r(e,t),o;return!(n<0)&&(n==e.length-1?e.pop():i.call(e,n,1),--this.size,!0)}t.exports=c},function(t,e,n){var r=n(20);function o(t){var e=this.__data__,n=r(e,t);return n<0?void 0:e[n][1]}t.exports=o},function(t,e,n){var r=n(20);function o(t){return r(this.__data__,t)>-1}t.exports=o},function(t,e,n){var r=n(20);function o(t,e){var n=this.__data__,o=r(n,t);return o<0?(++this.size,n.push([t,e])):n[o][1]=e,this}t.exports=o},function(t,e,n){var r=n(19);function o(){this.__data__=new r,this.size=0}t.exports=o},function(t,e){function n(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n}t.exports=n},function(t,e){function n(t){return this.__data__.get(t)}t.exports=n},function(t,e){function n(t){return this.__data__.has(t)}t.exports=n},function(t,e,n){var r=n(19),o=n(46),i=n(97),c=200;function a(t,e){var n=this.__data__;if(n instanceof r){var c=n.__data__;if(!o||c.length<199)return c.push([t,e]),this.size=++n.size,this;n=this.__data__=new i(c)}return n.set(t,e),this.size=n.size,this}t.exports=a},function(t,e,n){var r=n(30),o=n(93),i=n(11),c=n(95),a=/[\\^$.*+?()[\]{}|]/g,u=/^\[object .+?Constructor\]$/,s=Function.prototype,f=Object.prototype,p=s.toString,l=f.hasOwnProperty,h=RegExp("^"+p.call(l).replace(a,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function v(t){return!(!i(t)||o(t))&&(r(t)?h:u).test(c(t));var e}t.exports=v},function(t,e,n){var r=n(47),o=Object.prototype,i=o.hasOwnProperty,c=o.toString,a=r?r.toStringTag:void 0;function u(t){var e=i.call(t,a),n=t[a];try{t[a]=void 0;var r=!0}catch(t){}var o=c.call(t);return r&&(e?t[a]=n:delete t[a]),o}t.exports=u},function(t,e){var n,r=Object.prototype.toString;function o(t){return r.call(t)}t.exports=o},function(t,e,n){var r=n(94),o=(i=/[^.]+$/.exec(r&&r.keys&&r.keys.IE_PROTO||""))?"Symbol(src)_1."+i:"",i;function c(t){return!!o&&o in t}t.exports=c},function(t,e,n){var r,o=n(14)["__core-js_shared__"];t.exports=o},function(t,e){var n,r=Function.prototype.toString;function o(t){if(null!=t){try{return r.call(t)}catch(t){}try{return t+""}catch(t){}}return""}t.exports=o},function(t,e){function n(t,e){return null==t?void 0:t[e]}t.exports=n},function(t,e,n){var r=n(98),o=n(105),i=n(107),c=n(108),a=n(109);function u(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}u.prototype.clear=r,u.prototype.delete=o,u.prototype.get=i,u.prototype.has=c,u.prototype.set=a,t.exports=u},function(t,e,n){var r=n(99),o=n(19),i=n(46);function c(){this.size=0,this.__data__={hash:new r,map:new(i||o),string:new r}}t.exports=c},function(t,e,n){var r=n(100),o=n(101),i=n(102),c=n(103),a=n(104);function u(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}u.prototype.clear=r,u.prototype.delete=o,u.prototype.get=i,u.prototype.has=c,u.prototype.set=a,t.exports=u},function(t,e,n){var r=n(23);function o(){this.__data__=r?r(null):{},this.size=0}t.exports=o},function(t,e){function n(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}t.exports=n},function(t,e,n){var r=n(23),o="__lodash_hash_undefined__",i,c=Object.prototype.hasOwnProperty;function a(t){var e=this.__data__;if(r){var n=e[t];return n===o?void 0:n}return c.call(e,t)?e[t]:void 0}t.exports=a},function(t,e,n){var r=n(23),o,i=Object.prototype.hasOwnProperty;function c(t){var e=this.__data__;return r?void 0!==e[t]:i.call(e,t)}t.exports=c},function(t,e,n){var r=n(23),o="__lodash_hash_undefined__";function i(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=r&&void 0===e?o:e,this}t.exports=i},function(t,e,n){var r=n(24);function o(t){var e=r(this,t).delete(t);return this.size-=e?1:0,e}t.exports=o},function(t,e){function n(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}t.exports=n},function(t,e,n){var r=n(24);function o(t){return r(this,t).get(t)}t.exports=o},function(t,e,n){var r=n(24);function o(t){return r(this,t).has(t)}t.exports=o},function(t,e,n){var r=n(24);function o(t,e){var n=r(this,t),o=n.size;return n.set(t,e),this.size+=n.size==o?0:1,this}t.exports=o},function(t,e,n){var r,o=n(111)();t.exports=o},function(t,e){function n(t){return function(e,n,r){for(var o=-1,i=Object(e),c=r(e),a=c.length;a--;){var u=c[t?a:++o];if(!1===n(i[u],u,i))break}return e}}t.exports=n},function(t,e,n){var r=n(49),o=n(113),i=n(114),c=n(117),a=n(118),u=n(53),s=n(54),f=n(122),p=n(56),l=n(30),h=n(11),v=n(124),d=n(57),y=n(58),b=n(128);function g(t,e,n,g,m,x,_){var j=y(t,n),w=y(e,n),O=_.get(w);if(O)r(t,n,O);else{var S=x?x(j,w,n+"",t,e,_):void 0,k=void 0===S;if(k){var P=s(w),L=!P&&p(w),A=!P&&!L&&d(w);S=w,P||L||A?s(j)?S=j:f(j)?S=c(j):L?(k=!1,S=o(w,!0)):A?(k=!1,S=i(w,!0)):S=[]:v(w)||u(w)?(S=j,u(j)?S=b(j):h(j)&&!l(j)||(S=a(w))):k=!1}k&&(_.set(w,S),m(S,w,g,x,_),_.delete(w)),r(t,n,S)}}t.exports=g},function(t,e,n){(function(t){var r=n(14),o=e&&!e.nodeType&&e,i=o&&"object"==typeof t&&t&&!t.nodeType&&t,c,a=i&&i.exports===o?r.Buffer:void 0,u=a?a.allocUnsafe:void 0;function s(t,e){if(e)return t.slice();var n=t.length,r=u?u(n):new t.constructor(n);return t.copy(r),r}t.exports=s}).call(this,n(25)(t))},function(t,e,n){var r=n(115);function o(t,e){var n=e?r(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.length)}t.exports=o},function(t,e,n){var r=n(116);function o(t){var e=new t.constructor(t.byteLength);return new r(e).set(new r(t)),e}t.exports=o},function(t,e,n){var r,o=n(14).Uint8Array;t.exports=o},function(t,e){function n(t,e){var n=-1,r=t.length;for(e||(e=Array(r));++n<r;)e[n]=t[n];return e}t.exports=n},function(t,e,n){var r=n(119),o=n(51),i=n(52);function c(t){return"function"!=typeof t.constructor||i(t)?{}:r(o(t))}t.exports=c},function(t,e,n){var r=n(11),o=Object.create,i=function(){function t(){}return function(e){if(!r(e))return{};if(o)return o(e);t.prototype=e;var n=new t;return t.prototype=void 0,n}}();t.exports=i},function(t,e){function n(t,e){return function(n){return t(e(n))}}t.exports=n},function(t,e,n){var r=n(22),o=n(17),i="[object Arguments]";function c(t){return o(t)&&r(t)==i}t.exports=c},function(t,e,n){var r=n(32),o=n(17);function i(t){return o(t)&&r(t)}t.exports=i},function(t,e){function n(){return!1}t.exports=n},function(t,e,n){var r=n(22),o=n(51),i=n(17),c="[object Object]",a=Function.prototype,u=Object.prototype,s=a.toString,f=u.hasOwnProperty,p=s.call(Object);function l(t){if(!i(t)||r(t)!=c)return!1;var e=o(t);if(null===e)return!0;var n=f.call(e,"constructor")&&e.constructor;return"function"==typeof n&&n instanceof n&&s.call(n)==p}t.exports=l},function(t,e,n){var r=n(22),o=n(55),i=n(17),c="[object Arguments]",a="[object Array]",u="[object Boolean]",s="[object Date]",f="[object Error]",p="[object Function]",l="[object Map]",h="[object Number]",v="[object Object]",d="[object RegExp]",y="[object Set]",b="[object String]",g="[object WeakMap]",m="[object ArrayBuffer]",x="[object DataView]",_,j="[object Float64Array]",w="[object Int8Array]",O="[object Int16Array]",S="[object Int32Array]",k="[object Uint8Array]",P="[object Uint8ClampedArray]",L="[object Uint16Array]",A="[object Uint32Array]",E={};function z(t){return i(t)&&o(t.length)&&!!E[r(t)]}E["[object Float32Array]"]=E[j]=E[w]=E[O]=E[S]=E[k]=E[P]=E[L]=E[A]=!0,E[c]=E[a]=E[m]=E[u]=E[x]=E[s]=E[f]=E[p]=E[l]=E[h]=E[v]=E[d]=E[y]=E[b]=E[g]=!1,t.exports=z},function(t,e){function n(t){return function(e){return t(e)}}t.exports=n},function(t,e,n){(function(t){var r=n(48),o=e&&!e.nodeType&&e,i=o&&"object"==typeof t&&t&&!t.nodeType&&t,c,a=i&&i.exports===o&&r.process,u=function(){try{var t=i&&i.require&&i.require("util").types;return t||a&&a.binding&&a.binding("util")}catch(t){}}();t.exports=u}).call(this,n(25)(t))},function(t,e,n){var r=n(129),o=n(59);function i(t){return r(t,o(t))}t.exports=i},function(t,e,n){var r=n(130),o=n(31);function i(t,e,n,i){var c=!n;n||(n={});for(var a=-1,u=e.length;++a<u;){var s=e[a],f=i?i(n[s],t[s],s,n,t):void 0;void 0===f&&(f=t[s]),c?o(n,s,f):r(n,s,f)}return n}t.exports=i},function(t,e,n){var r=n(31),o=n(21),i,c=Object.prototype.hasOwnProperty;function a(t,e,n){var i=t[e];c.call(t,e)&&o(i,n)&&(void 0!==n||e in t)||r(t,e,n)}t.exports=a},function(t,e,n){var r=n(132),o=n(53),i=n(54),c=n(56),a=n(60),u=n(57),s,f=Object.prototype.hasOwnProperty;function p(t,e){var n=i(t),s=!n&&o(t),p=!n&&!s&&c(t),l=!n&&!s&&!p&&u(t),h=n||s||p||l,v=h?r(t.length,String):[],d=v.length;for(var y in t)!e&&!f.call(t,y)||h&&("length"==y||p&&("offset"==y||"parent"==y)||l&&("buffer"==y||"byteLength"==y||"byteOffset"==y)||a(y,d))||v.push(y);return v}t.exports=p},function(t,e){function n(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}t.exports=n},function(t,e,n){var r=n(11),o=n(52),i=n(134),c,a=Object.prototype.hasOwnProperty;function u(t){if(!r(t))return i(t);var e=o(t),n=[];for(var c in t)("constructor"!=c||!e&&a.call(t,c))&&n.push(c);return n}t.exports=u},function(t,e){function n(t){var e=[];if(null!=t)for(var n in Object(t))e.push(n);return e}t.exports=n},function(t,e,n){var r=n(136),o=n(143);function i(t){return r((function(e,n){var r=-1,i=n.length,c=i>1?n[i-1]:void 0,a=i>2?n[2]:void 0;for(c=t.length>3&&"function"==typeof c?(i--,c):void 0,a&&o(n[0],n[1],a)&&(c=i<3?void 0:c,i=1),e=Object(e);++r<i;){var u=n[r];u&&t(e,u,r,c)}return e}))}t.exports=i},function(t,e,n){var r=n(61),o=n(137),i=n(139);function c(t,e){return i(o(t,e,r),t+"")}t.exports=c},function(t,e,n){var r=n(138),o=Math.max;function i(t,e,n){return e=o(void 0===e?t.length-1:e,0),function(){for(var i=arguments,c=-1,a=o(i.length-e,0),u=Array(a);++c<a;)u[c]=i[e+c];c=-1;for(var s=Array(e+1);++c<e;)s[c]=i[c];return s[e]=n(u),r(t,this,s)}}t.exports=i},function(t,e){function n(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)}t.exports=n},function(t,e,n){var r=n(140),o,i=n(142)(r);t.exports=i},function(t,e,n){var r=n(141),o=n(50),i=n(61),c=o?function(t,e){return o(t,"toString",{configurable:!0,enumerable:!1,value:r(e),writable:!0})}:i;t.exports=c},function(t,e){function n(t){return function(){return t}}t.exports=n},function(t,e){var n=800,r=16,o=Date.now;function i(t){var e=0,n=0;return function(){var r=o(),i=16-(r-n);if(n=r,i>0){if(++e>=800)return arguments[0]}else e=0;return t.apply(void 0,arguments)}}t.exports=i},function(t,e,n){var r=n(21),o=n(32),i=n(60),c=n(11);function a(t,e,n){if(!c(n))return!1;var a=typeof e;return!!("number"==a?o(n)&&i(e,n.length):"string"==a&&e in n)&&r(n[e],t)}t.exports=a},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){var r=n(78),o,i=n(135)((function(t,e,n,o){r(t,e,n,o)}));t.exports=i},,,,,,,,,function(t,e,n){t.exports=n(355)},function(t,e,n){"use strict";n.r(e);var r=n(16),o=n.n(r),i=n(345),c=n.n(i);function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){s(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function f(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */f=function e(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r=Object.defineProperty||function(t,e,n){t[e]=n.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",a=o.toStringTag||"@@toStringTag";function u(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function t(e,n,r){return e[n]=r}}function s(t,e,n,o){var i=e&&e.prototype instanceof v?e:v,c=Object.create(i.prototype),a=new P(o||[]);return r(c,"_invoke",{value:w(t,n,a)}),c}function p(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var l={};function v(){}function d(){}function y(){}var b={};u(b,i,(function(){return this}));var g=Object.getPrototypeOf,m=g&&g(g(L([])));m&&m!==e&&n.call(m,i)&&(b=m);var x=y.prototype=v.prototype=Object.create(b);function _(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function j(t,e){function o(r,i,c,a){var u=p(t[r],t,i);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==h(f)&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){o("next",t,c,a)}),(function(t){o("throw",t,c,a)})):e.resolve(f).then((function(t){s.value=t,c(s)}),(function(t){return o("throw",t,c,a)}))}a(u.arg)}var i;r(this,"_invoke",{value:function t(n,r){function c(){return new e((function(t,e){o(n,r,t,e)}))}return i=i?i.then(c,c):c()}})}function w(t,e,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return A()}for(n.method=o,n.arg=i;;){var c=n.delegate;if(c){var a=O(c,n);if(a){if(a===l)continue;return a}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var u=p(t,e,n);if("normal"===u.type){if(r=n.done?"completed":"suspendedYield",u.arg===l)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r="completed",n.method="throw",n.arg=u.arg)}}}function O(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,O(t,e),"throw"===e.method))return l;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var r=p(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,l;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,l):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,l)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function L(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:A}}function A(){return{value:void 0,done:!0}}return d.prototype=y,r(x,"constructor",{value:y,configurable:!0}),r(y,"constructor",{value:d,configurable:!0}),d.displayName=u(y,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,u(t,a,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},_(j.prototype),u(j.prototype,c,(function(){return this})),t.AsyncIterator=j,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var c=new j(s(e,n,r,o),i);return t.isGeneratorFunction(n)?c:c.next().then((function(t){return t.done?t.value:c.next()}))},_(x),u(x,a,"Generator"),u(x,i,(function(){return this})),u(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=L,P.prototype={constructor:P,reset:function t(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=void 0)},stop:function t(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function t(e){if(this.done)throw e;var r=this;function o(t,n){return a.type="throw",a.arg=e,r.next=t,n&&(r.method="next",r.arg=void 0),!!n}for(var i=this.tryEntries.length-1;i>=0;--i){var c=this.tryEntries[i],a=c.completion;if("root"===c.tryLoc)return o("end");if(c.tryLoc<=this.prev){var u=n.call(c,"catchLoc"),s=n.call(c,"finallyLoc");if(u&&s){if(this.prev<c.catchLoc)return o(c.catchLoc,!0);if(this.prev<c.finallyLoc)return o(c.finallyLoc)}else if(u){if(this.prev<c.catchLoc)return o(c.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return o(c.finallyLoc)}}}},abrupt:function t(e,r){for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var c=i;break}}c&&("break"===e||"continue"===e)&&c.tryLoc<=r&&r<=c.finallyLoc&&(c=null);var a=c?c.completion:{};return a.type=e,a.arg=r,c?(this.method="next",this.next=c.finallyLoc,l):this.complete(a)},complete:function t(e,n){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&n&&(this.next=n),l},finish:function t(e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),k(r),l}},catch:function t(e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc===e){var o=r.completion;if("throw"===o.type){var i=o.arg;k(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function t(e,n,r){return this.delegate={iterator:L(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=void 0),l}},t}function p(t,e,n,r,o,i,c){try{var a=t[i](c),u=a.value}catch(t){return void n(t)}a.done?e(u):Promise.resolve(u).then(r,o)}function l(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function c(t){p(i,r,o,c,a,"next",t)}function a(t){p(i,r,o,c,a,"throw",t)}c(void 0)}))}}function h(t){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var v=!!r.material,d=!1,y="rax",b=[{package:"moment",version:"2.24.0",urls:["https://g.alicdn.com/mylib/moment/2.24.0/min/moment.min.js"],library:"moment"},{package:"lodash",library:"_",urls:["https://g.alicdn.com/platform/c/lodash/4.6.1/lodash.min.js"]},{title:"fusion\u7ec4\u4ef6\u5e93",package:"@alifd/next",version:"1.25.23",urls:["https://g.alicdn.com/code/lib/alifd__next/1.25.23/next.min.css","https://g.alicdn.com/code/lib/alifd__next/1.25.23/next-with-locales.min.js"],library:"Next"},{package:"antd",version:"4.17.3",urls:["https://g.alicdn.com/code/lib/antd/4.17.3/antd.min.js","https://g.alicdn.com/code/lib/antd/4.17.3/antd.min.css"],library:"antd"}];b.push({title:"meet",package:"@alifd/meet",version:"meet@2.4.2-beta.6",urls:["https://mc-fusion.alibaba-inc.com/unpkg/@alifd/meet@2.4.2-beta.6/umd/meet.lowcode.js","https://mc-fusion.alibaba-inc.com/unpkg/@alifd/meet@2.4.2-beta.6/umd/meet.min.css"],library:"Meet"});var g={packages:[]},m="./assets-dev.json";window.location.pathname.includes("designer")&&(m="./assets-dev-design.json");var x="build/lowcode/meta.js",_="",j={};"object"===h(j)&&Object.keys(j).length&&r.setters.registerSetter(j);var w=S()||{componentName:"Page",id:"node_dockcviv8fo1",props:{ref:"outterView",style:{height:"100%"}},fileName:"lowcode",dataSource:{list:[]},state:{text:"outter",isShowDialog:!1},css:"body {font-size: 12px;} .botton{width:100px;color:#ff00ff}",lifeCycles:{componentDidMount:{type:"JSFunction",value:"function() {\n    console.log('did mount');\n  }"},componentWillUnmount:{type:"JSFunction",value:"function() {\n    console.log('will umount');\n  }"}},methods:{testFunc:{type:"JSFunction",value:"function() {\n    console.log('test func');\n  }"},onClick:{type:"JSFunction",value:"function() {\n    this.setState({\n      isShowDialog: true\n    })\n  }"},closeDialog:{type:"JSFunction",value:"function() {\n    this.setState({\n      isShowDialog: false\n    })\n  }"}},children:[]},O=document.getElementById("lce-container");function S(){var t,e=JSON.parse(window.localStorage.getItem("projectSchema")||"{}"),n;return null==e||null===(t=e.componentsTree)||void 0===t?void 0:t[0]}function k(t,e){return P.apply(this,arguments)}function P(){return(P=l(f().mark((function t(e,n){var r;return f().wrap((function t(o){for(;;)switch(o.prev=o.next){case 0:if(!(n&&Array.isArray(n)&&n.length)){o.next=5;break}return o.next=3,Promise.all(n.map(function(){var t=l(f().mark((function t(e){return f().wrap((function t(n){for(;;)switch(n.prev=n.next){case 0:if("object"!==h(e)){n.next=4;break}return n.abrupt("return",e);case 4:return n.prev=4,n.next=7,fetch(e);case 7:return n.abrupt("return",n.sent.json());case 10:return n.prev=10,n.t0=n.catch(4),console.error("get assets data from builtin assets ".concat(e," failed: "),n.t0),n.abrupt("return",{});case 14:case"end":return n.stop()}}),t,null,[[4,10]])})));return function(e){return t.apply(this,arguments)}}()));case 3:(r=o.sent).forEach((function(t){var n=u(u({},t),{},{packages:t.packages||[t.package],components:t.components,componentList:(t.componentList||[]).map((function(t){return t.children&&(t.children=t.children.map((function(e){return e.sort||(e.sort={category:t.title,group:"\u539f\u5b50\u7ec4\u4ef6"}),e}))),t}))});c()(e,n,(function(t,e){if(Array.isArray(t)&&Array.isArray(e))return e.concat(t)}))}));case 5:case"end":return o.stop()}}),t)})))).apply(this,arguments)}o()((function(){return{name:"editor-init",init:function t(){return l(f().mark((function t(){var e,n,o,i;return f().wrap((function t(c){for(;;)switch(c.prev=c.next){case 0:return c.next=3,fetch(m);case 3:return c.next=5,c.sent.json();case 5:e=c.sent,n=e.packages,g.packages=g.packages.concat(n),g.components=e.components,g.groupList=e.groupList,c.next=22;break;case 12:if(o=!1,i=!1,c.t0=!1,!c.t0){c.next=18;break}return c.next=18,k(g,!1);case 18:if(c.t1=i,!c.t1){c.next=22;break}return c.next=22,k(g,i);case 22:g.packages=b.concat(g.packages),g.packages=g.packages.map((function(t){return t.editUrls&&t.editUrls.length&&(t.renderUrls=t.urls,t.urls=t.editUrls),t})),r.editor.set("renderEnv","rax"),r.project.onRendererReady((function(){r.editor.get("designer").currentDocument.simulator._iframe.onload=function(){r.editor.get("designer").currentDocument.simulator.set("device","phone")}})),v?(r.material.setAssets(g),r.project.openDocument(w)):(r.editor.setAssets(g),r.project.open(w));case 26:case"end":return c.stop()}}),t)})))()}}}),[],O)}])}));