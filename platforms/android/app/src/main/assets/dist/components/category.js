// { "framework": "Vue"} 

!function(t){function e(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var r={};e.m=t,e.c=r,e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=63)}({20:function(t,e){t.exports={category:{marginTop:"20",paddingLeft:"24",width:"750",height:"68",backgroundColor:"#f2f3f4",justifyContent:"center"},"category-text":{color:"#000000",fontWeight:"600",fontSize:"28"}}},21:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{title:String}}},22:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:["category"]},[r("text",{staticClass:["category-text"]},[t._v(t._s(t.title))])])},staticRenderFns:[]}},63:function(t,e,r){var n,o,s=[];s.push(r(20)),n=r(21);var c=r(22);o=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(o=n=n.default),"function"==typeof o&&(o=o.options),o.render=c.render,o.staticRenderFns=c.staticRenderFns,o._scopeId="data-v-376cda0e",o.style=o.style||{},s.forEach(function(t){for(var e in t)o.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(o._scopeId,s),t.exports=n,t.exports.el="true",new Vue(t.exports)}});