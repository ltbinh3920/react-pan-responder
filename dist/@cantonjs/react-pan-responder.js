(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("React"));
	else if(typeof define === 'function' && define.amd)
		define(["React"], factory);
	else if(typeof exports === 'object')
		exports["ReactPanResponder"] = factory(require("React"));
	else
		root["ReactPanResponder"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["d"] = isFunction;
/* harmony export (immutable) */ __webpack_exports__["e"] = isObject;
/* harmony export (immutable) */ __webpack_exports__["f"] = noop;
/* harmony export (immutable) */ __webpack_exports__["c"] = includes;
/* unused harmony export supportPassive */
/* harmony export (immutable) */ __webpack_exports__["a"] = createEventOptions;
/* harmony export (immutable) */ __webpack_exports__["b"] = getEventNodes;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_detect_passive_events__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_detect_passive_events___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_detect_passive_events__);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };



function isFunction(target) {
	return typeof target === 'function';
}

function isObject(target) {
	return (typeof target === 'undefined' ? 'undefined' : _typeof(target)) === 'object';
}

function noop() {}

function includes(arr, item) {
	return ~arr.indexOf(item);
}

var supportPassive = __WEBPACK_IMPORTED_MODULE_0_detect_passive_events___default.a.hasSupport;

function createEventOptions() // maybe, we should use `passive = true` sometimes
{
	var passive = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

	/* istanbul ignore else */
	if (!supportPassive) return true;
	/* istanbul ignore next */
	return { capture: true, passive: passive };
}

function getEventNodes(event) {
	if (event.path) return event.path;

	var pathArr = [];
	var el = event.target;
	while (el) {
		pathArr.push(el);
		el = el.parentNode;
	}
	return pathArr;
}

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__TouchActions__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__delegation__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils__ = __webpack_require__(0);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var funcOrBool = __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool]);

var TouchActionTypes = Object.keys(__WEBPACK_IMPORTED_MODULE_2__TouchActions__["a" /* default */]);

var PanResponder = function (_Component) {
	_inherits(PanResponder, _Component);

	function PanResponder() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, PanResponder);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PanResponder.__proto__ || Object.getPrototypeOf(PanResponder)).call.apply(_ref, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(PanResponder, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this._handlers = {
				onShouldStartCapture: this._handleShouldStartCapture,
				onShouldStart: this._handleShouldStart,
				onShouldMoveCapture: this._handleShouldMoveCapture,
				onShouldMove: this._handleShouldMove,
				onGrant: this._handleGrant,
				onReject: this._handleReject,
				onStart: this._handleStart,
				onMove: this._handleMove,
				onRelease: this._handleRelease,
				onEnd: this._handleEnd,
				onRequestTerminate: this._handleRequestTerminate,
				onTerminate: this._handleTerminate
			};
			this._removeListener = __WEBPACK_IMPORTED_MODULE_3__delegation__["a" /* default */].addListener(this.dom, this._handlers);
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			this._removeListener();
		}
	}, {
		key: 'render',
		value: function render() {
			return this.props.children(this.getDOMNodeByRef);
		}
	}]);

	return PanResponder;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

PanResponder.propTypes = {
	children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
	touchAction: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf(TouchActionTypes),
	innerRef: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({ current: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object })]),
	onStartShouldSetCapture: funcOrBool,
	onStartShouldSet: funcOrBool,
	onMoveShouldSetCapture: funcOrBool,
	onMoveShouldSet: funcOrBool,
	onTerminationRequest: funcOrBool,
	onStart: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
	onGrant: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
	onReject: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
	onMove: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
	onEnd: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
	onRelease: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
	onTerminate: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func
};
PanResponder.defaultProps = {
	onStart: __WEBPACK_IMPORTED_MODULE_4__utils__["f" /* noop */],
	onGrant: __WEBPACK_IMPORTED_MODULE_4__utils__["f" /* noop */],
	onMove: __WEBPACK_IMPORTED_MODULE_4__utils__["f" /* noop */],
	onRelease: __WEBPACK_IMPORTED_MODULE_4__utils__["f" /* noop */],
	onEnd: __WEBPACK_IMPORTED_MODULE_4__utils__["f" /* noop */],
	onReject: __WEBPACK_IMPORTED_MODULE_4__utils__["f" /* noop */],
	onTerminate: __WEBPACK_IMPORTED_MODULE_4__utils__["f" /* noop */],
	onStartShouldSetCapture: false,
	onStartShouldSet: false,
	onMoveShouldSetCapture: false,
	onMoveShouldSet: false,
	onTerminationRequest: false,
	touchAction: 'none'
};

var _initialiseProps = function _initialiseProps() {
	var _this2 = this;

	this._isTouchAction = null;
	this._removeListener = __WEBPACK_IMPORTED_MODULE_4__utils__["f" /* noop */];

	this.getDOMNodeByRef = function (dom) {
		var innerRef = _this2.props.innerRef;

		_this2.dom = dom;
		if (__WEBPACK_IMPORTED_MODULE_4__utils__["d" /* isFunction */](innerRef)) innerRef(dom);else if (__WEBPACK_IMPORTED_MODULE_4__utils__["e" /* isObject */](innerRef)) innerRef.current = dom;
	};

	this._handleShouldStartCapture = function () {
		var should = _this2.props.onStartShouldSetCapture;

		return __WEBPACK_IMPORTED_MODULE_4__utils__["d" /* isFunction */](should) ? should.apply(undefined, arguments) : should;
	};

	this._handleShouldStart = function () {
		var should = _this2.props.onStartShouldSet;

		return __WEBPACK_IMPORTED_MODULE_4__utils__["d" /* isFunction */](should) ? should.apply(undefined, arguments) : should;
	};

	this._handleGrant = function () {
		var onGrant = _this2.props.onGrant;

		onGrant.apply(undefined, arguments);
	};

	this._handleStart = function () {
		var _props;

		(_props = _this2.props).onStart.apply(_props, arguments);
	};

	this._handleShouldMoveCapture = function () {
		var should = _this2.props.onMoveShouldSetCapture;

		return __WEBPACK_IMPORTED_MODULE_4__utils__["d" /* isFunction */](should) ? should.apply(undefined, arguments) : should;
	};

	this._handleShouldMove = function () {
		var should = _this2.props.onMoveShouldSet;

		return __WEBPACK_IMPORTED_MODULE_4__utils__["d" /* isFunction */](should) ? should.apply(undefined, arguments) : should;
	};

	this._handleMove = function (ev, gestureState) {
		var _props2 = _this2.props,
		    onMove = _props2.onMove,
		    touchAction = _props2.touchAction;

		if (_this2._isTouchAction === null) {
			_this2._isTouchAction = __WEBPACK_IMPORTED_MODULE_2__TouchActions__["a" /* default */][touchAction](gestureState);
		}
		if (!_this2._isTouchAction) {
			ev.cancelable !== false && ev.preventDefault();
			onMove(ev, gestureState);
		}
	};

	this._handleEnd = function () {
		var _props3;

		(_props3 = _this2.props).onEnd.apply(_props3, arguments);
	};

	this._handleRelease = function () {
		var _props4;

		_this2._isTouchAction = null;
		(_props4 = _this2.props).onRelease.apply(_props4, arguments);
	};

	this._handleReject = function () {
		var _props5;

		(_props5 = _this2.props).onReject.apply(_props5, arguments);
	};

	this._handleTerminate = function () {
		var _props6;

		(_props6 = _this2.props).onTerminate.apply(_props6, arguments);
	};

	this._handleRequestTerminate = function () {
		var should = _this2.props.onTerminationRequest;

		return __WEBPACK_IMPORTED_MODULE_4__utils__["d" /* isFunction */](should) ? should.apply(undefined, arguments) : should;
	};
};

/* harmony default export */ __webpack_exports__["default"] = (PanResponder);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

if (false) {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = require('./factoryWithTypeCheckers')(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(4)();
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



var emptyFunction = __webpack_require__(5);
var invariant = __webpack_require__(6);
var ReactPropTypesSecret = __webpack_require__(7);

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    invariant(
      false,
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (false) {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
	none: function none() {
		return false;
	},
	x: function x(_ref) {
		var dx = _ref.dx,
		    dy = _ref.dy;
		return Math.abs(dx) > Math.abs(dy);
	},
	y: function y(_ref2) {
		var dx = _ref2.dx,
		    dy = _ref2.dy;
		return Math.abs(dx) < Math.abs(dy);
	}
});

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__grantedTouchIds__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__WeakMapPolyfill__ = __webpack_require__(12);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };





var eventOptions = __WEBPACK_IMPORTED_MODULE_1__utils__["a" /* createEventOptions */]();

var lastStartTimeStamp = 0;
var lastEventType = void 0;
var lastMoveTimeStamp = 0;
var isTouch = false;
var hasWindowListener = false;
var grantedNode = null;

var gestureState = {
	// Useful for debugging
	stateID: Math.random()
};

var getDefaultGestureState = function getDefaultGestureState() {
	return {
		dx: 0,
		dy: 0,
		moveX: 0,
		moveY: 0,
		vx: 0,
		vy: 0,
		x0: 0,
		y0: 0,
		numberActiveTouches: 0
	};
};

var listeners = new __WEBPACK_IMPORTED_MODULE_2__WeakMapPolyfill__["a" /* default */]();

var makeSetGrantedNode = function makeSetGrantedNode(action) {
	return function (ev) {
		var tempGrantedNodes = [];
		var findAndExec = function findAndExec(arr, methodName) {
			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {
				for (var _iterator = arr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var node = _step.value;

					if (grantedNode !== node && listeners.has(node)) {
						var handler = listeners.get(node);
						if (handler[methodName](ev, gestureState)) {
							/* istanbul ignore else */
							if (!__WEBPACK_IMPORTED_MODULE_1__utils__["c" /* includes */](tempGrantedNodes, node)) {
								if (!grantedNode) grantedNode = node;else tempGrantedNodes.push(node);
								handler.onGrant(ev, gestureState);
							}
						}
					}
				}
			} catch (err) {
				_didIteratorError = true;
				_iteratorError = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion && _iterator.return) {
						_iterator.return();
					}
				} finally {
					if (_didIteratorError) {
						throw _iteratorError;
					}
				}
			}
		};

		var nodes = __WEBPACK_IMPORTED_MODULE_1__utils__["b" /* getEventNodes */](ev);
		findAndExec(nodes.reverse(), 'onShould' + action + 'Capture');
		findAndExec(nodes.reverse(), 'onShould' + action);

		if (tempGrantedNodes.length) {
			tempGrantedNodes.forEach(function (node) {
				var grantedHandler = listeners.get(grantedNode);
				var handler = listeners.get(node);
				var shouldTerminate = grantedHandler.onRequestTerminate(ev, gestureState);
				if (shouldTerminate) {
					grantedHandler.onTerminate(ev, gestureState);
					grantedNode = node;
				} else {
					handler.onReject(ev, gestureState);
				}
			});
		}

		return grantedNode;
	};
};

var setGrantedNodeOnStart = makeSetGrantedNode('Start');
var setGrantedNodeOnMove = makeSetGrantedNode('Move');

var makeGetTouchInfo = function makeGetTouchInfo(ev) {
	var touch = __WEBPACK_IMPORTED_MODULE_0__grantedTouchIds__["a" /* default */].getTouch(ev);
	return function (key) {
		return touch ? touch[key] : 0;
	};
};

var getNumberActiveTouches = function getNumberActiveTouches(ev) {
	return ev.touches ? ev.touches.length : ev.type === 'mouseup' ? 0 : 1;
};

var handleStart = function handleStart(ev) {
	// Filter out mouse events that are not left clicks
	if (ev.button === 1 || ev.button === 2) return;

	var type = ev.type,
	    _ev$timeStamp = ev.timeStamp,
	    timeStamp = _ev$timeStamp === undefined ? 0 : _ev$timeStamp;

	var lastDeltaTime = timeStamp - lastStartTimeStamp;
	var lastTypeIsTouch = lastEventType === 'touchstart';

	isTouch = type === 'touchstart';
	lastStartTimeStamp = timeStamp;
	lastEventType = type;

	if (lastDeltaTime < 300 && type === 'mousedown' && lastTypeIsTouch) return;

	if (!isTouch) {
		window.addEventListener('mousemove', handleMove, eventOptions);
		window.addEventListener('mouseup', handleEnd, eventOptions);
	}

	var getTouch = makeGetTouchInfo(ev);
	var numberActiveTouches = getNumberActiveTouches(ev);

	if (grantedNode && listeners.has(grantedNode) && numberActiveTouches > 1) {
		gestureState.numberActiveTouches = numberActiveTouches;

		var nodes = __WEBPACK_IMPORTED_MODULE_1__utils__["b" /* getEventNodes */](ev);

		/* istanbul ignore else */
		if (__WEBPACK_IMPORTED_MODULE_1__utils__["c" /* includes */](nodes, grantedNode)) {
			__WEBPACK_IMPORTED_MODULE_0__grantedTouchIds__["a" /* default */].push(ev);
			listeners.get(grantedNode).onStart(ev, gestureState);
		}
		return;
	}

	gestureState = _extends({}, gestureState, getDefaultGestureState(), {
		x0: getTouch('pageX'),
		y0: getTouch('pageY'),
		numberActiveTouches: numberActiveTouches
	});

	grantedNode = setGrantedNodeOnStart(ev);

	if (grantedNode) {
		__WEBPACK_IMPORTED_MODULE_0__grantedTouchIds__["a" /* default */].push(ev);
		listeners.get(grantedNode).onStart(ev, gestureState);
	}
};

var handleMove = function handleMove(ev) {
	/* istanbul ignore if */
	if (isTouch && ev.type !== 'touchmove') return;

	/* istanbul ignore if */
	if (!gestureState.numberActiveTouches) return;

	// ev.timeStamp is not accurate
	var timeStamp = Date.now();
	var deltaTime = timeStamp - lastMoveTimeStamp;

	/* istanbul ignore if */
	if (!deltaTime) return;

	var getTouch = makeGetTouchInfo(ev);
	var numberActiveTouches = getNumberActiveTouches(ev);

	var _gestureState = gestureState,
	    x0 = _gestureState.x0,
	    y0 = _gestureState.y0;

	var moveX = getTouch('pageX');
	var moveY = getTouch('pageY');
	var nextDX = moveX - x0;
	var nextDY = moveY - y0;

	gestureState.moveX = moveX;
	gestureState.moveY = moveY;
	gestureState.vx = (nextDX - gestureState.dx) / deltaTime;
	gestureState.vy = (nextDY - gestureState.dy) / deltaTime;
	gestureState.dx = nextDX;
	gestureState.dy = nextDY;
	gestureState.numberActiveTouches = numberActiveTouches;

	lastMoveTimeStamp = timeStamp;

	var hasGranted = !!grantedNode;

	grantedNode = setGrantedNodeOnMove(ev);

	if (grantedNode) {
		if (!hasGranted) __WEBPACK_IMPORTED_MODULE_0__grantedTouchIds__["a" /* default */].push(ev);
		listeners.get(grantedNode).onMove(ev, gestureState);
	}
};

var handleEnd = function handleEnd(ev) {
	if (!isTouch) {
		window.removeEventListener('mousemove', handleMove, eventOptions);
		window.removeEventListener('mouseup', handleEnd, eventOptions);
	}

	/* istanbul ignore if */
	if (isTouch && ev.type !== 'touchend' && ev.type !== 'touchcancel') return;

	/* istanbul ignore if */
	if (!gestureState.numberActiveTouches) return;

	var handler = void 0;
	var isCancel = isTouch && ev.type === 'touchcancel';
	var numberActiveTouches = getNumberActiveTouches(ev);

	if (grantedNode && listeners.has(grantedNode)) {
		__WEBPACK_IMPORTED_MODULE_0__grantedTouchIds__["a" /* default */].pull(ev);
		handler = listeners.get(grantedNode);
		gestureState.numberActiveTouches = numberActiveTouches;
		handler[isCancel ? 'onTerminate' : 'onEnd'](ev, gestureState);
	}

	if (!numberActiveTouches) isTouch = false;

	if (!__WEBPACK_IMPORTED_MODULE_0__grantedTouchIds__["a" /* default */].getCount()) {
		grantedNode = null;
		handler && handler.onRelease(ev, gestureState);

		gestureState = _extends({}, gestureState, getDefaultGestureState());
	}
};

var ensureWindowListener = function ensureWindowListener() {
	hasWindowListener = true;
	window.addEventListener('mousedown', handleStart, eventOptions);
	window.addEventListener('touchstart', handleStart, eventOptions);
	window.addEventListener('touchmove', handleMove, eventOptions);
	window.addEventListener('touchend', handleEnd, eventOptions);
	window.addEventListener('touchcancel', handleEnd, eventOptions);
};

/* harmony default export */ __webpack_exports__["a"] = ({
	addListener: function addListener(dom, handlers) {
		if (!hasWindowListener) ensureWindowListener();
		if (!dom || listeners.has(dom)) return __WEBPACK_IMPORTED_MODULE_1__utils__["f" /* noop */];
		listeners.set(dom, handlers);
		return function () {
			return listeners.delete(dom);
		};
	},


	// Useful for testing
	destroy: function destroy() {
		hasWindowListener = false;
		lastStartTimeStamp = 0;
		lastMoveTimeStamp = 0;
		isTouch = false;
		grantedNode = null;
		gestureState = { stateID: Math.random() };
		__WEBPACK_IMPORTED_MODULE_0__grantedTouchIds__["a" /* default */].clear();

		window.removeEventListener('mousedown', handleStart, eventOptions);
		window.removeEventListener('mousemove', handleMove, eventOptions);
		window.removeEventListener('mouseup', handleEnd, eventOptions);
		window.removeEventListener('touchstart', handleStart, eventOptions);
		window.removeEventListener('touchmove', handleMove, eventOptions);
		window.removeEventListener('touchend', handleEnd, eventOptions);
		window.removeEventListener('touchcancel', handleEnd, eventOptions);
	}
});

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var list = [];

var getChangedTouchId = function getChangedTouchId(ev) {
	return ev.changedTouches ? ev.changedTouches[0].identifier : 0;
};

/* harmony default export */ __webpack_exports__["a"] = ({
	push: function push(ev) {
		list.push(getChangedTouchId(ev));
	},
	pull: function pull(ev) {
		/* istanbul ignore next */
		if (ev.touches && !ev.touches.length) {
			this.clear();
			return;
		}

		var touchId = getChangedTouchId(ev);
		var index = list.indexOf(touchId);

		/* istanbul ignore else */
		if (index > -1) list.splice(index, 1);
	},
	clear: function clear() {
		list.length = 0;
	},
	getCount: function getCount() {
		return list.length;
	},
	getTouch: function getTouch(ev) {
		var touches = ev.touches;

		if (!touches) return ev;
		if (!list.length) return ev.touches[0];
		var length = touches.length;

		for (var i = 0; i < length; i++) {
			var current = touches[i];

			/* istanbul ignore else */
			if (current && current.identifier === list[0]) return current;
		}
	}
});

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

// adapted from https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
var detectPassiveEvents = {
  update: function update() {
    if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && typeof window.addEventListener === 'function' && typeof Object.defineProperty === 'function') {
      var passive = false;
      var options = Object.defineProperty({}, 'passive', {
        get: function get() {
          passive = true;
        }
      });
      window.addEventListener('test', null, options);

      detectPassiveEvents.hasSupport = passive;
    }
  }
};

detectPassiveEvents.update();
exports.default = detectPassiveEvents;

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var $id = Symbol('id');

var supportWeakMap = typeof WeakMap === 'function';

/* harmony default export */ __webpack_exports__["a"] = (supportWeakMap ? WeakMap : function () {
	function WeakMapPolyfill() {
		_classCallCheck(this, WeakMapPolyfill);

		this._id = 1;
		this._maps = {};
	}

	_createClass(WeakMapPolyfill, [{
		key: 'set',
		value: function set(object, value) {
			if (!object[$id]) {
				object[$id] = this._id++;
			}
			this._maps[object[$id]] = value;
		}
	}, {
		key: 'has',
		value: function has(object) {
			var id = object[$id];
			return !!id && this._maps.hasOwnProperty(id);
		}
	}, {
		key: 'get',
		value: function get(object) {
			return this.has(object) ? this._maps[object[$id]] : undefined;
		}
	}, {
		key: 'delete',
		value: function _delete(object) {
			if (!this.has(object)) return false;
			delete this._maps[object[$id]];
			return true;
		}
	}]);

	return WeakMapPolyfill;
}());

/***/ })
/******/ ]);
});
//# sourceMappingURL=react-pan-responder.js.map