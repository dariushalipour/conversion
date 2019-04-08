"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _getUnit = _interopRequireDefault(require("./getUnit"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var units = {
  'm': 1e+0,
  'meter': 1e+0,
  'in': 0.0254,
  'inch': 0.0254,
  'ft': 0.0254 * 12,
  'feet': 0.0254 * 12
};
var getUnit = (0, _getUnit["default"])(units);

var convert = function convert() {
  var from = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'm';
  var to = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'm';
  return function () {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    return getUnit(from) / getUnit(to) * value;
  };
};

var _default = convert;
exports["default"] = _default;