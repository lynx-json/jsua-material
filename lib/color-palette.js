"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getColor = getColor;

var _colorPalette = require("./color-palette.json");

var _colorPalette2 = _interopRequireDefault(_colorPalette);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getPercent(shade) {
  switch (shade.toString()) {
    case "50":
      return 0.9;
    case "100":
      return 0.7;
    case "200":
      return 0.5;
    case "300":
      return 0.333;
    case "400":
      return 0.166;
    case "500":
      return 0;
    case "600":
      return -0.125;
    case "700":
      return -0.25;
    case "800":
      return -0.375;
    case "900":
      return -.5;
    case "A100":
      return 0.7;
    case "A200":
      return 0.5;
    case "A400":
      return 0.166;
    case "A700":
      return -0.25;
    default:
      throw new Error("Unknown shade value: " + shade);
  }
}

function shadeColor(color, shade) {
  var percent = getPercent(shade);
  var f = parseInt(color.slice(1), 16),
      t = percent < 0 ? 0 : 255,
      p = percent < 0 ? percent * -1 : percent,
      R = f >> 16,
      G = f >> 8 & 0x00FF,
      B = f & 0x0000FF;
  return "#" + (0x1000000 + (Math.round((t - R) * p) + R) * 0x10000 + (Math.round((t - G) * p) + G) * 0x100 + (Math.round((t - B) * p) + B)).toString(16).slice(1);
}

function getColor(name, shade) {
  if (name === "White") return "#FFFFFF";
  if (name === "Black") return "#000000";

  shade = shade || 500;
  var color;

  var hue = _colorPalette2.default[name];

  if (hue) {
    color = hue[shade];
  } else if (name.startsWith("#")) {
    color = shadeColor(name, shade);
  }

  if (!color) {
    throw new Error("Unable to get requested color: " + name);
  }

  return color;
}