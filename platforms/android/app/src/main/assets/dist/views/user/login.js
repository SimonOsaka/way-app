// { "framework": "Vue"} 

!function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=178)}({0:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s=n(3),a=o(s),l={UrlParser:a.default,_typeof:function(e){return Object.prototype.toString.call(e).slice(8,-1).toLowerCase()},isPlainObject:function(e){return"object"===l._typeof(e)},isString:function(e){return"string"==typeof e},isNonEmptyArray:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e&&e.length>0&&Array.isArray(e)&&void 0!==e},isObject:function(e){return e&&"object"===(void 0===e?"undefined":r(e))&&!Array.isArray(e)},isEmptyObject:function(e){return 0===Object.keys(e).length&&e.constructor===Object},decodeIconFont:function(e){var t=/&#x[a-z|0-9]{4,5};?/g;return t.test(e)?e.replace(new RegExp(t,"g"),function(e){var t=e.replace(/&#x/,"0x").replace(/;$/,"");return String.fromCharCode(t)}):e},mergeDeep:function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];if(!n.length)return e;var r=n.shift();if(l.isObject(e)&&l.isObject(r))for(var s in r)l.isObject(r[s])?(e[s]||Object.assign(e,i({},s,{})),l.mergeDeep(e[s],r[s])):Object.assign(e,i({},s,r[s]));return l.mergeDeep.apply(l,[e].concat(n))},appendProtocol:function(e){if(/^\/\//.test(e)){return"http"+(/^https:/.test(weex.config.bundleUrl)?"s":"")+":"+e}return e},encodeURLParams:function(e){return new a.default(e,!0).toString()},goToH5Page:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,o=weex.requireModule("navigator"),i=new l.UrlParser(e,!0),r=l.appendProtocol(i.toString());o.push({url:l.encodeURLParams(r),animated:t.toString()},n)},env:{isTaobao:function(){return/(tb|taobao|淘宝)/i.test(weex.config.env.appName)},isTrip:function(){return"LX"===weex.config.env.appName},isBoat:function(){var e=weex.config.env.appName;return"Boat"===e||"BoatPlayground"===e},isWeb:function(){var e=weex.config.env.platform;return"object"===("undefined"==typeof window?"undefined":r(window))&&"web"===e.toLowerCase()},isIOS:function(){return"ios"===weex.config.env.platform.toLowerCase()},isIPhoneX:function(){var e=weex.config.env.deviceHeight;return l.env.isWeb()?void 0!==("undefined"==typeof window?"undefined":r(window))&&window.screen&&window.screen.width&&window.screen.height&&(375===parseInt(window.screen.width,10)&&812===parseInt(window.screen.height,10)||414===parseInt(window.screen.width,10)&&896===parseInt(window.screen.height,10)):l.env.isIOS()&&(2436===e||2688===e||1792===e||1624===e)},isAndroid:function(){return"android"===weex.config.env.platform.toLowerCase()},isAlipay:function(){return"AP"===weex.config.env.appName},isTmall:function(){return/(tm|tmall|天猫)/i.test(weex.config.env.appName)},isAliWeex:function(){return l.env.isTmall()||l.env.isTrip()||l.env.isTaobao()},getPageHeight:function(){var e=weex.config.env,t=l.env.isWeb()?0:l.env.isIPhoneX()?176:132;return e.deviceHeight/e.deviceWidth*750-t},getScreenHeight:function(){var e=weex.config.env;return e.deviceHeight/e.deviceWidth*750}},compareVersion:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"0.0.0",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"0.0.0";if(e===t)return!0;for(var n=e.split("."),o=t.split("."),i=Math.max(n.length,o.length),r=0;r<i;r++){var s=~~o[r],a=~~n[r];if(s<a)return!0;if(s>a)return!1}return!1},arrayChunk:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4,n=[];return e&&e.length>0&&(n=e.map(function(n,o){return o%t==0?e.slice(o,o+t):null}).filter(function(e){return e})),n},truncateString:function(e,t){for(var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],o=0,i="",r="",s=/[^\x00-\xff]/g,a=e.replace(s,"**").length,l=0;l<a&&(r=e.charAt(l).toString(),null!==r.match(s)?o+=2:o++,!(o>t));l++)i+=r;return n&&a>t&&(i+="..."),i},objToParams:function(e){var t="";for(var n in e)""!==t&&(t+="&"),t+=n+"="+encodeURIComponent(e[n]);return t},paramsToObj:function(e){var t={};try{t=JSON.parse('{"'+decodeURI(e).replace(/"/g,'\\"').replace(/&/g,'","').replace(/=/g,'":"')+'"}')}catch(e){}return t},animation:{pageTransitionAnimation:function(e,t,n,o){weex.requireModule("animation").transition(e,{styles:{transform:t},duration:n?250:300,timingFunction:n?"ease-in":"ease-out",delay:0},function(){o&&o()})}},uiStyle:{pageTransitionAnimationStyle:function(e){return"push"===e?{left:"750px",top:"0px",height:weex.config.env.deviceHeight/weex.config.env.deviceWidth*750+"px"}:"model"===e?{top:weex.config.env.deviceHeight/weex.config.env.deviceWidth*750+"px",left:"0px",height:weex.config.env.deviceHeight/weex.config.env.deviceWidth*750+"px"}:{}}}};t.default=l},1:function(e,t,n){"use strict";function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!i())return new Promise(function(e,t){t({statusText:"网络无连接"})});var t={method:"GET",type:"json",headers:{}},n=weex.requireModule("modal"),o=weex.requireModule("stream"),a=weex.config.env.platform.toLowerCase(),l="http://api.jicu.vip",u=!0;l="android"!==a||u?l:"http://192.168.3.4";var c=Object.assign(t,e);if(c.url=l+c.url,c.headers.referer=s,"GET"===c.method){if(c.params){var d=Object.keys(c.params).reduce(function(e,t){return""+e+t+"="+c.params[t]+"&"},"?appVersion="+r()+"&");c.url=c.url.concat(d).slice(0,-1)}}else"POST"===c.method&&c.body&&(c.body=JSON.stringify(Object.assign(c.body,{appVerion:r()})),c.headers["Content-Type"]="application/json");return new Promise(function(e,t){o.fetch(c,function(o){o.ok?e(o.data):(n.toast({message:"网络无连接",duration:1}),t(o))})})}function i(){var e=weex.requireModule("network"),t=!0;return e.getNetworkStatus(function(e){"NONE"===e&&(weex.requireModule("modal").toast({message:"网络无连接",duration:1}),t=!1)}),t}function r(){var e="";return"ios"===weex.config.env.platform.toLowerCase()?weex.requireModule("version").getAppVersion(function(t){e=t}):e=weex.requireModule("version").getAppVersion(),e}Object.defineProperty(t,"__esModule",{value:!0}),t.http=o;var s="ios.jicu.vip"},15:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(16);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o(i).default}})},16:function(e,t,n){var o,i,r=[];r.push(n(17)),o=n(18);var s=n(20);i=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(i=o=o.default),"function"==typeof i&&(i=i.options),i.render=s.render,i.staticRenderFns=s.staticRenderFns,i._scopeId="data-v-6273a8fc",i.style=i.style||{},r.forEach(function(e){for(var t in e)i.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(i._scopeId,r),e.exports=o},17:function(e,t){e.exports={"wxc-btn":{alignItems:"center",justifyContent:"center",borderRadius:"12",opacity:1},"wxc-btn-highlight":{"opacity:active":.8},"btn-text":{textOverflow:"ellipsis",lines:1,color:"#ffffff"}}},178:function(e,t,n){var o,i,r=[];r.push(n(179)),o=n(180);var s=n(181);i=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(i=o=o.default),"function"==typeof i&&(i=i.options),i.render=s.render,i.staticRenderFns=s.staticRenderFns,i._scopeId="data-v-b149b182",i.style=i.style||{},r.forEach(function(e){for(var t in e)i.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(i._scopeId,r),e.exports=o,e.exports.el="true",new Vue(e.exports)},179:function(e,t){e.exports={iconfont:{fontFamily:"iconfont",fontSize:"32",fontStyle:"normal"},scroller:{flex:1},title:{marginTop:"300",marginLeft:"275",width:"200",height:"30",flexDirection:"row",justifyContent:"center",alignItems:"center"},title_text:{fontSize:"80",fontWeight:"bold"},content:{marginTop:"50",paddingTop:"24",paddingRight:"24",paddingLeft:"24"},input:{fontSize:"40",height:"88",borderWidth:"1",borderStyle:"solid",borderColor:"#a5a5a5",borderRadius:"12"},user_agreement:{fontSize:"22",color:"#a5a5a5"},link:{color:"#2395ff"},"center-text":{position:"absolute",bottom:25,left:172,right:172,textAlign:"center",fontSize:36,fontWeight:"bold"}}},18:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},i=n(19);t.default={props:{text:{type:String,default:"确认"},size:{type:String,default:"full"},type:{type:String,default:"red"},disabled:{type:Boolean,default:!1},isHighlight:{type:Boolean,default:!1},btnStyle:Object,textStyle:Object,disabledStyle:Object},computed:{mrBtnStyle:function(){var e=this.type,t=this.disabled,n=this.btnStyle,r=this.size,s=this.disabledStyle,a=o({},i.STYLE_MAP[e],i.BUTTON_STYLE_MAP[r],n),l={opacity:.2};return"white"===e&&(l={backgroundColor:"rgba(0, 0, 0, 0.1)"}),t?o({},a,l,s,{borderWidth:0}):a},mrTextStyle:function(){var e=this.type,t=this.disabled,n=this.textStyle,r=this.size,s=o({},i.TEXT_STYLE_MAP[e],n,i.TEXT_FONTSIZE_STYLE_MAP[r]);return t?o({},s,{color:"#FFFFFF"}):s}},methods:{onClicked:function(e){var t=this.type,n=this.disabled;this.$emit("wxcButtonClicked",{e:e,type:t,disabled:n})}}}},180:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),r=o(i),s=n(30),a=o(s),l=n(15),u=o(l),c=n(2),d=n(1),f=n(21),p=n(44),h=(o(p),n(6)),g=o(h),m=weex.requireModule("navigator"),y=(weex.requireModule("storage"),weex.requireModule("modal"));t.default={components:{WxcButton:u.default,WxcDialog:a.default,navbar:g.default},data:function(){return{userTel:"",userValidCode:"",userName:"",userPasword:"",btnGetValidCodeText:"获取验证码",btnGetValidCodeDisabled:!1,btnGetValidCodeDisabledTime:120,dialogContent:"",dialogShow:!1,loginTab:1}},created:function(){(0,c.initIconfont)(),(0,c.titlebar)("登录");var e=r.default.env.getPageHeight();r.default.env.getScreenHeight();this.scrollerStyle={height:e+"px"}},methods:{userTelOninput:function(e){this.userTel=e.value},userNameOninput:function(e){this.userName=e.value},userPasswordOninput:function(e){this.userPasword=e.value},userValidCodeOninput:function(e){this.userValidCode=e.value},userValidCodeClicked:function(e){var t=this;if((0,c.isEmpty)(this.userTel))return this.dialogContent="请输入手机号",void(this.dialogShow=!0);if(!/^1[3456789]\d{9}$/.test(this.userTel))return this.dialogContent="手机号格式不正确",void(this.dialogShow=!0);var n=this;(0,d.http)({method:"POST",url:"/user/validCode",headers:{},body:{userTel:this.userTel}}).then(function(e){200!=e.code&&(n.dialogContent=e.msg,n.dialogShow=!0)},function(e){}),this.btnGetValidCodeDisabled=!0;var o=setInterval(function(){t.btnGetValidCodeText="已发送（"+--t.btnGetValidCodeDisabledTime+"）",0===t.btnGetValidCodeDisabledTime&&(t.btnGetValidCodeDisabled=!1,t.btnGetValidCodeText="获取验证码",t.btnGetValidCodeDisabledTime=120,clearInterval(o))},1e3)},userTelLoginClicked:function(e){if(!(0,c.isEmpty)(this.userTel)&&!(0,c.isEmpty)(this.userValidCode)){if(!/\d{6}$/.test(this.userValidCode))return this.dialogContent="验证码格式不正确",void(this.dialogShow=!0);var t=this;(0,d.http)({method:"POST",url:"/user/login",headers:{},body:{userTel:this.userTel,validCode:this.userValidCode}}).then(function(e){if(200!=e.code)return t.dialogContent=e.msg,void(t.dialogShow=!0);(0,c.modalDebug)(JSON.stringify(e));var n=e.data;(0,c.setStorageVal)("way:user",JSON.stringify({userLoginId:n.userLoginId,userNickName:n.userNickName,userToken:n.token})).then(function(e){(0,c.modalDebug)("setStorageVal");var t=(0,c.getUrlKey)("tabIndex");(0,c.postMessage)("way:tab:selectedIndex",t||0),m.pop({animated:"true"})},function(e){weex.requireModule("modal").toast({message:e,duration:3})})},function(e){})}},dialogConfirmBtnClicked:function(e){this.dialogContent="",this.dialogShow=!1},clickUserAgreement:function(){m.push({url:(0,c.getEntryUrl)("views/user/agreements"),animated:"true"})},userNameLoginClicked:function(){if((0,c.isEmpty)(this.userName)||(0,c.isEmpty)(this.userPasword))return void y.toast({message:"手机号和密码必须填写",duration:1.5});if(!this.checkMobileNumber(this.userName))return this.dialogContent="手机号格式不正确",void(this.dialogShow=!0);var e=this;(0,d.http)({method:"POST",url:"/user/signin",headers:{},body:{userLoginName:this.userName,userLoginPassword:this.userPasword}}).then(function(t){if(200!=t.code)return e.dialogContent=t.msg,void(e.dialogShow=!0);(0,c.modalDebug)(JSON.stringify(t));var n=t.data;(0,c.getStorageVal)("way:city").then(function(e){var t=JSON.parse(e);(0,f.updateUserProfileAddress)({userLoginId:n.userLoginId,addressName:t.name,addressLongitude:t.lng,addressLatitude:t.lat},{token:n.token})},function(e){}),(0,c.setStorageVal)("way:user",JSON.stringify({userLoginId:n.userLoginId,userNickName:n.userNickName,userToken:n.token})).then(function(e){(0,c.modalDebug)("setStorageVal"),(0,c.postMessage)("m:way:login","success"),m.pop({animated:"true"})},function(e){y.toast({message:e,duration:3})})},function(e){})},checkMobileNumber:function(e){return!!/^1[3456789]\d{9}$/.test(e)}}}},181:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("navbar",{attrs:{title:"登录",backgroundColor:"#45b5f0",height:"88"}}),n("scroller",{staticClass:["scroller"],style:e.scrollerStyle},[0==e.loginTab?n("div",{staticClass:["content"]},[n("div",[n("input",{staticClass:["input"],staticStyle:{width:"702px"},attrs:{type:"tel",maxlength:"11",returnKeyType:"done",placeholder:"手机号"},on:{input:e.userTelOninput}})]),n("div",{staticStyle:{flexDirection:"row",marginTop:"20px"}},[n("input",{staticClass:["input"],staticStyle:{width:"351px"},attrs:{type:"number",maxlength:"6",autoAppear:"false",returnKeyType:"go",placeholder:"验证码"},on:{input:e.userValidCodeOninput}}),n("wxc-button",{attrs:{text:e.btnGetValidCodeText,type:"white",btnStyle:{width:"341px",marginLeft:"10px"},disabled:e.btnGetValidCodeDisabled},on:{wxcButtonClicked:e.userValidCodeClicked}})],1)]):n("div",{staticClass:["content"]},[n("div",[n("input",{staticClass:["input"],staticStyle:{width:"702px"},attrs:{type:"text",maxlength:"16",returnKeyType:"done",placeholder:"手机号"},on:{input:e.userNameOninput}})]),n("div",{staticStyle:{flexDirection:"row",marginTop:"20px"}},[n("input",{staticClass:["input"],staticStyle:{width:"702px"},attrs:{type:"password",maxlength:"16",returnKeyType:"go",placeholder:"密码"},on:{input:e.userPasswordOninput}})])]),0==e.loginTab?n("div",{staticStyle:{alignItems:"center",marginTop:"20px"}},[n("wxc-button",{attrs:{type:"blue",text:"登录"},on:{wxcButtonClicked:e.userTelLoginClicked}})],1):n("div",{staticStyle:{alignItems:"center",marginTop:"20px"}},[n("wxc-button",{attrs:{type:"blue",text:"登录"},on:{wxcButtonClicked:e.userNameLoginClicked}})],1),n("div",{staticStyle:{flexDirection:"row",marginTop:"20px",justifyContent:"center"}},[n("text",{staticClass:["user_agreement"]},[e._v(" 首次登录即代表注册，并且同意 ")]),n("text",{staticClass:["user_agreement","link"],on:{click:function(t){e.clickUserAgreement()}}},[e._v("《用户服务协议》 ")])])]),n("wxc-dialog",{attrs:{title:"提示",content:e.dialogContent,show:e.dialogShow,single:!0},on:{wxcDialogConfirmBtnClicked:e.dialogConfirmBtnClicked}})],1)},staticRenderFns:[]}},19:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.STYLE_MAP={red:{backgroundColor:"#FF5000"},yellow:{backgroundColor:"#FFC900"},white:{backgroundColor:"#FFFFFF",borderColor:"#A5A5A5",borderWidth:"1px"},blue:{backgroundColor:"#0F8DE8"},green:{backgroundColor:"#19be6b"}},t.TEXT_STYLE_MAP={red:{color:"#FFFFFF"},yellow:{color:"#FFFFFF"},blue:{color:"#FFFFFF"},white:{color:"#3D3D3D"},green:{color:"#FFFFFF"}},t.BUTTON_STYLE_MAP={full:{width:"702px",height:"88px"},big:{width:"339px",height:"70px"},medium:{width:"218px",height:"60px"},small:{width:"157px",height:"44px"}},t.TEXT_FONTSIZE_STYLE_MAP={full:{fontSize:"36px"},big:{fontSize:"32px"},medium:{fontSize:"28px"},small:{fontSize:"24px"}}},2:function(e,t,n){"use strict";function o(){weex.requireModule("dom").addRule("fontFace",{fontFamily:"iconfont",src:"url('local:///font/iconfont.ttf')"})}function i(e){}function r(e){}function s(e,t){var n=weex.config.bundleUrl,o=n.indexOf("your_current_IP")>=0||n.indexOf("file://assets/")>=0,i=n.indexOf("file:///")>=0&&n.indexOf(".app")>0,r="web"===weex.config.env.platform.toLowerCase(),s="";if(r){if(s="/"+e+".html",t){s+="?";var a=[];for(var l in t)if(t.hasOwnProperty(l)){var u=t[l];a.push(l+"="+u)}s+=a.join("&")}}else i?s=n.split("bundlejs")[0]+"/bundlejs/"+e+".js":o&&(s=n.split("/dist")[0]+"/dist/"+e+".js");return s}function a(e,t){var n=new RegExp("(^|&)"+t+"=([^&]*)(&|$)","i"),o=e.slice(e.indexOf("?")+1).match(n);if(null!=o)try{return decodeURIComponent(o[2])}catch(e){return null}return null}function l(e){if(null==e||""==e||"undefined"==e||"null"==e)return!0;if(e.length>0)return!1;if(0===e.length)return!0;for(var t in e)if(hasOwnProperty.call(e,t))return!1;return!0}function u(){return weex.config.env.platform.toLowerCase()}function c(e){var t=weex.requireModule("storage"),n="";return t.getItem(e,function(e){"success"==e.result&&(n=e.data)}),n}function d(e,t){return y(e+t),new Promise(function(n,o){y("promise..."),weex.requireModule("storage").setItem(e,t,function(e){y("setItem result:"+JSON.stringify(e)),"success"==e.result?n(e.result):o(e)})})}function f(e){return new Promise(function(t,n){var o=weex.requireModule("storage"),i="";o.getItem(e,function(e){"success"==e.result?(i=e.data,t(i)):n(e)})})}function p(e){return new Promise(function(t,n){var o=weex.requireModule("storage"),i="";o.removeItem(e,function(e){"success"==e.result?(i=e.data,t(i)):n(e)})})}function h(e,t){weex.requireModule("storage").setItem(e,t,function(e){return"success"==e.result&&"undefined"==e.data})}function g(e,t){if("web"===u()){weex.requireModule("storage").setItem(e,t,function(e){return"success"==e.result&&"undefined"==e.data})}else{new BroadcastChannel(e).postMessage(t)}}function m(e,t){var n={status:1,val:void 0};new BroadcastChannel(e).onmessage=function(e){e.data&&(n.val=e.data),n.status=0,t(n)}}function y(){arguments.length>0&&void 0!==arguments[0]&&arguments[0]}function v(e){return decodeURIComponent((new RegExp("[?|&]"+e+"=([^&;]+?)(&|#|;|$)").exec(location.href)||[,""])[1].replace(/\+/g,"%20"))||null}function b(e){weex.requireModule("titlebar").setTitle(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.initIconfont=o,t.setPageTitle=i,t.setOgImage=r,t.getEntryUrl=s,t.getUrlSearch=a,t.isEmpty=l,t.whichPlatform=u,t.getStorageValue=c,t.setStorageVal=d,t.getStorageVal=f,t.removeStorage=p,t.setStorageValue=h,t.postMessage=g,t.receiveMessage=m,t.modalDebug=y,t.getUrlKey=v,t.titlebar=b;weex.requireModule("modal")},20:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:["wxc-btn",e.isHighlight&&!e.disabled&&"wxc-btn-highlight"],style:e.mrBtnStyle,attrs:{accessible:!0,ariaLabel:e.text},on:{click:e.onClicked}},[n("text",{staticClass:["btn-text"],style:e.mrTextStyle},[e._v(e._s(e.text))])])},staticRenderFns:[]}},21:function(e,t,n){"use strict";function o(e){return(0,p.http)({method:"POST",url:"/user/device/sync",headers:{},body:e})}function i(e,t){return(0,p.http)({method:"POST",url:"/shop/user/follows",headers:t,body:e})}function r(e,t){return(0,p.http)({method:"POST",url:"/user/profile/address/update",headers:t,body:e})}function s(e,t){return(0,p.http)({method:"POST",url:"/user/address/list",headers:t,body:e})}function a(e,t){return(0,p.http)({method:"POST",url:"/user/address/create",headers:t,body:e})}function l(e,t){return(0,p.http)({method:"POST",url:"/user/address/update",headers:t,body:e})}function u(e,t){return(0,p.http)({method:"POST",url:"/user/address/delete",headers:t,body:e})}function c(e,t){return(0,p.http)({method:"POST",url:"/user/feedback/add",headers:t,body:e})}function d(e,t){return(0,p.http)({method:"POST",url:"/user/feedback/list",headers:t,body:e})}function f(e,t){return(0,p.http)({method:"POST",url:"/user/feedback/typeMap",headers:t,body:e})}Object.defineProperty(t,"__esModule",{value:!0}),t.syncUserDevice=o,t.userShopFollows=i,t.updateUserProfileAddress=r,t.queryUserAddressList=s,t.createUserAddress=a,t.updateUserAddress=l,t.deleteUserAddress=u,t.addFeedback=c,t.queryUserFeedbackList=d,t.feedbackTypeMap=f;var p=n(1)},22:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(23);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o(i).default}})},23:function(e,t,n){var o,i,r=[];r.push(n(24)),o=n(25);var s=n(26);i=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(i=o=o.default),"function"==typeof i&&(i=i.options),i.render=s.render,i.staticRenderFns=s.staticRenderFns,i._scopeId="data-v-389bbc1c",i.style=i.style||{},r.forEach(function(e){for(var t in e)i.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(i._scopeId,r),e.exports=o},24:function(e,t){e.exports={"wxc-overlay":{width:"750",position:"fixed",top:0,bottom:0,right:0}}},25:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),s=o(r),a=weex.requireModule("animation");t.default={props:{show:{type:Boolean,default:!0},left:i({default:Number},"default",0),hasAnimation:{type:Boolean,default:!0},duration:{type:[Number,String],default:300},timingFunction:{type:Array,default:function(){return["ease-in","ease-out"]}},opacity:{type:[Number,String],default:.6},canAutoClose:{type:Boolean,default:!0}},computed:{overlayStyle:function(){return{opacity:this.hasAnimation?0:1,backgroundColor:"rgba(0, 0, 0,"+this.opacity+")",left:s.default.env.isWeb()?this.left+"px":0}},shouldShow:function(){var e=this,t=this.show;return this.hasAnimation&&setTimeout(function(){e.appearOverlay(t)},50),t}},methods:{overlayClicked:function(e){this.canAutoClose?this.appearOverlay(!1):this.$emit("wxcOverlayBodyClicked",{})},appearOverlay:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.duration,o=this.hasAnimation,i=this.timingFunction,r=this.canAutoClose,s=!e&&r;s&&this.$emit("wxcOverlayBodyClicking",{});var l=this.$refs["wxc-overlay"];o&&l?a.transition(l,{styles:{opacity:e?1:0},duration:n,timingFunction:i[e?0:1],delay:0},function(){s&&t.$emit("wxcOverlayBodyClicked",{})}):s&&this.$emit("wxcOverlayBodyClicked",{})}}}},26:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.show?n("div",{ref:"wxc-overlay",staticClass:["wxc-overlay"],style:e.overlayStyle,attrs:{hack:e.shouldShow},on:{click:e.overlayClicked}}):e._e()])},staticRenderFns:[]}},27:function(e,t){e.exports={category:{marginTop:"20",width:"750",height:"68",backgroundColor:"#f2f3f4",flexDirection:"row"},"category-text":{paddingTop:"20",paddingLeft:"24",color:"#000000",fontWeight:"600",fontSize:"28",width:"375"}}},28:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{title:{type:String,default:""}}}},29:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:["category"]},[n("text",{staticClass:["category-text"]},[e._v(e._s(e.title))]),e._t("right"),e._t("default")],2)},staticRenderFns:[]}},3:function(e,t,n){"use strict";function o(e){return(e||"").toString().replace(m,"")}function i(e){var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var n=t.location||{};e=e||n;var o,i={},r=void 0===e?"undefined":c(e);if("blob:"===e.protocol)i=new a(unescape(e.pathname),{});else if("string"===r){i=new a(e,{});for(o in v)delete i[o]}else if("object"===r){for(o in e)o in v||(i[o]=e[o]);void 0===i.slashes&&(i.slashes=p.test(e.href))}return i}function r(e){e=o(e);var t=h.exec(e);return{protocol:t[1]?t[1].toLowerCase():"",slashes:!!t[2],rest:t[3]}}function s(e,t){if(""===e)return t;for(var n=(t||"/").split("/").slice(0,-1).concat(e.split("/")),o=n.length,i=n[o-1],r=!1,s=0;o--;)"."===n[o]?n.splice(o,1):".."===n[o]?(n.splice(o,1),s++):s&&(0===o&&(r=!0),n.splice(o,1),s--);return r&&n.unshift(""),"."!==i&&".."!==i||n.push(""),n.join("/")}function a(e,t,n){if(e=o(e),!(this instanceof a))return new a(e,t,n);var l,u,p,h,g,m,v=y.slice(),b=void 0===t?"undefined":c(t),x=this,w=0;for("object"!==b&&"string"!==b&&(n=t,t=null),n&&"function"!=typeof n&&(n=f.parse),t=i(t),u=r(e||""),l=!u.protocol&&!u.slashes,x.slashes=u.slashes||l&&t.slashes,x.protocol=u.protocol||t.protocol||"",e=u.rest,u.slashes||(v[3]=[/(.*)/,"pathname"]);w<v.length;w++)h=v[w],"function"!=typeof h?(p=h[0],m=h[1],p!==p?x[m]=e:"string"==typeof p?~(g=e.indexOf(p))&&("number"==typeof h[2]?(x[m]=e.slice(0,g),e=e.slice(g+h[2])):(x[m]=e.slice(g),e=e.slice(0,g))):(g=p.exec(e))&&(x[m]=g[1],e=e.slice(0,g.index)),x[m]=x[m]||(l&&h[3]?t[m]||"":""),h[4]&&(x[m]=x[m].toLowerCase())):e=h(e);n&&(x.query=n(x.query)),l&&t.slashes&&"/"!==x.pathname.charAt(0)&&(""!==x.pathname||""!==t.pathname)&&(x.pathname=s(x.pathname,t.pathname)),d(x.port,x.protocol)||(x.host=x.hostname,x.port=""),x.username=x.password="",x.auth&&(h=x.auth.split(":"),x.username=h[0]||"",x.password=h[1]||""),x.origin=x.protocol&&x.host&&"file:"!==x.protocol?x.protocol+"//"+x.host:"null",x.href=x.toString()}function l(e,t,n){var o=this;switch(e){case"query":"string"==typeof t&&t.length&&(t=(n||f.parse)(t)),o[e]=t;break;case"port":o[e]=t,d(t,o.protocol)?t&&(o.host=o.hostname+":"+t):(o.host=o.hostname,o[e]="");break;case"hostname":o[e]=t,o.port&&(t+=":"+o.port),o.host=t;break;case"host":o[e]=t,/:\d+$/.test(t)?(t=t.split(":"),o.port=t.pop(),o.hostname=t.join(":")):(o.hostname=t,o.port="");break;case"protocol":o.protocol=t.toLowerCase(),o.slashes=!n;break;case"pathname":case"hash":if(t){var i="pathname"===e?"/":"#";o[e]=t.charAt(0)!==i?i+t:t}else o[e]=t;break;default:o[e]=t}for(var r=0;r<y.length;r++){var s=y[r];s[4]&&(o[s[1]]=o[s[1]].toLowerCase())}return o.origin=o.protocol&&o.host&&"file:"!==o.protocol?o.protocol+"//"+o.host:"null",o.href=o.toString(),o}function u(e){e&&"function"==typeof e||(e=f.stringify);var t,n=this,o=n.protocol;o&&":"!==o.charAt(o.length-1)&&(o+=":");var i=o+(n.slashes?"//":"");return n.username&&(i+=n.username,n.password&&(i+=":"+n.password),i+="@"),i+=n.host+n.pathname,t="object"===c(n.query)?e(n.query):n.query,t&&(i+="?"!==t.charAt(0)?"?"+t:t),n.hash&&(i+=n.hash),i}var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d=n(4),f=n(5),p=/^[A-Za-z][A-Za-z0-9+-.]*:\/\//,h=/^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i,g="[\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF]",m=new RegExp("^"+g+"+"),y=[["#","hash"],["?","query"],function(e){return e.replace("\\","/")},["/","pathname"],["@","auth",1],[NaN,"host",void 0,1,1],[/:(\d+)$/,"port",void 0,1],[NaN,"hostname",void 0,1,1]],v={hash:1,query:1};a.prototype={set:l,toString:u},a.extractProtocol=r,a.location=i,a.trimLeft=o,a.qs=f,e.exports=a},30:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(31);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o(i).default}})},31:function(e,t,n){var o,i,r=[];r.push(n(32)),o=n(33);var s=n(35);i=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(i=o=o.default),"function"==typeof i&&(i=i.options),i.render=s.render,i.staticRenderFns=s.staticRenderFns,i._scopeId="data-v-b50148dc",i.style=i.style||{},r.forEach(function(e){for(var t in e)i.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(i._scopeId,r),e.exports=o},32:function(e,t){e.exports={container:{position:"fixed",width:"750",zIndex:99999},"dialog-box":{position:"fixed",left:"96",width:"558",backgroundColor:"#FFFFFF"},"dialog-content":{paddingTop:"36",paddingBottom:"36",paddingLeft:"36",paddingRight:"36"},"content-title":{color:"#333333",fontSize:"36",textAlign:"center",marginBottom:"24"},"content-subtext":{color:"#666666",fontSize:"26",lineHeight:"36",textAlign:"center"},"dialog-footer":{flexDirection:"row",alignItems:"center",borderTopColor:"#F3F3F3",borderTopWidth:"1"},"footer-btn":{flexDirection:"row",alignItems:"center",justifyContent:"center",flex:1,height:"90"},cancel:{borderRightColor:"#F3F3F3",borderRightWidth:"1"},"btn-text":{fontSize:"36",color:"#666666"},"no-prompt":{width:"486",alignItems:"center",justifyContent:"center",flexDirection:"row",marginTop:"24"},"no-prompt-icon":{width:"24",height:"24",marginRight:"12"},"no-prompt-text":{fontSize:"24",color:"#A5A5A5"}}},33:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(22),r=o(i),s=n(34),a=n(0),l=o(a);t.default={components:{WxcOverlay:r.default},props:{show:{type:Boolean,default:!1},single:{type:Boolean,default:!1},title:{type:String,default:""},content:{type:String,default:""},top:{type:Number,default:400},cancelText:{type:String,default:"取消"},confirmText:{type:String,default:"确定"},mainBtnColor:{type:String,default:"#EE9900"},secondBtnColor:{type:String,default:"#666666"},showNoPrompt:{type:Boolean,default:!1},noPromptText:{type:String,default:"不再提示"},isChecked:{type:Boolean,default:!1},left:{type:Number,default:0}},data:function(){return{noPromptIcon:s.UN_CHECKED,pageHeight:1334,isWeb:l.default.env.isWeb()}},created:function(){var e=weex.config.env,t=e.deviceHeight,n=e.deviceWidth;this.pageHeight=t/n*750},methods:{secondaryClicked:function(){this.$emit("wxcDialogCancelBtnClicked",{type:"cancel"})},primaryClicked:function(e){this.$emit("wxcDialogConfirmBtnClicked",{type:"confirm"})},noPromptClicked:function(e){var t=!this.isChecked;this.noPromptIcon=t?s.CHECKED:s.UN_CHECKED,this.$emit("wxcDialogNoPromptClicked",{isChecked:t})}}}},34:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.CHECKED="https://gw.alicdn.com/tfs/TB1UT3VpgMPMeJjy1XdXXasrXXa-42-42.png",t.UN_CHECKED="https://gw.alicdn.com/tfs/TB1hE3VpgMPMeJjy1XdXXasrXXa-42-42.png"},35:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:["container"]},[e.show?n("wxc-overlay",{attrs:{left:e.left,show:!0,hasAnimation:!1}}):e._e(),e.show?n("div",{staticClass:["dialog-box"],style:{top:e.top+"px",left:(e.isWeb?e.left:0)+96+"px"}},[n("div",{staticClass:["dialog-content"]},[e._t("title",[n("text",{staticClass:["content-title"]},[e._v(e._s(e.title))])]),e._t("content",[n("text",{staticClass:["content-subtext"]},[e._v(e._s(e.content))])]),e.showNoPrompt?n("div",{staticClass:["no-prompt"],on:{click:e.noPromptClicked}},[n("image",{staticClass:["no-prompt-icon"],attrs:{src:e.noPromptIcon}}),n("text",{staticClass:["no-prompt-text"]},[e._v(e._s(e.noPromptText))])]):e._e()],2),n("div",{staticClass:["dialog-footer"]},[e.single?e._e():n("div",{staticClass:["footer-btn","cancel"],on:{click:e.secondaryClicked}},[n("text",{staticClass:["btn-text"],style:{color:e.secondBtnColor}},[e._v(e._s(e.cancelText))])]),n("div",{staticClass:["footer-btn","confirm"],on:{click:e.primaryClicked}},[n("text",{staticClass:["btn-text"],style:{color:e.mainBtnColor}},[e._v(e._s(e.confirmText))])])])]):e._e()],1)},staticRenderFns:[]}},4:function(e,t,n){"use strict";e.exports=function(e,t){if(t=t.split(":")[0],!(e=+e))return!1;switch(t){case"http":case"ws":return 80!==e;case"https":case"wss":return 443!==e;case"ftp":return 21!==e;case"gopher":return 70!==e;case"file":return!1}return 0!==e}},44:function(e,t,n){var o,i,r=[];r.push(n(27)),o=n(28);var s=n(29);i=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(i=o=o.default),"function"==typeof i&&(i=i.options),i.render=s.render,i.staticRenderFns=s.staticRenderFns,i._scopeId="data-v-376cda0e",i.style=i.style||{},r.forEach(function(e){for(var t in e)i.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(i._scopeId,r),e.exports=o},5:function(e,t,n){"use strict";function o(e){try{return decodeURIComponent(e.replace(/\+/g," "))}catch(e){return null}}function i(e){for(var t,n=/([^=?&]+)=?([^&]*)/g,i={};t=n.exec(e);){var r=o(t[1]),s=o(t[2]);null===r||null===s||r in i||(i[r]=s)}return i}function r(e,t){t=t||"";var n,o,i=[];"string"!=typeof t&&(t="?");for(o in e)if(a.call(e,o)){if(n=e[o],n||null!==n&&n!==s&&!isNaN(n)||(n=""),o=encodeURIComponent(o),n=encodeURIComponent(n),null===o||null===n)continue;i.push(o+"="+n)}return i.length?t+i.join("&"):""}var s,a=Object.prototype.hasOwnProperty;t.stringify=r,t.parse=i},6:function(e,t,n){var o,i,r=[];r.push(n(7)),o=n(8);var s=n(9);i=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(i=o=o.default),"function"==typeof i&&(i=i.options),i.render=s.render,i.staticRenderFns=s.staticRenderFns,i._scopeId="data-v-cc674820",i.style=i.style||{},r.forEach(function(e){for(var t in e)i.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(i._scopeId,r),e.exports=o},7:function(e,t){e.exports={container:{flexDirection:"row",position:"fixed",top:0,left:0,right:0,width:750},"right-text":{position:"absolute",bottom:28,right:32,textAlign:"right",fontSize:32,fontFamily:"'Open Sans', sans-serif"},"left-text":{position:"absolute",bottom:28,left:32,textAlign:"left",fontSize:32,fontFamily:"'Open Sans', sans-serif"},"center-text":{position:"absolute",bottom:25,left:172,right:172,textAlign:"center",fontSize:36,fontWeight:"bold"},"left-image":{position:"absolute",bottom:20,left:28,width:50,height:50},"right-image":{position:"absolute",bottom:20,right:28,width:50,height:50}}},8:function(e,t,n){"use strict";e.exports={props:{dataRole:{default:"navbar"},backgroundColor:{default:"black"},height:{default:88},title:{default:""},titleColor:{default:"black"},rightItemSrc:{default:""},rightItemTitle:{default:""},rightItemColor:{default:"black"},leftItemSrc:{default:""},leftItemTitle:{default:""},leftItemColor:{default:"black"}},methods:{onclickrightitem:function(e){this.$emit("naviBarRightItemClick")},onclickleftitem:function(e){this.$emit("naviBarLeftItemClick")}},beforeCreated:function(){this.show="ios"===weex.config.env.platform.toLowerCase()}}},9:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.show?n("div",{staticClass:["container"],style:{height:e.height,backgroundColor:e.backgroundColor},attrs:{dataRole:e.dataRole}},[e.rightItemSrc?e._e():n("text",{staticClass:["right-text"],style:{color:e.rightItemColor},attrs:{naviItemPosition:"right"},on:{click:e.onclickrightitem}},[e._v(e._s(e.rightItemTitle))]),e.rightItemSrc?n("image",{staticClass:["right-image"],attrs:{naviItemPosition:"right",src:e.rightItemSrc},on:{click:e.onclickrightitem}}):e._e(),e.leftItemSrc?e._e():n("text",{staticClass:["left-text"],style:{color:e.leftItemColor},attrs:{naviItemPosition:"left"},on:{click:e.onclickleftitem}},[e._v(e._s(e.leftItemTitle))]),e.leftItemSrc?n("image",{staticClass:["left-image"],attrs:{naviItemPosition:"left",src:e.leftItemSrc},on:{click:e.onclickleftitem}}):e._e(),n("text",{staticClass:["center-text"],style:{color:e.titleColor},attrs:{naviItemPosition:"center",value:e.title}})]):e._e()},staticRenderFns:[]}}});