// { "framework": "Vue"} 

!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=155)}({0:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(t,"__esModule",{value:!0});var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=n(3),s=r(a),u={UrlParser:s.default,_typeof:function(e){return Object.prototype.toString.call(e).slice(8,-1).toLowerCase()},isPlainObject:function(e){return"object"===u._typeof(e)},isString:function(e){return"string"==typeof e},isNonEmptyArray:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e&&e.length>0&&Array.isArray(e)&&void 0!==e},isObject:function(e){return e&&"object"===(void 0===e?"undefined":i(e))&&!Array.isArray(e)},isEmptyObject:function(e){return 0===Object.keys(e).length&&e.constructor===Object},decodeIconFont:function(e){var t=/&#x[a-z|0-9]{4,5};?/g;return t.test(e)?e.replace(new RegExp(t,"g"),function(e){var t=e.replace(/&#x/,"0x").replace(/;$/,"");return String.fromCharCode(t)}):e},mergeDeep:function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];if(!n.length)return e;var i=n.shift();if(u.isObject(e)&&u.isObject(i))for(var a in i)u.isObject(i[a])?(e[a]||Object.assign(e,o({},a,{})),u.mergeDeep(e[a],i[a])):Object.assign(e,o({},a,i[a]));return u.mergeDeep.apply(u,[e].concat(n))},appendProtocol:function(e){if(/^\/\//.test(e)){return"http"+(/^https:/.test(weex.config.bundleUrl)?"s":"")+":"+e}return e},encodeURLParams:function(e){return new s.default(e,!0).toString()},goToH5Page:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=weex.requireModule("navigator"),o=new u.UrlParser(e,!0),i=u.appendProtocol(o.toString());r.push({url:u.encodeURLParams(i),animated:t.toString()},n)},env:{isTaobao:function(){return/(tb|taobao|淘宝)/i.test(weex.config.env.appName)},isTrip:function(){return"LX"===weex.config.env.appName},isBoat:function(){var e=weex.config.env.appName;return"Boat"===e||"BoatPlayground"===e},isWeb:function(){var e=weex.config.env.platform;return"object"===("undefined"==typeof window?"undefined":i(window))&&"web"===e.toLowerCase()},isIOS:function(){return"ios"===weex.config.env.platform.toLowerCase()},isIPhoneX:function(){var e=weex.config.env.deviceHeight;return u.env.isWeb()?void 0!==("undefined"==typeof window?"undefined":i(window))&&window.screen&&window.screen.width&&window.screen.height&&(375===parseInt(window.screen.width,10)&&812===parseInt(window.screen.height,10)||414===parseInt(window.screen.width,10)&&896===parseInt(window.screen.height,10)):u.env.isIOS()&&(2436===e||2688===e||1792===e||1624===e)},isAndroid:function(){return"android"===weex.config.env.platform.toLowerCase()},isAlipay:function(){return"AP"===weex.config.env.appName},isTmall:function(){return/(tm|tmall|天猫)/i.test(weex.config.env.appName)},isAliWeex:function(){return u.env.isTmall()||u.env.isTrip()||u.env.isTaobao()},getPageHeight:function(){var e=weex.config.env,t=u.env.isWeb()?0:u.env.isIPhoneX()?176:132;return e.deviceHeight/e.deviceWidth*750-t},getScreenHeight:function(){var e=weex.config.env;return e.deviceHeight/e.deviceWidth*750}},compareVersion:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"0.0.0",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"0.0.0";if(e===t)return!0;for(var n=e.split("."),r=t.split("."),o=Math.max(n.length,r.length),i=0;i<o;i++){var a=~~r[i],s=~~n[i];if(a<s)return!0;if(a>s)return!1}return!1},arrayChunk:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4,n=[];return e&&e.length>0&&(n=e.map(function(n,r){return r%t==0?e.slice(r,r+t):null}).filter(function(e){return e})),n},truncateString:function(e,t){for(var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r=0,o="",i="",a=/[^\x00-\xff]/g,s=e.replace(a,"**").length,u=0;u<s&&(i=e.charAt(u).toString(),null!==i.match(a)?r+=2:r++,!(r>t));u++)o+=i;return n&&s>t&&(o+="..."),o},objToParams:function(e){var t="";for(var n in e)""!==t&&(t+="&"),t+=n+"="+encodeURIComponent(e[n]);return t},paramsToObj:function(e){var t={};try{t=JSON.parse('{"'+decodeURI(e).replace(/"/g,'\\"').replace(/&/g,'","').replace(/=/g,'":"')+'"}')}catch(e){}return t},animation:{pageTransitionAnimation:function(e,t,n,r){weex.requireModule("animation").transition(e,{styles:{transform:t},duration:n?250:300,timingFunction:n?"ease-in":"ease-out",delay:0},function(){r&&r()})}},uiStyle:{pageTransitionAnimationStyle:function(e){return"push"===e?{left:"750px",top:"0px",height:weex.config.env.deviceHeight/weex.config.env.deviceWidth*750+"px"}:"model"===e?{top:weex.config.env.deviceHeight/weex.config.env.deviceWidth*750+"px",left:"0px",height:weex.config.env.deviceHeight/weex.config.env.deviceWidth*750+"px"}:{}}}};t.default=u},1:function(e,t,n){"use strict";function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!o())return new Promise(function(e,t){t({statusText:"网络无连接"})});var t={method:"GET",type:"json",headers:{}},n=weex.requireModule("modal"),r=weex.requireModule("stream"),s=weex.config.env.platform.toLowerCase(),u="http://api.jicu.vip",c=!0;u="android"!==s||c?u:"http://192.168.3.4";var l=Object.assign(t,e);if(l.url=u+l.url,l.headers.referer=a,"GET"===l.method){if(l.params){var f=Object.keys(l.params).reduce(function(e,t){return""+e+t+"="+l.params[t]+"&"},"?appVersion="+i()+"&");l.url=l.url.concat(f).slice(0,-1)}}else"POST"===l.method&&l.body&&(l.body=JSON.stringify(Object.assign(l.body,{appVerion:i()})),l.headers["Content-Type"]="application/json");return new Promise(function(e,t){r.fetch(l,function(r){r.ok?e(r.data):(n.toast({message:"网络无连接",duration:1}),t(r))})})}function o(){var e=weex.requireModule("network"),t=!0;return e.getNetworkStatus(function(e){"NONE"===e&&(weex.requireModule("modal").toast({message:"网络无连接",duration:1}),t=!1)}),t}function i(){var e="";return"ios"===weex.config.env.platform.toLowerCase()?weex.requireModule("version").getAppVersion(function(t){e=t}):e=weex.requireModule("version").getAppVersion(),e}Object.defineProperty(t,"__esModule",{value:!0}),t.http=r;var a="ios.jicu.vip"},155:function(e,t,n){var r,o,i=[];i.push(n(156)),r=n(157);var a=n(158);o=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(o=r=r.default),"function"==typeof o&&(o=o.options),o.render=a.render,o.staticRenderFns=a.staticRenderFns,o._scopeId="data-v-387caac3",o.style=o.style||{},i.forEach(function(e){for(var t in e)o.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(o._scopeId,i),e.exports=r,e.exports.el="true",new Vue(e.exports)},156:function(e,t){e.exports={wrapper:{flexDirection:"column",paddingTop:"10",paddingRight:"10",paddingBottom:"10",paddingLeft:"10"}}},157:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),i=r(o),a=n(2),s=n(1),u=n(6),c=r(u);t.default={components:{navbar:c.default},data:function(){return{userAgreementsUrl:""}},beforeCreate:function(){(0,a.setPageTitle)("用户服务协议")},methods:{queryUserAgreementsUrl:function(){var e=this;(0,s.http)({method:"POST",url:"/user/agreements",headers:{},body:{}}).then(function(t){if(200==t.code){var n=t.data;e.userAgreementsUrl=n.userAgreementsUrl}},function(e){})}},created:function(){(0,a.titlebar)("用户协议");var e=i.default.env.getPageHeight();i.default.env.getScreenHeight();this.agreementsStyle={width:"750px",height:e+"px"},this.queryUserAgreementsUrl()}}},158:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:["wrapper"]},[n("navbar",{attrs:{title:"用户协议",backgroundColor:"#45b5f0",height:"88"}}),n("web",{style:e.agreementsStyle,attrs:{src:e.userAgreementsUrl}})],1)},staticRenderFns:[]}},2:function(e,t,n){"use strict";function r(){weex.requireModule("dom").addRule("fontFace",{fontFamily:"iconfont",src:"url('local:///font/iconfont.ttf')"})}function o(e){}function i(e){}function a(e,t){var n=weex.config.bundleUrl,r=n.indexOf("your_current_IP")>=0||n.indexOf("file://assets/")>=0,o=n.indexOf("file:///")>=0&&n.indexOf(".app")>0,i="web"===weex.config.env.platform.toLowerCase(),a="";if(i){if(a="/"+e+".html",t){a+="?";var s=[];for(var u in t)if(t.hasOwnProperty(u)){var c=t[u];s.push(u+"="+c)}a+=s.join("&")}}else o?a=n.split("bundlejs")[0]+"/bundlejs/"+e+".js":r&&(a=n.split("/dist")[0]+"/dist/"+e+".js");return a}function s(e,t){var n=new RegExp("(^|&)"+t+"=([^&]*)(&|$)","i"),r=e.slice(e.indexOf("?")+1).match(n);if(null!=r)try{return decodeURIComponent(r[2])}catch(e){return null}return null}function u(e){if(null==e||""==e||"undefined"==e||"null"==e)return!0;if(e.length>0)return!1;if(0===e.length)return!0;for(var t in e)if(hasOwnProperty.call(e,t))return!1;return!0}function c(){return weex.config.env.platform.toLowerCase()}function l(e){var t=weex.requireModule("storage"),n="";return t.getItem(e,function(e){"success"==e.result&&(n=e.data)}),n}function f(e,t){return v(e+t),new Promise(function(n,r){v("promise..."),weex.requireModule("storage").setItem(e,t,function(e){v("setItem result:"+JSON.stringify(e)),"success"==e.result?n(e.result):r(e)})})}function p(e){return new Promise(function(t,n){var r=weex.requireModule("storage"),o="";r.getItem(e,function(e){"success"==e.result?(o=e.data,t(o)):n(e)})})}function d(e){return new Promise(function(t,n){var r=weex.requireModule("storage"),o="";r.removeItem(e,function(e){"success"==e.result?(o=e.data,t(o)):n(e)})})}function h(e,t){weex.requireModule("storage").setItem(e,t,function(e){return"success"==e.result&&"undefined"==e.data})}function g(e,t){if("web"===c()){weex.requireModule("storage").setItem(e,t,function(e){return"success"==e.result&&"undefined"==e.data})}else{new BroadcastChannel(e).postMessage(t)}}function m(e,t){var n={status:1,val:void 0};new BroadcastChannel(e).onmessage=function(e){e.data&&(n.val=e.data),n.status=0,t(n)}}function v(){arguments.length>0&&void 0!==arguments[0]&&arguments[0]}function w(e){return decodeURIComponent((new RegExp("[?|&]"+e+"=([^&;]+?)(&|#|;|$)").exec(location.href)||[,""])[1].replace(/\+/g,"%20"))||null}function y(e){weex.requireModule("titlebar").setTitle(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.initIconfont=r,t.setPageTitle=o,t.setOgImage=i,t.getEntryUrl=a,t.getUrlSearch=s,t.isEmpty=u,t.whichPlatform=c,t.getStorageValue=l,t.setStorageVal=f,t.getStorageVal=p,t.removeStorage=d,t.setStorageValue=h,t.postMessage=g,t.receiveMessage=m,t.modalDebug=v,t.getUrlKey=w,t.titlebar=y;weex.requireModule("modal")},3:function(e,t,n){"use strict";function r(e){return(e||"").toString().replace(m,"")}function o(e){var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var n=t.location||{};e=e||n;var r,o={},i=void 0===e?"undefined":l(e);if("blob:"===e.protocol)o=new s(unescape(e.pathname),{});else if("string"===i){o=new s(e,{});for(r in w)delete o[r]}else if("object"===i){for(r in e)r in w||(o[r]=e[r]);void 0===o.slashes&&(o.slashes=d.test(e.href))}return o}function i(e){e=r(e);var t=h.exec(e);return{protocol:t[1]?t[1].toLowerCase():"",slashes:!!t[2],rest:t[3]}}function a(e,t){if(""===e)return t;for(var n=(t||"/").split("/").slice(0,-1).concat(e.split("/")),r=n.length,o=n[r-1],i=!1,a=0;r--;)"."===n[r]?n.splice(r,1):".."===n[r]?(n.splice(r,1),a++):a&&(0===r&&(i=!0),n.splice(r,1),a--);return i&&n.unshift(""),"."!==o&&".."!==o||n.push(""),n.join("/")}function s(e,t,n){if(e=r(e),!(this instanceof s))return new s(e,t,n);var u,c,d,h,g,m,w=v.slice(),y=void 0===t?"undefined":l(t),x=this,b=0;for("object"!==y&&"string"!==y&&(n=t,t=null),n&&"function"!=typeof n&&(n=p.parse),t=o(t),c=i(e||""),u=!c.protocol&&!c.slashes,x.slashes=c.slashes||u&&t.slashes,x.protocol=c.protocol||t.protocol||"",e=c.rest,c.slashes||(w[3]=[/(.*)/,"pathname"]);b<w.length;b++)h=w[b],"function"!=typeof h?(d=h[0],m=h[1],d!==d?x[m]=e:"string"==typeof d?~(g=e.indexOf(d))&&("number"==typeof h[2]?(x[m]=e.slice(0,g),e=e.slice(g+h[2])):(x[m]=e.slice(g),e=e.slice(0,g))):(g=d.exec(e))&&(x[m]=g[1],e=e.slice(0,g.index)),x[m]=x[m]||(u&&h[3]?t[m]||"":""),h[4]&&(x[m]=x[m].toLowerCase())):e=h(e);n&&(x.query=n(x.query)),u&&t.slashes&&"/"!==x.pathname.charAt(0)&&(""!==x.pathname||""!==t.pathname)&&(x.pathname=a(x.pathname,t.pathname)),f(x.port,x.protocol)||(x.host=x.hostname,x.port=""),x.username=x.password="",x.auth&&(h=x.auth.split(":"),x.username=h[0]||"",x.password=h[1]||""),x.origin=x.protocol&&x.host&&"file:"!==x.protocol?x.protocol+"//"+x.host:"null",x.href=x.toString()}function u(e,t,n){var r=this;switch(e){case"query":"string"==typeof t&&t.length&&(t=(n||p.parse)(t)),r[e]=t;break;case"port":r[e]=t,f(t,r.protocol)?t&&(r.host=r.hostname+":"+t):(r.host=r.hostname,r[e]="");break;case"hostname":r[e]=t,r.port&&(t+=":"+r.port),r.host=t;break;case"host":r[e]=t,/:\d+$/.test(t)?(t=t.split(":"),r.port=t.pop(),r.hostname=t.join(":")):(r.hostname=t,r.port="");break;case"protocol":r.protocol=t.toLowerCase(),r.slashes=!n;break;case"pathname":case"hash":if(t){var o="pathname"===e?"/":"#";r[e]=t.charAt(0)!==o?o+t:t}else r[e]=t;break;default:r[e]=t}for(var i=0;i<v.length;i++){var a=v[i];a[4]&&(r[a[1]]=r[a[1]].toLowerCase())}return r.origin=r.protocol&&r.host&&"file:"!==r.protocol?r.protocol+"//"+r.host:"null",r.href=r.toString(),r}function c(e){e&&"function"==typeof e||(e=p.stringify);var t,n=this,r=n.protocol;r&&":"!==r.charAt(r.length-1)&&(r+=":");var o=r+(n.slashes?"//":"");return n.username&&(o+=n.username,n.password&&(o+=":"+n.password),o+="@"),o+=n.host+n.pathname,t="object"===l(n.query)?e(n.query):n.query,t&&(o+="?"!==t.charAt(0)?"?"+t:t),n.hash&&(o+=n.hash),o}var l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f=n(4),p=n(5),d=/^[A-Za-z][A-Za-z0-9+-.]*:\/\//,h=/^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i,g="[\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF]",m=new RegExp("^"+g+"+"),v=[["#","hash"],["?","query"],function(e){return e.replace("\\","/")},["/","pathname"],["@","auth",1],[NaN,"host",void 0,1,1],[/:(\d+)$/,"port",void 0,1],[NaN,"hostname",void 0,1,1]],w={hash:1,query:1};s.prototype={set:u,toString:c},s.extractProtocol=i,s.location=o,s.trimLeft=r,s.qs=p,e.exports=s},4:function(e,t,n){"use strict";e.exports=function(e,t){if(t=t.split(":")[0],!(e=+e))return!1;switch(t){case"http":case"ws":return 80!==e;case"https":case"wss":return 443!==e;case"ftp":return 21!==e;case"gopher":return 70!==e;case"file":return!1}return 0!==e}},5:function(e,t,n){"use strict";function r(e){try{return decodeURIComponent(e.replace(/\+/g," "))}catch(e){return null}}function o(e){for(var t,n=/([^=?&]+)=?([^&]*)/g,o={};t=n.exec(e);){var i=r(t[1]),a=r(t[2]);null===i||null===a||i in o||(o[i]=a)}return o}function i(e,t){t=t||"";var n,r,o=[];"string"!=typeof t&&(t="?");for(r in e)if(s.call(e,r)){if(n=e[r],n||null!==n&&n!==a&&!isNaN(n)||(n=""),r=encodeURIComponent(r),n=encodeURIComponent(n),null===r||null===n)continue;o.push(r+"="+n)}return o.length?t+o.join("&"):""}var a,s=Object.prototype.hasOwnProperty;t.stringify=i,t.parse=o},6:function(e,t,n){var r,o,i=[];i.push(n(7)),r=n(8);var a=n(9);o=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(o=r=r.default),"function"==typeof o&&(o=o.options),o.render=a.render,o.staticRenderFns=a.staticRenderFns,o._scopeId="data-v-cc674820",o.style=o.style||{},i.forEach(function(e){for(var t in e)o.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(o._scopeId,i),e.exports=r},7:function(e,t){e.exports={container:{flexDirection:"row",position:"fixed",top:0,left:0,right:0,width:750},"right-text":{position:"absolute",bottom:28,right:32,textAlign:"right",fontSize:32,fontFamily:"'Open Sans', sans-serif"},"left-text":{position:"absolute",bottom:28,left:32,textAlign:"left",fontSize:32,fontFamily:"'Open Sans', sans-serif"},"center-text":{position:"absolute",bottom:25,left:172,right:172,textAlign:"center",fontSize:36,fontWeight:"bold"},"left-image":{position:"absolute",bottom:20,left:28,width:50,height:50},"right-image":{position:"absolute",bottom:20,right:28,width:50,height:50}}},8:function(e,t,n){"use strict";e.exports={props:{dataRole:{default:"navbar"},backgroundColor:{default:"black"},height:{default:88},title:{default:""},titleColor:{default:"black"},rightItemSrc:{default:""},rightItemTitle:{default:""},rightItemColor:{default:"black"},leftItemSrc:{default:""},leftItemTitle:{default:""},leftItemColor:{default:"black"}},methods:{onclickrightitem:function(e){this.$emit("naviBarRightItemClick")},onclickleftitem:function(e){this.$emit("naviBarLeftItemClick")}},beforeCreated:function(){this.show="ios"===weex.config.env.platform.toLowerCase()}}},9:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.show?n("div",{staticClass:["container"],style:{height:e.height,backgroundColor:e.backgroundColor},attrs:{dataRole:e.dataRole}},[e.rightItemSrc?e._e():n("text",{staticClass:["right-text"],style:{color:e.rightItemColor},attrs:{naviItemPosition:"right"},on:{click:e.onclickrightitem}},[e._v(e._s(e.rightItemTitle))]),e.rightItemSrc?n("image",{staticClass:["right-image"],attrs:{naviItemPosition:"right",src:e.rightItemSrc},on:{click:e.onclickrightitem}}):e._e(),e.leftItemSrc?e._e():n("text",{staticClass:["left-text"],style:{color:e.leftItemColor},attrs:{naviItemPosition:"left"},on:{click:e.onclickleftitem}},[e._v(e._s(e.leftItemTitle))]),e.leftItemSrc?n("image",{staticClass:["left-image"],attrs:{naviItemPosition:"left",src:e.leftItemSrc},on:{click:e.onclickleftitem}}):e._e(),n("text",{staticClass:["center-text"],style:{color:e.titleColor},attrs:{naviItemPosition:"center",value:e.title}})]):e._e()},staticRenderFns:[]}}});