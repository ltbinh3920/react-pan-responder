'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.supportPassive = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.isFunction = isFunction;
exports.isObject = isObject;
exports.noop = noop;
exports.includes = includes;
exports.createEventOptions = createEventOptions;
exports.getEventNodes = getEventNodes;

var _detectPassiveEvents = require('detect-passive-events');

var _detectPassiveEvents2 = _interopRequireDefault(_detectPassiveEvents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var supportPassive = exports.supportPassive = _detectPassiveEvents2.default.hasSupport;

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