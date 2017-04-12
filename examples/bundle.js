(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.demo = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = backgroundExamples;

var _src = require("../src");

var material = _interopRequireWildcard(_src);

var _getContrast = require("get-contrast");

var _getContrast2 = _interopRequireDefault(_getContrast);

var _util = require("./util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

function calculateTextColor(options) {
  var backgroundColor = material.color.getColor(options);
  var darkRatio = _getContrast2.default.ratio(backgroundColor, "#000000");
  var lightRatio = _getContrast2.default.ratio(backgroundColor, "#ffffff");
  return darkRatio > lightRatio ? "black" : "white";
}

function backgroundExamples() {
  createBackgroundExample("Known color and shade (Blue Grey, 900)", function (el) {
    var options = {
      color: "Blue Grey",
      shade: 900
    };
    material.background(el, options);

    material.text.body(el.firstElementChild, {
      color: calculateTextColor(options)
    });
  });

  createBackgroundExample("Custom color and shade (#ff0000, 300)", function (el) {
    var options = {
      color: "#ff0000",
      shade: 300
    };
    material.background(el, options);

    material.text.body(el.firstElementChild, {
      color: calculateTextColor(options)
    });
  });

  createBackgroundExample("Primary Color, Shade: 500 (default)", function (el) {
    var options = {
      color: material.color.primary
    };

    material.background.primary(el, options);
    material.text.body(el.firstElementChild, {
      color: calculateTextColor(options)
    });
  });

  createBackgroundExample("Primary Color, Shade: 50", function (el) {
    var options = {
      color: material.color.primary,
      shade: 50
    };

    material.background.primary(el, options);
    material.text.body(el.firstElementChild, {
      color: calculateTextColor(options)
    });
  });

  createBackgroundExample("Primary Color, Shade: 100", function (el) {
    var options = {
      color: material.color.primary,
      shade: 100
    };

    material.background.primary(el, options);
    material.text.body(el.firstElementChild, {
      color: calculateTextColor(options)
    });
  });

  createBackgroundExample("Primary Color, Shade: 200", function (el) {
    var options = {
      color: material.color.primary,
      shade: 200
    };

    material.background.primary(el, options);
    material.text.body(el.firstElementChild, {
      color: calculateTextColor(options)
    });
  });

  createBackgroundExample("Primary Color, Shade: 300", function (el) {
    var options = {
      color: material.color.primary,
      shade: 300
    };

    material.background.primary(el, options);
    material.text.body(el.firstElementChild, {
      color: calculateTextColor(options)
    });
  });

  createBackgroundExample("Primary Color, Shade: 400", function (el) {
    var options = {
      color: material.color.primary,
      shade: 400
    };

    material.background.primary(el, options);
    material.text.body(el.firstElementChild, {
      color: calculateTextColor(options)
    });
  });

  createBackgroundExample("Primary Color, Shade: 500", function (el) {
    var options = {
      color: material.color.primary,
      shade: 500
    };

    material.background.primary(el, options);
    material.text.body(el.firstElementChild, {
      color: calculateTextColor(options)
    });
  });

  createBackgroundExample("Primary Color, Shade: 600", function (el) {
    var options = {
      color: material.color.primary,
      shade: 600
    };

    material.background.primary(el, options);
    material.text.body(el.firstElementChild, {
      color: calculateTextColor(options)
    });
  });

  createBackgroundExample("Primary Color, Shade: 700", function (el) {
    var options = {
      color: material.color.primary,
      shade: 700
    };

    material.background.primary(el, options);
    material.text.body(el.firstElementChild, {
      color: calculateTextColor(options)
    });
  });

  createBackgroundExample("Primary Color, Shade: 800", function (el) {
    var options = {
      color: material.color.primary,
      shade: 800
    };

    material.background.primary(el, options);
    material.text.body(el.firstElementChild, {
      color: calculateTextColor(options)
    });
  });

  createBackgroundExample("Primary Color, Shade: 900", function (el) {
    var options = {
      color: material.color.primary,
      shade: 900
    };

    material.background.primary(el, options);
    material.text.body(el.firstElementChild, {
      color: calculateTextColor(options)
    });
  });

  createBackgroundExample("Accent Color, Shade: A200 (default)", function (el) {
    var options = {
      color: material.color.secondary
    };

    material.background.accent(el, options);
    material.text.body(el.firstElementChild, {
      color: calculateTextColor(options)
    });
  });

  createBackgroundExample("Accent Color, Shade: A100", function (el) {
    var options = {
      color: material.color.secondary,
      shade: "A100"
    };

    material.background.accent(el, options);
    material.text.body(el.firstElementChild, {
      color: calculateTextColor(options)
    });
  });

  createBackgroundExample("Accent Color, Shade: A200", function (el) {
    var options = {
      color: material.color.secondary,
      shade: "A200"
    };

    material.background.accent(el, options);
    material.text.body(el.firstElementChild, {
      color: calculateTextColor(options)
    });
  });

  createBackgroundExample("Accent Color, Shade: A400", function (el) {
    var options = {
      color: material.color.secondary,
      shade: "A400"
    };

    material.background.accent(el, options);
    material.text.body(el.firstElementChild, {
      color: calculateTextColor(options)
    });
  });

  createBackgroundExample("Accent Color, Shade: A700", function (el) {
    var options = {
      color: material.color.secondary,
      shade: "A700"
    };

    material.background.accent(el, options);
    material.text.body(el.firstElementChild, {
      color: calculateTextColor(options)
    });
  });

  createBackgroundExample("Status bar, light theme (default)", function (el) {
    material.background.statusBar(el);
    material.text.body(el.firstElementChild, {
      color: "black"
    });
  });

  createBackgroundExample("App bar, light theme (default)", function (el) {
    material.background.appBar(el);
    material.text.body(el.firstElementChild, {
      color: "black"
    });
  });

  createBackgroundExample("Main background, light theme (default)", function (el) {
    material.background(el);
    material.text.body(el.firstElementChild, {
      color: "black"
    });
  });

  createBackgroundExample("Card/Dialog, light theme (default)", function (el) {
    material.background.card(el);
    material.text.body(el.firstElementChild, {
      color: "black"
    });
  });

  createBackgroundExample("Status bar, dark theme", function (el) {
    material.background.statusBar(el, {
      theme: "dark"
    });
    material.text.body(el.firstElementChild, {
      color: "white"
    });
  });

  createBackgroundExample("App bar, dark theme", function (el) {
    material.background.appBar(el, {
      theme: "dark"
    });
    material.text.body(el.firstElementChild, {
      color: "white"
    });
  });

  createBackgroundExample("Main background, dark theme", function (el) {
    material.background(el, {
      theme: "dark"
    });
    material.text.body(el.firstElementChild, {
      color: "white"
    });
  });

  createBackgroundExample("Card/Dialog, dark theme", function (el) {
    material.background.dialog(el, {
      theme: "dark"
    });
    material.text.body(el.firstElementChild, {
      color: "white"
    });
  });
}

},{"../src":24,"./util":5,"get-contrast":9}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = backgroundExamples;

var _src = require("../src");

var material = _interopRequireWildcard(_src);

var _util = require("./util");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function createElevationExample(label, level) {
  (0, _util.createExample)(function (el) {
    var labelElement = document.createElement("pre");
    labelElement.textContent = label;
    el.appendChild(labelElement);

    material.background(el);
    material.text.body(labelElement);
    material.elevation(el, {
      level: level
    });

    el.style.padding = "16px";
    el.style.margin = "32px";
  });
}

function backgroundExamples() {
  createElevationExample("Elevation 0", 0);
  createElevationExample("Elevation 1", 1);
  createElevationExample("Elevation 2", 2);
  createElevationExample("Elevation 3", 3);
  createElevationExample("Elevation 4", 4);
  createElevationExample("Elevation 5", 5);
  createElevationExample("Elevation 6", 6);
  createElevationExample("Elevation 7", 7);
  createElevationExample("Elevation 8", 8);
  createElevationExample("Elevation 9", 9);
  createElevationExample("Elevation 10", 10);
  createElevationExample("Elevation 11", 11);
  createElevationExample("Elevation 12", 12);
  createElevationExample("Elevation 13", 13);
  createElevationExample("Elevation 14", 14);
  createElevationExample("Elevation 15", 15);
  createElevationExample("Elevation 16", 16);
  createElevationExample("Elevation 17", 17);
  createElevationExample("Elevation 18", 18);
  createElevationExample("Elevation 19", 19);
  createElevationExample("Elevation 20", 20);
  createElevationExample("Elevation 21", 21);
  createElevationExample("Elevation 22", 22);
  createElevationExample("Elevation 23", 23);
  createElevationExample("Elevation 24", 24);
}

},{"../src":24,"./util":5}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.textExamples = exports.elevationExamples = exports.backgroundExamples = undefined;

var _backgroundExamples = require("./background-examples");

var _backgroundExamples2 = _interopRequireDefault(_backgroundExamples);

var _elevationExamples = require("./elevation-examples");

var _elevationExamples2 = _interopRequireDefault(_elevationExamples);

var _textExamples = require("./text-examples");

var _textExamples2 = _interopRequireDefault(_textExamples);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.backgroundExamples = _backgroundExamples2.default;
exports.elevationExamples = _elevationExamples2.default;
exports.textExamples = _textExamples2.default;

},{"./background-examples":1,"./elevation-examples":2,"./text-examples":4}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = textExamples;

var _src = require("../src");

var material = _interopRequireWildcard(_src);

var _util = require("./util");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function createTextExample(label, cb) {
  (0, _util.createExample)(function (el) {
    var labelElement = document.createElement("pre");
    labelElement.textContent = label;
    el.appendChild(labelElement);
    material.background(el);
    el.style.padding = "16px";

    cb(labelElement);
  });
}

function textExamples() {
  createTextExample("Display 4", function (el) {
    material.text.display4(el);
  });

  createTextExample("Display 3", function (el) {
    material.text.display3(el);
  });

  createTextExample("Display 2", function (el) {
    material.text.display2(el);
  });

  createTextExample("Display", function (el) {
    material.text.display(el);
  });

  createTextExample("Headline", function (el) {
    material.text.headline(el);
  });

  createTextExample("Title", function (el) {
    material.text.title(el);
  });

  createTextExample("Subheading 2", function (el) {
    material.text.subheading2(el);
  });

  createTextExample("Subheading", function (el) {
    material.text.subheading(el);
  });

  createTextExample("Body 2", function (el) {
    material.text.body2(el);
  });

  createTextExample("Body", function (el) {
    material.text.body(el);
  });

  createTextExample("Caption", function (el) {
    material.text.caption(el);
  });

  createTextExample("Button", function (el) {
    material.text.button(el);
  });
}

},{"../src":24,"./util":5}],5:[function(require,module,exports){
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

},{}],6:[function(require,module,exports){
'use strict';

var cssColorNames = require('css-color-names');

module.exports = function cssColorList() {
  return Object.keys(cssColorNames);
}

},{"css-color-names":7}],7:[function(require,module,exports){
module.exports={
  "aqua": "#00ffff",
  "aliceblue": "#f0f8ff",
  "antiquewhite": "#faebd7",
  "black": "#000000",
  "blue": "#0000ff",
  "cyan": "#00ffff",
  "darkblue": "#00008b",
  "darkcyan": "#008b8b",
  "darkgreen": "#006400",
  "darkturquoise": "#00ced1",
  "deepskyblue": "#00bfff",
  "green": "#008000",
  "lime": "#00ff00",
  "mediumblue": "#0000cd",
  "mediumspringgreen": "#00fa9a",
  "navy": "#000080",
  "springgreen": "#00ff7f",
  "teal": "#008080",
  "midnightblue": "#191970",
  "dodgerblue": "#1e90ff",
  "lightseagreen": "#20b2aa",
  "forestgreen": "#228b22",
  "seagreen": "#2e8b57",
  "darkslategray": "#2f4f4f",
  "darkslategrey": "#2f4f4f",
  "limegreen": "#32cd32",
  "mediumseagreen": "#3cb371",
  "turquoise": "#40e0d0",
  "royalblue": "#4169e1",
  "steelblue": "#4682b4",
  "darkslateblue": "#483d8b",
  "mediumturquoise": "#48d1cc",
  "indigo": "#4b0082",
  "darkolivegreen": "#556b2f",
  "cadetblue": "#5f9ea0",
  "cornflowerblue": "#6495ed",
  "mediumaquamarine": "#66cdaa",
  "dimgray": "#696969",
  "dimgrey": "#696969",
  "slateblue": "#6a5acd",
  "olivedrab": "#6b8e23",
  "slategray": "#708090",
  "slategrey": "#708090",
  "lightslategray": "#778899",
  "lightslategrey": "#778899",
  "mediumslateblue": "#7b68ee",
  "lawngreen": "#7cfc00",
  "aquamarine": "#7fffd4",
  "chartreuse": "#7fff00",
  "gray": "#808080",
  "grey": "#808080",
  "maroon": "#800000",
  "olive": "#808000",
  "purple": "#800080",
  "lightskyblue": "#87cefa",
  "skyblue": "#87ceeb",
  "blueviolet": "#8a2be2",
  "darkmagenta": "#8b008b",
  "darkred": "#8b0000",
  "saddlebrown": "#8b4513",
  "darkseagreen": "#8fbc8f",
  "lightgreen": "#90ee90",
  "mediumpurple": "#9370db",
  "darkviolet": "#9400d3",
  "palegreen": "#98fb98",
  "darkorchid": "#9932cc",
  "yellowgreen": "#9acd32",
  "sienna": "#a0522d",
  "brown": "#a52a2a",
  "darkgray": "#a9a9a9",
  "darkgrey": "#a9a9a9",
  "greenyellow": "#adff2f",
  "lightblue": "#add8e6",
  "paleturquoise": "#afeeee",
  "lightsteelblue": "#b0c4de",
  "powderblue": "#b0e0e6",
  "firebrick": "#b22222",
  "darkgoldenrod": "#b8860b",
  "mediumorchid": "#ba55d3",
  "rosybrown": "#bc8f8f",
  "darkkhaki": "#bdb76b",
  "silver": "#c0c0c0",
  "mediumvioletred": "#c71585",
  "indianred": "#cd5c5c",
  "peru": "#cd853f",
  "chocolate": "#d2691e",
  "tan": "#d2b48c",
  "lightgray": "#d3d3d3",
  "lightgrey": "#d3d3d3",
  "thistle": "#d8bfd8",
  "goldenrod": "#daa520",
  "orchid": "#da70d6",
  "palevioletred": "#db7093",
  "crimson": "#dc143c",
  "gainsboro": "#dcdcdc",
  "plum": "#dda0dd",
  "burlywood": "#deb887",
  "lightcyan": "#e0ffff",
  "lavender": "#e6e6fa",
  "darksalmon": "#e9967a",
  "palegoldenrod": "#eee8aa",
  "violet": "#ee82ee",
  "azure": "#f0ffff",
  "honeydew": "#f0fff0",
  "khaki": "#f0e68c",
  "lightcoral": "#f08080",
  "sandybrown": "#f4a460",
  "beige": "#f5f5dc",
  "mintcream": "#f5fffa",
  "wheat": "#f5deb3",
  "whitesmoke": "#f5f5f5",
  "ghostwhite": "#f8f8ff",
  "lightgoldenrodyellow": "#fafad2",
  "linen": "#faf0e6",
  "salmon": "#fa8072",
  "oldlace": "#fdf5e6",
  "bisque": "#ffe4c4",
  "blanchedalmond": "#ffebcd",
  "coral": "#ff7f50",
  "cornsilk": "#fff8dc",
  "darkorange": "#ff8c00",
  "deeppink": "#ff1493",
  "floralwhite": "#fffaf0",
  "fuchsia": "#ff00ff",
  "gold": "#ffd700",
  "hotpink": "#ff69b4",
  "ivory": "#fffff0",
  "lavenderblush": "#fff0f5",
  "lemonchiffon": "#fffacd",
  "lightpink": "#ffb6c1",
  "lightsalmon": "#ffa07a",
  "lightyellow": "#ffffe0",
  "magenta": "#ff00ff",
  "mistyrose": "#ffe4e1",
  "moccasin": "#ffe4b5",
  "navajowhite": "#ffdead",
  "orange": "#ffa500",
  "orangered": "#ff4500",
  "papayawhip": "#ffefd5",
  "peachpuff": "#ffdab9",
  "pink": "#ffc0cb",
  "red": "#ff0000",
  "seashell": "#fff5ee",
  "snow": "#fffafa",
  "tomato": "#ff6347",
  "white": "#ffffff",
  "yellow": "#ffff00",
  "rebeccapurple": "#663399"
}

},{}],8:[function(require,module,exports){
module.exports={
  "aliceblue": "#f0f8ff",
  "antiquewhite": "#faebd7",
  "aqua": "#00ffff",
  "aquamarine": "#7fffd4",
  "azure": "#f0ffff",
  "beige": "#f5f5dc",
  "bisque": "#ffe4c4",
  "black": "#000000",
  "blanchedalmond": "#ffebcd",
  "blue": "#0000ff",
  "blueviolet": "#8a2be2",
  "brown": "#a52a2a",
  "burlywood": "#deb887",
  "cadetblue": "#5f9ea0",
  "chartreuse": "#7fff00",
  "chocolate": "#d2691e",
  "coral": "#ff7f50",
  "cornflowerblue": "#6495ed",
  "cornsilk": "#fff8dc",
  "crimson": "#dc143c",
  "cyan": "#00ffff",
  "darkblue": "#00008b",
  "darkcyan": "#008b8b",
  "darkgoldenrod": "#b8860b",
  "darkgray": "#a9a9a9",
  "darkgreen": "#006400",
  "darkgrey": "#a9a9a9",
  "darkkhaki": "#bdb76b",
  "darkmagenta": "#8b008b",
  "darkolivegreen": "#556b2f",
  "darkorange": "#ff8c00",
  "darkorchid": "#9932cc",
  "darkred": "#8b0000",
  "darksalmon": "#e9967a",
  "darkseagreen": "#8fbc8f",
  "darkslateblue": "#483d8b",
  "darkslategray": "#2f4f4f",
  "darkslategrey": "#2f4f4f",
  "darkturquoise": "#00ced1",
  "darkviolet": "#9400d3",
  "deeppink": "#ff1493",
  "deepskyblue": "#00bfff",
  "dimgray": "#696969",
  "dimgrey": "#696969",
  "dodgerblue": "#1e90ff",
  "firebrick": "#b22222",
  "floralwhite": "#fffaf0",
  "forestgreen": "#228b22",
  "fuchsia": "#ff00ff",
  "gainsboro": "#dcdcdc",
  "ghostwhite": "#f8f8ff",
  "gold": "#ffd700",
  "goldenrod": "#daa520",
  "gray": "#808080",
  "green": "#008000",
  "greenyellow": "#adff2f",
  "grey": "#808080",
  "honeydew": "#f0fff0",
  "hotpink": "#ff69b4",
  "indianred": "#cd5c5c",
  "indigo": "#4b0082",
  "ivory": "#fffff0",
  "khaki": "#f0e68c",
  "lavender": "#e6e6fa",
  "lavenderblush": "#fff0f5",
  "lawngreen": "#7cfc00",
  "lemonchiffon": "#fffacd",
  "lightblue": "#add8e6",
  "lightcoral": "#f08080",
  "lightcyan": "#e0ffff",
  "lightgoldenrodyellow": "#fafad2",
  "lightgray": "#d3d3d3",
  "lightgreen": "#90ee90",
  "lightgrey": "#d3d3d3",
  "lightpink": "#ffb6c1",
  "lightsalmon": "#ffa07a",
  "lightseagreen": "#20b2aa",
  "lightskyblue": "#87cefa",
  "lightslategray": "#778899",
  "lightslategrey": "#778899",
  "lightsteelblue": "#b0c4de",
  "lightyellow": "#ffffe0",
  "lime": "#00ff00",
  "limegreen": "#32cd32",
  "linen": "#faf0e6",
  "magenta": "#ff00ff",
  "maroon": "#800000",
  "mediumaquamarine": "#66cdaa",
  "mediumblue": "#0000cd",
  "mediumorchid": "#ba55d3",
  "mediumpurple": "#9370db",
  "mediumseagreen": "#3cb371",
  "mediumslateblue": "#7b68ee",
  "mediumspringgreen": "#00fa9a",
  "mediumturquoise": "#48d1cc",
  "mediumvioletred": "#c71585",
  "midnightblue": "#191970",
  "mintcream": "#f5fffa",
  "mistyrose": "#ffe4e1",
  "moccasin": "#ffe4b5",
  "navajowhite": "#ffdead",
  "navy": "#000080",
  "oldlace": "#fdf5e6",
  "olive": "#808000",
  "olivedrab": "#6b8e23",
  "orange": "#ffa500",
  "orangered": "#ff4500",
  "orchid": "#da70d6",
  "palegoldenrod": "#eee8aa",
  "palegreen": "#98fb98",
  "paleturquoise": "#afeeee",
  "palevioletred": "#db7093",
  "papayawhip": "#ffefd5",
  "peachpuff": "#ffdab9",
  "peru": "#cd853f",
  "pink": "#ffc0cb",
  "plum": "#dda0dd",
  "powderblue": "#b0e0e6",
  "purple": "#800080",
  "rebeccapurple": "#663399",
  "red": "#ff0000",
  "rosybrown": "#bc8f8f",
  "royalblue": "#4169e1",
  "saddlebrown": "#8b4513",
  "salmon": "#fa8072",
  "sandybrown": "#f4a460",
  "seagreen": "#2e8b57",
  "seashell": "#fff5ee",
  "sienna": "#a0522d",
  "silver": "#c0c0c0",
  "skyblue": "#87ceeb",
  "slateblue": "#6a5acd",
  "slategray": "#708090",
  "slategrey": "#708090",
  "snow": "#fffafa",
  "springgreen": "#00ff7f",
  "steelblue": "#4682b4",
  "tan": "#d2b48c",
  "teal": "#008080",
  "thistle": "#d8bfd8",
  "tomato": "#ff6347",
  "turquoise": "#40e0d0",
  "violet": "#ee82ee",
  "wheat": "#f5deb3",
  "white": "#ffffff",
  "whitesmoke": "#f5f5f5",
  "yellow": "#ffff00",
  "yellowgreen": "#9acd32"
}

},{}],9:[function(require,module,exports){
var rgb = require('rgb')
var wcag = require('wcag-contrast')
var isBlank = require('is-blank')
var isNamedCssColor = require('is-named-css-color')
var cssColorNames = require('css-color-names')

module.exports.ratio = ratio
module.exports.score = score
module.exports.isAccessible = isAccessible
module.exports.isNotTransparent = isNotTransparent

function ratio(colorOne, colorTwo, options) {
  colorOne = getRgbTriplet(colorOne, options)
  colorTwo = getRgbTriplet(colorTwo, options)

  return wcag.rgb(colorOne, colorTwo)
}

function score(colorOne, colorTwo, options) {
  var wcagScore = wcag.score(ratio(colorOne, colorTwo, options))

  if (isBlank(wcagScore)) {
    return 'F'
  } else {
    return wcagScore
  }
}

function isAccessible(colorOne, colorTwo, options) {
  return ratio(colorOne, colorTwo, options) > 4.5
}

function getRgbTriplet(color, options) {
  if (typeof color !== 'string') {
    throw new TypeError('get-contrast expects colors as strings')
  }

  if (isNamedCssColor(color)) {
    color = cssColorNames[color]
  }

  color = isNotTransparent(color, options)
  return color.match(/\((.*)\)/)[1].split(',').slice(0, 3)
}

function isNotTransparent(color, options) {
  options = options || {}

  // Convert to RGB.
  color = rgb(color)
  // Check if the rgb returned color is rgba and if the 'a' value is 0.
  var cArray = color.match(/\((.*)\)/)[1].split(',')
  if (cArray.length == 4 && cArray[3] == '0' && !options.ignoreAlpha) {
    throw new TypeError('get-contrast cannot contrast transparent colors')
  } else {
    return color
  }
}

},{"css-color-names":8,"is-blank":11,"is-named-css-color":13,"rgb":16,"wcag-contrast":17}],10:[function(require,module,exports){
'use strict';
module.exports = function (hex) {
	if (typeof hex !== 'string') {
		throw new TypeError('Expected a string');
	}

	hex = hex.replace(/^#/, '');

	if (hex.length === 3) {
		hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
	}

	var num = parseInt(hex, 16);

	return [num >> 16, num >> 8 & 255, num & 255];
};

},{}],11:[function(require,module,exports){
var isEmpty = require('is-empty')
var isWhitespace = require('is-whitespace')

module.exports = function isBlank (object) {
  if (typeof object === 'boolean') {
    return false
  }

  if (typeof object === 'string' && object.length) {
    return isWhitespace(object)
  } else {
    return isEmpty(object)
  }
}

},{"is-empty":12,"is-whitespace":14}],12:[function(require,module,exports){

/**
 * Expose `isEmpty`.
 */

module.exports = isEmpty;


/**
 * Has.
 */

var has = Object.prototype.hasOwnProperty;


/**
 * Test whether a value is "empty".
 *
 * @param {Mixed} val
 * @return {Boolean}
 */

function isEmpty (val) {
  if (null == val) return true;
  if ('number' == typeof val) return 0 === val;
  if (undefined !== val.length) return 0 === val.length;
  for (var key in val) if (has.call(val, key)) return false;
  return true;
}
},{}],13:[function(require,module,exports){
'use strict'

var cssColors = require('css-color-list')

module.exports = function isNamedCssColor (color) {
  if (typeof color !== 'string') {
    throw new TypeError('is-named-css-color expects a string')
  }

  var cssColorRegex = new RegExp('^' + cssColors().join('|') + '$', 'i')
  return cssColorRegex.test(color)
}

},{"css-color-list":6}],14:[function(require,module,exports){
/*!
 * is-whitespace <https://github.com/jonschlinkert/is-whitespace>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var cache;

module.exports = function isWhitespace(str) {
  return (typeof str === 'string') && regex().test(str);
};

function regex() {
  // ensure that runtime compilation only happens once
  return cache || (cache = new RegExp('^[\\s\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF"]+$'));
}

},{}],15:[function(require,module,exports){
// # Relative luminance
//
// http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
// https://en.wikipedia.org/wiki/Luminance_(relative)
// https://en.wikipedia.org/wiki/Luminosity_function
// https://en.wikipedia.org/wiki/Rec._709#Luma_coefficients

// red, green, and blue coefficients
var rc = 0.2126,
    gc = 0.7152,
    bc = 0.0722,
    // low-gamma adjust coefficient
    lowc = 1 / 12.92;

function adjustGamma(_) {
    return Math.pow((_ + 0.055) / 1.055, 2.4);
}

module.exports = function(rgb) {
    var rsrgb = rgb[0] / 255,
        gsrgb = rgb[1] / 255,
        bsrgb = rgb[2] / 255;

    var r = (rsrgb <= 0.03928) ? (rsrgb * lowc) : adjustGamma(rsrgb),
        g = (gsrgb <= 0.03928) ? (gsrgb * lowc) : adjustGamma(gsrgb),
        b = (bsrgb <= 0.03928) ? (bsrgb * lowc) : adjustGamma(bsrgb);

    return r * rc + g * gc + b * bc;
};

},{}],16:[function(require,module,exports){
/*
color
*/"use strict"

var colors = {
    maroon      : "#800000",
    red         : "#ff0000",
    orange      : "#ffA500",
    yellow      : "#ffff00",
    olive       : "#808000",
    purple      : "#800080",
    fuchsia     : "#ff00ff",
    white       : "#ffffff",
    lime        : "#00ff00",
    green       : "#008000",
    navy        : "#000080",
    blue        : "#0000ff",
    aqua        : "#00ffff",
    teal        : "#008080",
    black       : "#000000",
    silver      : "#c0c0c0",
    gray        : "#808080",
    transparent : "#0000"
}

var RGBtoRGB = function(r, g, b, a){
    if (a == null || a === "") a = 1
    r = parseFloat(r)
    g = parseFloat(g)
    b = parseFloat(b)
    a = parseFloat(a)
    if (!(r <= 255 && r >= 0 && g <= 255 && g >= 0 && b <= 255 && b >= 0 && a <= 1 && a >= 0)) return null

    return [Math.round(r), Math.round(g), Math.round(b), a]
}

var HEXtoRGB = function(hex){
    if (hex.length === 3) hex += "f"
    if (hex.length === 4){
        var h0 = hex.charAt(0),
            h1 = hex.charAt(1),
            h2 = hex.charAt(2),
            h3 = hex.charAt(3)

        hex = h0 + h0 + h1 + h1 + h2 + h2 + h3 + h3
    }
    if (hex.length === 6) hex += "ff"
    var rgb = []
    for (var i = 0, l = hex.length; i < l; i += 2) rgb.push(parseInt(hex.substr(i, 2), 16) / (i === 6 ? 255 : 1))
    return rgb
}

// HSL to RGB conversion from:
// http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript
// thank you!

var HUEtoRGB = function(p, q, t){
    if (t < 0) t += 1
    if (t > 1) t -= 1
    if (t < 1 / 6) return p + (q - p) * 6 * t
    if (t < 1 / 2) return q
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6
    return p
}

var HSLtoRGB = function(h, s, l, a){
    var r, b, g
    if (a == null || a === "") a = 1
    h = parseFloat(h) / 360
    s = parseFloat(s) / 100
    l = parseFloat(l) / 100
    a = parseFloat(a) / 1
    if (h > 1 || h < 0 || s > 1 || s < 0 || l > 1 || l < 0 || a > 1 || a < 0) return null
    if (s === 0){
        r = b = g = l
    } else {
        var q = l < 0.5 ? l * (1 + s) : l + s - l * s
        var p = 2 * l - q
        r = HUEtoRGB(p, q, h + 1 / 3)
        g = HUEtoRGB(p, q, h)
        b = HUEtoRGB(p, q, h - 1 / 3)
    }
    return [r * 255, g * 255, b * 255, a]
}

var keys = []
for (var c in colors) keys.push(c)

var shex  = "(?:#([a-f0-9]{3,8}))",
    sval  = "\\s*([.\\d%]+)\\s*",
    sop   = "(?:,\\s*([.\\d]+)\\s*)?",
    slist = "\\(" + [sval, sval, sval] + sop + "\\)",
    srgb  = "(?:rgb)a?",
    shsl  = "(?:hsl)a?",
    skeys = "(" + keys.join("|") + ")"


var xhex   = RegExp(shex, "i"),
    xrgb   = RegExp(srgb + slist, "i"),
    xhsl   = RegExp(shsl + slist, "i")

var color = function(input, array){
    if (input == null) return null
    input = (input + "").replace(/\s+/, "")

    var match = colors[input]
    if (match){
        return color(match, array)
    } else if (match = input.match(xhex)){
        input = HEXtoRGB(match[1])
    } else if (match = input.match(xrgb)){
        input = match.slice(1)
    } else if (match = input.match(xhsl)){
        input = HSLtoRGB.apply(null, match.slice(1))
    } else return null

    if (!(input && (input = RGBtoRGB.apply(null, input)))) return null
    if (array) return input
    if (input[3] === 1) input.splice(3, 1)
    return "rgb" + (input.length === 4 ? "a" : "") + "(" + input + ")"
}

var regexp = RegExp([skeys, shex, srgb + slist, shsl + slist].join("|"), "gi")

color.replace = function(string, method){
    if (!method) method = function(match){
        return color(match)
    }
    return (string + "").replace(regexp, method)
}

color.matches = function(string){
    return !!(string + "").match(regexp)
}

module.exports = color

},{}],17:[function(require,module,exports){
var luminance = require('relative-luminance');
var hexRgb = require('hex-rgb');

// http://www.w3.org/TR/WCAG20/#contrast-ratiodef

module.exports.luminance = fromLum;
module.exports.rgb = fromRGB;
module.exports.hex = fromHex;
module.exports.score = score;

/*
 * @param {number} a luminance value
 * @param {number} b luminance value
 * @returns {number} contrast ratio
 */
function fromLum(a, b) {
    var l1 = Math.max(a, b),
        l2 = Math.min(a, b);
    return (l1 + 0.05) / (l2 + 0.05);
}

/*
 * @param {array} a rgb value
 * @param {array} b rgb value
 * @returns {number} contrast ratio
 */
function fromRGB(a, b) {
    return fromLum(luminance(a), luminance(b));
}

/*
 * @param {string} a hex value
 * @param {string} b hex value
 * @returns {number} contrast ratio
 */
function fromHex(a, b) {
    return fromRGB(hexRgb(a), hexRgb(b));
}

/*
 * @param {array} a rgb value
 * @param {array} b rgb value
 * @returns {number} contrast ratio
 */
function score(contrast) {
    return (contrast >= 7) ? 'AAA' : (contrast >= 4.5) ? 'AA' : '';
}

},{"hex-rgb":10,"relative-luminance":15}],18:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = background;

var _color = require("./color");

var _color2 = _interopRequireDefault(_color);

var _colorPalette = require("./color-palette");

var colorPalette = _interopRequireWildcard(_colorPalette);

var _util = require("./util");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function background(element, options) {
  var theme = (0, _util.getTheme)(options);
  options = Object.assign({
    color: theme[2]
  }, options);

  element.style.backgroundColor = colorPalette.getColor(options.color, options.shade);
} // material.background(el, { color: "Indigo", shade: 700 });


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
  var theme = (0, _util.getTheme)(options);

  options = Object.assign({
    color: theme[0]
  }, options);

  background(element, options);
};

background.appBar = function appBar(element, options) {
  var theme = (0, _util.getTheme)(options);

  options = Object.assign({
    color: theme[1]
  }, options);

  background(element, options);
};

background.card = function card(element, options) {
  var theme = (0, _util.getTheme)(options);

  options = Object.assign({
    color: theme[3]
  }, options);

  background(element, options);
};

background.dialog = background.card;

},{"./color":21,"./color-palette":20,"./util":26}],19:[function(require,module,exports){
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

},{}],20:[function(require,module,exports){
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

},{"./color-palette.json":19}],21:[function(require,module,exports){
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
  getColor: function getColor(options) {
    return colorPalette.getColor(options.color, options.shade);
  }
};

exports.default = colorScheme;

},{"./color-palette":20}],22:[function(require,module,exports){
module.exports={
  "shadows": [
    "none",
    "0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12)",
    "0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)",
    "0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12)",
    "0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)",
    "0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12)",
    "0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",
    "0px 4px 5px -2px rgba(0, 0, 0, 0.2), 0px 7px 10px 1px rgba(0, 0, 0, 0.14), 0px 2px 16px 1px rgba(0, 0, 0, 0.12)",
    "0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12)",
    "0px 5px 6px -3px rgba(0, 0, 0, 0.2), 0px 9px 12px 1px rgba(0, 0, 0, 0.14), 0px 3px 16px 2px rgba(0, 0, 0, 0.12)",
    "0px 6px 6px -3px rgba(0, 0, 0, 0.2), 0px 10px 14px 1px rgba(0, 0, 0, 0.14), 0px 4px 18px 3px rgba(0, 0, 0, 0.12)",
    "0px 6px 7px -4px rgba(0, 0, 0, 0.2), 0px 11px 15px 1px rgba(0, 0, 0, 0.14), 0px 4px 20px 3px rgba(0, 0, 0, 0.12)",
    "0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12)",
    "0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 13px 19px 2px rgba(0, 0, 0, 0.14), 0px 5px 24px 4px rgba(0, 0, 0, 0.12)",
    "0px 7px 9px -4px rgba(0, 0, 0, 0.2), 0px 14px 21px 2px rgba(0, 0, 0, 0.14), 0px 5px 26px 4px rgba(0, 0, 0, 0.12)",
    "0px 8px 9px -5px rgba(0, 0, 0, 0.2), 0px 15px 22px 2px rgba(0, 0, 0, 0.14), 0px 6px 28px 5px rgba(0, 0, 0, 0.12)",
    "0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12)",
    "0px 8px 11px -5px rgba(0, 0, 0, 0.2), 0px 17px 26px 2px rgba(0, 0, 0, 0.14), 0px 6px 32px 5px rgba(0, 0, 0, 0.12)",
    "0px 9px 11px -5px rgba(0, 0, 0, 0.2), 0px 18px 28px 2px rgba(0, 0, 0, 0.14), 0px 7px 34px 6px rgba(0, 0, 0, 0.12)",
    "0px 9px 12px -6px rgba(0, 0, 0, 0.2), 0px 19px 29px 2px rgba(0, 0, 0, 0.14), 0px 7px 36px 6px rgba(0, 0, 0, 0.12)", 
    "0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 20px 31px 3px rgba(0, 0, 0, 0.14), 0px 8px 38px 7px rgba(0, 0, 0, 0.12)",
    "0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 21px 33px 3px rgba(0, 0, 0, 0.14), 0px 8px 40px 7px rgba(0, 0, 0, 0.12)",
    "0px 10px 14px -6px rgba(0, 0, 0, 0.2), 0px 22px 35px 3px rgba(0, 0, 0, 0.14), 0px 8px 42px 7px rgba(0, 0, 0, 0.12)",
    "0px 11px 14px -7px rgba(0, 0, 0, 0.2), 0px 23px 36px 3px rgba(0, 0, 0, 0.14), 0px 9px 44px 8px rgba(0, 0, 0, 0.12)",
    "0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12)"
  ]
}

},{}],23:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = elevation;

var _elevation = require("./elevation.json");

function elevation(el, options) {
  var level = options && options.level || 0;
  el.style.boxShadow = _elevation.shadows[level];
}

},{"./elevation.json":22}],24:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.text = exports.elevation = exports.color = exports.background = undefined;

var _background = require("./background");

var _background2 = _interopRequireDefault(_background);

var _color = require("./color");

var _color2 = _interopRequireDefault(_color);

var _elevation = require("./elevation");

var _elevation2 = _interopRequireDefault(_elevation);

var _text = require("./text");

var _text2 = _interopRequireDefault(_text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.background = _background2.default;
exports.color = _color2.default;
exports.elevation = _elevation2.default;
exports.text = _text2.default;

},{"./background":18,"./color":21,"./elevation":23,"./text":25}],25:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = text;

var _color = require("./color");

var _color2 = _interopRequireDefault(_color);

var _colorPalette = require("./color-palette");

var colorPalette = _interopRequireWildcard(_colorPalette);

var _util = require("./util");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function text(element, options) {
  var textColor = (0, _util.getTextColor)(options);
  var opacity = (0, _util.getPrimaryTextOpacity)(textColor);

  options = Object.assign({
    fontFamily: "Roboto, sans-serif",
    fontWeight: "400",
    fontSize: "14px",
    color: textColor,
    opacity: opacity
  }, options);

  element.style.fontFamily = options.fontFamily;
  element.style.fontWeight = options.fontWeight;
  element.style.fontSize = options.fontSize;
  element.style.color = options.color;
  element.style.opacity = options.opacity;

  if (options.lineHeight) {
    element.style.lineHeight = options.lineHeight;
  }
} // material.background(el, { color: "Indigo", shade: 700 });


text.display4 = function display4(element, options) {
  var textColor = (0, _util.getTextColor)(options);
  var opacity = (0, _util.getSecondaryTextOpacity)(textColor);

  options = Object.assign({
    fontWeight: "300",
    fontSize: "112px",
    color: textColor,
    opacity: opacity
  }, options);

  text(element, options);
};

text.display3 = function display3(element, options) {
  var textColor = (0, _util.getTextColor)(options);
  var opacity = (0, _util.getSecondaryTextOpacity)(textColor);

  options = Object.assign({
    fontSize: "56px",
    color: textColor,
    opacity: opacity
  }, options);

  text(element, options);
};

text.display2 = function display2(element, options) {
  var textColor = (0, _util.getTextColor)(options);
  var opacity = (0, _util.getSecondaryTextOpacity)(textColor);

  options = Object.assign({
    fontSize: "45px",
    color: textColor,
    opacity: opacity,
    lineHeight: "48px"
  }, options);

  text(element, options);
};

text.display = function display(element, options) {
  var textColor = (0, _util.getTextColor)(options);
  var opacity = (0, _util.getSecondaryTextOpacity)(textColor);

  options = Object.assign({
    fontSize: "34px",
    color: textColor,
    opacity: opacity,
    lineHeight: "40px"
  }, options);

  text(element, options);
};

text.headline = function headline(element, options) {
  options = Object.assign({
    fontSize: "24px",
    lineHeight: "32px"
  }, options);

  text(element, options);
};

text.title = function title(element, options) {
  options = Object.assign({
    fontWeight: "500",
    fontSize: "20px"
  }, options);

  text(element, options);
};

text.subheading2 = function subheading2(element, options) {
  // Desktop font size is 15px per the spec. Ignoring for now.
  options = Object.assign({
    fontSize: "16px",
    lineHeight: "28px"
  }, options);

  text(element, options);
};

text.subheading = function subheading(element, options) {
  // Desktop font size is 15px per the spec. Ignoring for now.
  options = Object.assign({
    fontSize: "16px",
    lineHeight: "24px"
  }, options);

  text(element, options);
};

text.body2 = function body2(element, options) {
  // Desktop font size is 13px per the spec. Ignoring for now.
  options = Object.assign({
    fontWeight: "500",
    fontSize: "14px",
    lineHeight: "28px"
  }, options);

  text(element, options);
};

text.body = function body(element, options) {
  // Desktop font size is 13px per the spec. Ignoring for now.
  options = Object.assign({
    fontSize: "14px",
    lineHeight: "24px"
  }, options);

  text(element, options);
};

text.caption = function caption(element, options) {
  options = Object.assign({
    fontSize: "12px",
    lineHeight: "14px"
  }, options);

  text(element, options);
};

text.button = function button(element, options) {
  options = Object.assign({
    fontSize: "14px",
    fontWeight: "500"
  }, options);

  text(element, options);
  element.style.textTransform = "uppercase";
};

},{"./color":21,"./color-palette":20,"./util":26}],26:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTheme = getTheme;
exports.getTextColor = getTextColor;
exports.getPrimaryTextOpacity = getPrimaryTextOpacity;
exports.getSecondaryTextOpacity = getSecondaryTextOpacity;

var _color = require("./color");

var _color2 = _interopRequireDefault(_color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var lightTextOpacity = {
  primary: 1,
  secondary: .7,
  disabled: .5,
  divider: .12
};

var darkTextOpacity = {
  primary: .87,
  secondary: .54,
  disabled: .38,
  divider: .12
};

function getTheme(options) {
  if (options && options.theme) return _color2.default.getThemeColors(options.theme);
  return _color2.default.getThemeColors(_color2.default.theme);
}

function getTextColor(options) {
  if (options && options.color) return options.color;

  if (options && options.theme === "light") return "black";
  if (options && options.theme === "dark") return "white";
  if (_color2.default.theme === "light") return "black";
  if (_color2.default.theme === "dark") return "white";

  throw new Error("Unknown text color");
}

function getPrimaryTextOpacity(color) {
  if (color === "white") return lightTextOpacity.primary;
  return darkTextOpacity.primary;
}

function getSecondaryTextOpacity(color) {
  if (color === "white") return lightTextOpacity.secondary;
  return darkTextOpacity.secondary;
}

},{"./color":21}]},{},[3])(3)
});