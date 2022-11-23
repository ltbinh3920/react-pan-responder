"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var list = [];

var getChangedTouchId = function getChangedTouchId(ev) {
	return ev.changedTouches ? ev.changedTouches[0].identifier : 0;
};

exports.default = {
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
};