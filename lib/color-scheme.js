"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.colorScheme = undefined;

var _colorPalette = require("./color-palette");

var colorPalette = _interopRequireWildcard(_colorPalette);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var lightTheme = [colorPalette.getColor("Grey", 300), colorPalette.getColor("Grey", 100), colorPalette.getColor("Grey", 50), colorPalette.getColor("White")];

var darkTheme = [colorPalette.getColor("Black"), colorPalette.getColor("Grey", 900), colorPalette.getColor("#303030"), colorPalette.getColor("Grey", 800)];

var theme = lightTheme;
var primary = theme[1];
var accent = theme[0];
var error = colorPalette.getColor("Red");

var colorScheme = exports.colorScheme = {
  get theme() {
    return theme;
  },
  set theme(val) {
    if (val === "light") {
      theme = lightTheme;
    } else if (val === "dark") {
      theme = darkTheme;
    } else {
      throw new Error("Theme must be either 'light' or 'dark'");
    }
  },
  get primary() {
    return primary;
  },
  set primary(val) {
    primary = colorPalette.getColor(val);
  },
  get accent() {
    return accent;
  },
  set accent(val) {
    accent = colorPalette.getColor(val);
  },
  get error() {
    return error;
  },
  set error(val) {
    error = colorPalette.getColor(val);
  }
};