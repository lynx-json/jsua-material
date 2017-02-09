"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.elevation = exports.colorPalette = exports.text = exports.backgroundColor = undefined;

var _text = require("./text");

var text = _interopRequireWildcard(_text);

var _colorPalette = require("./color-palette");

var colorPalette = _interopRequireWildcard(_colorPalette);

var _elevation = require("./elevation");

var _elevation2 = _interopRequireDefault(_elevation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function backgroundColor(color) {
  return function (r) {
    return r.view.style.backgroundColor = color;
  };
}

exports.backgroundColor = backgroundColor;
exports.text = text;
exports.colorPalette = colorPalette;
exports.elevation = _elevation2.default;