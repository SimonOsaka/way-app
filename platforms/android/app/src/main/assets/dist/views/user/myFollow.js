// { "framework": "Vue"} 

!function(e){function t(n){if(o[n])return o[n].exports;var r=o[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var o={};t.m=e,t.c=o,t.d=function(e,o,n){t.o(e,o)||Object.defineProperty(e,o,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=185)}({0:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}Object.defineProperty(t,"__esModule",{value:!0});var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s=o(3),a=n(s),l={UrlParser:a.default,_typeof:function(e){return Object.prototype.toString.call(e).slice(8,-1).toLowerCase()},isPlainObject:function(e){return"object"===l._typeof(e)},isString:function(e){return"string"==typeof e},isNonEmptyArray:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e&&e.length>0&&Array.isArray(e)&&void 0!==e},isObject:function(e){return e&&"object"===(void 0===e?"undefined":i(e))&&!Array.isArray(e)},isEmptyObject:function(e){return 0===Object.keys(e).length&&e.constructor===Object},decodeIconFont:function(e){var t=/&#x[a-z|0-9]{4,5};?/g;return t.test(e)?e.replace(new RegExp(t,"g"),function(e){var t=e.replace(/&#x/,"0x").replace(/;$/,"");return String.fromCharCode(t)}):e},mergeDeep:function(e){for(var t=arguments.length,o=Array(t>1?t-1:0),n=1;n<t;n++)o[n-1]=arguments[n];if(!o.length)return e;var i=o.shift();if(l.isObject(e)&&l.isObject(i))for(var s in i)l.isObject(i[s])?(e[s]||Object.assign(e,r({},s,{})),l.mergeDeep(e[s],i[s])):Object.assign(e,r({},s,i[s]));return l.mergeDeep.apply(l,[e].concat(o))},appendProtocol:function(e){if(/^\/\//.test(e)){return"http"+(/^https:/.test(weex.config.bundleUrl)?"s":"")+":"+e}return e},encodeURLParams:function(e){return new a.default(e,!0).toString()},goToH5Page:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=weex.requireModule("navigator"),r=new l.UrlParser(e,!0),i=l.appendProtocol(r.toString());n.push({url:l.encodeURLParams(i),animated:t.toString()},o)},env:{isTaobao:function(){return/(tb|taobao|淘宝)/i.test(weex.config.env.appName)},isTrip:function(){return"LX"===weex.config.env.appName},isBoat:function(){var e=weex.config.env.appName;return"Boat"===e||"BoatPlayground"===e},isWeb:function(){var e=weex.config.env.platform;return"object"===("undefined"==typeof window?"undefined":i(window))&&"web"===e.toLowerCase()},isIOS:function(){return"ios"===weex.config.env.platform.toLowerCase()},isIPhoneX:function(){var e=weex.config.env.deviceHeight;return l.env.isWeb()?void 0!==("undefined"==typeof window?"undefined":i(window))&&window.screen&&window.screen.width&&window.screen.height&&(375===parseInt(window.screen.width,10)&&812===parseInt(window.screen.height,10)||414===parseInt(window.screen.width,10)&&896===parseInt(window.screen.height,10)):l.env.isIOS()&&(2436===e||2688===e||1792===e||1624===e)},isAndroid:function(){return"android"===weex.config.env.platform.toLowerCase()},isAlipay:function(){return"AP"===weex.config.env.appName},isTmall:function(){return/(tm|tmall|天猫)/i.test(weex.config.env.appName)},isAliWeex:function(){return l.env.isTmall()||l.env.isTrip()||l.env.isTaobao()},getPageHeight:function(){var e=weex.config.env,t=l.env.isWeb()?0:l.env.isIPhoneX()?176:132;return e.deviceHeight/e.deviceWidth*750-t},getScreenHeight:function(){var e=weex.config.env;return e.deviceHeight/e.deviceWidth*750}},compareVersion:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"0.0.0",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"0.0.0";if(e===t)return!0;for(var o=e.split("."),n=t.split("."),r=Math.max(o.length,n.length),i=0;i<r;i++){var s=~~n[i],a=~~o[i];if(s<a)return!0;if(s>a)return!1}return!1},arrayChunk:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4,o=[];return e&&e.length>0&&(o=e.map(function(o,n){return n%t==0?e.slice(n,n+t):null}).filter(function(e){return e})),o},truncateString:function(e,t){for(var o=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],n=0,r="",i="",s=/[^\x00-\xff]/g,a=e.replace(s,"**").length,l=0;l<a&&(i=e.charAt(l).toString(),null!==i.match(s)?n+=2:n++,!(n>t));l++)r+=i;return o&&a>t&&(r+="..."),r},objToParams:function(e){var t="";for(var o in e)""!==t&&(t+="&"),t+=o+"="+encodeURIComponent(e[o]);return t},paramsToObj:function(e){var t={};try{t=JSON.parse('{"'+decodeURI(e).replace(/"/g,'\\"').replace(/&/g,'","').replace(/=/g,'":"')+'"}')}catch(e){}return t},animation:{pageTransitionAnimation:function(e,t,o,n){weex.requireModule("animation").transition(e,{styles:{transform:t},duration:o?250:300,timingFunction:o?"ease-in":"ease-out",delay:0},function(){n&&n()})}},uiStyle:{pageTransitionAnimationStyle:function(e){return"push"===e?{left:"750px",top:"0px",height:weex.config.env.deviceHeight/weex.config.env.deviceWidth*750+"px"}:"model"===e?{top:weex.config.env.deviceHeight/weex.config.env.deviceWidth*750+"px",left:"0px",height:weex.config.env.deviceHeight/weex.config.env.deviceWidth*750+"px"}:{}}}};t.default=l},1:function(e,t,o){"use strict";function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!r())return new Promise(function(e,t){t({statusText:"网络无连接"})});var t={method:"GET",type:"json",headers:{}},o=weex.requireModule("modal"),n=weex.requireModule("stream"),a=weex.config.env.platform.toLowerCase(),l="http://api.jicu.vip",c=!0;l="android"!==a||c?l:"http://192.168.3.4";var u=Object.assign(t,e);if(u.url=l+u.url,u.headers.referer=s,"GET"===u.method){if(u.params){var f=Object.keys(u.params).reduce(function(e,t){return""+e+t+"="+u.params[t]+"&"},"?appVersion="+i()+"&");u.url=u.url.concat(f).slice(0,-1)}}else"POST"===u.method&&u.body&&(u.body=JSON.stringify(Object.assign(u.body,{appVerion:i()})),u.headers["Content-Type"]="application/json");return new Promise(function(e,t){n.fetch(u,function(n){n.ok?e(n.data):(o.toast({message:"网络无连接",duration:1}),t(n))})})}function r(){var e=weex.requireModule("network"),t=!0;return e.getNetworkStatus(function(e){"NONE"===e&&(weex.requireModule("modal").toast({message:"网络无连接",duration:1}),t=!1)}),t}function i(){var e="";return"ios"===weex.config.env.platform.toLowerCase()?weex.requireModule("version").getAppVersion(function(t){e=t}):e=weex.requireModule("version").getAppVersion(),e}Object.defineProperty(t,"__esModule",{value:!0}),t.http=n;var s="ios.jicu.vip"},10:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=o(11);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n(r).default}})},11:function(e,t,o){var n,r,i=[];i.push(o(12)),n=o(13);var s=o(14);r=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(r=n=n.default),"function"==typeof r&&(r=r.options),r.render=s.render,r.staticRenderFns=s.staticRenderFns,r._scopeId="data-v-eff0e228",r.style=r.style||{},i.forEach(function(e){for(var t in e)r.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(r._scopeId,i),e.exports=n},12:function(e,t){e.exports={"wxc-cell":{flexDirection:"row",alignItems:"center",paddingLeft:"24",paddingRight:"24",backgroundColor:"#ffffff"},"cell-margin":{marginBottom:"24"},"cell-title":{flex:1},"cell-indent":{paddingBottom:"30",paddingTop:"30"},"has-desc":{paddingBottom:"18",paddingTop:"18"},"cell-top-border":{borderTopColor:"#e2e2e2",borderTopWidth:"1"},"cell-bottom-border":{borderBottomColor:"#e2e2e2",borderBottomWidth:"1"},"cell-label-text":{fontSize:"30",color:"#666666",width:"188",marginRight:"10"},"cell-arrow-icon":{width:"22",height:"22"},"cell-content":{color:"#333333",fontSize:"30",lineHeight:"40"},"cell-desc-text":{color:"#999999",fontSize:"24",lineHeight:"30",marginTop:"4",marginRight:"30"},"extra-content-text":{fontSize:"28",color:"#999999",marginRight:"4"}}},13:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=o(0),i=n(r);t.default={props:{label:{type:String,default:""},title:{type:String,default:""},extraContent:{type:String,default:""},desc:{type:String,default:""},link:{type:String,default:""},hasTopBorder:{type:Boolean,default:!1},hasMargin:{type:Boolean,default:!1},hasBottomBorder:{type:Boolean,default:!0},hasArrow:{type:Boolean,default:!1},arrowIcon:{type:String,default:"https://gw.alicdn.com/tfs/TB11zBUpwMPMeJjy1XbXXcwxVXa-22-22.png"},hasVerticalIndent:{type:Boolean,default:!0},cellStyle:{type:Object,default:function(){return{}}},autoAccessible:{type:Boolean,default:!0}},methods:{cellClicked:function(e){var t=this.link;this.$emit("wxcCellClicked",{e:e}),t&&i.default.goToH5Page(t,!0)}}}},14:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{class:["wxc-cell",e.hasTopBorder&&"cell-top-border",e.hasBottomBorder&&"cell-bottom-border",e.hasMargin&&"cell-margin",e.hasVerticalIndent&&"cell-indent",e.desc&&"has-desc"],style:e.cellStyle,attrs:{accessible:e.autoAccessible,ariaLabel:e.label+","+e.title+","+e.desc},on:{click:e.cellClicked}},[e._t("label",[e.label?o("div",[o("text",{staticClass:["cell-label-text"]},[e._v(e._s(e.label))])]):e._e()]),o("div",{staticClass:["cell-title"]},[e._t("title",[o("text",{staticClass:["cell-content"]},[e._v(e._s(e.title))]),e.desc?o("text",{staticClass:["cell-desc-text"]},[e._v(e._s(e.desc))]):e._e()])],2),e._t("value"),e._t("default"),e.extraContent?o("text",{staticClass:["extra-content-text"]},[e._v(e._s(e.extraContent))]):e._e(),e.hasArrow?o("image",{staticClass:["cell-arrow-icon"],attrs:{src:e.arrowIcon,ariaHidden:!0}}):e._e()],2)},staticRenderFns:[]}},15:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=o(16);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n(r).default}})},16:function(e,t,o){var n,r,i=[];i.push(o(17)),n=o(18);var s=o(20);r=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(r=n=n.default),"function"==typeof r&&(r=r.options),r.render=s.render,r.staticRenderFns=s.staticRenderFns,r._scopeId="data-v-6273a8fc",r.style=r.style||{},i.forEach(function(e){for(var t in e)r.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(r._scopeId,i),e.exports=n},17:function(e,t){e.exports={"wxc-btn":{alignItems:"center",justifyContent:"center",borderRadius:"12",opacity:1},"wxc-btn-highlight":{"opacity:active":.8},"btn-text":{textOverflow:"ellipsis",lines:1,color:"#ffffff"}}},18:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},r=o(19);t.default={props:{text:{type:String,default:"确认"},size:{type:String,default:"full"},type:{type:String,default:"red"},disabled:{type:Boolean,default:!1},isHighlight:{type:Boolean,default:!1},btnStyle:Object,textStyle:Object,disabledStyle:Object},computed:{mrBtnStyle:function(){var e=this.type,t=this.disabled,o=this.btnStyle,i=this.size,s=this.disabledStyle,a=n({},r.STYLE_MAP[e],r.BUTTON_STYLE_MAP[i],o),l={opacity:.2};return"white"===e&&(l={backgroundColor:"rgba(0, 0, 0, 0.1)"}),t?n({},a,l,s,{borderWidth:0}):a},mrTextStyle:function(){var e=this.type,t=this.disabled,o=this.textStyle,i=this.size,s=n({},r.TEXT_STYLE_MAP[e],o,r.TEXT_FONTSIZE_STYLE_MAP[i]);return t?n({},s,{color:"#FFFFFF"}):s}},methods:{onClicked:function(e){var t=this.type,o=this.disabled;this.$emit("wxcButtonClicked",{e:e,type:t,disabled:o})}}}},185:function(e,t,o){var n,r,i=[];i.push(o(186)),n=o(187);var s=o(188);r=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(r=n=n.default),"function"==typeof r&&(r=r.options),r.render=s.render,r.staticRenderFns=s.staticRenderFns,r._scopeId="data-v-3172ce17",r.style=r.style||{},i.forEach(function(e){for(var t in e)r.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(r._scopeId,i),e.exports=n,e.exports.el="true",new Vue(e.exports)},186:function(e,t){e.exports={iconfont:{fontFamily:"iconfont",fontSize:"32",fontStyle:"normal"},image:{width:"140",height:"140",marginRight:"10",borderRadius:"10"},c_name:{paddingLeft:"20"},c_money:{color:"#FF0000"},red:{color:"#FF0000"},c_real:{fontSize:"24"},c_cancel_text:{fontSize:"28"}}},187:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=o(0),i=n(r),s=o(15),a=n(s),l=o(10),c=n(l),u=o(2),f=(o(1),o(6)),d=n(f),p=o(21),h=o(69),g=weex.requireModule("navigator");t.default={components:{WxcCell:c.default,navbar:d.default,WxcButton:a.default},data:function(){return{follow:{list:[],pageNum:1,pageSize:10},my:{userLoginId:0,userToken:""},noData:!1,scrollerStyle:{width:"750px"}}},created:function(){var e=this;(0,u.initIconfont)(),(0,u.titlebar)("我的关注");var t=i.default.env.getPageHeight();i.default.env.getScreenHeight();this.scrollerStyle={height:t+"px"},(0,u.getStorageVal)("way:user").then(function(t){var o=JSON.parse(t);e.my.userLoginId=o.userLoginId,e.my.userToken=o.userToken,e.requestGetFollowList()},function(t){e.my.userLoginId=0,g.pop()})},methods:{loadMore:function(e){this.requestGetFollowList()},followScrollHandler:function(e){},requestGetFollowList:function(){var e=this;(0,p.userShopFollows)({userLoginId:this.my.userLoginId,pageNum:this.follow.pageNum++,pageSize:this.follow.pageSize},{token:this.my.userToken}).then(function(t){if(200==t.code){var o=t.data.shopFollowList;0!==o.length&&o.forEach(function(t){e.follow.list.push(t)}),e.noData=0===e.follow.list.length}})},btnCancelFollowClicked:function(e){var t=this;(0,h.cancelFollow)({shopId:this.follow.list[e].shopId,userLoginId:this.my.userLoginId},{token:this.my.userToken}).then(function(){t.follow.list[e].hasFollowed=1})}}}},188:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("navbar",{attrs:{title:"我的关注",backgroundColor:"#45b5f0",height:"88"}}),e.noData?o("div",{staticClass:["m_cell"]},[o("text",{staticClass:["iconfont"],staticStyle:{fontSize:"128px",marginTop:"232px",textAlign:"center",color:"#cccccc"}},[e._v("")]),o("text",{staticStyle:{fontSize:"32px",marginTop:"20px",textAlign:"center",color:"#cccccc"}},[e._v(" 还没有关注 ")])]):o("scroller",{style:e.scrollerStyle,attrs:{loadmoreoffset:"10"},on:{loadmore:e.loadMore,scroll:e.followScrollHandler}},e._l(e.follow.list,function(t,n){return o("div",{key:n,ref:"cell"+n,refInFor:!0,staticClass:["m_cell"]},[0!=n?o("div",{staticClass:["m_cell_split"]}):e._e(),o("wxc-cell",{attrs:{hasArrow:!1,hasTopBorder:!1,hasBottomBorder:!0,hasMargin:!1,autoAccessible:!1}},[o("image",{staticClass:["image"],attrs:{slot:"label",resize:"cover",src:t.shop.shopLogoUrl},slot:"label"}),o("div",{attrs:{slot:"title"},slot:"title"},[o("div",{staticStyle:{flexDirection:"row"}},[o("text",{staticClass:["c_name"],staticStyle:{width:"480px"}},[e._v(e._s(t.shop.shopName))])]),o("div",{key:n,staticStyle:{flexDirection:"row",paddingLeft:"20px",marginTop:"40px"},attrs:{index:n}},[o("text",{staticClass:["iconfont","red"],staticStyle:{fontSize:"24px"}},[e._v("")]),o("text",{staticClass:["c_real"],staticStyle:{color:"#ccc",width:"480px"}},[e._v(e._s(t.shop.shopAddress))])])]),o("div",{attrs:{slot:"value"},slot:"value"},[0===t.hasFollowed?o("wxc-button",{attrs:{type:"red",size:"small",text:"取消关注"},on:{wxcButtonClicked:function(t){e.btnCancelFollowClicked(n)}}}):o("text",{staticClass:["c_cancel_text"]},[e._v("已取消")])],1)])],1)}))],1)},staticRenderFns:[]}},19:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.STYLE_MAP={red:{backgroundColor:"#FF5000"},yellow:{backgroundColor:"#FFC900"},white:{backgroundColor:"#FFFFFF",borderColor:"#A5A5A5",borderWidth:"1px"},blue:{backgroundColor:"#0F8DE8"},green:{backgroundColor:"#19be6b"}},t.TEXT_STYLE_MAP={red:{color:"#FFFFFF"},yellow:{color:"#FFFFFF"},blue:{color:"#FFFFFF"},white:{color:"#3D3D3D"},green:{color:"#FFFFFF"}},t.BUTTON_STYLE_MAP={full:{width:"702px",height:"88px"},big:{width:"339px",height:"70px"},medium:{width:"218px",height:"60px"},small:{width:"157px",height:"44px"}},t.TEXT_FONTSIZE_STYLE_MAP={full:{fontSize:"36px"},big:{fontSize:"32px"},medium:{fontSize:"28px"},small:{fontSize:"24px"}}},2:function(e,t,o){"use strict";function n(){weex.requireModule("dom").addRule("fontFace",{fontFamily:"iconfont",src:"url('local:///font/iconfont.ttf')"})}function r(e){}function i(e){}function s(e,t){var o=weex.config.bundleUrl,n=o.indexOf("your_current_IP")>=0||o.indexOf("file://assets/")>=0,r=o.indexOf("file:///")>=0&&o.indexOf(".app")>0,i="web"===weex.config.env.platform.toLowerCase(),s="";if(i){if(s="/"+e+".html",t){s+="?";var a=[];for(var l in t)if(t.hasOwnProperty(l)){var c=t[l];a.push(l+"="+c)}s+=a.join("&")}}else r?s=o.split("bundlejs")[0]+"/bundlejs/"+e+".js":n&&(s=o.split("/dist")[0]+"/dist/"+e+".js");return s}function a(e,t){var o=new RegExp("(^|&)"+t+"=([^&]*)(&|$)","i"),n=e.slice(e.indexOf("?")+1).match(o);if(null!=n)try{return decodeURIComponent(n[2])}catch(e){return null}return null}function l(e){if(null==e||""==e||"undefined"==e||"null"==e)return!0;if(e.length>0)return!1;if(0===e.length)return!0;for(var t in e)if(hasOwnProperty.call(e,t))return!1;return!0}function c(){return weex.config.env.platform.toLowerCase()}function u(e){var t=weex.requireModule("storage"),o="";return t.getItem(e,function(e){"success"==e.result&&(o=e.data)}),o}function f(e,t){return y(e+t),new Promise(function(o,n){y("promise..."),weex.requireModule("storage").setItem(e,t,function(e){y("setItem result:"+JSON.stringify(e)),"success"==e.result?o(e.result):n(e)})})}function d(e){return new Promise(function(t,o){var n=weex.requireModule("storage"),r="";n.getItem(e,function(e){"success"==e.result?(r=e.data,t(r)):o(e)})})}function p(e){return new Promise(function(t,o){var n=weex.requireModule("storage"),r="";n.removeItem(e,function(e){"success"==e.result?(r=e.data,t(r)):o(e)})})}function h(e,t){weex.requireModule("storage").setItem(e,t,function(e){return"success"==e.result&&"undefined"==e.data})}function g(e,t){if("web"===c()){weex.requireModule("storage").setItem(e,t,function(e){return"success"==e.result&&"undefined"==e.data})}else{new BroadcastChannel(e).postMessage(t)}}function m(e,t){var o={status:1,val:void 0};new BroadcastChannel(e).onmessage=function(e){e.data&&(o.val=e.data),o.status=0,t(o)}}function y(){arguments.length>0&&void 0!==arguments[0]&&arguments[0]}function v(e){return decodeURIComponent((new RegExp("[?|&]"+e+"=([^&;]+?)(&|#|;|$)").exec(location.href)||[,""])[1].replace(/\+/g,"%20"))||null}function b(e){weex.requireModule("titlebar").setTitle(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.initIconfont=n,t.setPageTitle=r,t.setOgImage=i,t.getEntryUrl=s,t.getUrlSearch=a,t.isEmpty=l,t.whichPlatform=c,t.getStorageValue=u,t.setStorageVal=f,t.getStorageVal=d,t.removeStorage=p,t.setStorageValue=h,t.postMessage=g,t.receiveMessage=m,t.modalDebug=y,t.getUrlKey=v,t.titlebar=b;weex.requireModule("modal")},20:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{class:["wxc-btn",e.isHighlight&&!e.disabled&&"wxc-btn-highlight"],style:e.mrBtnStyle,attrs:{accessible:!0,ariaLabel:e.text},on:{click:e.onClicked}},[o("text",{staticClass:["btn-text"],style:e.mrTextStyle},[e._v(e._s(e.text))])])},staticRenderFns:[]}},21:function(e,t,o){"use strict";function n(e){return(0,p.http)({method:"POST",url:"/user/device/sync",headers:{},body:e})}function r(e,t){return(0,p.http)({method:"POST",url:"/shop/user/follows",headers:t,body:e})}function i(e,t){return(0,p.http)({method:"POST",url:"/user/profile/address/update",headers:t,body:e})}function s(e,t){return(0,p.http)({method:"POST",url:"/user/address/list",headers:t,body:e})}function a(e,t){return(0,p.http)({method:"POST",url:"/user/address/create",headers:t,body:e})}function l(e,t){return(0,p.http)({method:"POST",url:"/user/address/update",headers:t,body:e})}function c(e,t){return(0,p.http)({method:"POST",url:"/user/address/delete",headers:t,body:e})}function u(e,t){return(0,p.http)({method:"POST",url:"/user/feedback/add",headers:t,body:e})}function f(e,t){return(0,p.http)({method:"POST",url:"/user/feedback/list",headers:t,body:e})}function d(e,t){return(0,p.http)({method:"POST",url:"/user/feedback/typeMap",headers:t,body:e})}Object.defineProperty(t,"__esModule",{value:!0}),t.syncUserDevice=n,t.userShopFollows=r,t.updateUserProfileAddress=i,t.queryUserAddressList=s,t.createUserAddress=a,t.updateUserAddress=l,t.deleteUserAddress=c,t.addFeedback=u,t.queryUserFeedbackList=f,t.feedbackTypeMap=d;var p=o(1)},3:function(e,t,o){"use strict";function n(e){return(e||"").toString().replace(m,"")}function r(e){var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var o=t.location||{};e=e||o;var n,r={},i=void 0===e?"undefined":u(e);if("blob:"===e.protocol)r=new a(unescape(e.pathname),{});else if("string"===i){r=new a(e,{});for(n in v)delete r[n]}else if("object"===i){for(n in e)n in v||(r[n]=e[n]);void 0===r.slashes&&(r.slashes=p.test(e.href))}return r}function i(e){e=n(e);var t=h.exec(e);return{protocol:t[1]?t[1].toLowerCase():"",slashes:!!t[2],rest:t[3]}}function s(e,t){if(""===e)return t;for(var o=(t||"/").split("/").slice(0,-1).concat(e.split("/")),n=o.length,r=o[n-1],i=!1,s=0;n--;)"."===o[n]?o.splice(n,1):".."===o[n]?(o.splice(n,1),s++):s&&(0===n&&(i=!0),o.splice(n,1),s--);return i&&o.unshift(""),"."!==r&&".."!==r||o.push(""),o.join("/")}function a(e,t,o){if(e=n(e),!(this instanceof a))return new a(e,t,o);var l,c,p,h,g,m,v=y.slice(),b=void 0===t?"undefined":u(t),x=this,w=0;for("object"!==b&&"string"!==b&&(o=t,t=null),o&&"function"!=typeof o&&(o=d.parse),t=r(t),c=i(e||""),l=!c.protocol&&!c.slashes,x.slashes=c.slashes||l&&t.slashes,x.protocol=c.protocol||t.protocol||"",e=c.rest,c.slashes||(v[3]=[/(.*)/,"pathname"]);w<v.length;w++)h=v[w],"function"!=typeof h?(p=h[0],m=h[1],p!==p?x[m]=e:"string"==typeof p?~(g=e.indexOf(p))&&("number"==typeof h[2]?(x[m]=e.slice(0,g),e=e.slice(g+h[2])):(x[m]=e.slice(g),e=e.slice(0,g))):(g=p.exec(e))&&(x[m]=g[1],e=e.slice(0,g.index)),x[m]=x[m]||(l&&h[3]?t[m]||"":""),h[4]&&(x[m]=x[m].toLowerCase())):e=h(e);o&&(x.query=o(x.query)),l&&t.slashes&&"/"!==x.pathname.charAt(0)&&(""!==x.pathname||""!==t.pathname)&&(x.pathname=s(x.pathname,t.pathname)),f(x.port,x.protocol)||(x.host=x.hostname,x.port=""),x.username=x.password="",x.auth&&(h=x.auth.split(":"),x.username=h[0]||"",x.password=h[1]||""),x.origin=x.protocol&&x.host&&"file:"!==x.protocol?x.protocol+"//"+x.host:"null",x.href=x.toString()}function l(e,t,o){var n=this;switch(e){case"query":"string"==typeof t&&t.length&&(t=(o||d.parse)(t)),n[e]=t;break;case"port":n[e]=t,f(t,n.protocol)?t&&(n.host=n.hostname+":"+t):(n.host=n.hostname,n[e]="");break;case"hostname":n[e]=t,n.port&&(t+=":"+n.port),n.host=t;break;case"host":n[e]=t,/:\d+$/.test(t)?(t=t.split(":"),n.port=t.pop(),n.hostname=t.join(":")):(n.hostname=t,n.port="");break;case"protocol":n.protocol=t.toLowerCase(),n.slashes=!o;break;case"pathname":case"hash":if(t){var r="pathname"===e?"/":"#";n[e]=t.charAt(0)!==r?r+t:t}else n[e]=t;break;default:n[e]=t}for(var i=0;i<y.length;i++){var s=y[i];s[4]&&(n[s[1]]=n[s[1]].toLowerCase())}return n.origin=n.protocol&&n.host&&"file:"!==n.protocol?n.protocol+"//"+n.host:"null",n.href=n.toString(),n}function c(e){e&&"function"==typeof e||(e=d.stringify);var t,o=this,n=o.protocol;n&&":"!==n.charAt(n.length-1)&&(n+=":");var r=n+(o.slashes?"//":"");return o.username&&(r+=o.username,o.password&&(r+=":"+o.password),r+="@"),r+=o.host+o.pathname,t="object"===u(o.query)?e(o.query):o.query,t&&(r+="?"!==t.charAt(0)?"?"+t:t),o.hash&&(r+=o.hash),r}var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f=o(4),d=o(5),p=/^[A-Za-z][A-Za-z0-9+-.]*:\/\//,h=/^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i,g="[\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF]",m=new RegExp("^"+g+"+"),y=[["#","hash"],["?","query"],function(e){return e.replace("\\","/")},["/","pathname"],["@","auth",1],[NaN,"host",void 0,1,1],[/:(\d+)$/,"port",void 0,1],[NaN,"hostname",void 0,1,1]],v={hash:1,query:1};a.prototype={set:l,toString:c},a.extractProtocol=i,a.location=r,a.trimLeft=n,a.qs=d,e.exports=a},4:function(e,t,o){"use strict";e.exports=function(e,t){if(t=t.split(":")[0],!(e=+e))return!1;switch(t){case"http":case"ws":return 80!==e;case"https":case"wss":return 443!==e;case"ftp":return 21!==e;case"gopher":return 70!==e;case"file":return!1}return 0!==e}},5:function(e,t,o){"use strict";function n(e){try{return decodeURIComponent(e.replace(/\+/g," "))}catch(e){return null}}function r(e){for(var t,o=/([^=?&]+)=?([^&]*)/g,r={};t=o.exec(e);){var i=n(t[1]),s=n(t[2]);null===i||null===s||i in r||(r[i]=s)}return r}function i(e,t){t=t||"";var o,n,r=[];"string"!=typeof t&&(t="?");for(n in e)if(a.call(e,n)){if(o=e[n],o||null!==o&&o!==s&&!isNaN(o)||(o=""),n=encodeURIComponent(n),o=encodeURIComponent(o),null===n||null===o)continue;r.push(n+"="+o)}return r.length?t+r.join("&"):""}var s,a=Object.prototype.hasOwnProperty;t.stringify=i,t.parse=r},6:function(e,t,o){var n,r,i=[];i.push(o(7)),n=o(8);var s=o(9);r=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(r=n=n.default),"function"==typeof r&&(r=r.options),r.render=s.render,r.staticRenderFns=s.staticRenderFns,r._scopeId="data-v-cc674820",r.style=r.style||{},i.forEach(function(e){for(var t in e)r.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(r._scopeId,i),e.exports=n},69:function(e,t,o){"use strict";function n(e,t){return(0,s.http)({method:"POST",url:"/shop/follow",headers:t,body:e})}function r(e,t){return(0,s.http)({method:"POST",url:"/shop/follow/cancel",headers:t,body:e})}function i(e,t){return(0,s.http)({method:"POST",url:"/shop/detail",headers:t,body:e})}Object.defineProperty(t,"__esModule",{value:!0}),t.shopFollow=n,t.cancelFollow=r,t.getShopDetail=i;var s=o(1)},7:function(e,t){e.exports={container:{flexDirection:"row",position:"fixed",top:0,left:0,right:0,width:750},"right-text":{position:"absolute",bottom:28,right:32,textAlign:"right",fontSize:32,fontFamily:"'Open Sans', sans-serif"},"left-text":{position:"absolute",bottom:28,left:32,textAlign:"left",fontSize:32,fontFamily:"'Open Sans', sans-serif"},"center-text":{position:"absolute",bottom:25,left:172,right:172,textAlign:"center",fontSize:36,fontWeight:"bold"},"left-image":{position:"absolute",bottom:20,left:28,width:50,height:50},"right-image":{position:"absolute",bottom:20,right:28,width:50,height:50}}},8:function(e,t,o){"use strict";e.exports={props:{dataRole:{default:"navbar"},backgroundColor:{default:"black"},height:{default:88},title:{default:""},titleColor:{default:"black"},rightItemSrc:{default:""},rightItemTitle:{default:""},rightItemColor:{default:"black"},leftItemSrc:{default:""},leftItemTitle:{default:""},leftItemColor:{default:"black"}},methods:{onclickrightitem:function(e){this.$emit("naviBarRightItemClick")},onclickleftitem:function(e){this.$emit("naviBarLeftItemClick")}},beforeCreated:function(){this.show="ios"===weex.config.env.platform.toLowerCase()}}},9:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return e.show?o("div",{staticClass:["container"],style:{height:e.height,backgroundColor:e.backgroundColor},attrs:{dataRole:e.dataRole}},[e.rightItemSrc?e._e():o("text",{staticClass:["right-text"],style:{color:e.rightItemColor},attrs:{naviItemPosition:"right"},on:{click:e.onclickrightitem}},[e._v(e._s(e.rightItemTitle))]),e.rightItemSrc?o("image",{staticClass:["right-image"],attrs:{naviItemPosition:"right",src:e.rightItemSrc},on:{click:e.onclickrightitem}}):e._e(),e.leftItemSrc?e._e():o("text",{staticClass:["left-text"],style:{color:e.leftItemColor},attrs:{naviItemPosition:"left"},on:{click:e.onclickleftitem}},[e._v(e._s(e.leftItemTitle))]),e.leftItemSrc?o("image",{staticClass:["left-image"],attrs:{naviItemPosition:"left",src:e.leftItemSrc},on:{click:e.onclickleftitem}}):e._e(),o("text",{staticClass:["center-text"],style:{color:e.titleColor},attrs:{naviItemPosition:"center",value:e.title}})]):e._e()},staticRenderFns:[]}}});