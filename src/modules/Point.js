'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _Polygon = require('./Polygon');

var _Polygon2 = _interopRequireDefault(_Polygon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A point used to detect collisions
 * @class
 */
class Point extends _Polygon2.default {
	/**
  * @constructor
  * @param {Number} [x = 0] The starting X coordinate
  * @param {Number} [y = 0] The starting Y coordinate
  * @param {Number} [padding = 0] The amount to pad the bounding volume when testing for potential collisions
  */
	constructor(x = 0, y = 0, padding = 0) {
		super(x, y, [[0, 0]], 0, 1, 1, padding);

		/** @private */
		this._point = true;
	}
}exports.default = Point;
;

Point.prototype.setPoints = undefined;
