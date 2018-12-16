"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.organize = void 0;

var _organize2 = _interopRequireDefault(require("./organize"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var organize = _organize2.default;
exports.organize = organize;
var _default = {
  organize: organize
};
exports.default = _default;