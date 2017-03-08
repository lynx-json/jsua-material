"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.wrapChildren = wrapChildren;
exports.getDividerStyle = getDividerStyle;

var _colorPalette = require("./color-palette");

var colorPalette = _interopRequireWildcard(_colorPalette);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function wrapChildren(element) {
  if (element.children.length === 1 && element.children[0].role === "presentation") {
    return element.children[0];
  }

  var wrapper = document.createElement("div");

  var children = [];
  for (var i = 0, max = element.childNodes.length; i < max; i++) {
    children.push(element.childNodes[i]);
  }

  children.forEach(function (child) {
    wrapper.appendChild(child);
  });

  element.appendChild(wrapper);
  return wrapper;
}

function getDividerStyle(backgroundColor) {
  var dividerColor = colorPalette.divider(backgroundColor);
  if (dividerColor.color === "#ffffff") {
    return "1px solid rgba(255, 255, 255, " + dividerColor.opacity + ")";
  } else {
    return "1px solid rgba(0, 0, 0, " + dividerColor.opacity + ")";
  }
}