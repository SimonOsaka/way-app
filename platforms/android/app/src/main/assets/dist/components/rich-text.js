// { "framework": "Vue"} 

!function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=85)}({50:function(e,t){e.exports={img:{height:500,marginTop:"30"},text:{color:"#333333",fontSize:"28",marginTop:"30"}}},51:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=weex.requireModule("html"),o=weex.requireModule("browser");t.default={props:["html"],data:function(){return{nodes:[],images:[]}},watch:{html:function(e){var t=this;n.parse(e,function(e){t.nodes=e})}},methods:{clickImage:function(e){e.target.attr.src;o.browserImages(this.images)}}}},52:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:["rich-container"]},e._l(e.nodes,function(t){return r("div",{key:t},[""!=t.text?r("text",{staticClass:["text"]},[e._v(e._s(t.text))]):e._e()])}))},staticRenderFns:[]}},85:function(e,t,r){var n,o,s=[];s.push(r(50)),n=r(51);var i=r(52);o=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(o=n=n.default),"function"==typeof o&&(o=o.options),o.render=i.render,o.staticRenderFns=i.staticRenderFns,o._scopeId="data-v-ad63fec4",o.style=o.style||{},s.forEach(function(e){for(var t in e)o.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(o._scopeId,s),e.exports=n,e.exports.el="true",new Vue(e.exports)}});