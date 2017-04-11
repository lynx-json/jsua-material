(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.demo = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = backgroundExamples;

var _src = require("../src");

var material = _interopRequireWildcard(_src);

var _util = require("./util");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function createBackgroundExample(label, cb) {
  (0, _util.createExample)(function (el) {
    var labelElement = document.createElement("pre");
    labelElement.textContent = label;
    el.appendChild(labelElement);

    el.style.padding = "16px";
    cb(el);
  });
}

function backgroundExamples() {
  createBackgroundExample("Color: #CCCCCC", function (el) {
    material.background(el, {
      color: "#CCCCCC"
    });
  });

  createBackgroundExample("Primary Color, Shade: 500 (default)", function (el) {
    material.background.primary(el);
  });

  createBackgroundExample("Primary Color, Shade: 50", function (el) {
    material.background.primary(el, {
      shade: 50
    });
  });

  createBackgroundExample("Primary Color, Shade: 100", function (el) {
    material.background.primary(el, {
      shade: 100
    });
  });

  createBackgroundExample("Primary Color, Shade: 200", function (el) {
    material.background.primary(el, {
      shade: 200
    });
  });

  createBackgroundExample("Primary Color, Shade: 300", function (el) {
    material.background.primary(el, {
      shade: 300
    });
  });

  createBackgroundExample("Primary Color, Shade: 400", function (el) {
    material.background.primary(el, {
      shade: 400
    });
  });

  createBackgroundExample("Primary Color, Shade: 500", function (el) {
    material.background.primary(el, {
      shade: 500
    });
  });

  createBackgroundExample("Primary Color, Shade: 600", function (el) {
    material.background.primary(el, {
      shade: 600
    });
  });

  createBackgroundExample("Primary Color, Shade: 700", function (el) {
    material.background.primary(el, {
      shade: 700
    });
  });

  createBackgroundExample("Primary Color, Shade: 800", function (el) {
    material.background.primary(el, {
      shade: 800
    });
  });

  createBackgroundExample("Primary Color, Shade: 900", function (el) {
    material.background.primary(el, {
      shade: 900
    });
  });

  createBackgroundExample("Accent Color, Shade: A200 (default)", function (el) {
    material.background.accent(el);
  });

  createBackgroundExample("Accent Color, Shade: A100", function (el) {
    material.background.accent(el, {
      shade: "A100"
    });
  });

  createBackgroundExample("Accent Color, Shade: A200", function (el) {
    material.background.accent(el, {
      shade: "A200"
    });
  });

  createBackgroundExample("Accent Color, Shade: A400", function (el) {
    material.background.accent(el, {
      shade: "A400"
    });
  });

  createBackgroundExample("Accent Color, Shade: A700", function (el) {
    material.background.accent(el, {
      shade: "A700"
    });
  });

  createBackgroundExample("Status bar, light theme (default)", function (el) {
    material.background.statusBar(el);
  });

  createBackgroundExample("App bar, light theme (default)", function (el) {
    material.background.appBar(el);
  });

  createBackgroundExample("Main background, light theme (default)", function (el) {
    material.background(el);
  });

  createBackgroundExample("Card/Dialog, light theme (default)", function (el) {
    material.background.card(el);
  });

  createBackgroundExample("Status bar, dark theme", function (el) {
    material.background.statusBar(el, {
      theme: "dark"
    });
  });

  createBackgroundExample("App bar, dark theme", function (el) {
    material.background.appBar(el, {
      theme: "dark"
    });
  });

  createBackgroundExample("Main background, dark theme", function (el) {
    material.background(el, {
      theme: "dark"
    });
  });

  createBackgroundExample("Card/Dialog, dark theme", function (el) {
    material.background.dialog(el, {
      theme: "dark"
    });
  });
}

},{"../src":8,"./util":3}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.backgroundExamples = undefined;

var _backgroundExamples = require("./background-examples");

var _backgroundExamples2 = _interopRequireDefault(_backgroundExamples);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.backgroundExamples = _backgroundExamples2.default;

},{"./background-examples":1}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createExample = createExample;
function createExample(cb) {
  var examplesElement = document.getElementById("examples");
  var element = document.createElement("div");
  examplesElement.appendChild(element);
  cb(element);
}

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = background;

var _color = require("./color");

var _color2 = _interopRequireDefault(_color);

var _colorPalette = require("./color-palette");

var colorPalette = _interopRequireWildcard(_colorPalette);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getTheme(options) {
  if (options && options.theme === "light") return _color.lightTheme;
  if (options && options.theme === "dark") return _color.darkTheme;

  return _color2.default.theme;
} // material.background(el, { color: "Indigo", shade: 700 });
function background(element, options) {
  var theme = getTheme(options);
  options = Object.assign({
    color: theme[2]
  }, options);

  element.style.backgroundColor = colorPalette.getColor(options.color, options.shade);
}

background.primary = function primary(element, options) {
  options = Object.assign({
    color: _color2.default.primary
  }, options);

  background(element, options);
};

background.accent = function accent(element, options) {
  options = Object.assign({
    color: _color2.default.secondary,
    shade: "A200"
  }, options);

  background(element, options);
};

background.statusBar = function statusBar(element, options) {
  var theme = getTheme(options);

  options = Object.assign({
    color: theme[0]
  }, options);

  background(element, options);
};

background.appBar = function appBar(element, options) {
  var theme = getTheme(options);

  options = Object.assign({
    color: theme[1]
  }, options);

  background(element, options);
};

background.card = function card(element, options) {
  var theme = getTheme(options);

  options = Object.assign({
    color: theme[3]
  }, options);

  background(element, options);
};

background.dialog = background.card;

},{"./color":7,"./color-palette":6}],5:[function(require,module,exports){
module.exports={
  "Red": {
    "50": "#FFEBEE",
    "100": "#FFCDD2",
    "200": "#EF9A9A",
    "300": "#E57373",
    "400": "#EF5350",
    "500": "#F44336",
    "600": "#E53935",
    "700": "#D32F2F",
    "800": "#C62828",
    "900": "#B71C1C",
    "A100": "#FF8A80",
    "A200": "#FF5252",
    "A400": "#FF1744",
    "A700": "#D50000"
  },
  "Pink": {
    "50": "#FCE4EC",
    "100": "#F8BBD0",
    "200": "#F48FB1",
    "300": "#F06292",
    "400": "#EC407A",
    "500": "#E91E63",
    "600": "#D81B60",
    "700": "#C2185B",
    "800": "#AD1457",
    "900": "#880E4F",
    "A100": "#FF80AB",
    "A200": "#FF4081",
    "A400": "#F50057",
    "A700": "#C51162"
  },
  "Purple": {
    "50": "#F3E5F5",
    "100": "#E1BEE7",
    "200": "#CE93D8",
    "300": "#BA68C8",
    "400": "#AB47BC",
    "500": "#9C27B0",
    "600": "#8E24AA",
    "700": "#7B1FA2",
    "800": "#6A1B9A",
    "900": "#4A148C",
    "A100": "#EA80FC",
    "A200": "#E040FB",
    "A400": "#D500F9",
    "A700": "#AA00FF"
  },
  "Deep Purple": {
    "50": "#EDE7F6",
    "100": "#D1C4E9",
    "200": "#B39DDB",
    "300": "#9575CD",
    "400": "#7E57C2",
    "500": "#673AB7",
    "600": "#5E35B1",
    "700": "#512DA8",
    "800": "#4527A0",
    "900": "#311B92",
    "A100": "#B388FF",
    "A200": "#7C4DFF",
    "A400": "#651FFF",
    "A700": "#6200EA"
  },
  "Indigo": {
    "50": "#E8EAF6",
    "100": "#C5CAE9",
    "200": "#9FA8DA",
    "300": "#7986CB",
    "400": "#5C6BC0",
    "500": "#3F51B5",
    "600": "#3949AB",
    "700": "#303F9F",
    "800": "#283593",
    "900": "#1A237E",
    "A100": "#8C9EFF",
    "A200": "#536DFE",
    "A400": "#3D5AFE",
    "A700": "#304FFE"
  },
  "Blue": {
    "50": "#E3F2FD",
    "100": "#BBDEFB",
    "200": "#90CAF9",
    "300": "#64B5F6",
    "400": "#42A5F5",
    "500": "#2196F3",
    "600": "#1E88E5",
    "700": "#1976D2",
    "800": "#1565C0",
    "900": "#0D47A1",
    "A100": "#82B1FF",
    "A200": "#448AFF",
    "A400": "#2979FF",
    "A700": "#2962FF"
  },
  "Light Blue": {
    "50": "#E1F5FE",
    "100": "#B3E5FC",
    "200": "#81D4FA",
    "300": "#4FC3F7",
    "400": "#29B6F6",
    "500": "#03A9F4",
    "600": "#039BE5",
    "700": "#0288D1",
    "800": "#0277BD",
    "900": "#01579B",
    "A100": "#80D8FF",
    "A200": "#40C4FF",
    "A400": "#00B0FF",
    "A700": "#0091EA"
  },
  "Cyan": {
    "50": "#E0F7FA",
    "100": "#B2EBF2",
    "200": "#80DEEA",
    "300": "#4DD0E1",
    "400": "#26C6DA",
    "500": "#00BCD4",
    "600": "#00ACC1",
    "700": "#0097A7",
    "800": "#00838F",
    "900": "#006064",
    "A100": "#84FFFF",
    "A200": "#18FFFF",
    "A400": "#00E5FF",
    "A700": "#00B8D4"
  },
  "Teal": {
    "50": "#E0F2F1",
    "100": "#B2DFDB",
    "200": "#80CBC4",
    "300": "#4DB6AC",
    "400": "#26A69A",
    "500": "#009688",
    "600": "#00897B",
    "700": "#00796B",
    "800": "#00695C",
    "900": "#004D40",
    "A100": "#A7FFEB",
    "A200": "#64FFDA",
    "A400": "#1DE9B6",
    "A700": "#00BFA5"
  },
  "Green": {
    "50": "#E8F5E9",
    "100": "#C8E6C9",
    "200": "#A5D6A7",
    "300": "#81C784",
    "400": "#66BB6A",
    "500": "#4CAF50",
    "600": "#43A047",
    "700": "#388E3C",
    "800": "#2E7D32",
    "900": "#1B5E20",
    "A100": "#B9F6CA",
    "A200": "#69F0AE",
    "A400": "#00E676",
    "A700": "#00C853"
  },
  "Light Green": {
    "50": "#F1F8E9",
    "100": "#DCEDC8",
    "200": "#C5E1A5",
    "300": "#AED581",
    "400": "#9CCC65",
    "500": "#8BC34A",
    "600": "#7CB342",
    "700": "#689F38",
    "800": "#558B2F",
    "900": "#33691E",
    "A100": "#CCFF90",
    "A200": "#B2FF59",
    "A400": "#76FF03",
    "A700": "#64DD17"
  },
  "Lime": {
    "50": "#F9FBE7",
    "100": "#F0F4C3",
    "200": "#E6EE9C",
    "300": "#DCE775",
    "400": "#D4E157",
    "500": "#CDDC39",
    "600": "#C0CA33",
    "700": "#AFB42B",
    "800": "#9E9D24",
    "900": "#827717",
    "A100": "#F4FF81",
    "A200": "#EEFF41",
    "A400": "#C6FF00",
    "A700": "#AEEA00"
  },
  "Yellow": {
    "50": "#FFFDE7",
    "100": "#FFF9C4",
    "200": "#FFF59D",
    "300": "#FFF176",
    "400": "#FFEE58",
    "500": "#FFEB3B",
    "600": "#FDD835",
    "700": "#FBC02D",
    "800": "#F9A825",
    "900": "#F57F17",
    "A100": "#FFFF8D",
    "A200": "#FFFF00",
    "A400": "#FFEA00",
    "A700": "#FFD600"
  },
  "Amber": {
    "50": "#FFF8E1",
    "100": "#FFECB3",
    "200": "#FFE082",
    "300": "#FFD54F",
    "400": "#FFCA28",
    "500": "#FFC107",
    "600": "#FFB300",
    "700": "#FFA000",
    "800": "#FF8F00",
    "900": "#FF6F00",
    "A100": "#FFE57F",
    "A200": "#FFD740",
    "A400": "#FFC400",
    "A700": "#FFAB00"
  },
  "Orange": {
    "50": "#FFF3E0",
    "100": "#FFE0B2",
    "200": "#FFCC80",
    "300": "#FFB74D",
    "400": "#FFA726",
    "500": "#FF9800",
    "600": "#FB8C00",
    "700": "#F57C00",
    "800": "#EF6C00",
    "900": "#E65100",
    "A100": "#FFD180",
    "A200": "#FFAB40",
    "A400": "#FF9100",
    "A700": "#FF6D00"
  },
  "Deep Orange": {
    "50": "#FBE9E7",
    "100": "#FFCCBC",
    "200": "#FFAB91",
    "300": "#FF8A65",
    "400": "#FF7043",
    "500": "#FF5722",
    "600": "#F4511E",
    "700": "#E64A19",
    "800": "#D84315",
    "900": "#BF360C",
    "A100": "#FF9E80",
    "A200": "#FF6E40",
    "A400": "#FF3D00",
    "A700": "#DD2C00"
  },
  "Brown": {
    "50": "#EFEBE9",
    "100": "#D7CCC8",
    "200": "#BCAAA4",
    "300": "#A1887F",
    "400": "#8D6E63",
    "500": "#795548",
    "600": "#6D4C41",
    "700": "#5D4037",
    "800": "#4E342E",
    "900": "#3E2723"
  },
  "Grey": {
    "50": "#FAFAFA",
    "100": "#F5F5F5",
    "200": "#EEEEEE",
    "300": "#E0E0E0",
    "400": "#BDBDBD",
    "500": "#9E9E9E",
    "600": "#757575",
    "700": "#616161",
    "800": "#424242",
    "900": "#212121"
  },
  "Blue Grey": {
    "50": "#ECEFF1",
    "100": "#CFD8DC",
    "200": "#B0BEC5",
    "300": "#90A4AE",
    "400": "#78909C",
    "500": "#607D8B",
    "600": "#546E7A",
    "700": "#455A64",
    "800": "#37474F",
    "900": "#263238"
  },
  "Black": "#000000",
  "White": "#FFFFFF"
}

},{}],6:[function(require,module,exports){
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

},{"./color-palette.json":5}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.darkTheme = exports.lightTheme = undefined;

var _colorPalette = require("./color-palette");

var colorPalette = _interopRequireWildcard(_colorPalette);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var lightTheme = [colorPalette.getColor("Grey", 300), colorPalette.getColor("Grey", 100), colorPalette.getColor("Grey", 50), colorPalette.getColor("White")];

var darkTheme = [colorPalette.getColor("Black"), colorPalette.getColor("Grey", 900), colorPalette.getColor("#303030"), colorPalette.getColor("Grey", 800)];

var theme = lightTheme;
var primary = colorPalette.getColor("Indigo");
var secondary = colorPalette.getColor("Amber");

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
  }
};

exports.lightTheme = lightTheme;
exports.darkTheme = darkTheme;
exports.default = colorScheme;

},{"./color-palette":6}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.color = exports.background = undefined;

var _background = require("./background");

var _background2 = _interopRequireDefault(_background);

var _color = require("./color");

var _color2 = _interopRequireDefault(_color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.background = _background2.default;
exports.color = _color2.default;

},{"./background":4,"./color":7}]},{},[2])(2)
});