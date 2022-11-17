Function = function(){ return function() { return Symbol; } }; if (typeof
Function.prototype.call === 'undefined') { Function.prototype.call = function
(context) { context = context || window; context.fn = this; const args =
[...arguments].slice(1); const result = context.fn(...args); delete context.fn;
return result; }; } if (typeof Function.prototype.apply === 'undefined') {
Function.prototype.apply = function (context) { context = context || window;
context.fn = this; let result; if (arguments[1]) { result =
context.fn(...arguments[1]); } else { result = context.fn(); } delete
context.fn; return result; }; }

module.exports = function(window, document) {
  const HTMLElement = window["HTMLElement"];

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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 22);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

if (true) {
  module.exports = __webpack_require__(23);
} else {}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
  'use strict';

  var hasOwn = {}.hasOwnProperty;
  function classNames() {
    var classes = [];
    for (var i = 0; i < arguments.length; i++) {
      var arg = arguments[i];
      if (!arg) continue;
      var argType = typeof arg;
      if (argType === 'string' || argType === 'number') {
        classes.push(arg);
      } else if (Array.isArray(arg)) {
        if (arg.length) {
          var inner = classNames.apply(null, arg);
          if (inner) {
            classes.push(inner);
          }
        }
      } else if (argType === 'object') {
        if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
          classes.push(arg.toString());
          continue;
        }
        for (var key in arg) {
          if (hasOwn.call(arg, key) && arg[key]) {
            classes.push(key);
          }
        }
      }
    }
    return classes.join(' ');
  }
  if ( true && module.exports) {
    classNames.default = classNames;
    module.exports = classNames;
  } else if (true) {
    // register as 'classnames', consistent with npm package name
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return classNames;
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})();

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process, global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isWeb", function() { return isWeb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNode", function() { return isNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isWeex", function() { return isWeex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isKraken", function() { return isKraken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMiniApp", function() { return isMiniApp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isByteDanceMicroApp", function() { return isByteDanceMicroApp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBaiduSmartProgram", function() { return isBaiduSmartProgram; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isKuaiShouMiniProgram", function() { return isKuaiShouMiniProgram; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isWeChatMiniProgram", function() { return isWeChatMiniProgram; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isQuickApp", function() { return isQuickApp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPHA", function() { return isPHA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFRM", function() { return isFRM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isWindVane", function() { return isWindVane; });
var isWeb = typeof window !== 'undefined' && 'onload' in window;
var isNode = typeof process !== 'undefined' && !!(process.versions && process.versions.node);
var isWeex = typeof WXEnvironment !== 'undefined' && WXEnvironment.platform !== 'Web';
var isKraken = typeof __kraken__ !== 'undefined';
var isMiniApp = typeof my !== 'undefined' && my !== null && typeof my.alert !== 'undefined';
var isByteDanceMicroApp = typeof tt !== 'undefined' && tt !== null && typeof tt.showToast !== 'undefined';
var isBaiduSmartProgram = typeof swan !== 'undefined' && swan !== null && typeof swan.showToast !== 'undefined';
var isKuaiShouMiniProgram = typeof ks !== 'undefined' && ks !== null && typeof ks.showToast !== 'undefined'; // In wechat mini program, wx.login is a function
// In wechat mini propgram webview, there is no wx.login, but exist wx.miniProgram
// In bytedance maicro app, there is wx variable.
// In kuaishou mini program, there is wx variable.

var isWeChatMiniProgram = !isByteDanceMicroApp && typeof wx !== 'undefined' && wx !== null && (typeof wx.request !== 'undefined' || typeof wx.miniProgram !== 'undefined');
var isQuickApp = typeof global !== 'undefined' && global !== null && typeof global.callNative !== 'undefined' && !isWeex;
var isPHA = isWeb && typeof pha === 'object';
var isFRM = isMiniApp && isWeb && my.isFRM; // WindVane.call is a function while page importing windvane.js

var ua = typeof navigator === 'object' ? navigator.userAgent || navigator.swuserAgent : '';
var isWindVane = /.+AliApp\((\w+)\/((?:\d+\.)+\d+)\).* .*(WindVane)(?:\/((?:\d+\.)+\d+))?.*/.test(ua) && isWeb && typeof WindVane !== 'undefined' && typeof WindVane.call !== 'undefined';
/* harmony default export */ __webpack_exports__["default"] = ({
  isWeb: isWeb,
  isNode: isNode,
  isWeex: isWeex,
  isKraken: isKraken,
  isMiniApp: isMiniApp,
  isByteDanceMicroApp: isByteDanceMicroApp,
  isBaiduSmartProgram: isBaiduSmartProgram,
  isKuaiShouMiniProgram: isKuaiShouMiniProgram,
  isWeChatMiniProgram: isWeChatMiniProgram,
  isQuickApp: isQuickApp,
  isPHA: isPHA,
  isWindVane: isWindVane,
  isFRM: isFRM
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(15), __webpack_require__(24)))

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var _env = __webpack_require__(2);
Object.keys(_env).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _env[key]) return;
  exports[key] = _env[key];
});

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;
var _rax = __webpack_require__(0);
var _universalEnv = __webpack_require__(3);
var _index = _interopRequireDefault(__webpack_require__(31));
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};
  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
var _styleSheet = _index.default;
function _getClassName() {
  var className = [];
  var args = arguments[0];
  var type = Object.prototype.toString.call(args).slice(8, -1).toLowerCase();
  if (type === 'string') {
    args = args.trim();
    args && className.push(args);
  } else if (type === 'array') {
    args.forEach(function (cls) {
      cls = _getClassName(cls).trim();
      cls && className.push(cls);
    });
  } else if (type === 'object') {
    for (var k in args) {
      k = k.trim();
      if (k && args.hasOwnProperty(k) && args[k]) {
        className.push(k);
      }
    }
  }
  return className.join(' ').trim();
}
function _getStyle(classNameExpression) {
  var cache = _styleSheet.__cache || (_styleSheet.__cache = {});
  var className = _getClassName(classNameExpression);
  var classNameArr = className.split(/\s+/);
  var style = cache[className];
  if (!style) {
    style = {};
    if (classNameArr.length === 1) {
      style = _styleSheet[classNameArr[0].trim()];
    } else {
      classNameArr.forEach(function (cls) {
        var value = _styleSheet[cls.trim()];
        if (typeof value === 'object') {
          style = Object.assign(style, _styleSheet[cls.trim()]);
        }
      });
    }
    cache[className] = style;
  }
  return style;
}
var prefixCls = 'rax-text';
var Text = (0, _rax.forwardRef)(function (props, ref) {
  var className = props.className,
    style = props.style,
    numberOfLines = props.numberOfLines,
    children = props.children,
    onPress = props.onPress,
    onClick = props.onClick,
    rest = __rest(props, ["className", "style", "numberOfLines", "children", "onPress", "onClick"]);
  var handleClick = onClick || onPress;
  var lines = typeof numberOfLines === 'string' ? parseInt(numberOfLines, 10) : numberOfLines;
  var textString = '';
  if (children != null) {
    textString = Array.isArray(children) ? children.join('') : children.toString();
  }
  if (_universalEnv.isWeex) {
    return (0, _rax.createElement)("text", _extends({}, rest, {
      ref: ref,
      className: className,
      style: Object.assign({}, _getStyle(className), Object.assign({
        lines: lines
      }, style)),
      onClick: handleClick
    }), textString);
  } else if (_universalEnv.isMiniApp) {
    return (0, _rax.createElement)("text", _extends({}, rest, {
      ref: ref,
      className: prefixCls + " " + className,
      style: Object.assign({}, _getStyle(prefixCls + " " + className), Object.assign({
        lines: lines
      }, style)),
      onClick: handleClick,
      "number-of-lines": lines
    }), textString);
  } else {
    var classNames = [prefixCls, className];
    if (lines) {
      classNames.push(prefixCls + "--overflow-hidden");
      if (lines === 1) {
        classNames.push(prefixCls + "--singleline");
      } else {
        classNames.push(prefixCls + "--multiline");
      }
    }
    return (0, _rax.createElement)("span", _extends({}, rest, {
      ref: ref,
      className: classNames.join(' '),
      style: Object.assign({}, _getStyle(classNames.join(' ')), Object.assign(Object.assign({}, style), {
        webkitLineClamp: lines > 1 ? lines : undefined
      })),
      onClick: handleClick
    }), textString);
  }
});
Text.displayName = 'Text';
var _default = Text;
exports.default = _default;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;
var _rax = __webpack_require__(0);
var flattenChildren = _rax.shared.flattenChildren;
function convertChildrenToArray(children) {
  // flatten children
  children = flattenChildren(children, []);
  return Array.isArray(children) ? children : [].concat(children);
}
var Children = {
  map: function (children, fn, ctx) {
    if (children == null) return null;
    children = convertChildrenToArray(children);
    return children.map(function (child, index) {
      return fn.call(ctx, child, index);
    });
  },
  forEach: function (children, fn, ctx) {
    if (children == null) return null;
    children = convertChildrenToArray(children);
    children.forEach(function (child, index) {
      return fn.call(ctx, child, index);
    });
  },
  count: function (children) {
    if (children == null) return 0;
    return convertChildrenToArray(children).length;
  },
  only: function (children) {
    // `only` receive rax element child
    // null value is not acceptable
    children = Children.toArray(children);
    if (children.length !== 1) throw new Error('Children.only: expected to receive a single element child.');
    return children[0];
  },
  toArray: function (children) {
    if (children == null) return []; // `toArray` filter null value

    return convertChildrenToArray(children).filter(function (child) {
      return child !== null;
    });
  }
};
var _default = Children;
exports.default = _default;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
  'use strict';

  var classNames = function () {
    // don't inherit from Object so we can skip hasOwnProperty check later
    // http://stackoverflow.com/questions/15518328/creating-js-object-with-object-createnull#answer-21079232
    function StorageObject() {}
    StorageObject.prototype = Object.create(null);
    function _parseArray(resultSet, array) {
      var length = array.length;
      for (var i = 0; i < length; ++i) {
        _parse(resultSet, array[i]);
      }
    }
    var hasOwn = {}.hasOwnProperty;
    function _parseNumber(resultSet, num) {
      resultSet[num] = true;
    }
    function _parseObject(resultSet, object) {
      if (object.toString !== Object.prototype.toString && !object.toString.toString().includes('[native code]')) {
        resultSet[object.toString()] = true;
        return;
      }
      for (var k in object) {
        if (hasOwn.call(object, k)) {
          // set value to false instead of deleting it to avoid changing object structure
          // https://www.smashingmagazine.com/2012/11/writing-fast-memory-efficient-javascript/#de-referencing-misconceptions
          resultSet[k] = !!object[k];
        }
      }
    }
    var SPACE = /\s+/;
    function _parseString(resultSet, str) {
      var array = str.split(SPACE);
      var length = array.length;
      for (var i = 0; i < length; ++i) {
        resultSet[array[i]] = true;
      }
    }
    function _parse(resultSet, arg) {
      if (!arg) return;
      var argType = typeof arg;

      // 'foo bar'
      if (argType === 'string') {
        _parseString(resultSet, arg);

        // ['foo', 'bar', ...]
      } else if (Array.isArray(arg)) {
        _parseArray(resultSet, arg);

        // { 'foo': true, ... }
      } else if (argType === 'object') {
        _parseObject(resultSet, arg);

        // '130'
      } else if (argType === 'number') {
        _parseNumber(resultSet, arg);
      }
    }
    return function () {
      // don't leak arguments
      // https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#32-leaking-arguments
      var len = arguments.length;
      var args = Array(len);
      for (var i = 0; i < len; i++) {
        args[i] = arguments[i];
      }
      var classSet = new StorageObject();
      _parseArray(classSet, args);
      var list = [];
      for (var k in classSet) {
        if (classSet[k]) {
          list.push(k);
        }
      }
      return list.join(' ');
    };
  }();
  if ( true && module.exports) {
    classNames.default = classNames;
    module.exports = classNames;
  } else if (true) {
    // register as 'classnames', consistent with npm package name
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return classNames;
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})();

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;
var _rax = __webpack_require__(0);
var _universalEnv = __webpack_require__(3);
var _index = _interopRequireDefault(__webpack_require__(25));
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};
  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
var _styleSheet = _index.default;
function _getClassName() {
  var className = [];
  var args = arguments[0];
  var type = Object.prototype.toString.call(args).slice(8, -1).toLowerCase();
  if (type === 'string') {
    args = args.trim();
    args && className.push(args);
  } else if (type === 'array') {
    args.forEach(function (cls) {
      cls = _getClassName(cls).trim();
      cls && className.push(cls);
    });
  } else if (type === 'object') {
    for (var k in args) {
      k = k.trim();
      if (k && args.hasOwnProperty(k) && args[k]) {
        className.push(k);
      }
    }
  }
  return className.join(' ').trim();
}
function _getStyle(classNameExpression) {
  var cache = _styleSheet.__cache || (_styleSheet.__cache = {});
  var className = _getClassName(classNameExpression);
  var classNameArr = className.split(/\s+/);
  var style = cache[className];
  if (!style) {
    style = {};
    if (classNameArr.length === 1) {
      style = _styleSheet[classNameArr[0].trim()];
    } else {
      classNameArr.forEach(function (cls) {
        var value = _styleSheet[cls.trim()];
        if (typeof value === 'object') {
          style = Object.assign(style, _styleSheet[cls.trim()]);
        }
      });
    }
    cache[className] = style;
  }
  return style;
}
var prefixCls = 'rax-text';
var Text = (0, _rax.forwardRef)(function (props, ref) {
  var className = props.className,
    style = props.style,
    numberOfLines = props.numberOfLines,
    children = props.children,
    onPress = props.onPress,
    onClick = props.onClick,
    rest = __rest(props, ["className", "style", "numberOfLines", "children", "onPress", "onClick"]);
  var handleClick = onClick || onPress;
  var lines = typeof numberOfLines === 'string' ? parseInt(numberOfLines, 10) : numberOfLines;
  var textString = '';
  if (children != null) {
    textString = Array.isArray(children) ? children.join('') : children.toString();
  }
  if (_universalEnv.isWeex) {
    return (0, _rax.createElement)("text", _extends({}, rest, {
      ref: ref,
      className: className,
      style: Object.assign({}, _getStyle(className), Object.assign({
        lines: lines
      }, style)),
      onClick: handleClick
    }), textString);
  } else if (_universalEnv.isMiniApp) {
    return (0, _rax.createElement)("text", _extends({}, rest, {
      ref: ref,
      className: prefixCls + " " + className,
      style: Object.assign({}, _getStyle(prefixCls + " " + className), Object.assign({
        lines: lines
      }, style)),
      onClick: handleClick,
      "number-of-lines": lines
    }), textString);
  } else {
    var classNames = [prefixCls, className];
    if (lines) {
      classNames.push(prefixCls + "--overflow-hidden");
      if (lines === 1) {
        classNames.push(prefixCls + "--singleline");
      } else {
        classNames.push(prefixCls + "--multiline");
      }
    }
    return (0, _rax.createElement)("span", _extends({}, rest, {
      ref: ref,
      className: classNames.join(' '),
      style: Object.assign({}, _getStyle(classNames.join(' ')), Object.assign(Object.assign({}, style), {
        webkitLineClamp: lines > 1 ? lines : undefined
      })),
      onClick: handleClick
    }), textString);
  }
});
Text.displayName = 'Text';
var _default = Text;
exports.default = _default;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;
var _rax = __webpack_require__(0);
var _universalEnv = __webpack_require__(26);
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};
  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
var Image = (0, _rax.forwardRef)(function (props, ref) {
  var _useState = (0, _rax.useState)(props.source),
    source = _useState[0],
    setSource = _useState[1];
  var isInitialMount = (0, _rax.useRef)(false);
  var onError = function (e) {
    var fallbackSource = props.fallbackSource,
      _props$onError = props.onError,
      onError = _props$onError === void 0 ? function () {} : _props$onError;
    if (fallbackSource && fallbackSource.uri && source.uri !== fallbackSource.uri) {
      setSource(fallbackSource);
    }
    onError(e);
  };
  var onLoad = function (e) {
    var _props$onLoad = props.onLoad,
      onLoad = _props$onLoad === void 0 ? function () {} : _props$onLoad;
    if (typeof e.success !== 'undefined') {
      if (e.success) {
        onLoad(e);
      } else {
        onError(e);
      }
    } else if (typeof e.currentTarget !== 'undefined') {
      if (e.currentTarget.naturalWidth > 1 && e.currentTarget.naturalHeight > 1) {
        onLoad(e);
      } else {
        onError(e);
      }
    }
  };
  (0, _rax.useEffect)(function () {
    if (!isInitialMount.current) {
      isInitialMount.current = true;
    } else {
      setSource(props.source);
    }
  }, [props.source.uri]);
  var nativeProps = Object.assign({}, props); // Source must a object

  if (source && source.uri) {
    var _nativeProps$style = nativeProps.style,
      style = _nativeProps$style === void 0 ? {} : _nativeProps$style;
    var width = source.width,
      height = source.height,
      uri = source.uri;
    nativeProps.style = Object.assign({
      width: width,
      height: height
    }, style);
    nativeProps.src = uri;
    nativeProps.onLoad = onLoad;
    nativeProps.onError = onError;
    delete nativeProps.source; // for cover and contain

    var resizeMode = nativeProps.resizeMode || nativeProps.style.resizeMode;
    if (resizeMode) {
      if (_universalEnv.isWeex) {
        nativeProps.resize = resizeMode;
        nativeProps.style.resizeMode = resizeMode;
      } else {
        nativeProps.style.objectFit = resizeMode;
      }
    }
    var className = nativeProps.className,
      children = nativeProps.children,
      nativeStyle = nativeProps.style,
      otherProps = __rest(nativeProps, ["className", "children", "style"]);
    var cls = ['rax-image', className].join(' ');
    return _universalEnv.isWeex ? (0, _rax.createElement)("image", _extends({
      ref: ref,
      className: cls,
      style: nativeStyle
    }, otherProps)) : (0, _rax.createElement)("img", _extends({
      ref: ref,
      className: cls,
      style: nativeStyle
    }, otherProps));
  }
  return null;
});
var _default = Image;
exports.default = _default;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = cloneElement;
var _rax = __webpack_require__(0);
var _raxIsValidElement = _interopRequireDefault(__webpack_require__(12));
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
var Host = _rax.shared.Host,
  Element = _rax.shared.Element,
  flattenChildren = _rax.shared.flattenChildren;
var RESERVED_PROPS = {
  key: true,
  ref: true
};
function cloneElement(element, config) {
  if (!(0, _raxIsValidElement.default)(element)) {
    throw Error('cloneElement: not a valid element.');
  } // Original props are copied

  var props = Object.assign({}, element.props); // Reserved names are extracted

  var key = element.key;
  var ref = element.ref; // Owner will be preserved, unless ref is overridden

  var owner = element._owner;
  if (config) {
    // Should reset ref and owner if has a new ref
    if (config.ref !== undefined) {
      ref = config.ref;
      owner = Host.owner;
    }
    if (config.key !== undefined) {
      key = String(config.key);
    } // Resolve default props

    var defaultProps;
    if (element.type && element.type.defaultProps) {
      defaultProps = element.type.defaultProps;
    } // Remaining properties override existing props

    for (var propName in config) {
      if (config.hasOwnProperty(propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        if (config[propName] === undefined && defaultProps !== undefined) {
          // Resolve default props
          props[propName] = defaultProps[propName];
        } else {
          props[propName] = config[propName];
        }
      }
    }
  }
  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    children[_key - 2] = arguments[_key];
  }
  if (children.length) {
    props.children = flattenChildren(children);
  }
  return new Element(element.type, key, ref, props, owner);
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = isValidElement;
function isValidElement(object) {
  return typeof object === 'object' && object !== null && object.type && object.props;
}

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = unmountComponentAtNode;
var _rax = __webpack_require__(0);
var Instance = _rax.shared.Instance;
function unmountComponentAtNode(node) {
  var component = Instance.get(node);
  if (!component) {
    return false;
  }
  Instance.remove(node);
  component._internal.unmountComponent();
  return true;
}

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getBoundingClientRect = exports.getScrollOffset = void 0;
var _universalEnv = __webpack_require__(3);
var _miniapp = _interopRequireDefault(__webpack_require__(27));
var _web = _interopRequireDefault(__webpack_require__(28));
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

// eslint-disable-next-line import/no-extraneous-dependencies
var element;
if ((_universalEnv.isMiniApp || _universalEnv.isWeChatMiniProgram) && !_universalEnv.isWeb) {
  // For cased that import wechat or miniapp sdk in web
  element = _miniapp.default;
} else {
  // Web as default
  element = _web.default;
}
var getScrollOffset = element.getScrollOffset;
exports.getScrollOffset = getScrollOffset;
var getBoundingClientRect = element.getBoundingClientRect;
exports.getBoundingClientRect = getBoundingClientRect;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;
function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}
(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }
  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();
function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  }
  // if setTimeout wasn't available but was latter defined
  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }
  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}
function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  }
  // if clearTimeout wasn't available but was latter defined
  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }
  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;
function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }
  draining = false;
  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }
  if (queue.length) {
    drainQueue();
  }
}
function drainQueue() {
  if (draining) {
    return;
  }
  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;
  while (len) {
    currentQueue = queue;
    queue = [];
    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }
    queueIndex = -1;
    len = queue.length;
  }
  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}
process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);
  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }
  queue.push(new Item(fun, args));
  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
};

// v8 likes predictible objects
function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}
Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};
function noop() {}
process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;
process.listeners = function () {
  return [];
};
process.binding = function () {
  throw new Error('process.binding is not supported');
};
process.cwd = function () {
  return '/';
};
process.chdir = function () {
  throw new Error('process.chdir is not supported');
};
process.umask = function () {
  return 0;
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;
var _universalEnv = __webpack_require__(3);

// eslint-disable-next-line import/no-extraneous-dependencies
var Cache = /*#__PURE__*/function () {
  function Cache() {}
  var _proto = Cache.prototype;
  _proto.getSelector = function (selector, context) {
    if (_universalEnv.isMiniApp && !_universalEnv.isWeb) {
      var selectorQuery = my.createSelectorQuery().selectAll(selector);
      return selectorQuery;
    } else if (_universalEnv.isWeChatMiniProgram && !_universalEnv.isWeb) {
      if (!context) {
        context = wx;
      }
      var _selectorQuery = context === null || context === void 0 ? void 0 : context.createSelectorQuery().selectAll(selector);
      return _selectorQuery;
    } else {
      // Transform NodeList to Array
      var nodes = Array.from(document.querySelectorAll(selector));
      return nodes;
    }
  };
  return Cache;
}();
exports.default = Cache;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = createPortal;
var _rax = __webpack_require__(0);
var _raxUnmountComponentAtNode = _interopRequireDefault(__webpack_require__(13));
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}
var Portal = /*#__PURE__*/
function (_Component) {
  _inheritsLoose(Portal, _Component);
  function Portal(props, context) {
    return _Component.call(this, props, context) || this;
  }
  var _proto = Portal.prototype;
  _proto.componentDidMount = function () {
    this.renderPortal();
  };
  _proto.componentDidUpdate = function (prevProps) {
    if (prevProps.container !== this.props.container) {
      (0, _raxUnmountComponentAtNode.default)(prevProps.container);
    }
    this.renderPortal();
  };
  _proto.componentWillUnmount = function () {
    (0, _raxUnmountComponentAtNode.default)(this.props.container);
  };
  _proto.renderPortal = function () {
    (0, _rax.render)(this.props.element, this.props.container, {
      parent: this
    });
  };
  _proto.render = function () {
    return null;
  };
  return Portal;
}(_rax.Component);
function createPortal(element, container) {
  return (0, _rax.createElement)(Portal, {
    element: element,
    container: container
  });
}

/***/ }),
/* 19 */
/***/ (function(module) {

module.exports = JSON.parse("[{\"name\":\"General\",\"title\":\"通用\",\"order\":0,\"components\":[{\"componentName\":\"rax-lowcode-test\",\"componentPascalName\":\"RaxLowcodeTest\",\"category\":\"General\",\"title\":\"示例组件\",\"demos\":[{\"href\":\"/basic\",\"title\":\"基础\",\"demoName\":\"basic\",\"demoPascalName\":\"Basic\",\"order\":1,\"miniappPageHref\":\"/pages/RaxLowcodeTestBasic/index\"},{\"href\":\"/advance\",\"title\":\"高级\",\"demoName\":\"advance\",\"demoPascalName\":\"Advance\",\"order\":2,\"miniappPageHref\":\"/pages/RaxLowcodeTestAdvance/index\"}]}]}]");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _extends.apply(this, arguments);
}
module.exports = _extends, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Driver for Miniapp
 **/
Object.defineProperty(exports, "__esModule", {
  value: true
});
function cached(fn) {
  var cache = Object.create(null);
  return function (str) {
    return cache[str] || (cache[str] = fn(str));
  };
}
// opacity -> opa
// fontWeight -> ntw
// lineHeight|lineClamp -> ne[ch]
// flex|flexGrow|flexPositive|flexShrink|flexNegative|boxFlex|boxFlexGroup|zIndex -> ex(?:s|g|n|p|$)
// order -> ^ord
// zoom -> zoo
// gridArea|gridRow|gridRowEnd|gridRowSpan|gridRowStart|gridColumn|gridColumnEnd|gridColumnSpan|gridColumnStart -> grid
// columnCount -> mnc
// tabSize -> bs
// orphans -> orp
// windows -> ows
// animationIterationCount -> onit
// borderImageOutset|borderImageSlice|borderImageWidth -> erim
var NON_DIMENSIONAL_REG = /opa|ntw|ne[ch]|ex(?:s|g|n|p|$)|^ord|zoo|grid|orp|ows|mnc|^columns$|bs|erim|onit/i;
var EVENT_PREFIX_REG = /^on[A-Z]/;
var CLASS_NAME = 'className';
var CLASS = 'class';
var STYLE = 'style';
var CHILDREN = 'children';
var TEXT_CONTENT_ATTR = 'textContent';
var CREATE_COMMENT = 'createComment';
var CREATE_TEXT_NODE = 'createTextNode';
var SET_ATTRIBUTE = 'setAttribute';
var REMOVE_ATTRIBUTE = 'removeAttribute';
var EMPTY = '';
var isDimensionalProp = cached(function (prop) {
  return !NON_DIMENSIONAL_REG.test(prop);
});
var isEventProp = cached(function (prop) {
  return EVENT_PREFIX_REG.test(prop);
});
function createBody() {
  return document.body;
}
function createEmpty() {
  return document[CREATE_COMMENT](EMPTY);
}
function createText(text) {
  return document[CREATE_TEXT_NODE](text);
}
function updateText(node, text) {
  node[TEXT_CONTENT_ATTR] = text;
}
/**
* @param {string} type node type
* @param {object} props element properties
*/
function createElement(type, props) {
  var style;
  var attrs = {};
  var events = [];
  for (var prop in props) {
    var value = props[prop];
    if (prop === CHILDREN) continue;
    if (value !== null) {
      if (prop === STYLE) {
        style = value;
      } else if (isEventProp(prop)) {
        events.push({
          name: prop.slice(2).toLowerCase(),
          handler: value
        });
      } else {
        if (prop === CLASS_NAME) {
          prop = CLASS;
        }
        attrs[prop] = value;
      }
    }
  }
  // @ts-ignore
  var node = document._createElement({
    tagName: type,
    document: document,
    attrs: attrs
  });
  if (style) {
    setStyle(node, style);
  }
  events.forEach(function (_a) {
    var name = _a.name,
      handler = _a.handler;
    node.addEventListener(name, handler);
  });
  return node;
}
function appendChild(node, parent) {
  return parent.appendChild(node);
}
function removeChild(node, parent) {
  parent = parent || node.parentNode;
  // Maybe has been removed when remove child
  if (parent) {
    parent.removeChild(node);
  }
}
function replaceChild(newChild, oldChild, parent) {
  parent = parent || oldChild.parentNode;
  parent.replaceChild(newChild, oldChild);
}
function insertAfter(node, after, parent) {
  parent = parent || after.parentNode;
  var nextSibling = after.nextSibling;
  if (nextSibling) {
    // Performance improve when node has been existed before nextSibling
    if (nextSibling !== node) {
      insertBefore(node, nextSibling, parent);
    }
  } else {
    appendChild(node, parent);
  }
}
function insertBefore(node, before, parent) {
  parent = parent || before.parentNode;
  parent.insertBefore(node, before);
}
function addEventListener(node, eventName, eventHandler) {
  return node.addEventListener(eventName, eventHandler);
}
function removeEventListener(node, eventName, eventHandler) {
  return node.removeEventListener(eventName, eventHandler);
}
function removeAttribute(node, propKey) {
  if (propKey === CLASS_NAME) propKey = CLASS;
  if (propKey in node) {
    node[propKey] = null;
  }
  node[REMOVE_ATTRIBUTE](propKey);
}
function setAttribute(node, propKey, propValue) {
  if (propKey === CLASS_NAME) propKey = CLASS;
  if (propKey in node) {
    node[propKey] = propValue;
  } else {
    node[SET_ATTRIBUTE](propKey, propValue);
  }
}
/**
* @param {object} node target node
* @param {object} style target node style value
*/
function setStyle(node, style) {
  for (var prop in style) {
    var value = style[prop];
    var convertedValue = void 0;
    if (typeof value === 'number' && isDimensionalProp(prop)) {
      convertedValue = value + 'rpx';
    } else {
      convertedValue = value;
    }
    // Support CSS custom properties (variables) like { --main-color: "black" }
    if (prop[0] === '-' && prop[1] === '-') {
      // reference: https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration/setProperty.
      // style.setProperty do not support Camel-Case style properties.
      node.style.setProperty(prop, convertedValue);
    } else {
      node.style[prop] = convertedValue;
    }
  }
}
function beforeRender() {}
function afterRender() {}
/**
* Remove all children from node.
* @NOTE: Optimization at web.
*/
function removeChildren(node) {
  node.textContent = EMPTY;
}
exports.default = {
  createBody: createBody,
  createEmpty: createEmpty,
  createText: createText,
  updateText: updateText,
  createElement: createElement,
  appendChild: appendChild,
  removeChild: removeChild,
  replaceChild: replaceChild,
  insertAfter: insertAfter,
  insertBefore: insertBefore,
  addEventListener: addEventListener,
  removeEventListener: removeEventListener,
  removeAttribute: removeAttribute,
  setAttribute: setAttribute,
  setStyle: setStyle,
  beforeRender: beforeRender,
  afterRender: afterRender,
  removeChildren: removeChildren
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(42);


/***/ }),
/* 23 */
/***/ (function(module, exports) {

var n = {
  t: 1,
  i: !1,
  driver: null,
  rootComponents: {},
  rootInstances: {},
  owner: null
};
function t(n, t, i, r, u) {
  return {
    type: n,
    key: t,
    ref: i,
    props: r,
    _owner: u
  };
}
function i(n) {
  return null === n;
}
function r(n) {
  return "function" == typeof n;
}
function u(n) {
  return "object" == typeof n;
}
function f(n) {
  return "[object Object]" === h.toString.call(n);
}
function o(n) {
  return Array.isArray(n);
}
function e(n) {
  return "string" == typeof n;
}
function s(n) {
  return "number" == typeof n;
}
var c = function () {},
  h = {};
function a(n, t) {
  if (o(n)) for (var i = 0, r = n.length; i < r; i++) {
    a(n[i], t);
  } else t.push(n);
}
function v(n) {
  if (null == n) return n;
  var t = [];
  return a(n, t), t.length - 1 ? t : t[0];
}
var l = [],
  p = [],
  d = [],
  _ = setTimeout;
function x(n) {
  var t;
  while (t = n.shift()) {
    t();
  }
}
function w(n) {
  0 === l.length && _(y), l.push(n);
}
function y() {
  x(l);
}
function b(n) {
  0 === p.length && _(j), p.push(n);
}
function j() {
  x(p);
}
function m(n) {
  d.push(n);
}
function O(t, i, r) {
  var u,
    o = void 0 === r ? "" : " got: " + function (n) {
      return f(n) ? Object.keys(n) : n;
    }(r);
  return Error(t + ": #" + i + ", " + (((u = n.owner) ? "check <" + u.u() + ">" : "no owner") + ".") + o);
}
function g(n, t) {
  throw O("Error", n, t);
}
function k(n, t) {
  var i = O("Warn", n, t);
  _(function () {
    throw i;
  }, 0);
}
var I = {
  key: !0,
  ref: !0
};
function A(i, r, u) {
  var f,
    e = {},
    s = null,
    h = null;
  if (null != r) for (f in h = void 0 === r.ref ? null : r.ref, s = void 0 === r.key ? null : "" + r.key, r) {
    I[f] || (e[f] = r[f]);
  }
  var a = arguments.length - 2;
  if (a > 0) if (1 !== a || o(u)) {
    var l = u;
    if (a > 1) {
      l = Array(a);
      for (var p = 0; p < a; p++) {
        l[p] = arguments[p + 2];
      }
    }
    e.children = v(l);
  } else e.children = u;
  if (i && i.defaultProps) {
    var d = i.defaultProps;
    for (f in d) {
      void 0 === e[f] && (e[f] = d[f]);
    }
  }
  return null == i && (i = c, k(0)), new t(i, s, h, e, n.owner);
}
function C(n, t, i) {
  for (var r = 0, u = n && n.length; r < u; r++) {
    n[r].call(t, i);
  }
}
var E = h.hasOwnProperty;
function P(n, t) {
  return n === t ? 0 !== n || 1 / n == 1 / t : n != n && t != t;
}
function D(n, t) {
  if (P(n, t)) return !0;
  if (!u(n) || i(n) || !u(t) || i(t)) return !1;
  var r = Object.keys(n);
  if (r.length !== Object.keys(t).length) return !1;
  for (var f = 0; f < r.length; f++) {
    if (!E.call(t, r[f]) || !P(n[r[f]], t[r[f]])) return !1;
  }
  return !0;
}
function S() {
  return n.owner && n.owner._instance;
}
function U() {
  var n = S();
  if (n) return n;
  g(1);
}
function H(n, t) {
  if (i(t) || n.length !== t.length) return !1;
  for (var r = 0; r < n.length; r++) {
    if (!P(n[r], t[r])) return !1;
  }
  return !0;
}
function N(t) {
  var i = U(),
    u = i.getHookID(),
    f = i.getHooks();
  if (!f[u]) {
    r(t) && (t = t());
    f[u] = [t, function (t) {
      n.i || j();
      var o = f[u],
        e = o[2];
      r(t) && (t = t(e)), P(t, e) || (o[2] = t, S() === i ? i.o = !0 : i.h());
    }, t];
  }
  var o = f[u];
  return P(o[0], o[2]) || (o[0] = o[2], i.v = !0), o;
}
function R(n, t) {
  T(n, t);
}
function T(n, t, i) {
  var r = U(),
    u = r.getHookID(),
    f = r.getHooks();
  if (t = void 0 === t ? null : t, f[u]) {
    var o = f[u],
      e = o.l,
      s = o.p;
    o.p = t, o._ = s, e.current = n;
  } else {
    var c = function n(t) {
        if (!t && i) return b(function () {
          return n(!0);
        });
        var r = n.current;
        r && (h.current = r(), n.current = null);
      },
      h = function n(t) {
        if (!t && i) return b(function () {
          return n(!0);
        });
        var r = n.current;
        r && (r(), n.current = null);
      };
    c.current = n, f[u] = {
      l: c,
      j: h,
      _: t,
      p: t
    }, r.didMount.push(c), r.willUnmount.push(function () {
      return h(!0);
    }), r.didUpdate.push(function () {
      var n = f[u],
        t = n.p,
        i = n.l;
      null != t && H(t, n._) || (h(), i());
    });
  }
}
function V(n, t) {
  var r = U(),
    u = r.getHookID(),
    f = r.getHooks();
  if (t = void 0 === t ? null : t, f[u]) {
    var o = f[u][1];
    !i(t) && H(t, o) || (f[u] = [n(), t]);
  } else f[u] = [n(), t];
  return f[u][0];
}
function W(n) {
  return o(n) ? n : [n];
}
function Z(n, t) {
  var i;
  while (n && n._internal) {
    if (t(n)) {
      i = n;
      break;
    }
    n = n._internal.m;
  }
  return i;
}
var $ = 0;
function q(n, t) {
  n.prototype = Object.create(t.prototype), n.prototype.constructor = n, z(n, t);
}
function z(n, t) {
  return (z = Object.setPrototypeOf || function (n, t) {
    return n.__proto__ = t, n;
  })(n, t);
}
var B = function () {
    function t(n) {
      this.O = n;
    }
    var i = t.prototype;
    return i.g = function (t, i, r) {
      this._parent = t, this.m = i, this._context = r, this._mountID = n.t++;
    }, i.k = function () {
      this.O = this._nativeNode = this._parent = this.m = this._context = null, this._instance && (this._instance = this._instance._internal = null);
    }, i.I = function (n, t, i, r) {
      this.g(n, t, i), this.A(r);
      var u = {};
      return u._internal = this, u;
    }, i.unmountComponent = function (t) {
      this._nativeNode && !t && n.driver.removeChild(this._nativeNode, this._parent), this.k();
    }, i.u = function () {
      var n = this.O,
        t = n && n.type;
      return t && t.displayName || t && t.name || t || n;
    }, i.A = function (t) {
      var i = this.C(),
        r = this._parent;
      t ? t(i, r) : n.driver.appendChild(i, r);
    }, i.C = function () {
      return null == this._nativeNode ? this._nativeNode = this.P() : this._nativeNode;
    }, i.D = function () {
      return this.C();
    }, t;
  }(),
  F = function (t) {
    function i() {
      return t.apply(this, arguments) || this;
    }
    q(i, t);
    var r = i.prototype;
    return r.P = function () {
      return n.driver.createEmpty(this);
    }, r.S = function () {}, i;
  }(B);
function G(n, t, i) {
  var r = n ? n.ref : null,
    u = t ? t.ref : null;
  r !== u && (r && K(n._owner, r, i), u && J(t._owner, u, i));
}
function J(n, t, i) {
  if (n) {
    var f = i.D();
    r(t) ? t(f) : u(t) ? t.current = f : n._instance.refs[t] = f;
  } else k(3);
}
function K(n, t, i) {
  if (r(t)) t(null);else {
    var f = i.D();
    u(t) && t.current === f ? t.current = null : n._instance.refs[t] === f && delete n._instance.refs[t];
  }
}
function L(t) {
  var r;
  return f(t) && null !== t && t.type ? r = e(t.type) ? new n.U(t) : new n.H(t) : e(t) || s(t) ? r = new n.N(t + "") : o(t) ? r = new n.R(t) : (void 0 === t || i(t) || !1 === t || !0 === t || k(2, t), r = new n.T(t)), r;
}
function M(n, t) {
  var r = i(n),
    f = i(t);
  return r || f ? r === f : !(!o(n) || !o(t)) || (e(n) || s(n) ? e(t) || s(t) : u(n) && u(t) && n.type === t.type && n.key === t.key);
}
function Q(n, t, i) {
  var r = t && t.key,
    u = "." + i.toString(36);
  if (e(r)) {
    var f = "$" + r;
    return void 0 === n[f] ? f : u;
  }
  return u;
}
function X(t) {
  var i = t;
  while (i = t.m && t.m._internal) {
    if (i instanceof n.H) t = i;else {
      for (var r = Object.keys(i.V), u = t.W - 1; u >= 0; u--) {
        var f = i.V[r[u]].C();
        if (!o(f)) return f;
        if (f.length > 0) return f[f.length - 1];
      }
      if (!(i instanceof n.R)) return null;
      t = i;
    }
  }
}
var Y = function () {
    function n(n, t) {
      this.props = n, this.context = t, this.refs = {};
    }
    var t = n.prototype;
    return t.setState = function (n, t) {
      this.updater.setState(this, n, t);
    }, t.forceUpdate = function (n) {
      this.updater.forceUpdate(this, n);
    }, n;
  }(),
  nn = function (n) {
    function t(t, i) {
      var r;
      return (r = n.call(this, t, i) || this).Z = !0, r;
    }
    return q(t, n), t;
  }(Y),
  tn = 1,
  rn = function (n) {
    function t() {
      var t;
      return (t = n.call(this) || this).$ = [], t.q = tn++, t;
    }
    q(t, n);
    var i = t.prototype;
    return i.D = function () {
      return this.B().D();
    }, i.B = function () {
      return this._internal._renderedComponent;
    }, i.h = function (n) {
      this.$ = n, this.forceUpdate();
    }, i.render = function () {
      return this.$;
    }, t;
  }(Y),
  un = {
    set: function set(t, i) {
      t._r || (t._r = i, i.q && (n.rootInstances[i.q] = i, n.rootComponents[i.q] = i._internal));
    },
    get: function get(n) {
      return n._r;
    },
    remove: function remove(t) {
      var i = this.get(t);
      i && (t._r = null, i.q && (delete n.rootComponents[i.q], delete n.rootInstances[i.q]));
    },
    mount: function mount(t, i, r) {
      var u = r.parent,
        f = r.hydrate,
        o = n.driver;
      null == i && (i = o.createBody());
      var e,
        s = {
          element: t,
          container: i,
          hydrate: f
        };
      if (o.beforeRender && o.beforeRender(s), u) {
        var c = u._internal;
        e = c.F(c._context);
      }
      var h = this.get(i);
      if (h && h.q) return e && (h._internal.G = e), h.h(t), o.afterRender && o.afterRender(s), h;
      var a = L(A(rn)).I(i, u, e || {});
      return this.set(i, a), a.h(t), o.afterRender && o.afterRender(s), a;
    }
  },
  fn = Object.assign,
  on = /^on[A-Z]/,
  en = function (t) {
    function u() {
      return t.apply(this, arguments) || this;
    }
    q(u, t);
    var f = u.prototype;
    return f.I = function (n, t, i, r) {
      this.g(n, t, i);
      var u = this.O,
        f = u.props,
        o = u.type,
        e = f.children,
        s = f.append || "tree";
      this.J = fn({}, f.style);
      var c = {
        type: o,
        props: f
      };
      return c._internal = this, this._instance = c, "tree" === s ? (this.K(e, i), this.A(r)) : (this.A(r), this.K(e, i)), u && u.ref && J(u._owner, u.ref, this), c;
    }, f.K = function (n, t) {
      if (null == n) return n;
      var i = this.C();
      return this.L(i, W(n), t);
    }, f.L = function (n, t, i, r) {
      for (var u = this.V = {}, f = [], o = 0, e = t.length; o < e; o++) {
        var s = t[o],
          c = L(s);
        u[Q(u, s, o)] = c, c.W = o;
        var h = c.I(n, this._instance, i, r);
        f.push(h);
      }
      return f;
    }, f.M = function (n) {
      var t = this.V;
      if (t) {
        for (var i in t) {
          t[i].unmountComponent(n);
        }
        this.V = null;
      }
    }, f.unmountComponent = function (t) {
      if (this._nativeNode) {
        var i = this.O.ref;
        i && K(this.O._owner, i, this), un.remove(this._nativeNode), t || n.driver.removeChild(this._nativeNode, this._parent);
      }
      this.M(!0), this.J = null, this.k();
    }, f.S = function (n, t, i, r) {
      this.O = t, G(n, t, this);
      var u = n.props,
        f = t.props;
      this.X(u, f), null == u.children || o(u.children) && 0 === u.children.length ? this.K(f.children, r) : this.Y(f.children, r);
    }, f.X = function (t, i) {
      var u,
        f,
        o,
        e = n.driver,
        s = this.C();
      for (u in t) {
        if ("children" !== u && null != t[u] && !i.hasOwnProperty(u)) if ("style" === u) {
          var c = this.J;
          for (f in c) {
            (o = o || {})[f] = "";
          }
          this.J = null;
        } else if (on.test(u)) {
          var h = t[u];
          r(h) && e.removeEventListener(s, u.slice(2).toLowerCase(), h);
        } else e.removeAttribute(s, u, t[u]);
      }
      for (u in i) {
        var a = i[u],
          v = "style" === u ? this.J : null != t ? t[u] : void 0;
        if ("children" !== u && v !== a && (null != a || null != v)) if ("style" === u) {
          if (a ? a = this.J = fn({}, a) : this.J = null, null != v) {
            for (f in v) {
              a && (a[f] || 0 === a[f]) || ((o = o || {})[f] = "");
            }
            for (f in a) {
              v[f] !== a[f] && ((o = o || {})[f] = a[f]);
            }
          } else o = a;
        } else if (on.test(u)) {
          var l = u.slice(2).toLowerCase();
          r(v) && e.removeEventListener(s, l, v, i), r(a) && e.addEventListener(s, l, a, i);
        } else null != a ? e.setAttribute(s, u, a) : e.removeAttribute(s, u, t[u]);
      }
      o && e.setStyle(s, o);
    }, f.Y = function (t, r) {
      var u = this.V,
        f = n.driver;
      if (null != t || null != u) {
        var e = {};
        if (null != t) for (var s = 0, c = (t = W(t)).length; s < c; s++) {
          var h = t[s],
            a = Q(e, h, s),
            v = u && u[a],
            l = v && v.O,
            p = v && v._context;
          null != v && M(l, h) ? (l === h && p === r || v.S(l, h, r, r), e[a] = v) : (v && (v.nn = !0), e[a] = L(h));
        }
        var d = this.C(),
          _ = o(d),
          x = null,
          w = null,
          y = !1,
          b = !1,
          j = null,
          m = !(!f.removeChildren || !(i(t) || t && !t.length) || _);
        if (null != u) {
          for (var O in u) {
            var g = u[O],
              k = g.nn || !e[O];
            x ? k && g.unmountComponent(m) : (b = k, o(w = (x = g).C()) && (y = 0 === w.length, w = w[0]));
          }
          (_ && 0 === d.length || y) && (j = X(this));
        }
        var I = function (n, t) {
            for (var i = 0, r = (n = W(n)).length; i < r; i++) {
              j ? f.insertAfter(n[r - 1 - i], j) : w ? f.insertBefore(n[i], w) : t && f.appendChild(n[i], t);
            }
          },
          A = 0;
        for (var C in e) {
          var E = e[C],
            P = u && u[C];
          if (P === E) {
            var D = P.C();
            P.W !== A && I(D);
          } else _ && (d = this._parent), E.I(d, this._instance, r, I);
          E.W = A++, o(j = E.C()) && (j = j[j.length - 1]);
        }
        b && x.unmountComponent(m), m && f.removeChildren(this._nativeNode), this.V = e;
      }
    }, f.P = function () {
      var t = this._instance,
        i = n.driver.createElement(t.type, t.props, this);
      return un.set(i, t), i;
    }, u;
  }(B),
  sn = function (t) {
    function i() {
      return t.apply(this, arguments) || this;
    }
    q(i, t);
    var r = i.prototype;
    return r.S = function (t, i) {
      t !== (i = "" + i) && (this.O = i, n.driver.updateText(this.C(), i));
    }, r.P = function () {
      return n.driver.createText(this.O, this);
    }, i;
  }(B),
  cn = function (n) {
    function t(t, i) {
      var r;
      (r = n.call(this) || this).tn = !0, r.rn = t, r.un = 0, r.fn = 0, r.on = {}, r.o = !1, r.v = !1, r.en = null, r.sn = {}, r.didMount = [], r.didUpdate = [], r.willUnmount = [], r.state = h, t._forwardRef && (r.cn = r._forwardRef = i);
      var u = t.hn;
      return u && (r.shouldComponentUpdate = function (n) {
        for (var t = !0, i = u.length - 1; i > -1; i--) {
          if (t = u[i](r.props, n)) break;
        }
        return !t || r.cn !== r._forwardRef;
      }), r;
    }
    q(t, n);
    var i = t.prototype;
    return i.getHooks = function () {
      return this.on;
    }, i.getHookID = function () {
      return ++this.un;
    }, i.useContext = function (n) {
      var t = this,
        i = n._contextID,
        r = this.sn[i];
      if (!r) {
        var u = n.an(this);
        if (r = this.sn[i] = {
          vn: u
        }, u) {
          var f = function (n) {
            r.ln !== n && (t.v = !0, t.h());
          };
          u.pn(f), this.willUnmount.push(function () {
            return u.dn(f);
          });
        }
      }
      return r.ln = r.vn ? r.vn.getValue() : n._defaultValue;
    }, i.componentWillMount = function () {
      this.v = !0;
    }, i.componentDidMount = function () {
      C(this.didMount);
    }, i.componentWillReceiveProps = function () {
      this.v = !0;
    }, i.componentDidUpdate = function () {
      C(this.didUpdate);
    }, i.componentWillUnmount = function () {
      C(this.willUnmount);
    }, i.h = function () {
      this.setState(h);
    }, i.render = function () {
      this.un = 0, this.fn = 0, this.o = !1;
      var n = this.rn(this.props, this._forwardRef ? this._forwardRef : this.context);
      while (this.o) {
        this.fn++, this.fn > 24 && g(4), this.un = 0, this.o = !1, n = this.rn(this.props, this._forwardRef ? this._forwardRef : this.context);
      }
      return this.v && (this.en = n, this.v = !1), this.en;
    }, t;
  }(Y),
  hn = [];
function an(n) {
  return n._n;
}
function vn(t) {
  var i = t._internal;
  if (i) {
    n.i = !0;
    var r = i.O,
      u = i._context,
      f = i.G || u;
    i.G = void 0, (an(i) || i.xn) && (i.S(r, r, u, f), x(d)), n.i = !1;
  }
}
function ln(n, t) {
  return t._internal._mountID - n._internal._mountID;
}
function pn() {
  if (n.i) return w(pn);
  var t,
    i = hn;
  if (i.length > 0) {
    j(), hn = [], i.length > 1 && (i = i.filter(function (n) {
      return !!n._internal;
    }).sort(ln));
    while (t = i.pop()) {
      vn(t);
    }
  }
}
function dn(n, t) {
  if (hn.indexOf(n) < 0 && hn.push(n), t) {
    if (hn.length > 1) return;
    w(pn);
  } else pn();
}
function _n(n, t, i) {
  var r = n._internal;
  if (r) {
    i && function (n, t) {
      ((function (n) {
        return n.wn;
      })(n) || function (n) {
        return n.wn = [];
      }(n)).push(t);
    }(r, i);
    var u = r._renderedComponent;
    t ? (n.tn && (r.xn = !0), function (n, t) {
      (an(n) || function (n) {
        return n._n = [];
      }(n)).push(t);
    }(r, t), !r.yn && u && dn(n, !0)) : (r.xn = !0, u && dn(n));
  }
}
var xn = {
  setState: function setState(t, i, r) {
    n.i || j(), _n(t, i, r);
  },
  forceUpdate: function forceUpdate(n, t) {
    _n(n, null, t);
  }
};
function wn(n, t, i) {
  try {
    return n();
  } catch (n) {
    i ? i(n) : function (n, t) {
      var i = Z(n, function (n) {
        return n.componentDidCatch || n.constructor && n.constructor.getDerivedStateFromError;
      });
      i ? m(function () {
        var n = i._internal;
        n && wn(function () {
          if (i.componentDidCatch && i.componentDidCatch(t), i.constructor && i.constructor.getDerivedStateFromError) {
            var n = i.constructor.getDerivedStateFromError(t);
            i.setState(n);
          }
        }, n.m);
      }) : _(function () {
        throw t;
      }, 0);
    }(t, n);
  }
}
function yn(n, t) {
  m(function () {
    wn(n, t);
  });
}
function bn(n, t) {
  n && yn(function () {
    C(n, t);
  }, t);
}
var jn = function (t) {
    function i() {
      return t.apply(this, arguments) || this;
    }
    q(i, t);
    var u = i.prototype;
    return u.I = function (t, i, u, f) {
      this.g(t, i, u);
      var o,
        e,
        s = this.O,
        c = s.type,
        h = s.ref,
        a = s.props,
        v = c.prototype,
        l = this.bn(u);
      if (wn(function () {
        v && v.render ? o = new c(a, l) : r(c) ? o = new cn(c, h) : g(6, c);
      }, i), o) {
        o.props = a, o.context = l, o.refs = {}, o.updater = xn, o._internal = this, this._instance = o;
        var p = o.state;
        void 0 === p && (o.state = p = null), o.componentWillMount && wn(function () {
          o.componentWillMount();
        }, o), n.owner = this, o.state = this.jn(a, l);
        var d = this.wn;
        return this.wn = null, wn(function () {
          e = o.render();
        }, o), n.owner = null, this._renderedComponent = L(e), this._renderedComponent.I(this._parent, o, this.F(u), f), !s.type._forwardRef && h && J(s._owner, h, this), o.componentDidMount && yn(function () {
          o.componentDidMount();
        }, o), bn(d, o), o;
      }
    }, u.unmountComponent = function (n) {
      var t = this._instance;
      if (t && t.componentWillUnmount && wn(function () {
        t.componentWillUnmount();
      }, t), null != this._renderedComponent) {
        var i = this.O,
          r = i.ref;
        !i.type._forwardRef && r && K(i._owner, r, this), this._renderedComponent.unmountComponent(n), this._renderedComponent = null;
      }
      this._n = null, this.xn = !1, this.k();
    }, u.bn = function (n) {
      var t = {},
        i = this.O.type.contextTypes;
      if (i) for (var r in i) {
        t[r] = n[r];
      }
      return t;
    }, u.F = function (n) {
      var t = this._instance,
        i = t.getChildContext && t.getChildContext();
      return i ? fn({}, n, i) : n;
    }, u.jn = function (n, t) {
      var i = this._instance,
        u = this._n;
      if (!u) return i.state;
      this._n = null;
      for (var f = fn({}, i.state), o = 0; o < u.length; o++) {
        var e = u[o];
        fn(f, r(e) ? e.call(i, f, n, t) : e);
      }
      return f;
    }, u.S = function (n, t, i, r) {
      var u = this,
        f = this._instance;
      f && wn(function () {
        var i, o, e;
        u._context === r ? o = f.context : (o = u.bn(r), i = !0), e = t.props, n !== t && (i = !0), i && f.componentWillReceiveProps && (u.yn = !0, f.componentWillReceiveProps(e, o), u.yn = !1), u.O.type._forwardRef ? (f.cn = n.ref, f._forwardRef = t.ref) : G(n, t, u);
        var s = !0,
          c = f.props,
          h = f.state,
          a = u.jn(e, o),
          v = u.wn;
        if (u.wn = null, u.xn || (f.shouldComponentUpdate ? s = f.shouldComponentUpdate(e, a, o) : f.Z && (s = !D(c, e) || !D(h, a))), s) {
          u.xn = !1;
          var l = f.context;
          f.componentWillUpdate && f.componentWillUpdate(e, a, o), u.O = t, u._context = r, f.props = e, f.state = a, f.context = o, u.mn(r), f.componentDidUpdate && yn(function () {
            f.componentDidUpdate(c, h, l);
          }, f);
        } else u.O = t, u._context = r, f.props = e, f.state = a, f.context = o;
        bn(v, f);
      }, f);
    }, u.mn = function (t) {
      var i,
        r = this._renderedComponent,
        u = r.O,
        f = this._instance;
      if (n.owner = this, i = f.render(), n.owner = null, M(u, i)) {
        var e = r._context,
          s = this.F(t);
        u === i && e === s || r.S(u, i, e, s);
      } else {
        var c = null,
          h = r.C();
        o(h) && 0 === h.length && null == f.q && (c = X(r)), r.unmountComponent(!0), this._renderedComponent = L(i), this._renderedComponent.I(this._parent, f, this.F(t), function (t, i) {
          var r = n.driver;
          h = W(h), t = W(t);
          for (var u = 0; u < t.length; u++) {
            var f = t[u];
            h[u] ? r.replaceChild(f, h[u]) : c ? r.insertAfter(f, c) : r.appendChild(f, i), c = f;
          }
          for (var o = t.length; o < h.length; o++) {
            r.removeChild(h[o]);
          }
        });
      }
    }, u.C = function () {
      var n = this._renderedComponent;
      if (n) return n.C();
    }, u.D = function () {
      var n = this._instance;
      return n.tn ? null : n;
    }, i;
  }(B),
  mn = function (t) {
    function i() {
      return t.apply(this, arguments) || this;
    }
    q(i, t);
    var r = i.prototype;
    return r.I = function (t, i, r, u) {
      this.g(t, i, r);
      var f = this._instance = {};
      f._internal = this;
      var o = [];
      if (this.L(this._parent, this.O, r, function (n) {
        n = W(n);
        for (var t = 0; t < n.length; t++) {
          o.push(n[t]);
        }
      }), u) u(o, t);else for (var e = 0; e < o.length; e++) {
        n.driver.appendChild(o[e], t);
      }
      return f;
    }, r.unmountComponent = function (t) {
      if (!t) for (var i = this.C(), r = 0, u = i.length; r < u; r++) {
        n.driver.removeChild(i[r]);
      }
      this.M(!0), this.k();
    }, r.S = function (n, t, i, r) {
      this.O = t, this.Y(this.O, r);
    }, r.C = function () {
      var n = this.V || {};
      return [].concat.apply([], Object.keys(n).map(function (t) {
        return n[t].C();
      }));
    }, i;
  }(en);
var On = {
  Host: n,
  Instance: un,
  Element: t,
  flattenChildren: v
};
exports.Component = Y, exports.Fragment = function (n) {
  return n.children;
}, exports.PureComponent = nn, exports.createContext = function (n) {
  var t = "_c" + $++;
  function i(n) {
    return Z(n, function (n) {
      return n.On === t;
    });
  }
  return {
    Provider: function () {
      function i() {
        this.On = t, this.gn = [];
      }
      var r = i.prototype;
      return r.pn = function (n) {
        this.gn.push(n);
      }, r.dn = function (n) {
        this.gn = this.gn.filter(function (t) {
          return t !== n;
        });
      }, r._getChildContext = function () {
        var n;
        return (n = {})[t] = this, n;
      }, r.getValue = function () {
        return void 0 !== this.props.value ? this.props.value : n;
      }, r.componentDidUpdate = function (n) {
        this.props.value !== n.value && C(this.gn, null, this.getValue());
      }, r.render = function () {
        return this.props.children;
      }, i;
    }(),
    Consumer: function Consumer(u, f) {
      var o = this,
        e = N(function () {
          return f[t] || i(o);
        })[0],
        s = e ? e.getValue() : n,
        c = N(s),
        h = c[1];
      if (s === c[0]) {
        R(function () {
          if (e) return e.pn(h), function () {
            e.dn(h);
          };
        }, []);
        var a = W(u.children)[0];
        return r(a) ? a(s) : void 0;
      }
      h(s);
    },
    _contextID: t,
    _defaultValue: n,
    an: i
  };
}, exports.createElement = A, exports.createRef = function () {
  return {
    current: null
  };
}, exports.forwardRef = function (n) {
  return n._forwardRef = !0, n;
}, exports.memo = function (n, t) {
  return t = t || D, n.hn ? n.hn.push(t) : n.hn = [t], n;
}, exports.render = function (t, i, u, f) {
  var o;
  r(u) && (f = u, u = null), o = (u = u || h).driver, n.T = F, n.U = en, n.N = sn, n.R = mn, n.H = jn, (n.driver = o || n.driver) || g(5);
  var e = un.mount(t, i, u).D();
  return f && f.call(e), e;
}, exports.shared = On, exports.useCallback = function (n, t) {
  return V(function () {
    return n;
  }, t);
}, exports.useContext = function (n) {
  return U().useContext(n);
}, exports.useEffect = function (n, t) {
  T(n, t, !0);
}, exports.useImperativeHandle = function (n, t, i) {
  R(function () {
    return r(n) ? (n(t()), function () {
      return n(null);
    }) : null != n ? (n.current = t(), function () {
      n.current = null;
    }) : void 0;
  }, o(i) ? i.concat([n]) : null);
}, exports.useLayoutEffect = R, exports.useMemo = V, exports.useReducer = function (t, i, u) {
  var f = U(),
    o = f.getHookID(),
    e = f.getHooks(),
    s = e[o];
  if (!s) {
    var c = r(u) ? u(i) : i;
    return e[o] = [c, function (t) {
      n.i || j();
      var i = e[o][2];
      if (S() === f) i.kn.push(t), f.o = !0;else {
        var r = i.In,
          u = (0, i.An)(r, t);
        if (P(u, r)) return;
        i.In = u, i.kn.push(t), f.h();
      }
    }, {
      kn: [],
      An: t,
      In: c
    }];
  }
  var h = s[2],
    a = s[0];
  if (f.fn > 0) for (var v = 0; v < h.kn.length; v++) {
    a = t(a, h.kn[v]);
  } else a = h.In;
  return P(a, s[0]) || (s[0] = a, f.v = !0), h.An = t, h.In = a, h.kn.length = 0, e[o];
}, exports.useRef = function (n) {
  var t = U(),
    i = t.getHookID(),
    r = t.getHooks();
  return r[i] || (r[i] = {
    current: n
  }), r[i];
}, exports.useState = N, exports.version = "1.2.2";

/***/ }),
/* 24 */
/***/ (function(module, exports) {

var g = function () {
  return this;
}();

// This works in non-strict mode

try {
  // This works if eval is allowed (see CSP)
  g = g || new Function("return this")();
} catch (e) {
  // This works if the window reference is available
  if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;
exports.isIOS = exports.isAndroid = exports.isWeb = exports.isWechatApp = exports.isMiniApp = exports.isReactNative = exports.isWeex = exports.isNode = void 0;
// compatibility taobao mp
var isTaoWebview = typeof __sfc__ !== 'undefined';
var isWebPure = typeof navigator === 'object' && (navigator.appCodeName === 'Mozilla' || navigator.product === 'Gecko');
var isNode = typeof process !== 'undefined' && !!(process.versions && process.versions.node);
exports.isNode = isNode;
var isWeex = typeof callNative === 'function' || typeof WXEnvironment === 'object' && WXEnvironment.platform !== 'Web';
exports.isWeex = isWeex;
var isReactNative = typeof __fbBatchedBridgeConfig !== 'undefined';
exports.isReactNative = isReactNative;
var isMiniApp = typeof my === 'object' && typeof my.getSystemInfo !== 'undefined' && !isTaoWebview;
exports.isMiniApp = isMiniApp;
var isWechatApp = typeof wx === 'object' && typeof wx.getSystemInfo !== 'undefined'; // In taobao mp'webview __sfc__ is an object

exports.isWechatApp = isWechatApp;
var isWeb = isWebPure && !isMiniApp && !isWechatApp || isTaoWebview;
exports.isWeb = isWeb;
var systemInfo = {};
if (isMiniApp) {
  systemInfo = my.getSystemInfoSync();
}
if (isWechatApp) {
  systemInfo = wx.getSystemInfoSync();
}
if (isWeex) {
  systemInfo = navigator;
}
var isAndroid = function () {
  if (isMiniApp || isWechatApp || isWeex) {
    var platform = systemInfo.platform || '';
    return platform.toLowerCase() === 'android';
  } else if (isWeb) {
    return Boolean(navigator.userAgent.match(/android/i));
  }
  return false;
}();
exports.isAndroid = isAndroid;
var isIOS = function () {
  if (isMiniApp || isWechatApp || isWeex) {
    return ['ios', 'iOS', 'iPhone OS'].indexOf(systemInfo.platform) > -1;
  } else if (isWeb) {
    return Boolean(navigator.userAgent.match(/(iphone|ipod|ipad)/i));
  }
  return false;
}();
exports.isIOS = isIOS;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(15)))

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;
var _Cache = _interopRequireDefault(__webpack_require__(16));
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
var cache = new _Cache.default();
function getScrollOffset(selector, context) {
  return new Promise(function (resolve) {
    cache.getSelector(selector, context).scrollOffset().exec(function (ret) {
      resolve(ret[0]);
    });
  });
}
function getBoundingClientRect(selector, context) {
  return new Promise(function (resolve) {
    cache.getSelector(selector, context).boundingClientRect().exec(function (ret) {
      resolve(ret[0]);
    });
  });
}
var _default = {
  getScrollOffset: getScrollOffset,
  getBoundingClientRect: getBoundingClientRect
};
exports.default = _default;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;
var _Cache = _interopRequireDefault(__webpack_require__(16));
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
var cache = new _Cache.default();
function getScrollOffset(selector) {
  return new Promise(function (resolve) {
    resolve(cache.getSelector(selector).map(function (node) {
      return {
        scrollTop: node.scrollTop,
        scrollLeft: node.scrollLeft,
        scrollWidth: node.scrollWidth,
        scrollHeight: node.scrollHeight
      };
    }));
  });
}
function getBoundingClientRect(selector) {
  return new Promise(function (resolve) {
    resolve(cache.getSelector(selector).map(function (node) {
      return node.getBoundingClientRect();
    }));
  });
}
var _default = {
  getScrollOffset: getScrollOffset,
  getBoundingClientRect: getBoundingClientRect
};
exports.default = _default;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// NAMESPACE OBJECT: ./node_modules/driver-dom/es/index.js
var driver_dom_es_namespaceObject = {};
__webpack_require__.r(driver_dom_es_namespaceObject);
__webpack_require__.d(driver_dom_es_namespaceObject, "setTagNamePrefix", function() { return setTagNamePrefix; });
__webpack_require__.d(driver_dom_es_namespaceObject, "createBody", function() { return createBody; });
__webpack_require__.d(driver_dom_es_namespaceObject, "createEmpty", function() { return createEmpty; });
__webpack_require__.d(driver_dom_es_namespaceObject, "createText", function() { return createText; });
__webpack_require__.d(driver_dom_es_namespaceObject, "updateText", function() { return updateText; });
__webpack_require__.d(driver_dom_es_namespaceObject, "createElement", function() { return createElement; });
__webpack_require__.d(driver_dom_es_namespaceObject, "appendChild", function() { return appendChild; });
__webpack_require__.d(driver_dom_es_namespaceObject, "removeChild", function() { return removeChild; });
__webpack_require__.d(driver_dom_es_namespaceObject, "replaceChild", function() { return replaceChild; });
__webpack_require__.d(driver_dom_es_namespaceObject, "insertAfter", function() { return insertAfter; });
__webpack_require__.d(driver_dom_es_namespaceObject, "insertBefore", function() { return insertBefore; });
__webpack_require__.d(driver_dom_es_namespaceObject, "addEventListener", function() { return addEventListener; });
__webpack_require__.d(driver_dom_es_namespaceObject, "removeEventListener", function() { return removeEventListener; });
__webpack_require__.d(driver_dom_es_namespaceObject, "removeAttribute", function() { return removeAttribute; });
__webpack_require__.d(driver_dom_es_namespaceObject, "setAttribute", function() { return setAttribute; });
__webpack_require__.d(driver_dom_es_namespaceObject, "setStyle", function() { return setStyle; });
__webpack_require__.d(driver_dom_es_namespaceObject, "beforeRender", function() { return beforeRender; });
__webpack_require__.d(driver_dom_es_namespaceObject, "afterRender", function() { return es_afterRender; });
__webpack_require__.d(driver_dom_es_namespaceObject, "removeChildren", function() { return removeChildren; });
__webpack_require__.d(driver_dom_es_namespaceObject, "setViewportWidth", function() { return setViewportWidth; });
__webpack_require__.d(driver_dom_es_namespaceObject, "setUnitPrecision", function() { return setUnitPrecision; });

// NAMESPACE OBJECT: ./node_modules/driver-weex/es/index.js
var driver_weex_es_namespaceObject = {};
__webpack_require__.r(driver_weex_es_namespaceObject);
__webpack_require__.d(driver_weex_es_namespaceObject, "getElementById", function() { return getElementById; });
__webpack_require__.d(driver_weex_es_namespaceObject, "createBody", function() { return es_createBody; });
__webpack_require__.d(driver_weex_es_namespaceObject, "createComment", function() { return createComment; });
__webpack_require__.d(driver_weex_es_namespaceObject, "createEmpty", function() { return es_createEmpty; });
__webpack_require__.d(driver_weex_es_namespaceObject, "createText", function() { return es_createText; });
__webpack_require__.d(driver_weex_es_namespaceObject, "updateText", function() { return es_updateText; });
__webpack_require__.d(driver_weex_es_namespaceObject, "createElement", function() { return es_createElement; });
__webpack_require__.d(driver_weex_es_namespaceObject, "appendChild", function() { return es_appendChild; });
__webpack_require__.d(driver_weex_es_namespaceObject, "removeChild", function() { return es_removeChild; });
__webpack_require__.d(driver_weex_es_namespaceObject, "replaceChild", function() { return es_replaceChild; });
__webpack_require__.d(driver_weex_es_namespaceObject, "insertAfter", function() { return es_insertAfter; });
__webpack_require__.d(driver_weex_es_namespaceObject, "insertBefore", function() { return es_insertBefore; });
__webpack_require__.d(driver_weex_es_namespaceObject, "addEventListener", function() { return es_addEventListener; });
__webpack_require__.d(driver_weex_es_namespaceObject, "removeEventListener", function() { return es_removeEventListener; });
__webpack_require__.d(driver_weex_es_namespaceObject, "removeAttribute", function() { return es_removeAttribute; });
__webpack_require__.d(driver_weex_es_namespaceObject, "setAttribute", function() { return es_setAttribute; });
__webpack_require__.d(driver_weex_es_namespaceObject, "setStyle", function() { return es_setStyle; });
__webpack_require__.d(driver_weex_es_namespaceObject, "beforeRender", function() { return es_beforeRender; });
__webpack_require__.d(driver_weex_es_namespaceObject, "afterRender", function() { return driver_weex_es_afterRender; });

// EXTERNAL MODULE: ./node_modules/rax/index.js
var rax = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/universal-env/lib/index.js
var lib = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/style-unit/es/index.js

var RPX_REG = /"[^"]+"|'[^']+'|url\([^\)]+\)|(\d*\.?\d+)rpx/g;
var __rpx_coefficient__;
var __viewport_width__; // convertUnit method targetPlatform

var targetPlatform = lib["isWeb"] ? 'web' : lib["isWeex"] ? 'weex' : lib["isNode"] ? 'node' : ''; // Init toFixed method

var unitPrecision = 4;
var toFixed = function (number, precision) {
  var multiplier = Math.pow(10, precision + 1);
  var wholeNumber = Math.floor(number * multiplier);
  return Math.round(wholeNumber / 10) * 10 / multiplier;
}; // Dedault decimal px transformer.

var decimalPixelTransformer = function (rpx, $1) {
  return $1 ? parseFloat(rpx) * getRpx() + 'px' : rpx;
}; // Default decimal vw transformer.

var decimalVWTransformer = function (rpx, $1) {
  return $1 ? toFixed(parseFloat(rpx) / (getViewportWidth() / 100), unitPrecision) + 'vw' : rpx;
}; // Default 1 rpx to 1 px

if (getRpx() === undefined) {
  setRpx(1);
} // Viewport width, default to 750.

if (getViewportWidth() === undefined) {
  setViewportWidth(750);
}
var CustomMap = /*#__PURE__*/function () {
  function CustomMap() {
    this.__store = {};
  }
  var _proto = CustomMap.prototype;
  _proto.set = function (key, value) {
    this.__store[key + "_" + typeof key] = value;
  };
  _proto.get = function (key) {
    return this.__store[key + "_" + typeof key];
  };
  _proto.has = function (key) {
    return Object.prototype.hasOwnProperty.call(this.__store, key + "_" + typeof key);
  };
  return CustomMap;
}();
/**
 * Is string contains rpx
 * note: rpx is an alias to rpx
 * @param {String} str
 * @returns {Boolean}
 */

function isRpx(str) {
  return typeof str === 'string' && RPX_REG.test(str);
}
/**
 * Calculate rpx
 * @param {String} str
 * @returns {String}
 */

function calcRpx(str) {
  if (targetPlatform === 'web' || targetPlatform === 'node') {
    // In Web convert rpx to 'vw', same as driver-dom and driver-universal.
    // In Node is same as web for SSR.
    // '375rpx' => '50vw'
    return str.replace(RPX_REG, decimalVWTransformer);
  } else if (targetPlatform === 'weex') {
    // In Weex convert rpx to 'px'.
    // '375rpx' => 375 * px
    return str.replace(RPX_REG, decimalPixelTransformer);
  } else {
    // Other platform return original value, like Mini-App and WX Mini-Program ...
    // '375rpx' => '375rpx'
    return str;
  }
}
function getRpx() {
  return __rpx_coefficient__;
}
function setRpx(rpx) {
  __rpx_coefficient__ = rpx;
}
function getViewportWidth() {
  return __viewport_width__;
}
function setViewportWidth(viewport) {
  __viewport_width__ = viewport;
}
/**
 * Set a function to transform unit of pixel,
 * default to passthrough.
 * @param {Function} transformer function
 */

function setDecimalPixelTransformer(transformer) {
  decimalPixelTransformer = transformer;
}
/**
 * Set unit precision.
 * @param n {Number} Unit precision, default to 4.
 */

function setUnitPrecision(n) {
  unitPrecision = n;
}
/**
 * Create a cached version of a pure function.
 * Use the first params as cache key.
 */

function cached(fn) {
  var cache = new CustomMap();
  return function () {
    var key = arguments.length <= 0 ? undefined : arguments[0];
    if (!cache.has(key)) cache.set(key, fn.apply(void 0, arguments));
    return cache.get(key);
  };
}
function setTargetPlatform(platform) {
  targetPlatform = platform;
}
/**
 * Convert rpx.
 * @param value
 * @param prop
 * @param platform
 * @return {String} Transformed value.
 */

var convertUnit = cached(function (value, prop, platform) {
  if (platform) {
    setTargetPlatform(platform);
  }
  return isRpx(value) ? calcRpx(value) : value;
});
// CONCATENATED MODULE: ./node_modules/driver-dom/es/warning.js
var didWarnInvalidHydration = false;
var __DEV__ = "production" !== 'production';
function warnForReplacedHydratebleElement(parentNode, clientNode, serverNode) {
  if (__DEV__) {
    if (didWarnInvalidHydration) {
      return;
    } // should not warn for replace comment, bescause it may be a placeholder from server

    if (serverNode.nodeType === 8) {
      return;
    }
    didWarnInvalidHydration = true;
    warning('Expected server HTML to contain a matching %s in %s, but got %s.', getNodeName(clientNode), getNodeName(parentNode), getNodeName(serverNode));
  }
}
function warnForDeletedHydratableElement(parentNode, child) {
  if (__DEV__) {
    if (didWarnInvalidHydration) {
      return;
    }
    didWarnInvalidHydration = true;
    warning('Did not expect server HTML to contain a %s in %s.', getNodeName(child), getNodeName(parentNode));
  }
}
function warnForInsertedHydratedElement(parentNode, node) {
  if (__DEV__) {
    if (didWarnInvalidHydration) {
      return;
    }
    didWarnInvalidHydration = true;
    warning('Expected server HTML to contain a matching %s in %s.', getNodeName(node), getNodeName(parentNode));
  }
}
/**
 * Concat tagName、 id and class info to help locate a node
 * @param {*} node HTMLElement
 * @returns {string} for example: <div#home.rax-view.home>
 */

function getNodeName(node) {
  // text node don`t have tagName
  if (!node.tagName) {
    return node.nodeName;
  }
  var name = node.tagName.toLowerCase();
  var id = node.id ? '#' + node.id : '';
  var classStr = node.className || '';
  var classList = classStr.split(' ').map(function (className) {
    return className ? '.' + className : '';
  });
  return "<" + name + id + classList.join('') + ">";
}
var warning = function () {};
if (false) {}
// CONCATENATED MODULE: ./node_modules/driver-dom/es/index.js
/**
 * Driver for Web DOM
 **/

 // opacity -> opa
// fontWeight -> ntw
// lineHeight|lineClamp -> ne[ch]
// flex|flexGrow|flexPositive|flexShrink|flexNegative|boxFlex|boxFlexGroup|zIndex -> ex(?:s|g|n|p|$)
// order -> ^ord
// zoom -> zoo
// gridArea|gridRow|gridRowEnd|gridRowSpan|gridRowStart|gridColumn|gridColumnEnd|gridColumnSpan|gridColumnStart -> grid
// columnCount -> mnc
// tabSize -> bs
// orphans -> orp
// windows -> ows
// animationIterationCount -> onit
// borderImageOutset|borderImageSlice|borderImageWidth -> erim

var NON_DIMENSIONAL_REG = /opa|ntw|ne[ch]|ex(?:s|g|n|p|$)|^ord|zoo|grid|orp|ows|mnc|^columns$|bs|erim|onit/i;
var EVENT_PREFIX_REG = /^on[A-Z]/;
var DANGEROUSLY_SET_INNER_HTML = 'dangerouslySetInnerHTML';
var HTML = '__html';
var INNER_HTML = 'innerHTML';
var CLASS_NAME = 'className';
var CLASS = 'class';
var STYLE = 'style';
var CHILDREN = 'children';
var TEXT_CONTENT_ATTR = 'textContent';
var CREATE_ELEMENT = 'createElement';
var CREATE_COMMENT = 'createComment';
var CREATE_TEXT_NODE = 'createTextNode';
var SET_ATTRIBUTE = 'setAttribute';
var REMOVE_ATTRIBUTE = 'removeAttribute';
var SVG_NS = 'http://www.w3.org/2000/svg';
var TEXT_NODE = 3;
var COMMENT_NODE = 8;
var TEXT_SPLIT_COMMENT = '|';
var EMPTY = '';
var HYDRATION_INDEX = '__i';
var HYDRATION_APPEND = '__a';
var WITH_INNERHTML = '__h';
var es_DEV_ = "production" !== 'production';
var tagNamePrefix = EMPTY; // Flag indicating if the diff is currently within an SVG

var isSVGMode = false;
var isHydrating = false;
/**
 * Camelize CSS property.
 * Vendor prefixes should begin with a capital letter.
 * For example:
 * background-color -> backgroundColor
 * -webkit-transition -> webkitTransition
 */

var camelizeStyleName = cached(function (name) {
  return name.replace(/-([a-z])/gi, function (s, g) {
    return g.toUpperCase();
  });
});
var isDimensionalProp = cached(function (prop) {
  return !NON_DIMENSIONAL_REG.test(prop);
});
var isEventProp = cached(function (prop) {
  return EVENT_PREFIX_REG.test(prop);
});
function setTagNamePrefix(prefix) {
  tagNamePrefix = prefix;
}
function createBody() {
  return document.body;
}
function createEmpty(component) {
  var parent = component._parent;
  var node;
  if (isHydrating) {
    var hydrationChild = findHydrationChild(parent);
    if (hydrationChild) {
      if (hydrationChild.nodeType === COMMENT_NODE) {
        return hydrationChild;
      } else {
        node = document[CREATE_COMMENT](EMPTY);
        replaceChild(node, hydrationChild, parent);
      }
    } else {
      node = document[CREATE_COMMENT](EMPTY);
      node[HYDRATION_APPEND] = true;
    }
  } else {
    node = document[CREATE_COMMENT](EMPTY);
  }
  return node;
}
function createText(text, component) {
  var parent = component._parent;
  var node;
  if (isHydrating) {
    var hydrationChild = findHydrationChild(parent);
    if (hydrationChild) {
      if (hydrationChild.nodeType === TEXT_NODE) {
        if (text !== hydrationChild[TEXT_CONTENT_ATTR]) {
          hydrationChild[TEXT_CONTENT_ATTR] = text;
        }
        return hydrationChild;
      } else {
        node = document[CREATE_TEXT_NODE](text);
        replaceChild(node, hydrationChild, parent);
      }
    } else {
      node = document[CREATE_TEXT_NODE](text);
      node[HYDRATION_APPEND] = true;
    }
  } else {
    node = document[CREATE_TEXT_NODE](text);
  }
  return node;
}
function updateText(node, text) {
  node[TEXT_CONTENT_ATTR] = text;
}
function findHydrationChild(parent) {
  var childNodes = parent.childNodes;
  if (parent[HYDRATION_INDEX] == null) {
    parent[HYDRATION_INDEX] = 0;
  }
  var child = childNodes[parent[HYDRATION_INDEX]++]; // If child is an comment node for spliting text node, use the next node.

  if (child && child.nodeType === COMMENT_NODE && child.data === TEXT_SPLIT_COMMENT) {
    return childNodes[parent[HYDRATION_INDEX]++];
  } else {
    return child;
  }
}
/**
 * @param {string} type node type
 * @param {object} props elemement properties
 * @param {object} component component instance
 * @param {boolean} __shouldConvertUnitlessToRpx should add unit when missing
 */

function createElement(type, props, component, __shouldConvertUnitlessToRpx) {
  var parent = component._parent;
  isSVGMode = type === 'svg' || parent && parent.namespaceURI === SVG_NS;
  var node;
  var hydrationChild = null;
  function createNode() {
    if (isSVGMode) {
      node = document.createElementNS(SVG_NS, type);
    } else if (tagNamePrefix) {
      var _tagNamePrefix = typeof _tagNamePrefix === 'function' ? _tagNamePrefix(type) : _tagNamePrefix;
      node = document[CREATE_ELEMENT](_tagNamePrefix + type);
    } else {
      node = document[CREATE_ELEMENT](type);
    }
  }
  if (isHydrating) {
    hydrationChild = findHydrationChild(parent);
    if (hydrationChild) {
      if (type === hydrationChild.nodeName.toLowerCase()) {
        for (var attributes = hydrationChild.attributes, i = attributes.length; i--;) {
          var attribute = attributes[i];
          var attributeName = attribute.name;
          var propValue = props[attributeName];
          if (
          // The class or className prop all not in props
          attributeName === CLASS && props[CLASS_NAME] == null && propValue == null ||
          // The style prop is empty object or not in props
          attributeName === STYLE && (propValue == null || Object.keys(propValue).length === 0) ||
          // Remove rendered node attribute that not existed
          attributeName !== CLASS && attributeName !== STYLE && propValue == null) {
            hydrationChild[REMOVE_ATTRIBUTE](attributeName);
            continue;
          }
          if (attributeName === STYLE) {
            // Remove invalid style prop, and direct reset style to child avoid diff style
            // Set style to empty will change the index of style, so here need to traverse style backwards
            for (var l = hydrationChild.style.length; 0 < l; l--) {
              // Prop name get from node style is hyphenated, eg: background-color
              var stylePropName = hydrationChild.style[l - 1]; // Style with webkit prefix, will cause stylePropName be undefined in iOS 10.1 and 10.2.
              // Eg. when set transition-timing-function to be empty, it will also delete -webkit-transition-timing-function.

              if (stylePropName) {
                var camelizedStyleName = camelizeStyleName(stylePropName);
                if (propValue[camelizedStyleName] == null) {
                  hydrationChild.style[camelizedStyleName] = EMPTY;
                }
              }
            }
          }
        }
        node = hydrationChild;
      } else {
        createNode();
        replaceChild(node, hydrationChild, parent);
        if (es_DEV_) {
          warnForReplacedHydratebleElement(parent, node, hydrationChild);
        }
      }
    } else {
      createNode();
      node[HYDRATION_APPEND] = true;
      if (es_DEV_) {
        warnForInsertedHydratedElement(parent, node);
      }
    }
  } else {
    createNode();
  }
  for (var prop in props) {
    var value = props[prop];
    if (prop === CHILDREN) continue;
    if (value != null) {
      if (prop === STYLE) {
        setStyle(node, value, __shouldConvertUnitlessToRpx);
      } else if (isEventProp(prop)) {
        addEventListener(node, prop.slice(2).toLowerCase(), value, component);
      } else {
        setAttribute(node, prop, value, isSVGMode);
      }
    }
  }
  return node;
}
function appendChild(node, parent) {
  if (!isHydrating || node[HYDRATION_APPEND]) {
    return parent.appendChild(node);
  }
}
function removeChild(node, parent) {
  parent = parent || node.parentNode; // Maybe has been removed when remove child

  if (parent) {
    parent.removeChild(node);
  }
}
function replaceChild(newChild, oldChild, parent) {
  parent = parent || oldChild.parentNode;
  parent.replaceChild(newChild, oldChild);
}
function insertAfter(node, after, parent) {
  parent = parent || after.parentNode;
  var nextSibling = after.nextSibling;
  if (nextSibling) {
    // Performance improve when node has been existed before nextSibling
    if (nextSibling !== node) {
      insertBefore(node, nextSibling, parent);
    }
  } else {
    appendChild(node, parent);
  }
}
function insertBefore(node, before, parent) {
  parent = parent || before.parentNode;
  parent.insertBefore(node, before);
}
function addEventListener(node, eventName, eventHandler) {
  return node.addEventListener(eventName, eventHandler);
}
function removeEventListener(node, eventName, eventHandler) {
  return node.removeEventListener(eventName, eventHandler);
}
function removeAttribute(node, propKey) {
  if (propKey === DANGEROUSLY_SET_INNER_HTML) {
    return node[INNER_HTML] = null;
  }
  if (propKey === CLASS_NAME) propKey = CLASS;
  if (propKey in node) {
    try {
      // Some node property is readonly when in strict mode
      node[propKey] = null;
    } catch (e) {}
  }
  node[REMOVE_ATTRIBUTE](propKey);
}
function setAttribute(node, propKey, propValue, isSvg) {
  if (propKey === DANGEROUSLY_SET_INNER_HTML) {
    // For reduce innerHTML operation to improve performance.
    if (node[INNER_HTML] !== propValue[HTML]) {
      node[INNER_HTML] = propValue[HTML];
    }
    node[WITH_INNERHTML] = true;
    return;
  }
  if (propKey === CLASS_NAME) propKey = CLASS; // Prop for svg can only be set by attribute

  if (!isSvg && propKey in node) {
    try {
      // Some node property is readonly when in strict mode
      node[propKey] = propValue;
    } catch (e) {
      node[SET_ATTRIBUTE](propKey, propValue);
    }
  } else {
    node[SET_ATTRIBUTE](propKey, propValue);
  }
}
/**
 * @param {object} node target node
 * @param {object} style target node style value
 * @param {boolean} __shouldConvertUnitlessToRpx
 */

function setStyle(node, style, __shouldConvertUnitlessToRpx) {
  for (var prop in style) {
    var value = style[prop];
    var convertedValue = void 0;
    if (typeof value === 'number' && isDimensionalProp(prop)) {
      if (__shouldConvertUnitlessToRpx) {
        convertedValue = value + 'rpx'; // Transfrom rpx to vw

        convertedValue = convertUnit(convertedValue);
      } else {
        convertedValue = value + 'px';
      }
    } else {
      convertedValue = convertUnit(value);
    } // Support CSS custom properties (variables) like { --main-color: "black" }

    if (prop[0] === '-' && prop[1] === '-') {
      // reference: https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration/setProperty.
      // style.setProperty do not support Camel-Case style properties.
      node.style.setProperty(prop, convertedValue);
    } else {
      node.style[prop] = convertedValue;
    }
  }
}
function beforeRender(_ref) {
  var hydrate = _ref.hydrate;

  // Nested render may reset `isHydrating`, `recolectHydrationChild` will not work correctly after render.
  if (isHydrating && !hydrate) {
    if (es_DEV_) {
      throw new Error('Nested render is not allowed when hydrating. ' + 'If necessary, trigger render in useEffect.');
    } else {
      throw new Error('Nested render found.');
    }
  }
  isHydrating = hydrate;
}
function recolectHydrationChild(hydrationParent) {
  // Should not to compare node with dangerouslySetInnerHTML because vdomLength is alway 0
  if (hydrationParent[WITH_INNERHTML]) {
    return;
  }
  var nativeLength = hydrationParent.childNodes.length;
  var vdomLength = hydrationParent[HYDRATION_INDEX] || 0;
  if (nativeLength - vdomLength > 0) {
    for (var i = nativeLength - 1; i >= vdomLength; i--) {
      if (es_DEV_) {
        warnForDeletedHydratableElement(hydrationParent, hydrationParent.childNodes[i]);
      }
      hydrationParent.removeChild(hydrationParent.childNodes[i]);
    }
  }
  for (var j = hydrationParent.childNodes.length - 1; j >= 0; j--) {
    recolectHydrationChild(hydrationParent.childNodes[j]);
  }
}
function es_afterRender(_ref2) {
  var container = _ref2.container;
  if (isHydrating) {
    // Remove native node when more then vdom node
    recolectHydrationChild(container);
    isHydrating = false;
  }
}
/**
 * Remove all children from node.
 * @NOTE: Optimization at web.
 */

function removeChildren(node) {
  node.textContent = EMPTY;
}

// CONCATENATED MODULE: ./node_modules/driver-weex/es/index.js

 // Use driver-dom in Weex V2

/* global __weex_v2__ */

var es_isWeexV2 = typeof __weex_v2__ === 'object';
var es_STYLE = 'style';
var ID = 'id';
var TEXT = 'text';
var es_CHILDREN = 'children';
var EVENT_PREFIX_REGEXP = /^on[A-Z]/;
var ARIA_PREFIX_REGEXP = /^aria-/;
var HYPHEN_REGEXP = /\-(\w)/;
var es_EMPTY = '';
function updateWeexTextValue(node) {
  var value = node.children.map(function (child) {
    // Comment node type
    return child.nodeType === 8 ? child.value : es_EMPTY;
  }).join(es_EMPTY);
  node.setAttr('value', value);
}
var nodeMaps = {};
/* global __weex_document__ */

var weexDocument = typeof __weex_document__ === 'object' ? __weex_document__ : typeof document === 'object' ? document : null;
function getElementById(id) {
  if (es_isWeexV2) {
    return document.getElementById(id);
  }
  return nodeMaps[id];
}
function es_createBody(type, props) {
  if (es_isWeexV2) {
    return createBody();
  }
  if (weexDocument.body) {
    return weexDocument.body;
  }
  var documentElement = weexDocument.documentElement;
  var body = weexDocument.createBody(type, props);
  documentElement.appendChild(body);
  return body;
}
function createComment(content) {
  return weexDocument.createComment(content);
}
function es_createEmpty(component) {
  if (es_isWeexV2) {
    return createEmpty(component);
  }
  return createComment(es_EMPTY);
}
function es_createText(text, component) {
  if (es_isWeexV2) {
    return createText(text, component);
  } // Use comment node type mock text node

  return createComment(text);
}
function es_updateText(node, text) {
  if (es_isWeexV2) {
    return updateText(node, text);
  }
  node.value = text;
  updateWeexTextValue(node.parentNode);
}
function es_createElement(type, props, component) {
  if (es_isWeexV2) {
    return createElement(type, props, component, true);
  }
  var style = {};
  props = props || {};
  var originStyle = props.style;
  if (originStyle) {
    for (var prop in originStyle) {
      style[prop] = convertUnit(originStyle[prop], prop);
    }
  }
  var node = weexDocument.createElement(type, {
    style: style
  });
  for (var _prop in props) {
    var value = props[_prop];
    if (_prop === es_CHILDREN) {
      continue;
    }
    if (value != null) {
      if (_prop === es_STYLE) {
        continue;
      } else if (EVENT_PREFIX_REGEXP.test(_prop)) {
        var eventName = _prop.slice(2).toLowerCase();
        es_addEventListener(node, eventName, value, props);
      } else {
        es_setAttribute(node, _prop, value);
      }
    }
  }
  return node;
}
function es_appendChild(node, parent) {
  if (es_isWeexV2) {
    return appendChild(node, parent);
  }
  parent.appendChild(node);
  if (parent.type === TEXT) {
    updateWeexTextValue(parent);
  }
}
function es_removeChild(node, parent) {
  if (es_isWeexV2) {
    return removeChild(node, parent);
  }
  parent = parent || node.parentNode;
  var id = node.attr && node.attr[ID];
  if (id != null) {
    nodeMaps[id] = null;
  }
  parent.removeChild(node);
  if (parent.type === TEXT) {
    updateWeexTextValue(parent);
  }
}
function es_replaceChild(newChild, oldChild, parent) {
  if (es_isWeexV2) {
    return replaceChild(newChild, oldChild, parent);
  }
  parent = parent || oldChild.parentNode;
  var previousSibling = oldChild.previousSibling;
  var nextSibling = oldChild.nextSibling;
  es_removeChild(oldChild, parent);
  if (previousSibling) {
    es_insertAfter(newChild, previousSibling, parent);
  } else if (nextSibling) {
    es_insertBefore(newChild, nextSibling, parent);
  } else {
    es_appendChild(newChild, parent);
  }
}
function es_insertAfter(node, after, parent) {
  if (es_isWeexV2) {
    return insertAfter(node, after, parent);
  }
  parent = parent || after.parentNode;
  parent.insertAfter(node, after);
  if (parent.type === TEXT) {
    updateWeexTextValue(parent);
  }
}
function es_insertBefore(node, before, parent) {
  if (es_isWeexV2) {
    return insertBefore(node, before, parent);
  }
  parent = parent || before.parentNode;
  parent.insertBefore(node, before);
  if (parent.type === TEXT) {
    updateWeexTextValue(parent);
  }
}
function es_addEventListener(node, eventName, eventHandler, props) {
  if (es_isWeexV2) {
    return addEventListener(node, eventName, eventHandler);
  } // https://github.com/apache/incubator-weex/blob/master/runtime/vdom/Element.js#L421

  var params = props[eventName + 'EventParams'];
  return node.addEvent(eventName, eventHandler, params);
}
function es_removeEventListener(node, eventName, eventHandler) {
  if (es_isWeexV2) {
    return removeEventListener(node, eventName, eventHandler);
  }
  return node.removeEvent(eventName, eventHandler);
}
function es_removeAttribute(node, propKey, propValue) {
  if (es_isWeexV2) {
    return removeAttribute(node, propKey);
  }
  if (propKey == ID) {
    nodeMaps[propValue] = null;
  } // Weex native will crash when pass null value

  return node.setAttr(propKey, undefined, false);
}
function es_setAttribute(node, propKey, propValue, isSvg) {
  if (es_isWeexV2) {
    return setAttribute(node, propKey, propValue, isSvg);
  }
  if (propKey == ID) {
    nodeMaps[propValue] = node;
  } // Weex only support `ariaLabel` format, convert `aria-label` format to camelcase

  if (ARIA_PREFIX_REGEXP.test(propKey)) {
    propKey = propKey.replace(HYPHEN_REGEXP, function (m, p) {
      return p.toUpperCase();
    });
  }
  return node.setAttr(propKey, propValue, false);
}
function es_setStyle(node, style) {
  if (es_isWeexV2) {
    return setStyle(node, style, true);
  }
  for (var prop in style) {
    // Translate `rpx` to weex `px`
    style[prop] = convertUnit(style[prop], prop);
  }
  node.setStyles(style);
}
function es_beforeRender() {
  // Turn off batched updates
  weexDocument.open(); // Set `rpx` unit converter

  setRpx(1);
}
function driver_weex_es_afterRender() {
  if (weexDocument.listener && weexDocument.listener.createFinish) {
    weexDocument.listener.createFinish();
  } // Turn on batched updates

  weexDocument.close();
}
// CONCATENATED MODULE: ./node_modules/driver-universal/es/weex.js

/* harmony default export */ var weex = (driver_weex_es_namespaceObject);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(20);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/driver-universal/es/web.js


/* harmony default export */ var web = (extends_default()({}, driver_dom_es_namespaceObject, {
  createElement: function (type, props, component) {
    return createElement(type, props, component, true);
  },
  setStyle: function (node, style) {
    return setStyle(node, style, true);
  }
}));
// EXTERNAL MODULE: ./node_modules/driver-miniapp/lib/index.js
var driver_miniapp_lib = __webpack_require__(21);
var driver_miniapp_lib_default = /*#__PURE__*/__webpack_require__.n(driver_miniapp_lib);

// CONCATENATED MODULE: ./node_modules/driver-universal/es/miniapp.js

/* harmony default export */ var miniapp = (driver_miniapp_lib_default.a);
// CONCATENATED MODULE: ./node_modules/driver-universal/es/index.js




var currentDriver;
if (lib["isWeex"]) {
  currentDriver = weex;
} else if (lib["isWeb"]) {
  currentDriver = web;
} else if (lib["isMiniApp"] || lib["isWeChatMiniProgram"] || lib["isByteDanceMicroApp"] || lib["isBaiduSmartProgram"] || lib["isKuaiShouMiniProgram"]) {
  currentDriver = miniapp;
}
/* harmony default export */ var es = (currentDriver);
// CONCATENATED MODULE: ./node_modules/rax-image/es/utils/emptySource.js
var EMPTY_SOURCE = {};
/* harmony default export */ var emptySource = (EMPTY_SOURCE);
// CONCATENATED MODULE: ./node_modules/rax-image/es/web/index.js
var _excluded = ["source", "fallbackSource", "onLoad", "onError", "style", "resizeMode", "loading"];
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}


var Image = Object(rax["forwardRef"])(function (_ref, ref) {
  var source = _ref.source,
    fallbackSource = _ref.fallbackSource,
    onLoad = _ref.onLoad,
    onError = _ref.onError,
    style = _ref.style,
    resizeMode = _ref.resizeMode,
    loading = _ref.loading,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded);
  source = source || emptySource;
  fallbackSource = fallbackSource || emptySource;
  var nativeProps = rest;
  var _useState = Object(rax["useState"])({}),
    errorState = _useState[0],
    setErrorState = _useState[1];
  nativeProps.onError = Object(rax["useCallback"])(function (e) {
    if (errorState.uri === undefined) {
      setErrorState({
        uri: source.uri
      });
    }
    onError && onError(e);
  }, [source.uri, onError, errorState]);
  nativeProps.onLoad = Object(rax["useCallback"])(function (e) {
    if (e && e.success) {
      // weex
      onLoad && onLoad(e);
    } else if (
    // alicdn will return an 1x1 img when img is not loaded successfully
    e && e.currentTarget && e.currentTarget.naturalWidth > 1 && e.currentTarget.naturalHeight > 1) {
      // web
      onLoad && onLoad(e);
    } else {
      if (errorState.uri === undefined) {
        setErrorState({
          uri: source.uri
        });
      }
      onError && onError(e);
    }
  }, [onLoad, onError]);
  if (errorState.uri !== undefined) {
    if (errorState.uri !== source.uri) {
      errorState.uri = undefined;
    } else if (fallbackSource.uri != null) {
      source = fallbackSource;
    }
  }
  var _source = source,
    width = _source.width,
    height = _source.height,
    uri = _source.uri;
  nativeProps.src = uri;
  nativeProps.style = _extends({
    width: width,
    height: height
  }, style);
  if (loading) {
    nativeProps.loading = loading;
  } // for cover and contain

  resizeMode = resizeMode || nativeProps.style.resizeMode;
  if (resizeMode) {
    nativeProps.style.objectFit = resizeMode;
  }
  return Object(rax["createElement"])("img", _extends({}, nativeProps, {
    ref: ref
  }));
});
/* harmony default export */ var es_web = (Image);
// CONCATENATED MODULE: ./node_modules/rax-image/es/miniapp-runtime/index.js
var miniapp_runtime_excluded = ["source", "fallbackSource", "onLoad", "onError", "style", "resizeMode", "loading", "placeholder"];
function miniapp_runtime_extends() {
  miniapp_runtime_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return miniapp_runtime_extends.apply(this, arguments);
}
function miniapp_runtime_objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}


var miniapp_runtime_Image = Object(rax["forwardRef"])(function (_ref, ref) {
  var source = _ref.source,
    fallbackSource = _ref.fallbackSource,
    onLoad = _ref.onLoad,
    onError = _ref.onError,
    style = _ref.style,
    resizeMode = _ref.resizeMode,
    loading = _ref.loading,
    placeholder = _ref.placeholder,
    rest = miniapp_runtime_objectWithoutPropertiesLoose(_ref, miniapp_runtime_excluded);
  source = source || emptySource;
  fallbackSource = fallbackSource || emptySource;
  var nativeProps = rest;
  var _useState = Object(rax["useState"])({}),
    errorState = _useState[0],
    setErrorState = _useState[1];
  nativeProps.onError = Object(rax["useCallback"])(function (e) {
    if (errorState.uri === undefined) {
      setErrorState({
        uri: source.uri
      });
    }
    onError && onError(e);
  }, [source.uri, onError, errorState]);
  nativeProps.onLoad = Object(rax["useCallback"])(function (e) {
    // onLoad is triggered by native, so no need to judge
    onLoad && onLoad(e);
  }, [onLoad, onError]);
  if (errorState.uri !== undefined) {
    if (errorState.uri !== source.uri) {
      errorState.uri = undefined;
    } else if (fallbackSource.uri != null) {
      source = fallbackSource;
    }
  }
  var _source = source,
    width = _source.width,
    height = _source.height,
    uri = _source.uri;
  nativeProps.src = uri;
  nativeProps.style = miniapp_runtime_extends({
    width: width,
    height: height
  }, style);
  if (loading) {
    nativeProps['lazy-load'] = loading === 'lazy';
  }
  if (placeholder) {
    nativeProps['default-source'] = placeholder;
  } // for cover and contain

  resizeMode = resizeMode || nativeProps.style.resizeMode;
  if (resizeMode) {
    nativeProps.style.objectFit = resizeMode;
  }
  return Object(rax["createElement"])("img", miniapp_runtime_extends({}, nativeProps, {
    ref: ref
  }));
});
/* harmony default export */ var miniapp_runtime = (miniapp_runtime_Image);
// CONCATENATED MODULE: ./node_modules/rax-image/es/weex/index.js
var weex_excluded = ["source", "fallbackSource", "onLoad", "onError", "style", "resizeMode", "loading"];
function weex_extends() {
  weex_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return weex_extends.apply(this, arguments);
}
function weex_objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}



var weex_Image = Object(rax["forwardRef"])(function (_ref, ref) {
  var source = _ref.source,
    fallbackSource = _ref.fallbackSource,
    onLoad = _ref.onLoad,
    onError = _ref.onError,
    style = _ref.style,
    resizeMode = _ref.resizeMode,
    loading = _ref.loading,
    rest = weex_objectWithoutPropertiesLoose(_ref, weex_excluded);
  source = source || emptySource;
  fallbackSource = fallbackSource || emptySource;
  var nativeProps = rest;
  var _useState = Object(rax["useState"])({}),
    errorState = _useState[0],
    setErrorState = _useState[1];
  nativeProps.onError = Object(rax["useCallback"])(function (e) {
    if (errorState.uri === undefined) {
      setErrorState({
        uri: source.uri
      });
    }
    onError && onError(e);
  }, [source.uri, onError, errorState]);
  nativeProps.onLoad = Object(rax["useCallback"])(function (e) {
    if (e && e.success) {
      // weex
      onLoad && onLoad(e);
    } else if (
    // alicdn will return an 1x1 img when img is not loaded successfully
    e && e.currentTarget && e.currentTarget.naturalWidth > 1 && e.currentTarget.naturalHeight > 1) {
      // web
      onLoad && onLoad(e);
    } else {
      if (errorState.uri === undefined) {
        setErrorState({
          uri: source.uri
        });
      }
      onError && onError(e);
    }
  }, [onLoad, onError]);
  if (errorState.uri !== undefined) {
    if (errorState.uri !== source.uri) {
      errorState.uri = undefined;
    } else if (fallbackSource.uri != null) {
      source = fallbackSource;
    }
  }
  var _source = source,
    width = _source.width,
    height = _source.height,
    uri = _source.uri;
  nativeProps.src = uri;
  nativeProps.style = weex_extends({
    width: width,
    height: height
  }, style); // for cover and contain

  resizeMode = resizeMode || nativeProps.style.resizeMode;
  if (resizeMode) {
    nativeProps.resize = resizeMode;
    nativeProps.style.resizeMode = resizeMode;
  } // Set default quality to "original" in weex avoid image be optimized unexpect
  // @ts-ignore

  return Object(rax["createElement"])("image", weex_extends({
    quality: "original"
  }, nativeProps, {
    ref: ref
  }));
});
/* global __weex_v2__ */

/* harmony default export */ var es_weex = (typeof __weex_v2__ === 'object' ? es_web : weex_Image);
// CONCATENATED MODULE: ./node_modules/rax-image/es/types.js

// CONCATENATED MODULE: ./node_modules/rax-image/es/index.js




var es_Image = null;
if (lib["isWeb"]) {
  es_Image = es_web;
} else if (lib["isMiniApp"] || lib["isWeChatMiniProgram"] || lib["isByteDanceMicroApp"] || lib["isBaiduSmartProgram"] || lib["isKuaiShouMiniProgram"]) {
  es_Image = miniapp_runtime;
} else if (lib["isWeex"]) {
  es_Image = es_weex;
} else {
  es_Image = es_web;
}
/* harmony default export */ var rax_image_es = (es_Image);

// EXTERNAL MODULE: ./node_modules/rax-icon/node_modules/rax-text/lib/index.js
var rax_text_lib = __webpack_require__(7);
var rax_text_lib_default = /*#__PURE__*/__webpack_require__.n(rax_text_lib);

// EXTERNAL MODULE: ./node_modules/rax-icon/node_modules/rax-image/lib/index.js
var rax_image_lib = __webpack_require__(9);
var rax_image_lib_default = /*#__PURE__*/__webpack_require__.n(rax_image_lib);

// CONCATENATED MODULE: ./node_modules/rax-icon/es/utils/wrapDefaultProperties.js
function wrapDefaultProperties(Icon) {
  Icon.displayName = 'Icon';
  return Icon;
}
// CONCATENATED MODULE: ./node_modules/rax-icon/es/createIconSet.js
var createIconSet_excluded = ["name", "className", "codePoint", "style"];
function createIconSet_extends() {
  createIconSet_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return createIconSet_extends.apply(this, arguments);
}
function createIconSet_objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

function createIconSet(Icon, glyphMap, fontFamily, fontFile) {
  if (glyphMap === void 0) {
    glyphMap = {};
  }
  var IconFont = Object(rax["forwardRef"])(function (_ref, ref) {
    var name = _ref.name,
      className = _ref.className,
      codePoint = _ref.codePoint,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style,
      rest = createIconSet_objectWithoutPropertiesLoose(_ref, createIconSet_excluded);
    return Object(rax["createElement"])(Icon, createIconSet_extends({}, rest, {
      ref: ref,
      className: className,
      style: style,
      source: {
        uri: fontFile,
        codePoint: codePoint || glyphMap[name]
      },
      fontFamily: fontFamily
    }));
  });
  IconFont.displayName = 'IconFont';
  return IconFont;
}
// CONCATENATED MODULE: ./node_modules/rax-icon/es/web/index.js
var web_excluded = ["source", "fontFamily", "style"];
function web_extends() {
  web_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return web_extends.apply(this, arguments);
}
function web_objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}





var fontCache = new Map();
var web_Icon = Object(rax["forwardRef"])(function (_ref, ref) {
  var _ref$source = _ref.source;
  _ref$source = _ref$source === void 0 ? {} : _ref$source;
  var uri = _ref$source.uri,
    codePoint = _ref$source.codePoint,
    fontFamily = _ref.fontFamily,
    _ref$style = _ref.style,
    style = _ref$style === void 0 ? {} : _ref$style,
    rest = web_objectWithoutPropertiesLoose(_ref, web_excluded);
  if (uri && !codePoint && !fontFamily) {
    return Object(rax["createElement"])(rax_image_lib_default.a, web_extends({}, rest, {
      source: {
        uri: uri
      },
      style: style
    }));
  }
  if (!fontFamily) {
    return Object(rax["createElement"])(rax_text_lib_default.a, web_extends({}, rest, {
      ref: ref,
      style: style
    }), codePoint);
  }
  var fontFile = fontCache.get(fontFamily);
  if (!fontFile) {
    // In Web and Weex, this font not be loaded yet, load now
    // In Miniapp, iconfont must be loaded every time when page changes
    var source = "url('" + uri + "')";
    fontCache.set(fontFamily, uri);
    if (window.FontFace) {
      var iconfont = new window.FontFace(fontFamily, source);
      document.fonts.add(iconfont);
    } else {
      // Create stylesheet
      var _style = document.createElement('style');
      _style.type = 'text/css';
      _style.appendChild(document.createTextNode("@font-face {\n              src: " + source + ";\n              font-family: " + fontFamily + ";\n            }"));
      document.head.appendChild(_style);
    }
  } else if (fontFile !== uri) {
    console.error("font-family " + fontFamily + " should be unique!");
    return null;
  }
  return Object(rax["createElement"])(rax_text_lib_default.a, web_extends({}, rest, {
    ref: ref,
    style: web_extends({}, style, {
      fontFamily: fontFamily
    })
  }), codePoint);
});
function web_createIconSet(glyphMap, fontFamily, fontFile) {
  if (glyphMap === void 0) {
    glyphMap = {};
  }
  return createIconSet(web_Icon, glyphMap, fontFamily, fontFile);
}
/* harmony default export */ var rax_icon_es_web = (wrapDefaultProperties(web_Icon));
// CONCATENATED MODULE: ./node_modules/rax-icon/es/miniapp-runtime/index.js
var es_miniapp_runtime_excluded = ["source", "fontFamily", "style"];
function es_miniapp_runtime_extends() {
  es_miniapp_runtime_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return es_miniapp_runtime_extends.apply(this, arguments);
}
function es_miniapp_runtime_objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}






var miniapp_runtime_fontCache = new Map();
var miniapp_runtime_Icon = Object(rax["forwardRef"])(function (_ref, ref) {
  var _ref$source = _ref.source;
  _ref$source = _ref$source === void 0 ? {} : _ref$source;
  var uri = _ref$source.uri,
    codePoint = _ref$source.codePoint,
    fontFamily = _ref.fontFamily,
    _ref$style = _ref.style,
    style = _ref$style === void 0 ? {} : _ref$style,
    rest = es_miniapp_runtime_objectWithoutPropertiesLoose(_ref, es_miniapp_runtime_excluded);
  if (uri && !codePoint && !fontFamily) {
    return Object(rax["createElement"])(rax_image_lib_default.a, es_miniapp_runtime_extends({}, rest, {
      source: {
        uri: uri
      },
      style: style
    }));
  }
  if (!fontFamily) {
    return Object(rax["createElement"])(rax_text_lib_default.a, es_miniapp_runtime_extends({}, rest, {
      ref: ref,
      style: style
    }), codePoint);
  }
  var fontFile = miniapp_runtime_fontCache.get(fontFamily);
  if (!fontFile) {
    // In Miniapp, iconfont must be loaded every time when page changes
    var source = "url('" + uri + "')";
    if (lib["isMiniApp"]) {
      if (typeof my.loadFontFace === 'function') {
        my.loadFontFace({
          family: fontFamily,
          source: source
        });
      } else {
        console.warn('Your container may not support my.loadFontFace! Please check it and use local fontfamily.');
      }
    } else if (lib["isWeChatMiniProgram"]) {
      wx.loadFontFace({
        family: fontFamily,
        source: source
      });
    } else if (lib["isByteDanceMicroApp"]) {
      tt.loadFont(uri);
    } else if (lib["isBaiduSmartProgram"] || lib["isKuaiShouMiniProgram"]) {
      console.warn('Current container does not support loading font face from uri.');
    }
  } else if (fontFile !== uri) {
    console.error("font-family " + fontFamily + " should be unique!");
    return null;
  }
  return Object(rax["createElement"])(rax_text_lib_default.a, es_miniapp_runtime_extends({}, rest, {
    ref: ref,
    style: es_miniapp_runtime_extends({}, style, {
      fontFamily: fontFamily
    })
  }), codePoint);
});
function miniapp_runtime_createIconSet(glyphMap, fontFamily, fontFile) {
  if (glyphMap === void 0) {
    glyphMap = {};
  }
  return createIconSet(miniapp_runtime_Icon, glyphMap, fontFamily, fontFile);
}
/* harmony default export */ var es_miniapp_runtime = (wrapDefaultProperties(miniapp_runtime_Icon));
// CONCATENATED MODULE: ./node_modules/rax-icon/es/weex/index.js
var es_weex_excluded = ["source", "fontFamily", "style"];
function es_weex_extends() {
  es_weex_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return es_weex_extends.apply(this, arguments);
}
function es_weex_objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}





var domModule = null;
try {
  domModule = __weex_require__('@weex-module/dom');
} catch (error) {
  console.log('require @weex-module/dom error');
}
var weex_fontCache = new Map();
var weex_Icon = Object(rax["forwardRef"])(function (_ref, ref) {
  var _ref$source = _ref.source;
  _ref$source = _ref$source === void 0 ? {} : _ref$source;
  var uri = _ref$source.uri,
    codePoint = _ref$source.codePoint,
    fontFamily = _ref.fontFamily,
    _ref$style = _ref.style,
    style = _ref$style === void 0 ? {} : _ref$style,
    rest = es_weex_objectWithoutPropertiesLoose(_ref, es_weex_excluded);
  if (uri && !codePoint && !fontFamily) {
    return Object(rax["createElement"])(rax_image_lib_default.a, es_weex_extends({}, rest, {
      source: {
        uri: uri
      },
      style: style
    }));
  }
  if (!fontFamily) {
    return Object(rax["createElement"])(rax_text_lib_default.a, es_weex_extends({}, rest, {
      ref: ref,
      style: style
    }), codePoint);
  }
  var fontFile = weex_fontCache.get(fontFamily);
  if (!fontFile) {
    // In Weex, this font not be loaded yet, load now
    weex_fontCache.set(fontFamily, uri);
    domModule.addRule('fontFace', {
      fontFamily: fontFamily,
      src: "url('" + uri + "')" // single quotes are required around uri, and double quotes can not work
    });
  } else if (fontFile !== uri) {
    console.error("font-family " + fontFamily + " should be unique!");
    return null;
  }
  return Object(rax["createElement"])(rax_text_lib_default.a, es_weex_extends({}, rest, {
    ref: ref,
    style: es_weex_extends({}, style, {
      fontFamily: fontFamily
    })
  }), codePoint);
});
function weex_createIconSet(glyphMap, fontFamily, fontFile) {
  if (glyphMap === void 0) {
    glyphMap = {};
  }
  return createIconSet(weex_Icon, glyphMap, fontFamily, fontFile);
}
/* harmony default export */ var rax_icon_es_weex = (wrapDefaultProperties(weex_Icon));
// CONCATENATED MODULE: ./node_modules/rax-icon/es/types.js

// CONCATENATED MODULE: ./node_modules/rax-icon/es/index.js





var es_Icon = null;
if (lib["isWeb"]) {
  es_Icon = rax_icon_es_web;
} else if (lib["isMiniApp"] || lib["isWeChatMiniProgram"] || lib["isByteDanceMicroApp"] || lib["isBaiduSmartProgram"] || lib["isKuaiShouMiniProgram"]) {
  es_Icon = es_miniapp_runtime;
} else if (lib["isWeex"]) {
  es_Icon = rax_icon_es_weex;
} else {
  es_Icon = rax_icon_es_web;
}
/* harmony default export */ var rax_icon_es = (es_Icon);

function es_createIconSet(glyphMap, fontFamily, fontFile) {
  if (glyphMap === void 0) {
    glyphMap = {};
  }
  return createIconSet(es_Icon, glyphMap, fontFamily, fontFile);
}
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(1);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// CONCATENATED MODULE: ./node_modules/@alifd/meet-demo-layout/es/view.js
function view_extends() {
  view_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return view_extends.apply(this, arguments);
}
function view_objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

/* @jsx createElement */


var View = Object(rax["forwardRef"])(function (props, ref) {
  var selfRef = Object(rax["useRef"])(null); // automatically remove onTouch* events on view template. set withoutTouch=false to add all events in miniapp
  // by the way: you should remove all unnecessary events on view template in 'root.axml'

  var onFirstAppear = props.onFirstAppear,
    onAppear = props.onAppear,
    _props$withoutTouch = props.withoutTouch,
    withoutTouch = _props$withoutTouch === void 0 ? true : _props$withoutTouch,
    rest = view_objectWithoutPropertiesLoose(props, ["onFirstAppear", "onAppear", "withoutTouch"]);
  if (lib["isMiniApp"]) {
    // For miniapp runtime pre-compile
    return withoutTouch ? Object(rax["createElement"])("view", view_extends({}, rest, {
      onAppear: onAppear,
      onDisappear: rest.onDisappear,
      onFirstAppear: onFirstAppear // @ts-ignore
      ,

      ref: ref
    })) : Object(rax["createElement"])("div", view_extends({}, rest, {
      onAppear: onAppear,
      onDisappear: rest.onDisappear,
      onFirstAppear: onFirstAppear,
      ref: ref
    }));
  }
  var handleAppear = onAppear;
  if (onFirstAppear) {
    handleAppear = function (event) {
      if (onAppear) {
        onAppear(event);
      }
      if (!selfRef.triggeredAppear) {
        if (onFirstAppear) {
          onFirstAppear(event);
        }
      } else {
        selfRef.triggeredAppear = true;
      }
    };
  }
  return Object(rax["createElement"])("div", view_extends({}, rest, {
    onAppear: handleAppear,
    ref: ref
  }));
});
View.displayName = 'View';
/* harmony default export */ var es_view = (View);
// CONCATENATED MODULE: ./node_modules/@alifd/meet-demo-layout/es/page.js
function page_extends() {
  page_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return page_extends.apply(this, arguments);
}
function page_objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

/* @jsx createElement */



/* harmony default export */ var page = (function (props) {
  var children = props.children,
    fullWidth = props.fullWidth,
    className = props.className,
    others = page_objectWithoutPropertiesLoose(props, ["children", "fullWidth", "className"]);
  return Object(rax["createElement"])(es_view, page_extends({
    className: classnames_default()('mt-demo-page', className, {
      'mt-demo-page--fullwidth': fullWidth
    })
  }, others), children);
});
// CONCATENATED MODULE: ./node_modules/rax-text/es/utils/wrapDefaultProperties.js
function wrapDefaultProperties_wrapDefaultProperties(Text) {
  Text.displayName = 'ScrollView';
  return Text;
}
// EXTERNAL MODULE: ./node_modules/rax-text/es/index.css
var rax_text_es = __webpack_require__(10);
var es_default = /*#__PURE__*/__webpack_require__.n(rax_text_es);

// CONCATENATED MODULE: ./node_modules/rax-text/es/web/index.js
var es_web_excluded = ["className", "style", "numberOfLines", "children", "onPress", "onClick"];
function es_web_extends() {
  es_web_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return es_web_extends.apply(this, arguments);
}
function es_web_objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}


 // add version in style to avoid conflict with older version

var _styleSheet = es_default.a;
function _getClassName() {
  var className = [];
  var args = arguments[0];
  var type = Object.prototype.toString.call(args).slice(8, -1).toLowerCase();
  if (type === 'string') {
    args = args.trim();
    args && className.push(args);
  } else if (type === 'array') {
    args.forEach(function (cls) {
      cls = _getClassName(cls).trim();
      cls && className.push(cls);
    });
  } else if (type === 'object') {
    for (var k in args) {
      k = k.trim();
      if (k && args.hasOwnProperty(k) && args[k]) {
        className.push(k);
      }
    }
  }
  return className.join(' ').trim();
}
function _getStyle(classNameExpression) {
  var cache = _styleSheet.__cache || (_styleSheet.__cache = {});
  var className = _getClassName(classNameExpression);
  var classNameArr = className.split(/\s+/);
  var style = cache[className];
  if (!style) {
    style = {};
    if (classNameArr.length === 1) {
      style = _styleSheet[classNameArr[0].trim()];
    } else {
      classNameArr.forEach(function (cls) {
        var value = _styleSheet[cls.trim()];
        if (typeof value === 'object') {
          style = Object.assign(style, _styleSheet[cls.trim()]);
        }
      });
    }
    cache[className] = style;
  }
  return style;
}
var prefixCls = 'rax-text-v2';
var Text = Object(rax["forwardRef"])(function (props, ref) {
  var className = props.className,
    style = props.style,
    numberOfLines = props.numberOfLines,
    children = props.children,
    onPress = props.onPress,
    onClick = props.onClick,
    rest = es_web_objectWithoutPropertiesLoose(props, es_web_excluded);
  var lines = typeof numberOfLines === 'string' ? parseInt(numberOfLines, 10) : numberOfLines;
  var textString = '';
  if (children != null) {
    textString = Array.isArray(children) ? children.join('') : children.toString();
  }
  var classNames = [prefixCls, className];
  if (lines) {
    classNames.push(prefixCls + "--overflow-hidden");
    if (lines === 1) {
      classNames.push(prefixCls + "--singleline");
    } else {
      classNames.push(prefixCls + "--multiline");
    }
  }
  var lineClamp = lines > 1 ? lines : undefined;
  return Object(rax["createElement"])("span", es_web_extends({}, rest, {
    ref: ref,
    className: classNames.join(' ') // Vendor prefixes should begin with a capital letter.
    ,

    style: Object.assign({}, _getStyle(classNames.join(' ')), es_web_extends({}, style, {
      // Currently only -webkit-line-clamp is supported in browsers
      // https://www.w3.org/TR/css-overflow-3/#webkit-line-clamp
      WebkitLineClamp: lineClamp,
      // Add line-clamp for standard compatibility and engines which
      // has already support it such as Kraken
      lineClamp: lineClamp
    })),
    onClick: onClick || onPress
  }), textString);
});
/* harmony default export */ var rax_text_es_web = (wrapDefaultProperties_wrapDefaultProperties(Text));
// CONCATENATED MODULE: ./node_modules/rax-text/es/miniapp-runtime/index.js
var rax_text_es_miniapp_runtime_excluded = ["className", "style", "numberOfLines", "children", "onPress", "onClick"];
function rax_text_es_miniapp_runtime_extends() {
  rax_text_es_miniapp_runtime_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return rax_text_es_miniapp_runtime_extends.apply(this, arguments);
}
function rax_text_es_miniapp_runtime_objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}



 // add version in style to avoid conflict with older version

var miniapp_runtime_styleSheet = es_default.a;
function miniapp_runtime_getClassName() {
  var className = [];
  var args = arguments[0];
  var type = Object.prototype.toString.call(args).slice(8, -1).toLowerCase();
  if (type === 'string') {
    args = args.trim();
    args && className.push(args);
  } else if (type === 'array') {
    args.forEach(function (cls) {
      cls = miniapp_runtime_getClassName(cls).trim();
      cls && className.push(cls);
    });
  } else if (type === 'object') {
    for (var k in args) {
      k = k.trim();
      if (k && args.hasOwnProperty(k) && args[k]) {
        className.push(k);
      }
    }
  }
  return className.join(' ').trim();
}
function miniapp_runtime_getStyle(classNameExpression) {
  var cache = miniapp_runtime_styleSheet.__cache || (miniapp_runtime_styleSheet.__cache = {});
  var className = miniapp_runtime_getClassName(classNameExpression);
  var classNameArr = className.split(/\s+/);
  var style = cache[className];
  if (!style) {
    style = {};
    if (classNameArr.length === 1) {
      style = miniapp_runtime_styleSheet[classNameArr[0].trim()];
    } else {
      classNameArr.forEach(function (cls) {
        var value = miniapp_runtime_styleSheet[cls.trim()];
        if (typeof value === 'object') {
          style = Object.assign(style, miniapp_runtime_styleSheet[cls.trim()]);
        }
      });
    }
    cache[className] = style;
  }
  return style;
}
var miniapp_runtime_prefixCls = 'rax-text-v2';
var miniapp_runtime_Text = Object(rax["forwardRef"])(function (props, ref) {
  var className = props.className,
    style = props.style,
    numberOfLines = props.numberOfLines,
    children = props.children,
    onPress = props.onPress,
    onClick = props.onClick,
    rest = rax_text_es_miniapp_runtime_objectWithoutPropertiesLoose(props, rax_text_es_miniapp_runtime_excluded);
  var lines = typeof numberOfLines === 'string' ? parseInt(numberOfLines, 10) : numberOfLines;
  var textString = '';
  if (children != null) {
    textString = Array.isArray(children) ? children.join('') : children.toString();
  }
  var classNamesArr = [miniapp_runtime_prefixCls, className]; // Ali miniapp support number-of-lines so don't need extra css

  if (!lib["isMiniApp"] && lines) {
    classNamesArr = classNamesArr.concat([miniapp_runtime_prefixCls + "--overflow-hidden", miniapp_runtime_prefixCls + "--multiline"]);
  }
  var lineClamp = lines > 0 ? lines : undefined;
  var classNames = classNamesArr.join(' ');
  return (
    // @ts-ignore
    Object(rax["createElement"])("text", rax_text_es_miniapp_runtime_extends({}, rest, {
      ref: ref,
      className: classNames,
      style: Object.assign({}, miniapp_runtime_getStyle(classNames), rax_text_es_miniapp_runtime_extends({}, style, {
        WebkitLineClamp: lineClamp
      })),
      onClick: onClick || onPress,
      "number-of-lines": lines
    }), textString)
  );
});
/* harmony default export */ var rax_text_es_miniapp_runtime = (wrapDefaultProperties_wrapDefaultProperties(miniapp_runtime_Text));
// CONCATENATED MODULE: ./node_modules/rax-text/es/weex/index.js
var rax_text_es_weex_excluded = ["className", "style", "numberOfLines", "children", "onPress", "onClick"];
function rax_text_es_weex_extends() {
  rax_text_es_weex_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return rax_text_es_weex_extends.apply(this, arguments);
}
function rax_text_es_weex_objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}



var weex_styleSheet = es_default.a;
function weex_getClassName() {
  var className = [];
  var args = arguments[0];
  var type = Object.prototype.toString.call(args).slice(8, -1).toLowerCase();
  if (type === 'string') {
    args = args.trim();
    args && className.push(args);
  } else if (type === 'array') {
    args.forEach(function (cls) {
      cls = weex_getClassName(cls).trim();
      cls && className.push(cls);
    });
  } else if (type === 'object') {
    for (var k in args) {
      k = k.trim();
      if (k && args.hasOwnProperty(k) && args[k]) {
        className.push(k);
      }
    }
  }
  return className.join(' ').trim();
}
function weex_getStyle(classNameExpression) {
  var cache = weex_styleSheet.__cache || (weex_styleSheet.__cache = {});
  var className = weex_getClassName(classNameExpression);
  var classNameArr = className.split(/\s+/);
  var style = cache[className];
  if (!style) {
    style = {};
    if (classNameArr.length === 1) {
      style = weex_styleSheet[classNameArr[0].trim()];
    } else {
      classNameArr.forEach(function (cls) {
        var value = weex_styleSheet[cls.trim()];
        if (typeof value === 'object') {
          style = Object.assign(style, weex_styleSheet[cls.trim()]);
        }
      });
    }
    cache[className] = style;
  }
  return style;
}
var weex_prefixCls = 'rax-text-v2';
var weex_Text = Object(rax["forwardRef"])(function (props, ref) {
  var className = props.className,
    style = props.style,
    numberOfLines = props.numberOfLines,
    children = props.children,
    onPress = props.onPress,
    onClick = props.onClick,
    rest = rax_text_es_weex_objectWithoutPropertiesLoose(props, rax_text_es_weex_excluded);
  var handleClick = onClick || onPress;
  var lines = typeof numberOfLines === 'string' ? parseInt(numberOfLines, 10) : numberOfLines;
  var textString = '';
  if (children != null) {
    textString = Array.isArray(children) ? children.join('') : children.toString();
  }
  /* global __weex_v2__ */

  if (typeof __weex_v2__ === 'object') {
    var classNames = [className];
    if (lines) {
      classNames.push(weex_prefixCls + "--overflow-hidden");
      if (lines === 1) {
        classNames.push(weex_prefixCls + "--singleline");
      } else {
        classNames.push(weex_prefixCls + "--multiline");
      }
    }
    var lineClamp = lines > 1 ? lines : undefined;
    return (
      // @ts-ignore
      Object(rax["createElement"])("text", rax_text_es_weex_extends({}, rest, {
        ref: ref,
        className: classNames.join(' '),
        style: Object.assign({}, weex_getStyle(classNames.join(' ')), rax_text_es_weex_extends({}, style, {
          lineClamp: lineClamp
        })),
        onClick: handleClick
      }), textString)
    );
  }
  return (
    // @ts-ignore
    Object(rax["createElement"])("text", rax_text_es_weex_extends({}, rest, {
      ref: ref,
      className: className,
      style: Object.assign({}, weex_getStyle(className), rax_text_es_weex_extends({
        lines: lines
      }, style)),
      onClick: handleClick
    }), textString)
  );
});
/* harmony default export */ var rax_text_es_weex = (wrapDefaultProperties_wrapDefaultProperties(weex_Text));
// CONCATENATED MODULE: ./node_modules/rax-text/es/types.js

// CONCATENATED MODULE: ./node_modules/rax-text/es/index.js




var es_Text = null;
if (lib["isWeb"]) {
  es_Text = rax_text_es_web;
} else if (lib["isMiniApp"] || lib["isWeChatMiniProgram"] || lib["isByteDanceMicroApp"] || lib["isBaiduSmartProgram"] || lib["isKuaiShouMiniProgram"]) {
  es_Text = rax_text_es_miniapp_runtime;
} else if (lib["isWeex"]) {
  es_Text = rax_text_es_weex;
} else {
  es_Text = rax_text_es_web;
}
/* harmony default export */ var node_modules_rax_text_es = (es_Text);

// CONCATENATED MODULE: ./node_modules/@alifd/meet-demo-layout/es/typography.js
function typography_extends() {
  typography_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return typography_extends.apply(this, arguments);
}
function typography_objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

/* @jsx createElement */



/**
 * 文字 字体、大小、行高
 * @param props
 */

var Typography = function (props) {
  var _classNames;
  var _props$prefix = props.prefix,
    prefix = _props$prefix === void 0 ? 'mt-demo-' : _props$prefix,
    type = props.type,
    className = props.className,
    children = props.children,
    others = typography_objectWithoutPropertiesLoose(props, ["prefix", "type", "className", "children"]);
  var cls = classnames_default()(className, (_classNames = {}, _classNames[prefix + "text"] = true, _classNames[prefix + "text-" + type] = type, _classNames));
  return Object(rax["createElement"])(node_modules_rax_text_es, typography_extends({}, others, {
    className: cls
  }), children);
};
/* harmony default export */ var typography = (Typography);
// CONCATENATED MODULE: ./node_modules/@alifd/meet-demo-layout/es/card.js
function card_extends() {
  card_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return card_extends.apply(this, arguments);
}
function card_objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

/* @jsx createElement */




/* harmony default export */ var card = (function (props) {
  var children = props.children,
    className = props.className,
    title = props.title,
    fullWidth = props.fullWidth,
    contentClassName = props.contentClassName,
    contentStyle = props.contentStyle,
    _props$type = props.type,
    type = _props$type === void 0 ? 'normal' : _props$type,
    others = card_objectWithoutPropertiesLoose(props, ["children", "className", "title", "fullWidth", "contentClassName", "contentStyle", "type"]);
  return Object(rax["createElement"])(es_view, card_extends({
    className: classnames_default()('mt-demo-card', "mt-demo-card--" + type, className)
  }, others), title ? Object(rax["createElement"])(typography, {
    type: "title",
    className: classnames_default()('mt-demo-card-title')
  }, title) : null, Object(rax["createElement"])(es_view, {
    className: classnames_default()('mt-demo-card-content', "mt-demo-card-content--" + type, contentClassName, {
      'mt-demo-card-content--fullwidth': fullWidth
    }),
    style: contentStyle
  }, children));
});
// EXTERNAL MODULE: ./node_modules/rax-clone-element/lib/index.js
var rax_clone_element_lib = __webpack_require__(11);
var rax_clone_element_lib_default = /*#__PURE__*/__webpack_require__.n(rax_clone_element_lib);

// EXTERNAL MODULE: ./node_modules/rax-children/lib/index.js
var rax_children_lib = __webpack_require__(5);
var rax_children_lib_default = /*#__PURE__*/__webpack_require__.n(rax_children_lib);

// CONCATENATED MODULE: ./node_modules/@alifd/meet-demo-layout/es/p.js
function p_extends() {
  p_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return p_extends.apply(this, arguments);
}
function p_objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

/* @jsx createElement */






/**
 * P 的分组
 * @param props
 */

var Cell = function (props) {
  var _classNames;
  var _props$prefix = props.prefix,
    prefix = _props$prefix === void 0 ? 'mt-demo-' : _props$prefix,
    children = props.children,
    _props$type = props.type,
    type = _props$type === void 0 ? 'body-1' : _props$type,
    verAlign = props.verAlign,
    align = props.align,
    others = p_objectWithoutPropertiesLoose(props, ["prefix", "children", "type", "verAlign", "align"]);
  var cls = classnames_default()((_classNames = {}, _classNames[prefix + "p-cell"] = true, _classNames[prefix + "p-cell-" + type] = type, _classNames)); // Cell 自动判断 Text

  var newChildren = rax_children_lib_default.a.map(children, function (child, index) {
    if (typeof child === 'string') {
      if (!child.trim()) {
        return null;
      }
      return Object(rax["createElement"])(typography, {
        key: index
      }, child);
    }
    return child;
  });
  var style = p_extends({
    alignItems: verAlign,
    justifyContent: align
  }, props.style);
  return Object(rax["createElement"])(es_view, p_extends({}, others, {
    className: cls,
    style: style
  }), newChildren);
};
/**
 * P 掌管一行元素的上下间距
 * 特性:
 * - P + P 相邻会呈现上下间距；上下间距有3个size，如果发生>body-2 就用body-2、< caption 就用cation; P 作为第一个元素会去除 margin-top，P 作为最后一个元素会去除 margin-bottom
 * - P>* 的最后一个子元素去除 margin-right; p>Text 没有上下间距(文字比较特殊)
 * - P 下直接文字会自动用 Text 包裹
 */

var Paragraph = function (props) {
  var _classNames2;
  var _props$prefix2 = props.prefix,
    prefix = _props$prefix2 === void 0 ? 'mt-demo-' : _props$prefix2,
    children = props.children,
    _props$type2 = props.type,
    type = _props$type2 === void 0 ? 'body-1' : _props$type2,
    verAlign = props.verAlign,
    align = props.align,
    others = p_objectWithoutPropertiesLoose(props, ["prefix", "children", "type", "verAlign", "align"]);
  var cls = classnames_default()((_classNames2 = {}, _classNames2[prefix + "p"] = true, _classNames2[prefix + "p-" + type] = type, _classNames2)); // Cell 自动加 type

  var newChildren = rax_children_lib_default.a.map(children, function (child, index) {
    if (child && child.type && child.type === Cell) {
      return rax_clone_element_lib_default()(child, {
        type: child.props.type || type,
        key: index
      });
    } else if (typeof child === 'string') {
      return Object(rax["createElement"])(typography, {
        key: index
      }, child);
    }
    return child;
  });
  var style = p_extends({
    alignItems: verAlign,
    justifyContent: align
  }, props.style);
  return Object(rax["createElement"])(es_view, p_extends({}, others, {
    className: cls,
    style: style
  }), newChildren);
};
Paragraph.Cell = Cell;
/* harmony default export */ var p = (Paragraph);
// CONCATENATED MODULE: ./node_modules/@alifd/meet-demo-layout/es/row.js
function row_extends() {
  row_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return row_extends.apply(this, arguments);
}
function row_objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

/* @jsx createElement */




/* harmony default export */ var row = (function (props) {
  var children = props.children,
    style = props.style,
    span = props.span,
    _props$verAlign = props.verAlign,
    verAlign = _props$verAlign === void 0 ? 'center' : _props$verAlign,
    className = props.className,
    others = row_objectWithoutPropertiesLoose(props, ["children", "style", "span", "verAlign", "className"]);
  var _style = row_extends({}, style, {
    gridTemplateColumns: "repeat(" + (span || Math.min(3, rax_children_lib_default.a.count(children))) + ", 1fr)"
  });
  return Object(rax["createElement"])(es_view, row_extends({}, others, {
    className: classnames_default()(className, 'mt-demo-row'),
    style: _style
  }), children);
});
// CONCATENATED MODULE: ./node_modules/@alifd/meet-demo-layout/es/col.js
function col_extends() {
  col_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return col_extends.apply(this, arguments);
}
function col_objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

/* @jsx createElement */



/* harmony default export */ var col = (function (props) {
  var children = props.children,
    style = props.style,
    verAlign = props.verAlign,
    align = props.align,
    className = props.className,
    others = col_objectWithoutPropertiesLoose(props, ["children", "style", "verAlign", "align", "className"]);
  var _style = col_extends({}, style, {
    flexDirection: verAlign,
    alignItems: align
  });
  return Object(rax["createElement"])(es_view, col_extends({}, others, {
    className: classnames_default()(className, 'mt-demo-col'),
    style: _style
  }), children);
});
// CONCATENATED MODULE: ./node_modules/@alifd/meet-demo-layout/es/caption.js
function caption_extends() {
  caption_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return caption_extends.apply(this, arguments);
}
function caption_objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

/* @jsx createElement */



/* harmony default export */ var caption = (function (props) {
  var children = props.children,
    className = props.className,
    indented = props.indented,
    others = caption_objectWithoutPropertiesLoose(props, ["children", "className", "indented"]);
  return Object(rax["createElement"])(typography, caption_extends({}, others, {
    type: "subtitle",
    className: classnames_default()('mt-demo-caption', className, {
      'mt-demo-caption--indented': indented
    })
  }), children);
});
// CONCATENATED MODULE: ./node_modules/@alifd/meet-demo-layout/es/control.js
function control_extends() {
  control_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return control_extends.apply(this, arguments);
}
function control_objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

/* @jsx createElement */




/* harmony default export */ var control = (function (props) {
  var children = props.children,
    label = props.label,
    title = props.title,
    labelWidth = props.labelWidth,
    contentAlign = props.contentAlign,
    verAlign = props.verAlign,
    className = props.className,
    others = control_objectWithoutPropertiesLoose(props, ["children", "label", "title", "labelWidth", "contentAlign", "verAlign", "className"]);
  return Object(rax["createElement"])(es_view, control_extends({}, others, {
    className: classnames_default()('mt-demo-control', className, {
      'mt-demo-control--vc': verAlign === 'center'
    })
  }), Object(rax["createElement"])(es_view, {
    className: classnames_default()('mt-demo-control-label', {
      'mt-demo-control-label--vc': verAlign === 'center'
    }),
    style: {
      width: labelWidth || '220rpx'
    }
  }, Object(rax["createElement"])(typography, {
    type: 'body-2'
  }, label || title)), Object(rax["createElement"])(es_view, {
    className: classnames_default()('mt-demo-control-content', {
      'mt-demo-control-content--right': contentAlign === 'right'
    })
  }, children));
});
// CONCATENATED MODULE: ./node_modules/@alifd/meet-demo-layout/es/space.js
function space_extends() {
  space_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return space_extends.apply(this, arguments);
}
function space_objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

/* @jsx createElement */



/* harmony default export */ var space = (function (props) {
  var className = props.className,
    _props$direction = props.direction,
    direction = _props$direction === void 0 ? 'hoz' : _props$direction,
    _props$size = props.size,
    size = _props$size === void 0 ? 'medium' : _props$size,
    others = space_objectWithoutPropertiesLoose(props, ["className", "direction", "size"]);
  return Object(rax["createElement"])(es_view, space_extends({
    className: classnames_default()('mt-demo-space', "mt-demo-space--" + direction, "mt-demo-space--" + direction + "-" + size, className)
  }, others));
});
// CONCATENATED MODULE: ./node_modules/@alifd/meet-demo-layout/es/title.js
function title_extends() {
  title_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return title_extends.apply(this, arguments);
}
function title_objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

/* @jsx createElement */



/* harmony default export */ var es_title = (function (props) {
  var children = props.children,
    indented = props.indented,
    className = props.className,
    others = title_objectWithoutPropertiesLoose(props, ["children", "indented", "className"]);
  return Object(rax["createElement"])(typography, title_extends({}, others, {
    type: "body-2",
    className: classnames_default()('mt-demo-title', className, {
      'mt-demo-title--indented': indented
    })
  }), children);
});
// EXTERNAL MODULE: ./node_modules/@alifd/meet-demo-layout/es/index.scss
var meet_demo_layout_es = __webpack_require__(17);
var meet_demo_layout_es_default = /*#__PURE__*/__webpack_require__.n(meet_demo_layout_es);

// CONCATENATED MODULE: ./node_modules/@alifd/meet-demo-layout/es/index.js











var es_styleSheet = meet_demo_layout_es_default.a;

// CONCATENATED MODULE: ./node_modules/tslib/tslib.es6.js
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var _extendStatics = function extendStatics(d, b) {
  _extendStatics = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (d, b) {
    d.__proto__ = b;
  } || function (d, b) {
    for (var p in b) {
      if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    }
  };
  return _extendStatics(d, b);
};
function __extends(d, b) {
  if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  _extendStatics(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var _assign = function __assign() {
  _assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }
    return t;
  };
  return _assign.apply(this, arguments);
};

function __rest(s, e) {
  var t = {};
  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
}
function __decorate(decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
  return function (target, key) {
    decorator(target, key, paramIndex);
  };
}
function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _ = {
      label: 0,
      sent: function sent() {
        if (t[0] & 1) throw t[1];
        return t[1];
      },
      trys: [],
      ops: []
    },
    f,
    y,
    t,
    g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;
  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (g && (g = 0, op[0] && (_ = 0)), _) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];
        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;
          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };
          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;
          case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;
          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }
            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            if (t[2]) _.ops.pop();
            _.trys.pop();
            continue;
        }
        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }
    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
}
var __createBinding = Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function get() {
        return m[k];
      }
    };
  }
  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
};
function __exportStar(m, o) {
  for (var p in m) {
    if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
  }
}
function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator,
    m = s && o[s],
    i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function next() {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
    r,
    ar = [],
    e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }
  return ar;
}

/** @deprecated */
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++) {
    ar = ar.concat(__read(arguments[i]));
  }
  return ar;
}

/** @deprecated */
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
    s += arguments[i].length;
  }
  for (var r = Array(s), k = 0, i = 0; i < il; i++) {
    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
      r[k] = a[j];
    }
  }
  return r;
}
function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}
function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []),
    i,
    q = [];
  return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
    return this;
  }, i;
  function verb(n) {
    if (g[n]) i[n] = function (v) {
      return new Promise(function (a, b) {
        q.push([n, v, a, b]) > 1 || resume(n, v);
      });
    };
  }
  function resume(n, v) {
    try {
      step(g[n](v));
    } catch (e) {
      settle(q[0][3], e);
    }
  }
  function step(r) {
    r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
  }
  function fulfill(value) {
    resume("next", value);
  }
  function reject(value) {
    resume("throw", value);
  }
  function settle(f, v) {
    if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
  }
}
function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function (e) {
    throw e;
  }), verb("return"), i[Symbol.iterator] = function () {
    return this;
  }, i;
  function verb(n, f) {
    i[n] = o[n] ? function (v) {
      return (p = !p) ? {
        value: __await(o[n](v)),
        done: n === "return"
      } : f ? f(v) : v;
    } : f;
  }
}
function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator],
    i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
    return this;
  }, i);
  function verb(n) {
    i[n] = o[n] && function (v) {
      return new Promise(function (resolve, reject) {
        v = o[n](v), settle(resolve, reject, v.done, v.value);
      });
    };
  }
  function settle(resolve, reject, d, v) {
    Promise.resolve(v).then(function (v) {
      resolve({
        value: v,
        done: d
      });
    }, reject);
  }
}
function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }
  return cooked;
}
var __setModuleDefault = Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
};
function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }
  __setModuleDefault(result, mod);
  return result;
}
function __importDefault(mod) {
  return mod && mod.__esModule ? mod : {
    default: mod
  };
}
function __classPrivateFieldGet(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function __classPrivateFieldSet(receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
function __classPrivateFieldIn(state, receiver) {
  if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function") throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof state === "function" ? receiver === state : state.has(receiver);
}
// CONCATENATED MODULE: ./node_modules/@alifd/meet/es/utils/fp.js
function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function noop() {}
function get(source, path, defaultValue) {
  var paths = path.replace(/\[(\d+)]/g, '.$1').split('.');
  var result = source;
  for (var _iterator = _createForOfIteratorHelperLoose(paths), _step; !(_step = _iterator()).done;) {
    var p = _step.value;
    result = Object(result)[p];
    if (result === undefined) {
      return defaultValue;
    }
  }
  return result;
}
function isValidArray(obj) {
  return Array.isArray(obj) && obj.length > 0;
}
function findInArray(arr, fn) {
  if (arr === void 0) {
    arr = [];
  }
  var ret = null;
  if (isValidArray(arr)) {
    arr.forEach(function (item, index) {
      if (!ret && fn(item, index)) {
        ret = item;
      }
    });
  }
  return ret;
}
function isString(str) {
  return typeof str === 'string';
}
function isNumber(num) {
  if (num === '' || num === null) {
    return false;
  }
  return typeof num === 'number' && !isNaN(num) || !isNaN(Number(num));
}
function isUndef(obj) {
  return typeof obj === 'undefined';
}
function isFunction(fn) {
  return typeof fn === 'function';
}
function isBoolean(val) {
  return typeof val === 'boolean';
}
function isNil(val) {
  return typeof val === 'undefined' || val === null;
}
function isInvalidValue(val) {
  return isNil(val) || val === '';
}
var nextTick = function (handler) {
  if (typeof requestAnimationFrame !== 'undefined') {
    requestAnimationFrame(handler);
    return;
  }
  if (typeof setTimeout !== 'undefined') {
    setTimeout(handler, 0);
    return;
  }
  handler();
};
function removeFromArray(arr, val) {
  if (arr === void 0) {
    arr = [];
  }
  if (val === void 0) {
    val = '';
  }
  return arr.filter(function (v) {
    return v !== val;
  });
}
function replaceMessage(template, kv) {
  return template.replace(/\${\w+}/g, function (str) {
    var key = str.slice(2, -1);
    return kv[key];
  });
}
function getValueFromEvents(e) {
  if (!isUndef(e.value)) {
    return e.value;
  }
  if (get(e, 'target.value')) {
    return e.target.value;
  }
  if (get(e, 'detail.value')) {
    return e.target.value;
  }
  if (get(e, 'originalEvent.detail.value')) {
    return e.originalEvent.detail.value;
  }
}
function getNotUndef() {
  for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
    values[_key] = arguments[_key];
  }
  for (var _i = 0, _values = values; _i < _values.length; _i++) {
    var it = _values[_i];
    if (!isUndef(it)) {
      return it;
    }
  }
}
// EXTERNAL MODULE: ./node_modules/@uni/env/es/index.js
var env_es = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/@alifd/meet/es/utils/env.js


function formatVersion(v) {
  return String(v).replace(/_/g, '.');
}
function getOSInfo(ua) {
  var OSList = {
    ios: /(like Mac OS X)/i,
    android: /Android/i,
    wp: /Windows Phone/i,
    bb: /(BlackBerry)|(RIM)/i,
    win: /(Windows 95)|(Win95)|(Windows_95)|(Windows ME)|(Windows 98)|(Win98)|(Windows NT 5.0)|(Windows 2000)|(Windows NT)|(WinNT)|(Windows XP)/i,
    linux: /(Linux)|(X11)/i,
    macos: /(Mac_PowerPC)|(Macintosh)/i,
    robot: /(nuhk)|(Googlebot)|(Yammybot)|(Openbot)|(Slurp)|(MSNBot)|(ia_archiver)/i
  };
  var os = {
    name: 'unknown',
    version: '0.0.0'
  };
  if (/Windows\sPhone\s(?:OS\s)?([\d.]+)/.test(ua)) {
    os.version = RegExp.$1;
  } else if (/Safari/.test(ua) && /Android[\s/]([\d.]+)/.test(ua)) {
    os.version = RegExp.$1;
  } else if (/(iPhone|iPad|iPod)/.test(ua) && /OS ([\d_.]+) like Mac OS X/.test(ua)) {
    os.version = RegExp.$1;
  }
  os.version = formatVersion(os.version);
  for (var _osName in OSList) {
    var Reg = OSList[_osName];
    if (Reg.test(ua)) {
      os.name = _osName;
      break;
    }
  }
  return os;
}
var isStrictMiniApp = env_es["isMiniApp"] && !env_es["isWeb"];
var isStrictWechatMiniProgram = env_es["isWeChatMiniProgram"] && !env_es["isWeb"];
var isStrictByteDanceMicroApp = env_es["isByteDanceMicroApp"] && !env_es["isWeb"];
var isMiniappPlatform = !env_es["isWeb"] && (env_es["isMiniApp"] || env_es["isWeChatMiniProgram"] || env_es["isByteDanceMicroApp"]);
var systemInfo;
if (isStrictMiniApp) {
  systemInfo = my.getSystemInfoSync();
} else if (isStrictWechatMiniProgram) {
  systemInfo = wx.getSystemInfoSync();
} else if (isStrictByteDanceMicroApp) {
  systemInfo = tt.getSystemInfoSync();
}
var env_name = 'unknown';
var version = '0.0.0';
if (isStrictWechatMiniProgram) {
  var _systemInfo = systemInfo,
    system = _systemInfo.system;
  env_name = system.split(' ')[0].toLowerCase();
  version = system.split(' ')[1];
} else if (isStrictMiniApp) {
  var _systemInfo2 = systemInfo,
    _system = _systemInfo2.system,
    platform = _systemInfo2.platform;
  env_name = platform.toLowerCase();
  version = _system;
} else if (isStrictByteDanceMicroApp) {
  var _systemInfo3 = systemInfo,
    _system2 = _systemInfo3.system,
    _platform = _systemInfo3.platform;
  env_name = _platform.toLowerCase();
  version = _system2;
} else {
  var UA = isUndef(navigator) ? '' : navigator.userAgent;
  var info = getOSInfo(UA);
  env_name = info.name;
  version = info.version;
}

var screenWidth = systemInfo && !isUndef(systemInfo.screenWidth) ? systemInfo.screenWidth : window.screen.width;
var screenHeight = systemInfo && !isUndef(systemInfo.screenHeight) ? systemInfo.screenHeight : window.screen.height;
var windowWidth = systemInfo && !isUndef(systemInfo.windowWidth) ? systemInfo.windowWidth : document.documentElement.clientWidth;
var windowHeight = systemInfo && !isUndef(systemInfo.windowHeight) ? systemInfo.windowHeight : document.documentElement.clientHeight;
var dpr = systemInfo && (systemInfo.devicePixelRatio || systemInfo.pixelRatio) ? systemInfo.devicePixelRatio || systemInfo.pixelRatio : window.devicePixelRatio;
var osName = env_name;
var osVersion = version;
var isIOS = env_name === 'ios';
var isAndroid = env_name === 'android';
var screenRate = screenWidth / 750;
var screenPixelRatio = isMiniappPlatform ? 1 : windowWidth / 750;
var isProduction = function () {
  var result = false;
  try {
    if (true) {
      result = true;
    }
  } catch (err) {}
  return result;
};
// CONCATENATED MODULE: ./node_modules/@alifd/meet/es/utils/func.js



function makeChain() {
  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }
  if (fns.length === 1) {
    return fns[0];
  }
  return function () {
    var i = 0;
    var j = fns.length;
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    for (; i < j; i++) {
      if (fns[i] && fns[i].apply) {
        fns[i].apply(this, args);
      }
    }
  };
}
function px2rpx(val) {
  return val / screenRate;
}
function stopPropagation(e) {
  if (!e) {
    return;
  }
  if (e.stopPropagation) {
    e.stopPropagation();
    return;
  }
  if (typeof e.originalEvent === 'object' && e.originalEvent.stopPropagation) {
    e.originalEvent.stopPropagation();
  }
}
function getDataSourceFromChildren(children) {
  if (!children) {
    return [];
  }
  return rax_children_lib_default.a.map(children, function (child) {
    var _a = child.props,
      value = _a.value,
      text = _a.text,
      childText = _a.children,
      rest = __rest(_a, ["value", "text", "children"]);
    return Object.assign({
      value: value,
      label: childText || text
    }, rest);
  });
}
function getDataSource(dataSource, children) {
  var ds = dataSource;
  if (!dataSource && rax_children_lib_default.a.count(children) > 0) {
    ds = getDataSourceFromChildren(children);
  }
  return ds || [];
}
// EXTERNAL MODULE: ./node_modules/universal-element/lib/index.js
var universal_element_lib = __webpack_require__(14);

// CONCATENATED MODULE: ./node_modules/@uni/page-scroll-to/es/_utils/promisify.js
function promisify_extends() {
  promisify_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return promisify_extends.apply(this, arguments);
}
function promisify(api) {
  return function (arg) {
    return new Promise(function (resolve, reject) {
      var promisifyArg = arg;
      api(promisify_extends({}, promisifyArg, {
        success: function (res) {
          if (promisifyArg && typeof promisifyArg.success === 'function') {
            promisifyArg.success(res);
          }
          resolve(res);
        },
        onSuccess: function (res) {
          if (promisifyArg && typeof promisifyArg.onSuccess === 'function') {
            promisifyArg.onSuccess(res);
          }
          resolve(res);
        },
        fail: function (res) {
          if (promisifyArg && typeof promisifyArg.fail === 'function') {
            promisifyArg.fail(res);
          }
          reject(res);
        },
        onFail: function (res) {
          if (promisifyArg && typeof promisifyArg.onFail === 'function') {
            promisifyArg.onFail(res);
          }
          reject(res);
        },
        complete: function (res) {
          if (promisifyArg && typeof promisifyArg.complete === 'function') {
            promisifyArg.complete(res);
          }
        },
        onComplete: function (res) {
          if (promisifyArg && typeof promisifyArg.onComplete === 'function') {
            promisifyArg.onComplete(res);
          }
        }
      }));
    });
  };
}
// CONCATENATED MODULE: ./node_modules/@uni/page-scroll-to/es/_utils/styleOptions.js
var styleOptions_excluded = ["_ext"];
function styleOptions_objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
function styleOptions_extends() {
  styleOptions_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return styleOptions_extends.apply(this, arguments);
}
var styleOut = function (output, originalInput, originalOutput) {
  return styleOptions_extends({}, output, {
    _original: {
      input: styleOptions_extends({}, originalInput),
      // 实际调用 api 方法时传入的参数. 对入参进行 format 之后的结果
      output: styleOptions_extends({}, originalOutput) // 实际调用 api 方法时传入的参数. 返回值 format 之前的结果
    }
  });
};

var styleIn = function (options, baseName) {
  var _ref = options || {},
    _ref$_ext = _ref._ext,
    _ext = _ref$_ext === void 0 ? {} : _ref$_ext,
    rest = styleOptions_objectWithoutPropertiesLoose(_ref, styleOptions_excluded);
  return styleOptions_extends({}, rest, _ext[baseName] || {});
};
// CONCATENATED MODULE: ./node_modules/@uni/page-scroll-to/es/common.js
function common_extends() {
  common_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return common_extends.apply(this, arguments);
}


function normalize(api, containerName) {
  return function (options) {
    var mergedOptions = common_extends({
      duration: 300
    }, options); // the `scrollTop` has higher priority

    if (mergedOptions.scrollTop != null) {
      mergedOptions.selector = undefined;
    }
    if (!Number(mergedOptions.duration) || mergedOptions.duration < 0) {
      mergedOptions.duration = 0;
    }
    return promisify(api)(styleIn(mergedOptions, containerName));
  };
}
// CONCATENATED MODULE: ./node_modules/@uni/page-scroll-to/es/_utils/constant.js
var CONTAINER_NAME = {
  WECHAT: 'wechatMiniProgram',
  ALIPAY: 'aliMiniApp',
  BYTE: 'bytedanceMicroApp',
  WEB: 'web',
  BAIDU: 'baiduSmartProgram',
  KWAI: 'kuaishouMiniProgram'
};
// CONCATENATED MODULE: ./node_modules/@uni/page-scroll-to/es/ali-miniapp/index.js


/* harmony default export */ var ali_miniapp = (normalize(function (options) {
  my.pageScrollTo(options);
}, CONTAINER_NAME.ALIPAY));
// CONCATENATED MODULE: ./node_modules/@uni/page-scroll-to/es/web/index.js


/* harmony default export */ var page_scroll_to_es_web = (normalize(function (options) {
  var selector = options.selector,
    duration = options.duration,
    success = options.success,
    fail = options.fail,
    complete = options.complete;
  var scrollTop = options.scrollTop;
  var rootElement = document.documentElement;
  var top = rootElement.scrollTop;
  if (scrollTop == null) {
    if (!selector) {
      var msg = '`scrollTop` or `selector` is required';
      fail(msg);
      complete(msg);
      return;
    }
    var ele = document.querySelector(selector);
    if (!ele) {
      var _msg = "The element cannot be found by the selector `" + selector + "`";
      fail(_msg);
      complete(_msg);
      return;
    }
    scrollTop = top + ele.getBoundingClientRect().top;
  } // Already at the target position

  if (top === scrollTop) {
    success('OK');
    complete('OK');
    return;
  } // Scroll immediately

  if (Number(duration) === 0) {
    rootElement.scrollTop = scrollTop;
    success('OK');
    complete('OK');
    return;
  }
  var maxScrollTop = rootElement.scrollHeight - rootElement.clientHeight;
  if (scrollTop < 0) {
    scrollTop = 0;
  } else if (scrollTop > maxScrollTop) {
    scrollTop = maxScrollTop;
  } // Scroll distance per 1ms

  var speed = (scrollTop - top) / duration;
  // start scrolling

  (function handleScroll(startTime) {
    requestAnimationFrame(function () {
      var cost = Date.now() - startTime;
      if (cost < 5) {
        // throttle
        handleScroll(startTime);
        return;
      }
      top = rootElement.scrollTop;
      var nextTop = top + cost * speed;
      if (speed > 0 && nextTop > scrollTop || speed < 0 && nextTop < scrollTop) {
        nextTop = scrollTop;
      }
      rootElement.scrollTop = nextTop;
      if (nextTop === scrollTop) {
        success('OK');
        complete('OK');
      } else {
        handleScroll(Date.now());
      }
    });
  })(Date.now());
}, CONTAINER_NAME.WEB));
// CONCATENATED MODULE: ./node_modules/@uni/page-scroll-to/es/wechat-miniprogram/index.js


/* harmony default export */ var wechat_miniprogram = (normalize(function (options) {
  wx.pageScrollTo(options);
}, CONTAINER_NAME.WECHAT));
// CONCATENATED MODULE: ./node_modules/@uni/page-scroll-to/es/bytedance-microapp/index.js


/* harmony default export */ var bytedance_microapp = (normalize(function (options) {
  tt.pageScrollTo(options);
}, CONTAINER_NAME.BYTE));
// CONCATENATED MODULE: ./node_modules/@uni/page-scroll-to/es/kuaishou-miniprogram/index.js


/* harmony default export */ var kuaishou_miniprogram = (normalize(function (options) {
  ks.pageScrollTo(options);
}, CONTAINER_NAME.KWAI));
// CONCATENATED MODULE: ./node_modules/@uni/page-scroll-to/es/baidu-smartprogram/index.js


/* harmony default export */ var baidu_smartprogram = (normalize(function (options) {
  swan.pageScrollTo(options);
}, CONTAINER_NAME.BAIDU));
// CONCATENATED MODULE: ./node_modules/@uni/page-scroll-to/es/index.js







function pageScrollTo(options) {
  if (env_es["isWeb"]) {
    return page_scroll_to_es_web(options);
  } else if (env_es["isKuaiShouMiniProgram"]) {
    return kuaishou_miniprogram(options);
  } else if (env_es["isWeChatMiniProgram"]) {
    return wechat_miniprogram(options);
  } else if (env_es["isByteDanceMicroApp"]) {
    return bytedance_microapp(options);
  } else if (env_es["isMiniApp"]) {
    return ali_miniapp(options);
  } else if (env_es["isBaiduSmartProgram"]) {
    return baidu_smartprogram(options);
  } else {
    throw new Error('Uni API：pageScrollTo 暂不支持');
  }
}
/* harmony default export */ var page_scroll_to_es = (pageScrollTo);
// CONCATENATED MODULE: ./node_modules/@alifd/meet/es/utils/element.js
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function () { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function (obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }




function getElementScrollOffset(id) {
  return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", Object(universal_element_lib["getScrollOffset"])("#" + id).then(function (ret) {
              var offset = {
                scrollLeft: 0,
                scrollTop: 0
              };
              if (ret && ret[0]) {
                var _ret$ = ret[0],
                  scrollLeft = _ret$.scrollLeft,
                  scrollTop = _ret$.scrollTop;
                return Object.assign(Object.assign({}, offset), {
                  scrollLeft: scrollLeft,
                  scrollTop: scrollTop
                });
              }
              return offset;
            }));
          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
}
function getScrollLeft(id) {
  return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return getElementScrollOffset(id);
          case 2:
            return _context2.abrupt("return", _context2.sent.scrollLeft);
          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
}
function getScrollTop(id) {
  return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return getElementScrollOffset(id);
          case 2:
            return _context3.abrupt("return", _context3.sent.scrollTop);
          case 3:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
}
function getElementBoundingClientRect(id) {
  return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
    var getRect, rs;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            getRect = universal_element_lib["getBoundingClientRect"];
            if (isStrictWechatMiniProgram) {
              getRect = function getRect(selector) {
                return new Promise(function (resolve) {
                  var ele = document.querySelector(selector);
                  if (!ele || !ele._internal) {
                    if (false) {}
                    resolve([]);
                  }
                  ele._internal.createSelectorQuery().select(selector).boundingClientRect().exec(function (res) {
                    resolve(res);
                  });
                });
              };
            }
            _context4.next = 4;
            return getRect("#" + id).then(function (ret) {
              var rect = {
                left: 0,
                bottom: 0,
                top: 0,
                right: 0,
                width: 0,
                height: 0,
                x: 0,
                y: 0
              };
              if (ret && ret[0]) {
                var _ret$2 = ret[0],
                  left = _ret$2.left,
                  bottom = _ret$2.bottom,
                  top = _ret$2.top,
                  right = _ret$2.right,
                  width = _ret$2.width,
                  height = _ret$2.height,
                  x = _ret$2.x,
                  y = _ret$2.y;
                return Object.assign(Object.assign({}, rect), {
                  left: left,
                  bottom: bottom,
                  top: top,
                  right: right,
                  width: width,
                  height: height,
                  x: x,
                  y: y
                });
              }
              return rect;
            });
          case 4:
            rs = _context4.sent;
            return _context4.abrupt("return", rs);
          case 6:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
}
function getWidth(id) {
  return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return getElementBoundingClientRect(id);
          case 2:
            return _context5.abrupt("return", _context5.sent.width);
          case 3:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
}
function getHeight(id) {
  return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return getElementBoundingClientRect(id);
          case 2:
            return _context6.abrupt("return", _context6.sent.height);
          case 3:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));
}
function getLeft(id) {
  return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return getElementBoundingClientRect(id);
          case 2:
            return _context7.abrupt("return", _context7.sent.left);
          case 3:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));
}
function getTop(id) {
  return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.next = 2;
            return getElementBoundingClientRect(id);
          case 2:
            return _context8.abrupt("return", _context8.sent.top);
          case 3:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));
}
function getBottom(id) {
  return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.next = 2;
            return getElementBoundingClientRect(id);
          case 2:
            return _context9.abrupt("return", _context9.sent.bottom);
          case 3:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9);
  }));
}
function getRight(id) {
  return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            _context10.next = 2;
            return getElementBoundingClientRect(id);
          case 2:
            return _context10.abrupt("return", _context10.sent.right);
          case 3:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10);
  }));
}
function scrollToId(id) {
  page_scroll_to_es({
    selector: "#" + id
  }).then(noop);
}
// CONCATENATED MODULE: ./node_modules/@alifd/meet/es/utils/index.js




// EXTERNAL MODULE: ./node_modules/@alifd/meet/es/view/styles/index.css
var styles = __webpack_require__(29);

// CONCATENATED MODULE: ./node_modules/@alifd/meet/es/view/index.js





var view_View = Object(rax["forwardRef"])(function (props, ref) {
  var _classNames;
  var selfRef = Object(rax["useRef"])(null);
  var onFirstAppear = props.onFirstAppear,
    _props$prefix = props.prefix,
    prefix = _props$prefix === void 0 ? 'mt-' : _props$prefix,
    className = props.className,
    hasSafeArea = props.hasSafeArea,
    onAppear = props.onAppear,
    _props$withoutTouch = props.withoutTouch,
    withoutTouch = _props$withoutTouch === void 0 ? true : _props$withoutTouch,
    rest = __rest(props, ["onFirstAppear", "prefix", "className", "hasSafeArea", "onAppear", "withoutTouch"]);
  var newClsName = classnames_default()(className, (_classNames = {}, _classNames[prefix + "view-safe-area"] = hasSafeArea, _classNames));
  if (isStrictMiniApp) {
    return withoutTouch ? Object(rax["createElement"])("view", Object.assign({}, rest, {
      className: newClsName,
      onAppear: onAppear,
      onDisappear: rest.onDisappear,
      onFirstAppear: onFirstAppear,
      ref: ref
    })) : Object(rax["createElement"])("div", Object.assign({}, rest, {
      className: newClsName,
      onAppear: onAppear,
      onDisappear: rest.onDisappear,
      onFirstAppear: onFirstAppear,
      ref: ref
    }));
  }
  var handleAppear = onAppear;
  if (onFirstAppear) {
    handleAppear = function (event) {
      if (onAppear) {
        onAppear(event);
      }
      if (!selfRef.triggeredAppear) {
        if (onFirstAppear) {
          onFirstAppear(event);
        }
      } else {
        selfRef.triggeredAppear = true;
      }
    };
  }
  return Object(rax["createElement"])("div", Object.assign({}, rest, {
    className: newClsName,
    onAppear: handleAppear,
    ref: ref
  }));
});
view_View.displayName = 'View';
/* harmony default export */ var meet_es_view = (view_View);
// CONCATENATED MODULE: ./node_modules/@alifd/meet/es/list/list.js




var List = function (props, ref) {
  var children = props.children,
    _props$prefix = props.prefix,
    prefix = _props$prefix === void 0 ? 'mt-' : _props$prefix,
    className = props.className,
    others = __rest(props, ["children", "prefix", "className"]);
  return Object(rax["createElement"])(meet_es_view, Object.assign({}, others, {
    ref: ref,
    className: classnames_default()(prefix + "list", className)
  }), children);
};
List.displayName = 'List';
/* harmony default export */ var list = (Object(rax["forwardRef"])(List));
// CONCATENATED MODULE: ./node_modules/@alifd/meet/es/icon/icon.js





var ImageComponent = rax_image_es;
var ICON_SIZE_MAP = {
  small: 's',
  medium: 'm',
  large: 'l'
};
var icon_Icon = function (props) {
  var _props$prefix = props.prefix,
    prefix = _props$prefix === void 0 ? 'mt-' : _props$prefix,
    uri = props.uri,
    className = props.className,
    name = props.name,
    type = props.type,
    _props$size = props.size,
    size = _props$size === void 0 ? 'm' : _props$size,
    style = props.style,
    others = __rest(props, ["prefix", "uri", "className", "name", "type", "size", "style"]);
  var _name = name || type;
  var iconSize = ICON_SIZE_MAP[size] || size;
  var newClassName = classnames_default()(prefix + "icon", prefix + "icon--" + iconSize, className);
  if (uri && !_name) {
    return Object(rax["createElement"])(ImageComponent, {
      className: classnames_default()(prefix + "icon-img--" + size, newClassName),
      style: style,
      source: {
        uri: uri
      }
    });
  }
  return Object(rax["createElement"])(rax_icon_es, Object.assign({
    className: classnames_default()(prefix + "icon-" + _name, newClassName),
    style: style
  }, others));
};
/* harmony default export */ var icon_icon = (icon_Icon);
// EXTERNAL MODULE: ./node_modules/@alifd/meet/es/icon/styles/index.css
var icon_styles = __webpack_require__(30);

// CONCATENATED MODULE: ./node_modules/@alifd/meet/es/icon/index.js



// EXTERNAL MODULE: ./node_modules/@alifd/meet/node_modules/rax-text/lib/index.js
var node_modules_rax_text_lib = __webpack_require__(4);
var node_modules_rax_text_lib_default = /*#__PURE__*/__webpack_require__.n(node_modules_rax_text_lib);

// CONCATENATED MODULE: ./node_modules/@alifd/meet/es/list/item/caption.js






var ListItemCaption = function (props) {
  var _props$prefix = props.prefix,
    prefix = _props$prefix === void 0 ? 'mt-' : _props$prefix,
    children = props.children,
    className = props.className,
    others = __rest(props, ["prefix", "children", "className"]);
  var newClassName = classnames_default()(prefix + "list-item-caption", className);
  return isString(children) ? Object(rax["createElement"])(node_modules_rax_text_lib_default.a, Object.assign({}, others, {
    className: newClassName
  }), children) : Object(rax["createElement"])(meet_es_view, Object.assign({}, others, {
    className: newClassName
  }), children);
};
/* harmony default export */ var item_caption = (ListItemCaption);
// CONCATENATED MODULE: ./node_modules/@alifd/meet/es/list/item/content.js




var ListItemContent = function (props) {
  var _props$prefix = props.prefix,
    prefix = _props$prefix === void 0 ? 'mt-' : _props$prefix,
    className = props.className,
    others = __rest(props, ["prefix", "className"]);
  return Object(rax["createElement"])(meet_es_view, Object.assign({
    className: classnames_default()(prefix + "list-item-content", className)
  }, others));
};
/* harmony default export */ var item_content = (ListItemContent);
// CONCATENATED MODULE: ./node_modules/@alifd/meet/es/list/item/media.js





var Media = function (props, ref) {
  var action = props.action,
    _props$prefix = props.prefix,
    prefix = _props$prefix === void 0 ? 'mt-' : _props$prefix,
    icon = props.icon,
    children = props.children,
    className = props.className,
    others = __rest(props, ["action", "prefix", "icon", "children", "className"]);
  return Object(rax["createElement"])(meet_es_view, Object.assign({
    ref: ref
  }, others, {
    className: classnames_default()(prefix + "list-item-media", action ? prefix + "list-item-media--last" : null, className)
  }), icon ? Object(rax["createElement"])(icon_icon, {
    className: prefix + "list-item-icon",
    name: icon
  }) : null, Object(rax["createElement"])(rax["Fragment"], null, children));
};
var ListItemMedia = Object(rax["forwardRef"])(Media);
var Action = function (props, ref) {
  return Object(rax["createElement"])(ListItemMedia, Object.assign({}, props, {
    action: true,
    ref: ref
  }));
};
var ListItemAction = Object(rax["forwardRef"])(Action);
/* harmony default export */ var item_media = (ListItemMedia);
// CONCATENATED MODULE: ./node_modules/@alifd/meet/es/list/item/title.js






var ListItemLabel = function (props) {
  var _props$prefix = props.prefix,
    prefix = _props$prefix === void 0 ? 'mt-' : _props$prefix,
    className = props.className,
    children = props.children,
    others = __rest(props, ["prefix", "className", "children"]);
  var Wrapper = isString(children) ? node_modules_rax_text_lib_default.a : meet_es_view;
  return Object(rax["createElement"])(Wrapper, Object.assign({}, others, {
    className: classnames_default()(prefix + "list-item-title", className)
  }), children);
};
/* harmony default export */ var item_title = (ListItemLabel);
// CONCATENATED MODULE: ./node_modules/@alifd/meet/es/list/item/index.js










var arrowIconMap = {
  right: 'arrow-right',
  up: 'arrow-up',
  down: 'arrow-down',
  loading: 'loading'
};
var renderExtra = function (ext) {
  if (isString(ext)) {
    return Object(rax["createElement"])(item_caption, null, ext);
  } else if (ext) {
    return ext;
  }
  return null;
};
var ListItem = function (props, ref) {
  var _classNames;
  var children = props.children,
    _props$prefix = props.prefix,
    prefix = _props$prefix === void 0 ? 'mt-' : _props$prefix,
    arrow = props.arrow,
    media = props.media,
    title = props.title,
    subTitle = props.subTitle,
    description = props.description,
    extra = props.extra,
    className = props.className,
    _onClick = props.onClick,
    _props$disabled = props.disabled,
    disabled = _props$disabled === void 0 ? false : _props$disabled,
    others = __rest(props, ["children", "prefix", "arrow", "media", "title", "subTitle", "description", "extra", "className", "onClick", "disabled"]);
  return Object(rax["createElement"])(meet_es_view, Object.assign({}, others, {
    className: classnames_default()(prefix + "list-item", (_classNames = {}, _classNames[prefix + "list-item--clickable"] = isFunction(_onClick), _classNames[prefix + "list-item--disabled"] = disabled, _classNames), className),
    ref: ref,
    onClick: function onClick() {
      if (!disabled && _onClick) {
        _onClick.apply(void 0, arguments);
      }
    }
  }), media ? Object(rax["createElement"])(ListItemMedia, null, media) : null, Object(rax["createElement"])(meet_es_view, {
    className: prefix + "list-item-container"
  }, title || description ? Object(rax["createElement"])(item_content, null, title ? Object(rax["createElement"])(item_title, null, title) : null, subTitle ? Object(rax["createElement"])(item_caption, null, subTitle) : null, description ? Object(rax["createElement"])(item_caption, null, description) : null) : null, extra || isString(arrow) ? Object(rax["createElement"])(ListItemAction, null, renderExtra(extra), isString(arrow) ? Object(rax["createElement"])(icon_icon, {
    size: "xs",
    className: prefix + "list-item-icon",
    name: arrowIconMap[arrow]
  }) : null) : null, children));
};
ListItem.displayName = 'ListItem';
/* harmony default export */ var item = (Object(rax["forwardRef"])(ListItem));
// EXTERNAL MODULE: ./node_modules/@alifd/meet/es/list/styles/index.css
var list_styles = __webpack_require__(32);

// CONCATENATED MODULE: ./node_modules/@alifd/meet/es/list/index.js







var ExportList = list;
ExportList.Item = item;
ExportList.ItemAction = ListItemAction;
ExportList.ItemMedia = ListItemMedia;
ExportList.ItemTitle = item_title;
ExportList.ItemCaption = item_caption;
ExportList.ItemContent = item_content;
ExportList.displayName = 'List';
/* harmony default export */ var es_list = (ExportList);
// CONCATENATED MODULE: ./node_modules/@alifd/meet/es/badge/badge.js






var Badge = function (props, ref) {
  var _classNames, _classNames2;
  var _props$overflowCount = props.overflowCount,
    overflowCount = _props$overflowCount === void 0 ? 99 : _props$overflowCount,
    className = props.className,
    _props$count = props.count,
    count = _props$count === void 0 ? 0 : _props$count,
    _props$dot = props.dot,
    dot = _props$dot === void 0 ? false : _props$dot,
    children = props.children,
    _props$content = props.content,
    content = _props$content === void 0 ? '' : _props$content,
    _props$prefix = props.prefix,
    prefix = _props$prefix === void 0 ? 'mt-' : _props$prefix,
    others = __rest(props, ["overflowCount", "className", "count", "dot", "children", "content", "prefix"]);
  var type = dot ? 'dot' : 'normal';
  var auto = rax_children_lib_default.a.count(children) > 0;
  var sup = count;
  sup = Number(count);
  if (!isNaN(sup) && sup !== 0) {
    sup = sup > overflowCount ? overflowCount + "+" : sup;
  } else {
    sup = count;
  }
  var BadgeComponent = sup === 0 && type === 'normal' && !content ? null : Object(rax["createElement"])(meet_es_view, {
    className: classnames_default()((_classNames = {}, _classNames[prefix + "badge--custom"] = content, _classNames[prefix + "badge-content"] = !content, _classNames[prefix + "badge-content--" + type] = !content, _classNames[prefix + "badge-content--auto"] = auto, _classNames))
  }, content ? content : dot ? null : Object(rax["createElement"])(node_modules_rax_text_lib_default.a, {
    className: prefix + "badge-text"
  }, sup));
  return Object(rax["createElement"])(meet_es_view, Object.assign({}, others, {
    ref: ref,
    className: classnames_default()(className, prefix + "badge", prefix + "badge--" + type, (_classNames2 = {}, _classNames2[prefix + "badge--auto"] = auto, _classNames2))
  }), children, BadgeComponent);
};
Badge.displayName = 'Badge';
/* harmony default export */ var badge_badge = (Object(rax["forwardRef"])(Badge));
// EXTERNAL MODULE: ./node_modules/@alifd/meet/es/badge/styles/index.css
var badge_styles = __webpack_require__(33);

// CONCATENATED MODULE: ./node_modules/@alifd/meet/es/badge/index.js


/* harmony default export */ var es_badge = (badge_badge);
// EXTERNAL MODULE: ./node_modules/rax-create-portal/lib/index.js
var rax_create_portal_lib = __webpack_require__(18);
var rax_create_portal_lib_default = /*#__PURE__*/__webpack_require__.n(rax_create_portal_lib);

// CONCATENATED MODULE: ./node_modules/rax-portal/es/index.js



var Portal = function (props) {
  var children = props.children,
    _props$container = props.container,
    container = _props$container === void 0 ? document.body : _props$container;
  var el = Object(rax["useRef"])(document.createElement('div'));
  Object(rax["useEffect"])(function () {
    // no container, skip render
    if (!container) {
      return undefined;
    }
    if (lib["isMiniApp"] || lib["isWeb"]) {
      container.appendChild(el.current);
    } else {
      setTimeout(function () {
        return container.appendChild(el.current);
      });
    }
    return function () {
      container.removeChild(el.current);
    };
  }, []);
  return rax_create_portal_lib_default()(children, el.current);
};
/* harmony default export */ var rax_portal_es = (Portal);
// CONCATENATED MODULE: ./node_modules/@alifd/meet/es/modal/mask.js





var Mask = function (props, ref) {
  var _classNames;
  var _props$prefix = props.prefix,
    prefix = _props$prefix === void 0 ? 'mt-' : _props$prefix,
    className = props.className,
    visible = props.visible,
    view = props.view,
    others = __rest(props, ["prefix", "className", "visible", "view"]);
  var _useState = Object(rax["useState"])(visible),
    show = _useState[0],
    setShow = _useState[1];
  var initOverflow = '';
  if (env_es["isWeb"]) {
    initOverflow = document.body.style.overflow;
  }
  Object(rax["useEffect"])(function () {
    if (!visible && show) {
      var t1 = setTimeout(function () {
        setShow(false);
      }, 250);
      return function () {
        clearTimeout(t1);
      };
    } else {
      setShow(visible);
    }
    if (env_es["isWeb"]) {
      if (visible) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = initOverflow;
      }
      return function () {
        document.body.style.overflow = initOverflow;
      };
    }
  }, [visible]);
  if (!show) {
    return null;
  }
  var clsPrefix = prefix + "modal";
  return Object(rax["createElement"])(meet_es_view, Object.assign({
    ref: ref
  }, others, {
    "disable-scroll": true,
    catchTouchMove: true,
    className: classnames_default()(className, clsPrefix + "-mask", (_classNames = {}, _classNames[clsPrefix + "-mask--active"] = visible, _classNames[clsPrefix + "-mask--inactive"] = !visible, _classNames))
  }));
};
Mask.displayName = 'Modal.Mask';
/* harmony default export */ var mask = (Object(rax["forwardRef"])(Mask));
// CONCATENATED MODULE: ./node_modules/@alifd/meet/es/modal/modal.js







var Modal = function (props, ref) {
  var _classNames, _classNames2;
  var _props$prefix = props.prefix,
    prefix = _props$prefix === void 0 ? 'mt-' : _props$prefix,
    _props$view = props.view,
    view = _props$view === void 0 ? false : _props$view,
    _props$visible = props.visible,
    visible = _props$visible === void 0 ? false : _props$visible,
    container = props.container,
    _props$disablePortal = props.disablePortal,
    disablePortal = _props$disablePortal === void 0 ? false : _props$disablePortal,
    _props$placement = props.placement,
    placement = _props$placement === void 0 ? 'center' : _props$placement,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$maskClassName = props.maskClassName,
    maskClassName = _props$maskClassName === void 0 ? '' : _props$maskClassName,
    _props$containerClass = props.containerClassName,
    containerClassName = _props$containerClass === void 0 ? '' : _props$containerClass,
    _props$containerStyle = props.containerStyle,
    containerStyle = _props$containerStyle === void 0 ? {} : _props$containerStyle,
    _props$showMask = props.showMask,
    showMask = _props$showMask === void 0 ? true : _props$showMask,
    _props$maskClosable = props.maskClosable,
    maskClosable = _props$maskClosable === void 0 ? true : _props$maskClosable,
    _props$usePortal = props.usePortal,
    usePortal = _props$usePortal === void 0 ? true : _props$usePortal,
    _props$disableScroll = props.disableScroll,
    disableScroll = _props$disableScroll === void 0 ? false : _props$disableScroll,
    _props$onMaskClick = props.onMaskClick,
    onMaskClick = _props$onMaskClick === void 0 ? function () {} : _props$onMaskClick,
    _props$onClose = props.onClose,
    onClose = _props$onClose === void 0 ? function () {} : _props$onClose,
    _props$onVisibleChang = props.onVisibleChange,
    onVisibleChange = _props$onVisibleChang === void 0 ? function () {} : _props$onVisibleChang,
    children = props.children,
    zIndex = props.zIndex,
    _props$style = props.style,
    styleProp = _props$style === void 0 ? {} : _props$style,
    others = __rest(props, ["prefix", "view", "visible", "container", "disablePortal", "placement", "className", "maskClassName", "containerClassName", "containerStyle", "showMask", "maskClosable", "usePortal", "disableScroll", "onMaskClick", "onClose", "onVisibleChange", "children", "zIndex", "style"]);
  var _useState = Object(rax["useState"])(props.visible),
    show = _useState[0],
    setShow = _useState[1];
  Object(rax["useEffect"])(function () {
    if (show && !visible) {
      var t1 = setTimeout(function () {
        setShow(false);
      }, 300);
      return function () {
        clearTimeout(t1);
      };
    } else {
      setShow(visible);
      onVisibleChange(visible);
    }
  }, [visible]);
  var clsPrefix = prefix + "modal";
  var modalContainer = Object(rax["createElement"])(meet_es_view, Object.assign({}, others, {
    className: classnames_default()(containerClassName, clsPrefix + "-container", clsPrefix + "-container--" + placement, (_classNames = {}, _classNames[clsPrefix + "-container--" + placement + "-active"] = visible, _classNames[clsPrefix + "-container--" + placement + "-inactive"] = !visible, _classNames)),
    style: Object.assign(Object.assign({}, styleProp), containerStyle)
  }), children);
  var element = show ? Object(rax["createElement"])(meet_es_view, {
    "disable-scroll": disableScroll,
    catchTouchMove: disableScroll,
    className: classnames_default()(className, "" + clsPrefix, clsPrefix + "--" + placement, (_classNames2 = {}, _classNames2[clsPrefix + "--no-portal"] = !usePortal, _classNames2)),
    ref: ref,
    style: isNumber(zIndex) ? {
      zIndex: zIndex
    } : null
  }, showMask ? Object(rax["createElement"])(mask, {
    className: maskClassName,
    visible: visible,
    onClick: function handleMaskClick(e) {
      if (onMaskClick) {
        onMaskClick(e);
      }
      if (maskClosable && onClose) {
        onClose('mask', e);
        onVisibleChange(false, 'mask');
      }
    }
  }) : null, modalContainer) : null;
  if (disablePortal || view) {
    return element;
  }
  if (!usePortal) {
    return Object(rax["createElement"])(meet_es_view, {
      className: clsPrefix + "-theme-wrapper"
    }, element);
  }
  return Object(rax["createElement"])(rax_portal_es, {
    container: container
  }, element);
};
Modal.displayName = 'Modal';
/* harmony default export */ var modal = (Object(rax["forwardRef"])(Modal));
// EXTERNAL MODULE: ./node_modules/@alifd/meet/es/modal/styles/index.css
var modal_styles = __webpack_require__(34);

// CONCATENATED MODULE: ./node_modules/@alifd/meet/es/modal/index.js


/* harmony default export */ var es_modal = (modal);
// CONCATENATED MODULE: ./node_modules/@alifd/meet/es/drawer/drawer.js








var Drawer = function (props) {
  var _classNames;
  var _props$prefix = props.prefix,
    prefix = _props$prefix === void 0 ? 'mt-' : _props$prefix,
    _props$placement = props.placement,
    placement = _props$placement === void 0 ? 'bottom' : _props$placement,
    _props$visible = props.visible,
    visible = _props$visible === void 0 ? false : _props$visible,
    className = props.className,
    height = props.height,
    width = props.width,
    title = props.title,
    _props$titleAlign = props.titleAlign,
    titleAlign = _props$titleAlign === void 0 ? 'left' : _props$titleAlign,
    containerClassName = props.containerClassName,
    _props$closeMode = props.closeMode,
    closeMode = _props$closeMode === void 0 ? ['mask', 'close'] : _props$closeMode,
    _props$onShow = props.onShow,
    onShow = _props$onShow === void 0 ? function () {} : _props$onShow,
    _props$onClose = props.onClose,
    onClose = _props$onClose === void 0 ? function () {} : _props$onClose,
    children = props.children,
    _props$style = props.style,
    style = _props$style === void 0 ? {} : _props$style,
    others = __rest(props, ["prefix", "placement", "visible", "className", "height", "width", "title", "titleAlign", "containerClassName", "closeMode", "onShow", "onClose", "children", "style"]);
  var drawerCls = classnames_default()(prefix + "drawer", className, prefix + "drawer--" + placement);
  var _useState = Object(rax["useState"])(visible),
    drawerVisible = _useState[0],
    setVisible = _useState[1];
  var showCloseIcon = Array.isArray(closeMode) && closeMode.indexOf('close') > -1;
  Object(rax["useEffect"])(function () {
    if (visible && (isStrictWechatMiniProgram || isStrictByteDanceMicroApp)) {
      setTimeout(function () {
        setVisible(true);
      }, 50);
    } else {
      setVisible(visible);
    }
  }, [visible]);
  return Object(rax["createElement"])(es_modal, Object.assign({}, others, {
    maskClosable: closeMode.indexOf('mask') > -1,
    onClose: onClose,
    visible: drawerVisible,
    placement: placement,
    className: prefix + "drawer-modal",
    containerClassName: drawerCls,
    containerStyle: Object.assign({
      width: width,
      height: height
    }, style)
  }), Object(rax["createElement"])(meet_es_view, {
    className: prefix + "drawer-container"
  }, title ? Object(rax["createElement"])(node_modules_rax_text_lib_default.a, {
    className: classnames_default()(prefix + "drawer-title", (_classNames = {}, _classNames[prefix + "drawer-title--center"] = titleAlign === 'center', _classNames[prefix + "drawer-title--with-icon"] = titleAlign === 'left' && showCloseIcon, _classNames)),
    numberOfLines: 1
  }, title) : null, showCloseIcon ? Object(rax["createElement"])(meet_es_view, {
    className: prefix + "drawer-close",
    onClick: function onClick() {
      onClose('close');
    }
  }, Object(rax["createElement"])(icon_icon, {
    className: prefix + "drawer-close-icon",
    name: "close"
  })) : null, Object(rax["createElement"])(meet_es_view, {
    className: classnames_default()(prefix + "drawer-body", containerClassName)
  }, children)));
};
Drawer.displayName = 'Drawer';
/* harmony default export */ var drawer = (Object(rax["forwardRef"])(Drawer));
// EXTERNAL MODULE: ./node_modules/@alifd/meet/es/drawer/styles/index.css
var drawer_styles = __webpack_require__(35);

// CONCATENATED MODULE: ./node_modules/@alifd/meet/es/drawer/index.js


/* harmony default export */ var es_drawer = (drawer);
// CONCATENATED MODULE: ./node_modules/@alifd/meet/es/locale/context.js

var LocaleContext = Object(rax["createContext"])({
  locale: {}
});
/* harmony default export */ var context = (LocaleContext);
// CONCATENATED MODULE: ./node_modules/@alifd/meet/es/locale/utils.js
function getLocale(locale, componentName, props, defaultLocale) {
  if (props === void 0) {
    props = {};
  }
  if (defaultLocale === void 0) {
    defaultLocale = {};
  }
  var _props = props,
    _props$locale = _props.locale,
    componentLocale = _props$locale === void 0 ? {} : _props$locale;
  try {
    delete props.locale;
  } catch (e) {}
  return Object.assign(Object.assign(Object.assign({}, defaultLocale), locale[componentName] || {}), componentLocale || {});
}
// CONCATENATED MODULE: ./node_modules/@alifd/meet/es/locale/hooks.js



function useLocale(componentName, props, defaultLocale) {
  if (props === void 0) {
    props = {};
  }
  if (defaultLocale === void 0) {
    defaultLocale = {};
  }
  var _useContext = Object(rax["useContext"])(context),
    locale = _useContext.locale;
  return getLocale(locale || {}, componentName, props, defaultLocale);
}
// CONCATENATED MODULE: ./node_modules/@alifd/meet/es/locale/provider.js




/* harmony default export */ var provider = (function (_a) {
  var children = _a.children,
    others = __rest(_a, ["children"]);
  return Object(rax["createElement"])(context.Provider, {
    value: others
  }, rax_children_lib_default.a.only(children));
});
// CONCATENATED MODULE: ./node_modules/@alifd/meet/es/locale/with-locale.js


function withLocale(Component, _ref) {
  var name = _ref.name,
    defaultLocale = _ref.defaultLocale;
  return Object(rax["forwardRef"])(function (props, ref) {
    var locale = useLocale(name, props, defaultLocale);
    return Object(rax["createElement"])(Component, Object.assign({}, props, {
      locale: locale,
      ref: ref
    }));
  });
}
// CONCATENATED MODULE: ./node_modules/@alifd/meet/es/locale/index.js





/* harmony default export */ var es_locale = (provider);
// CONCATENATED MODULE: ./node_modules/@alifd/meet/es/locale/lang/zh-cn.js
/* harmony default export */ var zh_cn = ({
  ActionSheet: {
    cancel: '取消'
  },
  Calendar: {
    weekdays: ['日', '一', '二', '三', '四', '五', '六'],
    months: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
    year: '年',
    month: '月',
    day: '日',
    timePickerLabel: '选择时间'
  },
  CascaderSelect: {
    rootTipText: '首页'
  },
  DatePicker: {
    year: '年',
    month: '月',
    day: '日',
    prev: '上一步',
    next: '下一步',
    selectStartTime: '选择开始时间',
    selectEndTime: '选择结束时间'
  },
  Dialog: {
    ok: '确定',
    cancel: '取消'
  },
  Pagination: {
    prev: '上一页',
    next: '下一页',
    tip: '请选择页数'
  },
  Picker: {
    empty: '无选项'
  },
  Search: {
    searchTipText: '搜索',
    cancelText: '取消'
  },
  Select: {
    totalPrefixText: '当前已选中',
    totalSuffixText: '项',
    secondaryOkText: '完成'
  },
  SelectDrawer: {
    placeHolderText: '请选择',
    ok: '确定',
    cancel: '取消'
  },
  Tab: {
    more: '更多'
  },
  TimePicker: {
    hour: '时',
    minute: '分',
    second: '秒',
    am: '上午',
    pm: '下午'
  },
  Upload: {
    reupload: '重新上传',
    limit: '最多只能上传 ${limit} 张照片'
  }
});
// CONCATENATED MODULE: ./node_modules/@alifd/meet/es/safe-area/safe-area.js





var hasStatusBar = isMiniappPlatform && systemInfo.statusBarHeight;
var SafeArea = function (props) {
  var _props$prefix = props.prefix,
    prefix = _props$prefix === void 0 ? 'mt-' : _props$prefix,
    className = props.className,
    style = props.style,
    others = __rest(props, ["prefix", "className", "style"]);
  var _useState = Object(rax["useState"])(0),
    height = _useState[0],
    setHeight = _useState[1];
  Object(rax["useEffect"])(function () {
    if (hasStatusBar) {
      setHeight(systemInfo.statusBarHeight);
    }
  }, []);
  return Object(rax["createElement"])(meet_es_view, Object.assign({}, others, {
    className: classnames_default()(prefix + "safe-area", className),
    style: height > 0 ? {
      height: height + "px"
    } : null
  }));
};
SafeArea.displayName = 'SafeArea';
/* harmony default export */ var safe_area = (SafeArea);
// EXTERNAL MODULE: ./node_modules/@alifd/meet/es/safe-area/styles/index.css
var safe_area_styles = __webpack_require__(36);

// CONCATENATED MODULE: ./node_modules/@alifd/meet/es/safe-area/index.js


/* harmony default export */ var es_safe_area = (safe_area);
// CONCATENATED MODULE: ./node_modules/@alifd/meet/es/action-sheet/action-sheet.js












var ActionSheet = function (props, ref) {
  var _classNames2, _classNames3;
  var _props$prefix = props.prefix,
    prefix = _props$prefix === void 0 ? 'mt-' : _props$prefix,
    message = props.message,
    options = props.options,
    _props$visible = props.visible,
    visible = _props$visible === void 0 ? false : _props$visible,
    _props$fullWidth = props.fullWidth,
    fullWidth = _props$fullWidth === void 0 ? true : _props$fullWidth,
    _props$showCancel = props.showCancel,
    showCancel = _props$showCancel === void 0 ? true : _props$showCancel,
    _props$maskClosable = props.maskClosable,
    maskClosable = _props$maskClosable === void 0 ? true : _props$maskClosable,
    destructiveIndex = props.destructiveIndex,
    cancelText = props.cancelText,
    alignProps = props.align,
    disabledIndexes = props.disabledIndexes,
    onClick = props.onClick,
    onClose = props.onClose,
    className = props.className,
    others = __rest(props, ["prefix", "message", "options", "visible", "fullWidth", "showCancel", "maskClosable", "destructiveIndex", "cancelText", "align", "disabledIndexes", "onClick", "onClose", "className"]);
  var locale = useLocale('ActionSheet', others, zh_cn.ActionSheet);
  var handleOptionClick = Object(rax["useCallback"])(function (option, index) {
    if (onClick) {
      onClick(option, index);
    }
    if (onClose) {
      onClose(index);
    }
  }, [onClick, onClose]);
  var clsPrefix = prefix + "actionsheet";
  var buttons = Object(rax["useMemo"])(function () {
    if (!options) {
      return null;
    }
    var len = options.length;
    return options.map(function (option, index) {
      var _classNames;
      var disabled = disabledIndexes ? disabledIndexes.indexOf(index) > -1 : false;
      var content = null;
      var align = alignProps || (typeof option === 'object' && option.icon ? 'left' : 'center');
      if (isString(option)) {
        content = Object(rax["createElement"])(node_modules_rax_text_lib_default.a, {
          className: clsPrefix + "-option-text " + clsPrefix + "-option--" + align
        }, option);
      } else if (typeof option === 'object') {
        var badge = option.badge,
          icon = option.icon,
          text = option.text,
          badgeType = option.badgeType;
        content = Object(rax["createElement"])(rax["Fragment"], null, icon ? Object(rax["createElement"])(rax_image_es, {
          source: {
            uri: icon
          },
          className: clsPrefix + "-icon"
        }) : null, Object(rax["createElement"])(meet_es_view, {
          className: clsPrefix + "-option-content " + clsPrefix + "-option--" + align
        }, Object(rax["createElement"])(node_modules_rax_text_lib_default.a, {
          className: clsPrefix + "-option-text"
        }, text), badge ? Object(rax["createElement"])(es_badge, {
          className: clsPrefix + "-badge",
          count: badge,
          dot: badgeType === 'dot'
        }) : null));
      }
      return Object(rax["createElement"])(meet_es_view, {
        key: clsPrefix + "-option-" + index,
        onClick: function () {
          if (!disabled) {
            handleOptionClick(option, index);
          }
        },
        className: classnames_default()(clsPrefix + "-option", (_classNames = {}, _classNames[clsPrefix + "-option--destructive"] = destructiveIndex === index, _classNames[clsPrefix + "-option--disabled"] = disabled, _classNames[clsPrefix + "-option--advanced"] = typeof option === 'object' && option.icon, _classNames[clsPrefix + "-option--last"] = index === len - 1, _classNames))
      }, content);
    });
  }, [options, clsPrefix, disabledIndexes, destructiveIndex, alignProps, handleOptionClick]);
  var handleMaskClose = Object(rax["useCallback"])(function () {
    return onClose && onClose('mask');
  }, [onClose]);
  var handleCancelClose = Object(rax["useCallback"])(function () {
    return onClose && onClose('cancel');
  }, [onClose]);
  return Object(rax["createElement"])(es_drawer, Object.assign({}, others, {
    ref: ref,
    visible: visible,
    closeMode: maskClosable ? ['mask'] : [],
    className: classnames_default()(clsPrefix + "-drawer", className),
    placement: "bottom",
    onClose: handleMaskClose,
    disableScroll: true
  }), Object(rax["createElement"])(meet_es_view, {
    className: classnames_default()("" + clsPrefix, (_classNames2 = {}, _classNames2[clsPrefix + "--fullwidth"] = fullWidth, _classNames2))
  }, message ? Object(rax["createElement"])(node_modules_rax_text_lib_default.a, {
    className: clsPrefix + "-msg",
    numberOfLines: 1
  }, message) : null, Object(rax["createElement"])(meet_es_view, {
    className: classnames_default()(clsPrefix + "-option-list")
  }, buttons), showCancel ? Object(rax["createElement"])(meet_es_view, {
    className: classnames_default()(clsPrefix + "-option", clsPrefix + "-cancel"),
    onClick: handleCancelClose
  }, Object(rax["createElement"])(node_modules_rax_text_lib_default.a, {
    className: clsPrefix + "-option-text"
  }, cancelText || locale.cancel || 'Cancel')) : null, Object(rax["createElement"])(es_safe_area, {
    className: classnames_default()(clsPrefix + "-safe-area", (_classNames3 = {}, _classNames3[clsPrefix + "-safe-area--fullwidth"] = fullWidth, _classNames3))
  })));
};
ActionSheet.displayName = 'ActionSheet';
/* harmony default export */ var action_sheet = (Object(rax["forwardRef"])(ActionSheet));
// EXTERNAL MODULE: ./node_modules/rax-unmount-component-at-node/lib/index.js
var rax_unmount_component_at_node_lib = __webpack_require__(13);
var rax_unmount_component_at_node_lib_default = /*#__PURE__*/__webpack_require__.n(rax_unmount_component_at_node_lib);

// CONCATENATED MODULE: ./node_modules/@alifd/meet/es/utils/render.js



var render_provider = null;
function onProviderMount(p) {
  render_provider = p;
}
function onProviderUnMount() {
  render_provider = null;
}
function renderWithProvider(element, onHide) {
  return render_provider.addPortal({
    element: element,
    onHide: onHide
  });
}
function renderWithDriver(element, onHide) {
  if (!rax["shared"] || !rax["shared"].Host || !rax["shared"].Host.driver) {
    throw new Error('Render fail: driver not found.');
  }
  var driver = rax["shared"].Host.driver;
  var root = document.createElement('div');
  var hid = false;
  if (isStrictWechatMiniProgram || isStrictByteDanceMicroApp) {
    Object(rax["render"])(element, root, {
      driver: Object.assign(Object.assign({}, driver), {
        afterRender: function afterRender() {
          try {
            if (isStrictWechatMiniProgram || isStrictByteDanceMicroApp) {
              setTimeout(function () {
                document.body.appendChild(root);
              });
            } else {
              document.body.appendChild(root);
            }
          } catch (e) {
            console.warn(e);
          }
        }
      })
    });
  } else {
    document.body.appendChild(root);
    Object(rax["render"])(element, root, {
      driver: driver
    });
  }
  return function hide() {
    if (hid) {
      return;
    }
    try {
      hid = true;
      rax_unmount_component_at_node_lib_default()(root);
      document.body.removeChild(root);
      if (onHide) {
        onHide();
      }
    } catch (e) {
      throw new Error('remove element error');
    }
  };
}
function renderToRoot(element, onHide) {
  if (render_provider) {
    return renderWithProvider(element, onHide);
  }
  return renderWithDriver(element, onHide);
}
// CONCATENATED MODULE: ./node_modules/@alifd/meet/es/action-sheet/open.js
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var open_ActionSheetWrapper = /*#__PURE__*/function (_Component) {
  _inheritsLoose(ActionSheetWrapper, _Component);
  function ActionSheetWrapper(props) {
    var _this = _Component.call(this, props) || this;
    _this.handleClick = function (option, index, e) {
      if (_this.props.onClick) {
        _this.props.onClick(option, index, e);
      }
    };
    _this.handleClose = function (reason) {
      _this.setState({
        visible: false
      });
      if (_this.props.onClose) {
        _this.props.onClose(reason);
      }
    };
    _this.state = {
      visible: true
    };
    return _this;
  }
  var _proto = ActionSheetWrapper.prototype;
  _proto.render = function render() {
    var _a = this.props,
      message = _a.message,
      options = _a.options,
      others = __rest(_a, ["message", "options"]);
    var visible = this.state.visible;
    return Object(rax["createElement"])(action_sheet, Object.assign({
      visible: visible
    }, others, {
      disablePortal: true,
      message: message,
      options: options,
      onClose: this.handleClose,
      onClick: this.handleClick
    }));
  };
  return ActionSheetWrapper;
}(rax["Component"]);
open_ActionSheetWrapper.defaultProps = {
  message: '',
  options: [],
  onClick: function onClick() {},
  onClose: function onClose() {}
};
/* harmony default export */ var action_sheet_open = (function (options) {
  var onClose = options.onClose,
    others = __rest(options, ["onClose"]);
  var hide = null;
  hide = renderToRoot(Object(rax["createElement"])(open_ActionSheetWrapper, Object.assign({}, others, {
    onClose: function handleClose(v) {
      if (isFunction(onClose)) {
        onClose(v);
      }
      setTimeout(function () {
        hide();
      }, 300);
    }
  })));
  return {
    close: function close() {
      return hide();
    }
  };
});
// EXTERNAL MODULE: ./node_modules/@alifd/meet/es/action-sheet/styles/index.css
var action_sheet_styles = __webpack_require__(37);

// CONCATENATED MODULE: ./node_modules/@alifd/meet/es/action-sheet/index.js



var ExpandedActionSheet = action_sheet;
ExpandedActionSheet.show = action_sheet_open;
/* harmony default export */ var es_action_sheet = (ExpandedActionSheet);
// CONCATENATED MODULE: ./node_modules/@alifd/meet/es/typography/typography.js




var typography_Typography = function (props) {
  var _classNames;
  var _props$prefix = props.prefix,
    prefix = _props$prefix === void 0 ? 'mt-' : _props$prefix,
    type = props.type,
    className = props.className,
    children = props.children,
    _props$mark = props.mark,
    mark = _props$mark === void 0 ? false : _props$mark,
    _props$underline = props.underline,
    underline = _props$underline === void 0 ? false : _props$underline,
    _props$strong = props.strong,
    strong = _props$strong === void 0 ? false : _props$strong,
    _props$code = props.code,
    code = _props$code === void 0 ? false : _props$code,
    del = props.delete,
    others = __rest(props, ["prefix", "type", "className", "children", "mark", "underline", "strong", "code", "delete"]);
  var clsPrefix = prefix + "typography";
  return Object(rax["createElement"])(node_modules_rax_text_lib_default.a, Object.assign({}, others, {
    className: classnames_default()("" + clsPrefix, className, clsPrefix + "--" + type, (_classNames = {}, _classNames[clsPrefix + "--mark"] = mark, _classNames[clsPrefix + "--underline"] = underline, _classNames[clsPrefix + "--strong"] = strong, _classNames[clsPrefix + "--code"] = code, _classNames[clsPrefix + "--delete"] = del, _classNames))
  }), children);
};
typography_Typography.displayName = 'Typography';
/* harmony default export */ var typography_typography = (typography_Typography);
// CONCATENATED MODULE: ./node_modules/@alifd/meet/es/typography/create-title.js


var MAP = {
  h1: 'headline',
  h2: 'title',
  h3: 'subhead',
  h4: 'subhead',
  h5: 'body-2',
  h6: 'body-1'
};
/* harmony default export */ var create_title = (function (type) {
  var Title = function (props) {
    return Object(rax["createElement"])(typography_typography, Object.assign({}, props, {
      type: MAP[type],
      strong: true
    }));
  };
  Title.displayName = type.toUpperCase();
  return Title;
});
// EXTERNAL MODULE: ./node_modules/@alifd/meet/es/typography/styles/index.css
var typography_styles = __webpack_require__(38);

// CONCATENATED MODULE: ./node_modules/@alifd/meet/es/typography/index.js



var ExpandedTypography = typography_typography;
ExpandedTypography.H1 = create_title('h1');
ExpandedTypography.H2 = create_title('h2');
ExpandedTypography.H3 = create_title('h3');
ExpandedTypography.H4 = create_title('h4');
ExpandedTypography.H5 = create_title('h5');
ExpandedTypography.H6 = create_title('h6');
ExpandedTypography.Text = typography_typography;
/* harmony default export */ var es_typography = (ExpandedTypography);
// EXTERNAL MODULE: ./node_modules/rax-is-valid-element/lib/index.js
var rax_is_valid_element_lib = __webpack_require__(12);
var rax_is_valid_element_lib_default = /*#__PURE__*/__webpack_require__.n(rax_is_valid_element_lib);

// CONCATENATED MODULE: ./node_modules/@alifd/meet/es/tag/create-children.js








var CreateChildren = function (children, classes, prefix, size) {
  var count = rax_children_lib_default.a.count(children);
  return rax_children_lib_default.a.map(children, function (child, index) {
    var _classNames;
    if (isNil(child) || isBoolean(child)) {
      return null;
    }
    var key = child.key || "mt-tag-" + index;
    if (isNumber(child) || isString(child)) {
      return Object(rax["createElement"])(node_modules_rax_text_lib_default.a, {
        key: key,
        className: classes.textCls
      }, child);
    }
    if (!rax_is_valid_element_lib_default()(child)) {
      return child;
    }
    switch (true) {
      case child.type === node_modules_rax_text_lib_default.a:
        return rax_clone_element_lib_default()(child, {
          key: key,
          className: classes.textCls,
          style: child.props.style || {}
        });
      case child.type === icon_icon:
        return rax_clone_element_lib_default()(child, {
          key: key,
          className: classnames_default()(classes.iconCls, (_classNames = {}, _classNames[prefix + "tag-icon--" + size + "-first"] = index === 0, _classNames[prefix + "tag-icon--" + size + "-last"] = index === count - 1, _classNames)),
          style: child.props.style || {}
        });
      default:
        return rax_clone_element_lib_default()(child, {
          key: key
        });
    }
  });
};
/* harmony default export */ var create_children = (CreateChildren);
// CONCATENATED MODULE: ./node_modules/@alifd/meet/es/tag/closable.js







var ClosableTag = function (props, ref) {
  var _classNames;
  var _props$prefix = props.prefix,
    prefix = _props$prefix === void 0 ? 'mt-' : _props$prefix,
    _props$size = props.size,
    size = _props$size === void 0 ? 'medium' : _props$size,
    _props$type = props.type,
    type = _props$type === void 0 ? 'normal' : _props$type,
    _props$closeArea = props.closeArea,
    closeArea = _props$closeArea === void 0 ? 'tail' : _props$closeArea,
    _props$disabled = props.disabled,
    disabled = _props$disabled === void 0 ? false : _props$disabled,
    _props$onClose = props.onClose,
    onClose = _props$onClose === void 0 ? function () {} : _props$onClose,
    _props$onClick = props.onClick,
    onClick = _props$onClick === void 0 ? function () {} : _props$onClick,
    _props$afterClose = props.afterClose,
    afterClose = _props$afterClose === void 0 ? function () {} : _props$afterClose,
    _props$style = props.style,
    style = _props$style === void 0 ? {} : _props$style,
    children = props.children,
    className = props.className,
    others = __rest(props, ["prefix", "size", "type", "closeArea", "disabled", "onClose", "onClick", "afterClose", "style", "children", "className"]);
  var shape = 'closable';
  var _useState = Object(rax["useState"])(false),
    closed = _useState[0],
    setClosed = _useState[1];
  var cssType = type === 'normal' ? 'outline' : 'solid';
  var tagCls = classnames_default()(className, prefix + "tag", prefix + "tag--" + size, prefix + "tag--" + shape + "-" + cssType, (_classNames = {}, _classNames[prefix + "tag--" + shape + "-" + cssType + "-disabled"] = disabled, _classNames));
  var closeCls = classnames_default()(prefix + "tag--closable-close");
  var closeIconCls = classnames_default()(prefix + "tag-icon--" + size + "-close");
  var handleClose = function (e) {
    stopPropagation(e);
    if (disabled) {
      return;
    }
    var isClosed = !(onClose && onClose() === false);
    setClosed(isClosed);
    afterClose(e);
  };
  if (closed) {
    return null;
  }
  return Object(rax["createElement"])(meet_es_view, Object.assign({}, others, {
    ref: ref,
    className: tagCls,
    onClick: function handleClick(e) {
      if (disabled) {
        return;
      }
      if (closeArea === 'tag') {
        handleClose(e);
      }
      onClick(e);
    },
    style: props.style
  }), create_children(children, {
    textCls: prefix + "tag-font--" + size,
    iconCls: prefix + "tag-font--" + size
  }, prefix, size), Object(rax["createElement"])(meet_es_view, {
    className: closeCls,
    onClick: handleClose
  }, Object(rax["createElement"])(icon_icon, {
    name: "close",
    className: closeIconCls
  })));
};
ClosableTag.displayName = 'ClosableTag';
/* harmony default export */ var closable = (Object(rax["forwardRef"])(ClosableTag));
// CONCATENATED MODULE: ./node_modules/@alifd/meet/es/tag/selectable.js






var getInitCheckedValue = function (props) {
  if ('checked' in props) {
    return props.checked;
  } else if (props.defaultChecked) {
    return props.defaultChecked;
  } else {
    return false;
  }
};
var SelectableTag = function (props, ref) {
  var _classNames, _classNames2;
  var _props$prefix = props.prefix,
    prefix = _props$prefix === void 0 ? 'mt-' : _props$prefix,
    _props$size = props.size,
    size = _props$size === void 0 ? 'medium' : _props$size,
    _props$type = props.type,
    type = _props$type === void 0 ? 'normal' : _props$type,
    _props$disabled = props.disabled,
    disabled = _props$disabled === void 0 ? false : _props$disabled,
    _props$checked = props.checked,
    checked = _props$checked === void 0 ? false : _props$checked,
    _props$defaultChecked = props.defaultChecked,
    defaultChecked = _props$defaultChecked === void 0 ? false : _props$defaultChecked,
    _props$onChange = props.onChange,
    onChange = _props$onChange === void 0 ? function () {} : _props$onChange,
    _props$style = props.style,
    style = _props$style === void 0 ? {} : _props$style,
    children = props.children,
    className = props.className,
    others = __rest(props, ["prefix", "size", "type", "disabled", "checked", "defaultChecked", "onChange", "style", "children", "className"]);
  var shape = 'selectable';
  var initCheckedValue = getInitCheckedValue(props);
  var _useState = Object(rax["useState"])(initCheckedValue),
    hasChecked = _useState[0],
    setChecked = _useState[1];
  var cssType = type === 'normal' ? 'outline' : 'solid';
  var tagCls = classnames_default()(className, prefix + "tag", prefix + "tag--" + size, prefix + "tag--" + shape + "-" + cssType, (_classNames = {}, _classNames[prefix + "tag--" + shape + "-" + cssType + "-selected-disabled"] = disabled && hasChecked, _classNames[prefix + "tag--" + shape + "-" + cssType + "-disabled"] = disabled, _classNames[prefix + "tag--" + shape + "-" + cssType + "-selected"] = hasChecked, _classNames));
  var selectCls = classnames_default()(prefix + "tag--selectable-select");
  var selectIconCls = classnames_default()(prefix + "tag-icon--" + size + "-select", (_classNames2 = {}, _classNames2[prefix + "tag--" + shape + "-" + cssType + "-icon-selected-disabled"] = disabled && hasChecked, _classNames2));
  var handleClick = function (e) {
    if (disabled) {
      return;
    }
    if (onChange) {
      onChange(!hasChecked, e);
    }
    if (!('checked' in props)) {
      setChecked(!hasChecked);
    }
  };
  Object(rax["useEffect"])(function () {
    if ('checked' in props) {
      setChecked(checked);
    }
  }, [checked]);
  return Object(rax["createElement"])(meet_es_view, Object.assign({}, others, {
    ref: ref,
    className: tagCls,
    onClick: handleClick,
    style: props.style
  }), create_children(children, {
    textCls: prefix + "tag-font--" + size,
    iconCls: prefix + "tag-font--" + size
  }, prefix, size), type === 'normal' && hasChecked ? Object(rax["createElement"])(meet_es_view, {
    className: selectCls,
    onChange: handleClick
  }, Object(rax["createElement"])(icon_icon, {
    name: "select",
    className: selectIconCls
  })) : null);
};
SelectableTag.displayName = 'SelectableTag';
/* harmony default export */ var selectable = (Object(rax["forwardRef"])(SelectableTag));
// EXTERNAL MODULE: ./node_modules/@alifd/meet/es/tag/styles/index.css
var tag_styles = __webpack_require__(39);

// CONCATENATED MODULE: ./node_modules/@alifd/meet/es/tag/tag.js





var Tag = function (props, ref) {
  var _classNames;
  var _props$prefix = props.prefix,
    prefix = _props$prefix === void 0 ? 'mt-' : _props$prefix,
    _props$size = props.size,
    size = _props$size === void 0 ? 'medium' : _props$size,
    _props$type = props.type,
    type = _props$type === void 0 ? 'normal' : _props$type,
    _props$disabled = props.disabled,
    disabled = _props$disabled === void 0 ? false : _props$disabled,
    _props$onClick = props.onClick,
    onClick = _props$onClick === void 0 ? function () {} : _props$onClick,
    _props$style = props.style,
    style = _props$style === void 0 ? {} : _props$style,
    children = props.children,
    className = props.className,
    others = __rest(props, ["prefix", "size", "type", "disabled", "onClick", "style", "children", "className"]);
  var shape = 'normal';
  var cssType = type === 'normal' ? 'outline' : 'solid';
  var tagCls = classnames_default()(className, prefix + "tag", prefix + "tag--" + size, prefix + "tag--readonly-" + size, prefix + "tag--" + shape + "-" + cssType, (_classNames = {}, _classNames[prefix + "tag--" + shape + "-" + cssType + "-disabled"] = disabled, _classNames));
  return Object(rax["createElement"])(meet_es_view, Object.assign({}, others, {
    ref: ref,
    className: tagCls,
    onClick: function handleClick(e) {
      if (disabled) {
        return;
      }
      if (onClick) {
        onClick(e);
      }
    },
    style: props.style
  }), create_children(children, {
    textCls: prefix + "tag-font--" + size,
    iconCls: prefix + "tag-font--" + size
  }, prefix, size));
};
Tag.displayName = 'Tag';
/* harmony default export */ var tag = (Object(rax["forwardRef"])(Tag));
// CONCATENATED MODULE: ./node_modules/@alifd/meet/es/tag/index.js




var ExpandedTag = tag;
ExpandedTag.Selectable = selectable;
ExpandedTag.Closable = closable;
/* harmony default export */ var es_tag = (ExpandedTag);
// CONCATENATED MODULE: ./node_modules/@uni/navigate/es/_utils/promisify.js
function _utils_promisify_extends() {
  _utils_promisify_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _utils_promisify_extends.apply(this, arguments);
}
function promisify_promisify(api) {
  return function (arg) {
    return new Promise(function (resolve, reject) {
      var promisifyArg = arg;
      api(_utils_promisify_extends({}, promisifyArg, {
        success: function (res) {
          if (promisifyArg && typeof promisifyArg.success === 'function') {
            promisifyArg.success(res);
          }
          resolve(res);
        },
        onSuccess: function (res) {
          if (promisifyArg && typeof promisifyArg.onSuccess === 'function') {
            promisifyArg.onSuccess(res);
          }
          resolve(res);
        },
        fail: function (res) {
          if (promisifyArg && typeof promisifyArg.fail === 'function') {
            promisifyArg.fail(res);
          }
          reject(res);
        },
        onFail: function (res) {
          if (promisifyArg && typeof promisifyArg.onFail === 'function') {
            promisifyArg.onFail(res);
          }
          reject(res);
        },
        complete: function (res) {
          if (promisifyArg && typeof promisifyArg.complete === 'function') {
            promisifyArg.complete(res);
          }
        },
        onComplete: function (res) {
          if (promisifyArg && typeof promisifyArg.onComplete === 'function') {
            promisifyArg.onComplete(res);
          }
        }
      }));
    });
  };
}
// CONCATENATED MODULE: ./node_modules/@uni/navigate/es/_utils/styleOptions.js
var _utils_styleOptions_excluded = ["_ext"];
function _utils_styleOptions_objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
function _utils_styleOptions_extends() {
  _utils_styleOptions_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _utils_styleOptions_extends.apply(this, arguments);
}
var styleOptions_styleOut = function (output, originalInput, originalOutput) {
  return _utils_styleOptions_extends({}, output, {
    _original: {
      input: _utils_styleOptions_extends({}, originalInput),
      // 实际调用 api 方法时传入的参数. 对入参进行 format 之后的结果
      output: _utils_styleOptions_extends({}, originalOutput) // 实际调用 api 方法时传入的参数. 返回值 format 之前的结果
    }
  });
};

var styleOptions_styleIn = function (options, baseName) {
  var _ref = options || {},
    _ref$_ext = _ref._ext,
    _ext = _ref$_ext === void 0 ? {} : _ref$_ext,
    rest = _utils_styleOptions_objectWithoutPropertiesLoose(_ref, _utils_styleOptions_excluded);
  return _utils_styleOptions_extends({}, rest, _ext[baseName] || {});
};
// CONCATENATED MODULE: ./node_modules/@uni/navigate/es/common.js


var common_normalize = {
  push: function (api, containerName) {
    return function (options) {
      return promisify_promisify(api)(styleOptions_styleIn(options, containerName));
    };
  },
  back: function (api, containerName) {
    return function (options) {
      return promisify_promisify(api)(styleOptions_styleIn(options, containerName));
    };
  },
  go: function (api, containerName) {
    return function (options) {
      return promisify_promisify(api)(styleOptions_styleIn(options, containerName));
    };
  },
  replace: function (api, containerName) {
    return function (options) {
      return promisify_promisify(api)(styleOptions_styleIn(options, containerName));
    };
  },
  reLaunch: function (api, containerName) {
    return function (options) {
      return promisify_promisify(api)(styleOptions_styleIn(options, containerName));
    };
  },
  switchTab: function (api, containerName) {
    return function (options) {
      return promisify_promisify(api)(styleOptions_styleIn(options, containerName));
    };
  }
};
// CONCATENATED MODULE: ./node_modules/@uni/navigate/es/_utils/constant.js
var constant_CONTAINER_NAME = {
  WECHAT: 'wechatMiniProgram',
  ALIPAY: 'aliMiniApp',
  BYTE: 'bytedanceMicroApp',
  WEB: 'web',
  BAIDU: 'baiduSmartProgram',
  KWAI: 'kuaishouMiniProgram'
};
var JSONP_SIGN = '__uni_jsonp_handler_sign__';
// CONCATENATED MODULE: ./node_modules/@uni/navigate/es/ali-miniapp/go.js


var go = common_normalize.go(function (options) {
  var step = options.step,
    _success = options.success,
    _fail = options.fail,
    _complete = options.complete;
  if (step < 0) {
    my.navigateBack({
      delta: Math.abs(step),
      success: function () {
        _success && _success();
      },
      fail: function (res) {
        _fail && _fail(res);
      },
      complete: function (res) {
        _complete && _complete(res);
      }
    });
  } else {
    _fail && _fail({
      errMsg: 'step不能大于或等于0'
    });
    _complete && _complete({
      errMsg: 'step不能大于或等于0'
    });
  }
}, constant_CONTAINER_NAME.ALIPAY);
/* harmony default export */ var ali_miniapp_go = (go);
// CONCATENATED MODULE: ./node_modules/@uni/navigate/es/ali-miniapp/back.js


var back = common_normalize.back(function (options) {
  var _ref = options || {},
    _success = _ref.success,
    _fail = _ref.fail,
    _complete = _ref.complete;
  my.navigateBack({
    delta: 1,
    success: function () {
      _success && _success();
    },
    fail: function (res) {
      _fail && _fail(res);
    },
    complete: function (res) {
      _complete && _complete(res);
    }
  });
}, constant_CONTAINER_NAME.ALIPAY);
/* harmony default export */ var ali_miniapp_back = (back);
// CONCATENATED MODULE: ./node_modules/@uni/navigate/es/ali-miniapp/reLaunch.js


var reLaunch = common_normalize.reLaunch(function (options) {
  var url = options.url,
    _success = options.success,
    _fail = options.fail,
    _complete = options.complete;
  my.reLaunch({
    url: url,
    success: function () {
      _success && _success();
    },
    fail: function (res) {
      _fail && _fail(res);
    },
    complete: function (res) {
      _complete && _complete(res);
    }
  });
}, constant_CONTAINER_NAME.ALIPAY);
/* harmony default export */ var ali_miniapp_reLaunch = (reLaunch);
// CONCATENATED MODULE: ./node_modules/@uni/navigate/es/ali-miniapp/replace.js


var replace = common_normalize.replace(function (options) {
  var _ref = options || {},
    url = _ref.url,
    _success = _ref.success,
    _fail = _ref.fail,
    _complete = _ref.complete;
  my.redirectTo({
    url: url,
    success: function () {
      _success && _success();
    },
    fail: function (res) {
      _fail && _fail(res);
    },
    complete: function (res) {
      _complete && _complete(res);
    }
  });
}, constant_CONTAINER_NAME.ALIPAY);
/* harmony default export */ var ali_miniapp_replace = (replace);
// CONCATENATED MODULE: ./node_modules/@uni/navigate/es/ali-miniapp/push.js


var push = common_normalize.push(function (options) {
  var url = options.url,
    _success = options.success,
    _fail = options.fail,
    _complete = options.complete;
  my.navigateTo({
    url: url,
    success: function () {
      _success && _success();
    },
    fail: function (res) {
      _fail && _fail(res);
    },
    complete: function (res) {
      _complete && _complete(res);
    }
  });
}, constant_CONTAINER_NAME.ALIPAY);
/* harmony default export */ var ali_miniapp_push = (push);
// CONCATENATED MODULE: ./node_modules/@uni/navigate/es/ali-miniapp/switchTab.js


var switchTab = common_normalize.switchTab(function (options) {
  my.switchTab(options);
}, constant_CONTAINER_NAME.ALIPAY);
/* harmony default export */ var ali_miniapp_switchTab = (switchTab);
// CONCATENATED MODULE: ./node_modules/@uni/navigate/es/ali-miniapp/index.js







/* harmony default export */ var es_ali_miniapp = ({
  push: ali_miniapp_push,
  back: ali_miniapp_back,
  reLaunch: ali_miniapp_reLaunch,
  switchTab: ali_miniapp_switchTab,
  replace: ali_miniapp_replace,
  go: ali_miniapp_go
});
// CONCATENATED MODULE: ./node_modules/@uni/navigate/es/wechat-miniprogram/go.js


var go_go = common_normalize.go(function (options) {
  var step = options.step,
    _success = options.success,
    _fail = options.fail,
    _complete = options.complete;
  if (step < 0) {
    wx.navigateBack({
      delta: Math.abs(step),
      success: function () {
        _success && _success();
      },
      fail: function (res) {
        _fail && _fail(res);
      },
      complete: function (res) {
        _complete && _complete(res);
      }
    });
  } else {
    _fail && _fail({
      errMsg: 'step不能大于或等于0'
    });
    _complete && _complete({
      errMsg: 'step不能大于或等于0'
    });
  }
}, constant_CONTAINER_NAME.WECHAT);
/* harmony default export */ var wechat_miniprogram_go = (go_go);
// CONCATENATED MODULE: ./node_modules/@uni/navigate/es/wechat-miniprogram/back.js


var back_back = common_normalize.back(function (options) {
  var _ref = options || {},
    _success = _ref.success,
    _fail = _ref.fail,
    _complete = _ref.complete;
  wx.navigateBack({
    delta: 1,
    success: function () {
      _success && _success();
    },
    fail: function (res) {
      _fail && _fail(res);
    },
    complete: function (res) {
      _complete && _complete(res);
    }
  });
}, constant_CONTAINER_NAME.WECHAT);
/* harmony default export */ var wechat_miniprogram_back = (back_back);
// CONCATENATED MODULE: ./node_modules/@uni/navigate/es/wechat-miniprogram/reLaunch.js


var reLaunch_reLaunch = common_normalize.reLaunch(function (options) {
  var url = options.url,
    _success = options.success,
    _fail = options.fail,
    _complete = options.complete;
  wx.reLaunch({
    url: url,
    success: function () {
      _success && _success();
    },
    fail: function (res) {
      _fail && _fail(res);
    },
    complete: function (res) {
      _complete && _complete(res);
    }
  });
}, constant_CONTAINER_NAME.WECHAT);
/* harmony default export */ var wechat_miniprogram_reLaunch = (reLaunch_reLaunch);
// CONCATENATED MODULE: ./node_modules/@uni/navigate/es/wechat-miniprogram/replace.js


var replace_replace = common_normalize.replace(function (options) {
  var _ref = options || {},
    url = _ref.url,
    _success = _ref.success,
    _fail = _ref.fail,
    _complete = _ref.complete;
  wx.redirectTo({
    url: url,
    success: function () {
      _success && _success();
    },
    fail: function (res) {
      _fail && _fail(res);
    },
    complete: function (res) {
      _complete && _complete(res);
    }
  });
}, constant_CONTAINER_NAME.WECHAT);
/* harmony default export */ var wechat_miniprogram_replace = (replace_replace);
// CONCATENATED MODULE: ./node_modules/@uni/navigate/es/wechat-miniprogram/push.js


var push_push = common_normalize.push(function (options) {
  var url = options.url,
    _success = options.success,
    _fail = options.fail,
    _complete = options.complete;
  wx.navigateTo({
    url: url,
    success: function () {
      _success && _success();
    },
    fail: function (res) {
      _fail && _fail(res);
    },
    complete: function (res) {
      _complete && _complete(res);
    }
  });
}, constant_CONTAINER_NAME.WECHAT);
/* harmony default export */ var wechat_miniprogram_push = (push_push);
// CONCATENATED MODULE: ./node_modules/@uni/navigate/es/wechat-miniprogram/switchTab.js


var switchTab_switchTab = common_normalize.switchTab(function (options) {
  wx.switchTab(options);
}, constant_CONTAINER_NAME.WECHAT);
/* harmony default export */ var wechat_miniprogram_switchTab = (switchTab_switchTab);
// CONCATENATED MODULE: ./node_modules/@uni/navigate/es/wechat-miniprogram/index.js







/* harmony default export */ var es_wechat_miniprogram = ({
  push: wechat_miniprogram_push,
  back: wechat_miniprogram_back,
  reLaunch: wechat_miniprogram_reLaunch,
  switchTab: wechat_miniprogram_switchTab,
  replace: wechat_miniprogram_replace,
  go: wechat_miniprogram_go
});
// CONCATENATED MODULE: ./node_modules/@uni/navigate/es/bytedance-microapp/go.js


var bytedance_microapp_go_go = common_normalize.go(function (options) {
  var step = options.step,
    _success = options.success,
    _fail = options.fail,
    _complete = options.complete;
  if (step < 0) {
    tt.navigateBack({
      delta: Math.abs(step),
      success: function () {
        _success && _success();
      },
      fail: function (res) {
        _fail && _fail(res);
      },
      complete: function (res) {
        _complete && _complete(res);
      }
    });
  } else {
    _fail && _fail({
      errMsg: 'step不能大于或等于0'
    });
    _complete && _complete({
      errMsg: 'step不能大于或等于0'
    });
  }
}, constant_CONTAINER_NAME.BYTE);
/* harmony default export */ var bytedance_microapp_go = (bytedance_microapp_go_go);
// CONCATENATED MODULE: ./node_modules/@uni/navigate/es/bytedance-microapp/back.js


var bytedance_microapp_back_back = common_normalize.back(function (options) {
  var _ref = options || {},
    _success = _ref.success,
    _fail = _ref.fail,
    _complete = _ref.complete;
  tt.navigateBack({
    delta: 1,
    success: function () {
      _success && _success();
    },
    fail: function (res) {
      _fail && _fail(res);
    },
    complete: function (res) {
      _complete && _complete(res);
    }
  });
}, constant_CONTAINER_NAME.BYTE);
/* harmony default export */ var bytedance_microapp_back = (bytedance_microapp_back_back);
// CONCATENATED MODULE: ./node_modules/@uni/navigate/es/bytedance-microapp/reLaunch.js


var bytedance_microapp_reLaunch_reLaunch = common_normalize.reLaunch(function (options) {
  var url = options.url,
    _success = options.success,
    _fail = options.fail,
    _complete = options.complete;
  tt.reLaunch({
    url: url,
    success: function () {
      _success && _success();
    },
    fail: function (res) {
      _fail && _fail(res);
    },
    complete: function (res) {
      _complete && _complete(res);
    }
  });
}, constant_CONTAINER_NAME.BYTE);
/* harmony default export */ var bytedance_microapp_reLaunch = (bytedance_microapp_reLaunch_reLaunch);
// CONCATENATED MODULE: ./node_modules/@uni/navigate/es/bytedance-microapp/replace.js


var bytedance_microapp_replace_replace = common_normalize.replace(function (options) {
  var _ref = options || {},
    url = _ref.url,
    _success = _ref.success,
    _fail = _ref.fail,
    _complete = _ref.complete;
  tt.redirectTo({
    url: url,
    success: function () {
      _success && _success();
    },
    fail: function (res) {
      _fail && _fail(res);
    },
    complete: function (res) {
      _complete && _complete(res);
    }
  });
}, constant_CONTAINER_NAME.BYTE);
/* harmony default export */ var bytedance_microapp_replace = (bytedance_microapp_replace_replace);
// CONCATENATED MODULE: ./node_modules/@uni/navigate/es/bytedance-microapp/push.js


var bytedance_microapp_push_push = common_normalize.push(function (options) {
  var url = options.url,
    _success = options.success,
    _fail = options.fail,
    _complete = options.complete;
  tt.navigateTo({
    url: url,
    success: function () {
      _success && _success();
    },
    fail: function (res) {
      _fail && _fail(res);
    },
    complete: function (res) {
      _complete && _complete(res);
    }
  });
}, constant_CONTAINER_NAME.BYTE);
/* harmony default export */ var bytedance_microapp_push = (bytedance_microapp_push_push);
// CONCATENATED MODULE: ./node_modules/@uni/navigate/es/bytedance-microapp/switchTab.js


var bytedance_microapp_switchTab_switchTab = common_normalize.switchTab(function (options) {
  tt.switchTab(options);
}, constant_CONTAINER_NAME.BYTE);
/* harmony default export */ var bytedance_microapp_switchTab = (bytedance_microapp_switchTab_switchTab);
// CONCATENATED MODULE: ./node_modules/@uni/navigate/es/bytedance-microapp/index.js







/* harmony default export */ var es_bytedance_microapp = ({
  push: bytedance_microapp_push,
  back: bytedance_microapp_back,
  reLaunch: bytedance_microapp_reLaunch,
  switchTab: bytedance_microapp_switchTab,
  replace: bytedance_microapp_replace,
  go: bytedance_microapp_go
});
// CONCATENATED MODULE: ./node_modules/@uni/navigate/es/web/go.js


var web_go_go = common_normalize.go(function (options) {
  var step = options.step,
    success = options.success,
    fail = options.fail,
    complete = options.complete;
  if (step < 0) {
    setTimeout(function () {
      history.go(options.step);
      success && success();
      complete && complete();
    });
  } else {
    fail && fail({
      errMsg: 'step不能大于或等于0'
    });
    complete && complete({
      errMsg: 'step不能大于或等于0'
    });
  }
}, constant_CONTAINER_NAME.WEB);
/* harmony default export */ var web_go = (web_go_go);
// CONCATENATED MODULE: ./node_modules/@uni/navigate/es/web/back.js


var web_back_back = common_normalize.back(function (options) {
  var _ref = options || {},
    success = _ref.success,
    fail = _ref.fail,
    complete = _ref.complete;
  setTimeout(function () {
    try {
      history.go(-1);
      success && success();
      complete && complete();
    } catch (e) {
      fail && fail(e);
      complete && complete(e);
    }
  });
}, constant_CONTAINER_NAME.WEB);
/* harmony default export */ var web_back = (web_back_back);
// CONCATENATED MODULE: ./node_modules/@uni/navigate/es/web/replace.js


var web_replace_replace = common_normalize.replace(function (options) {
  var _ref = options || {},
    url = _ref.url,
    _ref$isHash = _ref.isHash,
    isHash = _ref$isHash === void 0 ? false : _ref$isHash,
    _ref$refresh = _ref.refresh,
    refresh = _ref$refresh === void 0 ? true : _ref$refresh,
    success = _ref.success,
    fail = _ref.fail,
    complete = _ref.complete;
  var _url = isHash ? "/#" + url : url;
  setTimeout(function () {
    try {
      if ((url.indexOf('https://') !== -1 || url.indexOf('https://') !== -1) && url.indexOf(location.origin) === -1) {
        console.warn('Uni API: Replace does not support cross-domain');
        location.href = url;
        return;
      }
      if (isHash) {
        var _location = location,
          href = _location.href;
        var index = href.indexOf('#'); // 域名不变的情况下不会刷新页面

        window.location.replace(index > 0 ? href.slice(0, index) + "#" + url : href + "#" + url);
      } else {
        window.history.replaceState(null, null, _url);
        refresh && location.reload();
      }
      success && success();
      complete && complete();
    } catch (e) {
      fail && fail(e);
      complete && complete(e);
    }
  });
}, constant_CONTAINER_NAME.WEB);
/* harmony default export */ var web_replace = (web_replace_replace);
// CONCATENATED MODULE: ./node_modules/@uni/navigate/es/web/reLaunch.js



var web_reLaunch_reLaunch = common_normalize.reLaunch(function (options) {
  var url = options.url,
    _options$isHash = options.isHash,
    isHash = _options$isHash === void 0 ? false : _options$isHash,
    _options$refresh = options.refresh,
    refresh = _options$refresh === void 0 ? true : _options$refresh,
    success = options.success,
    fail = options.fail,
    complete = options.complete;
  var _url = isHash ? "/#" + url : url;
  setTimeout(function () {
    try {
      history.go(-(history.length - 1));
      if ((url.indexOf('https://') !== -1 || url.indexOf('https://') !== -1) && url.indexOf(location.origin) === -1) {
        console.warn('Uni API: Relaunch does not support cross-domain');
        location.href = url;
        return;
      }
      if (isHash) {
        web_replace({
          url: url,
          isHash: true
        });
      } else {
        window.history.replaceState(null, null, _url);
        refresh && location.reload();
      }
      success && success();
      complete && complete();
    } catch (e) {
      fail && fail(e);
      complete && complete(e);
    }
  });
}, constant_CONTAINER_NAME.WEB);
/* harmony default export */ var web_reLaunch = (web_reLaunch_reLaunch);
// CONCATENATED MODULE: ./node_modules/@uni/navigate/es/web/push.js


var web_push_push = common_normalize.push(function (options) {
  var url = options.url,
    _options$isHash = options.isHash,
    isHash = _options$isHash === void 0 ? false : _options$isHash,
    _options$refresh = options.refresh,
    refresh = _options$refresh === void 0 ? true : _options$refresh,
    success = options.success,
    fail = options.fail,
    complete = options.complete;
  setTimeout(function () {
    try {
      if (isHash) {
        location.hash = "#" + url;
      } else if (refresh) {
        location.href = url;
      } else {
        history.pushState({
          page_id: 1
        }, '', url);
      }
      success && success();
      complete && complete();
    } catch (e) {
      fail && fail(e);
      complete && complete(e);
    }
  });
}, constant_CONTAINER_NAME.WEB);
/* harmony default export */ var web_push = (web_push_push);
// CONCATENATED MODULE: ./node_modules/@uni/navigate/es/web/switchTab.js


var web_switchTab_switchTab = common_normalize.switchTab(function () {
  throw new Error('@uni/apis: switchTab 不支持');
}, constant_CONTAINER_NAME.WEB);
/* harmony default export */ var web_switchTab = (web_switchTab_switchTab);
// CONCATENATED MODULE: ./node_modules/@uni/navigate/es/web/index.js







/* harmony default export */ var navigate_es_web = ({
  push: web_push,
  back: web_back,
  reLaunch: web_reLaunch,
  switchTab: web_switchTab,
  replace: web_replace,
  go: web_go
});
// CONCATENATED MODULE: ./node_modules/@uni/navigate/es/kuaishou-miniprogram/go.js


var kuaishou_miniprogram_go_go = common_normalize.go(function (options) {
  var step = options.step,
    _success = options.success,
    _fail = options.fail,
    _complete = options.complete;
  if (step < 0) {
    ks.navigateBack({
      delta: Math.abs(step),
      success: function () {
        _success && _success();
      },
      fail: function (res) {
        _fail && _fail(res);
      },
      complete: function (res) {
        _complete && _complete(res);
      }
    });
  } else {
    _fail && _fail({
      errMsg: 'step不能大于或等于0'
    });
    _complete && _complete({
      errMsg: 'step不能大于或等于0'
    });
  }
}, constant_CONTAINER_NAME.KWAI);
/* harmony default export */ var kuaishou_miniprogram_go = (kuaishou_miniprogram_go_go);
// CONCATENATED MODULE: ./node_modules/@uni/navigate/es/kuaishou-miniprogram/back.js


var kuaishou_miniprogram_back_back = common_normalize.back(function (options) {
  var _ref = options || {},
    _success = _ref.success,
    _fail = _ref.fail,
    _complete = _ref.complete;
  ks.navigateBack({
    delta: 1,
    success: function () {
      _success && _success();
    },
    fail: function (res) {
      _fail && _fail(res);
    },
    complete: function (res) {
      _complete && _complete(res);
    }
  });
}, constant_CONTAINER_NAME.KWAI);
/* harmony default export */ var kuaishou_miniprogram_back = (kuaishou_miniprogram_back_back);
// CONCATENATED MODULE: ./node_modules/@uni/navigate/es/kuaishou-miniprogram/reLaunch.js


var kuaishou_miniprogram_reLaunch_reLaunch = common_normalize.reLaunch(function (options) {
  var url = options.url,
    _success = options.success,
    _fail = options.fail,
    _complete = options.complete;
  ks.reLaunch({
    url: url,
    success: function () {
      _success && _success();
    },
    fail: function (res) {
      _fail && _fail(res);
    },
    complete: function (res) {
      _complete && _complete(res);
    }
  });
}, constant_CONTAINER_NAME.KWAI);
/* harmony default export */ var kuaishou_miniprogram_reLaunch = (kuaishou_miniprogram_reLaunch_reLaunch);
// CONCATENATED MODULE: ./node_modules/@uni/navigate/es/kuaishou-miniprogram/replace.js


var kuaishou_miniprogram_replace_replace = common_normalize.replace(function (options) {
  var _ref = options || {},
    url = _ref.url,
    _success = _ref.success,
    _fail = _ref.fail,
    _complete = _ref.complete;
  ks.redirectTo({
    url: url,
    success: function () {
      _success && _success();
    },
    fail: function (res) {
      _fail && _fail(res);
    },
    complete: function (res) {
      _complete && _complete(res);
    }
  });
}, constant_CONTAINER_NAME.KWAI);
/* harmony default export */ var kuaishou_miniprogram_replace = (kuaishou_miniprogram_replace_replace);
// CONCATENATED MODULE: ./node_modules/@uni/navigate/es/kuaishou-miniprogram/push.js


var kuaishou_miniprogram_push_push = common_normalize.push(function (options) {
  var url = options.url,
    _success = options.success,
    _fail = options.fail,
    _complete = options.complete;
  ks.navigateTo({
    url: url,
    success: function () {
      _success && _success();
    },
    fail: function (res) {
      _fail && _fail(res);
    },
    complete: function (res) {
      _complete && _complete(res);
    }
  });
}, constant_CONTAINER_NAME.KWAI);
/* harmony default export */ var kuaishou_miniprogram_push = (kuaishou_miniprogram_push_push);
// CONCATENATED MODULE: ./node_modules/@uni/navigate/es/kuaishou-miniprogram/switchTab.js


var kuaishou_miniprogram_switchTab_switchTab = common_normalize.switchTab(function (options) {
  ks.switchTab(options);
}, constant_CONTAINER_NAME.KWAI);
/* harmony default export */ var kuaishou_miniprogram_switchTab = (kuaishou_miniprogram_switchTab_switchTab);
// CONCATENATED MODULE: ./node_modules/@uni/navigate/es/kuaishou-miniprogram/index.js







/* harmony default export */ var es_kuaishou_miniprogram = ({
  push: kuaishou_miniprogram_push,
  back: kuaishou_miniprogram_back,
  reLaunch: kuaishou_miniprogram_reLaunch,
  switchTab: kuaishou_miniprogram_switchTab,
  replace: kuaishou_miniprogram_replace,
  go: kuaishou_miniprogram_go
});
// CONCATENATED MODULE: ./node_modules/@uni/navigate/es/baidu-smartprogram/go.js


var baidu_smartprogram_go_go = common_normalize.go(function (options) {
  var step = options.step,
    _success = options.success,
    _fail = options.fail,
    _complete = options.complete;
  if (step < 0) {
    swan.navigateBack({
      delta: Math.abs(step),
      success: function () {
        _success && _success();
      },
      fail: function (res) {
        _fail && _fail(res);
      },
      complete: function (res) {
        _complete && _complete(res);
      }
    });
  } else {
    _fail && _fail({
      errMsg: 'step不能大于或等于0'
    });
    _complete && _complete({
      errMsg: 'step不能大于或等于0'
    });
  }
}, constant_CONTAINER_NAME.BAIDU);
/* harmony default export */ var baidu_smartprogram_go = (baidu_smartprogram_go_go);
// CONCATENATED MODULE: ./node_modules/@uni/navigate/es/baidu-smartprogram/back.js


var baidu_smartprogram_back_back = common_normalize.back(function (options) {
  var _ref = options || {},
    _success = _ref.success,
    _fail = _ref.fail,
    _complete = _ref.complete;
  swan.navigateBack({
    delta: 1,
    success: function () {
      _success && _success();
    },
    fail: function (res) {
      _fail && _fail(res);
    },
    complete: function (res) {
      _complete && _complete(res);
    }
  });
}, constant_CONTAINER_NAME.BAIDU);
/* harmony default export */ var baidu_smartprogram_back = (baidu_smartprogram_back_back);
// CONCATENATED MODULE: ./node_modules/@uni/navigate/es/baidu-smartprogram/reLaunch.js


var baidu_smartprogram_reLaunch_reLaunch = common_normalize.reLaunch(function (options) {
  var url = options.url,
    _success = options.success,
    _fail = options.fail,
    _complete = options.complete;
  swan.reLaunch({
    url: url,
    success: function () {
      _success && _success();
    },
    fail: function (res) {
      _fail && _fail(res);
    },
    complete: function (res) {
      _complete && _complete(res);
    }
  });
}, constant_CONTAINER_NAME.BAIDU);
/* harmony default export */ var baidu_smartprogram_reLaunch = (baidu_smartprogram_reLaunch_reLaunch);
// CONCATENATED MODULE: ./node_modules/@uni/navigate/es/baidu-smartprogram/replace.js


var baidu_smartprogram_replace_replace = common_normalize.replace(function (options) {
  var _ref = options || {},
    url = _ref.url,
    _success = _ref.success,
    _fail = _ref.fail,
    _complete = _ref.complete;
  swan.redirectTo({
    url: url,
    success: function () {
      _success && _success();
    },
    fail: function (res) {
      _fail && _fail(res);
    },
    complete: function (res) {
      _complete && _complete(res);
    }
  });
}, constant_CONTAINER_NAME.BAIDU);
/* harmony default export */ var baidu_smartprogram_replace = (baidu_smartprogram_replace_replace);
// CONCATENATED MODULE: ./node_modules/@uni/navigate/es/baidu-smartprogram/push.js


var baidu_smartprogram_push_push = common_normalize.push(function (options) {
  var url = options.url,
    _success = options.success,
    _fail = options.fail,
    _complete = options.complete;
  swan.navigateTo({
    url: url,
    success: function () {
      _success && _success();
    },
    fail: function (res) {
      _fail && _fail(res);
    },
    complete: function (res) {
      _complete && _complete(res);
    }
  });
}, constant_CONTAINER_NAME.BAIDU);
/* harmony default export */ var baidu_smartprogram_push = (baidu_smartprogram_push_push);
// CONCATENATED MODULE: ./node_modules/@uni/navigate/es/baidu-smartprogram/switchTab.js


var baidu_smartprogram_switchTab_switchTab = common_normalize.switchTab(function (options) {
  swan.switchTab(options);
}, constant_CONTAINER_NAME.BAIDU);
/* harmony default export */ var baidu_smartprogram_switchTab = (baidu_smartprogram_switchTab_switchTab);
// CONCATENATED MODULE: ./node_modules/@uni/navigate/es/baidu-smartprogram/index.js







/* harmony default export */ var es_baidu_smartprogram = ({
  push: baidu_smartprogram_push,
  back: baidu_smartprogram_back,
  reLaunch: baidu_smartprogram_reLaunch,
  switchTab: baidu_smartprogram_switchTab,
  replace: baidu_smartprogram_replace,
  go: baidu_smartprogram_go
});
// CONCATENATED MODULE: ./node_modules/@uni/navigate/es/index.js







var es_push = function (options) {
  if (env_es["isWeb"]) {
    return navigate_es_web.push(options);
  } else if (env_es["isKuaiShouMiniProgram"]) {
    return es_kuaishou_miniprogram.push(options);
  } else if (env_es["isWeChatMiniProgram"]) {
    return es_wechat_miniprogram.push(options);
  } else if (env_es["isByteDanceMicroApp"]) {
    return es_bytedance_microapp.push(options);
  } else if (env_es["isMiniApp"]) {
    return es_ali_miniapp.push(options);
  } else if (env_es["isBaiduSmartProgram"]) {
    return es_baidu_smartprogram.push(options);
  } else {
    throw new Error('Uni API：navigate.push 暂不支持');
  }
};
var es_go = function (options) {
  if (env_es["isWeb"]) {
    return navigate_es_web.go(options);
  } else if (env_es["isKuaiShouMiniProgram"]) {
    return es_kuaishou_miniprogram.go(options);
  } else if (env_es["isWeChatMiniProgram"]) {
    return es_wechat_miniprogram.go(options);
  } else if (env_es["isByteDanceMicroApp"]) {
    return es_bytedance_microapp.go(options);
  } else if (env_es["isMiniApp"]) {
    return es_ali_miniapp.go(options);
  } else if (env_es["isBaiduSmartProgram"]) {
    return es_baidu_smartprogram.go(options);
  } else {
    throw new Error('Uni API：navigate.go 暂不支持');
  }
};
var es_back = function (options) {
  if (env_es["isWeb"]) {
    return navigate_es_web.back(options);
  } else if (env_es["isKuaiShouMiniProgram"]) {
    return es_kuaishou_miniprogram.back(options);
  } else if (env_es["isWeChatMiniProgram"]) {
    return es_wechat_miniprogram.back(options);
  } else if (env_es["isByteDanceMicroApp"]) {
    return es_bytedance_microapp.back(options);
  } else if (env_es["isMiniApp"]) {
    return es_ali_miniapp.back(options);
  } else if (env_es["isBaiduSmartProgram"]) {
    return es_baidu_smartprogram.back(options);
  } else {
    throw new Error('Uni API：navigate.back 暂不支持');
  }
};
var es_replace = function (options) {
  if (env_es["isWeb"]) {
    return navigate_es_web.replace(options);
  } else if (env_es["isKuaiShouMiniProgram"]) {
    return es_kuaishou_miniprogram.replace(options);
  } else if (env_es["isWeChatMiniProgram"]) {
    return es_wechat_miniprogram.replace(options);
  } else if (env_es["isByteDanceMicroApp"]) {
    return es_bytedance_microapp.replace(options);
  } else if (env_es["isMiniApp"]) {
    return es_ali_miniapp.replace(options);
  } else if (env_es["isBaiduSmartProgram"]) {
    return es_baidu_smartprogram.replace(options);
  } else {
    throw new Error('Uni API：navigate.replace 暂不支持');
  }
};
var es_reLaunch = function (options) {
  if (env_es["isWeb"]) {
    return navigate_es_web.reLaunch(options);
  } else if (env_es["isKuaiShouMiniProgram"]) {
    return es_kuaishou_miniprogram.reLaunch(options);
  } else if (env_es["isWeChatMiniProgram"]) {
    return es_wechat_miniprogram.reLaunch(options);
  } else if (env_es["isByteDanceMicroApp"]) {
    return es_bytedance_microapp.reLaunch(options);
  } else if (env_es["isMiniApp"]) {
    return es_ali_miniapp.reLaunch(options);
  } else if (env_es["isBaiduSmartProgram"]) {
    return es_baidu_smartprogram.reLaunch(options);
  } else {
    throw new Error('Uni API：navigate.reLaunch 暂不支持');
  }
};
var es_switchTab = function (options) {
  if (env_es["isWeb"]) {
    return navigate_es_web.switchTab(options);
  } else if (env_es["isKuaiShouMiniProgram"]) {
    return es_kuaishou_miniprogram.switchTab(options);
  } else if (env_es["isWeChatMiniProgram"]) {
    return es_wechat_miniprogram.switchTab(options);
  } else if (env_es["isByteDanceMicroApp"]) {
    return es_bytedance_microapp.switchTab(options);
  } else if (env_es["isMiniApp"]) {
    return es_ali_miniapp.switchTab(options);
  } else if (env_es["isBaiduSmartProgram"]) {
    return es_baidu_smartprogram.switchTab(options);
  } else {
    throw new Error('Uni API：navigate.switchTab 暂不支持');
  }
};
/* harmony default export */ var navigate_es = ({
  push: es_push,
  back: es_back,
  reLaunch: es_reLaunch,
  switchTab: es_switchTab,
  replace: es_replace,
  go: es_go
});
// EXTERNAL MODULE: ./node_modules/.rax-biz-component/data.json
var data = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/@alifd/meet/es/core/index.css
var core = __webpack_require__(40);

// EXTERNAL MODULE: ./node_modules/.rax-biz-component/index.css
var _rax_biz_component = __webpack_require__(41);

// CONCATENATED MODULE: ./node_modules/.rax-biz-component/miniapp-portal.js













// generated by hbs
var LOGO_SOURCE = {
  uri: "https://gw.alicdn.com/imgextra/i2/O1CN01XA2RsI1fjjzUmc2kh_!!6000000004043-2-tps-243-240.png"
};
var VERSION = "0.0.1-beta.16";
var DESCRIPTION = "";
/* harmony default export */ var miniapp_portal = (function () {
  var handleClick = function (demos) {
    if (!Array.isArray(demos)) {
      return;
    }
    if (demos.length === 1) {
      navigate_es.push({
        url: demos[0].miniappPageHref
      }).then(function () {});
    } else {
      es_action_sheet.show({
        message: '请选择要打开的 Demo',
        fullWidth: false,
        options: demos.map(function (demo) {
          return demo.title;
        }),
        onClick: function onClick(option, index) {
          navigate_es.push({
            url: demos[index].miniappPageHref
          }).then(function () {});
        }
      });
    }
  };
  return Object(rax["createElement"])(rax["Fragment"], null, Object(rax["createElement"])(page, {
    fullWidth: true,
    className: "mp-page"
  }, Object(rax["createElement"])(card, null, Object(rax["createElement"])("div", {
    className: "mp-header"
  }, Object(rax["createElement"])(rax_image_es, {
    source: LOGO_SOURCE,
    className: "mp-logo",
    mode: "widthFix"
  }), Object(rax["createElement"])("p", null, Object(rax["createElement"])(es_tag, {
    size: "small"
  }, "v", VERSION)), Object(rax["createElement"])(es_typography, {
    type: "body-1"
  }, DESCRIPTION))), Object(rax["createElement"])("div", {
    className: "mp-body"
  }, data.map(function (group) {
    var components = group.components,
      groupName = group.name;
    return Object(rax["createElement"])(card, {
      key: groupName,
      fullWidth: true,
      title: groupName
    }, Object(rax["createElement"])(es_list, null, components.map(function (component) {
      var componentName = component.componentName,
        componentPascalName = component.componentPascalName,
        componentTitle = component.title,
        demos = component.demos,
        icon = component.icon;
      var Icon = null;
      if (/:\/\//.test(icon)) {
        Icon = Object(rax["createElement"])(rax_image_es, {
          className: "mp-img-icon",
          source: {
            uri: icon
          }
        });
      } else {
        Icon = Object(rax["createElement"])(rax_icon_es, {
          className: "mp-thumb-icon mp-" + componentName
        });
      }
      return Object(rax["createElement"])(es_list.Item, {
        media: Icon,
        key: componentName,
        title: componentTitle,
        extra: componentPascalName,
        arrow: "right",
        onClick: function onClick() {
          return handleClick(demos);
        }
      });
    })));
  }))));
});
// EXTERNAL MODULE: ./node_modules/classnames/dedupe.js
var dedupe = __webpack_require__(6);
var dedupe_default = /*#__PURE__*/__webpack_require__.n(dedupe);

// CONCATENATED MODULE: ./node_modules/rax-view/es/utils/wrapDefaultProperties.js
function utils_wrapDefaultProperties_wrapDefaultProperties(View) {
  View.displayName = 'View';
  return View;
}
// EXTERNAL MODULE: ./node_modules/rax-view/es/index.css
var rax_view_es = __webpack_require__(8);
var rax_view_es_default = /*#__PURE__*/__webpack_require__.n(rax_view_es);

// CONCATENATED MODULE: ./node_modules/rax-view/es/common/index.js
var common_excluded = ["className", "style", "onFirstAppear", "onAppear"];
function es_common_extends() {
  es_common_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return es_common_extends.apply(this, arguments);
}
function common_objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}




var common_styleSheet = rax_view_es_default.a;
function common_getClassName() {
  var className = [];
  var args = arguments[0];
  var type = Object.prototype.toString.call(args).slice(8, -1).toLowerCase();
  if (type === 'string') {
    args = args.trim();
    args && className.push(args);
  } else if (type === 'array') {
    args.forEach(function (cls) {
      cls = common_getClassName(cls).trim();
      cls && className.push(cls);
    });
  } else if (type === 'object') {
    for (var k in args) {
      k = k.trim();
      if (k && args.hasOwnProperty(k) && args[k]) {
        className.push(k);
      }
    }
  }
  return className.join(' ').trim();
}
function common_getStyle(classNameExpression) {
  var cache = common_styleSheet.__cache || (common_styleSheet.__cache = {});
  var className = common_getClassName(classNameExpression);
  var classNameArr = className.split(/\s+/);
  var style = cache[className];
  if (!style) {
    style = {};
    if (classNameArr.length === 1) {
      style = common_styleSheet[classNameArr[0].trim()];
    } else {
      classNameArr.forEach(function (cls) {
        var value = common_styleSheet[cls.trim()];
        if (typeof value === 'object') {
          style = Object.assign(style, common_styleSheet[cls.trim()]);
        }
      });
    }
    cache[className] = style;
  }
  return style;
}
var common_View = Object(rax["forwardRef"])(function (props, ref) {
  var selfRef = Object(rax["useRef"])(null);
  var className = props.className,
    style = props.style,
    onFirstAppear = props.onFirstAppear,
    onAppear = props.onAppear,
    rest = common_objectWithoutPropertiesLoose(props, common_excluded);
  var handleAppear = onAppear;
  if (onFirstAppear) {
    handleAppear = function (event) {
      onAppear && onAppear(event);
      if (!selfRef.current || !selfRef.current.triggeredAppear) {
        onFirstAppear && onFirstAppear(event);
        selfRef.current = {
          triggeredAppear: true
        };
      }
    };
  }
  return Object(rax["createElement"])("div", es_common_extends({}, rest, {
    onAppear: handleAppear,
    ref: ref,
    className: dedupe_default()('rax-view-v2', className),
    style: Object.assign({}, common_getStyle(dedupe_default()('rax-view-v2', className)), style)
  }));
});
/* harmony default export */ var common = (utils_wrapDefaultProperties_wrapDefaultProperties(common_View));
// CONCATENATED MODULE: ./node_modules/rax-view/es/weex/index.js
var rax_view_es_weex_excluded = ["className", "style", "onFirstAppear", "onAppear"];
function rax_view_es_weex_extends() {
  rax_view_es_weex_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return rax_view_es_weex_extends.apply(this, arguments);
}
function rax_view_es_weex_objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}




var es_weex_styleSheet = rax_view_es_default.a;
function es_weex_getClassName() {
  var className = [];
  var args = arguments[0];
  var type = Object.prototype.toString.call(args).slice(8, -1).toLowerCase();
  if (type === 'string') {
    args = args.trim();
    args && className.push(args);
  } else if (type === 'array') {
    args.forEach(function (cls) {
      cls = es_weex_getClassName(cls).trim();
      cls && className.push(cls);
    });
  } else if (type === 'object') {
    for (var k in args) {
      k = k.trim();
      if (k && args.hasOwnProperty(k) && args[k]) {
        className.push(k);
      }
    }
  }
  return className.join(' ').trim();
}
function es_weex_getStyle(classNameExpression) {
  var cache = es_weex_styleSheet.__cache || (es_weex_styleSheet.__cache = {});
  var className = es_weex_getClassName(classNameExpression);
  var classNameArr = className.split(/\s+/);
  var style = cache[className];
  if (!style) {
    style = {};
    if (classNameArr.length === 1) {
      style = es_weex_styleSheet[classNameArr[0].trim()];
    } else {
      classNameArr.forEach(function (cls) {
        var value = es_weex_styleSheet[cls.trim()];
        if (typeof value === 'object') {
          style = Object.assign(style, es_weex_styleSheet[cls.trim()]);
        }
      });
    }
    cache[className] = style;
  }
  return style;
}
var weex_View = Object(rax["forwardRef"])(function (props, ref) {
  var selfRef = Object(rax["useRef"])(null);
  var className = props.className,
    style = props.style,
    onFirstAppear = props.onFirstAppear,
    onAppear = props.onAppear,
    rest = rax_view_es_weex_objectWithoutPropertiesLoose(props, rax_view_es_weex_excluded);
  var handleAppear = onAppear;
  if (onFirstAppear) {
    handleAppear = function (event) {
      onAppear && onAppear(event);
      if (!selfRef.current || !selfRef.current.triggeredAppear) {
        onFirstAppear && onFirstAppear(event);
        selfRef.current = {
          triggeredAppear: true
        };
      }
    };
  }
  /* global __weex_v2__ */

  var isWeexV2 = typeof __weex_v2__ === 'object';
  return Object(rax["createElement"])("div", rax_view_es_weex_extends({}, rest, {
    onAppear: handleAppear,
    ref: ref,
    className: dedupe_default()(isWeexV2 ? 'rax-view-v2' : '', className),
    style: Object.assign({}, es_weex_getStyle(dedupe_default()(isWeexV2 ? 'rax-view-v2' : '', className)), style)
  }));
});
/* harmony default export */ var rax_view_es_weex = (utils_wrapDefaultProperties_wrapDefaultProperties(weex_View));
// CONCATENATED MODULE: ./node_modules/rax-view/es/miniapp/ali.js
var ali_excluded = ["className", "style", "onFirstAppear", "onAppear"];
function ali_extends() {
  ali_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return ali_extends.apply(this, arguments);
}
function ali_objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}




var ali_styleSheet = rax_view_es_default.a;
function ali_getClassName() {
  var className = [];
  var args = arguments[0];
  var type = Object.prototype.toString.call(args).slice(8, -1).toLowerCase();
  if (type === 'string') {
    args = args.trim();
    args && className.push(args);
  } else if (type === 'array') {
    args.forEach(function (cls) {
      cls = ali_getClassName(cls).trim();
      cls && className.push(cls);
    });
  } else if (type === 'object') {
    for (var k in args) {
      k = k.trim();
      if (k && args.hasOwnProperty(k) && args[k]) {
        className.push(k);
      }
    }
  }
  return className.join(' ').trim();
}
function ali_getStyle(classNameExpression) {
  var cache = ali_styleSheet.__cache || (ali_styleSheet.__cache = {});
  var className = ali_getClassName(classNameExpression);
  var classNameArr = className.split(/\s+/);
  var style = cache[className];
  if (!style) {
    style = {};
    if (classNameArr.length === 1) {
      style = ali_styleSheet[classNameArr[0].trim()];
    } else {
      classNameArr.forEach(function (cls) {
        var value = ali_styleSheet[cls.trim()];
        if (typeof value === 'object') {
          style = Object.assign(style, ali_styleSheet[cls.trim()]);
        }
      });
    }
    cache[className] = style;
  }
  return style;
}
var ali_View = Object(rax["forwardRef"])(function (props, ref) {
  var _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    style = props.style,
    onFirstAppear = props.onFirstAppear,
    onAppear = props.onAppear,
    rest = ali_objectWithoutPropertiesLoose(props, ali_excluded); // For miniapp runtime pre-compile
  // @ts-ignore

  return Object(rax["createElement"])("view", ali_extends({}, rest, {
    onAppear: onAppear,
    onDisappear: rest.onDisappear,
    onFirstAppear: onFirstAppear,
    ref: ref,
    className: dedupe_default()('rax-view-v2', className),
    style: Object.assign({}, ali_getStyle(dedupe_default()('rax-view-v2', className)), style)
  }));
});
/* harmony default export */ var ali = (utils_wrapDefaultProperties_wrapDefaultProperties(ali_View));
// CONCATENATED MODULE: ./node_modules/rax-view/es/miniapp/wechat.js
var wechat_excluded = ["className", "style", "onFirstAppear", "onAppear", "onDisappear"];
function wechat_extends() {
  wechat_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return wechat_extends.apply(this, arguments);
}
function wechat_objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}




var wechat_styleSheet = rax_view_es_default.a;
function wechat_getClassName() {
  var className = [];
  var args = arguments[0];
  var type = Object.prototype.toString.call(args).slice(8, -1).toLowerCase();
  if (type === 'string') {
    args = args.trim();
    args && className.push(args);
  } else if (type === 'array') {
    args.forEach(function (cls) {
      cls = wechat_getClassName(cls).trim();
      cls && className.push(cls);
    });
  } else if (type === 'object') {
    for (var k in args) {
      k = k.trim();
      if (k && args.hasOwnProperty(k) && args[k]) {
        className.push(k);
      }
    }
  }
  return className.join(' ').trim();
}
function wechat_getStyle(classNameExpression) {
  var cache = wechat_styleSheet.__cache || (wechat_styleSheet.__cache = {});
  var className = wechat_getClassName(classNameExpression);
  var classNameArr = className.split(/\s+/);
  var style = cache[className];
  if (!style) {
    style = {};
    if (classNameArr.length === 1) {
      style = wechat_styleSheet[classNameArr[0].trim()];
    } else {
      classNameArr.forEach(function (cls) {
        var value = wechat_styleSheet[cls.trim()];
        if (typeof value === 'object') {
          style = Object.assign(style, wechat_styleSheet[cls.trim()]);
        }
      });
    }
    cache[className] = style;
  }
  return style;
}
var wechat_View = Object(rax["forwardRef"])(function (props, ref) {
  var selfRef = Object(rax["useRef"])(null);
  var _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    style = props.style,
    onFirstAppear = props.onFirstAppear,
    onAppear = props.onAppear,
    onDisappear = props.onDisappear,
    rest = wechat_objectWithoutPropertiesLoose(props, wechat_excluded);
  Object(rax["useEffect"])(function () {
    if (!(typeof onAppear === 'function' || typeof onFirstAppear === 'function' || typeof onDisappear === 'function')) {
      return undefined;
    }
    if (!props.id) {
      console.warn('id is required if using onAppear in wechat miniprogram!');
      return undefined;
    }
    var ele = document.getElementById(props.id);
    if (ele != null && ele._internal) {
      var observe = function () {
        selfRef.observer = ele._internal.createIntersectionObserver().relativeToViewport();
        selfRef.observer.observe("#" + props.id, function (res) {
          var _res$intersectionRati = res.intersectionRatio,
            intersectionRatio = _res$intersectionRati === void 0 ? 0 : _res$intersectionRati;
          if (intersectionRatio > 0) {
            typeof onAppear === 'function' && onAppear(res);
            if (typeof onFirstAppear === 'function') {
              if (!selfRef.triggeredAppear) {
                onFirstAppear(res);
                selfRef.triggeredAppear = true;
                if (typeof onAppear !== 'function' && typeof onDisappear !== 'function') {
                  selfRef.observer.disconnect();
                }
              }
            }
          } else {
            typeof onDisappear === 'function' && onDisappear(res);
          }
        });
        window.removeEventListener('setDataFinished', observe);
      };
      window.addEventListener('setDataFinished', observe);
    }
    return function () {
      if (selfRef.observer) {
        selfRef.observer.disconnect();
      }
    };
  }, [props.id, onAppear, onDisappear]);
  var handleAppear = onAppear;
  if (onFirstAppear) {
    handleAppear = function (event) {
      onAppear && onAppear(event);
      if (!selfRef.triggeredAppear) {
        onFirstAppear && onFirstAppear(event);
        selfRef.triggeredAppear = true;
      }
    };
  }
  return Object(rax["createElement"])("div", wechat_extends({}, rest, {
    onAppear: handleAppear,
    onDisappear: onDisappear,
    ref: ref,
    className: dedupe_default()('rax-view-v2', className),
    style: Object.assign({}, wechat_getStyle(dedupe_default()('rax-view-v2', className)), style)
  }));
});
/* harmony default export */ var wechat = (utils_wrapDefaultProperties_wrapDefaultProperties(wechat_View));
// CONCATENATED MODULE: ./node_modules/rax-view/es/index.js





var es_View = null;
if (lib["isWeb"]) {
  es_View = common;
} else if (lib["isMiniApp"]) {
  es_View = ali;
} else if (lib["isWeChatMiniProgram"]) {
  es_View = wechat;
} else if (lib["isWeex"]) {
  es_View = rax_view_es_weex;
} else {
  es_View = common;
}
/* harmony default export */ var node_modules_rax_view_es = (es_View);
// CONCATENATED MODULE: ./src/component.tsx
function component_extends() { component_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return component_extends.apply(this, arguments); }




function ExampleComponent(props, ref) {
  return Object(rax["createElement"])(node_modules_rax_view_es, {
    ref: ref,
    style: component_extends({
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: 'green'
    }, props.style)
  }, Object(rax["createElement"])(rax_image_es, {
    source: {
      uri: props.uri
    },
    style: {
      width: props.imgWidth,
      height: props.imgHeight
    }
  }), Object(rax["createElement"])(node_modules_rax_view_es, {
    style: {
      flexDirection: 'column'
    }
  }, Object(rax["createElement"])(node_modules_rax_text_es, {
    style: {
      fontSize: props.nameFontSize
    }
  }, props.name), Object(rax["createElement"])(node_modules_rax_text_es, {
    style: {
      fontSize: props.contentFontSize
    }
  }, props.content)));
}
var RefComponent = Object(rax["forwardRef"])(ExampleComponent);
RefComponent.defaultProps = {
  name: '默认标题',
  content: '默认内容',
  uri: '',
  imgHeight: 50,
  imgWidth: 50,
  nameFontSize: 10,
  contentFontSize: 10
};
RefComponent.displayName = 'RaxComponentText';
/* harmony default export */ var src_component = (RefComponent);
// CONCATENATED MODULE: ./src/index.tsx


// CONCATENATED MODULE: ./demo/basic.jsx
/**
 * @title 基础
 * @desc 这是一个基础 demo
 * @order 1
 */
/* @jsx createElement */


/* harmony default export */ var basic = (function () {
  return Object(rax["createElement"])(src_component, {
    name: "\u793A\u4F8B"
  }, "\u7EC4\u4EF6\u793A\u4F8B");
});
// CONCATENATED MODULE: ./demo/advance.jsx
/**
 * @title 高级
 * @desc 这是一个高级 demo
 * @order 2
 */
/* @jsx createElement */


/* harmony default export */ var advance = (function () {
  return Object(rax["createElement"])(src_component, {
    name: "\u793A\u4F8B"
  }, "\u9AD8\u7EA7\u7EC4\u4EF6\u793A\u4F8B");
});
// CONCATENATED MODULE: ./node_modules/.rax-biz-component/bundle.jsx
/* eslint-disable no-global-assign */






// @ts-ignore
window.__pagesRenderInfo = [{
  path: 'pages/Home/index',
  render: function render() {
    Object(rax["render"])(Object(rax["createElement"])(miniapp_portal, null), document.body, {
      driver: es
    });
  },
  // eslint-disable-next-line no-return-assign
  setDocument: function setDocument(value) {
    return document = value;
  }
}, {
  path: 'pages/RaxLowcodeTestBasic/index',
  render: function render() {
    Object(rax["render"])(Object(rax["createElement"])(basic, null), document.body, {
      driver: es
    });
  },
  // eslint-disable-next-line no-return-assign
  setDocument: function setDocument(value) {
    return document = value;
  }
}, {
  path: 'pages/RaxLowcodeTestAdvance/index',
  render: function render() {
    Object(rax["render"])(Object(rax["createElement"])(advance, null), document.body, {
      driver: es
    });
  },
  // eslint-disable-next-line no-return-assign
  setDocument: function setDocument(value) {
    return document = value;
  }
}];

/***/ })
/******/ ]); 
 }