'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var $id = Symbol('id');

var supportWeakMap = typeof WeakMap === 'function';

exports.default = supportWeakMap ? WeakMap : function () {
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
}();