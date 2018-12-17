"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

var getUnit = function getUnit(units) {
  return function (symbol) {
    var unit = units[symbol];

    if (typeof unit === 'undefined') {
      var possibleUnits = Object.keys(units).join(',');
      var errorMessage = "".concat(symbol, "' is not a unit");
      var hint = "possible units: [".concat(possibleUnits, "]");
      throw new Error("'".concat(errorMessage, ", ").concat(hint));
    }

    return unit;
  };
};

var _default = getUnit;
exports.default = _default;