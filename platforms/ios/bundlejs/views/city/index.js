// { "framework": "Vue"} 

!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=80)}([function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(t,"__esModule",{value:!0});var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=n(3),s=o(a),c={UrlParser:s.default,_typeof:function(e){return Object.prototype.toString.call(e).slice(8,-1).toLowerCase()},isPlainObject:function(e){return"object"===c._typeof(e)},isString:function(e){return"string"==typeof e},isNonEmptyArray:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e&&e.length>0&&Array.isArray(e)&&void 0!==e},isObject:function(e){return e&&"object"===(void 0===e?"undefined":i(e))&&!Array.isArray(e)},isEmptyObject:function(e){return 0===Object.keys(e).length&&e.constructor===Object},decodeIconFont:function(e){var t=/&#x[a-z|0-9]{4,5};?/g;return t.test(e)?e.replace(new RegExp(t,"g"),function(e){var t=e.replace(/&#x/,"0x").replace(/;$/,"");return String.fromCharCode(t)}):e},mergeDeep:function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];if(!n.length)return e;var i=n.shift();if(c.isObject(e)&&c.isObject(i))for(var a in i)c.isObject(i[a])?(e[a]||Object.assign(e,r({},a,{})),c.mergeDeep(e[a],i[a])):Object.assign(e,r({},a,i[a]));return c.mergeDeep.apply(c,[e].concat(n))},appendProtocol:function(e){if(/^\/\//.test(e)){return"http"+(/^https:/.test(weex.config.bundleUrl)?"s":"")+":"+e}return e},encodeURLParams:function(e){return new s.default(e,!0).toString()},goToH5Page:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,o=weex.requireModule("navigator"),r=new c.UrlParser(e,!0),i=c.appendProtocol(r.toString());o.push({url:c.encodeURLParams(i),animated:t.toString()},n)},env:{isTaobao:function(){return/(tb|taobao|淘宝)/i.test(weex.config.env.appName)},isTrip:function(){return"LX"===weex.config.env.appName},isBoat:function(){var e=weex.config.env.appName;return"Boat"===e||"BoatPlayground"===e},isWeb:function(){var e=weex.config.env.platform;return"object"===("undefined"==typeof window?"undefined":i(window))&&"web"===e.toLowerCase()},isIOS:function(){return"ios"===weex.config.env.platform.toLowerCase()},isIPhoneX:function(){var e=weex.config.env.deviceHeight;return c.env.isWeb()?void 0!==("undefined"==typeof window?"undefined":i(window))&&window.screen&&window.screen.width&&window.screen.height&&375===parseInt(window.screen.width,10)&&812===parseInt(window.screen.height,10):c.env.isIOS()&&2436===e},isAndroid:function(){return"android"===weex.config.env.platform.toLowerCase()},isAp:function(){return"AP"===weex.config.env.appName},isTmall:function(){return/(tm|tmall|天猫)/i.test(weex.config.env.appName)},isAliWeex:function(){return c.env.isTmall()||c.env.isTrip()||c.env.isTaobao()},getPageHeight:function(){var e=weex.config.env,t=c.env.isWeb()?0:c.env.isIPhoneX()?176:132;return e.deviceHeight/e.deviceWidth*750-t},getScreenHeight:function(){var e=weex.config.env;return e.deviceHeight/e.deviceWidth*750}},compareVersion:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"0.0.0",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"0.0.0";if(e===t)return!0;for(var n=e.split("."),o=t.split("."),r=Math.max(n.length,o.length),i=0;i<r;i++){var a=~~o[i],s=~~n[i];if(a<s)return!0;if(a>s)return!1}return!1},arrayChunk:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4,n=[];return e&&e.length>0&&(n=e.map(function(n,o){return o%t==0?e.slice(o,o+t):null}).filter(function(e){return e})),n},truncateString:function(e,t){for(var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],o=0,r="",i="",a=/[^\x00-\xff]/g,s=e.replace(a,"**").length,c=0;c<s&&(i=e.charAt(c).toString(),null!==i.match(a)?o+=2:o++,!(o>t));c++)r+=i;return n&&s>t&&(r+="..."),r},objToParams:function(e){var t="";for(var n in e)""!==t&&(t+="&"),t+=n+"="+encodeURIComponent(e[n]);return t},paramsToObj:function(e){var t={};try{t=JSON.parse('{"'+decodeURI(e).replace(/"/g,'\\"').replace(/&/g,'","').replace(/=/g,'":"')+'"}')}catch(e){}return t},animation:{pageTransitionAnimation:function(e,t,n,o){weex.requireModule("animation").transition(e,{styles:{transform:t},duration:n?250:300,timingFunction:n?"ease-in":"ease-out",delay:0},function(){o&&o()})}},uiStyle:{pageTransitionAnimationStyle:function(e){return"push"===e?{left:"750px",top:"0px",height:weex.config.env.deviceHeight/weex.config.env.deviceWidth*750+"px"}:"model"===e?{top:weex.config.env.deviceHeight/weex.config.env.deviceWidth*750+"px",left:"0px",height:weex.config.env.deviceHeight/weex.config.env.deviceWidth*750+"px"}:{}}}};t.default=c},function(e,t,n){"use strict";function o(){weex.requireModule("dom").addRule("fontFace",{fontFamily:"iconfont",src:"url('../iconfont.ttf')"})}function r(e){}function i(e){document.querySelector('meta[property="og:image"]').setAttribute("content",e||"")}function a(e,t){var n=weex.config.bundleUrl,o=n.indexOf("your_current_IP")>=0||n.indexOf("file://assets/")>=0,r=n.indexOf("file:///")>=0&&n.indexOf(".app")>0,i="web"===weex.config.env.platform.toLowerCase(),a="";if(i){if(a="/"+e+".html",t){a+="?";var s=[];for(var c in t)if(t.hasOwnProperty(c)){var l=t[c];s.push(c+"="+l)}a+=s.join("&")}}else a=r||o?n.split("bundlejs")[0]+"/bundlejs/"+e+".js":n.split("/dist")[0]+"/dist/"+e+".js";return a}function s(e,t){var n=new RegExp("(^|&)"+t+"=([^&]*)(&|$)","i"),o=e.slice(e.indexOf("?")+1).match(n);if(null!=o)try{return decodeURIComponent(o[2])}catch(e){return null}return null}function c(e){if(null==e||""==e||"undefined"==e||"null"==e)return!0;if(e.length>0)return!1;if(0===e.length)return!0;for(var t in e)if(hasOwnProperty.call(e,t))return!1;return!0}function l(){return weex.config.env.platform.toLowerCase()}function u(e){var t=weex.requireModule("storage"),n="";return t.getItem(e,function(e){"success"==e.result&&(n=e.data)}),n}function d(e,t){return y(e+t),new Promise(function(n,o){y("promise..."),weex.requireModule("storage").setItem(e,t,function(e){y("setItem result:"+JSON.stringify(e)),"success"==e.result?n(e.result):o(e)})})}function f(e){return new Promise(function(t,n){var o=weex.requireModule("storage"),r="";o.getItem(e,function(e){"success"==e.result?(r=e.data,t(r)):n(e)})})}function p(e,t){weex.requireModule("storage").setItem(e,t,function(e){return"success"==e.result&&"undefined"==e.data})}function h(e,t){if("web"===l()){weex.requireModule("storage").setItem(e,t,function(e){return"success"==e.result&&"undefined"==e.data})}else{new BroadcastChannel(e).postMessage(t)}}function g(e,t){var n={status:1,val:void 0};new BroadcastChannel(e).onmessage=function(e){e.data&&(n.val=e.data),n.status=0,t(n)}}function y(){arguments.length>0&&void 0!==arguments[0]&&arguments[0]}function m(e){return decodeURIComponent((new RegExp("[?|&]"+e+"=([^&;]+?)(&|#|;|$)").exec(location.href)||[,""])[1].replace(/\+/g,"%20"))||null}Object.defineProperty(t,"__esModule",{value:!0}),t.initIconfont=o,t.setPageTitle=r,t.setOgImage=i,t.getEntryUrl=a,t.getUrlSearch=s,t.isEmpty=c,t.whichPlatform=l,t.getStorageValue=u,t.setStorageVal=d,t.getStorageVal=f,t.setStorageValue=p,t.postMessage=h,t.receiveMessage=g,t.modalDebug=y,t.getUrlKey=m;weex.requireModule("modal")},function(e,t,n){"use strict";function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!r())return new Promise(function(e,t){t({statusText:"网络无连接"})});var t={method:"GET",type:"json",headers:{}},n=weex.requireModule("modal"),o=weex.requireModule("stream"),s=(weex.config.env.platform.toLowerCase(),Object.assign(t,e));if(s.url="http://api.jicu.vip"+s.url,s.headers.referer=a,"GET"===s.method){if(s.params){var c=Object.keys(s.params).reduce(function(e,t){return""+e+t+"="+s.params[t]+"&"},"?appVersion="+i()+"&");s.url=s.url.concat(c).slice(0,-1)}}else"POST"===s.method&&s.body&&(s.body=JSON.stringify(Object.assign(s.body,{appVerion:i()})),s.headers["Content-Type"]="application/json");return new Promise(function(e,t){o.fetch(s,function(o){o.ok?e(o.data):(n.toast({message:"网络无连接",duration:1}),t(o))})})}function r(){var e=weex.requireModule("network"),t=!0;return e.getNetworkStatus(function(e){"NONE"===e&&(weex.requireModule("modal").toast({message:"网络无连接",duration:1}),t=!1)}),t}function i(){var e="";return weex.requireModule("version").getAppVersion(function(t){e=t}),e}Object.defineProperty(t,"__esModule",{value:!0}),t.http=o;var a="ios.jicu.vip"},function(e,t,n){"use strict";function o(e){e=e||global.location||{};var t,n={},o=void 0===e?"undefined":l(e);if("blob:"===e.protocol)n=new a(unescape(e.pathname),{});else if("string"===o){n=new a(e,{});for(t in g)delete n[t]}else if("object"===o){for(t in e)t in g||(n[t]=e[t]);void 0===n.slashes&&(n.slashes=p.test(e.href))}return n}function r(e){var t=f.exec(e);return{protocol:t[1]?t[1].toLowerCase():"",slashes:!!t[2],rest:t[3]}}function i(e,t){for(var n=(t||"/").split("/").slice(0,-1).concat(e.split("/")),o=n.length,r=n[o-1],i=!1,a=0;o--;)"."===n[o]?n.splice(o,1):".."===n[o]?(n.splice(o,1),a++):a&&(0===o&&(i=!0),n.splice(o,1),a--);return i&&n.unshift(""),"."!==r&&".."!==r||n.push(""),n.join("/")}function a(e,t,n){if(!(this instanceof a))return new a(e,t,n);var s,c,f,p,g,y,m=h.slice(),b=void 0===t?"undefined":l(t),v=this,w=0;for("object"!==b&&"string"!==b&&(n=t,t=null),n&&"function"!=typeof n&&(n=d.parse),t=o(t),c=r(e||""),s=!c.protocol&&!c.slashes,v.slashes=c.slashes||s&&t.slashes,v.protocol=c.protocol||t.protocol||"",e=c.rest,c.slashes||(m[2]=[/(.*)/,"pathname"]);w<m.length;w++)p=m[w],f=p[0],y=p[1],f!==f?v[y]=e:"string"==typeof f?~(g=e.indexOf(f))&&("number"==typeof p[2]?(v[y]=e.slice(0,g),e=e.slice(g+p[2])):(v[y]=e.slice(g),e=e.slice(0,g))):(g=f.exec(e))&&(v[y]=g[1],e=e.slice(0,g.index)),v[y]=v[y]||(s&&p[3]?t[y]||"":""),p[4]&&(v[y]=v[y].toLowerCase());n&&(v.query=n(v.query)),s&&t.slashes&&"/"!==v.pathname.charAt(0)&&(""!==v.pathname||""!==t.pathname)&&(v.pathname=i(v.pathname,t.pathname)),u(v.port,v.protocol)||(v.host=v.hostname,v.port=""),v.username=v.password="",v.auth&&(p=v.auth.split(":"),v.username=p[0]||"",v.password=p[1]||""),v.origin=v.protocol&&v.host&&"file:"!==v.protocol?v.protocol+"//"+v.host:"null",v.href=v.toString()}function s(e,t,n){var o=this;switch(e){case"query":"string"==typeof t&&t.length&&(t=(n||d.parse)(t)),o[e]=t;break;case"port":o[e]=t,u(t,o.protocol)?t&&(o.host=o.hostname+":"+t):(o.host=o.hostname,o[e]="");break;case"hostname":o[e]=t,o.port&&(t+=":"+o.port),o.host=t;break;case"host":o[e]=t,/:\d+$/.test(t)?(t=t.split(":"),o.port=t.pop(),o.hostname=t.join(":")):(o.hostname=t,o.port="");break;case"protocol":o.protocol=t.toLowerCase(),o.slashes=!n;break;case"pathname":case"hash":if(t){var r="pathname"===e?"/":"#";o[e]=t.charAt(0)!==r?r+t:t}else o[e]=t;break;default:o[e]=t}for(var i=0;i<h.length;i++){var a=h[i];a[4]&&(o[a[1]]=o[a[1]].toLowerCase())}return o.origin=o.protocol&&o.host&&"file:"!==o.protocol?o.protocol+"//"+o.host:"null",o.href=o.toString(),o}function c(e){e&&"function"==typeof e||(e=d.stringify);var t,n=this,o=n.protocol;o&&":"!==o.charAt(o.length-1)&&(o+=":");var r=o+(n.slashes?"//":"");return n.username&&(r+=n.username,n.password&&(r+=":"+n.password),r+="@"),r+=n.host+n.pathname,t="object"===l(n.query)?e(n.query):n.query,t&&(r+="?"!==t.charAt(0)?"?"+t:t),n.hash&&(r+=n.hash),r}var l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u=n(4),d=n(5),f=/^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i,p=/^[A-Za-z][A-Za-z0-9+-.]*:\/\//,h=[["#","hash"],["?","query"],["/","pathname"],["@","auth",1],[NaN,"host",void 0,1,1],[/:(\d+)$/,"port",void 0,1],[NaN,"hostname",void 0,1,1]],g={hash:1,query:1};a.prototype={set:s,toString:c},a.extractProtocol=r,a.location=o,a.qs=d,e.exports=a},function(e,t,n){"use strict";e.exports=function(e,t){if(t=t.split(":")[0],!(e=+e))return!1;switch(t){case"http":case"ws":return 80!==e;case"https":case"wss":return 443!==e;case"ftp":return 21!==e;case"gopher":return 70!==e;case"file":return!1}return 0!==e}},function(e,t,n){"use strict";function o(e){return decodeURIComponent(e.replace(/\+/g," "))}function r(e){for(var t,n=/([^=?&]+)=?([^&]*)/g,r={};t=n.exec(e);r[o(t[1])]=o(t[2]));return r}function i(e,t){t=t||"";var n=[];"string"!=typeof t&&(t="?");for(var o in e)a.call(e,o)&&n.push(encodeURIComponent(o)+"="+encodeURIComponent(e[o]));return n.length?t+n.join("&"):""}var a=Object.prototype.hasOwnProperty;t.stringify=i,t.parse=r},function(e,t,n){var o,r,i=[];i.push(n(7)),o=n(8);var a=n(9);r=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(r=o=o.default),"function"==typeof r&&(r=r.options),r.render=a.render,r.staticRenderFns=a.staticRenderFns,r._scopeId="data-v-cc674820",r.style=r.style||{},i.forEach(function(e){for(var t in e)r.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(r._scopeId,i),e.exports=o},function(e,t){e.exports={container:{flexDirection:"row",position:"fixed",top:0,left:0,right:0,width:750},"right-text":{position:"absolute",bottom:28,right:32,textAlign:"right",fontSize:32,fontFamily:"'Open Sans', sans-serif"},"left-text":{position:"absolute",bottom:28,left:32,textAlign:"left",fontSize:32,fontFamily:"'Open Sans', sans-serif"},"center-text":{position:"absolute",bottom:25,left:172,right:172,textAlign:"center",fontSize:36,fontWeight:"bold"},"left-image":{position:"absolute",bottom:20,left:28,width:50,height:50},"right-image":{position:"absolute",bottom:20,right:28,width:50,height:50}}},function(e,t,n){"use strict";e.exports={props:{dataRole:{default:"navbar"},backgroundColor:{default:"black"},height:{default:88},title:{default:""},titleColor:{default:"black"},rightItemSrc:{default:""},rightItemTitle:{default:""},rightItemColor:{default:"black"},leftItemSrc:{default:""},leftItemTitle:{default:""},leftItemColor:{default:"black"}},methods:{onclickrightitem:function(e){this.$emit("naviBarRightItemClick")},onclickleftitem:function(e){this.$emit("naviBarLeftItemClick")}}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:["container"],style:{height:e.height,backgroundColor:e.backgroundColor},attrs:{dataRole:e.dataRole}},[e.rightItemSrc?e._e():n("text",{staticClass:["right-text"],style:{color:e.rightItemColor},attrs:{naviItemPosition:"right"},on:{click:e.onclickrightitem}},[e._v(e._s(e.rightItemTitle))]),e.rightItemSrc?n("image",{staticClass:["right-image"],attrs:{naviItemPosition:"right",src:e.rightItemSrc},on:{click:e.onclickrightitem}}):e._e(),e.leftItemSrc?e._e():n("text",{staticClass:["left-text"],style:{color:e.leftItemColor},attrs:{naviItemPosition:"left"},on:{click:e.onclickleftitem}},[e._v(e._s(e.leftItemTitle))]),e.leftItemSrc?n("image",{staticClass:["left-image"],attrs:{naviItemPosition:"left",src:e.leftItemSrc},on:{click:e.onclickleftitem}}):e._e(),n("text",{staticClass:["center-text"],style:{color:e.titleColor},attrs:{naviItemPosition:"center",value:e.title}})])},staticRenderFns:[]}},,function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(12);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o(r).default}})},function(e,t,n){var o,r,i=[];i.push(n(13)),o=n(14);var a=n(15);r=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(r=o=o.default),"function"==typeof r&&(r=r.options),r.render=a.render,r.staticRenderFns=a.staticRenderFns,r._scopeId="data-v-eff0e228",r.style=r.style||{},i.forEach(function(e){for(var t in e)r.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(r._scopeId,i),e.exports=o},function(e,t){e.exports={"wxc-cell":{flexDirection:"row",alignItems:"center",paddingLeft:"24",paddingRight:"24",backgroundColor:"#ffffff"},"cell-margin":{marginBottom:"24"},"cell-title":{flex:1},"cell-indent":{paddingBottom:"30",paddingTop:"30"},"has-desc":{paddingBottom:"18",paddingTop:"18"},"cell-top-border":{borderTopColor:"#e2e2e2",borderTopWidth:"1"},"cell-bottom-border":{borderBottomColor:"#e2e2e2",borderBottomWidth:"1"},"cell-label-text":{fontSize:"30",color:"#666666",width:"188",marginRight:"10"},"cell-arrow-icon":{width:"22",height:"22"},"cell-content":{color:"#333333",fontSize:"30",lineHeight:"40"},"cell-desc-text":{color:"#999999",fontSize:"24",lineHeight:"30",marginTop:"4",marginRight:"30"},"extra-content-text":{fontSize:"28",color:"#999999",marginRight:"4"}}},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),i=o(r);t.default={props:{label:{type:String,default:""},title:{type:String,default:""},extraContent:{type:String,default:""},desc:{type:String,default:""},link:{type:String,default:""},hasTopBorder:{type:Boolean,default:!1},hasMargin:{type:Boolean,default:!1},hasBottomBorder:{type:Boolean,default:!0},hasArrow:{type:Boolean,default:!1},arrowIcon:{type:String,default:"https://gw.alicdn.com/tfs/TB11zBUpwMPMeJjy1XbXXcwxVXa-22-22.png"},hasVerticalIndent:{type:Boolean,default:!0},cellStyle:{type:Object,default:function(){return{}}},autoAccessible:{type:Boolean,default:!0}},methods:{cellClicked:function(e){var t=this.link;this.$emit("wxcCellClicked",{e:e}),t&&i.default.goToH5Page(t,!0)}}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:["wxc-cell",e.hasTopBorder&&"cell-top-border",e.hasBottomBorder&&"cell-bottom-border",e.hasMargin&&"cell-margin",e.hasVerticalIndent&&"cell-indent",e.desc&&"has-desc"],style:e.cellStyle,attrs:{accessible:e.autoAccessible,ariaLabel:e.label+","+e.title+","+e.desc},on:{click:e.cellClicked}},[e._t("label",[e.label?n("div",[n("text",{staticClass:["cell-label-text"]},[e._v(e._s(e.label))])]):e._e()]),n("div",{staticClass:["cell-title"]},[e._t("title",[n("text",{staticClass:["cell-content"]},[e._v(e._s(e.title))]),e.desc?n("text",{staticClass:["cell-desc-text"]},[e._v(e._s(e.desc))]):e._e()])],2),e._t("value"),e._t("default"),e.extraContent?n("text",{staticClass:["extra-content-text"]},[e._v(e._s(e.extraContent))]):e._e(),e.hasArrow?n("image",{staticClass:["cell-arrow-icon"],attrs:{src:e.arrowIcon,ariaHidden:!0}}):e._e()],2)},staticRenderFns:[]}},,,,,function(e,t){e.exports={category:{marginTop:"20",paddingLeft:"24",width:"750",height:"68",backgroundColor:"#f2f3f4",justifyContent:"center"},"category-text":{color:"#000000",fontWeight:"600",fontSize:"28"}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{title:String}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:["category"]},[n("text",{staticClass:["category-text"]},[e._v(e._s(e.title))])])},staticRenderFns:[]}},,,,,,,,,,,,,function(e,t,n){var o,r,i=[];i.push(n(20)),o=n(21);var a=n(22);r=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(r=o=o.default),"function"==typeof r&&(r=r.options),r.render=a.render,r.staticRenderFns=a.staticRenderFns,r._scopeId="data-v-376cda0e",r.style=r.style||{},i.forEach(function(e){for(var t in e)r.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(r._scopeId,i),e.exports=o},,,,,,function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(42);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o(r).default}})},function(e,t,n){var o,r,i=[];i.push(n(43)),o=n(44);var a=n(46);r=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(r=o=o.default),"function"==typeof r&&(r=r.options),r.render=a.render,r.staticRenderFns=a.staticRenderFns,r._scopeId="data-v-6447ff37",r.style=r.style||{},i.forEach(function(e){for(var t in e)r.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(r._scopeId,i),e.exports=o},function(e,t){e.exports={"wxc-search-bar":{paddingLeft:"20",paddingRight:"20",backgroundColor:"#ffffff",width:"750",height:"84",flexDirection:"row"},"wxc-search-bar-yellow":{backgroundColor:"#ffc900"},"search-bar-input":{position:"absolute",top:"10",paddingTop:0,paddingBottom:0,paddingRight:"40",paddingLeft:"60",fontSize:"26",width:"624",height:"64",lineHeight:"64",backgroundColor:"#E5E5E5",borderRadius:"6"},"search-bar-input-yellow":{backgroundColor:"#fff6d6"},"search-bar-icon":{position:"absolute",width:"30",height:"30",left:"34",top:"28"},"search-bar-close":{position:"absolute",width:"30",height:"30",right:"120",top:"28"},"search-bar-button":{width:"94",height:"36",fontSize:"30",textAlign:"center",backgroundColor:"#ffffff",marginTop:"16",marginRight:0,color:"#333333",position:"absolute",right:"8",top:"9"},"search-bar-button-yellow":{backgroundColor:"#FFC900"},"input-has-dep":{paddingLeft:"240",width:"710"},"bar-dep":{width:"170",paddingRight:"12",paddingLeft:"12",height:"42",alignItems:"center",flexDirection:"row",position:"absolute",left:"24",top:"22",borderRightStyle:"solid",borderRightWidth:"1",borderRightColor:"#C7C7C7"},"bar-dep-yellow":{borderRightColor:"#C7C7C7"},"dep-text":{flex:1,textAlign:"center",fontSize:"26",color:"#666666",marginRight:"6",lines:1,textOverflow:"ellipsis"},"dep-arrow":{width:"24",height:"24"},"icon-has-dep":{left:"214"},"disabled-input":{width:"750",height:"64",position:"absolute",left:0,backgroundColor:"rgba(0,0,0,0)"},"has-dep-disabled":{width:"550",left:"200"}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(45);t.default={props:{disabled:{type:Boolean,default:!1},alwaysShowCancel:{type:Boolean,default:!1},inputType:{type:String,default:"text"},returnKeyType:{type:String,default:"default"},mod:{type:String,default:"default"},autofocus:{type:Boolean,default:!1},theme:{type:String,default:"gray"},barStyle:{type:Object,default:function(){return{}}},defaultValue:{type:String,default:""},placeholder:{type:String,default:"搜索"},cancelLabel:{type:String,default:"取消 "},depName:{type:String,default:"杭州"}},computed:{needShowCancel:function(){return this.alwaysShowCancel||this.showCancel},buttonStyle:function(){var e=this.barStyle;return e.backgroundColor?{backgroundColor:e.backgroundColor}:{}}},data:function(){return{inputIcon:o.INPUT_ICON,closeIcon:o.CLOSE_ICON,arrowIcon:o.ARROW_ICON,showCancel:!1,showClose:!1,value:""}},created:function(){this.defaultValue&&(this.value=this.defaultValue),this.disabled&&(this.showCancel=!1,this.showClose=!1)},methods:{onBlur:function(){var e=this;setTimeout(function(){e.showCancel=!1,e.detectShowClose(),e.$emit("wxcSearchbarInputOnBlur",{value:e.value})},10)},autoBlur:function(){this.$refs["search-input"].blur()},onFocus:function(){this.isDisabled||(this.showCancel=!0,this.detectShowClose(),this.$emit("wxcSearchbarInputOnFocus",{value:this.value}))},closeClicked:function(){this.value="",this.showCancel&&(this.showCancel=!1),this.showClose&&(this.showClose=!1),this.$emit("wxcSearchbarCloseClicked",{value:this.value}),this.$emit("wxcSearchbarInputOnInput",{value:this.value})},onInput:function(e){this.value=e.value,this.showCancel=!0,this.detectShowClose(),this.$emit("wxcSearchbarInputOnInput",{value:this.value})},onSubmit:function(e){this.onBlur(),this.value=e.value,this.showCancel=!0,this.detectShowClose(),this.$emit("wxcSearchbarInputReturned",{value:this.value})},cancelClicked:function(){this.showCancel&&(this.showCancel=!1),this.showClose&&(this.showClose=!1),this.$emit("wxcSearchbarCancelClicked",{value:this.value})},detectShowClose:function(){this.showClose=this.value.length>0&&this.showCancel},depClicked:function(){this.$emit("wxcSearchbarDepChooseClicked",{})},inputDisabledClicked:function(){this.$emit("wxcSearchbarInputDisabledClicked",{})},setValue:function(e){this.value=e}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.INPUT_ICON="https://gw.alicdn.com/tfs/TB1FZB.pwMPMeJjy1XdXXasrXXa-30-30.png",t.CLOSE_ICON="https://gw.alicdn.com/tfs/TB1sZB.pwMPMeJjy1XdXXasrXXa-24-24.png",t.ARROW_ICON="https://gw.alicdn.com/tfs/TB1vZB.pwMPMeJjy1XdXXasrXXa-24-24.png"},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",["default"===e.mod?n("div",{class:["wxc-search-bar","wxc-search-bar-"+e.theme],style:e.barStyle},[n("input",{ref:"search-input",class:["search-bar-input","search-bar-input-"+e.theme],style:{width:e.needShowCancel?"624px":"710px"},attrs:{returnKeyType:e.returnKeyType,autofocus:e.autofocus,disabled:e.disabled,value:e.value,type:e.inputType,placeholder:e.placeholder},on:{blur:e.onBlur,focus:e.onFocus,input:e.onInput,return:e.onSubmit}}),e.disabled?n("div",{staticClass:["disabled-input"],on:{click:e.inputDisabledClicked}}):e._e(),n("image",{staticClass:["search-bar-icon"],attrs:{ariaHidden:!0,src:e.inputIcon}}),e.showClose?n("image",{staticClass:["search-bar-close"],attrs:{ariaHidden:!0,src:e.closeIcon},on:{click:e.closeClicked}}):e._e(),e.needShowCancel?n("text",{class:["search-bar-button","search-bar-button-"+e.theme],style:e.buttonStyle,on:{click:e.cancelClicked}},[e._v(e._s(e.cancelLabel))]):e._e()]):e._e(),"hasDep"===e.mod?n("div",{class:["wxc-search-bar","wxc-search-bar-"+e.theme],style:e.barStyle},[n("input",{class:["search-bar-input","input-has-dep","search-bar-input-"+e.theme],attrs:{disabled:e.disabled,autofocus:e.autofocus,returnKeyType:e.returnKeyType,value:e.value,type:e.inputType,placeholder:e.placeholder},on:{blur:e.onBlur,focus:e.onFocus,input:e.onInput,return:e.onSubmit}}),e.disabled?n("div",{staticClass:["disabled-input","has-dep-disabled"],on:{click:e.inputDisabledClicked}}):e._e(),n("div",{class:["bar-dep",".bar-dep-"+e.theme],on:{click:e.depClicked}},[n("text",{staticClass:["dep-text"]},[e._v(e._s(e.depName))]),n("image",{staticClass:["dep-arrow"],attrs:{src:e.arrowIcon,ariaHidden:!0}})]),n("image",{staticClass:["search-bar-icon","icon-has-dep"],attrs:{ariaHidden:!0,src:e.inputIcon}})]):e._e()])},staticRenderFns:[]}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){var o,r,i=[];i.push(n(81)),o=n(82);var a=n(83);r=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(r=o=o.default),"function"==typeof r&&(r=r.options),r.render=a.render,r.staticRenderFns=a.staticRenderFns,r._scopeId="data-v-30a6a9c8",r.style=r.style||{},i.forEach(function(e){for(var t in e)r.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(r._scopeId,i),e.exports=o,e.exports.el="true",new Vue(e.exports)},function(e,t){e.exports={scroller:{width:"750"}}},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),i=o(r),a=n(11),s=o(a),c=n(41),l=o(c),u=n(6),d=o(u),f=n(1),p=n(2),h=n(35),g=o(h),y=weex.requireModule("navigator"),m=weex.requireModule("dictionary");t.default={components:{WxcSearchbar:l.default,WxcCell:s.default,category:g.default,navbar:d.default},data:function(){return{searchList:[],keywords:"",alwaysShowCancel:!1,returnKeyType:"done",inputTimeout:null,currentAddress:"",city:{}}},beforeCreate:function(){(0,f.setPageTitle)("选择城市"),m.getDict("longitude",function(e){}),m.getDict("latitude",function(e){})},methods:{wxcIndexlistItemClicked:function(e){var t=this.searchList[e];this.city={name:t.addressTitle},this.regeo(t.addressLocation)},wxcSearchbarInputOnInput:function(e){var t=this;this.keywords=e.value,this.inputTimeout&&clearTimeout(this.inputTimeout);this.inputTimeout=setTimeout(function(){t.inputTipsFetch()},500)},inputTipsFetch:function(){var e=this;(0,p.http)({method:"POST",url:"/amap/inputtips",headers:{},body:{keywords:this.keywords}}).then(function(t){if(200==t.code){e.searchList.splice(0,e.searchList.length);t.data.forEach(function(t){e.searchList.push({addressTitle:t.name,addressDesc:t.district+t.address,addressLocation:t.location})})}},function(e){})},regeo:function(e){var t=this;(0,p.http)({method:"POST",url:"/amap/regeo",headers:{},body:{location:e}}).then(function(n){if(200==n.code){var o=n.data,r=o.cityCode,i=e.split(",");t.city.lng=i[0],t.city.lat=i[1],t.city.cityCode=r,(0,f.setStorageVal)("way:city",JSON.stringify(t.city)).then(function(e){(0,f.postMessage)("m:way:city"),y.pop({animated:!0})})}},function(e){})}},created:function(){var e=i.default.env.getPageHeight(),t=i.default.env.getScreenHeight();this.scrollerStyle={marginTop:t-e+"px"};var n=this;(0,f.getStorageVal)("way:city").then(function(e){var t=JSON.parse(e);n.currentAddress=t.name},function(e){})}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("navbar",{attrs:{title:"选择城市",backgroundColor:"#45b5f0",height:"88"}}),n("scroller",{staticClass:["scroller"],style:e.scrollerStyle},[n("wxc-searchbar",{ref:"wxc-searchbar",attrs:{placeholder:"请输入您所在的位置（例如：xx市xx区xx街）",alwaysShowCancel:e.alwaysShowCancel,returnKeyType:e.returnKeyType},on:{wxcSearchbarInputReturned:e.wxcSearchbarInputOnInput}}),""!=e.currentAddress?n("div",[n("category",{attrs:{title:"当前地址"}}),n("wxc-cell",{attrs:{title:e.currentAddress,hasArrow:!1,hasTopBorder:!0}})],1):e._e(),e.searchList.length>0?n("div",[n("category",{attrs:{title:"搜索地址"}}),e._l(e.searchList,function(t,o){return n("wxc-cell",{key:o,attrs:{title:t.addressTitle,desc:t.addressDesc,hasArrow:!1,hasTopBorder:!0},on:{wxcCellClicked:function(t){e.wxcIndexlistItemClicked(o)}}})})],2):e._e()],1)],1)},staticRenderFns:[]}}]);
