"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var combine = function combine(units) {
  return function (value) {
    var groups = value;
    var output = 0;
    var times = 1;
    var unitIndex = -2;

    for (var i = groups.length - 1; i >= 0; --i) {
      var partAmount = groups[i];
      times *= units[++unitIndex] || 1;
      output += partAmount * times;
    }

    return output;
  };
};

var _default = combine;
exports["default"] = _default;