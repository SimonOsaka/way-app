// { "framework": "Vue"} 

!function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=100)}({0:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Object.defineProperty(t,"__esModule",{value:!0});var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s=r(3),a=n(s),l={UrlParser:a.default,_typeof:function(e){return Object.prototype.toString.call(e).slice(8,-1).toLowerCase()},isPlainObject:function(e){return"object"===l._typeof(e)},isString:function(e){return"string"==typeof e},isNonEmptyArray:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e&&e.length>0&&Array.isArray(e)&&void 0!==e},isObject:function(e){return e&&"object"===(void 0===e?"undefined":i(e))&&!Array.isArray(e)},isEmptyObject:function(e){return 0===Object.keys(e).length&&e.constructor===Object},decodeIconFont:function(e){var t=/&#x[a-z|0-9]{4,5};?/g;return t.test(e)?e.replace(new RegExp(t,"g"),function(e){var t=e.replace(/&#x/,"0x").replace(/;$/,"");return String.fromCharCode(t)}):e},mergeDeep:function(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];if(!r.length)return e;var i=r.shift();if(l.isObject(e)&&l.isObject(i))for(var s in i)l.isObject(i[s])?(e[s]||Object.assign(e,o({},s,{})),l.mergeDeep(e[s],i[s])):Object.assign(e,o({},s,i[s]));return l.mergeDeep.apply(l,[e].concat(r))},appendProtocol:function(e){if(/^\/\//.test(e)){return"http"+(/^https:/.test(weex.config.bundleUrl)?"s":"")+":"+e}return e},encodeURLParams:function(e){return new a.default(e,!0).toString()},goToH5Page:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=weex.requireModule("navigator"),o=new l.UrlParser(e,!0),i=l.appendProtocol(o.toString());n.push({url:l.encodeURLParams(i),animated:t.toString()},r)},env:{isTaobao:function(){return/(tb|taobao|淘宝)/i.test(weex.config.env.appName)},isTrip:function(){return"LX"===weex.config.env.appName},isBoat:function(){var e=weex.config.env.appName;return"Boat"===e||"BoatPlayground"===e},isWeb:function(){var e=weex.config.env.platform;return"object"===("undefined"==typeof window?"undefined":i(window))&&"web"===e.toLowerCase()},isIOS:function(){return"ios"===weex.config.env.platform.toLowerCase()},isIPhoneX:function(){var e=weex.config.env.deviceHeight;return l.env.isWeb()?void 0!==("undefined"==typeof window?"undefined":i(window))&&window.screen&&window.screen.width&&window.screen.height&&(375===parseInt(window.screen.width,10)&&812===parseInt(window.screen.height,10)||414===parseInt(window.screen.width,10)&&896===parseInt(window.screen.height,10)):l.env.isIOS()&&(2436===e||2688===e||1792===e||1624===e)},isAndroid:function(){return"android"===weex.config.env.platform.toLowerCase()},isAp:function(){return"AP"===weex.config.env.appName},isTmall:function(){return/(tm|tmall|天猫)/i.test(weex.config.env.appName)},isAliWeex:function(){return l.env.isTmall()||l.env.isTrip()||l.env.isTaobao()},getPageHeight:function(){var e=weex.config.env,t=l.env.isWeb()?0:l.env.isIPhoneX()?176:132;return e.deviceHeight/e.deviceWidth*750-t},getScreenHeight:function(){var e=weex.config.env;return e.deviceHeight/e.deviceWidth*750}},compareVersion:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"0.0.0",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"0.0.0";if(e===t)return!0;for(var r=e.split("."),n=t.split("."),o=Math.max(r.length,n.length),i=0;i<o;i++){var s=~~n[i],a=~~r[i];if(s<a)return!0;if(s>a)return!1}return!1},arrayChunk:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4,r=[];return e&&e.length>0&&(r=e.map(function(r,n){return n%t==0?e.slice(n,n+t):null}).filter(function(e){return e})),r},truncateString:function(e,t){for(var r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],n=0,o="",i="",s=/[^\x00-\xff]/g,a=e.replace(s,"**").length,l=0;l<a&&(i=e.charAt(l).toString(),null!==i.match(s)?n+=2:n++,!(n>t));l++)o+=i;return r&&a>t&&(o+="..."),o},objToParams:function(e){var t="";for(var r in e)""!==t&&(t+="&"),t+=r+"="+encodeURIComponent(e[r]);return t},paramsToObj:function(e){var t={};try{t=JSON.parse('{"'+decodeURI(e).replace(/"/g,'\\"').replace(/&/g,'","').replace(/=/g,'":"')+'"}')}catch(e){}return t},animation:{pageTransitionAnimation:function(e,t,r,n){weex.requireModule("animation").transition(e,{styles:{transform:t},duration:r?250:300,timingFunction:r?"ease-in":"ease-out",delay:0},function(){n&&n()})}},uiStyle:{pageTransitionAnimationStyle:function(e){return"push"===e?{left:"750px",top:"0px",height:weex.config.env.deviceHeight/weex.config.env.deviceWidth*750+"px"}:"model"===e?{top:weex.config.env.deviceHeight/weex.config.env.deviceWidth*750+"px",left:"0px",height:weex.config.env.deviceHeight/weex.config.env.deviceWidth*750+"px"}:{}}}};t.default=l},1:function(e,t,r){"use strict";function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!o())return new Promise(function(e,t){t({statusText:"网络无连接"})});var t={method:"GET",type:"json",headers:{}},r=weex.requireModule("modal"),n=weex.requireModule("stream"),a=weex.config.env.platform.toLowerCase(),l="http://api.jicu.vip",c=!0;l="android"!==a||c?l:"http://192.168.3.4";var u=Object.assign(t,e);if(u.url=l+u.url,u.headers.referer=s,"GET"===u.method){if(u.params){var d=Object.keys(u.params).reduce(function(e,t){return""+e+t+"="+u.params[t]+"&"},"?appVersion="+i()+"&");u.url=u.url.concat(d).slice(0,-1)}}else"POST"===u.method&&u.body&&(u.body=JSON.stringify(Object.assign(u.body,{appVerion:i()})),u.headers["Content-Type"]="application/json");return new Promise(function(e,t){n.fetch(u,function(n){n.ok?e(n.data):(r.toast({message:"网络无连接",duration:1}),t(n))})})}function o(){var e=weex.requireModule("network"),t=!0;return e.getNetworkStatus(function(e){"NONE"===e&&(weex.requireModule("modal").toast({message:"网络无连接",duration:1}),t=!1)}),t}function i(){var e="";return"ios"===weex.config.env.platform.toLowerCase()?weex.requireModule("version").getAppVersion(function(t){e=t}):e=weex.requireModule("version").getAppVersion(),e}Object.defineProperty(t,"__esModule",{value:!0}),t.http=n;var s="ios.jicu.vip"},10:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=r(11);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n(o).default}})},100:function(e,t,r){var n,o,i=[];i.push(r(101)),n=r(102);var s=r(103);o=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(o=n=n.default),"function"==typeof o&&(o=o.options),o.render=s.render,o.staticRenderFns=s.staticRenderFns,o._scopeId="data-v-309dd673",o.style=o.style||{},i.forEach(function(e){for(var t in e)o.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(o._scopeId,i),e.exports=n,e.exports.el="true",new Vue(e.exports)},101:function(e,t){e.exports={iconfont:{fontFamily:"iconfont",fontSize:"32",fontStyle:"normal"},scroller:{width:"750"}}},102:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=r(0),i=n(o),s=r(59),a=n(s),l=r(10),c=n(l),u=r(6),d=n(u),f=r(2),p=r(21),h=weex.requireModule("navigator");t.default={components:{WxcCell:c.default,navbar:d.default,WxcTag:a.default},data:function(){return{userAddressList:[],tagMap:{school:"学校",home:"家",company:"公司"}}},beforeCreate:function(){(0,f.initIconfont)(),(0,f.titlebar)("我的地址")},created:function(){var e=this,t=i.default.env.getPageHeight();i.default.env.getScreenHeight();this.scrollerStyle={height:t+"px"},(0,f.receiveMessage)("user:address:refresh",function(t){e.userAddressList=[],e.initData()}),this.initData()},beforeDestroy:function(){(0,f.postMessage)("user:address:city:part","refresh")},methods:{initData:function(){var e=this;(0,f.getStorageVal)("way:user").then(function(t){var r=JSON.parse(t),n={userLoginId:r.userLoginId},o={token:r.userToken};(0,p.queryUserAddressList)(n,o).then(function(t){if(200===t.code){t.data.userAddressBoList.forEach(function(t){var r={id:t.id,addressName:t.name,addressTag:t.tag,addressTagName:e.tagMap[t.tag],addressLongitude:t.longitude,addressLatitude:t.latitude};e.userAddressList.push(r)})}})})},toUpdateUserAddressClicked:function(e){(0,f.setStorageVal)("user:address:edit",JSON.stringify(this.userAddressList[e])).then(function(e){h.push({url:(0,f.getEntryUrl)("views/address/edit"),animated:"true"})})},deleteUserAddressClicked:function(e){var t=this;weex.requireModule("modal").confirm({message:"删除地址吗？",okTitle:"删除",cancelTitle:"取消",duration:.3},function(r){"删除"===r&&t.requestDeleteUserAddress(e)})},requestDeleteUserAddress:function(e){var t=this;(0,f.getStorageVal)("way:user").then(function(r){var n=JSON.parse(r),o={id:t.userAddressList[e].id,userLoginId:n.userLoginId},i={token:n.userToken};(0,p.deleteUserAddress)(o,i).then(function(r){200===r.code&&t.userAddressList.splice(e,1)})})},toCreateUserAddressClicked:function(){h.push({url:(0,f.getEntryUrl)("views/address/edit"),animated:"true"})}}}},103:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("navbar",{attrs:{title:"我的地址",backgroundColor:"#45b5f0",height:"88"}}),r("scroller",{staticClass:["scroller"],style:e.scrollerStyle},[r("div",[r("wxc-cell",{attrs:{hasArrow:!0},on:{wxcCellClicked:e.toCreateUserAddressClicked}},[r("div",{attrs:{slot:"title"},slot:"title"},[r("text",{staticStyle:{color:"#38f",fontSize:"30px",lineHeight:"40px"}},[e._v("新增地址")])])])],1),r("div",e._l(e.userAddressList,function(t,n){return r("wxc-cell",{key:n,attrs:{value:"item.addressTagName",hasArrow:!1}},[r("div",{staticStyle:{flexDirection:"row"},attrs:{slot:"title"},slot:"title"},[r("text",{staticStyle:{color:"#333333",fontSize:"30px",lineHeight:"40px"}},[e._v(e._s(t.addressName))]),t.addressTagName?r("wxc-tag",{staticStyle:{marginLeft:"8px",marginTop:"8px"},attrs:{type:"solid",tagColor:"#38f",fontColor:"#ffffff",value:t.addressTagName}}):e._e()],1),r("div",{staticStyle:{flexDirection:"row"},attrs:{slot:"value"},slot:"value"},[r("text",{staticClass:["iconfont"],staticStyle:{fontSize:"30px"},on:{click:function(t){e.toUpdateUserAddressClicked(n)}}},[e._v("")]),r("text",{staticClass:["iconfont"],staticStyle:{fontSize:"30px",marginLeft:"20px"},on:{click:function(t){e.deleteUserAddressClicked(n)}}},[e._v("")])])])}))])],1)},staticRenderFns:[]}},11:function(e,t,r){var n,o,i=[];i.push(r(12)),n=r(13);var s=r(14);o=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(o=n=n.default),"function"==typeof o&&(o=o.options),o.render=s.render,o.staticRenderFns=s.staticRenderFns,o._scopeId="data-v-eff0e228",o.style=o.style||{},i.forEach(function(e){for(var t in e)o.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(o._scopeId,i),e.exports=n},12:function(e,t){e.exports={"wxc-cell":{flexDirection:"row",alignItems:"center",paddingLeft:"24",paddingRight:"24",backgroundColor:"#ffffff"},"cell-margin":{marginBottom:"24"},"cell-title":{flex:1},"cell-indent":{paddingBottom:"30",paddingTop:"30"},"has-desc":{paddingBottom:"18",paddingTop:"18"},"cell-top-border":{borderTopColor:"#e2e2e2",borderTopWidth:"1"},"cell-bottom-border":{borderBottomColor:"#e2e2e2",borderBottomWidth:"1"},"cell-label-text":{fontSize:"30",color:"#666666",width:"188",marginRight:"10"},"cell-arrow-icon":{width:"22",height:"22"},"cell-content":{color:"#333333",fontSize:"30",lineHeight:"40"},"cell-desc-text":{color:"#999999",fontSize:"24",lineHeight:"30",marginTop:"4",marginRight:"30"},"extra-content-text":{fontSize:"28",color:"#999999",marginRight:"4"}}},13:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=r(0),i=n(o);t.default={props:{label:{type:String,default:""},title:{type:String,default:""},extraContent:{type:String,default:""},desc:{type:String,default:""},link:{type:String,default:""},hasTopBorder:{type:Boolean,default:!1},hasMargin:{type:Boolean,default:!1},hasBottomBorder:{type:Boolean,default:!0},hasArrow:{type:Boolean,default:!1},arrowIcon:{type:String,default:"https://gw.alicdn.com/tfs/TB11zBUpwMPMeJjy1XbXXcwxVXa-22-22.png"},hasVerticalIndent:{type:Boolean,default:!0},cellStyle:{type:Object,default:function(){return{}}},autoAccessible:{type:Boolean,default:!0}},methods:{cellClicked:function(e){var t=this.link;this.$emit("wxcCellClicked",{e:e}),t&&i.default.goToH5Page(t,!0)}}}},14:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{class:["wxc-cell",e.hasTopBorder&&"cell-top-border",e.hasBottomBorder&&"cell-bottom-border",e.hasMargin&&"cell-margin",e.hasVerticalIndent&&"cell-indent",e.desc&&"has-desc"],style:e.cellStyle,attrs:{accessible:e.autoAccessible,ariaLabel:e.label+","+e.title+","+e.desc},on:{click:e.cellClicked}},[e._t("label",[e.label?r("div",[r("text",{staticClass:["cell-label-text"]},[e._v(e._s(e.label))])]):e._e()]),r("div",{staticClass:["cell-title"]},[e._t("title",[r("text",{staticClass:["cell-content"]},[e._v(e._s(e.title))]),e.desc?r("text",{staticClass:["cell-desc-text"]},[e._v(e._s(e.desc))]):e._e()])],2),e._t("value"),e._t("default"),e.extraContent?r("text",{staticClass:["extra-content-text"]},[e._v(e._s(e.extraContent))]):e._e(),e.hasArrow?r("image",{staticClass:["cell-arrow-icon"],attrs:{src:e.arrowIcon,ariaHidden:!0}}):e._e()],2)},staticRenderFns:[]}},2:function(e,t,r){"use strict";function n(){weex.requireModule("dom").addRule("fontFace",{fontFamily:"iconfont",src:"url('local:///font/iconfont.ttf')"})}function o(e){}function i(e){}function s(e,t){var r=weex.config.bundleUrl,n=r.indexOf("your_current_IP")>=0||r.indexOf("file://assets/")>=0,o=r.indexOf("file:///")>=0&&r.indexOf(".app")>0,i="web"===weex.config.env.platform.toLowerCase(),s="";if(i){if(s="/"+e+".html",t){s+="?";var a=[];for(var l in t)if(t.hasOwnProperty(l)){var c=t[l];a.push(l+"="+c)}s+=a.join("&")}}else o?s=r.split("bundlejs")[0]+"/bundlejs/"+e+".js":n&&(s=r.split("/dist")[0]+"/dist/"+e+".js");return s}function a(e,t){var r=new RegExp("(^|&)"+t+"=([^&]*)(&|$)","i"),n=e.slice(e.indexOf("?")+1).match(r);if(null!=n)try{return decodeURIComponent(n[2])}catch(e){return null}return null}function l(e){if(null==e||""==e||"undefined"==e||"null"==e)return!0;if(e.length>0)return!1;if(0===e.length)return!0;for(var t in e)if(hasOwnProperty.call(e,t))return!1;return!0}function c(){return weex.config.env.platform.toLowerCase()}function u(e){var t=weex.requireModule("storage"),r="";return t.getItem(e,function(e){"success"==e.result&&(r=e.data)}),r}function d(e,t){return v(e+t),new Promise(function(r,n){v("promise..."),weex.requireModule("storage").setItem(e,t,function(e){v("setItem result:"+JSON.stringify(e)),"success"==e.result?r(e.result):n(e)})})}function f(e){return new Promise(function(t,r){var n=weex.requireModule("storage"),o="";n.getItem(e,function(e){"success"==e.result?(o=e.data,t(o)):r(e)})})}function p(e){return new Promise(function(t,r){var n=weex.requireModule("storage"),o="";n.removeItem(e,function(e){"success"==e.result?(o=e.data,t(o)):r(e)})})}function h(e,t){weex.requireModule("storage").setItem(e,t,function(e){return"success"==e.result&&"undefined"==e.data})}function g(e,t){if("web"===c()){weex.requireModule("storage").setItem(e,t,function(e){return"success"==e.result&&"undefined"==e.data})}else{new BroadcastChannel(e).postMessage(t)}}function m(e,t){var r={status:1,val:void 0};new BroadcastChannel(e).onmessage=function(e){e.data&&(r.val=e.data),r.status=0,t(r)}}function v(){arguments.length>0&&void 0!==arguments[0]&&arguments[0]}function y(e){return decodeURIComponent((new RegExp("[?|&]"+e+"=([^&;]+?)(&|#|;|$)").exec(location.href)||[,""])[1].replace(/\+/g,"%20"))||null}function w(e){weex.requireModule("titlebar").setTitle(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.initIconfont=n,t.setPageTitle=o,t.setOgImage=i,t.getEntryUrl=s,t.getUrlSearch=a,t.isEmpty=l,t.whichPlatform=c,t.getStorageValue=u,t.setStorageVal=d,t.getStorageVal=f,t.removeStorage=p,t.setStorageValue=h,t.postMessage=g,t.receiveMessage=m,t.modalDebug=v,t.getUrlKey=y,t.titlebar=w;weex.requireModule("modal")},21:function(e,t,r){"use strict";function n(e){return(0,p.http)({method:"POST",url:"/user/device/sync",headers:{},body:e})}function o(e,t){return(0,p.http)({method:"POST",url:"/shop/user/follows",headers:t,body:e})}function i(e,t){return(0,p.http)({method:"POST",url:"/user/profile/address/update",headers:t,body:e})}function s(e,t){return(0,p.http)({method:"POST",url:"/user/address/list",headers:t,body:e})}function a(e,t){return(0,p.http)({method:"POST",url:"/user/address/create",headers:t,body:e})}function l(e,t){return(0,p.http)({method:"POST",url:"/user/address/update",headers:t,body:e})}function c(e,t){return(0,p.http)({method:"POST",url:"/user/address/delete",headers:t,body:e})}function u(e,t){return(0,p.http)({method:"POST",url:"/user/feedback/add",headers:t,body:e})}function d(e,t){return(0,p.http)({method:"POST",url:"/user/feedback/list",headers:t,body:e})}function f(e,t){return(0,p.http)({method:"POST",url:"/user/feedback/typeMap",headers:t,body:e})}Object.defineProperty(t,"__esModule",{value:!0}),t.syncUserDevice=n,t.userShopFollows=o,t.updateUserProfileAddress=i,t.queryUserAddressList=s,t.createUserAddress=a,t.updateUserAddress=l,t.deleteUserAddress=c,t.addFeedback=u,t.queryUserFeedbackList=d,t.feedbackTypeMap=f;var p=r(1)},3:function(e,t,r){"use strict";function n(e){return(e||"").toString().replace(m,"")}function o(e){var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var r=t.location||{};e=e||r;var n,o={},i=void 0===e?"undefined":u(e);if("blob:"===e.protocol)o=new a(unescape(e.pathname),{});else if("string"===i){o=new a(e,{});for(n in y)delete o[n]}else if("object"===i){for(n in e)n in y||(o[n]=e[n]);void 0===o.slashes&&(o.slashes=p.test(e.href))}return o}function i(e){e=n(e);var t=h.exec(e);return{protocol:t[1]?t[1].toLowerCase():"",slashes:!!t[2],rest:t[3]}}function s(e,t){if(""===e)return t;for(var r=(t||"/").split("/").slice(0,-1).concat(e.split("/")),n=r.length,o=r[n-1],i=!1,s=0;n--;)"."===r[n]?r.splice(n,1):".."===r[n]?(r.splice(n,1),s++):s&&(0===n&&(i=!0),r.splice(n,1),s--);return i&&r.unshift(""),"."!==o&&".."!==o||r.push(""),r.join("/")}function a(e,t,r){if(e=n(e),!(this instanceof a))return new a(e,t,r);var l,c,p,h,g,m,y=v.slice(),w=void 0===t?"undefined":u(t),b=this,x=0;for("object"!==w&&"string"!==w&&(r=t,t=null),r&&"function"!=typeof r&&(r=f.parse),t=o(t),c=i(e||""),l=!c.protocol&&!c.slashes,b.slashes=c.slashes||l&&t.slashes,b.protocol=c.protocol||t.protocol||"",e=c.rest,c.slashes||(y[3]=[/(.*)/,"pathname"]);x<y.length;x++)h=y[x],"function"!=typeof h?(p=h[0],m=h[1],p!==p?b[m]=e:"string"==typeof p?~(g=e.indexOf(p))&&("number"==typeof h[2]?(b[m]=e.slice(0,g),e=e.slice(g+h[2])):(b[m]=e.slice(g),e=e.slice(0,g))):(g=p.exec(e))&&(b[m]=g[1],e=e.slice(0,g.index)),b[m]=b[m]||(l&&h[3]?t[m]||"":""),h[4]&&(b[m]=b[m].toLowerCase())):e=h(e);r&&(b.query=r(b.query)),l&&t.slashes&&"/"!==b.pathname.charAt(0)&&(""!==b.pathname||""!==t.pathname)&&(b.pathname=s(b.pathname,t.pathname)),d(b.port,b.protocol)||(b.host=b.hostname,b.port=""),b.username=b.password="",b.auth&&(h=b.auth.split(":"),b.username=h[0]||"",b.password=h[1]||""),b.origin=b.protocol&&b.host&&"file:"!==b.protocol?b.protocol+"//"+b.host:"null",b.href=b.toString()}function l(e,t,r){var n=this;switch(e){case"query":"string"==typeof t&&t.length&&(t=(r||f.parse)(t)),n[e]=t;break;case"port":n[e]=t,d(t,n.protocol)?t&&(n.host=n.hostname+":"+t):(n.host=n.hostname,n[e]="");break;case"hostname":n[e]=t,n.port&&(t+=":"+n.port),n.host=t;break;case"host":n[e]=t,/:\d+$/.test(t)?(t=t.split(":"),n.port=t.pop(),n.hostname=t.join(":")):(n.hostname=t,n.port="");break;case"protocol":n.protocol=t.toLowerCase(),n.slashes=!r;break;case"pathname":case"hash":if(t){var o="pathname"===e?"/":"#";n[e]=t.charAt(0)!==o?o+t:t}else n[e]=t;break;default:n[e]=t}for(var i=0;i<v.length;i++){var s=v[i];s[4]&&(n[s[1]]=n[s[1]].toLowerCase())}return n.origin=n.protocol&&n.host&&"file:"!==n.protocol?n.protocol+"//"+n.host:"null",n.href=n.toString(),n}function c(e){e&&"function"==typeof e||(e=f.stringify);var t,r=this,n=r.protocol;n&&":"!==n.charAt(n.length-1)&&(n+=":");var o=n+(r.slashes?"//":"");return r.username&&(o+=r.username,r.password&&(o+=":"+r.password),o+="@"),o+=r.host+r.pathname,t="object"===u(r.query)?e(r.query):r.query,t&&(o+="?"!==t.charAt(0)?"?"+t:t),r.hash&&(o+=r.hash),o}var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d=r(4),f=r(5),p=/^[A-Za-z][A-Za-z0-9+-.]*:\/\//,h=/^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i,g="[\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF]",m=new RegExp("^"+g+"+"),v=[["#","hash"],["?","query"],function(e){return e.replace("\\","/")},["/","pathname"],["@","auth",1],[NaN,"host",void 0,1,1],[/:(\d+)$/,"port",void 0,1],[NaN,"hostname",void 0,1,1]],y={hash:1,query:1};a.prototype={set:l,toString:c},a.extractProtocol=i,a.location=o,a.trimLeft=n,a.qs=f,e.exports=a},4:function(e,t,r){"use strict";e.exports=function(e,t){if(t=t.split(":")[0],!(e=+e))return!1;switch(t){case"http":case"ws":return 80!==e;case"https":case"wss":return 443!==e;case"ftp":return 21!==e;case"gopher":return 70!==e;case"file":return!1}return 0!==e}},5:function(e,t,r){"use strict";function n(e){try{return decodeURIComponent(e.replace(/\+/g," "))}catch(e){return null}}function o(e){for(var t,r=/([^=?&]+)=?([^&]*)/g,o={};t=r.exec(e);){var i=n(t[1]),s=n(t[2]);null===i||null===s||i in o||(o[i]=s)}return o}function i(e,t){t=t||"";var r,n,o=[];"string"!=typeof t&&(t="?");for(n in e)if(a.call(e,n)){if(r=e[n],r||null!==r&&r!==s&&!isNaN(r)||(r=""),n=encodeURIComponent(n),r=encodeURIComponent(r),null===n||null===r)continue;o.push(n+"="+r)}return o.length?t+o.join("&"):""}var s,a=Object.prototype.hasOwnProperty;t.stringify=i,t.parse=o},59:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=r(60);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n(o).default}})},6:function(e,t,r){var n,o,i=[];i.push(r(7)),n=r(8);var s=r(9);o=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(o=n=n.default),"function"==typeof o&&(o=o.options),o.render=s.render,o.staticRenderFns=s.staticRenderFns,o._scopeId="data-v-cc674820",o.style=o.style||{},i.forEach(function(e){for(var t in e)o.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(o._scopeId,i),e.exports=n},60:function(e,t,r){var n,o,i=[];i.push(r(61)),n=r(62);var s=r(63);o=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(o=n=n.default),"function"==typeof o&&(o=o.options),o.render=s.render,o.staticRenderFns=s.staticRenderFns,o._scopeId="data-v-05972366",o.style=o.style||{},i.forEach(function(e){for(var t in e)o.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(o._scopeId,i),e.exports=n},61:function(e,t){e.exports={"tag-item":{height:"24",justifyContent:"center",alignItems:"center",paddingBottom:"2"},"tag-border":{borderBottomLeftRadius:"4",borderBottomRightRadius:"4",borderTopLeftRadius:"4",borderTopRightRadius:"4"},"tag-hollow":{borderWidth:"1"},"tag-image":{height:"24"},"tag-special":{borderWidth:"1",flexDirection:"row"},"left-image":{width:"20",height:"20"},"tag-left":{width:"24",height:"24",alignItems:"center",justifyContent:"center"},"tag-text":{fontSize:"20",height:"22",lineHeight:"22",paddingLeft:"6",paddingRight:"6"}}},62:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{type:{type:String,default:"solid"},value:{type:[String,Number],default:"测试测试"},tagColor:{type:String,default:"#ff5000"},fontColor:{type:String,default:"#333333"},specialIcon:{type:String,default:""},img:{type:String,default:""}},computed:{showSolid:function(){var e=this.type,t=this.value;return"solid"===e&&""!==t},showHollow:function(){var e=this.type,t=this.value;return"hollow"===e&&""!==t},showSpecial:function(){var e=this.type,t=this.value,r=this.specialIcon;return"special"===e&&""!==t&&""!==r},showImage:function(){var e=this.type,t=this.img;return"image"===e&&""!==t},tagTextStyle:function(){var e=this.tagColor;return this.showSolid?{backgroundColor:e}:{borderColor:e}}},data:function(){return{imgWidth:90}},methods:{onLoad:function(e){if(e.success&&e.size&&e.size.naturalWidth>0){var t=e.size.naturalWidth,r=e.size.naturalHeight;this.imgWidth=t*(24/r)}}}}},63:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.showSolid||e.showHollow?r("div",{class:["tag-item","tag-border",e.showHollow&&"tag-hollow"],style:e.tagTextStyle},[r("text",{staticClass:["tag-text"],style:{color:e.fontColor}},[e._v(e._s(e.value))])]):e._e(),e.showImage?r("image",{staticClass:["tag-image"],style:{width:e.imgWidth+"px"},attrs:{src:e.img,ariaHidden:!0},on:{load:e.onLoad}}):e._e(),e.showSpecial?r("div",{staticClass:["tag-special","tag-border"],style:{borderColor:e.tagColor},attrs:{accessible:!0,ariaLabel:e.value}},[r("div",{staticClass:["tag-left"],style:{backgroundColor:e.tagColor}},[r("image",{staticClass:["left-image"],attrs:{src:e.specialIcon}})]),r("text",{staticClass:["tag-text"],style:{color:e.fontColor}},[e._v(e._s(e.value))])]):e._e()])},staticRenderFns:[]}},7:function(e,t){e.exports={container:{flexDirection:"row",position:"fixed",top:0,left:0,right:0,width:750},"right-text":{position:"absolute",bottom:28,right:32,textAlign:"right",fontSize:32,fontFamily:"'Open Sans', sans-serif"},"left-text":{position:"absolute",bottom:28,left:32,textAlign:"left",fontSize:32,fontFamily:"'Open Sans', sans-serif"},"center-text":{position:"absolute",bottom:25,left:172,right:172,textAlign:"center",fontSize:36,fontWeight:"bold"},"left-image":{position:"absolute",bottom:20,left:28,width:50,height:50},"right-image":{position:"absolute",bottom:20,right:28,width:50,height:50}}},8:function(e,t,r){"use strict";e.exports={props:{dataRole:{default:"navbar"},backgroundColor:{default:"black"},height:{default:88},title:{default:""},titleColor:{default:"black"},rightItemSrc:{default:""},rightItemTitle:{default:""},rightItemColor:{default:"black"},leftItemSrc:{default:""},leftItemTitle:{default:""},leftItemColor:{default:"black"}},methods:{onclickrightitem:function(e){this.$emit("naviBarRightItemClick")},onclickleftitem:function(e){this.$emit("naviBarLeftItemClick")}},beforeCreated:function(){this.show="ios"===weex.config.env.platform.toLowerCase()}}},9:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.show?r("div",{staticClass:["container"],style:{height:e.height,backgroundColor:e.backgroundColor},attrs:{dataRole:e.dataRole}},[e.rightItemSrc?e._e():r("text",{staticClass:["right-text"],style:{color:e.rightItemColor},attrs:{naviItemPosition:"right"},on:{click:e.onclickrightitem}},[e._v(e._s(e.rightItemTitle))]),e.rightItemSrc?r("image",{staticClass:["right-image"],attrs:{naviItemPosition:"right",src:e.rightItemSrc},on:{click:e.onclickrightitem}}):e._e(),e.leftItemSrc?e._e():r("text",{staticClass:["left-text"],style:{color:e.leftItemColor},attrs:{naviItemPosition:"left"},on:{click:e.onclickleftitem}},[e._v(e._s(e.leftItemTitle))]),e.leftItemSrc?r("image",{staticClass:["left-image"],attrs:{naviItemPosition:"left",src:e.leftItemSrc},on:{click:e.onclickleftitem}}):e._e(),r("text",{staticClass:["center-text"],style:{color:e.titleColor},attrs:{naviItemPosition:"center",value:e.title}})]):e._e()},staticRenderFns:[]}}});