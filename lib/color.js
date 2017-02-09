"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.primaryText = primaryText;
exports.secondaryText = secondaryText;
exports.disabledText = disabledText;

var _colorPalette = require("./color-palette");

var colorPalette = _interopRequireWildcard(_colorPalette);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function primaryText(backgroundColor) {
  backgroundColor = backgroundColor || "#ffffff";
  var textColor = colorPalette.primaryText(backgroundColor);

  return function (r) {
    r.view.style.color = textColor.color;
    r.view.style.opacity = textColor.opacity;
  };
};

function secondaryText(backgroundColor) {
  backgroundColor = backgroundColor || "#ffffff";
  var textColor = colorPalette.secondaryText(backgroundColor);

  return function (r) {
    r.view.style.color = textColor.color;
    r.view.style.opacity = textColor.opacity;
  };
};

function disabledText(backgroundColor) {
  backgroundColor = backgroundColor || "#ffffff";
  var textColor = colorPalette.disabledText(backgroundColor);

  return function (r) {
    r.view.style.color = textColor.color;
    r.view.style.opacity = textColor.opacity;
  };
};