"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = background;

var _color = require("./color");

var _color2 = _interopRequireDefault(_color);

var _util = require("./util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function background(backgroundColor, shade) {
  return function (el) {
    return el.style.backgroundColor = _color2.default.getColor(backgroundColor, shade);
  };
}

background.primary = function primary(shade) {
  return background(_color2.default.primary, shade);
};

background.accent = function accent(shade) {
  shade = shade || "A200";
  return background(_color2.default.secondary, shade);
};

background.statusBar = function (theme) {
  var themeColors = (0, _util.getTheme)(theme);
  return background(themeColors[0]);
};

background.appBar = function (theme) {
  var themeColors = (0, _util.getTheme)(theme);
  return background(themeColors[1]);
};

background.main = function (theme) {
  var themeColors = (0, _util.getTheme)(theme);
  return background(themeColors[2]);
};

background.card = function (theme) {
  var themeColors = (0, _util.getTheme)(theme);
  return background(themeColors[3]);
};

background.menu = function (theme) {
  var themeColors = (0, _util.getTheme)(theme);
  return background(themeColors[3]);
};

background.dialog = background.card;
background.hover = background.appBar;