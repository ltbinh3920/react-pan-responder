var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import { Component } from 'react';
import PropTypes from 'prop-types';
import TouchActions from './TouchActions';
import delegation from './delegation';
import { isFunction, isObject, noop } from './utils';

var funcOrBool = PropTypes.oneOfType([PropTypes.func, PropTypes.bool]);

var TouchActionTypes = Object.keys(TouchActions);

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
			this._removeListener = delegation.addListener(this.dom, this._handlers);
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
}(Component);

PanResponder.propTypes = {
	children: PropTypes.func.isRequired,
	touchAction: PropTypes.oneOf(TouchActionTypes),
	innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({ current: PropTypes.object })]),
	onStartShouldSetCapture: funcOrBool,
	onStartShouldSet: funcOrBool,
	onMoveShouldSetCapture: funcOrBool,
	onMoveShouldSet: funcOrBool,
	onTerminationRequest: funcOrBool,
	onStart: PropTypes.func,
	onGrant: PropTypes.func,
	onReject: PropTypes.func,
	onMove: PropTypes.func,
	onEnd: PropTypes.func,
	onRelease: PropTypes.func,
	onTerminate: PropTypes.func
};
PanResponder.defaultProps = {
	onStart: noop,
	onGrant: noop,
	onMove: noop,
	onRelease: noop,
	onEnd: noop,
	onReject: noop,
	onTerminate: noop,
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
	this._removeListener = noop;

	this.getDOMNodeByRef = function (dom) {
		var innerRef = _this2.props.innerRef;

		_this2.dom = dom;
		if (isFunction(innerRef)) innerRef(dom);else if (isObject(innerRef)) innerRef.current = dom;
	};

	this._handleShouldStartCapture = function () {
		var should = _this2.props.onStartShouldSetCapture;

		return isFunction(should) ? should.apply(undefined, arguments) : should;
	};

	this._handleShouldStart = function () {
		var should = _this2.props.onStartShouldSet;

		return isFunction(should) ? should.apply(undefined, arguments) : should;
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

		return isFunction(should) ? should.apply(undefined, arguments) : should;
	};

	this._handleShouldMove = function () {
		var should = _this2.props.onMoveShouldSet;

		return isFunction(should) ? should.apply(undefined, arguments) : should;
	};

	this._handleMove = function (ev, gestureState) {
		var _props2 = _this2.props,
		    onMove = _props2.onMove,
		    touchAction = _props2.touchAction;

		if (_this2._isTouchAction === null) {
			_this2._isTouchAction = TouchActions[touchAction](gestureState);
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

		return isFunction(should) ? should.apply(undefined, arguments) : should;
	};
};

export default PanResponder;