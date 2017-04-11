"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _colorPalette = require("./color-palette");

var colorPalette = _interopRequireWildcard(_colorPalette);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var primary = colorPalette.getColor("Indigo"); // material.color.primary = "Indigo";
// material.color.secondary = "Yellow";
// material.color.theme = "light";


var colorScheme = {
  get primary() {
    return primary;
  },
  set primary(val) {
    primary = colorPalette.getColor(val);
  }
};

exports.default = colorScheme;