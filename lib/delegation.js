'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _grantedTouchIds = require('./grantedTouchIds');

var _grantedTouchIds2 = _interopRequireDefault(_grantedTouchIds);

var _utils = require('./utils');

var _WeakMapPolyfill = require('./WeakMapPolyfill');

var _WeakMapPolyfill2 = _interopRequireDefault(_WeakMapPolyfill);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var eventOptions = (0, _utils.createEventOptions)();

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

var listeners = new _WeakMapPolyfill2.default();

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
							if (!(0, _utils.includes)(tempGrantedNodes, node)) {
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

		var nodes = (0, _utils.getEventNodes)(ev);
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
	var touch = _grantedTouchIds2.default.getTouch(ev);
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

		var nodes = (0, _utils.getEventNodes)(ev);

		/* istanbul ignore else */
		if ((0, _utils.includes)(nodes, grantedNode)) {
			_grantedTouchIds2.default.push(ev);
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
		_grantedTouchIds2.default.push(ev);
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
		if (!hasGranted) _grantedTouchIds2.default.push(ev);
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
		_grantedTouchIds2.default.pull(ev);
		handler = listeners.get(grantedNode);
		gestureState.numberActiveTouches = numberActiveTouches;
		handler[isCancel ? 'onTerminate' : 'onEnd'](ev, gestureState);
	}

	if (!numberActiveTouches) isTouch = false;

	if (!_grantedTouchIds2.default.getCount()) {
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

exports.default = {
	addListener: function addListener(dom, handlers) {
		if (!hasWindowListener) ensureWindowListener();
		if (!dom || listeners.has(dom)) return _utils.noop;
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
		_grantedTouchIds2.default.clear();

		window.removeEventListener('mousedown', handleStart, eventOptions);
		window.removeEventListener('mousemove', handleMove, eventOptions);
		window.removeEventListener('mouseup', handleEnd, eventOptions);
		window.removeEventListener('touchstart', handleStart, eventOptions);
		window.removeEventListener('touchmove', handleMove, eventOptions);
		window.removeEventListener('touchend', handleEnd, eventOptions);
		window.removeEventListener('touchcancel', handleEnd, eventOptions);
	}
};