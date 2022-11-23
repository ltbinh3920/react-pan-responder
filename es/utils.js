var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

import passiveEvents from 'detect-passive-events';

export function isFunction(target) {
	return typeof target === 'function';
}

export function isObject(target) {
	return (typeof target === 'undefined' ? 'undefined' : _typeof(target)) === 'object';
}

export function noop() {}

export function includes(arr, item) {
	return ~arr.indexOf(item);
}

export var supportPassive = passiveEvents.hasSupport;

export function createEventOptions() // maybe, we should use `passive = true` sometimes
{
	var passive = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

	/* istanbul ignore else */
	if (!supportPassive) return true;
	/* istanbul ignore next */
	return { capture: true, passive: passive };
}

export function getEventNodes(event) {
	if (event.path) return event.path;

	var pathArr = [];
	var el = event.target;
	while (el) {
		pathArr.push(el);
		el = el.parentNode;
	}
	return pathArr;
}