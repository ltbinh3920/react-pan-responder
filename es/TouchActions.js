export default {
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
};