// { "framework": "Vue"} 

!function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=96)}([function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Object.defineProperty(t,"__esModule",{value:!0});var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s=r(3),a=n(s),l={UrlParser:a.default,_typeof:function(e){return Object.prototype.toString.call(e).slice(8,-1).toLowerCase()},isPlainObject:function(e){return"object"===l._typeof(e)},isString:function(e){return"string"==typeof e},isNonEmptyArray:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e&&e.length>0&&Array.isArray(e)&&void 0!==e},isObject:function(e){return e&&"object"===(void 0===e?"undefined":i(e))&&!Array.isArray(e)},isEmptyObject:function(e){return 0===Object.keys(e).length&&e.constructor===Object},decodeIconFont:function(e){var t=/&#x[a-z|0-9]{4,5};?/g;return t.test(e)?e.replace(new RegExp(t,"g"),function(e){var t=e.replace(/&#x/,"0x").replace(/;$/,"");return String.fromCharCode(t)}):e},mergeDeep:function(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];if(!r.length)return e;var i=r.shift();if(l.isObject(e)&&l.isObject(i))for(var s in i)l.isObject(i[s])?(e[s]||Object.assign(e,o({},s,{})),l.mergeDeep(e[s],i[s])):Object.assign(e,o({},s,i[s]));return l.mergeDeep.apply(l,[e].concat(r))},appendProtocol:function(e){if(/^\/\//.test(e)){return"http"+(/^https:/.test(weex.config.bundleUrl)?"s":"")+":"+e}return e},encodeURLParams:function(e){return new a.default(e,!0).toString()},goToH5Page:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=weex.requireModule("navigator"),o=new l.UrlParser(e,!0),i=l.appendProtocol(o.toString());n.push({url:l.encodeURLParams(i),animated:t.toString()},r)},env:{isTaobao:function(){return/(tb|taobao|淘宝)/i.test(weex.config.env.appName)},isTrip:function(){return"LX"===weex.config.env.appName},isBoat:function(){var e=weex.config.env.appName;return"Boat"===e||"BoatPlayground"===e},isWeb:function(){var e=weex.config.env.platform;return"object"===("undefined"==typeof window?"undefined":i(window))&&"web"===e.toLowerCase()},isIOS:function(){return"ios"===weex.config.env.platform.toLowerCase()},isIPhoneX:function(){var e=weex.config.env.deviceHeight;return l.env.isWeb()?void 0!==("undefined"==typeof window?"undefined":i(window))&&window.screen&&window.screen.width&&window.screen.height&&(375===parseInt(window.screen.width,10)&&812===parseInt(window.screen.height,10)||414===parseInt(window.screen.width,10)&&896===parseInt(window.screen.height,10)):l.env.isIOS()&&(2436===e||2688===e||1792===e||1624===e)},isAndroid:function(){return"android"===weex.config.env.platform.toLowerCase()},isAlipay:function(){return"AP"===weex.config.env.appName},isTmall:function(){return/(tm|tmall|天猫)/i.test(weex.config.env.appName)},isAliWeex:function(){return l.env.isTmall()||l.env.isTrip()||l.env.isTaobao()},getPageHeight:function(){var e=weex.config.env,t=l.env.isWeb()?0:l.env.isIPhoneX()?176:132;return e.deviceHeight/e.deviceWidth*750-t},getScreenHeight:function(){var e=weex.config.env;return e.deviceHeight/e.deviceWidth*750}},compareVersion:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"0.0.0",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"0.0.0";if(e===t)return!0;for(var r=e.split("."),n=t.split("."),o=Math.max(r.length,n.length),i=0;i<o;i++){var s=~~n[i],a=~~r[i];if(s<a)return!0;if(s>a)return!1}return!1},arrayChunk:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4,r=[];return e&&e.length>0&&(r=e.map(function(r,n){return n%t==0?e.slice(n,n+t):null}).filter(function(e){return e})),r},truncateString:function(e,t){for(var r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],n=0,o="",i="",s=/[^\x00-\xff]/g,a=e.replace(s,"**").length,l=0;l<a&&(i=e.charAt(l).toString(),null!==i.match(s)?n+=2:n++,!(n>t));l++)o+=i;return r&&a>t&&(o+="..."),o},objToParams:function(e){var t="";for(var r in e)""!==t&&(t+="&"),t+=r+"="+encodeURIComponent(e[r]);return t},paramsToObj:function(e){var t={};try{t=JSON.parse('{"'+decodeURI(e).replace(/"/g,'\\"').replace(/&/g,'","').replace(/=/g,'":"')+'"}')}catch(e){}return t},animation:{pageTransitionAnimation:function(e,t,r,n){weex.requireModule("animation").transition(e,{styles:{transform:t},duration:r?250:300,timingFunction:r?"ease-in":"ease-out",delay:0},function(){n&&n()})}},uiStyle:{pageTransitionAnimationStyle:function(e){return"push"===e?{left:"750px",top:"0px",height:weex.config.env.deviceHeight/weex.config.env.deviceWidth*750+"px"}:"model"===e?{top:weex.config.env.deviceHeight/weex.config.env.deviceWidth*750+"px",left:"0px",height:weex.config.env.deviceHeight/weex.config.env.deviceWidth*750+"px"}:{}}}};t.default=l},function(e,t,r){"use strict";function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!o())return new Promise(function(e,t){t({statusText:"网络无连接"})});var t={method:"GET",type:"json",headers:{}},r=weex.requireModule("modal"),n=weex.requireModule("stream"),a=weex.config.env.platform.toLowerCase(),l="http://api.jicu.vip",c=!0;l="android"!==a||c?l:"http://192.168.3.4";var u=Object.assign(t,e);if(u.url=l+u.url,u.headers.referer=s,"GET"===u.method){if(u.params){var d=Object.keys(u.params).reduce(function(e,t){return""+e+t+"="+u.params[t]+"&"},"?appVersion="+i()+"&");u.url=u.url.concat(d).slice(0,-1)}}else"POST"===u.method&&u.body&&(u.body=JSON.stringify(Object.assign(u.body,{appVerion:i()})),u.headers["Content-Type"]="application/json");return new Promise(function(e,t){n.fetch(u,function(n){n.ok?e(n.data):(r.toast({message:"网络无连接",duration:1}),t(n))})})}function o(){var e=weex.requireModule("network"),t=!0;return e.getNetworkStatus(function(e){"NONE"===e&&(weex.requireModule("modal").toast({message:"网络无连接",duration:1}),t=!1)}),t}function i(){var e="";return"ios"===weex.config.env.platform.toLowerCase()?weex.requireModule("version").getAppVersion(function(t){e=t}):e=weex.requireModule("version").getAppVersion(),e}Object.defineProperty(t,"__esModule",{value:!0}),t.http=n;var s="ios.jicu.vip"},function(e,t,r){"use strict";function n(){weex.requireModule("dom").addRule("fontFace",{fontFamily:"iconfont",src:"url('local:///font/iconfont.ttf')"})}function o(e){}function i(e){}function s(e,t){var r=weex.config.bundleUrl,n=r.indexOf("your_current_IP")>=0||r.indexOf("file://assets/")>=0,o=r.indexOf("file:///")>=0&&r.indexOf(".app")>0,i="web"===weex.config.env.platform.toLowerCase(),s="";if(i){if(s="/"+e+".html",t){s+="?";var a=[];for(var l in t)if(t.hasOwnProperty(l)){var c=t[l];a.push(l+"="+c)}s+=a.join("&")}}else o?s=r.split("bundlejs")[0]+"/bundlejs/"+e+".js":n&&(s=r.split("/dist")[0]+"/dist/"+e+".js");return s}function a(e,t){var r=new RegExp("(^|&)"+t+"=([^&]*)(&|$)","i"),n=e.slice(e.indexOf("?")+1).match(r);if(null!=n)try{return decodeURIComponent(n[2])}catch(e){return null}return null}function l(e){if(null==e||""==e||"undefined"==e||"null"==e)return!0;if(e.length>0)return!1;if(0===e.length)return!0;for(var t in e)if(hasOwnProperty.call(e,t))return!1;return!0}function c(){return weex.config.env.platform.toLowerCase()}function u(e){var t=weex.requireModule("storage"),r="";return t.getItem(e,function(e){"success"==e.result&&(r=e.data)}),r}function d(e,t){return m(e+t),new Promise(function(r,n){m("promise..."),weex.requireModule("storage").setItem(e,t,function(e){m("setItem result:"+JSON.stringify(e)),"success"==e.result?r(e.result):n(e)})})}function f(e){return new Promise(function(t,r){var n=weex.requireModule("storage"),o="";n.getItem(e,function(e){"success"==e.result?(o=e.data,t(o)):r(e)})})}function p(e){return new Promise(function(t,r){var n=weex.requireModule("storage"),o="";n.removeItem(e,function(e){"success"==e.result?(o=e.data,t(o)):r(e)})})}function h(e,t){weex.requireModule("storage").setItem(e,t,function(e){return"success"==e.result&&"undefined"==e.data})}function g(e,t){if("web"===c()){weex.requireModule("storage").setItem(e,t,function(e){return"success"==e.result&&"undefined"==e.data})}else{new BroadcastChannel(e).postMessage(t)}}function y(e,t){var r={status:1,val:void 0};new BroadcastChannel(e).onmessage=function(e){e.data&&(r.val=e.data),r.status=0,t(r)}}function m(){arguments.length>0&&void 0!==arguments[0]&&arguments[0]}function b(e){return decodeURIComponent((new RegExp("[?|&]"+e+"=([^&;]+?)(&|#|;|$)").exec(location.href)||[,""])[1].replace(/\+/g,"%20"))||null}function v(e){weex.requireModule("titlebar").setTitle(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.initIconfont=n,t.setPageTitle=o,t.setOgImage=i,t.getEntryUrl=s,t.getUrlSearch=a,t.isEmpty=l,t.whichPlatform=c,t.getStorageValue=u,t.setStorageVal=d,t.getStorageVal=f,t.removeStorage=p,t.setStorageValue=h,t.postMessage=g,t.receiveMessage=y,t.modalDebug=m,t.getUrlKey=b,t.titlebar=v;weex.requireModule("modal")},function(e,t,r){"use strict";function n(e){return(e||"").toString().replace(y,"")}function o(e){var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var r=t.location||{};e=e||r;var n,o={},i=void 0===e?"undefined":u(e);if("blob:"===e.protocol)o=new a(unescape(e.pathname),{});else if("string"===i){o=new a(e,{});for(n in b)delete o[n]}else if("object"===i){for(n in e)n in b||(o[n]=e[n]);void 0===o.slashes&&(o.slashes=p.test(e.href))}return o}function i(e){e=n(e);var t=h.exec(e);return{protocol:t[1]?t[1].toLowerCase():"",slashes:!!t[2],rest:t[3]}}function s(e,t){if(""===e)return t;for(var r=(t||"/").split("/").slice(0,-1).concat(e.split("/")),n=r.length,o=r[n-1],i=!1,s=0;n--;)"."===r[n]?r.splice(n,1):".."===r[n]?(r.splice(n,1),s++):s&&(0===n&&(i=!0),r.splice(n,1),s--);return i&&r.unshift(""),"."!==o&&".."!==o||r.push(""),r.join("/")}function a(e,t,r){if(e=n(e),!(this instanceof a))return new a(e,t,r);var l,c,p,h,g,y,b=m.slice(),v=void 0===t?"undefined":u(t),x=this,_=0;for("object"!==v&&"string"!==v&&(r=t,t=null),r&&"function"!=typeof r&&(r=f.parse),t=o(t),c=i(e||""),l=!c.protocol&&!c.slashes,x.slashes=c.slashes||l&&t.slashes,x.protocol=c.protocol||t.protocol||"",e=c.rest,c.slashes||(b[3]=[/(.*)/,"pathname"]);_<b.length;_++)h=b[_],"function"!=typeof h?(p=h[0],y=h[1],p!==p?x[y]=e:"string"==typeof p?~(g=e.indexOf(p))&&("number"==typeof h[2]?(x[y]=e.slice(0,g),e=e.slice(g+h[2])):(x[y]=e.slice(g),e=e.slice(0,g))):(g=p.exec(e))&&(x[y]=g[1],e=e.slice(0,g.index)),x[y]=x[y]||(l&&h[3]?t[y]||"":""),h[4]&&(x[y]=x[y].toLowerCase())):e=h(e);r&&(x.query=r(x.query)),l&&t.slashes&&"/"!==x.pathname.charAt(0)&&(""!==x.pathname||""!==t.pathname)&&(x.pathname=s(x.pathname,t.pathname)),d(x.port,x.protocol)||(x.host=x.hostname,x.port=""),x.username=x.password="",x.auth&&(h=x.auth.split(":"),x.username=h[0]||"",x.password=h[1]||""),x.origin=x.protocol&&x.host&&"file:"!==x.protocol?x.protocol+"//"+x.host:"null",x.href=x.toString()}function l(e,t,r){var n=this;switch(e){case"query":"string"==typeof t&&t.length&&(t=(r||f.parse)(t)),n[e]=t;break;case"port":n[e]=t,d(t,n.protocol)?t&&(n.host=n.hostname+":"+t):(n.host=n.hostname,n[e]="");break;case"hostname":n[e]=t,n.port&&(t+=":"+n.port),n.host=t;break;case"host":n[e]=t,/:\d+$/.test(t)?(t=t.split(":"),n.port=t.pop(),n.hostname=t.join(":")):(n.hostname=t,n.port="");break;case"protocol":n.protocol=t.toLowerCase(),n.slashes=!r;break;case"pathname":case"hash":if(t){var o="pathname"===e?"/":"#";n[e]=t.charAt(0)!==o?o+t:t}else n[e]=t;break;default:n[e]=t}for(var i=0;i<m.length;i++){var s=m[i];s[4]&&(n[s[1]]=n[s[1]].toLowerCase())}return n.origin=n.protocol&&n.host&&"file:"!==n.protocol?n.protocol+"//"+n.host:"null",n.href=n.toString(),n}function c(e){e&&"function"==typeof e||(e=f.stringify);var t,r=this,n=r.protocol;n&&":"!==n.charAt(n.length-1)&&(n+=":");var o=n+(r.slashes?"//":"");return r.username&&(o+=r.username,r.password&&(o+=":"+r.password),o+="@"),o+=r.host+r.pathname,t="object"===u(r.query)?e(r.query):r.query,t&&(o+="?"!==t.charAt(0)?"?"+t:t),r.hash&&(o+=r.hash),o}var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d=r(4),f=r(5),p=/^[A-Za-z][A-Za-z0-9+-.]*:\/\//,h=/^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i,g="[\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF]",y=new RegExp("^"+g+"+"),m=[["#","hash"],["?","query"],function(e){return e.replace("\\","/")},["/","pathname"],["@","auth",1],[NaN,"host",void 0,1,1],[/:(\d+)$/,"port",void 0,1],[NaN,"hostname",void 0,1,1]],b={hash:1,query:1};a.prototype={set:l,toString:c},a.extractProtocol=i,a.location=o,a.trimLeft=n,a.qs=f,e.exports=a},function(e,t,r){"use strict";e.exports=function(e,t){if(t=t.split(":")[0],!(e=+e))return!1;switch(t){case"http":case"ws":return 80!==e;case"https":case"wss":return 443!==e;case"ftp":return 21!==e;case"gopher":return 70!==e;case"file":return!1}return 0!==e}},function(e,t,r){"use strict";function n(e){try{return decodeURIComponent(e.replace(/\+/g," "))}catch(e){return null}}function o(e){for(var t,r=/([^=?&]+)=?([^&]*)/g,o={};t=r.exec(e);){var i=n(t[1]),s=n(t[2]);null===i||null===s||i in o||(o[i]=s)}return o}function i(e,t){t=t||"";var r,n,o=[];"string"!=typeof t&&(t="?");for(n in e)if(a.call(e,n)){if(r=e[n],r||null!==r&&r!==s&&!isNaN(r)||(r=""),n=encodeURIComponent(n),r=encodeURIComponent(r),null===n||null===r)continue;o.push(n+"="+r)}return o.length?t+o.join("&"):""}var s,a=Object.prototype.hasOwnProperty;t.stringify=i,t.parse=o},function(e,t,r){var n,o,i=[];i.push(r(7)),n=r(8);var s=r(9);o=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(o=n=n.default),"function"==typeof o&&(o=o.options),o.render=s.render,o.staticRenderFns=s.staticRenderFns,o._scopeId="data-v-cc674820",o.style=o.style||{},i.forEach(function(e){for(var t in e)o.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(o._scopeId,i),e.exports=n},function(e,t){e.exports={container:{flexDirection:"row",position:"fixed",top:0,left:0,right:0,width:750},"right-text":{position:"absolute",bottom:28,right:32,textAlign:"right",fontSize:32,fontFamily:"'Open Sans', sans-serif"},"left-text":{position:"absolute",bottom:28,left:32,textAlign:"left",fontSize:32,fontFamily:"'Open Sans', sans-serif"},"center-text":{position:"absolute",bottom:25,left:172,right:172,textAlign:"center",fontSize:36,fontWeight:"bold"},"left-image":{position:"absolute",bottom:20,left:28,width:50,height:50},"right-image":{position:"absolute",bottom:20,right:28,width:50,height:50}}},function(e,t,r){"use strict";e.exports={props:{dataRole:{default:"navbar"},backgroundColor:{default:"black"},height:{default:88},title:{default:""},titleColor:{default:"black"},rightItemSrc:{default:""},rightItemTitle:{default:""},rightItemColor:{default:"black"},leftItemSrc:{default:""},leftItemTitle:{default:""},leftItemColor:{default:"black"}},methods:{onclickrightitem:function(e){this.$emit("naviBarRightItemClick")},onclickleftitem:function(e){this.$emit("naviBarLeftItemClick")}},beforeCreated:function(){this.show="ios"===weex.config.env.platform.toLowerCase()}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.show?r("div",{staticClass:["container"],style:{height:e.height,backgroundColor:e.backgroundColor},attrs:{dataRole:e.dataRole}},[e.rightItemSrc?e._e():r("text",{staticClass:["right-text"],style:{color:e.rightItemColor},attrs:{naviItemPosition:"right"},on:{click:e.onclickrightitem}},[e._v(e._s(e.rightItemTitle))]),e.rightItemSrc?r("image",{staticClass:["right-image"],attrs:{naviItemPosition:"right",src:e.rightItemSrc},on:{click:e.onclickrightitem}}):e._e(),e.leftItemSrc?e._e():r("text",{staticClass:["left-text"],style:{color:e.leftItemColor},attrs:{naviItemPosition:"left"},on:{click:e.onclickleftitem}},[e._v(e._s(e.leftItemTitle))]),e.leftItemSrc?r("image",{staticClass:["left-image"],attrs:{naviItemPosition:"left",src:e.leftItemSrc},on:{click:e.onclickleftitem}}):e._e(),r("text",{staticClass:["center-text"],style:{color:e.titleColor},attrs:{naviItemPosition:"center",value:e.title}})]):e._e()},staticRenderFns:[]}},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=r(11);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n(o).default}})},function(e,t,r){var n,o,i=[];i.push(r(12)),n=r(13);var s=r(14);o=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(o=n=n.default),"function"==typeof o&&(o=o.options),o.render=s.render,o.staticRenderFns=s.staticRenderFns,o._scopeId="data-v-eff0e228",o.style=o.style||{},i.forEach(function(e){for(var t in e)o.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(o._scopeId,i),e.exports=n},function(e,t){e.exports={"wxc-cell":{flexDirection:"row",alignItems:"center",paddingLeft:"24",paddingRight:"24",backgroundColor:"#ffffff"},"cell-margin":{marginBottom:"24"},"cell-title":{flex:1},"cell-indent":{paddingBottom:"30",paddingTop:"30"},"has-desc":{paddingBottom:"18",paddingTop:"18"},"cell-top-border":{borderTopColor:"#e2e2e2",borderTopWidth:"1"},"cell-bottom-border":{borderBottomColor:"#e2e2e2",borderBottomWidth:"1"},"cell-label-text":{fontSize:"30",color:"#666666",width:"188",marginRight:"10"},"cell-arrow-icon":{width:"22",height:"22"},"cell-content":{color:"#333333",fontSize:"30",lineHeight:"40"},"cell-desc-text":{color:"#999999",fontSize:"24",lineHeight:"30",marginTop:"4",marginRight:"30"},"extra-content-text":{fontSize:"28",color:"#999999",marginRight:"4"}}},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=r(0),i=n(o);t.default={props:{label:{type:String,default:""},title:{type:String,default:""},extraContent:{type:String,default:""},desc:{type:String,default:""},link:{type:String,default:""},hasTopBorder:{type:Boolean,default:!1},hasMargin:{type:Boolean,default:!1},hasBottomBorder:{type:Boolean,default:!0},hasArrow:{type:Boolean,default:!1},arrowIcon:{type:String,default:"https://gw.alicdn.com/tfs/TB11zBUpwMPMeJjy1XbXXcwxVXa-22-22.png"},hasVerticalIndent:{type:Boolean,default:!0},cellStyle:{type:Object,default:function(){return{}}},autoAccessible:{type:Boolean,default:!0}},methods:{cellClicked:function(e){var t=this.link;this.$emit("wxcCellClicked",{e:e}),t&&i.default.goToH5Page(t,!0)}}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{class:["wxc-cell",e.hasTopBorder&&"cell-top-border",e.hasBottomBorder&&"cell-bottom-border",e.hasMargin&&"cell-margin",e.hasVerticalIndent&&"cell-indent",e.desc&&"has-desc"],style:e.cellStyle,attrs:{accessible:e.autoAccessible,ariaLabel:e.label+","+e.title+","+e.desc},on:{click:e.cellClicked}},[e._t("label",[e.label?r("div",[r("text",{staticClass:["cell-label-text"]},[e._v(e._s(e.label))])]):e._e()]),r("div",{staticClass:["cell-title"]},[e._t("title",[r("text",{staticClass:["cell-content"]},[e._v(e._s(e.title))]),e.desc?r("text",{staticClass:["cell-desc-text"]},[e._v(e._s(e.desc))]):e._e()])],2),e._t("value"),e._t("default"),e.extraContent?r("text",{staticClass:["extra-content-text"]},[e._v(e._s(e.extraContent))]):e._e(),e.hasArrow?r("image",{staticClass:["cell-arrow-icon"],attrs:{src:e.arrowIcon,ariaHidden:!0}}):e._e()],2)},staticRenderFns:[]}},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=r(16);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n(o).default}})},function(e,t,r){var n,o,i=[];i.push(r(17)),n=r(18);var s=r(20);o=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(o=n=n.default),"function"==typeof o&&(o=o.options),o.render=s.render,o.staticRenderFns=s.staticRenderFns,o._scopeId="data-v-6273a8fc",o.style=o.style||{},i.forEach(function(e){for(var t in e)o.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(o._scopeId,i),e.exports=n},function(e,t){e.exports={"wxc-btn":{alignItems:"center",justifyContent:"center",borderRadius:"12",opacity:1},"wxc-btn-highlight":{"opacity:active":.8},"btn-text":{textOverflow:"ellipsis",lines:1,color:"#ffffff"}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o=r(19);t.default={props:{text:{type:String,default:"确认"},size:{type:String,default:"full"},type:{type:String,default:"red"},disabled:{type:Boolean,default:!1},isHighlight:{type:Boolean,default:!1},btnStyle:Object,textStyle:Object,disabledStyle:Object},computed:{mrBtnStyle:function(){var e=this.type,t=this.disabled,r=this.btnStyle,i=this.size,s=this.disabledStyle,a=n({},o.STYLE_MAP[e],o.BUTTON_STYLE_MAP[i],r),l={opacity:.2};return"white"===e&&(l={backgroundColor:"rgba(0, 0, 0, 0.1)"}),t?n({},a,l,s,{borderWidth:0}):a},mrTextStyle:function(){var e=this.type,t=this.disabled,r=this.textStyle,i=this.size,s=n({},o.TEXT_STYLE_MAP[e],r,o.TEXT_FONTSIZE_STYLE_MAP[i]);return t?n({},s,{color:"#FFFFFF"}):s}},methods:{onClicked:function(e){var t=this.type,r=this.disabled;this.$emit("wxcButtonClicked",{e:e,type:t,disabled:r})}}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.STYLE_MAP={red:{backgroundColor:"#FF5000"},yellow:{backgroundColor:"#FFC900"},white:{backgroundColor:"#FFFFFF",borderColor:"#A5A5A5",borderWidth:"1px"},blue:{backgroundColor:"#0F8DE8"},green:{backgroundColor:"#19be6b"}},t.TEXT_STYLE_MAP={red:{color:"#FFFFFF"},yellow:{color:"#FFFFFF"},blue:{color:"#FFFFFF"},white:{color:"#3D3D3D"},green:{color:"#FFFFFF"}},t.BUTTON_STYLE_MAP={full:{width:"702px",height:"88px"},big:{width:"339px",height:"70px"},medium:{width:"218px",height:"60px"},small:{width:"157px",height:"44px"}},t.TEXT_FONTSIZE_STYLE_MAP={full:{fontSize:"36px"},big:{fontSize:"32px"},medium:{fontSize:"28px"},small:{fontSize:"24px"}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{class:["wxc-btn",e.isHighlight&&!e.disabled&&"wxc-btn-highlight"],style:e.mrBtnStyle,attrs:{accessible:!0,ariaLabel:e.text},on:{click:e.onClicked}},[r("text",{staticClass:["btn-text"],style:e.mrTextStyle},[e._v(e._s(e.text))])])},staticRenderFns:[]}},function(e,t,r){"use strict";function n(e){return(0,p.http)({method:"POST",url:"/user/device/sync",headers:{},body:e})}function o(e,t){return(0,p.http)({method:"POST",url:"/shop/user/follows",headers:t,body:e})}function i(e,t){return(0,p.http)({method:"POST",url:"/user/profile/address/update",headers:t,body:e})}function s(e,t){return(0,p.http)({method:"POST",url:"/user/address/list",headers:t,body:e})}function a(e,t){return(0,p.http)({method:"POST",url:"/user/address/create",headers:t,body:e})}function l(e,t){return(0,p.http)({method:"POST",url:"/user/address/update",headers:t,body:e})}function c(e,t){return(0,p.http)({method:"POST",url:"/user/address/delete",headers:t,body:e})}function u(e,t){return(0,p.http)({method:"POST",url:"/user/feedback/add",headers:t,body:e})}function d(e,t){return(0,p.http)({method:"POST",url:"/user/feedback/list",headers:t,body:e})}function f(e,t){return(0,p.http)({method:"POST",url:"/user/feedback/typeMap",headers:t,body:e})}Object.defineProperty(t,"__esModule",{value:!0}),t.syncUserDevice=n,t.userShopFollows=o,t.updateUserProfileAddress=i,t.queryUserAddressList=s,t.createUserAddress=a,t.updateUserAddress=l,t.deleteUserAddress=c,t.addFeedback=u,t.queryUserFeedbackList=d,t.feedbackTypeMap=f;var p=r(1)},,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=r(51);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n(o).default}})},function(e,t,r){var n,o,i=[];i.push(r(52)),n=r(53);var s=r(58);o=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(o=n=n.default),"function"==typeof o&&(o=o.options),o.render=s.render,o.staticRenderFns=s.staticRenderFns,o._scopeId="data-v-3e7db4ef",o.style=o.style||{},i.forEach(function(e){for(var t in e)o.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(o._scopeId,i),e.exports=n},function(e,t){e.exports={"grid-select":{flexDirection:"row",justifyContent:"space-between",flexWrap:"wrap"}}},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i=r(54),s=n(i);t.default={components:{Option:s.default},props:{id:{type:String,default:"one"},cols:{type:Number,default:4},single:{type:Boolean,default:!1},list:{type:Array,default:function(){return[]}},limit:{type:Number},customStyles:{type:Object,default:function(){return{}}}},data:function(){return{dList:this.initList()}},computed:{cHackList:function(){var e=this.list,t=this.cols,r=e.length%t,n=r?t-r:0;return Array.apply(null,{length:n})}},watch:{list:function(){this.dList=this.initList()}},created:function(){this.lineSpacing=this.customStyles.lineSpacing||"12px"},methods:{onSelect:function(e){var t=this.dList[e].checked;this.limit<=this.checkedCount&&!t?this.$emit("overLimit",this.limit):(this.updateList(e),this.$emit("select",{selectIndex:e,checked:!t,checkedList:this.dList.filter(function(e){return e.checked})}))},initList:function(){var e=this.single,t=0,r=this.list.map(function(r,n){var i=r.checked,s=r.disabled;return s=!!s,i=!(s||!i||e&&0!==t),r.checked&&(t+=1),o({},r,{checked:i,disabled:s})});return this.checkedCount=t,r},updateList:function(e){var t=this.single,r=0;this.dList=this.dList.map(function(n,o){return t?n.checked=e===o&&!n.checked:o===e&&(n.checked=!n.checked),n.checked&&(r+=1),n}),this.checkedCount=r}}}},function(e,t,r){var n,o,i=[];i.push(r(55)),n=r(56);var s=r(57);o=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(o=n=n.default),"function"==typeof o&&(o=o.options),o.render=s.render,o.staticRenderFns=s.staticRenderFns,o._scopeId="data-v-8da092b0",o.style=o.style||{},i.forEach(function(e){for(var t in e)o.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(o._scopeId,i),e.exports=n},function(e,t){e.exports={"grid-option":{justifyContent:"center",borderRadius:"8",borderWidth:"2",paddingLeft:"6",paddingRight:"6"},"text-title":{lines:2,lineHeight:"30",textOverflow:"ellipsis",textAlign:"center",fontSize:"26"},"image-checked":{position:"absolute",right:0,bottom:0,width:"38",height:"34"}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{index:{type:Number,default:-1},checked:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},title:{type:String,default:""},width:{type:String,default:"166px"},height:{type:String,default:"72px"},icon:{type:String,default:"https://gw.alicdn.com/tfs/TB1IAByhgMPMeJjy1XdXXasrXXa-38-34.png"},color:{type:String,default:"#3d3d3d"},checkedColor:{type:String,default:"#3d3d3d"},disabledColor:{type:String,default:"#9b9b9b"},borderColor:{type:String,default:"transparent"},checkedBorderColor:{type:String,default:"#ffb200"},disabledBorderColor:{type:String,default:"transparent"},backgroundColor:{type:String,default:"#f6f6f6"},checkedBackgroundColor:{type:String,default:"#ffffff"},disabledBackgroundColor:{type:String,default:"#f6f6f6"}},computed:{cWrapperStyle:function(){var e=this.checked,t=this.disabled,r=this.width,n=this.height,o=this.borderColor,i=this.checkedBorderColor,s=this.disabledBorderColor,a=this.backgroundColor,l=this.checkedBackgroundColor,c=this.disabledBackgroundColor;return{width:r,height:n,borderColor:t?s:e?i:o,backgroundColor:t?c:e?l:a}},cTitleStyle:function(){var e=this.checked,t=this.disabled,r=this.color,n=this.checkedColor,o=this.disabledColor;return{color:t?o:e?n:r}}},methods:{onClick:function(){this.disabled||this.$emit("select",this.index)}}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:["grid-option"],style:e.cWrapperStyle,attrs:{accessible:!0,ariaLabel:e.title+","+(e.checked?"已选中":"未选中")},on:{click:e.onClick}},[e.title?r("text",{staticClass:["text-title"],style:e.cTitleStyle},[e._v(e._s(e.title))]):e._e(),e.checked&&e.icon?r("image",{staticClass:["image-checked"],attrs:{src:e.icon}}):e._e()])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:["grid-select"]},[e._l(e.dList,function(t,n){return r("option",e._b({key:n,style:{marginTop:n>=e.cols?e.lineSpacing:null},attrs:{index:n},on:{select:function(t){e.onSelect(n)}}},"option",Object.assign({},e.customStyles,t),!1))}),e._l(e.cHackList,function(t,n){return r("option",e._b({key:e.id+n,style:{opacity:0,marginTop:e.dList.length>=e.cols?e.lineSpacing:null}},"option",Object.assign({},e.customStyles,t),!1))})],2)},staticRenderFns:[]}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,r){var n,o,i=[];i.push(r(97)),n=r(98);var s=r(99);o=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(o=n=n.default),"function"==typeof o&&(o=o.options),o.render=s.render,o.staticRenderFns=s.staticRenderFns,o._scopeId="data-v-3fe5fddf",o.style=o.style||{},i.forEach(function(e){for(var t in e)o.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(o._scopeId,i),e.exports=n,e.exports.el="true",new Vue(e.exports)},function(e,t){e.exports={scroller:{width:"750"},save_btn:{marginTop:"20",alignItems:"center"}}},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=r(0),i=n(o),s=r(15),a=n(s),l=r(50),c=n(l),u=r(10),d=n(u),f=r(6),p=n(f),h=r(2),g=r(21),y=weex.requireModule("navigator"),m=weex.requireModule("modal");t.default={components:{navbar:p.default,WxcCell:d.default,WxcGridSelect:c.default,WxcButton:a.default},data:function(){return{gridCustomStyles:{lineSpacing:"14px",width:"120px",height:"50px",icon:"",color:"#333333",checkedColor:"#ffffff",disabledColor:"#eeeeee",borderColor:"#666666",checkedBorderColor:"#ffb200",backgroundColor:"#ffffff",checkedBackgroundColor:"#ffb200"},gridData:[{title:"公司",tag:"company",checked:!1},{title:"学校",tag:"school",checked:!1},{title:"家",tag:"home",checked:!1}],navbarTitle:"",params:{id:"",userLoginId:"",addressName:"",addressLongitude:0,addressLatitude:0,addressTag:""},headers:{token:""}}},created:function(){var e=this,t=i.default.env.getPageHeight();i.default.env.getScreenHeight();this.scrollerStyle={height:t+"px"},(0,h.receiveMessage)("user:address:city",function(t){if(0===t.status&&t.val){var r=JSON.parse(t.val);e.params.addressName=r.addressTitle,e.params.addressLongitude=r.addressLongitude,e.params.addressLatitude=r.addressLatitude}}),(0,h.getStorageVal)("user:address:edit").then(function(t){e.navbarTitle="修改地址",(0,h.titlebar)(e.navbarTitle);var r=JSON.parse(t);switch(e.params.id=r.id,e.params.addressName=r.addressName,e.params.addressLongitude=r.addressLongitude,e.params.addressLatitude=r.addressLatitude,e.params.addressTag=r.addressTag,e.params.addressTag){case"home":e.gridData[2].checked=!0,e.gridData.$set(2,e.gridData[2]);break;case"school":e.gridData[1].checked=!0,e.gridData.$set(1,e.gridData[1]);break;case"home":e.gridData[0].checked=!0,e.gridData.$set(0,e.gridData[0])}(0,h.removeStorage)("user:address:edit")},function(t){e.navbarTitle="新增地址",(0,h.titlebar)(e.navbarTitle)})},methods:{userAddressOnfocus:function(){this.$refs.widgetUserAddressInput.blur(),this.toSelectCityAddressClicked()},onSelect:function(e,t){var r=t.selectIndex,n=t.checked;t.checkedList;this.params.addressTag=n?this.gridData[r].tag:""},saveUserAddressBtnClick:function(){if(""===this.params.addressName)return void m.toast({message:"地址必须输入",duration:1});this.requestSaveOrUpdateUserAddress()},requestSaveOrUpdateUserAddress:function(){var e=this;(0,h.getStorageVal)("way:user").then(function(t){var r=JSON.parse(t);e.params.userLoginId=r.userLoginId,e.headers.token=r.userToken,e.params.id&&e.params.id>0?(0,g.updateUserAddress)(e.params,e.headers).then(function(e){(0,h.postMessage)("user:address:refresh","success"),y.pop({animated:"true"})}):(0,g.createUserAddress)(e.params,e.headers).then(function(e){(0,h.postMessage)("user:address:refresh","success"),y.pop({animated:"true"})})},function(e){y.push({url:(0,h.getEntryUrl)("views/user/login"),animated:"true"})})},toSelectCityAddressClicked:function(){y.push({url:(0,h.getEntryUrl)("views/city/queryForAddress"),animated:"true"})}}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("navbar",{attrs:{title:e.navbarTitle,backgroundColor:"#45b5f0",height:"88"}}),r("scroller",{staticClass:["scroller"],style:e.scrollerStyle},[r("div",[r("wxc-cell",{attrs:{label:"地址",hasArrow:!0}},[r("div",{attrs:{slot:"title"},slot:"title"},[r("input",{ref:"widgetUserAddressInput",staticClass:["input"],attrs:{type:"text",placeholder:"固定的地址",autofocus:"false",value:e.params.addressName},on:{focus:e.userAddressOnfocus}})])])],1),r("div",[r("wxc-cell",{attrs:{label:"标签",hasArrow:!1}},[r("div",{attrs:{slot:"title"},slot:"title"},[r("wxc-grid-select",{attrs:{single:!0,cols:4,customStyles:e.gridCustomStyles,list:e.gridData},on:{select:function(t){return e.onSelect("res3",t)}}})],1)])],1),r("div",{staticClass:["save_btn"]},[r("wxc-button",{attrs:{type:"green",text:"确定"},on:{wxcButtonClicked:e.saveUserAddressBtnClick}})],1)])],1)},staticRenderFns:[]}}]);