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
/******/ 	return __webpack_require__(__webpack_require__.s = 80);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /**
                                                                                                                                                                                                                                                                                * CopyRight (C) 2017-2022 Alibaba Group Holding Limited.
                                                                                                                                                                                                                                                                                * Created by Tw93 on 17/11/01
                                                                                                                                                                                                                                                                                */

var _urlParse = __webpack_require__(3);

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
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.http = http;
var referer = 'ios.jicu.vip';
function http() {
  var OPTIONS = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  if (!checkNetworkStatus()) {
    console.log('终止网络请求');
    return new Promise(function (resolve, reject) {
      reject({ statusText: '网络无连接' });
    });
  }
  var DEFAULT_OPTION = {
    method: 'GET',
    type: 'json', // json、text、jsonp
    headers: {}
  };

  var modal = weex.requireModule('modal');
  var stream = weex.requireModule('stream');
  var platform = weex.config.env.platform.toLowerCase();

  // 正式环境域名
  var apiRoot = 'http://api.jicu.vip'; //'http://your.prod.domain.com'
  var isProduction = "common" === 'production';
  console.log('环境显示', isProduction, platform);
  if (!isProduction && platform === 'android') {
    apiRoot = 'http://10.0.2.2';
  }

  var options = Object.assign(DEFAULT_OPTION, OPTIONS);
  options.url = apiRoot + options.url;
  options.headers['referer'] = referer;
  if (options.method === 'GET') {
    if (options.params) {
      var paramStr = Object.keys(options.params).reduce(function (acc, key) {
        return '' + acc + key + '=' + options.params[key] + '&';
      }, '?appVersion=' + getAppVersion() + '&');
      options.url = options.url.concat(paramStr).slice(0, -1);
    }
  } else if (options.method === 'POST') {
    if (options.body) {
      options.body = JSON.stringify(Object.assign(options.body, { appVerion: getAppVersion() }));
      options.headers['Content-Type'] = 'application/json';
    }
  }
  console.log('请求选项', options);
  return new Promise(function (resolve, reject) {
    stream.fetch(options, function (response) {
      if (response.ok) {
        console.log('stream response', response);
        resolve(response.data);
      } else {
        modal.toast({
          message: '\u7F51\u7EDC\u65E0\u8FDE\u63A5',
          duration: 1
        });
        console.log('stream reject', response);
        reject(response);
      }
    });
  });
}

function checkNetworkStatus() {
  var network = weex.requireModule('network');
  var ok = true;
  network.getNetworkStatus(function (statusText) {
    if (statusText === 'NONE') {
      console.log('checkNetworkStatus', '当前没有网络');
      weex.requireModule('modal').toast({
        message: '网络无连接',
        duration: 1
      });
      ok = false;
    } else {
      console.log('网络连接正常');
    }
  });
  return ok;
}

function getAppVersion() {
  var appVertionText = '';
  console.log('http.js', '获取appVersion', '开始', appVertionText);
  var isIOS = weex.config.env.platform.toLowerCase() === 'ios';
  if (!isIOS) {
    appVertionText = weex.requireModule('version').getAppVersion();
    console.log('http.js', 'app版本，appVertionText=', appVertionText);
  } else {
    weex.requireModule('version').getAppVersion(function (versionText) {
      console.log('http.js', 'app版本', versionText);
      appVertionText = versionText;
    });
  }
  console.log('http.js', '获取appVersion', '结束', appVertionText);
  return appVertionText;
}

/***/ }),
/* 2 */
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
exports.removeStorage = removeStorage;
exports.setStorageValue = setStorageValue;
exports.postMessage = postMessage;
exports.receiveMessage = receiveMessage;
exports.modalDebug = modalDebug;
exports.getUrlKey = getUrlKey;
exports.titlebar = titlebar;
function initIconfont() {
  var domModule = weex.requireModule('dom');
  domModule.addRule('fontFace', {
    fontFamily: 'iconfont',
    src: "url('local:///font/iconfont.ttf')"
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
    if (isiOSAssets) {
      url = bundleUrl.split('bundlejs')[0] + '/bundlejs/' + filename + '.js';
      console.log('getEntryUrl, ios', url);
    } else if (isAndroidAssets) {
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

function removeStorage(key) {
  return new Promise(function (resolve, reject) {
    var storage = weex.requireModule('storage');
    var storageVal = '';
    storage.removeItem(key, function (e) {
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

function titlebar(title) {
  // const isIOS = weex.config.env.platform.toLowerCase() === 'ios'
  // if (isIOS) {
  weex.requireModule('titlebar').setTitle(title);
  // }
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var required = __webpack_require__(4),
    qs = __webpack_require__(5),
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
/* 4 */
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
/* 5 */
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
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(11);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(12)
)

/* script */
__vue_exports__ = __webpack_require__(13)

/* template */
var __vue_template__ = __webpack_require__(14)
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
__vue_options__.__file = "/Volumes/code/way/way-app-ios/node_modules/weex-ui/packages/wxc-cell/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-eff0e228"
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
/* 12 */
/***/ (function(module, exports) {

module.exports = {
  "wxc-cell": {
    "flexDirection": "row",
    "alignItems": "center",
    "paddingLeft": "24",
    "paddingRight": "24",
    "backgroundColor": "#ffffff"
  },
  "cell-margin": {
    "marginBottom": "24"
  },
  "cell-title": {
    "flex": 1
  },
  "cell-indent": {
    "paddingBottom": "30",
    "paddingTop": "30"
  },
  "has-desc": {
    "paddingBottom": "18",
    "paddingTop": "18"
  },
  "cell-top-border": {
    "borderTopColor": "#e2e2e2",
    "borderTopWidth": "1"
  },
  "cell-bottom-border": {
    "borderBottomColor": "#e2e2e2",
    "borderBottomWidth": "1"
  },
  "cell-label-text": {
    "fontSize": "30",
    "color": "#666666",
    "width": "188",
    "marginRight": "10"
  },
  "cell-arrow-icon": {
    "width": "22",
    "height": "22"
  },
  "cell-content": {
    "color": "#333333",
    "fontSize": "30",
    "lineHeight": "40"
  },
  "cell-desc-text": {
    "color": "#999999",
    "fontSize": "24",
    "lineHeight": "30",
    "marginTop": "4",
    "marginRight": "30"
  },
  "extra-content-text": {
    "fontSize": "28",
    "color": "#999999",
    "marginRight": "4"
  }
}

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  props: {
    label: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    extraContent: {
      type: String,
      default: ''
    },
    desc: {
      type: String,
      default: ''
    },
    link: {
      type: String,
      default: ''
    },
    hasTopBorder: {
      type: Boolean,
      default: false
    },
    hasMargin: {
      type: Boolean,
      default: false
    },
    hasBottomBorder: {
      type: Boolean,
      default: true
    },
    hasArrow: {
      type: Boolean,
      default: false
    },
    arrowIcon: {
      type: String,
      default: 'https://gw.alicdn.com/tfs/TB11zBUpwMPMeJjy1XbXXcwxVXa-22-22.png'
    },
    hasVerticalIndent: {
      type: Boolean,
      default: true
    },
    cellStyle: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    autoAccessible: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    cellClicked: function cellClicked(e) {
      var link = this.link;
      this.$emit('wxcCellClicked', { e: e });
      link && _utils2.default.goToH5Page(link, true);
    }
  }
}; //
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

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: ['wxc-cell', _vm.hasTopBorder && 'cell-top-border', _vm.hasBottomBorder && 'cell-bottom-border', _vm.hasMargin && 'cell-margin', _vm.hasVerticalIndent && 'cell-indent', _vm.desc && 'has-desc'],
    style: _vm.cellStyle,
    attrs: {
      "accessible": _vm.autoAccessible,
      "ariaLabel": (_vm.label + "," + _vm.title + "," + _vm.desc)
    },
    on: {
      "click": _vm.cellClicked
    }
  }, [_vm._t("label", [(_vm.label) ? _c('div', [_c('text', {
    staticClass: ["cell-label-text"]
  }, [_vm._v(_vm._s(_vm.label))])]) : _vm._e()]), _c('div', {
    staticClass: ["cell-title"]
  }, [_vm._t("title", [_c('text', {
    staticClass: ["cell-content"]
  }, [_vm._v(_vm._s(_vm.title))]), (_vm.desc) ? _c('text', {
    staticClass: ["cell-desc-text"]
  }, [_vm._v(_vm._s(_vm.desc))]) : _vm._e()])], 2), _vm._t("value"), _vm._t("default"), (_vm.extraContent) ? _c('text', {
    staticClass: ["extra-content-text"]
  }, [_vm._v(_vm._s(_vm.extraContent))]) : _vm._e(), (_vm.hasArrow) ? _c('image', {
    staticClass: ["cell-arrow-icon"],
    attrs: {
      "src": _vm.arrowIcon,
      "ariaHidden": true
    }
  }) : _vm._e()], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(16);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(17)
)

/* script */
__vue_exports__ = __webpack_require__(18)

/* template */
var __vue_template__ = __webpack_require__(20)
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
/* 17 */
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
/* 18 */
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

var _type = __webpack_require__(19);

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
/* 19 */
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
/* 20 */
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
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(26);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.syncUserDevice = syncUserDevice;
exports.userShopFollows = userShopFollows;
exports.updateUserProfileAddress = updateUserProfileAddress;
exports.queryUserAddressList = queryUserAddressList;
exports.createUserAddress = createUserAddress;
exports.updateUserAddress = updateUserAddress;
exports.deleteUserAddress = deleteUserAddress;

var _http = __webpack_require__(1);

function syncUserDevice(params) {
  return (0, _http.http)({
    method: "POST",
    url: "/user/device/sync",
    headers: {},
    body: params
  });
}

function userShopFollows(params, headers) {
  return (0, _http.http)({
    method: "POST",
    url: "/shop/user/follows",
    headers: headers,
    body: params
  });
}

function updateUserProfileAddress(params, headers) {
  return (0, _http.http)({
    method: "POST",
    url: "/user/profile/address/update",
    headers: headers,
    body: params
  });
}

function queryUserAddressList(params, headers) {
  return (0, _http.http)({
    method: "POST",
    url: "/user/address/list",
    headers: headers,
    body: params
  });
}

function createUserAddress(params, headers) {
  return (0, _http.http)({
    method: "POST",
    url: "/user/address/create",
    headers: headers,
    body: params
  });
}

function updateUserAddress(params, headers) {
  return (0, _http.http)({
    method: "POST",
    url: "/user/address/update",
    headers: headers,
    body: params
  });
}

function deleteUserAddress(params, headers) {
  return (0, _http.http)({
    method: "POST",
    url: "/user/address/delete",
    headers: headers,
    body: params
  });
}

/***/ }),
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(27)
)

/* script */
__vue_exports__ = __webpack_require__(28)

/* template */
var __vue_template__ = __webpack_require__(29)
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
/* 27 */
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
/* 28 */
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
/* 29 */
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
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(31);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(32)
)

/* script */
__vue_exports__ = __webpack_require__(33)

/* template */
var __vue_template__ = __webpack_require__(35)
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
/* 32 */
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
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _wxcOverlay = __webpack_require__(21);

var _wxcOverlay2 = _interopRequireDefault(_wxcOverlay);

var _type = __webpack_require__(34);

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
/* 34 */
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
/* 35 */
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
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(43);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(44)
)

/* script */
__vue_exports__ = __webpack_require__(45)

/* template */
var __vue_template__ = __webpack_require__(47)
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
__vue_options__.__file = "/Volumes/code/way/way-app-ios/node_modules/weex-ui/packages/wxc-searchbar/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-6447ff37"
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
/* 44 */
/***/ (function(module, exports) {

module.exports = {
  "wxc-search-bar": {
    "paddingLeft": "20",
    "paddingRight": "20",
    "backgroundColor": "#ffffff",
    "width": "750",
    "height": "84",
    "flexDirection": "row"
  },
  "wxc-search-bar-yellow": {
    "backgroundColor": "#ffc900"
  },
  "search-bar-input": {
    "position": "absolute",
    "top": "10",
    "paddingTop": 0,
    "paddingBottom": 0,
    "paddingRight": "40",
    "paddingLeft": "60",
    "fontSize": "26",
    "width": "624",
    "height": "64",
    "lineHeight": "64",
    "backgroundColor": "#E5E5E5",
    "borderRadius": "6"
  },
  "search-bar-input-yellow": {
    "backgroundColor": "#fff6d6"
  },
  "search-bar-icon": {
    "position": "absolute",
    "width": "30",
    "height": "30",
    "left": "34",
    "top": "28"
  },
  "search-bar-close": {
    "position": "absolute",
    "width": "30",
    "height": "30",
    "right": "120",
    "top": "28"
  },
  "search-bar-button": {
    "width": "94",
    "height": "36",
    "fontSize": "30",
    "textAlign": "center",
    "backgroundColor": "#ffffff",
    "marginTop": "16",
    "marginRight": 0,
    "color": "#333333",
    "position": "absolute",
    "right": "8",
    "top": "9"
  },
  "search-bar-button-yellow": {
    "backgroundColor": "#FFC900"
  },
  "input-has-dep": {
    "paddingLeft": "240",
    "width": "710"
  },
  "bar-dep": {
    "width": "170",
    "paddingRight": "12",
    "paddingLeft": "12",
    "height": "42",
    "alignItems": "center",
    "flexDirection": "row",
    "position": "absolute",
    "left": "24",
    "top": "22",
    "borderRightStyle": "solid",
    "borderRightWidth": "1",
    "borderRightColor": "#C7C7C7"
  },
  "bar-dep-yellow": {
    "borderRightColor": "#C7C7C7"
  },
  "dep-text": {
    "flex": 1,
    "textAlign": "center",
    "fontSize": "26",
    "color": "#666666",
    "marginRight": "6",
    "lines": 1,
    "textOverflow": "ellipsis"
  },
  "dep-arrow": {
    "width": "24",
    "height": "24"
  },
  "icon-has-dep": {
    "left": "214"
  },
  "disabled-input": {
    "width": "750",
    "height": "64",
    "position": "absolute",
    "left": 0,
    "backgroundColor": "rgba(0,0,0,0)"
  },
  "has-dep-disabled": {
    "width": "550",
    "left": "200"
  }
}

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _type = __webpack_require__(46);

exports.default = {
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    alwaysShowCancel: {
      type: Boolean,
      default: false
    },
    inputType: {
      type: String,
      default: 'text'
    },
    returnKeyType: {
      type: String,
      default: 'default'
    },
    mod: {
      type: String,
      default: 'default'
    },
    autofocus: {
      type: Boolean,
      default: false
    },
    theme: {
      type: String,
      default: 'gray'
    },
    barStyle: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    defaultValue: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: '搜索'
    },
    cancelLabel: {
      type: String,
      default: '取消 '
    },
    depName: {
      type: String,
      default: '杭州'
    }
  },
  computed: {
    needShowCancel: function needShowCancel() {
      return this.alwaysShowCancel || this.showCancel;
    },
    buttonStyle: function buttonStyle() {
      var barStyle = this.barStyle;

      if (barStyle.backgroundColor) {
        return { backgroundColor: barStyle.backgroundColor };
      }
      return {};
    }
  },
  data: function data() {
    return {
      inputIcon: _type.INPUT_ICON,
      closeIcon: _type.CLOSE_ICON,
      arrowIcon: _type.ARROW_ICON,
      showCancel: false,
      showClose: false,
      value: ''

    };
  },
  created: function created() {
    this.defaultValue && (this.value = this.defaultValue);
    if (this.disabled) {
      this.showCancel = false;
      this.showClose = false;
    }
  },

  methods: {
    onBlur: function onBlur() {
      var self = this;
      setTimeout(function () {
        self.showCancel = false;
        self.detectShowClose();
        self.$emit('wxcSearchbarInputOnBlur', { value: self.value });
      }, 10);
    },
    autoBlur: function autoBlur() {
      this.$refs['search-input'].blur();
    },
    onFocus: function onFocus() {
      if (this.isDisabled) {
        return;
      }
      this.showCancel = true;
      this.detectShowClose();
      this.$emit('wxcSearchbarInputOnFocus', { value: this.value });
    },
    closeClicked: function closeClicked() {
      this.value = '';
      this.showCancel && (this.showCancel = false);
      this.showClose && (this.showClose = false);
      this.$emit('wxcSearchbarCloseClicked', { value: this.value });
      this.$emit('wxcSearchbarInputOnInput', { value: this.value });
    },
    onInput: function onInput(e) {
      this.value = e.value;
      this.showCancel = true;
      this.detectShowClose();
      this.$emit('wxcSearchbarInputOnInput', { value: this.value });
    },
    onSubmit: function onSubmit(e) {
      this.onBlur();
      this.value = e.value;
      this.showCancel = true;
      this.detectShowClose();
      this.$emit('wxcSearchbarInputReturned', { value: this.value });
    },
    cancelClicked: function cancelClicked() {
      this.showCancel && (this.showCancel = false);
      this.showClose && (this.showClose = false);
      this.$emit('wxcSearchbarCancelClicked', { value: this.value });
    },
    detectShowClose: function detectShowClose() {
      this.showClose = this.value.length > 0 && this.showCancel;
    },
    depClicked: function depClicked() {
      this.$emit('wxcSearchbarDepChooseClicked', {});
    },
    inputDisabledClicked: function inputDisabledClicked() {
      this.$emit('wxcSearchbarInputDisabledClicked', {});
    },
    setValue: function setValue(value) {
      this.value = value;
    }
  }
}; //
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

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * CopyRight (C) 2017-2022 Alibaba Group Holding Limited.
 * Created by Tw93 on 2016/10/31.
 */

var INPUT_ICON = exports.INPUT_ICON = "https://gw.alicdn.com/tfs/TB1FZB.pwMPMeJjy1XdXXasrXXa-30-30.png";
var CLOSE_ICON = exports.CLOSE_ICON = "https://gw.alicdn.com/tfs/TB1sZB.pwMPMeJjy1XdXXasrXXa-24-24.png";
var ARROW_ICON = exports.ARROW_ICON = "https://gw.alicdn.com/tfs/TB1vZB.pwMPMeJjy1XdXXasrXXa-24-24.png";

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(_vm.mod === 'default') ? _c('div', {
    class: ['wxc-search-bar', 'wxc-search-bar-' + _vm.theme],
    style: _vm.barStyle
  }, [_c('input', {
    ref: "search-input",
    class: ['search-bar-input', 'search-bar-input-' + _vm.theme],
    style: {
      width: _vm.needShowCancel ? '624px' : '710px'
    },
    attrs: {
      "returnKeyType": _vm.returnKeyType,
      "autofocus": _vm.autofocus,
      "disabled": _vm.disabled,
      "value": _vm.value,
      "type": _vm.inputType,
      "placeholder": _vm.placeholder
    },
    on: {
      "blur": _vm.onBlur,
      "focus": _vm.onFocus,
      "input": _vm.onInput,
      "return": _vm.onSubmit
    }
  }), (_vm.disabled) ? _c('div', {
    staticClass: ["disabled-input"],
    on: {
      "click": _vm.inputDisabledClicked
    }
  }) : _vm._e(), _c('image', {
    staticClass: ["search-bar-icon"],
    attrs: {
      "ariaHidden": true,
      "src": _vm.inputIcon
    }
  }), (_vm.showClose) ? _c('image', {
    staticClass: ["search-bar-close"],
    attrs: {
      "ariaHidden": true,
      "src": _vm.closeIcon
    },
    on: {
      "click": _vm.closeClicked
    }
  }) : _vm._e(), (_vm.needShowCancel) ? _c('text', {
    class: ['search-bar-button', 'search-bar-button-' + _vm.theme],
    style: _vm.buttonStyle,
    on: {
      "click": _vm.cancelClicked
    }
  }, [_vm._v(_vm._s(_vm.cancelLabel))]) : _vm._e()]) : _vm._e(), (_vm.mod === 'hasDep') ? _c('div', {
    class: ['wxc-search-bar', 'wxc-search-bar-' + _vm.theme],
    style: _vm.barStyle
  }, [_c('input', {
    class: ['search-bar-input', 'input-has-dep', 'search-bar-input-' + _vm.theme],
    attrs: {
      "disabled": _vm.disabled,
      "autofocus": _vm.autofocus,
      "returnKeyType": _vm.returnKeyType,
      "value": _vm.value,
      "type": _vm.inputType,
      "placeholder": _vm.placeholder
    },
    on: {
      "blur": _vm.onBlur,
      "focus": _vm.onFocus,
      "input": _vm.onInput,
      "return": _vm.onSubmit
    }
  }), (_vm.disabled) ? _c('div', {
    staticClass: ["disabled-input", "has-dep-disabled"],
    on: {
      "click": _vm.inputDisabledClicked
    }
  }) : _vm._e(), _c('div', {
    class: ['bar-dep', '.bar-dep-' + _vm.theme],
    on: {
      "click": _vm.depClicked
    }
  }, [_c('text', {
    staticClass: ["dep-text"]
  }, [_vm._v(_vm._s(_vm.depName))]), _c('image', {
    staticClass: ["dep-arrow"],
    attrs: {
      "src": _vm.arrowIcon,
      "ariaHidden": true
    }
  })]), _c('image', {
    staticClass: ["search-bar-icon", "icon-has-dep"],
    attrs: {
      "ariaHidden": true,
      "src": _vm.inputIcon
    }
  })]) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(81)
)

/* script */
__vue_exports__ = __webpack_require__(82)

/* template */
var __vue_template__ = __webpack_require__(89)
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
__vue_options__.__file = "/Volumes/code/way/way-app-ios/src/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-2964abc9"
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
/* 81 */
/***/ (function(module, exports) {

module.exports = {
  "iconfont": {
    "fontFamily": "iconfont",
    "fontSize": "32",
    "fontStyle": "normal"
  },
  "item-container": {
    "width": "750",
    "backgroundColor": "#ffffff",
    "alignItems": "center"
  },
  "image": {
    "width": "140",
    "height": "140",
    "marginRight": "10",
    "borderRadius": "10"
  },
  "shop_image": {
    "width": "64",
    "height": "64",
    "borderRadius": "5"
  },
  "avatar": {
    "borderRadius": "50",
    "borderWidth": "1",
    "borderStyle": "solid",
    "borderColor": "#cccccc"
  },
  "m_cell": {
    "paddingBottom": "2",
    "marginBottom": "6"
  },
  "m_cell_split": {
    "height": "10",
    "backgroundColor": "#f2f3f4"
  },
  "c_name": {
    "paddingLeft": "20"
  },
  "c_money": {
    "color": "#FF0000"
  },
  "c_real": {
    "fontSize": "24"
  },
  "red": {
    "color": "#FF0000"
  },
  "refresh": {
    "width": 750,
    "display": "flex",
    "MsFlexAlign": "center",
    "WebkitAlignItems": "center",
    "WebkitBoxAlign": "center",
    "alignItems": "center"
  },
  "loading": {
    "width": 750,
    "display": "flex",
    "MsFlexAlign": "center",
    "WebkitAlignItems": "center",
    "WebkitBoxAlign": "center",
    "alignItems": "center"
  },
  "indicator-text": {
    "color": "#888888",
    "fontSize": "30",
    "textAlign": "center"
  },
  "indicator": {
    "marginTop": "16",
    "height": "40",
    "width": "40",
    "color": "#000000"
  },
  "text": {
    "fontSize": "50",
    "textAlign": "center",
    "color": "#41b883"
  }
}

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _wxcDialog = __webpack_require__(30);

var _wxcDialog2 = _interopRequireDefault(_wxcDialog);

var _wxcButton = __webpack_require__(15);

var _wxcButton2 = _interopRequireDefault(_wxcButton);

var _wxcCell = __webpack_require__(10);

var _wxcCell2 = _interopRequireDefault(_wxcCell);

var _wxcTabBar = __webpack_require__(83);

var _wxcTabBar2 = _interopRequireDefault(_wxcTabBar);

var _wxcSearchbar = __webpack_require__(42);

var _wxcSearchbar2 = _interopRequireDefault(_wxcSearchbar);

var _utils3 = __webpack_require__(2);

var _config = __webpack_require__(88);

var _config2 = _interopRequireDefault(_config);

var _http = __webpack_require__(1);

var _user = __webpack_require__(22);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var navigator = weex.requireModule('navigator'); //
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
//
//
//
//
//

var storage = weex.requireModule('storage');
var modal = weex.requireModule('modal');
var dom = weex.requireModule('dom');
var version = weex.requireModule('version');
var dictionary = weex.requireModule('dictionary');
var globalEvent = weex.requireModule('globalEvent');

exports.default = {
  components: { WxcSearchbar: _wxcSearchbar2.default, WxcTabBar: _wxcTabBar2.default, WxcCell: _wxcCell2.default, WxcButton: _wxcButton2.default, WxcDialog: _wxcDialog2.default },
  data: function data() {
    return {
      city: '',
      cellStyle: { backgroundColor: '#ffffff' },
      tabTitles: _config2.default.tabIconFontTitles,
      tabStyles: _config2.default.tabIconFontStyles,
      scrollerStyle: {},
      discountInit: false,
      discountList: [],
      discountListNoDataShow: false,
      discountPageNum: 1,
      discountPageSize: 20,
      my: {
        nickname: '我是昵称',
        userLoginId: 0,
        userToken: ''
      },
      discountTopStyle: { visibility: 'hidden' },
      discountClientLng: 0,
      discountClientLat: 0,
      discountCityCode: '',
      discountRealUserLoginId: 0,
      refreshing: false,
      refreshText: '下拉刷新',
      userToken: '',
      main: {
        init: false,
        keywords: '',
        queryList: [],
        queryListNoDataShow: false,
        noDataTip: '',
        needLocation: false,
        clientLng: 0,
        clientLat: 0,
        cityCode: '',
        pageNum: 1,
        pageSize: 20
      },
      checkAppVersionDialogData: {
        show: false,
        single: true,
        cancelText: '忽略本次升级',
        confirmText: '升级',
        content: [],
        newAppVersion: '',
        appStoreUrl: ''
      }
    };
  },
  beforeCreate: function beforeCreate() {
    var _this2 = this;

    (0, _utils3.initIconfont)();
    (0, _utils3.getStorageVal)('way:first').then(function (data) {
      console.log('app非第一次启动，不需要引导');
      _this2.checkAppVersion();
      _this2.requestSyncUserDevice();
    }, function (error) {
      console.log('app第一次启动，开启引导');
      navigator.push({
        url: (0, _utils3.getEntryUrl)('guide'),
        animated: 'false'
      });
    });

    globalEvent.addEventListener('receiveNotify', function (params) {
      console.log('接收receiveNotify', params);
      if (params) {
        var nType = params['nType'];
        if (nType == '1') {
          console.log('通知-跳转商品详情');
          var cid = params['cid'];
          (0, _utils3.setStorageVal)('way:commodity:id', cid);
          navigator.push({
            url: (0, _utils3.getEntryUrl)('views/commodity/detail'),
            animated: 'true'
          });
        } else if (nType == '2') {
          console.log('通知-跳转优惠详情');
          var did = params['did'];
          (0, _utils3.setStorageVal)('way:discount:id', did);
          navigator.push({
            url: (0, _utils3.getEntryUrl)('views/discount/detail'),
            animated: 'true'
          });
        }
      }
    });
  },
  created: function created() {
    var _this3 = this;

    (0, _utils3.titlebar)('首页');

    this.initMainTab();

    (0, _utils3.receiveMessage)('m:way:city', function (data) {
      console.log('接收城市设置完成消息, m:way:city');
      //重新加载main
      _this3.main.pageNum = 1;
      _this3.main.queryList = [];
      _this3.initMainTab();
      //重新加载discount
      _this3.loadDiscountTabContent();
    });

    (0, _utils3.receiveMessage)('m:way:login', function (data) {
      console.log('receive, m:way:login', data);
      if (data.status === 0 && data.val === 'success') {
        _this3.loadMyTabContent();
        _this3.requestSyncUserDevice();
      }
    });

    (0, _utils3.receiveMessage)('m:way:discount:refresh', function (data) {
      console.log('receiveMessage, m:way:discount:refresh', data);
      if (data.status === 0) {
        _this3.discountPageNum = 1;
        _this3.discountList = [];
        _this3.fetchDiscount();
      }
    });

    var tabPageHeight = _utils2.default.env.getPageHeight();
    // 如果页面没有导航栏，可以用下面这个计算高度的方法
    // const tabPageHeight = env.deviceHeight / env.deviceWidth * 750;
    var tabStyles = this.tabStyles;
    //

    this.contentStyle = { height: tabPageHeight - tabStyles.height + 'px' };
    this.mcScrollerStyle = {
      height: tabPageHeight - tabStyles.height - 84 + 'px',
      width: '750px'
    };
    this.discountScrollerStyle = {
      height: tabPageHeight - tabStyles.height + 'px',
      width: '750px'
    };
    this.myScrollerStyle = {
      height: tabPageHeight - tabStyles.height + 'px',
      width: '750px'
    };
    this.addDiscountStyle = {
      fontSize: '48px',
      color: '#999999',
      borderColor: '#cccccc',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderRadius: '50px',
      width: '64px',
      height: '64px',
      backgroundColor: '#ffffff',
      paddingTop: '7px',
      paddingLeft: '7px',
      opacity: 0.9,
      marginTop: '15px'
    };
    this.discountTopStyle = Object.assign(this.discountTopStyle, this.addDiscountStyle);
    console.log(this.contentStyle, this.scrollerStyle, this.myScrollerStyle, this.addDiscountStyle, this.discountTopStyle);
  },

  methods: {
    initMainTab: function initMainTab() {
      var _this4 = this;

      console.log('初始化initMainTab');
      (0, _utils3.getStorageVal)('way:city').then(function (data) {
        console.log('way:city', data);
        var cityObj = JSON.parse(data);
        (0, _utils3.modalDebug)('返回城市对象', data);
        _this4.main.queryListNoDataShow = false;
        _this4.main.noDataTip = '没有查询到结果';
        _this4.main.needLocation = false;

        _this4.city = cityObj.name;
        _this4.main.clientLng = cityObj.lng;
        _this4.main.clientLat = cityObj.lat;
        _this4.main.cityCode = cityObj.cityCode;
        console.log('城市', _this4.city, _this4.main);
        _this4.searchbarHttp();
      }, function (err) {
        console.log('way:city', err);
        _this4.main.queryListNoDataShow = true;
        _this4.main.noDataTip = '我需要你的位置信息';
        _this4.main.needLocation = true;
        _this4.city = '我在哪...';
      });
    },
    wxcTabBarCurrentTabSelected: function wxcTabBarCurrentTabSelected(e) {
      var index = e.page;
      console.log(index);
      this.switchTabContent(index);
    },
    switchTabContent: function switchTabContent(index) {
      console.log('switch to index ', index);
      if (index == 1) {
        (0, _utils3.setPageTitle)('优惠信息');
        (0, _utils3.titlebar)('优惠信息');
        if (!this.discountInit) {
          this.loadDiscountTabContent();
        }
      } else if (index == 2) {
        console.log('into my tab');
        (0, _utils3.setPageTitle)('个人信息');
        (0, _utils3.titlebar)('我的主页');
        this.loadMyTabContent();
      } else {
        (0, _utils3.setPageTitle)('首页');
        (0, _utils3.titlebar)('首页');
        console.log('init first tab', this.main.init);
        if (this.main.init == false) {
          this.main.init = true;
          this.initMainTab();
        }
      }
    },
    loadDiscountTabContent: function loadDiscountTabContent() {
      var _this5 = this;

      this.discountList.splice(0, this.discountList.length);
      this.discountPageNum = 1;
      (0, _utils3.getStorageVal)('way:user').then(function (data) {
        var user = JSON.parse(data);
        console.log('加载discount tab后', user);
        // this.discountRealUserLoginId = user.userLoginId;
        // this.userToken = user.userToken;
        _this5.fetchDiscount();
      }, function (error) {
        _this5.discountRealUserLoginId = 0;
        _this5.fetchDiscount();
      });
    },
    loadMyTabContent: function loadMyTabContent() {
      var _this6 = this;

      console.log('加载my tab');
      (0, _utils3.getStorageVal)('way:user').then(function (data) {
        var user = JSON.parse(data);
        console.log('加载my tab后', user);
        _this6.my.nickname = user.userNickName;
        _this6.my.userLoginId = user.userLoginId;
        _this6.my.userToken = user.userToken;
      }, function (error) {
        _this6.my.userLoginId = 0;
      });
    },
    wxcSearchbarDepChooseClicked: function wxcSearchbarDepChooseClicked() {
      navigator.push({
        url: (0, _utils3.getEntryUrl)('views/city/index'),
        animated: 'true'
      });
    },
    fetchMc: function fetchMc(event) {
      this.searchbarHttp();
    },
    fetchDiscount: function fetchDiscount() {
      var _this7 = this;

      var _this = this;
      (0, _utils3.getStorageVal)('way:city').then(function (data) {
        var city = JSON.parse(data);
        _this.discountClientLng = city.lng;
        _this.discountClientLat = city.lat;
        _this.discountCityCode = city.cityCode;
        _this.fetchDiscountHttp();
      }, function (e) {
        _this7.$refs['wxc-tab-bar'].setPage(0);
        (0, _utils3.titlebar)('首页');
        navigator.push({
          url: (0, _utils3.getEntryUrl)('views/city/index'),
          animated: 'true'
        });
      });
    },
    fetchDiscountHttp: function fetchDiscountHttp() {
      var _this8 = this;

      var _this = this;
      (0, _http.http)({
        method: 'POST',
        url: '/discount/query',
        headers: {},
        body: {
          //获取已经选择的地域信息
          clientLng: this.discountClientLng,
          clientLat: this.discountClientLat,
          pageNum: this.discountPageNum,
          pageSize: this.discountPageSize,
          cityCode: this.discountCityCode
          // realUserLoginId: this.discountRealUserLoginId
        }
      }).then(function (data) {
        // console.log("success", data);
        if (data.code != 200) {
          return;
        }
        _this8.discountInit = true;

        _this8.discountPageNum++;

        var discountDataList = data.data;

        for (var index = 0; index < discountDataList.length; index++) {
          var discountData = discountDataList[index];
          var discountObj = {
            discountId: discountData.id,
            position: discountData.shopPosition,
            cName: discountData.commodityName,
            cPrice: discountData.commodityPrice,
            mDistance: discountData.shopDistance,
            cReal: discountData.commodityReal,
            cCate: discountData.commodityCate,
            cExpireMills: discountData.limitTimeExpireMills,
            commodityImageUrl: discountData.commodityImageUrl,
            realUserLoginId: discountData.realUserLoginId
          };
          _this.discountList.push(discountObj);
        }

        _this.discountListNoDataShow = _this.discountList.length == 0;
      }, function (error) {
        console.error('failure', error);
      });
    },
    logoutClicked: function logoutClicked(e) {
      console.log('退出登录');

      var _this = this;
      (0, _http.http)({
        method: 'POST',
        url: '/user/logout',
        headers: {
          token: this.my.userToken
        },
        body: {
          userLoginId: this.my.userLoginId
        }
      }).then(function (data) {
        console.log('success', data);
        if (data.code != 200) {
          modal.toast({
            message: data.msg,
            duration: 2
          });
          return;
        }
        storage.removeItem('way:user', function (event) {});

        _this.my.userLoginId = 0;
        // navigator.pop({ animated: "true" });
        // navigator.push({
        //   url: getEntryUrl("views/user/login"),
        //   animated: "true"
        // });
      }, function (error) {
        console.error('failure', error);
      });
    },
    loginClicked: function loginClicked(e) {
      navigator.push({
        url: (0, _utils3.getEntryUrl)('views/user/login', { tabIndex: 2 }),
        animated: 'true'
      });
    },
    discountCellClicked: function discountCellClicked(i) {
      var discount = this.discountList[i];
      (0, _utils3.setStorageVal)('way:discount:id', discount.discountId);
      navigator.push({
        url: (0, _utils3.getEntryUrl)('views/discount/detail', {
          discountId: discount.discountId
        }),
        animated: 'true'
      });
    },
    discountScrollToTop: function discountScrollToTop() {
      var el = this.$refs.cell0[0];
      dom.scrollToElement(el, {});
    },
    discountCreate: function discountCreate() {
      (0, _utils3.getStorageVal)('way:user').then(function (data) {
        navigator.push({
          url: (0, _utils3.getEntryUrl)('views/discount/create'),
          animated: 'true'
        });
      }, function (error) {
        navigator.push({
          url: (0, _utils3.getEntryUrl)('views/user/login', { tabIndex: 1 }),
          animated: 'true'
        });
      });
    },
    discountScrollHandler: function discountScrollHandler(e) {
      // console.log(e.contentOffset.y)
      if (e.contentOffset.y < -500) {
        this.discountTopStyle.visibility = 'visible';
      } else {
        this.discountTopStyle.visibility = 'hidden';
      }
    },
    wxcSearchbarInputOnInput: function wxcSearchbarInputOnInput(e) {
      this.main.keywords = e.value;
      var _this = this;
      (0, _utils3.getStorageVal)('way:city').then(function (data) {
        var city = JSON.parse(data);
        _this.main.clientLng = city.lng;
        _this.main.clientLat = city.lat;
        _this.main.cityCode = city.cityCode;
        _this.main.queryList.splice(0, _this.main.queryList.length);
        _this.main.pageNum = 1;
        _this.searchbarHttp();
      }, function (e) {
        navigator.push({
          url: (0, _utils3.getEntryUrl)('views/city/index'),
          animated: 'true'
        });
      });
    },
    searchbarHttp: function searchbarHttp() {
      console.log('查询searchbarHttp');
      var _this = this;
      (0, _http.http)({
        method: 'POST',
        url: '/shop/query',
        headers: {},
        body: {
          keywords: this.main.keywords,
          clientLng: this.main.clientLng,
          clientLat: this.main.clientLat,
          cityCode: this.main.cityCode,
          pageNum: this.main.pageNum,
          pageSize: this.main.pageSize
        }
      }).then(function (data) {
        if (data.code != 200) {
          return;
        }

        var shopQueryDataList = data.data;

        var shopIndex = 0;
        shopQueryDataList.forEach(function (shopQueryData) {
          //       {
          //   mName: "商家名称",
          //   cName: "商品名称",
          //   cPrice: "1.8",
          //   mDistance: "652m"
          // }
          var commodityData = shopQueryData.commodityList;
          var cList = [];
          commodityData.forEach(function (commodity) {
            cList.push({
              cId: commodity.id,
              cName: commodity.name,
              // cPrice: commodity.price,
              cImgUrl: commodity.imgUrl
            });
          });

          _this.main.queryList.push({
            shopIndex: shopIndex++,
            mName: shopQueryData.shopName,
            shopLogoUrl: shopQueryData.shopLogoUrl,
            firstList: cList.slice(0, 1),
            moreList: cList.length > 1 ? cList.slice(1) : [],
            isMore: cList.length > 1 ? true : false,
            moreNum: cList.length > 1 ? cList.length - 1 : 0,
            mDistance: shopQueryData.shopDistance
          });
        });

        _this.main.queryListNoDataShow = _this.main.queryList.length == 0;

        _this.main.pageNum++;
      }, function (error) {
        console.error('failure', error);
      });
    },
    moreCommodityClicked: function moreCommodityClicked(shopIndex) {
      var shopItem = this.main.queryList[shopIndex];
      console.log(shopIndex, shopItem);
      shopItem.firstList = shopItem.firstList.concat(shopItem.moreList);
      shopItem.isMore = !shopItem.isMore;
      this.main.queryList[shopIndex] = shopItem;
    },
    unMoreCommodityClicked: function unMoreCommodityClicked(shopIndex) {
      var shopItem = this.main.queryList[shopIndex];
      console.log(shopIndex, shopItem);
      shopItem.moreList = shopItem.firstList.slice(1);
      shopItem.firstList = shopItem.firstList.slice(0, 1);
      shopItem.isMore = !shopItem.isMore;
      this.main.queryList[shopIndex] = shopItem;
    },
    commodityCellClick: function commodityCellClick(i, j) {
      var shopItem = this.main.queryList[i];
      console.log(i, j, shopItem);
      var commodityItem = null;
      if (j === 0) {
        commodityItem = shopItem.firstList[0];
      } else {
        commodityItem = shopItem.moreList[j - 1];
      }
      console.log(commodityItem);
      if (commodityItem) {
        console.log('跳转到商品详情页面', commodityItem.cId);
        (0, _utils3.setStorageVal)('way:commodity:id', commodityItem.cId);
        navigator.push({
          url: (0, _utils3.getEntryUrl)('views/commodity/detail'),
          animated: 'true'
        });
      }
    },

    // discountExpireOnCompleted(i) {
    //   console.log("优惠过期", i);
    //   this.discountList.splice(i, 1);
    // },
    discountOnRefresh: function discountOnRefresh(event) {
      this.refreshing = true;
      console.log('refresh');
      this.refreshText = '加载中';

      this.discountPageNum = 1;
      this.discountList.splice(0, this.discountList.length);
      this.fetchDiscount();
      this.refreshing = false;
    },
    onpullingdown: function onpullingdown(event) {
      // this.refreshing = true
      this.refreshText = '下拉加载';
      // console.log(
      //   'pulling down',
      //   event.pullingDistance,
      //   event.dy,
      //   event.viewHeight
      // )
    },
    userDiscountClick: function userDiscountClick() {
      navigator.push({
        url: (0, _utils3.getEntryUrl)('views/user/myDiscount'),
        animated: 'true'
      });
    },
    userFollowClick: function userFollowClick() {
      navigator.push({
        url: (0, _utils3.getEntryUrl)('views/user/myFollow'),
        animated: 'true'
      });
    },
    checkAppVersion: function checkAppVersion() {
      console.log('开始app版本检查');
      var _this = this;
      (0, _http.http)({
        method: 'GET',
        url: '/ios/app/version',
        headers: {},
        params: {}
      }).then(function (data) {
        console.log('success', data);
        if (data.code !== 200) {
          return;
        }
        (0, _utils3.getStorageVal)('way:version:check:show').then(function (ignoreAppVersion) {
          console.log('忽略的app版本', ignoreAppVersion);
          if (ignoreAppVersion === data.data.newAppVersion) {
            console.log('已忽略检查app版本');
            return;
          }
          _this.checkAppVersionDialog(data);
        }, function (error) {
          console.log('没有本地检查app版本数据');
          _this.checkAppVersionDialog(data);
        });
      });
    },
    checkAppVersionDialog: function checkAppVersionDialog(data) {
      console.log('版本弹窗，data', data);
      var operation = data.data.operation;
      if (operation === 'force' || operation === 'notice') {
        console.log('版本提示', operation);
        if (operation === 'force') {
          this.checkAppVersionDialogData.single = true;
        } else if (operation === 'notice') {
          this.checkAppVersionDialogData.single = false;
        }
        this.checkAppVersionDialogData.content.push('新版本 ' + data.data.newAppVersion);
        if (data.data.commentList) {
          for (var i = 0; i < data.data.commentList.length; i++) {
            this.checkAppVersionDialogData.content.push(data.data.commentList[i]);
          }
        }
        this.checkAppVersionDialogData.appStoreUrl = data.data.appStoreUrl;
        this.checkAppVersionDialogData.newAppVersion = data.data.newAppVersion;
        this.checkAppVersionDialogData.show = true;
        console.log('开启版本提示');
      }
    },
    wxcDialogConfirmBtnClicked: function wxcDialogConfirmBtnClicked(e) {
      console.log('去升级');
      if (_utils2.default.env.isIOS()) {
        var appstore = weex.requireModule('appstore');
        appstore.openUrl(this.checkAppVersionDialogData.appStoreUrl);
      } else if (_utils2.default.env.isAndroid()) {
        var webbrowser = weex.requireModule('webbrowser');
        webbrowser.openUrl(this.checkAppVersionDialogData.appStoreUrl);
      }
    },
    wxcDialogCancelBtnClicked: function wxcDialogCancelBtnClicked(e) {
      console.log('忽略本次升级');
      this.checkAppVersionDialogData.show = false;
      (0, _utils3.setStorageVal)('way:version:check:show', this.checkAppVersionDialogData.newAppVersion);
    },
    requestSyncUserDevice: function requestSyncUserDevice() {
      (0, _utils3.getStorageVal)('way:user').then(function (data) {
        var longitude = 0;
        var latitude = 0;
        var jpushRegId = '';
        var deviceToken = '';
        var isIOS = weex.config.env.platform.toLowerCase() === 'ios';
        if (isIOS) {
          dictionary.getDict('longitude', function (resp) {
            console.log('获取iOS native经度', resp);
            longitude = resp;
          });
          dictionary.getDict('latitude', function (resp) {
            console.log('获取iOS native纬度', resp);
            latitude = resp;
          });
          dictionary.getDict('deviceToken', function (resp) {
            console.log('首页-获取iOS deviceToken', resp);
            deviceToken = resp;
          });
          dictionary.getDict('jpushRegId', function (resp) {
            console.log('首页-获取jpushRegId', resp);
            jpushRegId = resp;
          });
        } else {
          longitude = dictionary.getDict('longitude');
          console.log('获取native经度', longitude);

          latitude = dictionary.getDict('latitude');
          console.log('获取native纬度', latitude);

          jpushRegId = dictionary.getDict('jpushRegId');
          console.log('获取jpushRegId', jpushRegId);
        }
        var user = JSON.parse(data);
        var userLoginId = user.userLoginId;
        var syncParams = {
          userLoginId: userLoginId,
          deviceToken: deviceToken,
          jpushRegId: jpushRegId,
          latitude: latitude,
          longitude: longitude
        };
        console.log('首页-syncUserDevice', syncParams);
        (0, _user.syncUserDevice)(syncParams);
      });
    }
  }
};

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(84);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(85)
)

/* script */
__vue_exports__ = __webpack_require__(86)

/* template */
var __vue_template__ = __webpack_require__(87)
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
__vue_options__.__file = "/Volumes/code/way/way-app-ios/node_modules/weex-ui/packages/wxc-tab-bar/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-0d85b832"
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
/* 85 */
/***/ (function(module, exports) {

module.exports = {
  "wxc-tab-page": {
    "position": "absolute",
    "top": 0,
    "left": 0,
    "right": 0,
    "bottom": 0
  },
  "tab-title-list": {
    "flexDirection": "row",
    "justifyContent": "space-around"
  },
  "title-item": {
    "justifyContent": "center",
    "alignItems": "center",
    "borderBottomStyle": "solid"
  },
  "tab-page-wrap": {
    "width": "750",
    "flex": 1,
    "overflow": "hidden"
  },
  "tab-container": {
    "flex": 1,
    "flexDirection": "row",
    "position": "absolute"
  },
  "tab-text": {
    "lines": 1,
    "textOverflow": "ellipsis"
  },
  "desc-tag": {
    "position": "absolute",
    "top": "10",
    "right": "20",
    "borderBottomRightRadius": "14",
    "borderBottomLeftRadius": 0,
    "borderTopLeftRadius": "14",
    "borderTopRightRadius": "14",
    "backgroundColor": "#FF5E00",
    "height": "26",
    "alignItems": "center",
    "justifyContent": "center",
    "paddingLeft": "6",
    "paddingRight": "6"
  },
  "dot": {
    "width": "12",
    "height": "12",
    "borderBottomRightRadius": "12",
    "borderBottomLeftRadius": "12",
    "borderTopLeftRadius": "12",
    "borderTopRightRadius": "12",
    "position": "absolute",
    "top": "10",
    "right": "40",
    "backgroundColor": "#FF5E00"
  },
  "desc-text": {
    "fontSize": "18",
    "color": "#ffffff"
  }
}

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

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

var dom = weex.requireModule('dom');
var animation = weex.requireModule('animation');
exports.default = {
  props: {
    tabTitles: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    tabStyles: {
      type: Object,
      default: function _default() {
        return {
          bgColor: '#FFFFFF',
          titleColor: '#666666',
          activeTitleColor: '#3D3D3D',
          activeBgColor: '#FFFFFF',
          isActiveTitleBold: true,
          iconWidth: 70,
          iconHeight: 70,
          width: 160,
          height: 120,
          fontSize: 24,
          activeBottomColor: '#FFC900',
          activeBottomWidth: 120,
          activeBottomHeight: 6,
          textPaddingLeft: 10,
          textPaddingRight: 10
        };
      }
    },
    titleType: {
      type: String,
      default: 'icon'
    },
    titleUseSlot: {
      type: Boolean,
      default: false
    },
    isTabView: {
      type: Boolean,
      default: true
    },
    duration: {
      type: [Number, String],
      default: 300
    },
    timingFunction: {
      type: String,
      default: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
    },
    wrapBgColor: {
      type: String,
      default: '#f2f3f4'
    }
  },
  data: function data() {
    return {
      currentPage: 0,
      translateX: 0
    };
  },
  created: function created() {
    var titleType = this.titleType,
        tabStyles = this.tabStyles;

    if (titleType === 'iconFont' && tabStyles.iconFontUrl) {
      dom.addRule('fontFace', {
        'fontFamily': "wxcIconFont",
        'src': 'url(\'' + tabStyles.iconFontUrl + '\')'
      });
    }
    this.isIPhoneX = _utils2.default.env.isIPhoneX();
  },

  methods: {
    next: function next() {
      var page = this.currentPage;
      if (page < this.tabTitles.length - 1) {
        page++;
      }
      this.setPage(page);
    },
    prev: function prev() {
      var page = this.currentPage;
      if (page > 0) {
        page--;
      }
      this.setPage(page);
    },
    setPage: function setPage(page) {
      var url = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var animated = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

      if (!this.isTabView) {
        this.currentPage = page;
        this._animateTransformX(page, animated);
        this.$emit('wxcTabBarCurrentTabSelected', { page: page });
        this.jumpOut(url);
        return;
      }
      var previousPage = this.currentPage;
      var currentTabEl = this.$refs['wxc-tab-title-' + page][0];
      var width = this.tabStyles.width;

      var appearNum = parseInt(750 / width);
      var tabsNum = this.tabTitles.length;
      var offset = page > appearNum ? -(750 - width) / 2 : -width * 2;

      if (appearNum < tabsNum) {
        (previousPage > appearNum || page > 1) && dom.scrollToElement(currentTabEl, {
          offset: offset, animated: animated
        });

        page <= 1 && previousPage > page && dom.scrollToElement(currentTabEl, {
          offset: -width * page,
          animated: animated
        });
      }

      this.currentPage = page;
      this._animateTransformX(page, animated);
      this.$emit('wxcTabBarCurrentTabSelected', { page: page });
    },
    jumpOut: function jumpOut(url) {
      url && _utils2.default.goToH5Page(url);
    },
    _animateTransformX: function _animateTransformX(page, animated) {
      var duration = this.duration,
          timingFunction = this.timingFunction;

      var computedDur = animated ? duration : 0.00001;
      var containerEl = this.$refs['tab-container'];
      var dist = page * 750;
      animation.transition(containerEl, {
        styles: {
          transform: 'translateX(' + -dist + 'px)'
        },
        duration: computedDur,
        timingFunction: timingFunction,
        delay: 0
      }, function () {});
    }
  }
};

/***/ }),
/* 87 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wxc-tab-page"],
    style: {
      backgroundColor: _vm.wrapBgColor
    }
  }, [_c('div', {
    ref: "tab-page-wrap",
    staticClass: ["tab-page-wrap"]
  }, [_c('div', {
    ref: "tab-container",
    staticClass: ["tab-container"]
  }, [_vm._t("default")], 2)]), _c('div', {
    staticClass: ["tab-title-list"],
    style: {
      backgroundColor: _vm.tabStyles.bgColor,
      height: (_vm.tabStyles.height + (_vm.isIPhoneX ? 78 : 0)) + 'px',
      paddingBottom: _vm.isIPhoneX ? '78px' : '0'
    }
  }, _vm._l((_vm.tabTitles), function(v, index) {
    return _c('div', {
      key: index,
      ref: 'wxc-tab-title-' + index,
      refInFor: true,
      staticClass: ["title-item"],
      style: {
        width: _vm.tabStyles.width + 'px',
        height: _vm.tabStyles.height + 'px',
        backgroundColor: _vm.currentPage == index ? _vm.tabStyles.activeBgColor : _vm.tabStyles.bgColor
      },
      attrs: {
        "accessible": true,
        "ariaLabel": ("" + (v.title?v.title:'标签'+index))
      },
      on: {
        "click": function($event) {
          _vm.setPage(index, v.url)
        }
      }
    }, [(_vm.titleType === 'icon' && !_vm.titleUseSlot) ? _c('image', {
      style: {
        width: _vm.tabStyles.iconWidth + 'px',
        height: _vm.tabStyles.iconHeight + 'px'
      },
      attrs: {
        "src": _vm.currentPage == index ? v.activeIcon : v.icon
      }
    }) : _vm._e(), (_vm.titleType === 'iconFont' && v.codePoint && !_vm.titleUseSlot) ? _c('text', {
      style: {
        fontFamily: 'wxcIconFont',
        fontSize: _vm.tabStyles.iconFontSize + 'px',
        marginBottom: _vm.tabStyles.iconFontMarginBottom ? (_vm.tabStyles.iconFontMarginBottom + 'px') : '8px',
        color: _vm.currentPage == index ? _vm.tabStyles.activeIconFontColor : _vm.tabStyles.iconFontColor
      }
    }, [_vm._v(_vm._s(v.codePoint))]) : _vm._e(), (!_vm.titleUseSlot) ? _c('text', {
      staticClass: ["tab-text"],
      style: {
        fontSize: _vm.tabStyles.fontSize + 'px',
        fontWeight: (_vm.currentPage == index && _vm.tabStyles.isActiveTitleBold) ? 'bold' : 'normal',
        color: _vm.currentPage == index ? _vm.tabStyles.activeTitleColor : _vm.tabStyles.titleColor,
        paddingLeft: _vm.tabStyles.textPaddingLeft + 'px',
        paddingRight: _vm.tabStyles.textPaddingRight + 'px'
      }
    }, [_vm._v(_vm._s(v.title))]) : _vm._e(), (v.badge && !_vm.titleUseSlot) ? _c('div', {
      staticClass: ["desc-tag"]
    }, [_c('text', {
      staticClass: ["desc-text"]
    }, [_vm._v(_vm._s(v.badge))])]) : _vm._e(), (v.dot && !v.badge && !_vm.titleUseSlot) ? _c('div', {
      staticClass: ["dot"]
    }) : _vm._e(), (_vm.titleUseSlot) ? _vm._t(("tab-title-" + index)) : _vm._e()], 2)
  }))])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  // 使用 iconFont 模式的tab title配置
  tabIconFontTitles: [{
    title: '首页',
    codePoint: '\uE6B8'
  }, {
    title: '优惠信息',
    codePoint: '\uE752',
    badge: 0
  }, {
    title: '我的主页',
    codePoint: '\uE7D6',
    dot: false
  }],
  tabIconFontStyles: {
    bgColor: '#FFFFFF',
    titleColor: '#666666',
    activeTitleColor: '#333333',
    activeBgColor: '#FFFFFF',
    isActiveTitleBold: false,
    width: 160,
    height: 120,
    fontSize: 24,
    textPaddingLeft: 10,
    textPaddingRight: 10,
    iconFontSize: 50,
    iconFontMarginBottom: 8,
    iconFontColor: '#333333',
    activeIconFontColor: 'red',
    iconFontUrl: 'local:///font/iconfont.ttf'
  }
};

/***/ }),
/* 89 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('wxc-tab-bar', {
    ref: "wxc-tab-bar",
    attrs: {
      "tabTitles": _vm.tabTitles,
      "tabStyles": _vm.tabStyles,
      "titleType": "iconFont",
      "duration": "0"
    },
    on: {
      "wxcTabBarCurrentTabSelected": _vm.wxcTabBarCurrentTabSelected
    }
  }, [_c('div', {
    staticClass: ["item-container"],
    style: _vm.contentStyle
  }, [_c('wxc-searchbar', {
    staticClass: ["searchbar"],
    attrs: {
      "placeholder": "输入商品名称",
      "theme": "gray",
      "mod": "hasDep",
      "returnKeyType": "search",
      "depName": _vm.city
    },
    on: {
      "wxcSearchbarInputReturned": _vm.wxcSearchbarInputOnInput,
      "wxcSearchbarDepChooseClicked": _vm.wxcSearchbarDepChooseClicked
    }
  }), (!_vm.main.queryListNoDataShow) ? _c('scroller', {
    style: _vm.mcScrollerStyle,
    attrs: {
      "loadmoreoffset": "10"
    },
    on: {
      "loadmore": _vm.fetchMc
    }
  }, _vm._l((_vm.main.queryList), function(commodityObj, i) {
    return _c('div', {
      key: i,
      staticClass: ["m_cell"]
    }, [(i != 0) ? _c('div', {
      staticClass: ["m_cell_split"]
    }) : _vm._e(), _c('wxc-cell', {
      attrs: {
        "cellStyle": _vm.cellStyle,
        "hasTopBorder": false,
        "hasBottomBorder": true,
        "hasMargin": false
      }
    }, [_c('image', {
      staticClass: ["shop_image"],
      attrs: {
        "slot": "label",
        "resize": "cover",
        "src": commodityObj.shopLogoUrl
      },
      slot: "label"
    }), _c('text', {
      staticStyle: {
        marginLeft: "10px"
      },
      attrs: {
        "slot": "title"
      },
      slot: "title"
    }, [_vm._v(_vm._s(commodityObj.mName))]), _c('text', {
      staticStyle: {
        textAlign: "right",
        fontSize: "26px"
      },
      attrs: {
        "slot": "value"
      },
      slot: "value"
    }, [_vm._v(_vm._s(commodityObj.mDistance))])]), _vm._l((commodityObj.firstList), function(cItem, j) {
      return _c('wxc-cell', {
        key: cItem.cId,
        attrs: {
          "hasArrow": false,
          "cellStyle": _vm.cellStyle,
          "hasTopBorder": false,
          "hasBottomBorder": true,
          "hasMargin": false,
          "autoAccessible": false
        },
        on: {
          "wxcCellClicked": function($event) {
            _vm.commodityCellClick(i, j)
          }
        }
      }, [_c('image', {
        staticClass: ["image"],
        attrs: {
          "slot": "label",
          "resize": "cover",
          "src": cItem.cImgUrl
        },
        slot: "label"
      }), _c('div', {
        attrs: {
          "slot": "title"
        },
        slot: "title"
      }, [_c('text', {
        staticClass: ["c_name"]
      }, [_vm._v(_vm._s(cItem.cName))])])])
    }), (commodityObj.moreList.length > 0) ? _c('wxc-cell', {
      attrs: {
        "hasArrow": false,
        "hasTopBorder": false,
        "hasBottomBorder": true,
        "hasMargin": false,
        "autoAccessible": false
      }
    }, [(commodityObj.isMore == true) ? _c('text', {
      staticClass: ["iconfont"],
      staticStyle: {
        textAlign: "center"
      },
      attrs: {
        "slot": "title"
      },
      on: {
        "click": function($event) {
          _vm.moreCommodityClicked(commodityObj.shopIndex)
        }
      },
      slot: "title"
    }, [_vm._v(" 查看更多" + _vm._s(commodityObj.moreList.length) + "个  ")]) : _c('text', {
      staticClass: ["iconfont"],
      staticStyle: {
        textAlign: "center"
      },
      attrs: {
        "slot": "title"
      },
      on: {
        "click": function($event) {
          _vm.unMoreCommodityClicked(commodityObj.shopIndex)
        }
      },
      slot: "title"
    }, [_vm._v(" 收起  ")])]) : _vm._e()], 2)
  })) : _c('div', {
    staticClass: ["m_cell"]
  }, [(_vm.main.needLocation == false) ? _c('text', {
    staticClass: ["iconfont"],
    staticStyle: {
      fontSize: "128px",
      marginTop: "232px",
      textAlign: "center",
      color: "#cccccc"
    }
  }, [_vm._v("")]) : _vm._e(), (_vm.main.needLocation == true) ? _c('text', {
    staticClass: ["iconfont"],
    staticStyle: {
      fontSize: "128px",
      marginTop: "232px",
      textAlign: "center",
      color: "#cccccc"
    }
  }, [_vm._v("")]) : _vm._e(), _c('text', {
    staticStyle: {
      fontSize: "32px",
      marginTop: "20px",
      textAlign: "center",
      color: "#cccccc"
    }
  }, [_vm._v(_vm._s(_vm.main.noDataTip))])])], 1), _c('div', {
    staticClass: ["item-container"],
    style: _vm.contentStyle
  }, [(!_vm.discountListNoDataShow) ? _c('scroller', {
    style: _vm.discountScrollerStyle,
    attrs: {
      "loadmoreoffset": "10"
    },
    on: {
      "loadmore": _vm.fetchDiscount,
      "scroll": _vm.discountScrollHandler
    }
  }, [_c('refresh', {
    staticClass: ["refresh"],
    attrs: {
      "display": _vm.refreshing ? 'show' : 'hide'
    },
    on: {
      "refresh": _vm.discountOnRefresh,
      "pullingdown": _vm.onpullingdown
    }
  }, [_c('text', {
    staticClass: ["indicator-text"]
  }, [_vm._v(_vm._s(_vm.refreshText))]), _c('loading-indicator', {
    staticClass: ["indicator"]
  })]), _vm._l((_vm.discountList), function(discountObj, i) {
    return _c('div', {
      key: i,
      ref: 'cell' + i,
      refInFor: true,
      staticClass: ["m_cell"]
    }, [(i != 0) ? _c('div', {
      staticClass: ["m_cell_split"]
    }) : _vm._e(), _c('wxc-cell', {
      attrs: {
        "hasArrow": false,
        "cellStyle": _vm.cellStyle,
        "hasTopBorder": false,
        "hasBottomBorder": false,
        "hasMargin": false,
        "autoAccessible": false
      },
      on: {
        "wxcCellClicked": function($event) {
          _vm.discountCellClicked(i)
        }
      }
    }, [_c('image', {
      staticClass: ["image"],
      attrs: {
        "slot": "label",
        "resize": "cover",
        "src": discountObj.commodityImageUrl
      },
      slot: "label"
    }), _c('div', {
      attrs: {
        "slot": "title"
      },
      slot: "title"
    }, [_c('div', {
      staticStyle: {
        flexDirection: "row"
      }
    }, [_c('text', {
      staticClass: ["c_name"],
      staticStyle: {
        width: "460px"
      }
    }, [_vm._v(_vm._s(discountObj.cName))]), _c('div', {
      staticStyle: {
        flex: "auto",
        WebkitBoxFlex: "1"
      }
    }, [_c('text', {
      staticStyle: {
        textAlign: "right",
        fontSize: "26px",
        paddingTop: "5px"
      }
    }, [_vm._v(_vm._s(discountObj.mDistance))])])]), _c('div', {
      staticStyle: {
        flexDirection: "row"
      }
    }, [_c('text', {
      staticClass: ["c_name", "c_money"],
      staticStyle: {
        paddingTop: "4px"
      }
    }, [_vm._v("¥" + _vm._s(discountObj.cPrice))])]), _c('div', {
      key: i,
      staticStyle: {
        flexDirection: "row",
        paddingLeft: "20px",
        marginTop: "10px"
      },
      attrs: {
        "index": i
      }
    }, [_c('text', {
      staticClass: ["iconfont", "red"],
      staticStyle: {
        fontSize: "24px"
      }
    }, [_vm._v("")]), _c('text', {
      staticClass: ["c_real"],
      staticStyle: {
        color: "#ccc",
        width: "500px"
      }
    }, [_vm._v(_vm._s(discountObj.position))])])])])], 1)
  })], 2) : _c('div', {
    staticClass: ["m_cell"]
  }, [_c('text', {
    staticClass: ["iconfont"],
    staticStyle: {
      fontSize: "128px",
      marginTop: "232px",
      textAlign: "center",
      color: "#cccccc"
    }
  }, [_vm._v("")]), _c('text', {
    staticStyle: {
      fontSize: "32px",
      marginTop: "20px",
      textAlign: "center",
      color: "#cccccc"
    }
  }, [_vm._v(" 没有查询到结果 ")])]), _c('div', {
    staticStyle: {
      flexDirection: "column",
      position: "absolute",
      right: "16px",
      bottom: "16px"
    }
  }, [_c('text', {
    staticClass: ["iconfont"],
    style: _vm.addDiscountStyle,
    on: {
      "click": _vm.discountCreate
    }
  }, [_vm._v("")]), _c('text', {
    staticClass: ["iconfont"],
    style: _vm.discountTopStyle,
    on: {
      "click": _vm.discountScrollToTop
    }
  }, [_vm._v("")])])]), _c('div', {
    staticClass: ["item-container"],
    style: _vm.contentStyle
  }, [_c('scroller', {
    style: _vm.myScrollerStyle
  }, [(_vm.my.userLoginId != 0) ? _c('wxc-cell', {
    attrs: {
      "hasArrow": false,
      "cellStyle": _vm.cellStyle,
      "hasTopBorder": false,
      "hasBottomBorder": true,
      "hasMargin": false,
      "autoAccessible": false
    }
  }, [_c('image', {
    staticClass: ["image", "avatar"],
    attrs: {
      "slot": "label",
      "src": "http://static.duozouzou.top/user.png"
    },
    slot: "label"
  }), _c('div', {
    attrs: {
      "slot": "title"
    },
    slot: "title"
  }, [_c('div', {
    staticStyle: {
      flexDirection: "row"
    }
  }, [_c('text', {
    staticClass: ["c_name"]
  }, [_vm._v(_vm._s(_vm.my.nickname))])])])]) : _vm._e(), (_vm.my.userLoginId != 0) ? _c('wxc-cell', {
    attrs: {
      "title": "我发布的优惠信息",
      "hasTopBorder": true,
      "hasArrow": true
    },
    on: {
      "wxcCellClicked": _vm.userDiscountClick
    }
  }) : _vm._e(), (_vm.my.userLoginId != 0) ? _c('wxc-cell', {
    attrs: {
      "title": "我的关注",
      "hasTopBorder": true,
      "hasArrow": true
    },
    on: {
      "wxcCellClicked": _vm.userFollowClick
    }
  }) : _c('wxc-cell', {
    attrs: {
      "hasArrow": false,
      "cellStyle": _vm.cellStyle,
      "hasTopBorder": false,
      "hasBottomBorder": true,
      "hasMargin": false,
      "autoAccessible": false
    }
  }, [_c('div', {
    attrs: {
      "slot": "title"
    },
    slot: "title"
  }, [_c('wxc-button', {
    attrs: {
      "type": "blue",
      "text": "登录"
    },
    on: {
      "wxcButtonClicked": _vm.loginClicked
    }
  })], 1)]), (_vm.my.userLoginId != 0) ? _c('wxc-cell', {
    attrs: {
      "hasArrow": false,
      "cellStyle": _vm.cellStyle,
      "hasTopBorder": false,
      "hasBottomBorder": false,
      "hasMargin": false,
      "autoAccessible": false
    }
  }, [_c('div', {
    attrs: {
      "slot": "title"
    },
    slot: "title"
  }, [_c('wxc-button', {
    attrs: {
      "type": "red",
      "text": "退出登录"
    },
    on: {
      "wxcButtonClicked": _vm.logoutClicked
    }
  })], 1)]) : _vm._e()], 1)]), _c('wxc-dialog', {
    attrs: {
      "title": "发现新版本",
      "show": _vm.checkAppVersionDialogData.show,
      "single": _vm.checkAppVersionDialogData.single,
      "cancelText": _vm.checkAppVersionDialogData.cancelText,
      "confirmText": _vm.checkAppVersionDialogData.confirmText
    },
    on: {
      "wxcDialogCancelBtnClicked": _vm.wxcDialogCancelBtnClicked,
      "wxcDialogConfirmBtnClicked": _vm.wxcDialogConfirmBtnClicked
    }
  }, [_c('div', {
    attrs: {
      "slot": "content"
    },
    slot: "content"
  }, _vm._l((_vm.checkAppVersionDialogData.content), function(item, i) {
    return _c('div', {
      key: i
    }, [_vm._v(_vm._s(item))])
  }))])], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })
/******/ ]);