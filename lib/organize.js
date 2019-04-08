"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var organize = function organize(units) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return function (value) {
    var _options$strict = options.strict,
        strict = _options$strict === void 0 ? false : _options$strict;
    var groups = [];
    var groupIndex = 0;
    var remainder = value;

    do {
      var unit = units[groupIndex];
      var groupValue = unit ? remainder % unit : remainder;
      groups.push(groupValue);
      remainder = (remainder - groupValue) / (unit || 1);
      groupIndex += 1;
    } while (remainder > 0);

    if (strict) {
      var remainingGroups = units.length + 1 - groups.length;

      for (var i = 0; i < remainingGroups; i++) {
        groups.push(0);
      }
    }

    return groups.reverse();
  };
};

var _default = organize;
exports["default"] = _default;