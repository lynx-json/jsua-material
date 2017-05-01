"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _colorPalette = require("./color-palette");

var colorPalette = _interopRequireWildcard(_colorPalette);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var lightTheme = [colorPalette.getColor("Grey", 300), colorPalette.getColor("Grey", 100), colorPalette.getColor("Grey", 50), colorPalette.getColor("White")];

var darkTheme = [colorPalette.getColor("Black"), colorPalette.getColor("Grey", 900), colorPalette.getColor("#303030"), colorPalette.getColor("Grey", 800)];

var theme = "light";
var primary = colorPalette.getColor("Indigo");
var secondary = colorPalette.getColor("Amber");
var error = colorPalette.getColor("Red");

var colorScheme = {
  get primary() {
    return primary;
  },
  set primary(val) {
    primary = colorPalette.getColor(val);
  },
  get secondary() {
    return secondary;
  },
  set secondary(val) {
    secondary = colorPalette.getColor(val);
  },
  get error() {
    return error;
  },
  set error(val) {
    error = colorPalette.getColor(val);
  },
  get theme() {
    return theme;
  },
  set theme(val) {
    theme = val;
  },
  getThemeColors: function getThemeColors(theme) {
    if (theme === "light") {
      return lightTheme;
    } else if (theme === "dark") {
      return darkTheme;
    } else {
      throw new Error("Theme must be either 'light' or 'dark'");
    }
  },
  getColor: function getColor(name, shade) {
    return colorPalette.getColor(name, shade);
  }
};

exports.default = colorScheme;