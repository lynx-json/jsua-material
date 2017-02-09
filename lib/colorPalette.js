"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getColor = getColor;

var _colorPalette = require("./colorPalette.json");

var colors = _interopRequireWildcard(_colorPalette);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function getColor(name, number) {
  return colors[name][number];
}