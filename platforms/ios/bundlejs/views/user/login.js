// { "framework": "Vue"} 

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 132);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /**
                                                                                                                                                                                                                                                                                * CopyRight (C) 2017-2022 Alibaba Group Holding Limited.
                                                                                                                                                                                                                                                                                * Created by Tw93 on 17/11/01
                                                                                                                                                                                                                                                                                */

var _urlParse = __webpack_require__(2);

var _urlParse2 = _interopRequireDefault(_urlParse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Utils = {
  UrlParser: _urlParse2.default,
  _typeof: function _typeof(obj) {
    return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
  },
  isPlainObject: function isPlainObject(obj) {
    return Utils._typeof(obj) === 'object';
  },
  isString: function isString(obj) {
    return typeof obj === 'string';
  },
  isNonEmptyArray: function isNonEmptyArray() {
    var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    return obj && obj.length > 0 && Array.isArray(obj) && typeof obj !== 'undefined';
  },
  isObject: function isObject(item) {
    return item && (typeof item === 'undefined' ? 'undefined' : _typeof2(item)) === 'object' && !Array.isArray(item);
  },
  isEmptyObject: function isEmptyObject(obj) {
    return Object.keys(obj).length === 0 && obj.constructor === Object;
  },
  decodeIconFont: function decodeIconFont(text) {
    // 正则匹配 图标和文字混排 eg: 我去上学校&#xe600;,天天不&#xe600;迟到
    var regExp = /&#x[a-z|0-9]{4,5};?/g;
    if (regExp.test(text)) {
      return text.replace(new RegExp(regExp, 'g'), function (iconText) {
        var replace = iconText.replace(/&#x/, '0x').replace(/;$/, '');
        return String.fromCharCode(replace);
      });
    } else {
      return text;
    }
  },
  mergeDeep: function mergeDeep(target) {
    for (var _len = arguments.length, sources = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      sources[_key - 1] = arguments[_key];
    }

    if (!sources.length) return target;
    var source = sources.shift();
    if (Utils.isObject(target) && Utils.isObject(source)) {
      for (var key in source) {
        if (Utils.isObject(source[key])) {
          if (!target[key]) {
            Object.assign(target, _defineProperty({}, key, {}));
          }
          Utils.mergeDeep(target[key], source[key]);
        } else {
          Object.assign(target, _defineProperty({}, key, source[key]));
        }
      }
    }
    return Utils.mergeDeep.apply(Utils, [target].concat(sources));
  },
  appendProtocol: function appendProtocol(url) {
    if (/^\/\//.test(url)) {
      var bundleUrl = weex.config.bundleUrl;

      return 'http' + (/^https:/.test(bundleUrl) ? 's' : '') + ':' + url;
    }
    return url;
  },
  encodeURLParams: function encodeURLParams(url) {
    var parsedUrl = new _urlParse2.default(url, true);
    return parsedUrl.toString();
  },
  goToH5Page: function goToH5Page(jumpUrl) {
    var animated = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

    var Navigator = weex.requireModule('navigator');
    var jumpUrlObj = new Utils.UrlParser(jumpUrl, true);
    var url = Utils.appendProtocol(jumpUrlObj.toString());
    Navigator.push({
      url: Utils.encodeURLParams(url),
      animated: animated.toString()
    }, callback);
  },

  env: {
    isTaobao: function isTaobao() {
      var appName = weex.config.env.appName;

      return (/(tb|taobao|淘宝)/i.test(appName)
      );
    },
    isTrip: function isTrip() {
      var appName = weex.config.env.appName;

      return appName === 'LX';
    },
    isBoat: function isBoat() {
      var appName = weex.config.env.appName;

      return appName === 'Boat' || appName === 'BoatPlayground';
    },
    isWeb: function isWeb() {
      var platform = weex.config.env.platform;

      return (typeof window === 'undefined' ? 'undefined' : _typeof2(window)) === 'object' && platform.toLowerCase() === 'web';
    },
    isIOS: function isIOS() {
      var platform = weex.config.env.platform;

      return platform.toLowerCase() === 'ios';
    },

    /**
     * 是否为 iPhone X
     * @returns {boolean}
     */
    isIPhoneX: function isIPhoneX() {
      var deviceHeight = weex.config.env.deviceHeight;

      if (Utils.env.isWeb()) {
        return (typeof window === 'undefined' ? 'undefined' : _typeof2(window)) !== undefined && window.screen && window.screen.width && window.screen.height && parseInt(window.screen.width, 10) === 375 && parseInt(window.screen.height, 10) === 812;
      }
      return Utils.env.isIOS() && deviceHeight === 2436;
    },
    isAndroid: function isAndroid() {
      var platform = weex.config.env.platform;

      return platform.toLowerCase() === 'android';
    },
    isAlipay: function isAlipay() {
      var appName = weex.config.env.appName;

      return appName === 'AP';
    },
    isTmall: function isTmall() {
      var appName = weex.config.env.appName;

      return (/(tm|tmall|天猫)/i.test(appName)
      );
    },
    isAliWeex: function isAliWeex() {
      return Utils.env.isTmall() || Utils.env.isTrip() || Utils.env.isTaobao();
    },

    /**
     * 获取weex屏幕真实的设置高度，需要减去导航栏高度
     * @returns {Number}
     */
    getPageHeight: function getPageHeight() {
      var env = weex.config.env;

      var navHeight = Utils.env.isWeb() ? 0 : Utils.env.isIPhoneX() ? 176 : 132;
      return env.deviceHeight / env.deviceWidth * 750 - navHeight;
    },

    /**
     * 获取weex屏幕真实的设置高度
     * @returns {Number}
     */
    getScreenHeight: function getScreenHeight() {
      var env = weex.config.env;

      return env.deviceHeight / env.deviceWidth * 750;
    }
  },

  /**
   * 版本号比较
   * @memberOf Utils
   * @param currVer {string}
   * @param promoteVer {string}
   * @returns {boolean}
   * @example
   *
   * const { Utils } = require('@ali/wx-bridge');
   * const { compareVersion } = Utils;
   * console.log(compareVersion('0.1.100', '0.1.11')); // 'true'
   */
  compareVersion: function compareVersion() {
    var currVer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '0.0.0';
    var promoteVer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '0.0.0';

    if (currVer === promoteVer) return true;
    var currVerArr = currVer.split('.');
    var promoteVerArr = promoteVer.split('.');
    var len = Math.max(currVerArr.length, promoteVerArr.length);
    for (var i = 0; i < len; i++) {
      var proVal = ~~promoteVerArr[i];
      var curVal = ~~currVerArr[i];
      if (proVal < curVal) {
        return true;
      } else if (proVal > curVal) {
        return false;
      }
    }
    return false;
  },

  /**
   * 分割数组
   * @param arr 被分割数组
   * @param size 分割数组的长度
   * @returns {Array}
   */
  arrayChunk: function arrayChunk() {
    var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;

    var groups = [];
    if (arr && arr.length > 0) {
      groups = arr.map(function (e, i) {
        return i % size === 0 ? arr.slice(i, i + size) : null;
      }).filter(function (e) {
        return e;
      });
    }
    return groups;
  },

  /*
   * 截断字符串
   * @param str 传入字符串
   * @param len 截断长度
   * @param hasDot 末尾是否...
   * @returns {String}
   */
  truncateString: function truncateString(str, len) {
    var hasDot = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

    var newLength = 0;
    var newStr = '';
    var singleChar = '';
    var chineseRegex = /[^\x00-\xff]/g;
    var strLength = str.replace(chineseRegex, '**').length;
    for (var i = 0; i < strLength; i++) {
      singleChar = str.charAt(i).toString();
      if (singleChar.match(chineseRegex) !== null) {
        newLength += 2;
      } else {
        newLength++;
      }
      if (newLength > len) {
        break;
      }
      newStr += singleChar;
    }

    if (hasDot && strLength > len) {
      newStr += '...';
    }
    return newStr;
  },

  /*
   * 转换 obj 为 url params参数
   * @param obj 传入字符串
   * @returns {String}
   */
  objToParams: function objToParams(obj) {
    var str = "";
    for (var key in obj) {
      if (str !== "") {
        str += "&";
      }
      str += key + "=" + encodeURIComponent(obj[key]);
    }
    return str;
  },

  /*
   * 转换 url params参数为obj
   * @param str 传入url参数字符串
   * @returns {Object}
   */
  paramsToObj: function paramsToObj(str) {
    var obj = {};
    try {
      obj = JSON.parse('{"' + decodeURI(str).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}');
    } catch (e) {
      console.log(e);
    }
    return obj;
  },

  animation: {
    /**
     * 返回定义页面转场动画起初的位置
     * @param ref
     * @param transform 运动类型
     * @param status
     * @param callback 回调函数
     */
    pageTransitionAnimation: function pageTransitionAnimation(ref, transform, status, callback) {
      var animation = weex.requireModule('animation');
      animation.transition(ref, {
        styles: {
          transform: transform
        },
        duration: status ? 250 : 300, // ms
        timingFunction: status ? 'ease-in' : 'ease-out',
        delay: 0 // ms
      }, function () {
        callback && callback();
      });
    }
  },
  uiStyle: {
    /**
     * 返回定义页面转场动画起初的位置
     * @param animationType 页面转场动画的类型 push，model
     * @param size 分割数组的长度
     * @returns {}
     */
    pageTransitionAnimationStyle: function pageTransitionAnimationStyle(animationType) {
      if (animationType === 'push') {
        return {
          left: '750px',
          top: '0px',
          height: weex.config.env.deviceHeight / weex.config.env.deviceWidth * 750 + 'px'
        };
      } else if (animationType === 'model') {
        return {
          top: weex.config.env.deviceHeight / weex.config.env.deviceWidth * 750 + 'px',
          left: '0px',
          height: weex.config.env.deviceHeight / weex.config.env.deviceWidth * 750 + 'px'
        };
      }
      return {};
    }
  }
};

exports.default = Utils;

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initIconfont = initIconfont;
exports.setPageTitle = setPageTitle;
exports.setOgImage = setOgImage;
exports.getEntryUrl = getEntryUrl;
exports.getUrlSearch = getUrlSearch;
exports.isEmpty = isEmpty;
exports.whichPlatform = whichPlatform;
exports.getStorageValue = getStorageValue;
exports.setStorageVal = setStorageVal;
exports.getStorageVal = getStorageVal;
exports.setStorageValue = setStorageValue;
exports.postMessage = postMessage;
exports.receiveMessage = receiveMessage;
exports.modalDebug = modalDebug;
exports.getUrlKey = getUrlKey;
function initIconfont() {
  var domModule = weex.requireModule('dom');
  domModule.addRule('fontFace', {
    fontFamily: 'iconfont',
    src: "url('https://at.alicdn.com/t/font_707137_i0keyt6zb4q.ttf')"
  });
}

function setPageTitle(title) {
  // if (document) {
  //   document.title = title || '页面'
  // }
}

function setOgImage(imgUrl) {
  document.querySelector('meta[property="og:image"]').setAttribute('content', imgUrl || '');
}

function getEntryUrl(filename, parameters) {
  var bundleUrl = weex.config.bundleUrl;

  // const host = /\/\/([^/]+?)\//.exec(bundleUrl)[0]

  var isAndroidAssets = bundleUrl.indexOf('your_current_IP') >= 0 || bundleUrl.indexOf('file://assets/') >= 0;
  var isiOSAssets = bundleUrl.indexOf('file:///') >= 0 && bundleUrl.indexOf('.app') > 0;

  var isWeb = weex.config.env.platform.toLowerCase() === 'web';
  var url = '';
  if (isWeb) {
    url = '/' + filename + '.html';
    if (parameters) {
      url += '?';
      var ps = [];
      for (var key in parameters) {
        if (parameters.hasOwnProperty(key)) {
          var val = parameters[key];
          ps.push(key + '=' + val);
        }
      }
      url += ps.join('&');
    }
  } else {
    if (isiOSAssets || isAndroidAssets) {
      url = bundleUrl.split('bundlejs')[0] + '/bundlejs/' + filename + '.js';
      console.log('getEntryUrl, ios', url);
    } else {
      url = bundleUrl.split('/dist')[0] + '/dist/' + filename + '.js';
    }
  }
  return url;
}

function getUrlSearch(url, name) {
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
  var r = url.slice(url.indexOf('?') + 1).match(reg);
  if (r != null) {
    try {
      return decodeURIComponent(r[2]);
    } catch (_e) {
      return null;
    }
  }
  return null;
}

function isEmpty(obj) {
  if (obj == null || obj == '' || obj == 'undefined' || obj == 'null') {
    return true;
  }
  if (obj.length > 0) return false;
  if (obj.length === 0) return true;
  for (var key in obj) {
    if (hasOwnProperty.call(obj, key)) return false;
  }
  return true;
}

function whichPlatform() {
  return weex.config.env.platform.toLowerCase();
}
var modal = weex.requireModule('modal');
function getStorageValue(key) {
  var storage = weex.requireModule('storage');
  var storageVal = '';
  storage.getItem(key, function (e) {
    console.log(e);
    if (e.result == 'success') {
      storageVal = e.data;
    }
  });
  return storageVal;
}

function setStorageVal(key, val) {
  modalDebug(key + val);
  return new Promise(function (resolve, reject) {
    modalDebug('promise...');
    var storage = weex.requireModule('storage');
    storage.setItem(key, val, function (e) {
      modalDebug('setItem result:' + JSON.stringify(e));
      if (e.result == 'success') {
        resolve(e.result);
      } else {
        reject(e);
      }
    });
  });
}

function getStorageVal(key) {
  return new Promise(function (resolve, reject) {
    var storage = weex.requireModule('storage');
    var storageVal = '';
    storage.getItem(key, function (e) {
      console.log('getStorageVal', e);
      if (e.result == 'success') {
        storageVal = e.data;
        resolve(storageVal);
      } else {
        reject(e);
      }
    });
  });
}

function setStorageValue(key, val) {
  var storage = weex.requireModule('storage');
  storage.setItem(key, val, function (e) {
    if (e.result == 'success' && e.data == 'undefined') {
      console.log('setStorageValue', e);
      return true;
    }
    return false;
  });
}

function postMessage(key, val) {
  if (whichPlatform() === 'web') {
    var storage = weex.requireModule('storage');
    storage.setItem(key, val, function (e) {
      console.info('发送消息', key, val, e);
      if (e.result == 'success' && e.data == 'undefined') {
        return true;
      } else {
        return false;
      }
    });
  } else {
    console.log('postMessage start', key, val);
    var a = new BroadcastChannel(key);
    a.postMessage(val);
    console.log('postMessage over', key, val);
  }
}

function receiveMessage(key, success) {
  var data = {
    status: 1,
    val: undefined
  };
  console.log(key, whichPlatform());
  var b = new BroadcastChannel(key);
  b.onmessage = function (event) {
    console.log('b.onmessage', key, event);
    if (event.data) {
      data.val = event.data;
    }
    data.status = 0;
    success(data);
    console.log('接收消息返回', data);
  };
}

function modalDebug() {
  var info = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  if (false) {
    var _modal = weex.requireModule('modal');
    _modal.toast({
      message: info,
      duration: 3
    });
  }
}

function getUrlKey(name) {
  return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.href) || [, ''])[1].replace(/\+/g, '%20')) || null;
}

/***/ }),

/***/ 132:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(133)
)

/* script */
__vue_exports__ = __webpack_require__(134)

/* template */
var __vue_template__ = __webpack_require__(135)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Volumes/code/way/way-app-ios/src/views/user/login.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-b149b182"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__
module.exports.el = 'true'
new Vue(module.exports)


/***/ }),

/***/ 133:
/***/ (function(module, exports) {

module.exports = {
  "iconfont": {
    "fontFamily": "iconfont",
    "fontSize": "32",
    "fontStyle": "normal"
  },
  "scroller": {
    "flex": 1
  },
  "title": {
    "marginTop": "300",
    "marginLeft": "275",
    "width": "200",
    "height": "30",
    "flexDirection": "row",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "title_text": {
    "fontSize": "80",
    "fontWeight": "bold"
  },
  "content": {
    "marginTop": "50",
    "paddingTop": "24",
    "paddingRight": "24",
    "paddingLeft": "24"
  },
  "input": {
    "fontSize": "40",
    "height": "88",
    "borderWidth": "1",
    "borderStyle": "solid",
    "borderColor": "#a5a5a5",
    "borderRadius": "12"
  },
  "user_agreement": {
    "fontSize": "22",
    "color": "#a5a5a5"
  },
  "link": {
    "color": "#2395ff"
  },
  "center-text": {
    "position": "absolute",
    "bottom": 25,
    "left": 172,
    "right": 172,
    "textAlign": "center",
    "fontSize": 36,
    "fontWeight": "bold"
  }
}

/***/ }),

/***/ 134:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _wxcDialog = __webpack_require__(35);

var _wxcDialog2 = _interopRequireDefault(_wxcDialog);

var _wxcButton = __webpack_require__(19);

var _wxcButton2 = _interopRequireDefault(_wxcButton);

var _utils3 = __webpack_require__(1);

var _http = __webpack_require__(5);

var _category = __webpack_require__(29);

var _category2 = _interopRequireDefault(_category);

var _navbar = __webpack_require__(6);

var _navbar2 = _interopRequireDefault(_navbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var navigator = weex.requireModule("navigator"); //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var storage = weex.requireModule("storage");
var modal = weex.requireModule("modal");

exports.default = {
  components: { WxcButton: _wxcButton2.default, WxcDialog: _wxcDialog2.default, navbar: _navbar2.default },
  data: function data() {
    return {
      userTel: "",
      userValidCode: "",
      userName: "",
      userPasword: "",
      btnGetValidCodeText: "获取验证码",
      btnGetValidCodeDisabled: false,
      btnGetValidCodeDisabledTime: 120,

      dialogContent: "",
      dialogShow: false,
      loginTab: 1
    };
  },
  created: function created() {
    (0, _utils3.initIconfont)();
    (0, _utils3.setPageTitle)("登录");
    var pageHeight = _utils2.default.env.getPageHeight();
    var screenHeight = _utils2.default.env.getScreenHeight();
    this.scrollerStyle = { marginTop: screenHeight - pageHeight + 'px' };
  },

  methods: {
    userTelOninput: function userTelOninput(event) {
      this.userTel = event.value;
      console.log("oninput", event.value);
    },
    userNameOninput: function userNameOninput(event) {
      this.userName = event.value;
      console.log("userName", this.userName);
    },
    userPasswordOninput: function userPasswordOninput(event) {
      this.userPasword = event.value;
      console.log("userPasword", this.userPasword);
    },

    userValidCodeOninput: function userValidCodeOninput(event) {
      this.userValidCode = event.value;
      console.log("oninput", event.value);
    },
    userValidCodeClicked: function userValidCodeClicked(e) {
      var _this2 = this;

      if ((0, _utils3.isEmpty)(this.userTel)) {
        this.dialogContent = "请输入手机号";
        this.dialogShow = true;
        return;
      } else {
        var mobile_mode = /^1[34578]\d{9}$/;
        if (!mobile_mode.test(this.userTel)) {
          this.dialogContent = "手机号格式不正确";
          this.dialogShow = true;
          return;
        }
      }

      var _this = this;
      (0, _http.http)({
        method: "POST",
        url: "/user/validCode",
        headers: {},
        body: {
          userTel: this.userTel
        }
      }).then(function (data) {
        console.log("success", data);
        if (data.code != 200) {
          _this.dialogContent = data.msg;
          _this.dialogShow = true;
        }
      }, function (error) {
        console.error("failure", error);
      });

      this.btnGetValidCodeDisabled = true;
      var interval = setInterval(function () {
        _this2.btnGetValidCodeText = "已发送（" + --_this2.btnGetValidCodeDisabledTime + "）";
        console.debug(_this2.btnGetValidCodeDisabled, _this2.btnGetValidCodeText, _this2.btnGetValidCodeDisabledTime);
        if (_this2.btnGetValidCodeDisabledTime === 0) {
          _this2.btnGetValidCodeDisabled = false;
          _this2.btnGetValidCodeText = "获取验证码";
          _this2.btnGetValidCodeDisabledTime = 120;
          clearInterval(interval);
        }
      }, 1000);
    },
    userTelLoginClicked: function userTelLoginClicked(e) {
      if ((0, _utils3.isEmpty)(this.userTel) || (0, _utils3.isEmpty)(this.userValidCode)) {
        return;
      } else {
        var code_mode = /\d{6}$/;
        if (!code_mode.test(this.userValidCode)) {
          this.dialogContent = "验证码格式不正确";
          this.dialogShow = true;
          return;
        }
      }

      var _this = this;
      (0, _http.http)({
        method: "POST",
        url: "/user/login",
        headers: {},
        body: {
          userTel: this.userTel,
          validCode: this.userValidCode
        }
      }).then(function (data) {
        console.log("success", data);
        if (data.code != 200) {
          _this.dialogContent = data.msg;
          _this.dialogShow = true;
          return;
        }

        (0, _utils3.modalDebug)(JSON.stringify(data));

        var userProfile = data.data;
        (0, _utils3.setStorageVal)("way:user", JSON.stringify({
          userLoginId: userProfile.userLoginId,
          userNickName: userProfile.userNickName,
          userToken: userProfile.token
        })).then(function (data) {
          (0, _utils3.modalDebug)("setStorageVal");
          var tabIndex = (0, _utils3.getUrlKey)("tabIndex");
          (0, _utils3.postMessage)("way:tab:selectedIndex", tabIndex ? tabIndex : 0);
          navigator.pop({
            animated: "true"
          });
        }, function (error) {
          var modal = weex.requireModule("modal");
          modal.toast({
            message: error,
            duration: 3
          });
        });
      }, function (error) {
        console.error("failure", error);
      });

      console.log(this.userTel, this.userValidCode);
    },
    dialogConfirmBtnClicked: function dialogConfirmBtnClicked(e) {
      this.dialogContent = "";
      this.dialogShow = false;
    },
    clickUserAgreement: function clickUserAgreement() {
      navigator.push({
        url: (0, _utils3.getEntryUrl)("views/user/agreements"),
        animated: 'true'
      });
    },
    userNameLoginClicked: function userNameLoginClicked() {
      if ((0, _utils3.isEmpty)(this.userName) || (0, _utils3.isEmpty)(this.userPasword)) {
        modal.toast({
          message: "用户名和密码必须填写",
          duration: 1.5
        });
        return;
      }

      var _this = this;
      (0, _http.http)({
        method: "POST",
        url: "/user/signin",
        headers: {},
        body: {
          userLoginName: this.userName,
          userLoginPassword: this.userPasword
        }
      }).then(function (data) {
        console.log("success", data);
        if (data.code != 200) {
          _this.dialogContent = data.msg;
          _this.dialogShow = true;
          return;
        }

        (0, _utils3.modalDebug)(JSON.stringify(data));

        var userProfile = data.data;
        (0, _utils3.setStorageVal)("way:user", JSON.stringify({
          userLoginId: userProfile.userLoginId,
          userNickName: userProfile.userNickName,
          userToken: userProfile.token
        })).then(function (data) {
          (0, _utils3.modalDebug)("setStorageVal");
          (0, _utils3.postMessage)("m:way:login", 'success');
          navigator.pop({
            animated: "true"
          });
        }, function (error) {
          modal.toast({
            message: error,
            duration: 3
          });
        });
      }, function (error) {
        console.error("failure", error);
      });

      console.log(this.userTel, this.userValidCode);
    }
  }
};

/***/ }),

/***/ 135:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('navbar', {
    attrs: {
      "title": "登录",
      "backgroundColor": "#45b5f0",
      "height": "88"
    }
  }), _c('scroller', {
    staticClass: ["scroller"],
    style: _vm.scrollerStyle
  }, [(_vm.loginTab == 0) ? _c('div', {
    staticClass: ["content"]
  }, [_c('div', [_c('input', {
    staticClass: ["input"],
    staticStyle: {
      width: "702px"
    },
    attrs: {
      "type": "tel",
      "maxlength": "11",
      "returnKeyType": "done",
      "placeholder": "手机号"
    },
    on: {
      "input": _vm.userTelOninput
    }
  })]), _c('div', {
    staticStyle: {
      flexDirection: "row",
      marginTop: "20px"
    }
  }, [_c('input', {
    staticClass: ["input"],
    staticStyle: {
      width: "351px"
    },
    attrs: {
      "type": "number",
      "maxlength": "6",
      "autoAppear": "false",
      "returnKeyType": "go",
      "placeholder": "验证码"
    },
    on: {
      "input": _vm.userValidCodeOninput
    }
  }), _c('wxc-button', {
    attrs: {
      "text": _vm.btnGetValidCodeText,
      "type": "white",
      "btnStyle": {
        width: '341px',
        marginLeft: '10px'
      },
      "disabled": _vm.btnGetValidCodeDisabled
    },
    on: {
      "wxcButtonClicked": _vm.userValidCodeClicked
    }
  })], 1)]) : _c('div', {
    staticClass: ["content"]
  }, [_c('div', [_c('input', {
    staticClass: ["input"],
    staticStyle: {
      width: "702px"
    },
    attrs: {
      "type": "text",
      "maxlength": "16",
      "returnKeyType": "done",
      "placeholder": "用户名"
    },
    on: {
      "input": _vm.userNameOninput
    }
  })]), _c('div', {
    staticStyle: {
      flexDirection: "row",
      marginTop: "20px"
    }
  }, [_c('input', {
    staticClass: ["input"],
    staticStyle: {
      width: "702px"
    },
    attrs: {
      "type": "password",
      "maxlength": "16",
      "returnKeyType": "go",
      "placeholder": "密码"
    },
    on: {
      "input": _vm.userPasswordOninput
    }
  })])]), (_vm.loginTab == 0) ? _c('div', {
    staticStyle: {
      alignItems: "center",
      marginTop: "20px"
    }
  }, [_c('wxc-button', {
    attrs: {
      "type": "blue",
      "text": "登录"
    },
    on: {
      "wxcButtonClicked": _vm.userTelLoginClicked
    }
  })], 1) : _c('div', {
    staticStyle: {
      alignItems: "center",
      marginTop: "20px"
    }
  }, [_c('wxc-button', {
    attrs: {
      "type": "blue",
      "text": "登录"
    },
    on: {
      "wxcButtonClicked": _vm.userNameLoginClicked
    }
  })], 1), _c('div', {
    staticStyle: {
      flexDirection: "row",
      marginTop: "20px",
      justifyContent: "center"
    }
  }, [_c('text', {
    staticClass: ["user_agreement"]
  }, [_vm._v(" 首次登录即代表注册，并且同意 ")]), _c('text', {
    staticClass: ["user_agreement", "link"],
    on: {
      "click": function($event) {
        _vm.clickUserAgreement()
      }
    }
  }, [_vm._v("《用户服务协议》 ")])])]), _c('wxc-dialog', {
    attrs: {
      "title": "提示",
      "content": _vm.dialogContent,
      "show": _vm.dialogShow,
      "single": true
    },
    on: {
      "wxcDialogConfirmBtnClicked": _vm.dialogConfirmBtnClicked
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(25);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ 16:
/***/ (function(module, exports) {

module.exports = {
  "category": {
    "marginTop": "20",
    "paddingLeft": "24",
    "width": "750",
    "height": "68",
    "backgroundColor": "#f2f3f4",
    "justifyContent": "center"
  },
  "category-text": {
    "color": "#000000",
    "fontWeight": "600",
    "fontSize": "28"
  }
}

/***/ }),

/***/ 17:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  props: {
    title: String
  }
};

/***/ }),

/***/ 18:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["category"]
  }, [_c('text', {
    staticClass: ["category-text"]
  }, [_vm._v(_vm._s(_vm.title))])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 19:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(20);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var required = __webpack_require__(3),
    qs = __webpack_require__(4),
    protocolre = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i,
    slashes = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//;

/**
 * These are the parse rules for the URL parser, it informs the parser
 * about:
 *
 * 0. The char it Needs to parse, if it's a string it should be done using
 *    indexOf, RegExp using exec and NaN means set as current value.
 * 1. The property we should set when parsing this value.
 * 2. Indication if it's backwards or forward parsing, when set as number it's
 *    the value of extra chars that should be split off.
 * 3. Inherit from location if non existing in the parser.
 * 4. `toLowerCase` the resulting value.
 */
var rules = [['#', 'hash'], // Extract from the back.
['?', 'query'], // Extract from the back.
['/', 'pathname'], // Extract from the back.
['@', 'auth', 1], // Extract from the front.
[NaN, 'host', undefined, 1, 1], // Set left over value.
[/:(\d+)$/, 'port', undefined, 1], // RegExp the back.
[NaN, 'hostname', undefined, 1, 1] // Set left over.
];

/**
 * These properties should not be copied or inherited from. This is only needed
 * for all non blob URL's as a blob URL does not include a hash, only the
 * origin.
 *
 * @type {Object}
 * @private
 */
var ignore = { hash: 1, query: 1 };

/**
 * The location object differs when your code is loaded through a normal page,
 * Worker or through a worker using a blob. And with the blobble begins the
 * trouble as the location object will contain the URL of the blob, not the
 * location of the page where our code is loaded in. The actual origin is
 * encoded in the `pathname` so we can thankfully generate a good "default"
 * location from it so we can generate proper relative URL's again.
 *
 * @param {Object|String} loc Optional default location object.
 * @returns {Object} lolcation object.
 * @api public
 */
function lolcation(loc) {
  loc = loc || global.location || {};

  var finaldestination = {},
      type = typeof loc === 'undefined' ? 'undefined' : _typeof(loc),
      key;

  if ('blob:' === loc.protocol) {
    finaldestination = new URL(unescape(loc.pathname), {});
  } else if ('string' === type) {
    finaldestination = new URL(loc, {});
    for (key in ignore) {
      delete finaldestination[key];
    }
  } else if ('object' === type) {
    for (key in loc) {
      if (key in ignore) continue;
      finaldestination[key] = loc[key];
    }

    if (finaldestination.slashes === undefined) {
      finaldestination.slashes = slashes.test(loc.href);
    }
  }

  return finaldestination;
}

/**
 * @typedef ProtocolExtract
 * @type Object
 * @property {String} protocol Protocol matched in the URL, in lowercase.
 * @property {Boolean} slashes `true` if protocol is followed by "//", else `false`.
 * @property {String} rest Rest of the URL that is not part of the protocol.
 */

/**
 * Extract protocol information from a URL with/without double slash ("//").
 *
 * @param {String} address URL we want to extract from.
 * @return {ProtocolExtract} Extracted information.
 * @api private
 */
function extractProtocol(address) {
  var match = protocolre.exec(address);

  return {
    protocol: match[1] ? match[1].toLowerCase() : '',
    slashes: !!match[2],
    rest: match[3]
  };
}

/**
 * Resolve a relative URL pathname against a base URL pathname.
 *
 * @param {String} relative Pathname of the relative URL.
 * @param {String} base Pathname of the base URL.
 * @return {String} Resolved pathname.
 * @api private
 */
function resolve(relative, base) {
  var path = (base || '/').split('/').slice(0, -1).concat(relative.split('/')),
      i = path.length,
      last = path[i - 1],
      unshift = false,
      up = 0;

  while (i--) {
    if (path[i] === '.') {
      path.splice(i, 1);
    } else if (path[i] === '..') {
      path.splice(i, 1);
      up++;
    } else if (up) {
      if (i === 0) unshift = true;
      path.splice(i, 1);
      up--;
    }
  }

  if (unshift) path.unshift('');
  if (last === '.' || last === '..') path.push('');

  return path.join('/');
}

/**
 * The actual URL instance. Instead of returning an object we've opted-in to
 * create an actual constructor as it's much more memory efficient and
 * faster and it pleases my OCD.
 *
 * @constructor
 * @param {String} address URL we want to parse.
 * @param {Object|String} location Location defaults for relative paths.
 * @param {Boolean|Function} parser Parser for the query string.
 * @api public
 */
function URL(address, location, parser) {
  if (!(this instanceof URL)) {
    return new URL(address, location, parser);
  }

  var relative,
      extracted,
      parse,
      instruction,
      index,
      key,
      instructions = rules.slice(),
      type = typeof location === 'undefined' ? 'undefined' : _typeof(location),
      url = this,
      i = 0;

  //
  // The following if statements allows this module two have compatibility with
  // 2 different API:
  //
  // 1. Node.js's `url.parse` api which accepts a URL, boolean as arguments
  //    where the boolean indicates that the query string should also be parsed.
  //
  // 2. The `URL` interface of the browser which accepts a URL, object as
  //    arguments. The supplied object will be used as default values / fall-back
  //    for relative paths.
  //
  if ('object' !== type && 'string' !== type) {
    parser = location;
    location = null;
  }

  if (parser && 'function' !== typeof parser) parser = qs.parse;

  location = lolcation(location);

  //
  // Extract protocol information before running the instructions.
  //
  extracted = extractProtocol(address || '');
  relative = !extracted.protocol && !extracted.slashes;
  url.slashes = extracted.slashes || relative && location.slashes;
  url.protocol = extracted.protocol || location.protocol || '';
  address = extracted.rest;

  //
  // When the authority component is absent the URL starts with a path
  // component.
  //
  if (!extracted.slashes) instructions[2] = [/(.*)/, 'pathname'];

  for (; i < instructions.length; i++) {
    instruction = instructions[i];
    parse = instruction[0];
    key = instruction[1];

    if (parse !== parse) {
      url[key] = address;
    } else if ('string' === typeof parse) {
      if (~(index = address.indexOf(parse))) {
        if ('number' === typeof instruction[2]) {
          url[key] = address.slice(0, index);
          address = address.slice(index + instruction[2]);
        } else {
          url[key] = address.slice(index);
          address = address.slice(0, index);
        }
      }
    } else if (index = parse.exec(address)) {
      url[key] = index[1];
      address = address.slice(0, index.index);
    }

    url[key] = url[key] || (relative && instruction[3] ? location[key] || '' : '');

    //
    // Hostname, host and protocol should be lowercased so they can be used to
    // create a proper `origin`.
    //
    if (instruction[4]) url[key] = url[key].toLowerCase();
  }

  //
  // Also parse the supplied query string in to an object. If we're supplied
  // with a custom parser as function use that instead of the default build-in
  // parser.
  //
  if (parser) url.query = parser(url.query);

  //
  // If the URL is relative, resolve the pathname against the base URL.
  //
  if (relative && location.slashes && url.pathname.charAt(0) !== '/' && (url.pathname !== '' || location.pathname !== '')) {
    url.pathname = resolve(url.pathname, location.pathname);
  }

  //
  // We should not add port numbers if they are already the default port number
  // for a given protocol. As the host also contains the port number we're going
  // override it with the hostname which contains no port number.
  //
  if (!required(url.port, url.protocol)) {
    url.host = url.hostname;
    url.port = '';
  }

  //
  // Parse down the `auth` for the username and password.
  //
  url.username = url.password = '';
  if (url.auth) {
    instruction = url.auth.split(':');
    url.username = instruction[0] || '';
    url.password = instruction[1] || '';
  }

  url.origin = url.protocol && url.host && url.protocol !== 'file:' ? url.protocol + '//' + url.host : 'null';

  //
  // The href is just the compiled result.
  //
  url.href = url.toString();
}

/**
 * This is convenience method for changing properties in the URL instance to
 * insure that they all propagate correctly.
 *
 * @param {String} part          Property we need to adjust.
 * @param {Mixed} value          The newly assigned value.
 * @param {Boolean|Function} fn  When setting the query, it will be the function
 *                               used to parse the query.
 *                               When setting the protocol, double slash will be
 *                               removed from the final url if it is true.
 * @returns {URL}
 * @api public
 */
function set(part, value, fn) {
  var url = this;

  switch (part) {
    case 'query':
      if ('string' === typeof value && value.length) {
        value = (fn || qs.parse)(value);
      }

      url[part] = value;
      break;

    case 'port':
      url[part] = value;

      if (!required(value, url.protocol)) {
        url.host = url.hostname;
        url[part] = '';
      } else if (value) {
        url.host = url.hostname + ':' + value;
      }

      break;

    case 'hostname':
      url[part] = value;

      if (url.port) value += ':' + url.port;
      url.host = value;
      break;

    case 'host':
      url[part] = value;

      if (/:\d+$/.test(value)) {
        value = value.split(':');
        url.port = value.pop();
        url.hostname = value.join(':');
      } else {
        url.hostname = value;
        url.port = '';
      }

      break;

    case 'protocol':
      url.protocol = value.toLowerCase();
      url.slashes = !fn;
      break;

    case 'pathname':
    case 'hash':
      if (value) {
        var char = part === 'pathname' ? '/' : '#';
        url[part] = value.charAt(0) !== char ? char + value : value;
      } else {
        url[part] = value;
      }
      break;

    default:
      url[part] = value;
  }

  for (var i = 0; i < rules.length; i++) {
    var ins = rules[i];

    if (ins[4]) url[ins[1]] = url[ins[1]].toLowerCase();
  }

  url.origin = url.protocol && url.host && url.protocol !== 'file:' ? url.protocol + '//' + url.host : 'null';

  url.href = url.toString();

  return url;
}

/**
 * Transform the properties back in to a valid and full URL string.
 *
 * @param {Function} stringify Optional query stringify function.
 * @returns {String}
 * @api public
 */
function toString(stringify) {
  if (!stringify || 'function' !== typeof stringify) stringify = qs.stringify;

  var query,
      url = this,
      protocol = url.protocol;

  if (protocol && protocol.charAt(protocol.length - 1) !== ':') protocol += ':';

  var result = protocol + (url.slashes ? '//' : '');

  if (url.username) {
    result += url.username;
    if (url.password) result += ':' + url.password;
    result += '@';
  }

  result += url.host + url.pathname;

  query = 'object' === _typeof(url.query) ? stringify(url.query) : url.query;
  if (query) result += '?' !== query.charAt(0) ? '?' + query : query;

  if (url.hash) result += url.hash;

  return result;
}

URL.prototype = { set: set, toString: toString };

//
// Expose the URL parser and some additional properties that might be useful for
// others or testing.
//
URL.extractProtocol = extractProtocol;
URL.location = lolcation;
URL.qs = qs;

module.exports = URL;

/***/ }),

/***/ 20:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(21)
)

/* script */
__vue_exports__ = __webpack_require__(22)

/* template */
var __vue_template__ = __webpack_require__(24)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Volumes/code/way/way-app-ios/node_modules/weex-ui/packages/wxc-button/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-6273a8fc"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),

/***/ 21:
/***/ (function(module, exports) {

module.exports = {
  "wxc-btn": {
    "width": "702",
    "height": "88",
    "alignItems": "center",
    "justifyContent": "center",
    "borderRadius": "12",
    "opacity": 1
  },
  "btn-text": {
    "textOverflow": "ellipsis",
    "lines": 1,
    "fontSize": "36",
    "color": "#ffffff"
  }
}

/***/ }),

/***/ 22:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; //
//
//
//
//
//
//
//
//
//
//
//
//

var _type = __webpack_require__(23);

exports.default = {
  props: {
    text: {
      type: String,
      default: '确认'
    },
    size: {
      type: String,
      default: 'none'
    },
    type: {
      type: String,
      default: 'red'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    btnStyle: Object,
    textStyle: Object,
    disabledStyle: Object
  },
  computed: {
    mrBtnStyle: function mrBtnStyle() {
      var type = this.type,
          disabled = this.disabled,
          btnStyle = this.btnStyle,
          size = this.size,
          disabledStyle = this.disabledStyle;


      var mrBtnStyle = _extends({}, _type.STYLE_MAP[type], btnStyle, _type.BUTTON_STYLE_MAP[size]);

      var disabledInStyle = { opacity: 0.2 };
      if (type === 'white') {
        disabledInStyle = { backgroundColor: 'rgba(0, 0, 0, 0.1)' };
      }

      return disabled ? _extends({}, mrBtnStyle, disabledInStyle, disabledStyle, {
        borderWidth: 0
      }) : mrBtnStyle;
    },
    mrTextStyle: function mrTextStyle() {
      var type = this.type,
          disabled = this.disabled,
          textStyle = this.textStyle,
          size = this.size;

      var mrTextStyle = _extends({}, _type.TEXT_STYLE_MAP[type], textStyle, _type.TEXT_FONTSIZE_STYLE_MAP[size]);
      return disabled ? _extends({}, mrTextStyle, { color: '#FFFFFF' }) : mrTextStyle;
    }
  },
  methods: {
    onClicked: function onClicked(e) {
      var type = this.type,
          disabled = this.disabled;

      this.$emit('wxcButtonClicked', { e: e, type: type, disabled: disabled });
    }
  }
};

/***/ }),

/***/ 23:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var STYLE_MAP = exports.STYLE_MAP = {
  red: {
    backgroundColor: '#FF5000'
  },
  yellow: {
    backgroundColor: '#FFC900'
  },
  white: {
    backgroundColor: '#FFFFFF',
    borderColor: '#A5A5A5',
    borderWidth: '1px'
  },
  blue: {
    backgroundColor: '#0F8DE8'
  },
  green: {
    backgroundColor: '#19be6b'
  }
};

var TEXT_STYLE_MAP = exports.TEXT_STYLE_MAP = {
  red: {
    color: '#FFFFFF'
  },
  yellow: {
    color: '#FFFFFF'
  },
  blue: {
    color: '#FFFFFF'
  },
  white: {
    color: '#3D3D3D'
  },
  green: {
    color: '#FFFFFF'
  }
};

var BUTTON_STYLE_MAP = exports.BUTTON_STYLE_MAP = {
  full: {
    width: '702px',
    height: '88px'
  },
  big: {
    width: '339px',
    height: '70px'
  },
  medium: {
    width: '218px',
    height: '60px'
  },
  small: {
    width: '157px',
    height: '44px'
  }
};

var TEXT_FONTSIZE_STYLE_MAP = exports.TEXT_FONTSIZE_STYLE_MAP = {
  full: {
    fontSize: '36px'
  },
  big: {
    fontSize: '32px'
  },
  medium: {
    fontSize: '28px'
  },
  small: {
    fontSize: '24px'
  }
};

/***/ }),

/***/ 24:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wxc-btn"],
    style: _vm.mrBtnStyle,
    attrs: {
      "accessible": true,
      "ariaLabel": _vm.text
    },
    on: {
      "click": _vm.onClicked
    }
  }, [_c('text', {
    staticClass: ["btn-text"],
    style: _vm.mrTextStyle
  }, [_vm._v(_vm._s(_vm.text))])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 25:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(26)
)

/* script */
__vue_exports__ = __webpack_require__(27)

/* template */
var __vue_template__ = __webpack_require__(28)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Volumes/code/way/way-app-ios/node_modules/weex-ui/packages/wxc-overlay/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-389bbc1c"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),

/***/ 26:
/***/ (function(module, exports) {

module.exports = {
  "wxc-overlay": {
    "width": "750",
    "position": "fixed",
    "left": 0,
    "top": 0,
    "bottom": 0,
    "right": 0
  }
}

/***/ }),

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var animation = weex.requireModule('animation');
exports.default = {
  props: {
    show: {
      type: Boolean,
      default: true
    },
    hasAnimation: {
      type: Boolean,
      default: true
    },
    duration: {
      type: [Number, String],
      default: 300
    },
    timingFunction: {
      type: Array,
      default: function _default() {
        return ['ease-in', 'ease-out'];
      }
    },
    opacity: {
      type: [Number, String],
      default: 0.6
    },
    canAutoClose: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    overlayStyle: function overlayStyle() {
      return {
        opacity: this.hasAnimation ? 0 : 1,
        backgroundColor: 'rgba(0, 0, 0,' + this.opacity + ')'
      };
    },
    shouldShow: function shouldShow() {
      var _this = this;

      var show = this.show,
          hasAnimation = this.hasAnimation;

      hasAnimation && setTimeout(function () {
        _this.appearOverlay(show);
      }, 50);
      return show;
    }
  },
  methods: {
    overlayClicked: function overlayClicked(e) {
      this.canAutoClose ? this.appearOverlay(false) : this.$emit('wxcOverlayBodyClicked', {});
    },
    appearOverlay: function appearOverlay(bool) {
      var _this2 = this;

      var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.duration;
      var hasAnimation = this.hasAnimation,
          timingFunction = this.timingFunction,
          canAutoClose = this.canAutoClose;

      var needEmit = !bool && canAutoClose;
      needEmit && this.$emit('wxcOverlayBodyClicking', {});
      var overlayEl = this.$refs['wxc-overlay'];
      if (hasAnimation && overlayEl) {
        animation.transition(overlayEl, {
          styles: {
            opacity: bool ? 1 : 0
          },
          duration: duration,
          timingFunction: timingFunction[bool ? 0 : 1],
          delay: 0
        }, function () {
          needEmit && _this2.$emit('wxcOverlayBodyClicked', {});
        });
      } else {
        needEmit && this.$emit('wxcOverlayBodyClicked', {});
      }
    }
  }
};

/***/ }),

/***/ 28:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(_vm.show) ? _c('div', {
    ref: "wxc-overlay",
    staticClass: ["wxc-overlay"],
    style: _vm.overlayStyle,
    attrs: {
      "hack": _vm.shouldShow
    },
    on: {
      "click": _vm.overlayClicked
    }
  }) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(16)
)

/* script */
__vue_exports__ = __webpack_require__(17)

/* template */
var __vue_template__ = __webpack_require__(18)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Volumes/code/way/way-app-ios/src/components/category.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-376cda0e"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Check if we're required to add a port number.
 *
 * @see https://url.spec.whatwg.org/#default-port
 * @param {Number|String} port Port number we need to check
 * @param {String} protocol Protocol we need to check against.
 * @returns {Boolean} Is it a default port for the given protocol
 * @api private
 */

module.exports = function required(port, protocol) {
  protocol = protocol.split(':')[0];
  port = +port;

  if (!port) return false;

  switch (protocol) {
    case 'http':
    case 'ws':
      return port !== 80;

    case 'https':
    case 'wss':
      return port !== 443;

    case 'ftp':
      return port !== 21;

    case 'gopher':
      return port !== 70;

    case 'file':
      return false;
  }

  return port !== 0;
};

/***/ }),

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(36);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(37)
)

/* script */
__vue_exports__ = __webpack_require__(38)

/* template */
var __vue_template__ = __webpack_require__(40)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Volumes/code/way/way-app-ios/node_modules/weex-ui/packages/wxc-dialog/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-b50148dc"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),

/***/ 37:
/***/ (function(module, exports) {

module.exports = {
  "container": {
    "position": "fixed",
    "width": "750",
    "zIndex": 99999
  },
  "dialog-box": {
    "position": "fixed",
    "left": "96",
    "width": "558",
    "backgroundColor": "#FFFFFF"
  },
  "dialog-content": {
    "paddingTop": "36",
    "paddingBottom": "36",
    "paddingLeft": "36",
    "paddingRight": "36"
  },
  "content-title": {
    "color": "#333333",
    "fontSize": "36",
    "textAlign": "center",
    "marginBottom": "24"
  },
  "content-subtext": {
    "color": "#666666",
    "fontSize": "26",
    "lineHeight": "36",
    "textAlign": "center"
  },
  "dialog-footer": {
    "flexDirection": "row",
    "alignItems": "center",
    "borderTopColor": "#F3F3F3",
    "borderTopWidth": "1"
  },
  "footer-btn": {
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "center",
    "flex": 1,
    "height": "90"
  },
  "cancel": {
    "borderRightColor": "#F3F3F3",
    "borderRightWidth": "1"
  },
  "btn-text": {
    "fontSize": "36",
    "color": "#666666"
  },
  "no-prompt": {
    "width": "486",
    "alignItems": "center",
    "justifyContent": "center",
    "flexDirection": "row",
    "marginTop": "24"
  },
  "no-prompt-icon": {
    "width": "24",
    "height": "24",
    "marginRight": "12"
  },
  "no-prompt-text": {
    "fontSize": "24",
    "color": "#A5A5A5"
  }
}

/***/ }),

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _wxcOverlay = __webpack_require__(15);

var _wxcOverlay2 = _interopRequireDefault(_wxcOverlay);

var _type = __webpack_require__(39);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  components: { WxcOverlay: _wxcOverlay2.default },
  props: {
    show: {
      type: Boolean,
      default: false
    },
    single: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    },
    top: {
      type: Number,
      default: 400
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    confirmText: {
      type: String,
      default: '确定'
    },
    mainBtnColor: {
      type: String,
      default: '#EE9900'
    },
    secondBtnColor: {
      type: String,
      default: '#666666'
    },
    showNoPrompt: {
      type: Boolean,
      default: false
    },
    noPromptText: {
      type: String,
      default: '不再提示'
    },
    isChecked: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      noPromptIcon: _type.UN_CHECKED,
      pageHeight: 1334
    };
  },
  created: function created() {
    var _weex$config$env = weex.config.env,
        deviceHeight = _weex$config$env.deviceHeight,
        deviceWidth = _weex$config$env.deviceWidth;

    this.pageHeight = deviceHeight / deviceWidth * 750;
  },

  methods: {
    secondaryClicked: function secondaryClicked() {
      this.$emit('wxcDialogCancelBtnClicked', {
        type: 'cancel'
      });
    },
    primaryClicked: function primaryClicked(e) {
      this.$emit('wxcDialogConfirmBtnClicked', {
        type: 'confirm'
      });
    },
    noPromptClicked: function noPromptClicked(e) {
      var isChecked = !this.isChecked;
      this.noPromptIcon = isChecked ? _type.CHECKED : _type.UN_CHECKED;
      this.$emit('wxcDialogNoPromptClicked', { isChecked: isChecked });
    }
  }
};

/***/ }),

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * CopyRight (C) 2017-2022 Alibaba Group Holding Limited.
 * Created by Tw93 on 2016/10/29.
 */

var CHECKED = exports.CHECKED = 'https://gw.alicdn.com/tfs/TB1UT3VpgMPMeJjy1XdXXasrXXa-42-42.png';
var UN_CHECKED = exports.UN_CHECKED = 'https://gw.alicdn.com/tfs/TB1hE3VpgMPMeJjy1XdXXasrXXa-42-42.png';

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = Object.prototype.hasOwnProperty;

/**
 * Decode a URI encoded string.
 *
 * @param {String} input The URI encoded string.
 * @returns {String} The decoded string.
 * @api private
 */
function decode(input) {
  return decodeURIComponent(input.replace(/\+/g, ' '));
}

/**
 * Simple query string parser.
 *
 * @param {String} query The query string that needs to be parsed.
 * @returns {Object}
 * @api public
 */
function querystring(query) {
  var parser = /([^=?&]+)=?([^&]*)/g,
      result = {},
      part;

  //
  // Little nifty parsing hack, leverage the fact that RegExp.exec increments
  // the lastIndex property so we can continue executing this loop until we've
  // parsed all results.
  //
  for (; part = parser.exec(query); result[decode(part[1])] = decode(part[2])) {}

  return result;
}

/**
 * Transform a query string to an object.
 *
 * @param {Object} obj Object that should be transformed.
 * @param {String} prefix Optional prefix.
 * @returns {String}
 * @api public
 */
function querystringify(obj, prefix) {
  prefix = prefix || '';

  var pairs = [];

  //
  // Optionally prefix with a '?' if needed
  //
  if ('string' !== typeof prefix) prefix = '?';

  for (var key in obj) {
    if (has.call(obj, key)) {
      pairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
    }
  }

  return pairs.length ? prefix + pairs.join('&') : '';
}

//
// Expose the module.
//
exports.stringify = querystringify;
exports.parse = querystring;

/***/ }),

/***/ 40:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["container"]
  }, [(_vm.show) ? _c('wxc-overlay', {
    attrs: {
      "show": true,
      "hasAnimation": false
    }
  }) : _vm._e(), (_vm.show) ? _c('div', {
    staticClass: ["dialog-box"],
    style: {
      top: _vm.top + 'px'
    }
  }, [_c('div', {
    staticClass: ["dialog-content"]
  }, [_vm._t("title", [_c('text', {
    staticClass: ["content-title"]
  }, [_vm._v(_vm._s(_vm.title))])]), _vm._t("content", [_c('text', {
    staticClass: ["content-subtext"]
  }, [_vm._v(_vm._s(_vm.content))])]), (_vm.showNoPrompt) ? _c('div', {
    staticClass: ["no-prompt"],
    on: {
      "click": _vm.noPromptClicked
    }
  }, [_c('image', {
    staticClass: ["no-prompt-icon"],
    attrs: {
      "src": _vm.noPromptIcon
    }
  }), _c('text', {
    staticClass: ["no-prompt-text"]
  }, [_vm._v(_vm._s(_vm.noPromptText))])]) : _vm._e()], 2), _c('div', {
    staticClass: ["dialog-footer"]
  }, [(!_vm.single) ? _c('div', {
    staticClass: ["footer-btn", "cancel"],
    on: {
      "click": _vm.secondaryClicked
    }
  }, [_c('text', {
    staticClass: ["btn-text"],
    style: {
      color: _vm.secondBtnColor
    }
  }, [_vm._v(_vm._s(_vm.cancelText))])]) : _vm._e(), _c('div', {
    staticClass: ["footer-btn", "confirm"],
    on: {
      "click": _vm.primaryClicked
    }
  }, [_c('text', {
    staticClass: ["btn-text"],
    style: {
      color: _vm.mainBtnColor
    }
  }, [_vm._v(_vm._s(_vm.confirmText))])])])]) : _vm._e()], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.http = http;
function http() {
  var OPTIONS = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var DEFAULT_OPTION = {
    method: 'GET',
    type: 'json', // json、text、jsonp
    headers: {}
  };

  var stream = weex.requireModule('stream');
  var modal = weex.requireModule('modal');
  var platform = weex.config.env.platform.toLowerCase();

  var apiRoot = void 0;
  if (platform === 'web') {
    apiRoot = 'http://api.jicu.vip'; //window.location.origin.replace(':8081', '')
  } else {
    if (process.env === 'test') {
      // 测试环境域名
      apiRoot = window.location.origin.replace(':8081', ''); //'http://your.dev.domain.com'
    } else {
      // 正式环境域名
      apiRoot = 'http://api.jicu.vip'; //'http://your.prod.domain.com'
    }
  }

  var options = Object.assign(DEFAULT_OPTION, OPTIONS);
  options.url = apiRoot + options.url;
  if (options.method === 'GET') {
    if (options.params) {
      var paramStr = Object.keys(options.params).reduce(function (acc, key) {
        return '' + acc + key + '=' + options.params[key] + '&';
      }, '?');
      options.url = options.url.concat(paramStr).slice(0, -1);
    }
  } else if (options.method === 'POST') {
    if (options.body) {
      options.body = JSON.stringify(options.body);
      options.headers['Content-Type'] = 'application/json';
    }
  }
  console.log("请求选项", options);
  return new Promise(function (resolve, reject) {
    stream.fetch(options, function (response) {
      if (response.ok) {
        console.log('stream response', response);
        resolve(response.data);
      } else {
        modal.toast({
          message: 'Somthing error, ' + response.statusText,
          duration: 1
        });
        console.log('stream reject', response);
        reject(response);
      }
    });
  });
}

/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(7)
)

/* script */
__vue_exports__ = __webpack_require__(8)

/* template */
var __vue_template__ = __webpack_require__(9)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Volumes/code/way/way-app-ios/src/include/navbar.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-cc674820"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),

/***/ 7:
/***/ (function(module, exports) {

module.exports = {
  "container": {
    "flexDirection": "row",
    "position": "fixed",
    "top": 0,
    "left": 0,
    "right": 0,
    "width": 750
  },
  "right-text": {
    "position": "absolute",
    "bottom": 28,
    "right": 32,
    "textAlign": "right",
    "fontSize": 32,
    "fontFamily": "'Open Sans', sans-serif"
  },
  "left-text": {
    "position": "absolute",
    "bottom": 28,
    "left": 32,
    "textAlign": "left",
    "fontSize": 32,
    "fontFamily": "'Open Sans', sans-serif"
  },
  "center-text": {
    "position": "absolute",
    "bottom": 25,
    "left": 172,
    "right": 172,
    "textAlign": "center",
    "fontSize": 36,
    "fontWeight": "bold"
  },
  "left-image": {
    "position": "absolute",
    "bottom": 20,
    "left": 28,
    "width": 50,
    "height": 50
  },
  "right-image": {
    "position": "absolute",
    "bottom": 20,
    "right": 28,
    "width": 50,
    "height": 50
  }
}

/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

module.exports = {
  props: {
    dataRole: { default: 'navbar' },
    //导航条背景色
    backgroundColor: { default: 'black' },
    //导航条高度
    height: { default: 88 },
    //导航条标题 
    title: { default: '' },
    //导航条标题颜色
    titleColor: { default: 'black' },
    //右侧按钮图片
    rightItemSrc: { default: '' },
    //右侧按钮标题
    rightItemTitle: { default: '' },
    //右侧按钮标题颜色
    rightItemColor: { default: 'black' },
    //左侧按钮图片
    leftItemSrc: { default: '' },
    //左侧按钮标题
    leftItemTitle: { default: '' },
    //左侧按钮颜色
    leftItemColor: { default: 'black' }
  },
  methods: {
    onclickrightitem: function onclickrightitem(e) {
      this.$emit('naviBarRightItemClick');
    },
    onclickleftitem: function onclickleftitem(e) {
      this.$emit('naviBarLeftItemClick');
    }
  }
};

/***/ }),

/***/ 9:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["container"],
    style: {
      height: _vm.height,
      backgroundColor: _vm.backgroundColor
    },
    attrs: {
      "dataRole": _vm.dataRole
    }
  }, [(!_vm.rightItemSrc) ? _c('text', {
    staticClass: ["right-text"],
    style: {
      color: _vm.rightItemColor
    },
    attrs: {
      "naviItemPosition": "right"
    },
    on: {
      "click": _vm.onclickrightitem
    }
  }, [_vm._v(_vm._s(_vm.rightItemTitle))]) : _vm._e(), (_vm.rightItemSrc) ? _c('image', {
    staticClass: ["right-image"],
    attrs: {
      "naviItemPosition": "right",
      "src": _vm.rightItemSrc
    },
    on: {
      "click": _vm.onclickrightitem
    }
  }) : _vm._e(), (!_vm.leftItemSrc) ? _c('text', {
    staticClass: ["left-text"],
    style: {
      color: _vm.leftItemColor
    },
    attrs: {
      "naviItemPosition": "left"
    },
    on: {
      "click": _vm.onclickleftitem
    }
  }, [_vm._v(_vm._s(_vm.leftItemTitle))]) : _vm._e(), (_vm.leftItemSrc) ? _c('image', {
    staticClass: ["left-image"],
    attrs: {
      "naviItemPosition": "left",
      "src": _vm.leftItemSrc
    },
    on: {
      "click": _vm.onclickleftitem
    }
  }) : _vm._e(), _c('text', {
    staticClass: ["center-text"],
    style: {
      color: _vm.titleColor
    },
    attrs: {
      "naviItemPosition": "center",
      "value": _vm.title
    }
  })])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })

/******/ });