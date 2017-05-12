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

var _jsuaStyle = require("@lynx-json/jsua-style");

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

function calculateTextColor(backgroundColor, shade) {
  backgroundColor = material.color.getColor(backgroundColor, shade);
  var darkRatio = _getContrast2.default.ratio(backgroundColor, "#000000");
  var lightRatio = _getContrast2.default.ratio(backgroundColor, "#ffffff");
  return darkRatio > lightRatio ? "black" : "white";
}

function backgroundExamples() {
  (0, _util.clearExamples)();

  createBackgroundExample("Known color and shade (Blue Grey, 900)", function (el) {
    (0, _jsuaStyle.query)(el).each(material.background("Blue Grey", 900));
    (0, _jsuaStyle.query)(el.firstElementChild).each(material.text.body("white"));
  });

  createBackgroundExample("Custom color and shade (#ff0000, 300)", function (el) {
    (0, _jsuaStyle.query)(el).each(material.background("#ff0000", 300));
    (0, _jsuaStyle.query)(el.firstElementChild).each(material.text.body());
  });

  createBackgroundExample("Primary Color, Shade: 500 (default)", function (el) {
    (0, _jsuaStyle.query)(el).each(material.background.primary());
    (0, _jsuaStyle.query)(el.firstElementChild).each(material.text.body("white"));
  });

  createBackgroundExample("Primary Color, Shade: 50", function (el) {
    (0, _jsuaStyle.query)(el).each(material.background.primary(50));
    (0, _jsuaStyle.query)(el.firstElementChild).each(material.text.body());
  });

  createBackgroundExample("Primary Color, Shade: 100", function (el) {
    (0, _jsuaStyle.query)(el).each(material.background.primary(100));
    (0, _jsuaStyle.query)(el.firstElementChild).each(material.text.body());
  });

  createBackgroundExample("Primary Color, Shade: 200", function (el) {
    (0, _jsuaStyle.query)(el).each(material.background.primary(200));
    (0, _jsuaStyle.query)(el.firstElementChild).each(material.text.body());
  });

  createBackgroundExample("Primary Color, Shade: 300", function (el) {
    (0, _jsuaStyle.query)(el).each(material.background.primary(300));
    (0, _jsuaStyle.query)(el.firstElementChild).each(material.text.body());
  });

  createBackgroundExample("Primary Color, Shade: 400", function (el) {
    (0, _jsuaStyle.query)(el).each(material.background.primary(400));
    (0, _jsuaStyle.query)(el.firstElementChild).each(material.text.body("white"));
  });

  createBackgroundExample("Primary Color, Shade: 500", function (el) {
    (0, _jsuaStyle.query)(el).each(material.background.primary(500));
    (0, _jsuaStyle.query)(el.firstElementChild).each(material.text.body("white"));
  });

  createBackgroundExample("Primary Color, Shade: 600", function (el) {
    (0, _jsuaStyle.query)(el).each(material.background.primary(600));
    (0, _jsuaStyle.query)(el.firstElementChild).each(material.text.body("white"));
  });

  createBackgroundExample("Primary Color, Shade: 700", function (el) {
    (0, _jsuaStyle.query)(el).each(material.background.primary(700));
    (0, _jsuaStyle.query)(el.firstElementChild).each(material.text.body("white"));
  });

  createBackgroundExample("Primary Color, Shade: 800", function (el) {
    (0, _jsuaStyle.query)(el).each(material.background.primary(800));
    (0, _jsuaStyle.query)(el.firstElementChild).each(material.text.body("white"));
  });

  createBackgroundExample("Primary Color, Shade: 900", function (el) {
    (0, _jsuaStyle.query)(el).each(material.background.primary(900));
    (0, _jsuaStyle.query)(el.firstElementChild).each(material.text.body("white"));
  });

  createBackgroundExample("Accent Color, Shade: A200 (default)", function (el) {
    (0, _jsuaStyle.query)(el).each(material.background.accent());
    (0, _jsuaStyle.query)(el.firstElementChild).each(material.text.body());
  });

  createBackgroundExample("Accent Color, Shade: A100", function (el) {
    (0, _jsuaStyle.query)(el).each(material.background.accent("A100"));
    (0, _jsuaStyle.query)(el.firstElementChild).each(material.text.body());
  });

  createBackgroundExample("Accent Color, Shade: A200", function (el) {
    (0, _jsuaStyle.query)(el).each(material.background.accent("A200"));
    (0, _jsuaStyle.query)(el.firstElementChild).each(material.text.body());
  });

  createBackgroundExample("Accent Color, Shade: A400", function (el) {
    (0, _jsuaStyle.query)(el).each(material.background.accent("A400"));
    (0, _jsuaStyle.query)(el.firstElementChild).each(material.text.body());
  });

  createBackgroundExample("Accent Color, Shade: A700", function (el) {
    (0, _jsuaStyle.query)(el).each(material.background.accent("A700"));
    (0, _jsuaStyle.query)(el.firstElementChild).each(material.text.body());
  });

  createBackgroundExample("Status bar, light theme (default)", function (el) {
    (0, _jsuaStyle.query)(el).each(material.background.statusBar());
    (0, _jsuaStyle.query)(el.firstElementChild).each(material.text.body());
  });

  createBackgroundExample("App bar, light theme (default)", function (el) {
    (0, _jsuaStyle.query)(el).each(material.background.appBar());
    (0, _jsuaStyle.query)(el.firstElementChild).each(material.text.body());
  });

  createBackgroundExample("Main background, light theme (default)", function (el) {
    (0, _jsuaStyle.query)(el).each(material.background.main());
    (0, _jsuaStyle.query)(el.firstElementChild).each(material.text.body());
  });

  createBackgroundExample("Card/Dialog, light theme (default)", function (el) {
    (0, _jsuaStyle.query)(el).each(material.background.card());
    (0, _jsuaStyle.query)(el.firstElementChild).each(material.text.body());
  });

  createBackgroundExample("Status bar, dark theme", function (el) {
    (0, _jsuaStyle.query)(el).each(material.background.statusBar("dark"));
    (0, _jsuaStyle.query)(el.firstElementChild).each(material.text.body("white"));
  });

  createBackgroundExample("App bar, dark theme", function (el) {
    (0, _jsuaStyle.query)(el).each(material.background.appBar("dark"));
    (0, _jsuaStyle.query)(el.firstElementChild).each(material.text.body("white"));
  });

  createBackgroundExample("Main background, dark theme", function (el) {
    (0, _jsuaStyle.query)(el).each(material.background.main("dark"));
    (0, _jsuaStyle.query)(el.firstElementChild).each(material.text.body("white"));
  });

  createBackgroundExample("Card/Dialog, dark theme", function (el) {
    (0, _jsuaStyle.query)(el).each(material.background.card("dark"));
    (0, _jsuaStyle.query)(el.firstElementChild).each(material.text.body("white"));
  });
}

},{"../src":337,"./util":12,"@lynx-json/jsua-style":15,"get-contrast":320}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = cardExamples;

var _src = require("../src");

var material = _interopRequireWildcard(_src);

var _util = require("./util");

var _jsuaStyle = require("@lynx-json/jsua-style");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function createCardExample(label, cb) {
  (0, _util.createExample)(function (el) {
    el.style.margin = "16px";
    el.style.padding = "16px";
    var labelElement = document.createElement("pre");
    labelElement.textContent = label;
    labelElement.style.marginBottom = "16px";
    el.appendChild(labelElement);

    var contentElement = document.createElement("div");
    contentElement.textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    el.appendChild(contentElement);

    cb(el);
  });
}

function cardExamples() {
  (0, _util.clearExamples)();

  createCardExample("Light theme (default)", function (el) {
    (0, _jsuaStyle.query)(el).each(material.card());
    (0, _jsuaStyle.query)(el.firstElementChild).each(material.text.headline());
    (0, _jsuaStyle.query)(el.lastElementChild).each(material.text.body());
  });

  createCardExample("Dark theme", function (el) {
    material.color.theme = "dark";

    (0, _jsuaStyle.query)(el).each(material.card());
    (0, _jsuaStyle.query)(el.firstElementChild).each(material.text.headline());
    (0, _jsuaStyle.query)(el.lastElementChild).each(material.text.body());

    material.color.theme = "light";
  });

  createCardExample("Custom background", function (el) {
    (0, _jsuaStyle.query)(el).each([material.card(), material.background("Orange", 900)]);
    (0, _jsuaStyle.query)(el.firstElementChild).each(material.text.headline("white"));
    (0, _jsuaStyle.query)(el.lastElementChild).each(material.text.body("white"));
  });
}

},{"../src":337,"./util":12,"@lynx-json/jsua-style":15}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = backgroundExamples;

var _src = require("../src");

var material = _interopRequireWildcard(_src);

var _util = require("./util");

var _jsuaStyle = require("@lynx-json/jsua-style");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function createElevationExample(label, level) {
  (0, _util.createExample)(function (el) {
    var labelElement = document.createElement("pre");
    labelElement.textContent = label;
    el.appendChild(labelElement);

    (0, _jsuaStyle.query)(el).each([material.background.main(), material.elevation(level), function (el) {
      return el.style.padding = "16px";
    }, function (el) {
      return el.style.marginBottom = "32px";
    }]);
    (0, _jsuaStyle.query)(labelElement).each(material.text.body());
  });
}

function backgroundExamples() {
  (0, _util.clearExamples)();
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

},{"../src":337,"./util":12,"@lynx-json/jsua-style":15}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = motionExamples;

var _src = require("../src");

var material = _interopRequireWildcard(_src);

var _util = require("./util");

var _jsuaStyle = require("@lynx-json/jsua-style");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function createExpansionPanelExample(label, cb) {
  (0, _util.createExample)(function (el) {
    var labelElement = document.createElement("pre");
    labelElement.textContent = label;
    el.appendChild(labelElement);

    var contentElement = document.createElement("div");
    contentElement.textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    el.appendChild(contentElement);
    cb(el);
  });
}

function motionExamples() {
  (0, _util.clearExamples)();

  createExpansionPanelExample("Light theme (default)", function (el) {
    var header = el.firstElementChild;

    (0, _jsuaStyle.query)(el).each([material.expansionPanel(), material.elevation(2), function (el) {
      return el.style.margin = "24px";
    }]);

    (0, _jsuaStyle.query)(header).each(material.expansionPanel.header());
  });

  createExpansionPanelExample("Dark theme", function (el) {
    var header = el.firstElementChild;

    material.color.theme = "dark";

    (0, _jsuaStyle.query)(el).each([material.expansionPanel(), material.background.main(), function (el) {
      return el.style.margin = "24px";
    }, material.elevation(2)]);

    (0, _jsuaStyle.query)(header).each(material.expansionPanel.header());

    material.color.theme = "light";
  });

  createExpansionPanelExample("Custom background", function (el) {
    var header = el.firstElementChild;

    (0, _jsuaStyle.query)(el).each([material.expansionPanel({
      textColor: "white"
    }), material.background("Orange", 800), function (el) {
      return el.style.margin = "24px";
    }, material.elevation(2)]);

    (0, _jsuaStyle.query)(header).each(material.expansionPanel.header());
  });

  createExpansionPanelExample("Expanded", function (el) {
    var header = el.firstElementChild;
    (0, _jsuaStyle.query)(el).each([material.expansionPanel({
      state: "expanded"
    }), material.elevation(2), function (el) {
      return el.style.margin = "24px";
    }]);

    (0, _jsuaStyle.query)(header).each(material.expansionPanel.header());
  });

  createExpansionPanelExample("Large header", function (el) {
    var header = el.firstElementChild;
    header.textContent = "\n" + header.textContent + "\n\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n      ";

    (0, _jsuaStyle.query)(el).each([material.expansionPanel(), material.elevation(2), function (el) {
      return el.style.margin = "24px";
    }]);

    (0, _jsuaStyle.query)(header).each(material.expansionPanel.header());
  });
}

},{"../src":337,"./util":12,"@lynx-json/jsua-style":15}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = gridExamples;

var _src = require("../src");

var material = _interopRequireWildcard(_src);

var _util = require("./util");

var _jsuaStyle = require("@lynx-json/jsua-style");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function gridExamples() {
  (0, _util.clearExamples)();

  (0, _util.createExample)(function (el) {
    (0, _jsuaStyle.query)(el).each(material.grid(12, "16px"));

    for (var i = 1; i <= 12; i++) {
      var cell = document.createElement("div");
      cell.style.textAlign = "center";
      cell.style.padding = "8px";
      el.firstElementChild.appendChild(cell);

      var cellText = document.createElement("pre");
      cellText.textContent = i;
      material.text.caption(cellText);
      cell.appendChild(cellText);

      (0, _jsuaStyle.query)(cell).each([material.grid.column(i, 12 - i), material.background.primary(50)]);
    }
  });
}

},{"../src":337,"./util":12,"@lynx-json/jsua-style":15}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.textFieldExamples = exports.textExamples = exports.raisedButtonExamples = exports.menuExamples = exports.init = exports.gridExamples = exports.expansionPanelExamples = exports.elevationExamples = exports.cardExamples = exports.backgroundExamples = undefined;

require("babel-polyfill");

var _backgroundExamples = require("./background-examples");

var _backgroundExamples2 = _interopRequireDefault(_backgroundExamples);

var _cardExamples = require("./card-examples");

var _cardExamples2 = _interopRequireDefault(_cardExamples);

var _elevationExamples = require("./elevation-examples");

var _elevationExamples2 = _interopRequireDefault(_elevationExamples);

var _expansionPanelExamples = require("./expansion-panel-examples");

var _expansionPanelExamples2 = _interopRequireDefault(_expansionPanelExamples);

var _gridExamples = require("./grid-examples");

var _gridExamples2 = _interopRequireDefault(_gridExamples);

var _init = require("./init");

var _init2 = _interopRequireDefault(_init);

var _menuExamples = require("./menu-examples");

var _menuExamples2 = _interopRequireDefault(_menuExamples);

var _raisedButtonExamples = require("./raised-button-examples");

var _raisedButtonExamples2 = _interopRequireDefault(_raisedButtonExamples);

var _textExamples = require("./text-examples");

var _textExamples2 = _interopRequireDefault(_textExamples);

var _textFieldExamples = require("./text-field-examples");

var _textFieldExamples2 = _interopRequireDefault(_textFieldExamples);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.backgroundExamples = _backgroundExamples2.default;
exports.cardExamples = _cardExamples2.default;
exports.elevationExamples = _elevationExamples2.default;
exports.expansionPanelExamples = _expansionPanelExamples2.default;
exports.gridExamples = _gridExamples2.default;
exports.init = _init2.default;
exports.menuExamples = _menuExamples2.default;
exports.raisedButtonExamples = _raisedButtonExamples2.default;
exports.textExamples = _textExamples2.default;
exports.textFieldExamples = _textFieldExamples2.default;

},{"./background-examples":1,"./card-examples":2,"./elevation-examples":3,"./expansion-panel-examples":4,"./grid-examples":5,"./init":7,"./menu-examples":8,"./raised-button-examples":9,"./text-examples":10,"./text-field-examples":11,"babel-polyfill":22}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var appElement = document.getElementById("app");

  (0, _jsuaStyle.query)(appElement).filter((0, _util.matchesMedia)(smallScreen)).each([function (el) {
    return el.dataset.screenSize = "small";
  }, material.grid(4, "16px")]);

  (0, _jsuaStyle.query)(appElement).filter((0, _util.matchesMedia)(mediumScreen)).each([function (el) {
    return el.dataset.screenSize = "medium";
  }, material.grid(8, "16px")]);

  (0, _jsuaStyle.query)(appElement).filter((0, _util.matchesMedia)(largeScreen)).each([function (el) {
    return el.dataset.screenSize = "large";
  }, material.grid(12, "24px")]);

  (0, _jsuaStyle.query)(appElement).select("[data-screen-size=small] > * > *").each(material.grid.column(4));

  (0, _jsuaStyle.query)(appElement).select("[data-screen-size=medium] > * > *").each(material.grid.column(8));

  (0, _jsuaStyle.query)(appElement).select("[data-screen-size=large] > * > *").each(material.grid.column(8, 2));

  (0, _jsuaStyle.query)(document.getElementById("menu")).each(material.menu());

  (0, _jsuaStyle.query)(document.getElementById("menu-label")).each(material.menu.header());

  (0, _jsuaStyle.query)(app).select("[data-jsua-style-component=material-menu] > * > [data-jsua-style-slot=content] > *").each(material.menu.item());
};

var _jsuaStyle = require("@lynx-json/jsua-style");

var _src = require("../src");

var material = _interopRequireWildcard(_src);

var _util = require("./util");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var largeScreen = "(min-width: 840px)";
var mediumScreen = "(min-width: 600px) and (max-width: 839px)";
var smallScreen = "(max-width: 599px)";

},{"../src":337,"./util":12,"@lynx-json/jsua-style":15}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = cardExamples;

var _src = require("../src");

var material = _interopRequireWildcard(_src);

var _util = require("./util");

var _jsuaStyle = require("@lynx-json/jsua-style");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function createMenuExample(label, cb) {
  (0, _util.createExample)(function (el) {
    var labelElement = document.createElement("pre");
    labelElement.textContent = label;
    el.appendChild(labelElement);

    for (var i = 0; i < 5; i++) {
      var item = document.createElement("div");
      item.appendChild(document.createElement("pre"));
      item.firstElementChild.textContent = "Item " + i;
      el.appendChild(item);
    }

    cb(el);
  });
}

function cardExamples() {
  (0, _util.clearExamples)();

  createMenuExample("Light theme (default)", function (el) {
    var label = el.firstElementChild;
    (0, _jsuaStyle.query)(el).each(material.menu());
    (0, _jsuaStyle.query)(label).each(material.menu.header());
    (0, _jsuaStyle.query)(el.lastElementChild.firstElementChild).map(function (el) {
      return el.children;
    }).each(material.menu.item());
  });

  createMenuExample("Dark theme", function (el) {
    material.color.theme = "dark";

    var label = el.firstElementChild;
    (0, _jsuaStyle.query)(el).each([material.menu(), material.background.main()]);
    (0, _jsuaStyle.query)(label).each(material.menu.header());
    (0, _jsuaStyle.query)(el.lastElementChild.firstElementChild).map(function (el) {
      return el.children;
    }).each(material.menu.item());

    material.color.theme = "light";
  });

  createMenuExample("Custom color", function (el) {
    var label = el.firstElementChild;
    (0, _jsuaStyle.query)(el).each([material.menu({
      textColor: "white"
    }), material.background("Orange", 900)]);

    (0, _jsuaStyle.query)(el.lastElementChild).each(material.background("Orange", 500));

    (0, _jsuaStyle.query)(label).each(material.menu.header());
    (0, _jsuaStyle.query)(el.lastElementChild.firstElementChild).map(function (el) {
      return el.children;
    }).each([material.menu.item(), (0, _jsuaStyle.on)("mouseover", material.background("Orange", 700))]);
  });

  createMenuExample("Open State", function (el) {
    var label = el.firstElementChild;
    (0, _jsuaStyle.query)(el).each(material.menu({
      state: "open"
    }));
    (0, _jsuaStyle.query)(label).each(material.menu.header());
    (0, _jsuaStyle.query)(el.lastElementChild.firstElementChild).map(function (el) {
      return el.children;
    }).each(material.menu.item());
  });
}

},{"../src":337,"./util":12,"@lynx-json/jsua-style":15}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = raisedButtonExamples;

var _src = require("../src");

var material = _interopRequireWildcard(_src);

var _util = require("./util");

var _jsuaStyle = require("@lynx-json/jsua-style");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function createRaisedButtonExample(label, cb) {
  (0, _util.createExample)(function (el) {
    var labelElement = document.createElement("pre");
    labelElement.textContent = label;
    el.appendChild(labelElement);
    material.background(el);
    el.style.padding = "16px";

    cb(el);
  });
}

function raisedButtonExamples() {
  (0, _util.clearExamples)();

  createRaisedButtonExample("Primary background", function (el) {
    (0, _jsuaStyle.query)(el).each([material.raisedButton({
      textColor: "white"
    }), material.background.primary()]);
  });

  createRaisedButtonExample("Accent background", function (el) {
    (0, _jsuaStyle.query)(el).each([material.raisedButton(), material.background.accent()]);
  });
}

},{"../src":337,"./util":12,"@lynx-json/jsua-style":15}],10:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = textExamples;

var _src = require("../src");

var material = _interopRequireWildcard(_src);

var _util = require("./util");

var _jsuaStyle = require("@lynx-json/jsua-style");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function createTextExample(label, cb) {
  (0, _util.createExample)(function (el) {
    var labelElement = document.createElement("pre");
    labelElement.textContent = label;
    el.appendChild(labelElement);

    el.style.padding = "16px";

    cb(el);
  });
}

function textExamples() {
  (0, _util.clearExamples)();

  createTextExample("Display 4", function (el) {
    (0, _jsuaStyle.query)(el.firstElementChild).each(material.text.display4());
  });

  createTextExample("Display 3", function (el) {
    (0, _jsuaStyle.query)(el.firstElementChild).each(material.text.display3());
  });

  createTextExample("Display 2", function (el) {
    (0, _jsuaStyle.query)(el.firstElementChild).each(material.text.display2());
  });

  createTextExample("Display", function (el) {
    (0, _jsuaStyle.query)(el.firstElementChild).each(material.text.display());
  });

  createTextExample("Headline", function (el) {
    (0, _jsuaStyle.query)(el.firstElementChild).each(material.text.headline());
  });

  createTextExample("Title", function (el) {
    (0, _jsuaStyle.query)(el.firstElementChild).each(material.text.title());
  });

  createTextExample("Subheading 2", function (el) {
    (0, _jsuaStyle.query)(el.firstElementChild).each(material.text.subheading2());
  });

  createTextExample("Subheading", function (el) {
    (0, _jsuaStyle.query)(el.firstElementChild).each(material.text.subheading());
  });

  createTextExample("Body 2", function (el) {
    (0, _jsuaStyle.query)(el.firstElementChild).each(material.text.body2());
  });

  createTextExample("Body", function (el) {
    (0, _jsuaStyle.query)(el.firstElementChild).each(material.text.body());
  });

  createTextExample("Caption", function (el) {
    (0, _jsuaStyle.query)(el.firstElementChild).each(material.text.caption());
  });

  createTextExample("Button", function (el) {
    (0, _jsuaStyle.query)(el.firstElementChild).each(material.text.button());
  });

  createTextExample("Display 4", function (el) {
    (0, _jsuaStyle.query)(el).each(material.background.main("dark"));
    (0, _jsuaStyle.query)(el.firstElementChild).each(material.text.display4("white"));
  });

  createTextExample("Display 3", function (el) {
    (0, _jsuaStyle.query)(el).each(material.background.main("dark"));
    (0, _jsuaStyle.query)(el.firstElementChild).each(material.text.display3("white"));
  });

  createTextExample("Display 2", function (el) {
    (0, _jsuaStyle.query)(el).each(material.background.main("dark"));
    (0, _jsuaStyle.query)(el.firstElementChild).each(material.text.display2("white"));
  });

  createTextExample("Display", function (el) {
    (0, _jsuaStyle.query)(el).each(material.background.main("dark"));
    (0, _jsuaStyle.query)(el.firstElementChild).each(material.text.display("white"));
  });

  createTextExample("Headline", function (el) {
    (0, _jsuaStyle.query)(el).each(material.background.main("dark"));
    (0, _jsuaStyle.query)(el.firstElementChild).each(material.text.headline("white"));
  });

  createTextExample("Title", function (el) {
    (0, _jsuaStyle.query)(el).each(material.background.main("dark"));
    (0, _jsuaStyle.query)(el.firstElementChild).each(material.text.title("white"));
  });

  createTextExample("Subheading 2", function (el) {
    (0, _jsuaStyle.query)(el).each(material.background.main("dark"));
    (0, _jsuaStyle.query)(el.firstElementChild).each(material.text.subheading2("white"));
  });

  createTextExample("Subheading", function (el) {
    (0, _jsuaStyle.query)(el).each(material.background.main("dark"));
    (0, _jsuaStyle.query)(el.firstElementChild).each(material.text.subheading("white"));
  });

  createTextExample("Body 2", function (el) {
    (0, _jsuaStyle.query)(el).each(material.background.main("dark"));
    (0, _jsuaStyle.query)(el.firstElementChild).each(material.text.body2("white"));
  });

  createTextExample("Body", function (el) {
    (0, _jsuaStyle.query)(el).each(material.background.main("dark"));
    (0, _jsuaStyle.query)(el.firstElementChild).each(material.text.body("white"));
  });

  createTextExample("Caption", function (el) {
    (0, _jsuaStyle.query)(el).each(material.background.main("dark"));
    (0, _jsuaStyle.query)(el.firstElementChild).each(material.text.caption("white"));
  });

  createTextExample("Button", function (el) {
    (0, _jsuaStyle.query)(el).each(material.background.main("dark"));
    (0, _jsuaStyle.query)(el.firstElementChild).each(material.text.button("white"));
  });
}

},{"../src":337,"./util":12,"@lynx-json/jsua-style":15}],11:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = cardExamples;

var _src = require("../src");

var material = _interopRequireWildcard(_src);

var _util = require("./util");

var _jsuaStyle = require("@lynx-json/jsua-style");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function createInputExample(label, cb) {
  (0, _util.createExample)(function (el) {
    el.innerHTML = "\n      <div>\n        <div>" + label + "</div>\n        <input type=\"text\" value=\"Hello\" />\n      </div>\n    ";

    el.style.padding = "16px";

    cb(el.firstElementChild);
  });
}

function cardExamples() {
  (0, _util.clearExamples)();

  createInputExample("Light theme (default)", function (el) {
    (0, _jsuaStyle.query)(el).each(material.textField());
    (0, _jsuaStyle.query)(el.firstElementChild).each(material.textField.label());
    (0, _jsuaStyle.query)(el.lastElementChild).each(material.textField.singleLine());
  });

  createInputExample("Dark theme", function (el) {
    var options = {
      theme: "dark"
    };
    material.background(el.parentElement, options);
    (0, _jsuaStyle.query)(el).each(material.textField(options));
    (0, _jsuaStyle.query)(el.firstElementChild).each(material.textField.label(options));
    (0, _jsuaStyle.query)(el.lastElementChild).each(material.textField.singleLine(options));
  });

  createInputExample("Empty input", function (el) {
    el.lastElementChild.value = "";
    (0, _jsuaStyle.query)(el).each(material.textField());
    (0, _jsuaStyle.query)(el.firstElementChild).each(material.textField.label());
    (0, _jsuaStyle.query)(el.lastElementChild).each(material.textField.singleLine());
  });

  createInputExample("Floating label off", function (el) {
    el.lastElementChild.value = "";
    (0, _jsuaStyle.query)(el).each(material.textField());
    (0, _jsuaStyle.query)(el.firstElementChild).each(material.textField.label());
    (0, _jsuaStyle.query)(el.lastElementChild).each(material.textField.singleLine({
      floatingLabel: false
    }));
  });

  createInputExample("Error state", function (textField) {
    (0, _jsuaStyle.query)(textField).each(material.textField());
    (0, _jsuaStyle.query)(textField.firstElementChild).each(material.textField.label());
    (0, _jsuaStyle.query)(textField.lastElementChild).each([material.textField.singleLine(), function (el) {
      return textField.materialSetError();
    }, (0, _jsuaStyle.on)("input", function () {
      return textField.materialClearError();
    })]);
  });

  createInputExample("Dropdown", function (el) {
    (0, _jsuaStyle.query)(el).each(material.textField());
    (0, _jsuaStyle.query)(el.firstElementChild).each(material.textField.label());

    var select = document.createElement("select");
    select.innerHTML = "\n      <option value=\"1\">One</option>\n      <option value=\"2\">Two</option>\n      <option value=\"3\">Three</option>\n    ";
    el.replaceChild(select, el.lastElementChild);

    (0, _jsuaStyle.query)(el.lastElementChild).each(material.textField.dropdown());
  });

  createInputExample("Dropdown with error state", function (field) {
    (0, _jsuaStyle.query)(field).each(material.textField());
    (0, _jsuaStyle.query)(field.firstElementChild).each(material.textField.label());

    var select = document.createElement("select");
    select.innerHTML = "\n      <option value=\"1\">One</option>\n      <option value=\"2\">Two</option>\n      <option value=\"3\">Three</option>\n    ";
    field.replaceChild(select, field.lastElementChild);

    (0, _jsuaStyle.query)(field.lastElementChild).each([material.textField.dropdown(), function (el) {
      return field.materialSetError();
    }, (0, _jsuaStyle.on)("input", function () {
      return field.materialClearError();
    })]);
  });
  // createInputExample("Required state");?
  // createInputExample("Multiline");?
}

},{"../src":337,"./util":12,"@lynx-json/jsua-style":15}],12:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createExample = createExample;
exports.clearExamples = clearExamples;
exports.matchesMedia = matchesMedia;
function createExample(cb) {
  var examplesElement = document.getElementById("examples");

  var element = document.createElement("div");
  examplesElement.appendChild(element);
  cb(element);
}

function clearExamples() {
  var examplesElement = document.getElementById("examples");

  while (examplesElement.firstChild) {
    examplesElement.removeChild(examplesElement.firstChild);
  }
}

function matchesMedia(mediaQuery) {
  return function (el) {
    if (window.matchMedia(mediaQuery).matches) return el;
  };
}

},{}],13:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = component;

var _query = require("./query");

var _query2 = _interopRequireDefault(_query);

var _selectors = require("./selectors");

var _mappers = require("./mappers");

var _util = require("./util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import {
//   raiseEvent
// } from "./util";
// 

function component(name, innerHTML) {
  return function (element) {
    var slots = {};

    function addToSlot(el) {
      var slotName = el.getAttribute("data-jsua-style-slot-name") || "content";

      if (slots[slotName]) {
        slots[slotName].appendChild(el);
      }
    }

    if (innerHTML) {
      var componentTemplate = document.createElement("div");
      componentTemplate.innerHTML = innerHTML;

      (0, _query2.default)(componentTemplate).select("[data-jsua-style-slot]").each(function (slot) {
        return slots[slot.getAttribute("data-jsua-style-slot")] = slot;
      });

      var children = [];
      (0, _query2.default)(element).map(function (el) {
        return el.children;
      }).each(function (child) {
        children.push(child);
      });

      (0, _query2.default)(children).each(function (el) {
        return addToSlot(el);
      });

      while (componentTemplate.firstChild) {
        element.appendChild(componentTemplate.firstChild);
      }
    }

    element.addEventListener("jsua-style-slotted", function (evt) {
      if (evt.componentName !== name) return;
      addToSlot(evt.element);
    });

    (0, _util.addToken)(element, "data-jsua-style-component", name);
  };
}

component.slot = function (componentName, slotName) {
  return function (element) {
    (0, _query2.default)(element).map((0, _mappers.ancestors)()).filter((0, _selectors.first)("[data-jsua-style-component]")).each(function (component) {
      var evt = document.createEvent("Event");
      evt.componentName = componentName;
      evt.element = element;
      element.setAttribute("data-jsua-style-slot-name", slotName);
      evt.initEvent("jsua-style-slotted", false, false);
      component.dispatchEvent(evt);
    });
  };
};
},{"./mappers":16,"./query":18,"./selectors":19,"./util":21}],14:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = context;

var _util = require("./util");

function context(name) {
  return function (element) {
    (0, _util.addToken)(element, "data-jsua-context", name);
  };
}
},{"./util":21}],15:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.component = exports.selectors = exports.mappers = exports.when = exports.clearState = exports.setState = exports.on = exports.query = exports.context = undefined;

var _query = require("./query");

var _query2 = _interopRequireDefault(_query);

var _on = require("./on");

var _on2 = _interopRequireDefault(_on);

var _state = require("./state");

var _mappers = require("./mappers");

var mappers = _interopRequireWildcard(_mappers);

var _selectors = require("./selectors");

var selectors = _interopRequireWildcard(_selectors);

var _context = require("./context");

var _context2 = _interopRequireDefault(_context);

var _component = require("./component");

var _component2 = _interopRequireDefault(_component);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.context = _context2.default;
exports.query = _query2.default;
exports.on = _on2.default;
exports.setState = _state.setState;
exports.clearState = _state.clearState;
exports.when = _state.when;
exports.mappers = mappers;
exports.selectors = selectors;
exports.component = _component2.default;
},{"./component":13,"./context":14,"./mappers":16,"./on":17,"./query":18,"./selectors":19,"./state":20}],16:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.previousSiblings = previousSiblings;
exports.nextSiblings = nextSiblings;
exports.ancestors = ancestors;
function previousSiblings() {
  return regeneratorRuntime.mark(function _callee(el) {
    var previousSibling;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            previousSibling = el.previousElementSibling;

          case 1:
            if (!previousSibling) {
              _context.next = 7;
              break;
            }

            _context.next = 4;
            return previousSibling;

          case 4:
            previousSibling = previousSibling.previousElementSibling;
            _context.next = 1;
            break;

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  });
}

function nextSiblings() {
  return regeneratorRuntime.mark(function _callee2(el) {
    var nextSibling;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            nextSibling = el.nextElementSibling;

          case 1:
            if (!nextSibling) {
              _context2.next = 7;
              break;
            }

            _context2.next = 4;
            return nextSibling;

          case 4:
            nextSibling = nextSibling.nextElementSibling;
            _context2.next = 1;
            break;

          case 7:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  });
}

// export function siblings() {
//   return function* (el) {
//     yield* previousSiblings()(el);
//     yield* nextSiblings()(el);
//   };
// }

function ancestors() {
  return regeneratorRuntime.mark(function _callee3(el) {
    var ancestor;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            ancestor = el.parentElement;

          case 1:
            if (!ancestor) {
              _context3.next = 7;
              break;
            }

            _context3.next = 4;
            return ancestor;

          case 4:
            ancestor = ancestor.parentElement;
            _context3.next = 1;
            break;

          case 7:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  });
}
},{}],17:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = on;

var _util = require("./util");

function on(name, fn) {
  return function (el) {
    el.addEventListener(name, function (e) {
      (0, _util.executeFunctionOrArrayOfFunctions)(fn, el, e);
    });
  };
}
},{"./util":21}],18:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = query;

var _util = require("./util");

var _marked = [filter, select, map].map(regeneratorRuntime.mark);

function filter(selector, selection) {
  var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, e;

  return regeneratorRuntime.wrap(function filter$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _iteratorNormalCompletion = true;
          _didIteratorError = false;
          _iteratorError = undefined;
          _context.prev = 3;
          _iterator = selection[Symbol.iterator]();

        case 5:
          if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
            _context.next = 13;
            break;
          }

          e = _step.value;

          if (!(0, _util.matches)(selector, e)) {
            _context.next = 10;
            break;
          }

          _context.next = 10;
          return e;

        case 10:
          _iteratorNormalCompletion = true;
          _context.next = 5;
          break;

        case 13:
          _context.next = 19;
          break;

        case 15:
          _context.prev = 15;
          _context.t0 = _context["catch"](3);
          _didIteratorError = true;
          _iteratorError = _context.t0;

        case 19:
          _context.prev = 19;
          _context.prev = 20;

          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }

        case 22:
          _context.prev = 22;

          if (!_didIteratorError) {
            _context.next = 25;
            break;
          }

          throw _iteratorError;

        case 25:
          return _context.finish(22);

        case 26:
          return _context.finish(19);

        case 27:
        case "end":
          return _context.stop();
      }
    }
  }, _marked[0], this, [[3, 15, 19, 27], [20,, 22, 26]]);
}

function each(fn, selection) {
  var executedElements = [];
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = filter(function (el) {
      return el !== null && executedElements.indexOf(el) === -1;
    }, selection)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var el = _step2.value;

      (0, _util.executeFunctionOrArrayOfFunctions)(fn, el);
      executedElements.push(el);
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }
}

function select(selector, selection) {
  var _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, e, _iteratorNormalCompletion4, _didIteratorError4, _iteratorError4, _iterator4, _step4, descendant;

  return regeneratorRuntime.wrap(function select$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _iteratorNormalCompletion3 = true;
          _didIteratorError3 = false;
          _iteratorError3 = undefined;
          _context2.prev = 3;
          _iterator3 = selection[Symbol.iterator]();

        case 5:
          if (_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done) {
            _context2.next = 46;
            break;
          }

          e = _step3.value;

          if (e) {
            _context2.next = 9;
            break;
          }

          return _context2.abrupt("continue", 43);

        case 9:
          if (!(0, _util.matches)(selector, e)) {
            _context2.next = 12;
            break;
          }

          _context2.next = 12;
          return e;

        case 12:
          if (!(typeof selector === "function")) {
            _context2.next = 42;
            break;
          }

          _iteratorNormalCompletion4 = true;
          _didIteratorError4 = false;
          _iteratorError4 = undefined;
          _context2.prev = 16;
          _iterator4 = e.querySelectorAll("*")[Symbol.iterator]();

        case 18:
          if (_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done) {
            _context2.next = 26;
            break;
          }

          descendant = _step4.value;

          if (!selector(descendant)) {
            _context2.next = 23;
            break;
          }

          _context2.next = 23;
          return descendant;

        case 23:
          _iteratorNormalCompletion4 = true;
          _context2.next = 18;
          break;

        case 26:
          _context2.next = 32;
          break;

        case 28:
          _context2.prev = 28;
          _context2.t0 = _context2["catch"](16);
          _didIteratorError4 = true;
          _iteratorError4 = _context2.t0;

        case 32:
          _context2.prev = 32;
          _context2.prev = 33;

          if (!_iteratorNormalCompletion4 && _iterator4.return) {
            _iterator4.return();
          }

        case 35:
          _context2.prev = 35;

          if (!_didIteratorError4) {
            _context2.next = 38;
            break;
          }

          throw _iteratorError4;

        case 38:
          return _context2.finish(35);

        case 39:
          return _context2.finish(32);

        case 40:
          _context2.next = 43;
          break;

        case 42:
          return _context2.delegateYield(e.querySelectorAll(selector), "t1", 43);

        case 43:
          _iteratorNormalCompletion3 = true;
          _context2.next = 5;
          break;

        case 46:
          _context2.next = 52;
          break;

        case 48:
          _context2.prev = 48;
          _context2.t2 = _context2["catch"](3);
          _didIteratorError3 = true;
          _iteratorError3 = _context2.t2;

        case 52:
          _context2.prev = 52;
          _context2.prev = 53;

          if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
          }

        case 55:
          _context2.prev = 55;

          if (!_didIteratorError3) {
            _context2.next = 58;
            break;
          }

          throw _iteratorError3;

        case 58:
          return _context2.finish(55);

        case 59:
          return _context2.finish(52);

        case 60:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked[1], this, [[3, 48, 52, 60], [16, 28, 32, 40], [33,, 35, 39], [53,, 55, 59]]);
}

function map(fn, selection) {
  var _iteratorNormalCompletion5, _didIteratorError5, _iteratorError5, _iterator5, _step5, e, result;

  return regeneratorRuntime.wrap(function map$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _iteratorNormalCompletion5 = true;
          _didIteratorError5 = false;
          _iteratorError5 = undefined;
          _context3.prev = 3;
          _iterator5 = selection[Symbol.iterator]();

        case 5:
          if (_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done) {
            _context3.next = 19;
            break;
          }

          e = _step5.value;
          result = fn(e);

          if (result) {
            _context3.next = 10;
            break;
          }

          return _context3.abrupt("continue", 16);

        case 10:
          if (!result.tagName) {
            _context3.next = 15;
            break;
          }

          _context3.next = 13;
          return result;

        case 13:
          _context3.next = 16;
          break;

        case 15:
          return _context3.delegateYield(result, "t0", 16);

        case 16:
          _iteratorNormalCompletion5 = true;
          _context3.next = 5;
          break;

        case 19:
          _context3.next = 25;
          break;

        case 21:
          _context3.prev = 21;
          _context3.t1 = _context3["catch"](3);
          _didIteratorError5 = true;
          _iteratorError5 = _context3.t1;

        case 25:
          _context3.prev = 25;
          _context3.prev = 26;

          if (!_iteratorNormalCompletion5 && _iterator5.return) {
            _iterator5.return();
          }

        case 28:
          _context3.prev = 28;

          if (!_didIteratorError5) {
            _context3.next = 31;
            break;
          }

          throw _iteratorError5;

        case 31:
          return _context3.finish(28);

        case 32:
          return _context3.finish(25);

        case 33:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked[2], this, [[3, 21, 25, 33], [26,, 28, 32]]);
}

function query(selection) {
  if (selection.querySelector) {
    selection = [selection];
  }

  var q = {};

  q.each = function (fn) {
    each(fn, selection);
  };

  q.select = function (selector) {
    selection = select(selector, selection);
    return q;
  };

  q.map = function (mapFn) {
    selection = map(mapFn, selection);
    return q;
  };

  q.filter = function (selector) {
    selection = filter(selector, selection);
    return q;
  };

  return q;
}
},{"./util":21}],19:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.firstChild = firstChild;
exports.lastChild = lastChild;
exports.nthChild = nthChild;
exports.first = first;

var _util = require("./util");

var _mappers = require("./mappers");

function firstChild(selector) {
  selector = selector || "*";
  return function (element) {
    if (!element.parentElement) return false;
    if (!(0, _util.matches)(selector, element)) return false;

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = (0, _mappers.previousSiblings)()(element)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var s = _step.value;

        if ((0, _util.matches)(selector, s)) return false;
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    return true;
  };
}

function lastChild(selector) {
  selector = selector || "*";
  return function (element) {
    if (!element.parentElement) return false;
    if (!(0, _util.matches)(selector, element)) return false;

    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = (0, _mappers.nextSiblings)()(element)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var s = _step2.value;

        if ((0, _util.matches)(selector, s)) return false;
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2.return) {
          _iterator2.return();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }

    return true;
  };
}

function nthChild(index, selector) {
  selector = selector || "*";
  return function (element) {
    if (!element.parentElement) return false;
    if (!(0, _util.matches)(selector, element)) return false;

    var count = 0;
    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
      for (var _iterator3 = (0, _mappers.previousSiblings)()(element)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        var s = _step3.value;

        if ((0, _util.matches)(selector, s)) count += 1;
      }
    } catch (err) {
      _didIteratorError3 = true;
      _iteratorError3 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion3 && _iterator3.return) {
          _iterator3.return();
        }
      } finally {
        if (_didIteratorError3) {
          throw _iteratorError3;
        }
      }
    }

    return count === index;
  };
}

function first(selector) {
  selector = selector || "*";

  var found = false;
  return function (element) {
    if (found) return false;

    if ((0, _util.matches)(selector, element)) {
      found = true;
      return true;
    }
  };
}
},{"./mappers":16,"./util":21}],20:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setState = setState;
exports.clearState = clearState;
exports.when = when;

var _util = require("./util");

function setupState(element) {
  var states = {};

  element.jsuaStyleHasState = function (state, value) {
    if (value === undefined) value = true;
    return state in states && states[state] === value;
  };

  element.jsuaStyleSetState = function (state, value) {
    if (value === undefined) value = true;
    states[state] = value;
  };

  element.jsuaStyleClearState = function (state) {
    delete states[state];
  };
}

function isTrackingState(element) {
  return !!element.jsuaStyleHasState;
}

function raiseChangeEvent(element) {
  var evt = document.createEvent("Event");
  evt.initEvent("jsua-style-state-change", false, false);
  element.dispatchEvent(evt);
}

function setState(state, value) {
  return function (element) {
    if (!isTrackingState(element)) {
      setupState(element);
    }

    element.jsuaStyleSetState(state, value);

    raiseChangeEvent(element);
  };
}

function clearState(state) {
  return function (element) {
    if (!isTrackingState(element)) {
      setupState(element);
    }

    element.jsuaStyleClearState(state);

    raiseChangeEvent(element);
  };
}

function when(state, valueOrFn, fn) {
  var value = true;
  if (fn === undefined && (typeof valueOrFn === "function" || Array.isArray(valueOrFn))) {
    fn = valueOrFn;
  } else {
    value = valueOrFn;
  }

  return function (element) {
    if (element.jsuaStyleHasState && element.jsuaStyleHasState(state, value)) {
      (0, _util.executeFunctionOrArrayOfFunctions)(fn, element);
    }
    element.addEventListener("jsua-style-state-change", function (e) {
      if (element.jsuaStyleHasState(state, value)) {
        (0, _util.executeFunctionOrArrayOfFunctions)(fn, element, e);
      }
    });
  };
}
},{"./util":21}],21:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.executeFunctionOrArrayOfFunctions = executeFunctionOrArrayOfFunctions;
exports.matches = matches;
exports.previousSiblings = previousSiblings;
exports.nextSiblings = nextSiblings;
exports.addToken = addToken;

var _marked = [previousSiblings, nextSiblings].map(regeneratorRuntime.mark);

function executeFunctionOrArrayOfFunctions(fn, element, evt) {
  if (Array.isArray(fn)) {
    return fn.forEach(function (f) {
      return executeFunctionOrArrayOfFunctions(f, element, evt);
    });
  }

  fn(element, evt);
}

function matches(selector, element) {
  if (typeof selector === "function") return selector(element);
  return element.matches(selector);
}

function previousSiblings(el) {
  var previousSibling;
  return regeneratorRuntime.wrap(function previousSiblings$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          previousSibling = el.previousElementSibling;

        case 1:
          if (!previousSibling) {
            _context.next = 7;
            break;
          }

          _context.next = 4;
          return previousSibling;

        case 4:
          previousSibling = previousSibling.previousElementSibling;
          _context.next = 1;
          break;

        case 7:
        case "end":
          return _context.stop();
      }
    }
  }, _marked[0], this);
}

function nextSiblings(el) {
  var nextSibling;
  return regeneratorRuntime.wrap(function nextSiblings$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          nextSibling = el.nextElementSibling;

        case 1:
          if (!nextSibling) {
            _context2.next = 7;
            break;
          }

          _context2.next = 4;
          return nextSibling;

        case 4:
          nextSibling = nextSibling.nextElementSibling;
          _context2.next = 1;
          break;

        case 7:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked[1], this);
}

function getTokens(view, attributeName) {
  var tokens = view.getAttribute(attributeName);
  return tokens ? tokens.split(" ") : [];
}

function setTokens(view, attributeName, tokens) {
  tokens = tokens || [];
  view.setAttribute(attributeName, tokens.join(" "));
}

function addToken(element, attributeName, token) {
  var tokens = getTokens(element, attributeName);
  if (tokens.indexOf(token) > -1) return;
  tokens.push(token);
  setTokens(element, attributeName, tokens);
}
},{}],22:[function(require,module,exports){
(function (global){
"use strict";

require("core-js/shim");

require("regenerator-runtime/runtime");

require("core-js/fn/regexp/escape");

if (global._babelPolyfill) {
  throw new Error("only one instance of babel-polyfill is allowed");
}
global._babelPolyfill = true;

var DEFINE_PROPERTY = "defineProperty";
function define(O, key, value) {
  O[key] || Object[DEFINE_PROPERTY](O, key, {
    writable: true,
    configurable: true,
    value: value
  });
}

define(String.prototype, "padLeft", "".padStart);
define(String.prototype, "padRight", "".padEnd);

"pop,reverse,shift,keys,values,entries,indexOf,every,some,forEach,map,filter,find,findIndex,includes,join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill".split(",").forEach(function (key) {
  [][key] && define(Array, key, Function.call.bind([][key]));
});
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"core-js/fn/regexp/escape":23,"core-js/shim":316,"regenerator-runtime/runtime":326}],23:[function(require,module,exports){
require('../../modules/core.regexp.escape');
module.exports = require('../../modules/_core').RegExp.escape;
},{"../../modules/_core":44,"../../modules/core.regexp.escape":140}],24:[function(require,module,exports){
module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};
},{}],25:[function(require,module,exports){
var cof = require('./_cof');
module.exports = function(it, msg){
  if(typeof it != 'number' && cof(it) != 'Number')throw TypeError(msg);
  return +it;
};
},{"./_cof":39}],26:[function(require,module,exports){
// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = require('./_wks')('unscopables')
  , ArrayProto  = Array.prototype;
if(ArrayProto[UNSCOPABLES] == undefined)require('./_hide')(ArrayProto, UNSCOPABLES, {});
module.exports = function(key){
  ArrayProto[UNSCOPABLES][key] = true;
};
},{"./_hide":61,"./_wks":138}],27:[function(require,module,exports){
module.exports = function(it, Constructor, name, forbiddenField){
  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};
},{}],28:[function(require,module,exports){
var isObject = require('./_is-object');
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};
},{"./_is-object":70}],29:[function(require,module,exports){
// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
'use strict';
var toObject = require('./_to-object')
  , toIndex  = require('./_to-index')
  , toLength = require('./_to-length');

module.exports = [].copyWithin || function copyWithin(target/*= 0*/, start/*= 0, end = @length*/){
  var O     = toObject(this)
    , len   = toLength(O.length)
    , to    = toIndex(target, len)
    , from  = toIndex(start, len)
    , end   = arguments.length > 2 ? arguments[2] : undefined
    , count = Math.min((end === undefined ? len : toIndex(end, len)) - from, len - to)
    , inc   = 1;
  if(from < to && to < from + count){
    inc  = -1;
    from += count - 1;
    to   += count - 1;
  }
  while(count-- > 0){
    if(from in O)O[to] = O[from];
    else delete O[to];
    to   += inc;
    from += inc;
  } return O;
};
},{"./_to-index":126,"./_to-length":129,"./_to-object":130}],30:[function(require,module,exports){
// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
'use strict';
var toObject = require('./_to-object')
  , toIndex  = require('./_to-index')
  , toLength = require('./_to-length');
module.exports = function fill(value /*, start = 0, end = @length */){
  var O      = toObject(this)
    , length = toLength(O.length)
    , aLen   = arguments.length
    , index  = toIndex(aLen > 1 ? arguments[1] : undefined, length)
    , end    = aLen > 2 ? arguments[2] : undefined
    , endPos = end === undefined ? length : toIndex(end, length);
  while(endPos > index)O[index++] = value;
  return O;
};
},{"./_to-index":126,"./_to-length":129,"./_to-object":130}],31:[function(require,module,exports){
var forOf = require('./_for-of');

module.exports = function(iter, ITERATOR){
  var result = [];
  forOf(iter, false, result.push, result, ITERATOR);
  return result;
};

},{"./_for-of":58}],32:[function(require,module,exports){
// false -> Array#indexOf
// true  -> Array#includes
var toIObject = require('./_to-iobject')
  , toLength  = require('./_to-length')
  , toIndex   = require('./_to-index');
module.exports = function(IS_INCLUDES){
  return function($this, el, fromIndex){
    var O      = toIObject($this)
      , length = toLength(O.length)
      , index  = toIndex(fromIndex, length)
      , value;
    // Array#includes uses SameValueZero equality algorithm
    if(IS_INCLUDES && el != el)while(length > index){
      value = O[index++];
      if(value != value)return true;
    // Array#toIndex ignores holes, Array#includes - not
    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
      if(O[index] === el)return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};
},{"./_to-index":126,"./_to-iobject":128,"./_to-length":129}],33:[function(require,module,exports){
// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx      = require('./_ctx')
  , IObject  = require('./_iobject')
  , toObject = require('./_to-object')
  , toLength = require('./_to-length')
  , asc      = require('./_array-species-create');
module.exports = function(TYPE, $create){
  var IS_MAP        = TYPE == 1
    , IS_FILTER     = TYPE == 2
    , IS_SOME       = TYPE == 3
    , IS_EVERY      = TYPE == 4
    , IS_FIND_INDEX = TYPE == 6
    , NO_HOLES      = TYPE == 5 || IS_FIND_INDEX
    , create        = $create || asc;
  return function($this, callbackfn, that){
    var O      = toObject($this)
      , self   = IObject(O)
      , f      = ctx(callbackfn, that, 3)
      , length = toLength(self.length)
      , index  = 0
      , result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined
      , val, res;
    for(;length > index; index++)if(NO_HOLES || index in self){
      val = self[index];
      res = f(val, index, O);
      if(TYPE){
        if(IS_MAP)result[index] = res;            // map
        else if(res)switch(TYPE){
          case 3: return true;                    // some
          case 5: return val;                     // find
          case 6: return index;                   // findIndex
          case 2: result.push(val);               // filter
        } else if(IS_EVERY)return false;          // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};
},{"./_array-species-create":36,"./_ctx":46,"./_iobject":66,"./_to-length":129,"./_to-object":130}],34:[function(require,module,exports){
var aFunction = require('./_a-function')
  , toObject  = require('./_to-object')
  , IObject   = require('./_iobject')
  , toLength  = require('./_to-length');

module.exports = function(that, callbackfn, aLen, memo, isRight){
  aFunction(callbackfn);
  var O      = toObject(that)
    , self   = IObject(O)
    , length = toLength(O.length)
    , index  = isRight ? length - 1 : 0
    , i      = isRight ? -1 : 1;
  if(aLen < 2)for(;;){
    if(index in self){
      memo = self[index];
      index += i;
      break;
    }
    index += i;
    if(isRight ? index < 0 : length <= index){
      throw TypeError('Reduce of empty array with no initial value');
    }
  }
  for(;isRight ? index >= 0 : length > index; index += i)if(index in self){
    memo = callbackfn(memo, self[index], index, O);
  }
  return memo;
};
},{"./_a-function":24,"./_iobject":66,"./_to-length":129,"./_to-object":130}],35:[function(require,module,exports){
var isObject = require('./_is-object')
  , isArray  = require('./_is-array')
  , SPECIES  = require('./_wks')('species');

module.exports = function(original){
  var C;
  if(isArray(original)){
    C = original.constructor;
    // cross-realm fallback
    if(typeof C == 'function' && (C === Array || isArray(C.prototype)))C = undefined;
    if(isObject(C)){
      C = C[SPECIES];
      if(C === null)C = undefined;
    }
  } return C === undefined ? Array : C;
};
},{"./_is-array":68,"./_is-object":70,"./_wks":138}],36:[function(require,module,exports){
// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = require('./_array-species-constructor');

module.exports = function(original, length){
  return new (speciesConstructor(original))(length);
};
},{"./_array-species-constructor":35}],37:[function(require,module,exports){
'use strict';
var aFunction  = require('./_a-function')
  , isObject   = require('./_is-object')
  , invoke     = require('./_invoke')
  , arraySlice = [].slice
  , factories  = {};

var construct = function(F, len, args){
  if(!(len in factories)){
    for(var n = [], i = 0; i < len; i++)n[i] = 'a[' + i + ']';
    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
  } return factories[len](F, args);
};

module.exports = Function.bind || function bind(that /*, args... */){
  var fn       = aFunction(this)
    , partArgs = arraySlice.call(arguments, 1);
  var bound = function(/* args... */){
    var args = partArgs.concat(arraySlice.call(arguments));
    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
  };
  if(isObject(fn.prototype))bound.prototype = fn.prototype;
  return bound;
};
},{"./_a-function":24,"./_invoke":65,"./_is-object":70}],38:[function(require,module,exports){
// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = require('./_cof')
  , TAG = require('./_wks')('toStringTag')
  // ES3 wrong here
  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function(it, key){
  try {
    return it[key];
  } catch(e){ /* empty */ }
};

module.exports = function(it){
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};
},{"./_cof":39,"./_wks":138}],39:[function(require,module,exports){
var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};
},{}],40:[function(require,module,exports){
'use strict';
var dP          = require('./_object-dp').f
  , create      = require('./_object-create')
  , redefineAll = require('./_redefine-all')
  , ctx         = require('./_ctx')
  , anInstance  = require('./_an-instance')
  , defined     = require('./_defined')
  , forOf       = require('./_for-of')
  , $iterDefine = require('./_iter-define')
  , step        = require('./_iter-step')
  , setSpecies  = require('./_set-species')
  , DESCRIPTORS = require('./_descriptors')
  , fastKey     = require('./_meta').fastKey
  , SIZE        = DESCRIPTORS ? '_s' : 'size';

var getEntry = function(that, key){
  // fast case
  var index = fastKey(key), entry;
  if(index !== 'F')return that._i[index];
  // frozen object case
  for(entry = that._f; entry; entry = entry.n){
    if(entry.k == key)return entry;
  }
};

module.exports = {
  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
    var C = wrapper(function(that, iterable){
      anInstance(that, C, NAME, '_i');
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear(){
        for(var that = this, data = that._i, entry = that._f; entry; entry = entry.n){
          entry.r = true;
          if(entry.p)entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function(key){
        var that  = this
          , entry = getEntry(that, key);
        if(entry){
          var next = entry.n
            , prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if(prev)prev.n = next;
          if(next)next.p = prev;
          if(that._f == entry)that._f = next;
          if(that._l == entry)that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /*, that = undefined */){
        anInstance(this, C, 'forEach');
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3)
          , entry;
        while(entry = entry ? entry.n : this._f){
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while(entry && entry.r)entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key){
        return !!getEntry(this, key);
      }
    });
    if(DESCRIPTORS)dP(C.prototype, 'size', {
      get: function(){
        return defined(this[SIZE]);
      }
    });
    return C;
  },
  def: function(that, key, value){
    var entry = getEntry(that, key)
      , prev, index;
    // change existing entry
    if(entry){
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if(!that._f)that._f = entry;
      if(prev)prev.n = entry;
      that[SIZE]++;
      // add to index
      if(index !== 'F')that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function(C, NAME, IS_MAP){
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function(iterated, kind){
      this._t = iterated;  // target
      this._k = kind;      // kind
      this._l = undefined; // previous
    }, function(){
      var that  = this
        , kind  = that._k
        , entry = that._l;
      // revert to the last existing entry
      while(entry && entry.r)entry = entry.p;
      // get next entry
      if(!that._t || !(that._l = entry = entry ? entry.n : that._t._f)){
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if(kind == 'keys'  )return step(0, entry.k);
      if(kind == 'values')return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values' , !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};
},{"./_an-instance":27,"./_ctx":46,"./_defined":48,"./_descriptors":49,"./_for-of":58,"./_iter-define":74,"./_iter-step":76,"./_meta":83,"./_object-create":87,"./_object-dp":88,"./_redefine-all":107,"./_set-species":112}],41:[function(require,module,exports){
// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var classof = require('./_classof')
  , from    = require('./_array-from-iterable');
module.exports = function(NAME){
  return function toJSON(){
    if(classof(this) != NAME)throw TypeError(NAME + "#toJSON isn't generic");
    return from(this);
  };
};
},{"./_array-from-iterable":31,"./_classof":38}],42:[function(require,module,exports){
'use strict';
var redefineAll       = require('./_redefine-all')
  , getWeak           = require('./_meta').getWeak
  , anObject          = require('./_an-object')
  , isObject          = require('./_is-object')
  , anInstance        = require('./_an-instance')
  , forOf             = require('./_for-of')
  , createArrayMethod = require('./_array-methods')
  , $has              = require('./_has')
  , arrayFind         = createArrayMethod(5)
  , arrayFindIndex    = createArrayMethod(6)
  , id                = 0;

// fallback for uncaught frozen keys
var uncaughtFrozenStore = function(that){
  return that._l || (that._l = new UncaughtFrozenStore);
};
var UncaughtFrozenStore = function(){
  this.a = [];
};
var findUncaughtFrozen = function(store, key){
  return arrayFind(store.a, function(it){
    return it[0] === key;
  });
};
UncaughtFrozenStore.prototype = {
  get: function(key){
    var entry = findUncaughtFrozen(this, key);
    if(entry)return entry[1];
  },
  has: function(key){
    return !!findUncaughtFrozen(this, key);
  },
  set: function(key, value){
    var entry = findUncaughtFrozen(this, key);
    if(entry)entry[1] = value;
    else this.a.push([key, value]);
  },
  'delete': function(key){
    var index = arrayFindIndex(this.a, function(it){
      return it[0] === key;
    });
    if(~index)this.a.splice(index, 1);
    return !!~index;
  }
};

module.exports = {
  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
    var C = wrapper(function(that, iterable){
      anInstance(that, C, NAME, '_i');
      that._i = id++;      // collection id
      that._l = undefined; // leak store for uncaught frozen objects
      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.3.3.2 WeakMap.prototype.delete(key)
      // 23.4.3.3 WeakSet.prototype.delete(value)
      'delete': function(key){
        if(!isObject(key))return false;
        var data = getWeak(key);
        if(data === true)return uncaughtFrozenStore(this)['delete'](key);
        return data && $has(data, this._i) && delete data[this._i];
      },
      // 23.3.3.4 WeakMap.prototype.has(key)
      // 23.4.3.4 WeakSet.prototype.has(value)
      has: function has(key){
        if(!isObject(key))return false;
        var data = getWeak(key);
        if(data === true)return uncaughtFrozenStore(this).has(key);
        return data && $has(data, this._i);
      }
    });
    return C;
  },
  def: function(that, key, value){
    var data = getWeak(anObject(key), true);
    if(data === true)uncaughtFrozenStore(that).set(key, value);
    else data[that._i] = value;
    return that;
  },
  ufstore: uncaughtFrozenStore
};
},{"./_an-instance":27,"./_an-object":28,"./_array-methods":33,"./_for-of":58,"./_has":60,"./_is-object":70,"./_meta":83,"./_redefine-all":107}],43:[function(require,module,exports){
'use strict';
var global            = require('./_global')
  , $export           = require('./_export')
  , redefine          = require('./_redefine')
  , redefineAll       = require('./_redefine-all')
  , meta              = require('./_meta')
  , forOf             = require('./_for-of')
  , anInstance        = require('./_an-instance')
  , isObject          = require('./_is-object')
  , fails             = require('./_fails')
  , $iterDetect       = require('./_iter-detect')
  , setToStringTag    = require('./_set-to-string-tag')
  , inheritIfRequired = require('./_inherit-if-required');

module.exports = function(NAME, wrapper, methods, common, IS_MAP, IS_WEAK){
  var Base  = global[NAME]
    , C     = Base
    , ADDER = IS_MAP ? 'set' : 'add'
    , proto = C && C.prototype
    , O     = {};
  var fixMethod = function(KEY){
    var fn = proto[KEY];
    redefine(proto, KEY,
      KEY == 'delete' ? function(a){
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'has' ? function has(a){
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'get' ? function get(a){
        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'add' ? function add(a){ fn.call(this, a === 0 ? 0 : a); return this; }
        : function set(a, b){ fn.call(this, a === 0 ? 0 : a, b); return this; }
    );
  };
  if(typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function(){
    new C().entries().next();
  }))){
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    var instance             = new C
      // early implementations not supports chaining
      , HASNT_CHAINING       = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance
      // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
      , THROWS_ON_PRIMITIVES = fails(function(){ instance.has(1); })
      // most early implementations doesn't supports iterables, most modern - not close it correctly
      , ACCEPT_ITERABLES     = $iterDetect(function(iter){ new C(iter); }) // eslint-disable-line no-new
      // for early implementations -0 and +0 not the same
      , BUGGY_ZERO = !IS_WEAK && fails(function(){
        // V8 ~ Chromium 42- fails only with 5+ elements
        var $instance = new C()
          , index     = 5;
        while(index--)$instance[ADDER](index, index);
        return !$instance.has(-0);
      });
    if(!ACCEPT_ITERABLES){ 
      C = wrapper(function(target, iterable){
        anInstance(target, C, NAME);
        var that = inheritIfRequired(new Base, target, C);
        if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
        return that;
      });
      C.prototype = proto;
      proto.constructor = C;
    }
    if(THROWS_ON_PRIMITIVES || BUGGY_ZERO){
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }
    if(BUGGY_ZERO || HASNT_CHAINING)fixMethod(ADDER);
    // weak collections should not contains .clear method
    if(IS_WEAK && proto.clear)delete proto.clear;
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F * (C != Base), O);

  if(!IS_WEAK)common.setStrong(C, NAME, IS_MAP);

  return C;
};
},{"./_an-instance":27,"./_export":53,"./_fails":55,"./_for-of":58,"./_global":59,"./_inherit-if-required":64,"./_is-object":70,"./_iter-detect":75,"./_meta":83,"./_redefine":108,"./_redefine-all":107,"./_set-to-string-tag":113}],44:[function(require,module,exports){
var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef
},{}],45:[function(require,module,exports){
'use strict';
var $defineProperty = require('./_object-dp')
  , createDesc      = require('./_property-desc');

module.exports = function(object, index, value){
  if(index in object)$defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};
},{"./_object-dp":88,"./_property-desc":106}],46:[function(require,module,exports){
// optional / simple context binding
var aFunction = require('./_a-function');
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};
},{"./_a-function":24}],47:[function(require,module,exports){
'use strict';
var anObject    = require('./_an-object')
  , toPrimitive = require('./_to-primitive')
  , NUMBER      = 'number';

module.exports = function(hint){
  if(hint !== 'string' && hint !== NUMBER && hint !== 'default')throw TypeError('Incorrect hint');
  return toPrimitive(anObject(this), hint != NUMBER);
};
},{"./_an-object":28,"./_to-primitive":131}],48:[function(require,module,exports){
// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};
},{}],49:[function(require,module,exports){
// Thank's IE8 for his funny defineProperty
module.exports = !require('./_fails')(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});
},{"./_fails":55}],50:[function(require,module,exports){
var isObject = require('./_is-object')
  , document = require('./_global').document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};
},{"./_global":59,"./_is-object":70}],51:[function(require,module,exports){
// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');
},{}],52:[function(require,module,exports){
// all enumerable object keys, includes symbols
var getKeys = require('./_object-keys')
  , gOPS    = require('./_object-gops')
  , pIE     = require('./_object-pie');
module.exports = function(it){
  var result     = getKeys(it)
    , getSymbols = gOPS.f;
  if(getSymbols){
    var symbols = getSymbols(it)
      , isEnum  = pIE.f
      , i       = 0
      , key;
    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
  } return result;
};
},{"./_object-gops":94,"./_object-keys":97,"./_object-pie":98}],53:[function(require,module,exports){
var global    = require('./_global')
  , core      = require('./_core')
  , hide      = require('./_hide')
  , redefine  = require('./_redefine')
  , ctx       = require('./_ctx')
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE]
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , expProto  = exports[PROTOTYPE] || (exports[PROTOTYPE] = {})
    , key, own, out, exp;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if(target)redefine(target, key, out, type & $export.U);
    // export
    if(exports[key] != out)hide(exports, key, exp);
    if(IS_PROTO && expProto[key] != out)expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library` 
module.exports = $export;
},{"./_core":44,"./_ctx":46,"./_global":59,"./_hide":61,"./_redefine":108}],54:[function(require,module,exports){
var MATCH = require('./_wks')('match');
module.exports = function(KEY){
  var re = /./;
  try {
    '/./'[KEY](re);
  } catch(e){
    try {
      re[MATCH] = false;
      return !'/./'[KEY](re);
    } catch(f){ /* empty */ }
  } return true;
};
},{"./_wks":138}],55:[function(require,module,exports){
module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};
},{}],56:[function(require,module,exports){
'use strict';
var hide     = require('./_hide')
  , redefine = require('./_redefine')
  , fails    = require('./_fails')
  , defined  = require('./_defined')
  , wks      = require('./_wks');

module.exports = function(KEY, length, exec){
  var SYMBOL   = wks(KEY)
    , fns      = exec(defined, SYMBOL, ''[KEY])
    , strfn    = fns[0]
    , rxfn     = fns[1];
  if(fails(function(){
    var O = {};
    O[SYMBOL] = function(){ return 7; };
    return ''[KEY](O) != 7;
  })){
    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function(string, arg){ return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function(string){ return rxfn.call(string, this); }
    );
  }
};
},{"./_defined":48,"./_fails":55,"./_hide":61,"./_redefine":108,"./_wks":138}],57:[function(require,module,exports){
'use strict';
// 21.2.5.3 get RegExp.prototype.flags
var anObject = require('./_an-object');
module.exports = function(){
  var that   = anObject(this)
    , result = '';
  if(that.global)     result += 'g';
  if(that.ignoreCase) result += 'i';
  if(that.multiline)  result += 'm';
  if(that.unicode)    result += 'u';
  if(that.sticky)     result += 'y';
  return result;
};
},{"./_an-object":28}],58:[function(require,module,exports){
var ctx         = require('./_ctx')
  , call        = require('./_iter-call')
  , isArrayIter = require('./_is-array-iter')
  , anObject    = require('./_an-object')
  , toLength    = require('./_to-length')
  , getIterFn   = require('./core.get-iterator-method')
  , BREAK       = {}
  , RETURN      = {};
var exports = module.exports = function(iterable, entries, fn, that, ITERATOR){
  var iterFn = ITERATOR ? function(){ return iterable; } : getIterFn(iterable)
    , f      = ctx(fn, that, entries ? 2 : 1)
    , index  = 0
    , length, step, iterator, result;
  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if(result === BREAK || result === RETURN)return result;
  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
    result = call(iterator, f, step.value, entries);
    if(result === BREAK || result === RETURN)return result;
  }
};
exports.BREAK  = BREAK;
exports.RETURN = RETURN;
},{"./_an-object":28,"./_ctx":46,"./_is-array-iter":67,"./_iter-call":72,"./_to-length":129,"./core.get-iterator-method":139}],59:[function(require,module,exports){
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef
},{}],60:[function(require,module,exports){
var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};
},{}],61:[function(require,module,exports){
var dP         = require('./_object-dp')
  , createDesc = require('./_property-desc');
module.exports = require('./_descriptors') ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};
},{"./_descriptors":49,"./_object-dp":88,"./_property-desc":106}],62:[function(require,module,exports){
module.exports = require('./_global').document && document.documentElement;
},{"./_global":59}],63:[function(require,module,exports){
module.exports = !require('./_descriptors') && !require('./_fails')(function(){
  return Object.defineProperty(require('./_dom-create')('div'), 'a', {get: function(){ return 7; }}).a != 7;
});
},{"./_descriptors":49,"./_dom-create":50,"./_fails":55}],64:[function(require,module,exports){
var isObject       = require('./_is-object')
  , setPrototypeOf = require('./_set-proto').set;
module.exports = function(that, target, C){
  var P, S = target.constructor;
  if(S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf){
    setPrototypeOf(that, P);
  } return that;
};
},{"./_is-object":70,"./_set-proto":111}],65:[function(require,module,exports){
// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function(fn, args, that){
  var un = that === undefined;
  switch(args.length){
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return              fn.apply(that, args);
};
},{}],66:[function(require,module,exports){
// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = require('./_cof');
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};
},{"./_cof":39}],67:[function(require,module,exports){
// check on default Array iterator
var Iterators  = require('./_iterators')
  , ITERATOR   = require('./_wks')('iterator')
  , ArrayProto = Array.prototype;

module.exports = function(it){
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};
},{"./_iterators":77,"./_wks":138}],68:[function(require,module,exports){
// 7.2.2 IsArray(argument)
var cof = require('./_cof');
module.exports = Array.isArray || function isArray(arg){
  return cof(arg) == 'Array';
};
},{"./_cof":39}],69:[function(require,module,exports){
// 20.1.2.3 Number.isInteger(number)
var isObject = require('./_is-object')
  , floor    = Math.floor;
module.exports = function isInteger(it){
  return !isObject(it) && isFinite(it) && floor(it) === it;
};
},{"./_is-object":70}],70:[function(require,module,exports){
module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};
},{}],71:[function(require,module,exports){
// 7.2.8 IsRegExp(argument)
var isObject = require('./_is-object')
  , cof      = require('./_cof')
  , MATCH    = require('./_wks')('match');
module.exports = function(it){
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};
},{"./_cof":39,"./_is-object":70,"./_wks":138}],72:[function(require,module,exports){
// call something on iterator step with safe closing on error
var anObject = require('./_an-object');
module.exports = function(iterator, fn, value, entries){
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch(e){
    var ret = iterator['return'];
    if(ret !== undefined)anObject(ret.call(iterator));
    throw e;
  }
};
},{"./_an-object":28}],73:[function(require,module,exports){
'use strict';
var create         = require('./_object-create')
  , descriptor     = require('./_property-desc')
  , setToStringTag = require('./_set-to-string-tag')
  , IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
require('./_hide')(IteratorPrototype, require('./_wks')('iterator'), function(){ return this; });

module.exports = function(Constructor, NAME, next){
  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
  setToStringTag(Constructor, NAME + ' Iterator');
};
},{"./_hide":61,"./_object-create":87,"./_property-desc":106,"./_set-to-string-tag":113,"./_wks":138}],74:[function(require,module,exports){
'use strict';
var LIBRARY        = require('./_library')
  , $export        = require('./_export')
  , redefine       = require('./_redefine')
  , hide           = require('./_hide')
  , has            = require('./_has')
  , Iterators      = require('./_iterators')
  , $iterCreate    = require('./_iter-create')
  , setToStringTag = require('./_set-to-string-tag')
  , getPrototypeOf = require('./_object-gpo')
  , ITERATOR       = require('./_wks')('iterator')
  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
  , FF_ITERATOR    = '@@iterator'
  , KEYS           = 'keys'
  , VALUES         = 'values';

var returnThis = function(){ return this; };

module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
  $iterCreate(Constructor, NAME, next);
  var getMethod = function(kind){
    if(!BUGGY && kind in proto)return proto[kind];
    switch(kind){
      case KEYS: return function keys(){ return new Constructor(this, kind); };
      case VALUES: return function values(){ return new Constructor(this, kind); };
    } return function entries(){ return new Constructor(this, kind); };
  };
  var TAG        = NAME + ' Iterator'
    , DEF_VALUES = DEFAULT == VALUES
    , VALUES_BUG = false
    , proto      = Base.prototype
    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
    , $default   = $native || getMethod(DEFAULT)
    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
    , methods, key, IteratorPrototype;
  // Fix native
  if($anyNative){
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
    if(IteratorPrototype !== Object.prototype){
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if(DEF_VALUES && $native && $native.name !== VALUES){
    VALUES_BUG = true;
    $default = function values(){ return $native.call(this); };
  }
  // Define iterator
  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG]  = returnThis;
  if(DEFAULT){
    methods = {
      values:  DEF_VALUES ? $default : getMethod(VALUES),
      keys:    IS_SET     ? $default : getMethod(KEYS),
      entries: $entries
    };
    if(FORCED)for(key in methods){
      if(!(key in proto))redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};
},{"./_export":53,"./_has":60,"./_hide":61,"./_iter-create":73,"./_iterators":77,"./_library":79,"./_object-gpo":95,"./_redefine":108,"./_set-to-string-tag":113,"./_wks":138}],75:[function(require,module,exports){
var ITERATOR     = require('./_wks')('iterator')
  , SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function(){ SAFE_CLOSING = true; };
  Array.from(riter, function(){ throw 2; });
} catch(e){ /* empty */ }

module.exports = function(exec, skipClosing){
  if(!skipClosing && !SAFE_CLOSING)return false;
  var safe = false;
  try {
    var arr  = [7]
      , iter = arr[ITERATOR]();
    iter.next = function(){ return {done: safe = true}; };
    arr[ITERATOR] = function(){ return iter; };
    exec(arr);
  } catch(e){ /* empty */ }
  return safe;
};
},{"./_wks":138}],76:[function(require,module,exports){
module.exports = function(done, value){
  return {value: value, done: !!done};
};
},{}],77:[function(require,module,exports){
module.exports = {};
},{}],78:[function(require,module,exports){
var getKeys   = require('./_object-keys')
  , toIObject = require('./_to-iobject');
module.exports = function(object, el){
  var O      = toIObject(object)
    , keys   = getKeys(O)
    , length = keys.length
    , index  = 0
    , key;
  while(length > index)if(O[key = keys[index++]] === el)return key;
};
},{"./_object-keys":97,"./_to-iobject":128}],79:[function(require,module,exports){
module.exports = false;
},{}],80:[function(require,module,exports){
// 20.2.2.14 Math.expm1(x)
var $expm1 = Math.expm1;
module.exports = (!$expm1
  // Old FF bug
  || $expm1(10) > 22025.465794806719 || $expm1(10) < 22025.4657948067165168
  // Tor Browser bug
  || $expm1(-2e-17) != -2e-17
) ? function expm1(x){
  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
} : $expm1;
},{}],81:[function(require,module,exports){
// 20.2.2.20 Math.log1p(x)
module.exports = Math.log1p || function log1p(x){
  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
};
},{}],82:[function(require,module,exports){
// 20.2.2.28 Math.sign(x)
module.exports = Math.sign || function sign(x){
  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
};
},{}],83:[function(require,module,exports){
var META     = require('./_uid')('meta')
  , isObject = require('./_is-object')
  , has      = require('./_has')
  , setDesc  = require('./_object-dp').f
  , id       = 0;
var isExtensible = Object.isExtensible || function(){
  return true;
};
var FREEZE = !require('./_fails')(function(){
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function(it){
  setDesc(it, META, {value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  }});
};
var fastKey = function(it, create){
  // return primitive with prefix
  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return 'F';
    // not necessary to add metadata
    if(!create)return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function(it, create){
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return true;
    // not necessary to add metadata
    if(!create)return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function(it){
  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY:      META,
  NEED:     false,
  fastKey:  fastKey,
  getWeak:  getWeak,
  onFreeze: onFreeze
};
},{"./_fails":55,"./_has":60,"./_is-object":70,"./_object-dp":88,"./_uid":135}],84:[function(require,module,exports){
var Map     = require('./es6.map')
  , $export = require('./_export')
  , shared  = require('./_shared')('metadata')
  , store   = shared.store || (shared.store = new (require('./es6.weak-map')));

var getOrCreateMetadataMap = function(target, targetKey, create){
  var targetMetadata = store.get(target);
  if(!targetMetadata){
    if(!create)return undefined;
    store.set(target, targetMetadata = new Map);
  }
  var keyMetadata = targetMetadata.get(targetKey);
  if(!keyMetadata){
    if(!create)return undefined;
    targetMetadata.set(targetKey, keyMetadata = new Map);
  } return keyMetadata;
};
var ordinaryHasOwnMetadata = function(MetadataKey, O, P){
  var metadataMap = getOrCreateMetadataMap(O, P, false);
  return metadataMap === undefined ? false : metadataMap.has(MetadataKey);
};
var ordinaryGetOwnMetadata = function(MetadataKey, O, P){
  var metadataMap = getOrCreateMetadataMap(O, P, false);
  return metadataMap === undefined ? undefined : metadataMap.get(MetadataKey);
};
var ordinaryDefineOwnMetadata = function(MetadataKey, MetadataValue, O, P){
  getOrCreateMetadataMap(O, P, true).set(MetadataKey, MetadataValue);
};
var ordinaryOwnMetadataKeys = function(target, targetKey){
  var metadataMap = getOrCreateMetadataMap(target, targetKey, false)
    , keys        = [];
  if(metadataMap)metadataMap.forEach(function(_, key){ keys.push(key); });
  return keys;
};
var toMetaKey = function(it){
  return it === undefined || typeof it == 'symbol' ? it : String(it);
};
var exp = function(O){
  $export($export.S, 'Reflect', O);
};

module.exports = {
  store: store,
  map: getOrCreateMetadataMap,
  has: ordinaryHasOwnMetadata,
  get: ordinaryGetOwnMetadata,
  set: ordinaryDefineOwnMetadata,
  keys: ordinaryOwnMetadataKeys,
  key: toMetaKey,
  exp: exp
};
},{"./_export":53,"./_shared":115,"./es6.map":170,"./es6.weak-map":276}],85:[function(require,module,exports){
var global    = require('./_global')
  , macrotask = require('./_task').set
  , Observer  = global.MutationObserver || global.WebKitMutationObserver
  , process   = global.process
  , Promise   = global.Promise
  , isNode    = require('./_cof')(process) == 'process';

module.exports = function(){
  var head, last, notify;

  var flush = function(){
    var parent, fn;
    if(isNode && (parent = process.domain))parent.exit();
    while(head){
      fn   = head.fn;
      head = head.next;
      try {
        fn();
      } catch(e){
        if(head)notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if(parent)parent.enter();
  };

  // Node.js
  if(isNode){
    notify = function(){
      process.nextTick(flush);
    };
  // browsers with MutationObserver
  } else if(Observer){
    var toggle = true
      , node   = document.createTextNode('');
    new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
    notify = function(){
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if(Promise && Promise.resolve){
    var promise = Promise.resolve();
    notify = function(){
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function(){
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function(fn){
    var task = {fn: fn, next: undefined};
    if(last)last.next = task;
    if(!head){
      head = task;
      notify();
    } last = task;
  };
};
},{"./_cof":39,"./_global":59,"./_task":125}],86:[function(require,module,exports){
'use strict';
// 19.1.2.1 Object.assign(target, source, ...)
var getKeys  = require('./_object-keys')
  , gOPS     = require('./_object-gops')
  , pIE      = require('./_object-pie')
  , toObject = require('./_to-object')
  , IObject  = require('./_iobject')
  , $assign  = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || require('./_fails')(function(){
  var A = {}
    , B = {}
    , S = Symbol()
    , K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function(k){ B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
  var T     = toObject(target)
    , aLen  = arguments.length
    , index = 1
    , getSymbols = gOPS.f
    , isEnum     = pIE.f;
  while(aLen > index){
    var S      = IObject(arguments[index++])
      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
      , length = keys.length
      , j      = 0
      , key;
    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
  } return T;
} : $assign;
},{"./_fails":55,"./_iobject":66,"./_object-gops":94,"./_object-keys":97,"./_object-pie":98,"./_to-object":130}],87:[function(require,module,exports){
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject    = require('./_an-object')
  , dPs         = require('./_object-dps')
  , enumBugKeys = require('./_enum-bug-keys')
  , IE_PROTO    = require('./_shared-key')('IE_PROTO')
  , Empty       = function(){ /* empty */ }
  , PROTOTYPE   = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function(){
  // Thrash, waste and sodomy: IE GC bug
  var iframe = require('./_dom-create')('iframe')
    , i      = enumBugKeys.length
    , lt     = '<'
    , gt     = '>'
    , iframeDocument;
  iframe.style.display = 'none';
  require('./_html').appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties){
  var result;
  if(O !== null){
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty;
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};

},{"./_an-object":28,"./_dom-create":50,"./_enum-bug-keys":51,"./_html":62,"./_object-dps":89,"./_shared-key":114}],88:[function(require,module,exports){
var anObject       = require('./_an-object')
  , IE8_DOM_DEFINE = require('./_ie8-dom-define')
  , toPrimitive    = require('./_to-primitive')
  , dP             = Object.defineProperty;

exports.f = require('./_descriptors') ? Object.defineProperty : function defineProperty(O, P, Attributes){
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if(IE8_DOM_DEFINE)try {
    return dP(O, P, Attributes);
  } catch(e){ /* empty */ }
  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
  if('value' in Attributes)O[P] = Attributes.value;
  return O;
};
},{"./_an-object":28,"./_descriptors":49,"./_ie8-dom-define":63,"./_to-primitive":131}],89:[function(require,module,exports){
var dP       = require('./_object-dp')
  , anObject = require('./_an-object')
  , getKeys  = require('./_object-keys');

module.exports = require('./_descriptors') ? Object.defineProperties : function defineProperties(O, Properties){
  anObject(O);
  var keys   = getKeys(Properties)
    , length = keys.length
    , i = 0
    , P;
  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
  return O;
};
},{"./_an-object":28,"./_descriptors":49,"./_object-dp":88,"./_object-keys":97}],90:[function(require,module,exports){
// Forced replacement prototype accessors methods
module.exports = require('./_library')|| !require('./_fails')(function(){
  var K = Math.random();
  // In FF throws only define methods
  __defineSetter__.call(null, K, function(){ /* empty */});
  delete require('./_global')[K];
});
},{"./_fails":55,"./_global":59,"./_library":79}],91:[function(require,module,exports){
var pIE            = require('./_object-pie')
  , createDesc     = require('./_property-desc')
  , toIObject      = require('./_to-iobject')
  , toPrimitive    = require('./_to-primitive')
  , has            = require('./_has')
  , IE8_DOM_DEFINE = require('./_ie8-dom-define')
  , gOPD           = Object.getOwnPropertyDescriptor;

exports.f = require('./_descriptors') ? gOPD : function getOwnPropertyDescriptor(O, P){
  O = toIObject(O);
  P = toPrimitive(P, true);
  if(IE8_DOM_DEFINE)try {
    return gOPD(O, P);
  } catch(e){ /* empty */ }
  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
};
},{"./_descriptors":49,"./_has":60,"./_ie8-dom-define":63,"./_object-pie":98,"./_property-desc":106,"./_to-iobject":128,"./_to-primitive":131}],92:[function(require,module,exports){
// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = require('./_to-iobject')
  , gOPN      = require('./_object-gopn').f
  , toString  = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function(it){
  try {
    return gOPN(it);
  } catch(e){
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it){
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};

},{"./_object-gopn":93,"./_to-iobject":128}],93:[function(require,module,exports){
// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys      = require('./_object-keys-internal')
  , hiddenKeys = require('./_enum-bug-keys').concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
  return $keys(O, hiddenKeys);
};
},{"./_enum-bug-keys":51,"./_object-keys-internal":96}],94:[function(require,module,exports){
exports.f = Object.getOwnPropertySymbols;
},{}],95:[function(require,module,exports){
// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has         = require('./_has')
  , toObject    = require('./_to-object')
  , IE_PROTO    = require('./_shared-key')('IE_PROTO')
  , ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function(O){
  O = toObject(O);
  if(has(O, IE_PROTO))return O[IE_PROTO];
  if(typeof O.constructor == 'function' && O instanceof O.constructor){
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};
},{"./_has":60,"./_shared-key":114,"./_to-object":130}],96:[function(require,module,exports){
var has          = require('./_has')
  , toIObject    = require('./_to-iobject')
  , arrayIndexOf = require('./_array-includes')(false)
  , IE_PROTO     = require('./_shared-key')('IE_PROTO');

module.exports = function(object, names){
  var O      = toIObject(object)
    , i      = 0
    , result = []
    , key;
  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while(names.length > i)if(has(O, key = names[i++])){
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};
},{"./_array-includes":32,"./_has":60,"./_shared-key":114,"./_to-iobject":128}],97:[function(require,module,exports){
// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = require('./_object-keys-internal')
  , enumBugKeys = require('./_enum-bug-keys');

module.exports = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};
},{"./_enum-bug-keys":51,"./_object-keys-internal":96}],98:[function(require,module,exports){
exports.f = {}.propertyIsEnumerable;
},{}],99:[function(require,module,exports){
// most Object methods by ES6 should accept primitives
var $export = require('./_export')
  , core    = require('./_core')
  , fails   = require('./_fails');
module.exports = function(KEY, exec){
  var fn  = (core.Object || {})[KEY] || Object[KEY]
    , exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
};
},{"./_core":44,"./_export":53,"./_fails":55}],100:[function(require,module,exports){
var getKeys   = require('./_object-keys')
  , toIObject = require('./_to-iobject')
  , isEnum    = require('./_object-pie').f;
module.exports = function(isEntries){
  return function(it){
    var O      = toIObject(it)
      , keys   = getKeys(O)
      , length = keys.length
      , i      = 0
      , result = []
      , key;
    while(length > i)if(isEnum.call(O, key = keys[i++])){
      result.push(isEntries ? [key, O[key]] : O[key]);
    } return result;
  };
};
},{"./_object-keys":97,"./_object-pie":98,"./_to-iobject":128}],101:[function(require,module,exports){
// all object keys, includes non-enumerable and symbols
var gOPN     = require('./_object-gopn')
  , gOPS     = require('./_object-gops')
  , anObject = require('./_an-object')
  , Reflect  = require('./_global').Reflect;
module.exports = Reflect && Reflect.ownKeys || function ownKeys(it){
  var keys       = gOPN.f(anObject(it))
    , getSymbols = gOPS.f;
  return getSymbols ? keys.concat(getSymbols(it)) : keys;
};
},{"./_an-object":28,"./_global":59,"./_object-gopn":93,"./_object-gops":94}],102:[function(require,module,exports){
var $parseFloat = require('./_global').parseFloat
  , $trim       = require('./_string-trim').trim;

module.exports = 1 / $parseFloat(require('./_string-ws') + '-0') !== -Infinity ? function parseFloat(str){
  var string = $trim(String(str), 3)
    , result = $parseFloat(string);
  return result === 0 && string.charAt(0) == '-' ? -0 : result;
} : $parseFloat;
},{"./_global":59,"./_string-trim":123,"./_string-ws":124}],103:[function(require,module,exports){
var $parseInt = require('./_global').parseInt
  , $trim     = require('./_string-trim').trim
  , ws        = require('./_string-ws')
  , hex       = /^[\-+]?0[xX]/;

module.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix){
  var string = $trim(String(str), 3);
  return $parseInt(string, (radix >>> 0) || (hex.test(string) ? 16 : 10));
} : $parseInt;
},{"./_global":59,"./_string-trim":123,"./_string-ws":124}],104:[function(require,module,exports){
'use strict';
var path      = require('./_path')
  , invoke    = require('./_invoke')
  , aFunction = require('./_a-function');
module.exports = function(/* ...pargs */){
  var fn     = aFunction(this)
    , length = arguments.length
    , pargs  = Array(length)
    , i      = 0
    , _      = path._
    , holder = false;
  while(length > i)if((pargs[i] = arguments[i++]) === _)holder = true;
  return function(/* ...args */){
    var that = this
      , aLen = arguments.length
      , j = 0, k = 0, args;
    if(!holder && !aLen)return invoke(fn, pargs, that);
    args = pargs.slice();
    if(holder)for(;length > j; j++)if(args[j] === _)args[j] = arguments[k++];
    while(aLen > k)args.push(arguments[k++]);
    return invoke(fn, args, that);
  };
};
},{"./_a-function":24,"./_invoke":65,"./_path":105}],105:[function(require,module,exports){
module.exports = require('./_global');
},{"./_global":59}],106:[function(require,module,exports){
module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};
},{}],107:[function(require,module,exports){
var redefine = require('./_redefine');
module.exports = function(target, src, safe){
  for(var key in src)redefine(target, key, src[key], safe);
  return target;
};
},{"./_redefine":108}],108:[function(require,module,exports){
var global    = require('./_global')
  , hide      = require('./_hide')
  , has       = require('./_has')
  , SRC       = require('./_uid')('src')
  , TO_STRING = 'toString'
  , $toString = Function[TO_STRING]
  , TPL       = ('' + $toString).split(TO_STRING);

require('./_core').inspectSource = function(it){
  return $toString.call(it);
};

(module.exports = function(O, key, val, safe){
  var isFunction = typeof val == 'function';
  if(isFunction)has(val, 'name') || hide(val, 'name', key);
  if(O[key] === val)return;
  if(isFunction)has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if(O === global){
    O[key] = val;
  } else {
    if(!safe){
      delete O[key];
      hide(O, key, val);
    } else {
      if(O[key])O[key] = val;
      else hide(O, key, val);
    }
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString(){
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});
},{"./_core":44,"./_global":59,"./_has":60,"./_hide":61,"./_uid":135}],109:[function(require,module,exports){
module.exports = function(regExp, replace){
  var replacer = replace === Object(replace) ? function(part){
    return replace[part];
  } : replace;
  return function(it){
    return String(it).replace(regExp, replacer);
  };
};
},{}],110:[function(require,module,exports){
// 7.2.9 SameValue(x, y)
module.exports = Object.is || function is(x, y){
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};
},{}],111:[function(require,module,exports){
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = require('./_is-object')
  , anObject = require('./_an-object');
var check = function(O, proto){
  anObject(O);
  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function(test, buggy, set){
      try {
        set = require('./_ctx')(Function.call, require('./_object-gopd').f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch(e){ buggy = true; }
      return function setPrototypeOf(O, proto){
        check(O, proto);
        if(buggy)O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};
},{"./_an-object":28,"./_ctx":46,"./_is-object":70,"./_object-gopd":91}],112:[function(require,module,exports){
'use strict';
var global      = require('./_global')
  , dP          = require('./_object-dp')
  , DESCRIPTORS = require('./_descriptors')
  , SPECIES     = require('./_wks')('species');

module.exports = function(KEY){
  var C = global[KEY];
  if(DESCRIPTORS && C && !C[SPECIES])dP.f(C, SPECIES, {
    configurable: true,
    get: function(){ return this; }
  });
};
},{"./_descriptors":49,"./_global":59,"./_object-dp":88,"./_wks":138}],113:[function(require,module,exports){
var def = require('./_object-dp').f
  , has = require('./_has')
  , TAG = require('./_wks')('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};
},{"./_has":60,"./_object-dp":88,"./_wks":138}],114:[function(require,module,exports){
var shared = require('./_shared')('keys')
  , uid    = require('./_uid');
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};
},{"./_shared":115,"./_uid":135}],115:[function(require,module,exports){
var global = require('./_global')
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};
},{"./_global":59}],116:[function(require,module,exports){
// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject  = require('./_an-object')
  , aFunction = require('./_a-function')
  , SPECIES   = require('./_wks')('species');
module.exports = function(O, D){
  var C = anObject(O).constructor, S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};
},{"./_a-function":24,"./_an-object":28,"./_wks":138}],117:[function(require,module,exports){
var fails = require('./_fails');

module.exports = function(method, arg){
  return !!method && fails(function(){
    arg ? method.call(null, function(){}, 1) : method.call(null);
  });
};
},{"./_fails":55}],118:[function(require,module,exports){
var toInteger = require('./_to-integer')
  , defined   = require('./_defined');
// true  -> String#at
// false -> String#codePointAt
module.exports = function(TO_STRING){
  return function(that, pos){
    var s = String(defined(that))
      , i = toInteger(pos)
      , l = s.length
      , a, b;
    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};
},{"./_defined":48,"./_to-integer":127}],119:[function(require,module,exports){
// helper for String#{startsWith, endsWith, includes}
var isRegExp = require('./_is-regexp')
  , defined  = require('./_defined');

module.exports = function(that, searchString, NAME){
  if(isRegExp(searchString))throw TypeError('String#' + NAME + " doesn't accept regex!");
  return String(defined(that));
};
},{"./_defined":48,"./_is-regexp":71}],120:[function(require,module,exports){
var $export = require('./_export')
  , fails   = require('./_fails')
  , defined = require('./_defined')
  , quot    = /"/g;
// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
var createHTML = function(string, tag, attribute, value) {
  var S  = String(defined(string))
    , p1 = '<' + tag;
  if(attribute !== '')p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
  return p1 + '>' + S + '</' + tag + '>';
};
module.exports = function(NAME, exec){
  var O = {};
  O[NAME] = exec(createHTML);
  $export($export.P + $export.F * fails(function(){
    var test = ''[NAME]('"');
    return test !== test.toLowerCase() || test.split('"').length > 3;
  }), 'String', O);
};
},{"./_defined":48,"./_export":53,"./_fails":55}],121:[function(require,module,exports){
// https://github.com/tc39/proposal-string-pad-start-end
var toLength = require('./_to-length')
  , repeat   = require('./_string-repeat')
  , defined  = require('./_defined');

module.exports = function(that, maxLength, fillString, left){
  var S            = String(defined(that))
    , stringLength = S.length
    , fillStr      = fillString === undefined ? ' ' : String(fillString)
    , intMaxLength = toLength(maxLength);
  if(intMaxLength <= stringLength || fillStr == '')return S;
  var fillLen = intMaxLength - stringLength
    , stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
  if(stringFiller.length > fillLen)stringFiller = stringFiller.slice(0, fillLen);
  return left ? stringFiller + S : S + stringFiller;
};

},{"./_defined":48,"./_string-repeat":122,"./_to-length":129}],122:[function(require,module,exports){
'use strict';
var toInteger = require('./_to-integer')
  , defined   = require('./_defined');

module.exports = function repeat(count){
  var str = String(defined(this))
    , res = ''
    , n   = toInteger(count);
  if(n < 0 || n == Infinity)throw RangeError("Count can't be negative");
  for(;n > 0; (n >>>= 1) && (str += str))if(n & 1)res += str;
  return res;
};
},{"./_defined":48,"./_to-integer":127}],123:[function(require,module,exports){
var $export = require('./_export')
  , defined = require('./_defined')
  , fails   = require('./_fails')
  , spaces  = require('./_string-ws')
  , space   = '[' + spaces + ']'
  , non     = '\u200b\u0085'
  , ltrim   = RegExp('^' + space + space + '*')
  , rtrim   = RegExp(space + space + '*$');

var exporter = function(KEY, exec, ALIAS){
  var exp   = {};
  var FORCE = fails(function(){
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if(ALIAS)exp[ALIAS] = fn;
  $export($export.P + $export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function(string, TYPE){
  string = String(defined(string));
  if(TYPE & 1)string = string.replace(ltrim, '');
  if(TYPE & 2)string = string.replace(rtrim, '');
  return string;
};

module.exports = exporter;
},{"./_defined":48,"./_export":53,"./_fails":55,"./_string-ws":124}],124:[function(require,module,exports){
module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';
},{}],125:[function(require,module,exports){
var ctx                = require('./_ctx')
  , invoke             = require('./_invoke')
  , html               = require('./_html')
  , cel                = require('./_dom-create')
  , global             = require('./_global')
  , process            = global.process
  , setTask            = global.setImmediate
  , clearTask          = global.clearImmediate
  , MessageChannel     = global.MessageChannel
  , counter            = 0
  , queue              = {}
  , ONREADYSTATECHANGE = 'onreadystatechange'
  , defer, channel, port;
var run = function(){
  var id = +this;
  if(queue.hasOwnProperty(id)){
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function(event){
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if(!setTask || !clearTask){
  setTask = function setImmediate(fn){
    var args = [], i = 1;
    while(arguments.length > i)args.push(arguments[i++]);
    queue[++counter] = function(){
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id){
    delete queue[id];
  };
  // Node.js 0.8-
  if(require('./_cof')(process) == 'process'){
    defer = function(id){
      process.nextTick(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if(MessageChannel){
    channel = new MessageChannel;
    port    = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
    defer = function(id){
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if(ONREADYSTATECHANGE in cel('script')){
    defer = function(id){
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function(id){
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set:   setTask,
  clear: clearTask
};
},{"./_cof":39,"./_ctx":46,"./_dom-create":50,"./_global":59,"./_html":62,"./_invoke":65}],126:[function(require,module,exports){
var toInteger = require('./_to-integer')
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};
},{"./_to-integer":127}],127:[function(require,module,exports){
// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};
},{}],128:[function(require,module,exports){
// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = require('./_iobject')
  , defined = require('./_defined');
module.exports = function(it){
  return IObject(defined(it));
};
},{"./_defined":48,"./_iobject":66}],129:[function(require,module,exports){
// 7.1.15 ToLength
var toInteger = require('./_to-integer')
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};
},{"./_to-integer":127}],130:[function(require,module,exports){
// 7.1.13 ToObject(argument)
var defined = require('./_defined');
module.exports = function(it){
  return Object(defined(it));
};
},{"./_defined":48}],131:[function(require,module,exports){
// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = require('./_is-object');
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function(it, S){
  if(!isObject(it))return it;
  var fn, val;
  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  throw TypeError("Can't convert object to primitive value");
};
},{"./_is-object":70}],132:[function(require,module,exports){
'use strict';
if(require('./_descriptors')){
  var LIBRARY             = require('./_library')
    , global              = require('./_global')
    , fails               = require('./_fails')
    , $export             = require('./_export')
    , $typed              = require('./_typed')
    , $buffer             = require('./_typed-buffer')
    , ctx                 = require('./_ctx')
    , anInstance          = require('./_an-instance')
    , propertyDesc        = require('./_property-desc')
    , hide                = require('./_hide')
    , redefineAll         = require('./_redefine-all')
    , toInteger           = require('./_to-integer')
    , toLength            = require('./_to-length')
    , toIndex             = require('./_to-index')
    , toPrimitive         = require('./_to-primitive')
    , has                 = require('./_has')
    , same                = require('./_same-value')
    , classof             = require('./_classof')
    , isObject            = require('./_is-object')
    , toObject            = require('./_to-object')
    , isArrayIter         = require('./_is-array-iter')
    , create              = require('./_object-create')
    , getPrototypeOf      = require('./_object-gpo')
    , gOPN                = require('./_object-gopn').f
    , getIterFn           = require('./core.get-iterator-method')
    , uid                 = require('./_uid')
    , wks                 = require('./_wks')
    , createArrayMethod   = require('./_array-methods')
    , createArrayIncludes = require('./_array-includes')
    , speciesConstructor  = require('./_species-constructor')
    , ArrayIterators      = require('./es6.array.iterator')
    , Iterators           = require('./_iterators')
    , $iterDetect         = require('./_iter-detect')
    , setSpecies          = require('./_set-species')
    , arrayFill           = require('./_array-fill')
    , arrayCopyWithin     = require('./_array-copy-within')
    , $DP                 = require('./_object-dp')
    , $GOPD               = require('./_object-gopd')
    , dP                  = $DP.f
    , gOPD                = $GOPD.f
    , RangeError          = global.RangeError
    , TypeError           = global.TypeError
    , Uint8Array          = global.Uint8Array
    , ARRAY_BUFFER        = 'ArrayBuffer'
    , SHARED_BUFFER       = 'Shared' + ARRAY_BUFFER
    , BYTES_PER_ELEMENT   = 'BYTES_PER_ELEMENT'
    , PROTOTYPE           = 'prototype'
    , ArrayProto          = Array[PROTOTYPE]
    , $ArrayBuffer        = $buffer.ArrayBuffer
    , $DataView           = $buffer.DataView
    , arrayForEach        = createArrayMethod(0)
    , arrayFilter         = createArrayMethod(2)
    , arraySome           = createArrayMethod(3)
    , arrayEvery          = createArrayMethod(4)
    , arrayFind           = createArrayMethod(5)
    , arrayFindIndex      = createArrayMethod(6)
    , arrayIncludes       = createArrayIncludes(true)
    , arrayIndexOf        = createArrayIncludes(false)
    , arrayValues         = ArrayIterators.values
    , arrayKeys           = ArrayIterators.keys
    , arrayEntries        = ArrayIterators.entries
    , arrayLastIndexOf    = ArrayProto.lastIndexOf
    , arrayReduce         = ArrayProto.reduce
    , arrayReduceRight    = ArrayProto.reduceRight
    , arrayJoin           = ArrayProto.join
    , arraySort           = ArrayProto.sort
    , arraySlice          = ArrayProto.slice
    , arrayToString       = ArrayProto.toString
    , arrayToLocaleString = ArrayProto.toLocaleString
    , ITERATOR            = wks('iterator')
    , TAG                 = wks('toStringTag')
    , TYPED_CONSTRUCTOR   = uid('typed_constructor')
    , DEF_CONSTRUCTOR     = uid('def_constructor')
    , ALL_CONSTRUCTORS    = $typed.CONSTR
    , TYPED_ARRAY         = $typed.TYPED
    , VIEW                = $typed.VIEW
    , WRONG_LENGTH        = 'Wrong length!';

  var $map = createArrayMethod(1, function(O, length){
    return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);
  });

  var LITTLE_ENDIAN = fails(function(){
    return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;
  });

  var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(function(){
    new Uint8Array(1).set({});
  });

  var strictToLength = function(it, SAME){
    if(it === undefined)throw TypeError(WRONG_LENGTH);
    var number = +it
      , length = toLength(it);
    if(SAME && !same(number, length))throw RangeError(WRONG_LENGTH);
    return length;
  };

  var toOffset = function(it, BYTES){
    var offset = toInteger(it);
    if(offset < 0 || offset % BYTES)throw RangeError('Wrong offset!');
    return offset;
  };

  var validate = function(it){
    if(isObject(it) && TYPED_ARRAY in it)return it;
    throw TypeError(it + ' is not a typed array!');
  };

  var allocate = function(C, length){
    if(!(isObject(C) && TYPED_CONSTRUCTOR in C)){
      throw TypeError('It is not a typed array constructor!');
    } return new C(length);
  };

  var speciesFromList = function(O, list){
    return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);
  };

  var fromList = function(C, list){
    var index  = 0
      , length = list.length
      , result = allocate(C, length);
    while(length > index)result[index] = list[index++];
    return result;
  };

  var addGetter = function(it, key, internal){
    dP(it, key, {get: function(){ return this._d[internal]; }});
  };

  var $from = function from(source /*, mapfn, thisArg */){
    var O       = toObject(source)
      , aLen    = arguments.length
      , mapfn   = aLen > 1 ? arguments[1] : undefined
      , mapping = mapfn !== undefined
      , iterFn  = getIterFn(O)
      , i, length, values, result, step, iterator;
    if(iterFn != undefined && !isArrayIter(iterFn)){
      for(iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++){
        values.push(step.value);
      } O = values;
    }
    if(mapping && aLen > 2)mapfn = ctx(mapfn, arguments[2], 2);
    for(i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++){
      result[i] = mapping ? mapfn(O[i], i) : O[i];
    }
    return result;
  };

  var $of = function of(/*...items*/){
    var index  = 0
      , length = arguments.length
      , result = allocate(this, length);
    while(length > index)result[index] = arguments[index++];
    return result;
  };

  // iOS Safari 6.x fails here
  var TO_LOCALE_BUG = !!Uint8Array && fails(function(){ arrayToLocaleString.call(new Uint8Array(1)); });

  var $toLocaleString = function toLocaleString(){
    return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);
  };

  var proto = {
    copyWithin: function copyWithin(target, start /*, end */){
      return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
    },
    every: function every(callbackfn /*, thisArg */){
      return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    fill: function fill(value /*, start, end */){ // eslint-disable-line no-unused-vars
      return arrayFill.apply(validate(this), arguments);
    },
    filter: function filter(callbackfn /*, thisArg */){
      return speciesFromList(this, arrayFilter(validate(this), callbackfn,
        arguments.length > 1 ? arguments[1] : undefined));
    },
    find: function find(predicate /*, thisArg */){
      return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
    },
    findIndex: function findIndex(predicate /*, thisArg */){
      return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
    },
    forEach: function forEach(callbackfn /*, thisArg */){
      arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    indexOf: function indexOf(searchElement /*, fromIndex */){
      return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
    },
    includes: function includes(searchElement /*, fromIndex */){
      return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
    },
    join: function join(separator){ // eslint-disable-line no-unused-vars
      return arrayJoin.apply(validate(this), arguments);
    },
    lastIndexOf: function lastIndexOf(searchElement /*, fromIndex */){ // eslint-disable-line no-unused-vars
      return arrayLastIndexOf.apply(validate(this), arguments);
    },
    map: function map(mapfn /*, thisArg */){
      return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    reduce: function reduce(callbackfn /*, initialValue */){ // eslint-disable-line no-unused-vars
      return arrayReduce.apply(validate(this), arguments);
    },
    reduceRight: function reduceRight(callbackfn /*, initialValue */){ // eslint-disable-line no-unused-vars
      return arrayReduceRight.apply(validate(this), arguments);
    },
    reverse: function reverse(){
      var that   = this
        , length = validate(that).length
        , middle = Math.floor(length / 2)
        , index  = 0
        , value;
      while(index < middle){
        value         = that[index];
        that[index++] = that[--length];
        that[length]  = value;
      } return that;
    },
    some: function some(callbackfn /*, thisArg */){
      return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    sort: function sort(comparefn){
      return arraySort.call(validate(this), comparefn);
    },
    subarray: function subarray(begin, end){
      var O      = validate(this)
        , length = O.length
        , $begin = toIndex(begin, length);
      return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(
        O.buffer,
        O.byteOffset + $begin * O.BYTES_PER_ELEMENT,
        toLength((end === undefined ? length : toIndex(end, length)) - $begin)
      );
    }
  };

  var $slice = function slice(start, end){
    return speciesFromList(this, arraySlice.call(validate(this), start, end));
  };

  var $set = function set(arrayLike /*, offset */){
    validate(this);
    var offset = toOffset(arguments[1], 1)
      , length = this.length
      , src    = toObject(arrayLike)
      , len    = toLength(src.length)
      , index  = 0;
    if(len + offset > length)throw RangeError(WRONG_LENGTH);
    while(index < len)this[offset + index] = src[index++];
  };

  var $iterators = {
    entries: function entries(){
      return arrayEntries.call(validate(this));
    },
    keys: function keys(){
      return arrayKeys.call(validate(this));
    },
    values: function values(){
      return arrayValues.call(validate(this));
    }
  };

  var isTAIndex = function(target, key){
    return isObject(target)
      && target[TYPED_ARRAY]
      && typeof key != 'symbol'
      && key in target
      && String(+key) == String(key);
  };
  var $getDesc = function getOwnPropertyDescriptor(target, key){
    return isTAIndex(target, key = toPrimitive(key, true))
      ? propertyDesc(2, target[key])
      : gOPD(target, key);
  };
  var $setDesc = function defineProperty(target, key, desc){
    if(isTAIndex(target, key = toPrimitive(key, true))
      && isObject(desc)
      && has(desc, 'value')
      && !has(desc, 'get')
      && !has(desc, 'set')
      // TODO: add validation descriptor w/o calling accessors
      && !desc.configurable
      && (!has(desc, 'writable') || desc.writable)
      && (!has(desc, 'enumerable') || desc.enumerable)
    ){
      target[key] = desc.value;
      return target;
    } else return dP(target, key, desc);
  };

  if(!ALL_CONSTRUCTORS){
    $GOPD.f = $getDesc;
    $DP.f   = $setDesc;
  }

  $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {
    getOwnPropertyDescriptor: $getDesc,
    defineProperty:           $setDesc
  });

  if(fails(function(){ arrayToString.call({}); })){
    arrayToString = arrayToLocaleString = function toString(){
      return arrayJoin.call(this);
    }
  }

  var $TypedArrayPrototype$ = redefineAll({}, proto);
  redefineAll($TypedArrayPrototype$, $iterators);
  hide($TypedArrayPrototype$, ITERATOR, $iterators.values);
  redefineAll($TypedArrayPrototype$, {
    slice:          $slice,
    set:            $set,
    constructor:    function(){ /* noop */ },
    toString:       arrayToString,
    toLocaleString: $toLocaleString
  });
  addGetter($TypedArrayPrototype$, 'buffer', 'b');
  addGetter($TypedArrayPrototype$, 'byteOffset', 'o');
  addGetter($TypedArrayPrototype$, 'byteLength', 'l');
  addGetter($TypedArrayPrototype$, 'length', 'e');
  dP($TypedArrayPrototype$, TAG, {
    get: function(){ return this[TYPED_ARRAY]; }
  });

  module.exports = function(KEY, BYTES, wrapper, CLAMPED){
    CLAMPED = !!CLAMPED;
    var NAME       = KEY + (CLAMPED ? 'Clamped' : '') + 'Array'
      , ISNT_UINT8 = NAME != 'Uint8Array'
      , GETTER     = 'get' + KEY
      , SETTER     = 'set' + KEY
      , TypedArray = global[NAME]
      , Base       = TypedArray || {}
      , TAC        = TypedArray && getPrototypeOf(TypedArray)
      , FORCED     = !TypedArray || !$typed.ABV
      , O          = {}
      , TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];
    var getter = function(that, index){
      var data = that._d;
      return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
    };
    var setter = function(that, index, value){
      var data = that._d;
      if(CLAMPED)value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;
      data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);
    };
    var addElement = function(that, index){
      dP(that, index, {
        get: function(){
          return getter(this, index);
        },
        set: function(value){
          return setter(this, index, value);
        },
        enumerable: true
      });
    };
    if(FORCED){
      TypedArray = wrapper(function(that, data, $offset, $length){
        anInstance(that, TypedArray, NAME, '_d');
        var index  = 0
          , offset = 0
          , buffer, byteLength, length, klass;
        if(!isObject(data)){
          length     = strictToLength(data, true)
          byteLength = length * BYTES;
          buffer     = new $ArrayBuffer(byteLength);
        } else if(data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER){
          buffer = data;
          offset = toOffset($offset, BYTES);
          var $len = data.byteLength;
          if($length === undefined){
            if($len % BYTES)throw RangeError(WRONG_LENGTH);
            byteLength = $len - offset;
            if(byteLength < 0)throw RangeError(WRONG_LENGTH);
          } else {
            byteLength = toLength($length) * BYTES;
            if(byteLength + offset > $len)throw RangeError(WRONG_LENGTH);
          }
          length = byteLength / BYTES;
        } else if(TYPED_ARRAY in data){
          return fromList(TypedArray, data);
        } else {
          return $from.call(TypedArray, data);
        }
        hide(that, '_d', {
          b: buffer,
          o: offset,
          l: byteLength,
          e: length,
          v: new $DataView(buffer)
        });
        while(index < length)addElement(that, index++);
      });
      TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);
      hide(TypedArrayPrototype, 'constructor', TypedArray);
    } else if(!$iterDetect(function(iter){
      // V8 works with iterators, but fails in many other cases
      // https://code.google.com/p/v8/issues/detail?id=4552
      new TypedArray(null); // eslint-disable-line no-new
      new TypedArray(iter); // eslint-disable-line no-new
    }, true)){
      TypedArray = wrapper(function(that, data, $offset, $length){
        anInstance(that, TypedArray, NAME);
        var klass;
        // `ws` module bug, temporarily remove validation length for Uint8Array
        // https://github.com/websockets/ws/pull/645
        if(!isObject(data))return new Base(strictToLength(data, ISNT_UINT8));
        if(data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER){
          return $length !== undefined
            ? new Base(data, toOffset($offset, BYTES), $length)
            : $offset !== undefined
              ? new Base(data, toOffset($offset, BYTES))
              : new Base(data);
        }
        if(TYPED_ARRAY in data)return fromList(TypedArray, data);
        return $from.call(TypedArray, data);
      });
      arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function(key){
        if(!(key in TypedArray))hide(TypedArray, key, Base[key]);
      });
      TypedArray[PROTOTYPE] = TypedArrayPrototype;
      if(!LIBRARY)TypedArrayPrototype.constructor = TypedArray;
    }
    var $nativeIterator   = TypedArrayPrototype[ITERATOR]
      , CORRECT_ITER_NAME = !!$nativeIterator && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined)
      , $iterator         = $iterators.values;
    hide(TypedArray, TYPED_CONSTRUCTOR, true);
    hide(TypedArrayPrototype, TYPED_ARRAY, NAME);
    hide(TypedArrayPrototype, VIEW, true);
    hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);

    if(CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)){
      dP(TypedArrayPrototype, TAG, {
        get: function(){ return NAME; }
      });
    }

    O[NAME] = TypedArray;

    $export($export.G + $export.W + $export.F * (TypedArray != Base), O);

    $export($export.S, NAME, {
      BYTES_PER_ELEMENT: BYTES,
      from: $from,
      of: $of
    });

    if(!(BYTES_PER_ELEMENT in TypedArrayPrototype))hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);

    $export($export.P, NAME, proto);

    setSpecies(NAME);

    $export($export.P + $export.F * FORCED_SET, NAME, {set: $set});

    $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);

    $export($export.P + $export.F * (TypedArrayPrototype.toString != arrayToString), NAME, {toString: arrayToString});

    $export($export.P + $export.F * fails(function(){
      new TypedArray(1).slice();
    }), NAME, {slice: $slice});

    $export($export.P + $export.F * (fails(function(){
      return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString()
    }) || !fails(function(){
      TypedArrayPrototype.toLocaleString.call([1, 2]);
    })), NAME, {toLocaleString: $toLocaleString});

    Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;
    if(!LIBRARY && !CORRECT_ITER_NAME)hide(TypedArrayPrototype, ITERATOR, $iterator);
  };
} else module.exports = function(){ /* empty */ };
},{"./_an-instance":27,"./_array-copy-within":29,"./_array-fill":30,"./_array-includes":32,"./_array-methods":33,"./_classof":38,"./_ctx":46,"./_descriptors":49,"./_export":53,"./_fails":55,"./_global":59,"./_has":60,"./_hide":61,"./_is-array-iter":67,"./_is-object":70,"./_iter-detect":75,"./_iterators":77,"./_library":79,"./_object-create":87,"./_object-dp":88,"./_object-gopd":91,"./_object-gopn":93,"./_object-gpo":95,"./_property-desc":106,"./_redefine-all":107,"./_same-value":110,"./_set-species":112,"./_species-constructor":116,"./_to-index":126,"./_to-integer":127,"./_to-length":129,"./_to-object":130,"./_to-primitive":131,"./_typed":134,"./_typed-buffer":133,"./_uid":135,"./_wks":138,"./core.get-iterator-method":139,"./es6.array.iterator":151}],133:[function(require,module,exports){
'use strict';
var global         = require('./_global')
  , DESCRIPTORS    = require('./_descriptors')
  , LIBRARY        = require('./_library')
  , $typed         = require('./_typed')
  , hide           = require('./_hide')
  , redefineAll    = require('./_redefine-all')
  , fails          = require('./_fails')
  , anInstance     = require('./_an-instance')
  , toInteger      = require('./_to-integer')
  , toLength       = require('./_to-length')
  , gOPN           = require('./_object-gopn').f
  , dP             = require('./_object-dp').f
  , arrayFill      = require('./_array-fill')
  , setToStringTag = require('./_set-to-string-tag')
  , ARRAY_BUFFER   = 'ArrayBuffer'
  , DATA_VIEW      = 'DataView'
  , PROTOTYPE      = 'prototype'
  , WRONG_LENGTH   = 'Wrong length!'
  , WRONG_INDEX    = 'Wrong index!'
  , $ArrayBuffer   = global[ARRAY_BUFFER]
  , $DataView      = global[DATA_VIEW]
  , Math           = global.Math
  , RangeError     = global.RangeError
  , Infinity       = global.Infinity
  , BaseBuffer     = $ArrayBuffer
  , abs            = Math.abs
  , pow            = Math.pow
  , floor          = Math.floor
  , log            = Math.log
  , LN2            = Math.LN2
  , BUFFER         = 'buffer'
  , BYTE_LENGTH    = 'byteLength'
  , BYTE_OFFSET    = 'byteOffset'
  , $BUFFER        = DESCRIPTORS ? '_b' : BUFFER
  , $LENGTH        = DESCRIPTORS ? '_l' : BYTE_LENGTH
  , $OFFSET        = DESCRIPTORS ? '_o' : BYTE_OFFSET;

// IEEE754 conversions based on https://github.com/feross/ieee754
var packIEEE754 = function(value, mLen, nBytes){
  var buffer = Array(nBytes)
    , eLen   = nBytes * 8 - mLen - 1
    , eMax   = (1 << eLen) - 1
    , eBias  = eMax >> 1
    , rt     = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0
    , i      = 0
    , s      = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0
    , e, m, c;
  value = abs(value)
  if(value != value || value === Infinity){
    m = value != value ? 1 : 0;
    e = eMax;
  } else {
    e = floor(log(value) / LN2);
    if(value * (c = pow(2, -e)) < 1){
      e--;
      c *= 2;
    }
    if(e + eBias >= 1){
      value += rt / c;
    } else {
      value += rt * pow(2, 1 - eBias);
    }
    if(value * c >= 2){
      e++;
      c /= 2;
    }
    if(e + eBias >= eMax){
      m = 0;
      e = eMax;
    } else if(e + eBias >= 1){
      m = (value * c - 1) * pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * pow(2, eBias - 1) * pow(2, mLen);
      e = 0;
    }
  }
  for(; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8);
  e = e << mLen | m;
  eLen += mLen;
  for(; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8);
  buffer[--i] |= s * 128;
  return buffer;
};
var unpackIEEE754 = function(buffer, mLen, nBytes){
  var eLen  = nBytes * 8 - mLen - 1
    , eMax  = (1 << eLen) - 1
    , eBias = eMax >> 1
    , nBits = eLen - 7
    , i     = nBytes - 1
    , s     = buffer[i--]
    , e     = s & 127
    , m;
  s >>= 7;
  for(; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8);
  m = e & (1 << -nBits) - 1;
  e >>= -nBits;
  nBits += mLen;
  for(; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8);
  if(e === 0){
    e = 1 - eBias;
  } else if(e === eMax){
    return m ? NaN : s ? -Infinity : Infinity;
  } else {
    m = m + pow(2, mLen);
    e = e - eBias;
  } return (s ? -1 : 1) * m * pow(2, e - mLen);
};

var unpackI32 = function(bytes){
  return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];
};
var packI8 = function(it){
  return [it & 0xff];
};
var packI16 = function(it){
  return [it & 0xff, it >> 8 & 0xff];
};
var packI32 = function(it){
  return [it & 0xff, it >> 8 & 0xff, it >> 16 & 0xff, it >> 24 & 0xff];
};
var packF64 = function(it){
  return packIEEE754(it, 52, 8);
};
var packF32 = function(it){
  return packIEEE754(it, 23, 4);
};

var addGetter = function(C, key, internal){
  dP(C[PROTOTYPE], key, {get: function(){ return this[internal]; }});
};

var get = function(view, bytes, index, isLittleEndian){
  var numIndex = +index
    , intIndex = toInteger(numIndex);
  if(numIndex != intIndex || intIndex < 0 || intIndex + bytes > view[$LENGTH])throw RangeError(WRONG_INDEX);
  var store = view[$BUFFER]._b
    , start = intIndex + view[$OFFSET]
    , pack  = store.slice(start, start + bytes);
  return isLittleEndian ? pack : pack.reverse();
};
var set = function(view, bytes, index, conversion, value, isLittleEndian){
  var numIndex = +index
    , intIndex = toInteger(numIndex);
  if(numIndex != intIndex || intIndex < 0 || intIndex + bytes > view[$LENGTH])throw RangeError(WRONG_INDEX);
  var store = view[$BUFFER]._b
    , start = intIndex + view[$OFFSET]
    , pack  = conversion(+value);
  for(var i = 0; i < bytes; i++)store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];
};

var validateArrayBufferArguments = function(that, length){
  anInstance(that, $ArrayBuffer, ARRAY_BUFFER);
  var numberLength = +length
    , byteLength   = toLength(numberLength);
  if(numberLength != byteLength)throw RangeError(WRONG_LENGTH);
  return byteLength;
};

if(!$typed.ABV){
  $ArrayBuffer = function ArrayBuffer(length){
    var byteLength = validateArrayBufferArguments(this, length);
    this._b       = arrayFill.call(Array(byteLength), 0);
    this[$LENGTH] = byteLength;
  };

  $DataView = function DataView(buffer, byteOffset, byteLength){
    anInstance(this, $DataView, DATA_VIEW);
    anInstance(buffer, $ArrayBuffer, DATA_VIEW);
    var bufferLength = buffer[$LENGTH]
      , offset       = toInteger(byteOffset);
    if(offset < 0 || offset > bufferLength)throw RangeError('Wrong offset!');
    byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
    if(offset + byteLength > bufferLength)throw RangeError(WRONG_LENGTH);
    this[$BUFFER] = buffer;
    this[$OFFSET] = offset;
    this[$LENGTH] = byteLength;
  };

  if(DESCRIPTORS){
    addGetter($ArrayBuffer, BYTE_LENGTH, '_l');
    addGetter($DataView, BUFFER, '_b');
    addGetter($DataView, BYTE_LENGTH, '_l');
    addGetter($DataView, BYTE_OFFSET, '_o');
  }

  redefineAll($DataView[PROTOTYPE], {
    getInt8: function getInt8(byteOffset){
      return get(this, 1, byteOffset)[0] << 24 >> 24;
    },
    getUint8: function getUint8(byteOffset){
      return get(this, 1, byteOffset)[0];
    },
    getInt16: function getInt16(byteOffset /*, littleEndian */){
      var bytes = get(this, 2, byteOffset, arguments[1]);
      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
    },
    getUint16: function getUint16(byteOffset /*, littleEndian */){
      var bytes = get(this, 2, byteOffset, arguments[1]);
      return bytes[1] << 8 | bytes[0];
    },
    getInt32: function getInt32(byteOffset /*, littleEndian */){
      return unpackI32(get(this, 4, byteOffset, arguments[1]));
    },
    getUint32: function getUint32(byteOffset /*, littleEndian */){
      return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;
    },
    getFloat32: function getFloat32(byteOffset /*, littleEndian */){
      return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);
    },
    getFloat64: function getFloat64(byteOffset /*, littleEndian */){
      return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);
    },
    setInt8: function setInt8(byteOffset, value){
      set(this, 1, byteOffset, packI8, value);
    },
    setUint8: function setUint8(byteOffset, value){
      set(this, 1, byteOffset, packI8, value);
    },
    setInt16: function setInt16(byteOffset, value /*, littleEndian */){
      set(this, 2, byteOffset, packI16, value, arguments[2]);
    },
    setUint16: function setUint16(byteOffset, value /*, littleEndian */){
      set(this, 2, byteOffset, packI16, value, arguments[2]);
    },
    setInt32: function setInt32(byteOffset, value /*, littleEndian */){
      set(this, 4, byteOffset, packI32, value, arguments[2]);
    },
    setUint32: function setUint32(byteOffset, value /*, littleEndian */){
      set(this, 4, byteOffset, packI32, value, arguments[2]);
    },
    setFloat32: function setFloat32(byteOffset, value /*, littleEndian */){
      set(this, 4, byteOffset, packF32, value, arguments[2]);
    },
    setFloat64: function setFloat64(byteOffset, value /*, littleEndian */){
      set(this, 8, byteOffset, packF64, value, arguments[2]);
    }
  });
} else {
  if(!fails(function(){
    new $ArrayBuffer;     // eslint-disable-line no-new
  }) || !fails(function(){
    new $ArrayBuffer(.5); // eslint-disable-line no-new
  })){
    $ArrayBuffer = function ArrayBuffer(length){
      return new BaseBuffer(validateArrayBufferArguments(this, length));
    };
    var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];
    for(var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j; ){
      if(!((key = keys[j++]) in $ArrayBuffer))hide($ArrayBuffer, key, BaseBuffer[key]);
    };
    if(!LIBRARY)ArrayBufferProto.constructor = $ArrayBuffer;
  }
  // iOS Safari 7.x bug
  var view = new $DataView(new $ArrayBuffer(2))
    , $setInt8 = $DataView[PROTOTYPE].setInt8;
  view.setInt8(0, 2147483648);
  view.setInt8(1, 2147483649);
  if(view.getInt8(0) || !view.getInt8(1))redefineAll($DataView[PROTOTYPE], {
    setInt8: function setInt8(byteOffset, value){
      $setInt8.call(this, byteOffset, value << 24 >> 24);
    },
    setUint8: function setUint8(byteOffset, value){
      $setInt8.call(this, byteOffset, value << 24 >> 24);
    }
  }, true);
}
setToStringTag($ArrayBuffer, ARRAY_BUFFER);
setToStringTag($DataView, DATA_VIEW);
hide($DataView[PROTOTYPE], $typed.VIEW, true);
exports[ARRAY_BUFFER] = $ArrayBuffer;
exports[DATA_VIEW] = $DataView;
},{"./_an-instance":27,"./_array-fill":30,"./_descriptors":49,"./_fails":55,"./_global":59,"./_hide":61,"./_library":79,"./_object-dp":88,"./_object-gopn":93,"./_redefine-all":107,"./_set-to-string-tag":113,"./_to-integer":127,"./_to-length":129,"./_typed":134}],134:[function(require,module,exports){
var global = require('./_global')
  , hide   = require('./_hide')
  , uid    = require('./_uid')
  , TYPED  = uid('typed_array')
  , VIEW   = uid('view')
  , ABV    = !!(global.ArrayBuffer && global.DataView)
  , CONSTR = ABV
  , i = 0, l = 9, Typed;

var TypedArrayConstructors = (
  'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'
).split(',');

while(i < l){
  if(Typed = global[TypedArrayConstructors[i++]]){
    hide(Typed.prototype, TYPED, true);
    hide(Typed.prototype, VIEW, true);
  } else CONSTR = false;
}

module.exports = {
  ABV:    ABV,
  CONSTR: CONSTR,
  TYPED:  TYPED,
  VIEW:   VIEW
};
},{"./_global":59,"./_hide":61,"./_uid":135}],135:[function(require,module,exports){
var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};
},{}],136:[function(require,module,exports){
var global         = require('./_global')
  , core           = require('./_core')
  , LIBRARY        = require('./_library')
  , wksExt         = require('./_wks-ext')
  , defineProperty = require('./_object-dp').f;
module.exports = function(name){
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
};
},{"./_core":44,"./_global":59,"./_library":79,"./_object-dp":88,"./_wks-ext":137}],137:[function(require,module,exports){
exports.f = require('./_wks');
},{"./_wks":138}],138:[function(require,module,exports){
var store      = require('./_shared')('wks')
  , uid        = require('./_uid')
  , Symbol     = require('./_global').Symbol
  , USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function(name){
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;
},{"./_global":59,"./_shared":115,"./_uid":135}],139:[function(require,module,exports){
var classof   = require('./_classof')
  , ITERATOR  = require('./_wks')('iterator')
  , Iterators = require('./_iterators');
module.exports = require('./_core').getIteratorMethod = function(it){
  if(it != undefined)return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};
},{"./_classof":38,"./_core":44,"./_iterators":77,"./_wks":138}],140:[function(require,module,exports){
// https://github.com/benjamingr/RexExp.escape
var $export = require('./_export')
  , $re     = require('./_replacer')(/[\\^$*+?.()|[\]{}]/g, '\\$&');

$export($export.S, 'RegExp', {escape: function escape(it){ return $re(it); }});

},{"./_export":53,"./_replacer":109}],141:[function(require,module,exports){
// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
var $export = require('./_export');

$export($export.P, 'Array', {copyWithin: require('./_array-copy-within')});

require('./_add-to-unscopables')('copyWithin');
},{"./_add-to-unscopables":26,"./_array-copy-within":29,"./_export":53}],142:[function(require,module,exports){
'use strict';
var $export = require('./_export')
  , $every  = require('./_array-methods')(4);

$export($export.P + $export.F * !require('./_strict-method')([].every, true), 'Array', {
  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
  every: function every(callbackfn /* , thisArg */){
    return $every(this, callbackfn, arguments[1]);
  }
});
},{"./_array-methods":33,"./_export":53,"./_strict-method":117}],143:[function(require,module,exports){
// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
var $export = require('./_export');

$export($export.P, 'Array', {fill: require('./_array-fill')});

require('./_add-to-unscopables')('fill');
},{"./_add-to-unscopables":26,"./_array-fill":30,"./_export":53}],144:[function(require,module,exports){
'use strict';
var $export = require('./_export')
  , $filter = require('./_array-methods')(2);

$export($export.P + $export.F * !require('./_strict-method')([].filter, true), 'Array', {
  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
  filter: function filter(callbackfn /* , thisArg */){
    return $filter(this, callbackfn, arguments[1]);
  }
});
},{"./_array-methods":33,"./_export":53,"./_strict-method":117}],145:[function(require,module,exports){
'use strict';
// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
var $export = require('./_export')
  , $find   = require('./_array-methods')(6)
  , KEY     = 'findIndex'
  , forced  = true;
// Shouldn't skip holes
if(KEY in [])Array(1)[KEY](function(){ forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  findIndex: function findIndex(callbackfn/*, that = undefined */){
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
require('./_add-to-unscopables')(KEY);
},{"./_add-to-unscopables":26,"./_array-methods":33,"./_export":53}],146:[function(require,module,exports){
'use strict';
// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
var $export = require('./_export')
  , $find   = require('./_array-methods')(5)
  , KEY     = 'find'
  , forced  = true;
// Shouldn't skip holes
if(KEY in [])Array(1)[KEY](function(){ forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  find: function find(callbackfn/*, that = undefined */){
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
require('./_add-to-unscopables')(KEY);
},{"./_add-to-unscopables":26,"./_array-methods":33,"./_export":53}],147:[function(require,module,exports){
'use strict';
var $export  = require('./_export')
  , $forEach = require('./_array-methods')(0)
  , STRICT   = require('./_strict-method')([].forEach, true);

$export($export.P + $export.F * !STRICT, 'Array', {
  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
  forEach: function forEach(callbackfn /* , thisArg */){
    return $forEach(this, callbackfn, arguments[1]);
  }
});
},{"./_array-methods":33,"./_export":53,"./_strict-method":117}],148:[function(require,module,exports){
'use strict';
var ctx            = require('./_ctx')
  , $export        = require('./_export')
  , toObject       = require('./_to-object')
  , call           = require('./_iter-call')
  , isArrayIter    = require('./_is-array-iter')
  , toLength       = require('./_to-length')
  , createProperty = require('./_create-property')
  , getIterFn      = require('./core.get-iterator-method');

$export($export.S + $export.F * !require('./_iter-detect')(function(iter){ Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
    var O       = toObject(arrayLike)
      , C       = typeof this == 'function' ? this : Array
      , aLen    = arguments.length
      , mapfn   = aLen > 1 ? arguments[1] : undefined
      , mapping = mapfn !== undefined
      , index   = 0
      , iterFn  = getIterFn(O)
      , length, result, step, iterator;
    if(mapping)mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for(result = new C(length); length > index; index++){
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});

},{"./_create-property":45,"./_ctx":46,"./_export":53,"./_is-array-iter":67,"./_iter-call":72,"./_iter-detect":75,"./_to-length":129,"./_to-object":130,"./core.get-iterator-method":139}],149:[function(require,module,exports){
'use strict';
var $export       = require('./_export')
  , $indexOf      = require('./_array-includes')(false)
  , $native       = [].indexOf
  , NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;

$export($export.P + $export.F * (NEGATIVE_ZERO || !require('./_strict-method')($native)), 'Array', {
  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
  indexOf: function indexOf(searchElement /*, fromIndex = 0 */){
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? $native.apply(this, arguments) || 0
      : $indexOf(this, searchElement, arguments[1]);
  }
});
},{"./_array-includes":32,"./_export":53,"./_strict-method":117}],150:[function(require,module,exports){
// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
var $export = require('./_export');

$export($export.S, 'Array', {isArray: require('./_is-array')});
},{"./_export":53,"./_is-array":68}],151:[function(require,module,exports){
'use strict';
var addToUnscopables = require('./_add-to-unscopables')
  , step             = require('./_iter-step')
  , Iterators        = require('./_iterators')
  , toIObject        = require('./_to-iobject');

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = require('./_iter-define')(Array, 'Array', function(iterated, kind){
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , kind  = this._k
    , index = this._i++;
  if(!O || index >= O.length){
    this._t = undefined;
    return step(1);
  }
  if(kind == 'keys'  )return step(0, index);
  if(kind == 'values')return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');
},{"./_add-to-unscopables":26,"./_iter-define":74,"./_iter-step":76,"./_iterators":77,"./_to-iobject":128}],152:[function(require,module,exports){
'use strict';
// 22.1.3.13 Array.prototype.join(separator)
var $export   = require('./_export')
  , toIObject = require('./_to-iobject')
  , arrayJoin = [].join;

// fallback for not array-like strings
$export($export.P + $export.F * (require('./_iobject') != Object || !require('./_strict-method')(arrayJoin)), 'Array', {
  join: function join(separator){
    return arrayJoin.call(toIObject(this), separator === undefined ? ',' : separator);
  }
});
},{"./_export":53,"./_iobject":66,"./_strict-method":117,"./_to-iobject":128}],153:[function(require,module,exports){
'use strict';
var $export       = require('./_export')
  , toIObject     = require('./_to-iobject')
  , toInteger     = require('./_to-integer')
  , toLength      = require('./_to-length')
  , $native       = [].lastIndexOf
  , NEGATIVE_ZERO = !!$native && 1 / [1].lastIndexOf(1, -0) < 0;

$export($export.P + $export.F * (NEGATIVE_ZERO || !require('./_strict-method')($native)), 'Array', {
  // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
  lastIndexOf: function lastIndexOf(searchElement /*, fromIndex = @[*-1] */){
    // convert -0 to +0
    if(NEGATIVE_ZERO)return $native.apply(this, arguments) || 0;
    var O      = toIObject(this)
      , length = toLength(O.length)
      , index  = length - 1;
    if(arguments.length > 1)index = Math.min(index, toInteger(arguments[1]));
    if(index < 0)index = length + index;
    for(;index >= 0; index--)if(index in O)if(O[index] === searchElement)return index || 0;
    return -1;
  }
});
},{"./_export":53,"./_strict-method":117,"./_to-integer":127,"./_to-iobject":128,"./_to-length":129}],154:[function(require,module,exports){
'use strict';
var $export = require('./_export')
  , $map    = require('./_array-methods')(1);

$export($export.P + $export.F * !require('./_strict-method')([].map, true), 'Array', {
  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
  map: function map(callbackfn /* , thisArg */){
    return $map(this, callbackfn, arguments[1]);
  }
});
},{"./_array-methods":33,"./_export":53,"./_strict-method":117}],155:[function(require,module,exports){
'use strict';
var $export        = require('./_export')
  , createProperty = require('./_create-property');

// WebKit Array.of isn't generic
$export($export.S + $export.F * require('./_fails')(function(){
  function F(){}
  return !(Array.of.call(F) instanceof F);
}), 'Array', {
  // 22.1.2.3 Array.of( ...items)
  of: function of(/* ...args */){
    var index  = 0
      , aLen   = arguments.length
      , result = new (typeof this == 'function' ? this : Array)(aLen);
    while(aLen > index)createProperty(result, index, arguments[index++]);
    result.length = aLen;
    return result;
  }
});
},{"./_create-property":45,"./_export":53,"./_fails":55}],156:[function(require,module,exports){
'use strict';
var $export = require('./_export')
  , $reduce = require('./_array-reduce');

$export($export.P + $export.F * !require('./_strict-method')([].reduceRight, true), 'Array', {
  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
  reduceRight: function reduceRight(callbackfn /* , initialValue */){
    return $reduce(this, callbackfn, arguments.length, arguments[1], true);
  }
});
},{"./_array-reduce":34,"./_export":53,"./_strict-method":117}],157:[function(require,module,exports){
'use strict';
var $export = require('./_export')
  , $reduce = require('./_array-reduce');

$export($export.P + $export.F * !require('./_strict-method')([].reduce, true), 'Array', {
  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
  reduce: function reduce(callbackfn /* , initialValue */){
    return $reduce(this, callbackfn, arguments.length, arguments[1], false);
  }
});
},{"./_array-reduce":34,"./_export":53,"./_strict-method":117}],158:[function(require,module,exports){
'use strict';
var $export    = require('./_export')
  , html       = require('./_html')
  , cof        = require('./_cof')
  , toIndex    = require('./_to-index')
  , toLength   = require('./_to-length')
  , arraySlice = [].slice;

// fallback for not array-like ES3 strings and DOM objects
$export($export.P + $export.F * require('./_fails')(function(){
  if(html)arraySlice.call(html);
}), 'Array', {
  slice: function slice(begin, end){
    var len   = toLength(this.length)
      , klass = cof(this);
    end = end === undefined ? len : end;
    if(klass == 'Array')return arraySlice.call(this, begin, end);
    var start  = toIndex(begin, len)
      , upTo   = toIndex(end, len)
      , size   = toLength(upTo - start)
      , cloned = Array(size)
      , i      = 0;
    for(; i < size; i++)cloned[i] = klass == 'String'
      ? this.charAt(start + i)
      : this[start + i];
    return cloned;
  }
});
},{"./_cof":39,"./_export":53,"./_fails":55,"./_html":62,"./_to-index":126,"./_to-length":129}],159:[function(require,module,exports){
'use strict';
var $export = require('./_export')
  , $some   = require('./_array-methods')(3);

$export($export.P + $export.F * !require('./_strict-method')([].some, true), 'Array', {
  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
  some: function some(callbackfn /* , thisArg */){
    return $some(this, callbackfn, arguments[1]);
  }
});
},{"./_array-methods":33,"./_export":53,"./_strict-method":117}],160:[function(require,module,exports){
'use strict';
var $export   = require('./_export')
  , aFunction = require('./_a-function')
  , toObject  = require('./_to-object')
  , fails     = require('./_fails')
  , $sort     = [].sort
  , test      = [1, 2, 3];

$export($export.P + $export.F * (fails(function(){
  // IE8-
  test.sort(undefined);
}) || !fails(function(){
  // V8 bug
  test.sort(null);
  // Old WebKit
}) || !require('./_strict-method')($sort)), 'Array', {
  // 22.1.3.25 Array.prototype.sort(comparefn)
  sort: function sort(comparefn){
    return comparefn === undefined
      ? $sort.call(toObject(this))
      : $sort.call(toObject(this), aFunction(comparefn));
  }
});
},{"./_a-function":24,"./_export":53,"./_fails":55,"./_strict-method":117,"./_to-object":130}],161:[function(require,module,exports){
require('./_set-species')('Array');
},{"./_set-species":112}],162:[function(require,module,exports){
// 20.3.3.1 / 15.9.4.4 Date.now()
var $export = require('./_export');

$export($export.S, 'Date', {now: function(){ return new Date().getTime(); }});
},{"./_export":53}],163:[function(require,module,exports){
'use strict';
// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
var $export = require('./_export')
  , fails   = require('./_fails')
  , getTime = Date.prototype.getTime;

var lz = function(num){
  return num > 9 ? num : '0' + num;
};

// PhantomJS / old WebKit has a broken implementations
$export($export.P + $export.F * (fails(function(){
  return new Date(-5e13 - 1).toISOString() != '0385-07-25T07:06:39.999Z';
}) || !fails(function(){
  new Date(NaN).toISOString();
})), 'Date', {
  toISOString: function toISOString(){
    if(!isFinite(getTime.call(this)))throw RangeError('Invalid time value');
    var d = this
      , y = d.getUTCFullYear()
      , m = d.getUTCMilliseconds()
      , s = y < 0 ? '-' : y > 9999 ? '+' : '';
    return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) +
      '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) +
      'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) +
      ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';
  }
});
},{"./_export":53,"./_fails":55}],164:[function(require,module,exports){
'use strict';
var $export     = require('./_export')
  , toObject    = require('./_to-object')
  , toPrimitive = require('./_to-primitive');

$export($export.P + $export.F * require('./_fails')(function(){
  return new Date(NaN).toJSON() !== null || Date.prototype.toJSON.call({toISOString: function(){ return 1; }}) !== 1;
}), 'Date', {
  toJSON: function toJSON(key){
    var O  = toObject(this)
      , pv = toPrimitive(O);
    return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
  }
});
},{"./_export":53,"./_fails":55,"./_to-object":130,"./_to-primitive":131}],165:[function(require,module,exports){
var TO_PRIMITIVE = require('./_wks')('toPrimitive')
  , proto        = Date.prototype;

if(!(TO_PRIMITIVE in proto))require('./_hide')(proto, TO_PRIMITIVE, require('./_date-to-primitive'));
},{"./_date-to-primitive":47,"./_hide":61,"./_wks":138}],166:[function(require,module,exports){
var DateProto    = Date.prototype
  , INVALID_DATE = 'Invalid Date'
  , TO_STRING    = 'toString'
  , $toString    = DateProto[TO_STRING]
  , getTime      = DateProto.getTime;
if(new Date(NaN) + '' != INVALID_DATE){
  require('./_redefine')(DateProto, TO_STRING, function toString(){
    var value = getTime.call(this);
    return value === value ? $toString.call(this) : INVALID_DATE;
  });
}
},{"./_redefine":108}],167:[function(require,module,exports){
// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
var $export = require('./_export');

$export($export.P, 'Function', {bind: require('./_bind')});
},{"./_bind":37,"./_export":53}],168:[function(require,module,exports){
'use strict';
var isObject       = require('./_is-object')
  , getPrototypeOf = require('./_object-gpo')
  , HAS_INSTANCE   = require('./_wks')('hasInstance')
  , FunctionProto  = Function.prototype;
// 19.2.3.6 Function.prototype[@@hasInstance](V)
if(!(HAS_INSTANCE in FunctionProto))require('./_object-dp').f(FunctionProto, HAS_INSTANCE, {value: function(O){
  if(typeof this != 'function' || !isObject(O))return false;
  if(!isObject(this.prototype))return O instanceof this;
  // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
  while(O = getPrototypeOf(O))if(this.prototype === O)return true;
  return false;
}});
},{"./_is-object":70,"./_object-dp":88,"./_object-gpo":95,"./_wks":138}],169:[function(require,module,exports){
var dP         = require('./_object-dp').f
  , createDesc = require('./_property-desc')
  , has        = require('./_has')
  , FProto     = Function.prototype
  , nameRE     = /^\s*function ([^ (]*)/
  , NAME       = 'name';

var isExtensible = Object.isExtensible || function(){
  return true;
};

// 19.2.4.2 name
NAME in FProto || require('./_descriptors') && dP(FProto, NAME, {
  configurable: true,
  get: function(){
    try {
      var that = this
        , name = ('' + that).match(nameRE)[1];
      has(that, NAME) || !isExtensible(that) || dP(that, NAME, createDesc(5, name));
      return name;
    } catch(e){
      return '';
    }
  }
});
},{"./_descriptors":49,"./_has":60,"./_object-dp":88,"./_property-desc":106}],170:[function(require,module,exports){
'use strict';
var strong = require('./_collection-strong');

// 23.1 Map Objects
module.exports = require('./_collection')('Map', function(get){
  return function Map(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key){
    var entry = strong.getEntry(this, key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value){
    return strong.def(this, key === 0 ? 0 : key, value);
  }
}, strong, true);
},{"./_collection":43,"./_collection-strong":40}],171:[function(require,module,exports){
// 20.2.2.3 Math.acosh(x)
var $export = require('./_export')
  , log1p   = require('./_math-log1p')
  , sqrt    = Math.sqrt
  , $acosh  = Math.acosh;

$export($export.S + $export.F * !($acosh
  // V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
  && Math.floor($acosh(Number.MAX_VALUE)) == 710
  // Tor Browser bug: Math.acosh(Infinity) -> NaN 
  && $acosh(Infinity) == Infinity
), 'Math', {
  acosh: function acosh(x){
    return (x = +x) < 1 ? NaN : x > 94906265.62425156
      ? Math.log(x) + Math.LN2
      : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
  }
});
},{"./_export":53,"./_math-log1p":81}],172:[function(require,module,exports){
// 20.2.2.5 Math.asinh(x)
var $export = require('./_export')
  , $asinh  = Math.asinh;

function asinh(x){
  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
}

// Tor Browser bug: Math.asinh(0) -> -0 
$export($export.S + $export.F * !($asinh && 1 / $asinh(0) > 0), 'Math', {asinh: asinh});
},{"./_export":53}],173:[function(require,module,exports){
// 20.2.2.7 Math.atanh(x)
var $export = require('./_export')
  , $atanh  = Math.atanh;

// Tor Browser bug: Math.atanh(-0) -> 0 
$export($export.S + $export.F * !($atanh && 1 / $atanh(-0) < 0), 'Math', {
  atanh: function atanh(x){
    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
  }
});
},{"./_export":53}],174:[function(require,module,exports){
// 20.2.2.9 Math.cbrt(x)
var $export = require('./_export')
  , sign    = require('./_math-sign');

$export($export.S, 'Math', {
  cbrt: function cbrt(x){
    return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
  }
});
},{"./_export":53,"./_math-sign":82}],175:[function(require,module,exports){
// 20.2.2.11 Math.clz32(x)
var $export = require('./_export');

$export($export.S, 'Math', {
  clz32: function clz32(x){
    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
  }
});
},{"./_export":53}],176:[function(require,module,exports){
// 20.2.2.12 Math.cosh(x)
var $export = require('./_export')
  , exp     = Math.exp;

$export($export.S, 'Math', {
  cosh: function cosh(x){
    return (exp(x = +x) + exp(-x)) / 2;
  }
});
},{"./_export":53}],177:[function(require,module,exports){
// 20.2.2.14 Math.expm1(x)
var $export = require('./_export')
  , $expm1  = require('./_math-expm1');

$export($export.S + $export.F * ($expm1 != Math.expm1), 'Math', {expm1: $expm1});
},{"./_export":53,"./_math-expm1":80}],178:[function(require,module,exports){
// 20.2.2.16 Math.fround(x)
var $export   = require('./_export')
  , sign      = require('./_math-sign')
  , pow       = Math.pow
  , EPSILON   = pow(2, -52)
  , EPSILON32 = pow(2, -23)
  , MAX32     = pow(2, 127) * (2 - EPSILON32)
  , MIN32     = pow(2, -126);

var roundTiesToEven = function(n){
  return n + 1 / EPSILON - 1 / EPSILON;
};


$export($export.S, 'Math', {
  fround: function fround(x){
    var $abs  = Math.abs(x)
      , $sign = sign(x)
      , a, result;
    if($abs < MIN32)return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
    a = (1 + EPSILON32 / EPSILON) * $abs;
    result = a - (a - $abs);
    if(result > MAX32 || result != result)return $sign * Infinity;
    return $sign * result;
  }
});
},{"./_export":53,"./_math-sign":82}],179:[function(require,module,exports){
// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
var $export = require('./_export')
  , abs     = Math.abs;

$export($export.S, 'Math', {
  hypot: function hypot(value1, value2){ // eslint-disable-line no-unused-vars
    var sum  = 0
      , i    = 0
      , aLen = arguments.length
      , larg = 0
      , arg, div;
    while(i < aLen){
      arg = abs(arguments[i++]);
      if(larg < arg){
        div  = larg / arg;
        sum  = sum * div * div + 1;
        larg = arg;
      } else if(arg > 0){
        div  = arg / larg;
        sum += div * div;
      } else sum += arg;
    }
    return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
  }
});
},{"./_export":53}],180:[function(require,module,exports){
// 20.2.2.18 Math.imul(x, y)
var $export = require('./_export')
  , $imul   = Math.imul;

// some WebKit versions fails with big numbers, some has wrong arity
$export($export.S + $export.F * require('./_fails')(function(){
  return $imul(0xffffffff, 5) != -5 || $imul.length != 2;
}), 'Math', {
  imul: function imul(x, y){
    var UINT16 = 0xffff
      , xn = +x
      , yn = +y
      , xl = UINT16 & xn
      , yl = UINT16 & yn;
    return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
  }
});
},{"./_export":53,"./_fails":55}],181:[function(require,module,exports){
// 20.2.2.21 Math.log10(x)
var $export = require('./_export');

$export($export.S, 'Math', {
  log10: function log10(x){
    return Math.log(x) / Math.LN10;
  }
});
},{"./_export":53}],182:[function(require,module,exports){
// 20.2.2.20 Math.log1p(x)
var $export = require('./_export');

$export($export.S, 'Math', {log1p: require('./_math-log1p')});
},{"./_export":53,"./_math-log1p":81}],183:[function(require,module,exports){
// 20.2.2.22 Math.log2(x)
var $export = require('./_export');

$export($export.S, 'Math', {
  log2: function log2(x){
    return Math.log(x) / Math.LN2;
  }
});
},{"./_export":53}],184:[function(require,module,exports){
// 20.2.2.28 Math.sign(x)
var $export = require('./_export');

$export($export.S, 'Math', {sign: require('./_math-sign')});
},{"./_export":53,"./_math-sign":82}],185:[function(require,module,exports){
// 20.2.2.30 Math.sinh(x)
var $export = require('./_export')
  , expm1   = require('./_math-expm1')
  , exp     = Math.exp;

// V8 near Chromium 38 has a problem with very small numbers
$export($export.S + $export.F * require('./_fails')(function(){
  return !Math.sinh(-2e-17) != -2e-17;
}), 'Math', {
  sinh: function sinh(x){
    return Math.abs(x = +x) < 1
      ? (expm1(x) - expm1(-x)) / 2
      : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);
  }
});
},{"./_export":53,"./_fails":55,"./_math-expm1":80}],186:[function(require,module,exports){
// 20.2.2.33 Math.tanh(x)
var $export = require('./_export')
  , expm1   = require('./_math-expm1')
  , exp     = Math.exp;

$export($export.S, 'Math', {
  tanh: function tanh(x){
    var a = expm1(x = +x)
      , b = expm1(-x);
    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
  }
});
},{"./_export":53,"./_math-expm1":80}],187:[function(require,module,exports){
// 20.2.2.34 Math.trunc(x)
var $export = require('./_export');

$export($export.S, 'Math', {
  trunc: function trunc(it){
    return (it > 0 ? Math.floor : Math.ceil)(it);
  }
});
},{"./_export":53}],188:[function(require,module,exports){
'use strict';
var global            = require('./_global')
  , has               = require('./_has')
  , cof               = require('./_cof')
  , inheritIfRequired = require('./_inherit-if-required')
  , toPrimitive       = require('./_to-primitive')
  , fails             = require('./_fails')
  , gOPN              = require('./_object-gopn').f
  , gOPD              = require('./_object-gopd').f
  , dP                = require('./_object-dp').f
  , $trim             = require('./_string-trim').trim
  , NUMBER            = 'Number'
  , $Number           = global[NUMBER]
  , Base              = $Number
  , proto             = $Number.prototype
  // Opera ~12 has broken Object#toString
  , BROKEN_COF        = cof(require('./_object-create')(proto)) == NUMBER
  , TRIM              = 'trim' in String.prototype;

// 7.1.3 ToNumber(argument)
var toNumber = function(argument){
  var it = toPrimitive(argument, false);
  if(typeof it == 'string' && it.length > 2){
    it = TRIM ? it.trim() : $trim(it, 3);
    var first = it.charCodeAt(0)
      , third, radix, maxCode;
    if(first === 43 || first === 45){
      third = it.charCodeAt(2);
      if(third === 88 || third === 120)return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if(first === 48){
      switch(it.charCodeAt(1)){
        case 66 : case 98  : radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
        case 79 : case 111 : radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
        default : return +it;
      }
      for(var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++){
        code = digits.charCodeAt(i);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if(code < 48 || code > maxCode)return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

if(!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')){
  $Number = function Number(value){
    var it = arguments.length < 1 ? 0 : value
      , that = this;
    return that instanceof $Number
      // check on 1..constructor(foo) case
      && (BROKEN_COF ? fails(function(){ proto.valueOf.call(that); }) : cof(that) != NUMBER)
        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
  };
  for(var keys = require('./_descriptors') ? gOPN(Base) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES6 (in case, if modules with ES6 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys.length > j; j++){
    if(has(Base, key = keys[j]) && !has($Number, key)){
      dP($Number, key, gOPD(Base, key));
    }
  }
  $Number.prototype = proto;
  proto.constructor = $Number;
  require('./_redefine')(global, NUMBER, $Number);
}
},{"./_cof":39,"./_descriptors":49,"./_fails":55,"./_global":59,"./_has":60,"./_inherit-if-required":64,"./_object-create":87,"./_object-dp":88,"./_object-gopd":91,"./_object-gopn":93,"./_redefine":108,"./_string-trim":123,"./_to-primitive":131}],189:[function(require,module,exports){
// 20.1.2.1 Number.EPSILON
var $export = require('./_export');

$export($export.S, 'Number', {EPSILON: Math.pow(2, -52)});
},{"./_export":53}],190:[function(require,module,exports){
// 20.1.2.2 Number.isFinite(number)
var $export   = require('./_export')
  , _isFinite = require('./_global').isFinite;

$export($export.S, 'Number', {
  isFinite: function isFinite(it){
    return typeof it == 'number' && _isFinite(it);
  }
});
},{"./_export":53,"./_global":59}],191:[function(require,module,exports){
// 20.1.2.3 Number.isInteger(number)
var $export = require('./_export');

$export($export.S, 'Number', {isInteger: require('./_is-integer')});
},{"./_export":53,"./_is-integer":69}],192:[function(require,module,exports){
// 20.1.2.4 Number.isNaN(number)
var $export = require('./_export');

$export($export.S, 'Number', {
  isNaN: function isNaN(number){
    return number != number;
  }
});
},{"./_export":53}],193:[function(require,module,exports){
// 20.1.2.5 Number.isSafeInteger(number)
var $export   = require('./_export')
  , isInteger = require('./_is-integer')
  , abs       = Math.abs;

$export($export.S, 'Number', {
  isSafeInteger: function isSafeInteger(number){
    return isInteger(number) && abs(number) <= 0x1fffffffffffff;
  }
});
},{"./_export":53,"./_is-integer":69}],194:[function(require,module,exports){
// 20.1.2.6 Number.MAX_SAFE_INTEGER
var $export = require('./_export');

$export($export.S, 'Number', {MAX_SAFE_INTEGER: 0x1fffffffffffff});
},{"./_export":53}],195:[function(require,module,exports){
// 20.1.2.10 Number.MIN_SAFE_INTEGER
var $export = require('./_export');

$export($export.S, 'Number', {MIN_SAFE_INTEGER: -0x1fffffffffffff});
},{"./_export":53}],196:[function(require,module,exports){
var $export     = require('./_export')
  , $parseFloat = require('./_parse-float');
// 20.1.2.12 Number.parseFloat(string)
$export($export.S + $export.F * (Number.parseFloat != $parseFloat), 'Number', {parseFloat: $parseFloat});
},{"./_export":53,"./_parse-float":102}],197:[function(require,module,exports){
var $export   = require('./_export')
  , $parseInt = require('./_parse-int');
// 20.1.2.13 Number.parseInt(string, radix)
$export($export.S + $export.F * (Number.parseInt != $parseInt), 'Number', {parseInt: $parseInt});
},{"./_export":53,"./_parse-int":103}],198:[function(require,module,exports){
'use strict';
var $export      = require('./_export')
  , toInteger    = require('./_to-integer')
  , aNumberValue = require('./_a-number-value')
  , repeat       = require('./_string-repeat')
  , $toFixed     = 1..toFixed
  , floor        = Math.floor
  , data         = [0, 0, 0, 0, 0, 0]
  , ERROR        = 'Number.toFixed: incorrect invocation!'
  , ZERO         = '0';

var multiply = function(n, c){
  var i  = -1
    , c2 = c;
  while(++i < 6){
    c2 += n * data[i];
    data[i] = c2 % 1e7;
    c2 = floor(c2 / 1e7);
  }
};
var divide = function(n){
  var i = 6
    , c = 0;
  while(--i >= 0){
    c += data[i];
    data[i] = floor(c / n);
    c = (c % n) * 1e7;
  }
};
var numToString = function(){
  var i = 6
    , s = '';
  while(--i >= 0){
    if(s !== '' || i === 0 || data[i] !== 0){
      var t = String(data[i]);
      s = s === '' ? t : s + repeat.call(ZERO, 7 - t.length) + t;
    }
  } return s;
};
var pow = function(x, n, acc){
  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
};
var log = function(x){
  var n  = 0
    , x2 = x;
  while(x2 >= 4096){
    n += 12;
    x2 /= 4096;
  }
  while(x2 >= 2){
    n  += 1;
    x2 /= 2;
  } return n;
};

$export($export.P + $export.F * (!!$toFixed && (
  0.00008.toFixed(3) !== '0.000' ||
  0.9.toFixed(0) !== '1' ||
  1.255.toFixed(2) !== '1.25' ||
  1000000000000000128..toFixed(0) !== '1000000000000000128'
) || !require('./_fails')(function(){
  // V8 ~ Android 4.3-
  $toFixed.call({});
})), 'Number', {
  toFixed: function toFixed(fractionDigits){
    var x = aNumberValue(this, ERROR)
      , f = toInteger(fractionDigits)
      , s = ''
      , m = ZERO
      , e, z, j, k;
    if(f < 0 || f > 20)throw RangeError(ERROR);
    if(x != x)return 'NaN';
    if(x <= -1e21 || x >= 1e21)return String(x);
    if(x < 0){
      s = '-';
      x = -x;
    }
    if(x > 1e-21){
      e = log(x * pow(2, 69, 1)) - 69;
      z = e < 0 ? x * pow(2, -e, 1) : x / pow(2, e, 1);
      z *= 0x10000000000000;
      e = 52 - e;
      if(e > 0){
        multiply(0, z);
        j = f;
        while(j >= 7){
          multiply(1e7, 0);
          j -= 7;
        }
        multiply(pow(10, j, 1), 0);
        j = e - 1;
        while(j >= 23){
          divide(1 << 23);
          j -= 23;
        }
        divide(1 << j);
        multiply(1, 1);
        divide(2);
        m = numToString();
      } else {
        multiply(0, z);
        multiply(1 << -e, 0);
        m = numToString() + repeat.call(ZERO, f);
      }
    }
    if(f > 0){
      k = m.length;
      m = s + (k <= f ? '0.' + repeat.call(ZERO, f - k) + m : m.slice(0, k - f) + '.' + m.slice(k - f));
    } else {
      m = s + m;
    } return m;
  }
});
},{"./_a-number-value":25,"./_export":53,"./_fails":55,"./_string-repeat":122,"./_to-integer":127}],199:[function(require,module,exports){
'use strict';
var $export      = require('./_export')
  , $fails       = require('./_fails')
  , aNumberValue = require('./_a-number-value')
  , $toPrecision = 1..toPrecision;

$export($export.P + $export.F * ($fails(function(){
  // IE7-
  return $toPrecision.call(1, undefined) !== '1';
}) || !$fails(function(){
  // V8 ~ Android 4.3-
  $toPrecision.call({});
})), 'Number', {
  toPrecision: function toPrecision(precision){
    var that = aNumberValue(this, 'Number#toPrecision: incorrect invocation!');
    return precision === undefined ? $toPrecision.call(that) : $toPrecision.call(that, precision); 
  }
});
},{"./_a-number-value":25,"./_export":53,"./_fails":55}],200:[function(require,module,exports){
// 19.1.3.1 Object.assign(target, source)
var $export = require('./_export');

$export($export.S + $export.F, 'Object', {assign: require('./_object-assign')});
},{"./_export":53,"./_object-assign":86}],201:[function(require,module,exports){
var $export = require('./_export')
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', {create: require('./_object-create')});
},{"./_export":53,"./_object-create":87}],202:[function(require,module,exports){
var $export = require('./_export');
// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
$export($export.S + $export.F * !require('./_descriptors'), 'Object', {defineProperties: require('./_object-dps')});
},{"./_descriptors":49,"./_export":53,"./_object-dps":89}],203:[function(require,module,exports){
var $export = require('./_export');
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !require('./_descriptors'), 'Object', {defineProperty: require('./_object-dp').f});
},{"./_descriptors":49,"./_export":53,"./_object-dp":88}],204:[function(require,module,exports){
// 19.1.2.5 Object.freeze(O)
var isObject = require('./_is-object')
  , meta     = require('./_meta').onFreeze;

require('./_object-sap')('freeze', function($freeze){
  return function freeze(it){
    return $freeze && isObject(it) ? $freeze(meta(it)) : it;
  };
});
},{"./_is-object":70,"./_meta":83,"./_object-sap":99}],205:[function(require,module,exports){
// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject                 = require('./_to-iobject')
  , $getOwnPropertyDescriptor = require('./_object-gopd').f;

require('./_object-sap')('getOwnPropertyDescriptor', function(){
  return function getOwnPropertyDescriptor(it, key){
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});
},{"./_object-gopd":91,"./_object-sap":99,"./_to-iobject":128}],206:[function(require,module,exports){
// 19.1.2.7 Object.getOwnPropertyNames(O)
require('./_object-sap')('getOwnPropertyNames', function(){
  return require('./_object-gopn-ext').f;
});
},{"./_object-gopn-ext":92,"./_object-sap":99}],207:[function(require,module,exports){
// 19.1.2.9 Object.getPrototypeOf(O)
var toObject        = require('./_to-object')
  , $getPrototypeOf = require('./_object-gpo');

require('./_object-sap')('getPrototypeOf', function(){
  return function getPrototypeOf(it){
    return $getPrototypeOf(toObject(it));
  };
});
},{"./_object-gpo":95,"./_object-sap":99,"./_to-object":130}],208:[function(require,module,exports){
// 19.1.2.11 Object.isExtensible(O)
var isObject = require('./_is-object');

require('./_object-sap')('isExtensible', function($isExtensible){
  return function isExtensible(it){
    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
  };
});
},{"./_is-object":70,"./_object-sap":99}],209:[function(require,module,exports){
// 19.1.2.12 Object.isFrozen(O)
var isObject = require('./_is-object');

require('./_object-sap')('isFrozen', function($isFrozen){
  return function isFrozen(it){
    return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
  };
});
},{"./_is-object":70,"./_object-sap":99}],210:[function(require,module,exports){
// 19.1.2.13 Object.isSealed(O)
var isObject = require('./_is-object');

require('./_object-sap')('isSealed', function($isSealed){
  return function isSealed(it){
    return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
  };
});
},{"./_is-object":70,"./_object-sap":99}],211:[function(require,module,exports){
// 19.1.3.10 Object.is(value1, value2)
var $export = require('./_export');
$export($export.S, 'Object', {is: require('./_same-value')});
},{"./_export":53,"./_same-value":110}],212:[function(require,module,exports){
// 19.1.2.14 Object.keys(O)
var toObject = require('./_to-object')
  , $keys    = require('./_object-keys');

require('./_object-sap')('keys', function(){
  return function keys(it){
    return $keys(toObject(it));
  };
});
},{"./_object-keys":97,"./_object-sap":99,"./_to-object":130}],213:[function(require,module,exports){
// 19.1.2.15 Object.preventExtensions(O)
var isObject = require('./_is-object')
  , meta     = require('./_meta').onFreeze;

require('./_object-sap')('preventExtensions', function($preventExtensions){
  return function preventExtensions(it){
    return $preventExtensions && isObject(it) ? $preventExtensions(meta(it)) : it;
  };
});
},{"./_is-object":70,"./_meta":83,"./_object-sap":99}],214:[function(require,module,exports){
// 19.1.2.17 Object.seal(O)
var isObject = require('./_is-object')
  , meta     = require('./_meta').onFreeze;

require('./_object-sap')('seal', function($seal){
  return function seal(it){
    return $seal && isObject(it) ? $seal(meta(it)) : it;
  };
});
},{"./_is-object":70,"./_meta":83,"./_object-sap":99}],215:[function(require,module,exports){
// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = require('./_export');
$export($export.S, 'Object', {setPrototypeOf: require('./_set-proto').set});
},{"./_export":53,"./_set-proto":111}],216:[function(require,module,exports){
'use strict';
// 19.1.3.6 Object.prototype.toString()
var classof = require('./_classof')
  , test    = {};
test[require('./_wks')('toStringTag')] = 'z';
if(test + '' != '[object z]'){
  require('./_redefine')(Object.prototype, 'toString', function toString(){
    return '[object ' + classof(this) + ']';
  }, true);
}
},{"./_classof":38,"./_redefine":108,"./_wks":138}],217:[function(require,module,exports){
var $export     = require('./_export')
  , $parseFloat = require('./_parse-float');
// 18.2.4 parseFloat(string)
$export($export.G + $export.F * (parseFloat != $parseFloat), {parseFloat: $parseFloat});
},{"./_export":53,"./_parse-float":102}],218:[function(require,module,exports){
var $export   = require('./_export')
  , $parseInt = require('./_parse-int');
// 18.2.5 parseInt(string, radix)
$export($export.G + $export.F * (parseInt != $parseInt), {parseInt: $parseInt});
},{"./_export":53,"./_parse-int":103}],219:[function(require,module,exports){
'use strict';
var LIBRARY            = require('./_library')
  , global             = require('./_global')
  , ctx                = require('./_ctx')
  , classof            = require('./_classof')
  , $export            = require('./_export')
  , isObject           = require('./_is-object')
  , aFunction          = require('./_a-function')
  , anInstance         = require('./_an-instance')
  , forOf              = require('./_for-of')
  , speciesConstructor = require('./_species-constructor')
  , task               = require('./_task').set
  , microtask          = require('./_microtask')()
  , PROMISE            = 'Promise'
  , TypeError          = global.TypeError
  , process            = global.process
  , $Promise           = global[PROMISE]
  , process            = global.process
  , isNode             = classof(process) == 'process'
  , empty              = function(){ /* empty */ }
  , Internal, GenericPromiseCapability, Wrapper;

var USE_NATIVE = !!function(){
  try {
    // correct subclassing with @@species support
    var promise     = $Promise.resolve(1)
      , FakePromise = (promise.constructor = {})[require('./_wks')('species')] = function(exec){ exec(empty, empty); };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
  } catch(e){ /* empty */ }
}();

// helpers
var sameConstructor = function(a, b){
  // with library wrapper special case
  return a === b || a === $Promise && b === Wrapper;
};
var isThenable = function(it){
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var newPromiseCapability = function(C){
  return sameConstructor($Promise, C)
    ? new PromiseCapability(C)
    : new GenericPromiseCapability(C);
};
var PromiseCapability = GenericPromiseCapability = function(C){
  var resolve, reject;
  this.promise = new C(function($$resolve, $$reject){
    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject  = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject  = aFunction(reject);
};
var perform = function(exec){
  try {
    exec();
  } catch(e){
    return {error: e};
  }
};
var notify = function(promise, isReject){
  if(promise._n)return;
  promise._n = true;
  var chain = promise._c;
  microtask(function(){
    var value = promise._v
      , ok    = promise._s == 1
      , i     = 0;
    var run = function(reaction){
      var handler = ok ? reaction.ok : reaction.fail
        , resolve = reaction.resolve
        , reject  = reaction.reject
        , domain  = reaction.domain
        , result, then;
      try {
        if(handler){
          if(!ok){
            if(promise._h == 2)onHandleUnhandled(promise);
            promise._h = 1;
          }
          if(handler === true)result = value;
          else {
            if(domain)domain.enter();
            result = handler(value);
            if(domain)domain.exit();
          }
          if(result === reaction.promise){
            reject(TypeError('Promise-chain cycle'));
          } else if(then = isThenable(result)){
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch(e){
        reject(e);
      }
    };
    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if(isReject && !promise._h)onUnhandled(promise);
  });
};
var onUnhandled = function(promise){
  task.call(global, function(){
    var value = promise._v
      , abrupt, handler, console;
    if(isUnhandled(promise)){
      abrupt = perform(function(){
        if(isNode){
          process.emit('unhandledRejection', value, promise);
        } else if(handler = global.onunhandledrejection){
          handler({promise: promise, reason: value});
        } else if((console = global.console) && console.error){
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if(abrupt)throw abrupt.error;
  });
};
var isUnhandled = function(promise){
  if(promise._h == 1)return false;
  var chain = promise._a || promise._c
    , i     = 0
    , reaction;
  while(chain.length > i){
    reaction = chain[i++];
    if(reaction.fail || !isUnhandled(reaction.promise))return false;
  } return true;
};
var onHandleUnhandled = function(promise){
  task.call(global, function(){
    var handler;
    if(isNode){
      process.emit('rejectionHandled', promise);
    } else if(handler = global.onrejectionhandled){
      handler({promise: promise, reason: promise._v});
    }
  });
};
var $reject = function(value){
  var promise = this;
  if(promise._d)return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if(!promise._a)promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function(value){
  var promise = this
    , then;
  if(promise._d)return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if(promise === value)throw TypeError("Promise can't be resolved itself");
    if(then = isThenable(value)){
      microtask(function(){
        var wrapper = {_w: promise, _d: false}; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch(e){
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch(e){
    $reject.call({_w: promise, _d: false}, e); // wrap
  }
};

// constructor polyfill
if(!USE_NATIVE){
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor){
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch(err){
      $reject.call(this, err);
    }
  };
  Internal = function Promise(executor){
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = require('./_redefine-all')($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected){
      var reaction    = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok     = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail   = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if(this._a)this._a.push(reaction);
      if(this._s)notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function(onRejected){
      return this.then(undefined, onRejected);
    }
  });
  PromiseCapability = function(){
    var promise  = new Internal;
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject  = ctx($reject, promise, 1);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: $Promise});
require('./_set-to-string-tag')($Promise, PROMISE);
require('./_set-species')(PROMISE);
Wrapper = require('./_core')[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r){
    var capability = newPromiseCapability(this)
      , $$reject   = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x){
    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
    if(x instanceof $Promise && sameConstructor(x.constructor, this))return x;
    var capability = newPromiseCapability(this)
      , $$resolve  = capability.resolve;
    $$resolve(x);
    return capability.promise;
  }
});
$export($export.S + $export.F * !(USE_NATIVE && require('./_iter-detect')(function(iter){
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable){
    var C          = this
      , capability = newPromiseCapability(C)
      , resolve    = capability.resolve
      , reject     = capability.reject;
    var abrupt = perform(function(){
      var values    = []
        , index     = 0
        , remaining = 1;
      forOf(iterable, false, function(promise){
        var $index        = index++
          , alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function(value){
          if(alreadyCalled)return;
          alreadyCalled  = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if(abrupt)reject(abrupt.error);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable){
    var C          = this
      , capability = newPromiseCapability(C)
      , reject     = capability.reject;
    var abrupt = perform(function(){
      forOf(iterable, false, function(promise){
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if(abrupt)reject(abrupt.error);
    return capability.promise;
  }
});
},{"./_a-function":24,"./_an-instance":27,"./_classof":38,"./_core":44,"./_ctx":46,"./_export":53,"./_for-of":58,"./_global":59,"./_is-object":70,"./_iter-detect":75,"./_library":79,"./_microtask":85,"./_redefine-all":107,"./_set-species":112,"./_set-to-string-tag":113,"./_species-constructor":116,"./_task":125,"./_wks":138}],220:[function(require,module,exports){
// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
var $export   = require('./_export')
  , aFunction = require('./_a-function')
  , anObject  = require('./_an-object')
  , rApply    = (require('./_global').Reflect || {}).apply
  , fApply    = Function.apply;
// MS Edge argumentsList argument is optional
$export($export.S + $export.F * !require('./_fails')(function(){
  rApply(function(){});
}), 'Reflect', {
  apply: function apply(target, thisArgument, argumentsList){
    var T = aFunction(target)
      , L = anObject(argumentsList);
    return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);
  }
});
},{"./_a-function":24,"./_an-object":28,"./_export":53,"./_fails":55,"./_global":59}],221:[function(require,module,exports){
// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
var $export    = require('./_export')
  , create     = require('./_object-create')
  , aFunction  = require('./_a-function')
  , anObject   = require('./_an-object')
  , isObject   = require('./_is-object')
  , fails      = require('./_fails')
  , bind       = require('./_bind')
  , rConstruct = (require('./_global').Reflect || {}).construct;

// MS Edge supports only 2 arguments and argumentsList argument is optional
// FF Nightly sets third argument as `new.target`, but does not create `this` from it
var NEW_TARGET_BUG = fails(function(){
  function F(){}
  return !(rConstruct(function(){}, [], F) instanceof F);
});
var ARGS_BUG = !fails(function(){
  rConstruct(function(){});
});

$export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
  construct: function construct(Target, args /*, newTarget*/){
    aFunction(Target);
    anObject(args);
    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
    if(ARGS_BUG && !NEW_TARGET_BUG)return rConstruct(Target, args, newTarget);
    if(Target == newTarget){
      // w/o altered newTarget, optimization for 0-4 arguments
      switch(args.length){
        case 0: return new Target;
        case 1: return new Target(args[0]);
        case 2: return new Target(args[0], args[1]);
        case 3: return new Target(args[0], args[1], args[2]);
        case 4: return new Target(args[0], args[1], args[2], args[3]);
      }
      // w/o altered newTarget, lot of arguments case
      var $args = [null];
      $args.push.apply($args, args);
      return new (bind.apply(Target, $args));
    }
    // with altered newTarget, not support built-in constructors
    var proto    = newTarget.prototype
      , instance = create(isObject(proto) ? proto : Object.prototype)
      , result   = Function.apply.call(Target, instance, args);
    return isObject(result) ? result : instance;
  }
});
},{"./_a-function":24,"./_an-object":28,"./_bind":37,"./_export":53,"./_fails":55,"./_global":59,"./_is-object":70,"./_object-create":87}],222:[function(require,module,exports){
// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
var dP          = require('./_object-dp')
  , $export     = require('./_export')
  , anObject    = require('./_an-object')
  , toPrimitive = require('./_to-primitive');

// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
$export($export.S + $export.F * require('./_fails')(function(){
  Reflect.defineProperty(dP.f({}, 1, {value: 1}), 1, {value: 2});
}), 'Reflect', {
  defineProperty: function defineProperty(target, propertyKey, attributes){
    anObject(target);
    propertyKey = toPrimitive(propertyKey, true);
    anObject(attributes);
    try {
      dP.f(target, propertyKey, attributes);
      return true;
    } catch(e){
      return false;
    }
  }
});
},{"./_an-object":28,"./_export":53,"./_fails":55,"./_object-dp":88,"./_to-primitive":131}],223:[function(require,module,exports){
// 26.1.4 Reflect.deleteProperty(target, propertyKey)
var $export  = require('./_export')
  , gOPD     = require('./_object-gopd').f
  , anObject = require('./_an-object');

$export($export.S, 'Reflect', {
  deleteProperty: function deleteProperty(target, propertyKey){
    var desc = gOPD(anObject(target), propertyKey);
    return desc && !desc.configurable ? false : delete target[propertyKey];
  }
});
},{"./_an-object":28,"./_export":53,"./_object-gopd":91}],224:[function(require,module,exports){
'use strict';
// 26.1.5 Reflect.enumerate(target)
var $export  = require('./_export')
  , anObject = require('./_an-object');
var Enumerate = function(iterated){
  this._t = anObject(iterated); // target
  this._i = 0;                  // next index
  var keys = this._k = []       // keys
    , key;
  for(key in iterated)keys.push(key);
};
require('./_iter-create')(Enumerate, 'Object', function(){
  var that = this
    , keys = that._k
    , key;
  do {
    if(that._i >= keys.length)return {value: undefined, done: true};
  } while(!((key = keys[that._i++]) in that._t));
  return {value: key, done: false};
});

$export($export.S, 'Reflect', {
  enumerate: function enumerate(target){
    return new Enumerate(target);
  }
});
},{"./_an-object":28,"./_export":53,"./_iter-create":73}],225:[function(require,module,exports){
// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
var gOPD     = require('./_object-gopd')
  , $export  = require('./_export')
  , anObject = require('./_an-object');

$export($export.S, 'Reflect', {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey){
    return gOPD.f(anObject(target), propertyKey);
  }
});
},{"./_an-object":28,"./_export":53,"./_object-gopd":91}],226:[function(require,module,exports){
// 26.1.8 Reflect.getPrototypeOf(target)
var $export  = require('./_export')
  , getProto = require('./_object-gpo')
  , anObject = require('./_an-object');

$export($export.S, 'Reflect', {
  getPrototypeOf: function getPrototypeOf(target){
    return getProto(anObject(target));
  }
});
},{"./_an-object":28,"./_export":53,"./_object-gpo":95}],227:[function(require,module,exports){
// 26.1.6 Reflect.get(target, propertyKey [, receiver])
var gOPD           = require('./_object-gopd')
  , getPrototypeOf = require('./_object-gpo')
  , has            = require('./_has')
  , $export        = require('./_export')
  , isObject       = require('./_is-object')
  , anObject       = require('./_an-object');

function get(target, propertyKey/*, receiver*/){
  var receiver = arguments.length < 3 ? target : arguments[2]
    , desc, proto;
  if(anObject(target) === receiver)return target[propertyKey];
  if(desc = gOPD.f(target, propertyKey))return has(desc, 'value')
    ? desc.value
    : desc.get !== undefined
      ? desc.get.call(receiver)
      : undefined;
  if(isObject(proto = getPrototypeOf(target)))return get(proto, propertyKey, receiver);
}

$export($export.S, 'Reflect', {get: get});
},{"./_an-object":28,"./_export":53,"./_has":60,"./_is-object":70,"./_object-gopd":91,"./_object-gpo":95}],228:[function(require,module,exports){
// 26.1.9 Reflect.has(target, propertyKey)
var $export = require('./_export');

$export($export.S, 'Reflect', {
  has: function has(target, propertyKey){
    return propertyKey in target;
  }
});
},{"./_export":53}],229:[function(require,module,exports){
// 26.1.10 Reflect.isExtensible(target)
var $export       = require('./_export')
  , anObject      = require('./_an-object')
  , $isExtensible = Object.isExtensible;

$export($export.S, 'Reflect', {
  isExtensible: function isExtensible(target){
    anObject(target);
    return $isExtensible ? $isExtensible(target) : true;
  }
});
},{"./_an-object":28,"./_export":53}],230:[function(require,module,exports){
// 26.1.11 Reflect.ownKeys(target)
var $export = require('./_export');

$export($export.S, 'Reflect', {ownKeys: require('./_own-keys')});
},{"./_export":53,"./_own-keys":101}],231:[function(require,module,exports){
// 26.1.12 Reflect.preventExtensions(target)
var $export            = require('./_export')
  , anObject           = require('./_an-object')
  , $preventExtensions = Object.preventExtensions;

$export($export.S, 'Reflect', {
  preventExtensions: function preventExtensions(target){
    anObject(target);
    try {
      if($preventExtensions)$preventExtensions(target);
      return true;
    } catch(e){
      return false;
    }
  }
});
},{"./_an-object":28,"./_export":53}],232:[function(require,module,exports){
// 26.1.14 Reflect.setPrototypeOf(target, proto)
var $export  = require('./_export')
  , setProto = require('./_set-proto');

if(setProto)$export($export.S, 'Reflect', {
  setPrototypeOf: function setPrototypeOf(target, proto){
    setProto.check(target, proto);
    try {
      setProto.set(target, proto);
      return true;
    } catch(e){
      return false;
    }
  }
});
},{"./_export":53,"./_set-proto":111}],233:[function(require,module,exports){
// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
var dP             = require('./_object-dp')
  , gOPD           = require('./_object-gopd')
  , getPrototypeOf = require('./_object-gpo')
  , has            = require('./_has')
  , $export        = require('./_export')
  , createDesc     = require('./_property-desc')
  , anObject       = require('./_an-object')
  , isObject       = require('./_is-object');

function set(target, propertyKey, V/*, receiver*/){
  var receiver = arguments.length < 4 ? target : arguments[3]
    , ownDesc  = gOPD.f(anObject(target), propertyKey)
    , existingDescriptor, proto;
  if(!ownDesc){
    if(isObject(proto = getPrototypeOf(target))){
      return set(proto, propertyKey, V, receiver);
    }
    ownDesc = createDesc(0);
  }
  if(has(ownDesc, 'value')){
    if(ownDesc.writable === false || !isObject(receiver))return false;
    existingDescriptor = gOPD.f(receiver, propertyKey) || createDesc(0);
    existingDescriptor.value = V;
    dP.f(receiver, propertyKey, existingDescriptor);
    return true;
  }
  return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
}

$export($export.S, 'Reflect', {set: set});
},{"./_an-object":28,"./_export":53,"./_has":60,"./_is-object":70,"./_object-dp":88,"./_object-gopd":91,"./_object-gpo":95,"./_property-desc":106}],234:[function(require,module,exports){
var global            = require('./_global')
  , inheritIfRequired = require('./_inherit-if-required')
  , dP                = require('./_object-dp').f
  , gOPN              = require('./_object-gopn').f
  , isRegExp          = require('./_is-regexp')
  , $flags            = require('./_flags')
  , $RegExp           = global.RegExp
  , Base              = $RegExp
  , proto             = $RegExp.prototype
  , re1               = /a/g
  , re2               = /a/g
  // "new" creates a new object, old webkit buggy here
  , CORRECT_NEW       = new $RegExp(re1) !== re1;

if(require('./_descriptors') && (!CORRECT_NEW || require('./_fails')(function(){
  re2[require('./_wks')('match')] = false;
  // RegExp constructor can alter flags and IsRegExp works correct with @@match
  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
}))){
  $RegExp = function RegExp(p, f){
    var tiRE = this instanceof $RegExp
      , piRE = isRegExp(p)
      , fiU  = f === undefined;
    return !tiRE && piRE && p.constructor === $RegExp && fiU ? p
      : inheritIfRequired(CORRECT_NEW
        ? new Base(piRE && !fiU ? p.source : p, f)
        : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f)
      , tiRE ? this : proto, $RegExp);
  };
  var proxy = function(key){
    key in $RegExp || dP($RegExp, key, {
      configurable: true,
      get: function(){ return Base[key]; },
      set: function(it){ Base[key] = it; }
    });
  };
  for(var keys = gOPN(Base), i = 0; keys.length > i; )proxy(keys[i++]);
  proto.constructor = $RegExp;
  $RegExp.prototype = proto;
  require('./_redefine')(global, 'RegExp', $RegExp);
}

require('./_set-species')('RegExp');
},{"./_descriptors":49,"./_fails":55,"./_flags":57,"./_global":59,"./_inherit-if-required":64,"./_is-regexp":71,"./_object-dp":88,"./_object-gopn":93,"./_redefine":108,"./_set-species":112,"./_wks":138}],235:[function(require,module,exports){
// 21.2.5.3 get RegExp.prototype.flags()
if(require('./_descriptors') && /./g.flags != 'g')require('./_object-dp').f(RegExp.prototype, 'flags', {
  configurable: true,
  get: require('./_flags')
});
},{"./_descriptors":49,"./_flags":57,"./_object-dp":88}],236:[function(require,module,exports){
// @@match logic
require('./_fix-re-wks')('match', 1, function(defined, MATCH, $match){
  // 21.1.3.11 String.prototype.match(regexp)
  return [function match(regexp){
    'use strict';
    var O  = defined(this)
      , fn = regexp == undefined ? undefined : regexp[MATCH];
    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
  }, $match];
});
},{"./_fix-re-wks":56}],237:[function(require,module,exports){
// @@replace logic
require('./_fix-re-wks')('replace', 2, function(defined, REPLACE, $replace){
  // 21.1.3.14 String.prototype.replace(searchValue, replaceValue)
  return [function replace(searchValue, replaceValue){
    'use strict';
    var O  = defined(this)
      , fn = searchValue == undefined ? undefined : searchValue[REPLACE];
    return fn !== undefined
      ? fn.call(searchValue, O, replaceValue)
      : $replace.call(String(O), searchValue, replaceValue);
  }, $replace];
});
},{"./_fix-re-wks":56}],238:[function(require,module,exports){
// @@search logic
require('./_fix-re-wks')('search', 1, function(defined, SEARCH, $search){
  // 21.1.3.15 String.prototype.search(regexp)
  return [function search(regexp){
    'use strict';
    var O  = defined(this)
      , fn = regexp == undefined ? undefined : regexp[SEARCH];
    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
  }, $search];
});
},{"./_fix-re-wks":56}],239:[function(require,module,exports){
// @@split logic
require('./_fix-re-wks')('split', 2, function(defined, SPLIT, $split){
  'use strict';
  var isRegExp   = require('./_is-regexp')
    , _split     = $split
    , $push      = [].push
    , $SPLIT     = 'split'
    , LENGTH     = 'length'
    , LAST_INDEX = 'lastIndex';
  if(
    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
    ''[$SPLIT](/.?/)[LENGTH]
  ){
    var NPCG = /()??/.exec('')[1] === undefined; // nonparticipating capturing group
    // based on es5-shim implementation, need to rework it
    $split = function(separator, limit){
      var string = String(this);
      if(separator === undefined && limit === 0)return [];
      // If `separator` is not a regex, use native split
      if(!isRegExp(separator))return _split.call(string, separator, limit);
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      var splitLimit = limit === undefined ? 4294967295 : limit >>> 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var separator2, match, lastIndex, lastLength, i;
      // Doesn't need flags gy, but they don't hurt
      if(!NPCG)separator2 = new RegExp('^' + separatorCopy.source + '$(?!\\s)', flags);
      while(match = separatorCopy.exec(string)){
        // `separatorCopy.lastIndex` is not reliable cross-browser
        lastIndex = match.index + match[0][LENGTH];
        if(lastIndex > lastLastIndex){
          output.push(string.slice(lastLastIndex, match.index));
          // Fix browsers whose `exec` methods don't consistently return `undefined` for NPCG
          if(!NPCG && match[LENGTH] > 1)match[0].replace(separator2, function(){
            for(i = 1; i < arguments[LENGTH] - 2; i++)if(arguments[i] === undefined)match[i] = undefined;
          });
          if(match[LENGTH] > 1 && match.index < string[LENGTH])$push.apply(output, match.slice(1));
          lastLength = match[0][LENGTH];
          lastLastIndex = lastIndex;
          if(output[LENGTH] >= splitLimit)break;
        }
        if(separatorCopy[LAST_INDEX] === match.index)separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
      }
      if(lastLastIndex === string[LENGTH]){
        if(lastLength || !separatorCopy.test(''))output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
    };
  // Chakra, V8
  } else if('0'[$SPLIT](undefined, 0)[LENGTH]){
    $split = function(separator, limit){
      return separator === undefined && limit === 0 ? [] : _split.call(this, separator, limit);
    };
  }
  // 21.1.3.17 String.prototype.split(separator, limit)
  return [function split(separator, limit){
    var O  = defined(this)
      , fn = separator == undefined ? undefined : separator[SPLIT];
    return fn !== undefined ? fn.call(separator, O, limit) : $split.call(String(O), separator, limit);
  }, $split];
});
},{"./_fix-re-wks":56,"./_is-regexp":71}],240:[function(require,module,exports){
'use strict';
require('./es6.regexp.flags');
var anObject    = require('./_an-object')
  , $flags      = require('./_flags')
  , DESCRIPTORS = require('./_descriptors')
  , TO_STRING   = 'toString'
  , $toString   = /./[TO_STRING];

var define = function(fn){
  require('./_redefine')(RegExp.prototype, TO_STRING, fn, true);
};

// 21.2.5.14 RegExp.prototype.toString()
if(require('./_fails')(function(){ return $toString.call({source: 'a', flags: 'b'}) != '/a/b'; })){
  define(function toString(){
    var R = anObject(this);
    return '/'.concat(R.source, '/',
      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
  });
// FF44- RegExp#toString has a wrong name
} else if($toString.name != TO_STRING){
  define(function toString(){
    return $toString.call(this);
  });
}
},{"./_an-object":28,"./_descriptors":49,"./_fails":55,"./_flags":57,"./_redefine":108,"./es6.regexp.flags":235}],241:[function(require,module,exports){
'use strict';
var strong = require('./_collection-strong');

// 23.2 Set Objects
module.exports = require('./_collection')('Set', function(get){
  return function Set(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value){
    return strong.def(this, value = value === 0 ? 0 : value, value);
  }
}, strong);
},{"./_collection":43,"./_collection-strong":40}],242:[function(require,module,exports){
'use strict';
// B.2.3.2 String.prototype.anchor(name)
require('./_string-html')('anchor', function(createHTML){
  return function anchor(name){
    return createHTML(this, 'a', 'name', name);
  }
});
},{"./_string-html":120}],243:[function(require,module,exports){
'use strict';
// B.2.3.3 String.prototype.big()
require('./_string-html')('big', function(createHTML){
  return function big(){
    return createHTML(this, 'big', '', '');
  }
});
},{"./_string-html":120}],244:[function(require,module,exports){
'use strict';
// B.2.3.4 String.prototype.blink()
require('./_string-html')('blink', function(createHTML){
  return function blink(){
    return createHTML(this, 'blink', '', '');
  }
});
},{"./_string-html":120}],245:[function(require,module,exports){
'use strict';
// B.2.3.5 String.prototype.bold()
require('./_string-html')('bold', function(createHTML){
  return function bold(){
    return createHTML(this, 'b', '', '');
  }
});
},{"./_string-html":120}],246:[function(require,module,exports){
'use strict';
var $export = require('./_export')
  , $at     = require('./_string-at')(false);
$export($export.P, 'String', {
  // 21.1.3.3 String.prototype.codePointAt(pos)
  codePointAt: function codePointAt(pos){
    return $at(this, pos);
  }
});
},{"./_export":53,"./_string-at":118}],247:[function(require,module,exports){
// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])
'use strict';
var $export   = require('./_export')
  , toLength  = require('./_to-length')
  , context   = require('./_string-context')
  , ENDS_WITH = 'endsWith'
  , $endsWith = ''[ENDS_WITH];

$export($export.P + $export.F * require('./_fails-is-regexp')(ENDS_WITH), 'String', {
  endsWith: function endsWith(searchString /*, endPosition = @length */){
    var that = context(this, searchString, ENDS_WITH)
      , endPosition = arguments.length > 1 ? arguments[1] : undefined
      , len    = toLength(that.length)
      , end    = endPosition === undefined ? len : Math.min(toLength(endPosition), len)
      , search = String(searchString);
    return $endsWith
      ? $endsWith.call(that, search, end)
      : that.slice(end - search.length, end) === search;
  }
});
},{"./_export":53,"./_fails-is-regexp":54,"./_string-context":119,"./_to-length":129}],248:[function(require,module,exports){
'use strict';
// B.2.3.6 String.prototype.fixed()
require('./_string-html')('fixed', function(createHTML){
  return function fixed(){
    return createHTML(this, 'tt', '', '');
  }
});
},{"./_string-html":120}],249:[function(require,module,exports){
'use strict';
// B.2.3.7 String.prototype.fontcolor(color)
require('./_string-html')('fontcolor', function(createHTML){
  return function fontcolor(color){
    return createHTML(this, 'font', 'color', color);
  }
});
},{"./_string-html":120}],250:[function(require,module,exports){
'use strict';
// B.2.3.8 String.prototype.fontsize(size)
require('./_string-html')('fontsize', function(createHTML){
  return function fontsize(size){
    return createHTML(this, 'font', 'size', size);
  }
});
},{"./_string-html":120}],251:[function(require,module,exports){
var $export        = require('./_export')
  , toIndex        = require('./_to-index')
  , fromCharCode   = String.fromCharCode
  , $fromCodePoint = String.fromCodePoint;

// length should be 1, old FF problem
$export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
  // 21.1.2.2 String.fromCodePoint(...codePoints)
  fromCodePoint: function fromCodePoint(x){ // eslint-disable-line no-unused-vars
    var res  = []
      , aLen = arguments.length
      , i    = 0
      , code;
    while(aLen > i){
      code = +arguments[i++];
      if(toIndex(code, 0x10ffff) !== code)throw RangeError(code + ' is not a valid code point');
      res.push(code < 0x10000
        ? fromCharCode(code)
        : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)
      );
    } return res.join('');
  }
});
},{"./_export":53,"./_to-index":126}],252:[function(require,module,exports){
// 21.1.3.7 String.prototype.includes(searchString, position = 0)
'use strict';
var $export  = require('./_export')
  , context  = require('./_string-context')
  , INCLUDES = 'includes';

$export($export.P + $export.F * require('./_fails-is-regexp')(INCLUDES), 'String', {
  includes: function includes(searchString /*, position = 0 */){
    return !!~context(this, searchString, INCLUDES)
      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
  }
});
},{"./_export":53,"./_fails-is-regexp":54,"./_string-context":119}],253:[function(require,module,exports){
'use strict';
// B.2.3.9 String.prototype.italics()
require('./_string-html')('italics', function(createHTML){
  return function italics(){
    return createHTML(this, 'i', '', '');
  }
});
},{"./_string-html":120}],254:[function(require,module,exports){
'use strict';
var $at  = require('./_string-at')(true);

// 21.1.3.27 String.prototype[@@iterator]()
require('./_iter-define')(String, 'String', function(iterated){
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , index = this._i
    , point;
  if(index >= O.length)return {value: undefined, done: true};
  point = $at(O, index);
  this._i += point.length;
  return {value: point, done: false};
});
},{"./_iter-define":74,"./_string-at":118}],255:[function(require,module,exports){
'use strict';
// B.2.3.10 String.prototype.link(url)
require('./_string-html')('link', function(createHTML){
  return function link(url){
    return createHTML(this, 'a', 'href', url);
  }
});
},{"./_string-html":120}],256:[function(require,module,exports){
var $export   = require('./_export')
  , toIObject = require('./_to-iobject')
  , toLength  = require('./_to-length');

$export($export.S, 'String', {
  // 21.1.2.4 String.raw(callSite, ...substitutions)
  raw: function raw(callSite){
    var tpl  = toIObject(callSite.raw)
      , len  = toLength(tpl.length)
      , aLen = arguments.length
      , res  = []
      , i    = 0;
    while(len > i){
      res.push(String(tpl[i++]));
      if(i < aLen)res.push(String(arguments[i]));
    } return res.join('');
  }
});
},{"./_export":53,"./_to-iobject":128,"./_to-length":129}],257:[function(require,module,exports){
var $export = require('./_export');

$export($export.P, 'String', {
  // 21.1.3.13 String.prototype.repeat(count)
  repeat: require('./_string-repeat')
});
},{"./_export":53,"./_string-repeat":122}],258:[function(require,module,exports){
'use strict';
// B.2.3.11 String.prototype.small()
require('./_string-html')('small', function(createHTML){
  return function small(){
    return createHTML(this, 'small', '', '');
  }
});
},{"./_string-html":120}],259:[function(require,module,exports){
// 21.1.3.18 String.prototype.startsWith(searchString [, position ])
'use strict';
var $export     = require('./_export')
  , toLength    = require('./_to-length')
  , context     = require('./_string-context')
  , STARTS_WITH = 'startsWith'
  , $startsWith = ''[STARTS_WITH];

$export($export.P + $export.F * require('./_fails-is-regexp')(STARTS_WITH), 'String', {
  startsWith: function startsWith(searchString /*, position = 0 */){
    var that   = context(this, searchString, STARTS_WITH)
      , index  = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length))
      , search = String(searchString);
    return $startsWith
      ? $startsWith.call(that, search, index)
      : that.slice(index, index + search.length) === search;
  }
});
},{"./_export":53,"./_fails-is-regexp":54,"./_string-context":119,"./_to-length":129}],260:[function(require,module,exports){
'use strict';
// B.2.3.12 String.prototype.strike()
require('./_string-html')('strike', function(createHTML){
  return function strike(){
    return createHTML(this, 'strike', '', '');
  }
});
},{"./_string-html":120}],261:[function(require,module,exports){
'use strict';
// B.2.3.13 String.prototype.sub()
require('./_string-html')('sub', function(createHTML){
  return function sub(){
    return createHTML(this, 'sub', '', '');
  }
});
},{"./_string-html":120}],262:[function(require,module,exports){
'use strict';
// B.2.3.14 String.prototype.sup()
require('./_string-html')('sup', function(createHTML){
  return function sup(){
    return createHTML(this, 'sup', '', '');
  }
});
},{"./_string-html":120}],263:[function(require,module,exports){
'use strict';
// 21.1.3.25 String.prototype.trim()
require('./_string-trim')('trim', function($trim){
  return function trim(){
    return $trim(this, 3);
  };
});
},{"./_string-trim":123}],264:[function(require,module,exports){
'use strict';
// ECMAScript 6 symbols shim
var global         = require('./_global')
  , has            = require('./_has')
  , DESCRIPTORS    = require('./_descriptors')
  , $export        = require('./_export')
  , redefine       = require('./_redefine')
  , META           = require('./_meta').KEY
  , $fails         = require('./_fails')
  , shared         = require('./_shared')
  , setToStringTag = require('./_set-to-string-tag')
  , uid            = require('./_uid')
  , wks            = require('./_wks')
  , wksExt         = require('./_wks-ext')
  , wksDefine      = require('./_wks-define')
  , keyOf          = require('./_keyof')
  , enumKeys       = require('./_enum-keys')
  , isArray        = require('./_is-array')
  , anObject       = require('./_an-object')
  , toIObject      = require('./_to-iobject')
  , toPrimitive    = require('./_to-primitive')
  , createDesc     = require('./_property-desc')
  , _create        = require('./_object-create')
  , gOPNExt        = require('./_object-gopn-ext')
  , $GOPD          = require('./_object-gopd')
  , $DP            = require('./_object-dp')
  , $keys          = require('./_object-keys')
  , gOPD           = $GOPD.f
  , dP             = $DP.f
  , gOPN           = gOPNExt.f
  , $Symbol        = global.Symbol
  , $JSON          = global.JSON
  , _stringify     = $JSON && $JSON.stringify
  , PROTOTYPE      = 'prototype'
  , HIDDEN         = wks('_hidden')
  , TO_PRIMITIVE   = wks('toPrimitive')
  , isEnum         = {}.propertyIsEnumerable
  , SymbolRegistry = shared('symbol-registry')
  , AllSymbols     = shared('symbols')
  , OPSymbols      = shared('op-symbols')
  , ObjectProto    = Object[PROTOTYPE]
  , USE_NATIVE     = typeof $Symbol == 'function'
  , QObject        = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function(){
  return _create(dP({}, 'a', {
    get: function(){ return dP(this, 'a', {value: 7}).a; }
  })).a != 7;
}) ? function(it, key, D){
  var protoDesc = gOPD(ObjectProto, key);
  if(protoDesc)delete ObjectProto[key];
  dP(it, key, D);
  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function(tag){
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
  return typeof it == 'symbol';
} : function(it){
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D){
  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if(has(AllSymbols, key)){
    if(!D.enumerable){
      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
      D = _create(D, {enumerable: createDesc(0, false)});
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P){
  anObject(it);
  var keys = enumKeys(P = toIObject(P))
    , i    = 0
    , l = keys.length
    , key;
  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P){
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key){
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
  it  = toIObject(it);
  key = toPrimitive(key, true);
  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
  var D = gOPD(it, key);
  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it){
  var names  = gOPN(toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
  var IS_OP  = it === ObjectProto
    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if(!USE_NATIVE){
  $Symbol = function Symbol(){
    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function(value){
      if(this === ObjectProto)$set.call(OPSymbols, value);
      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f   = $defineProperty;
  require('./_object-gopn').f = gOPNExt.f = $getOwnPropertyNames;
  require('./_object-pie').f  = $propertyIsEnumerable;
  require('./_object-gops').f = $getOwnPropertySymbols;

  if(DESCRIPTORS && !require('./_library')){
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function(name){
    return wrap(wks(name));
  }
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

for(var symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);

for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function(key){
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(key){
    if(isSymbol(key))return keyOf(SymbolRegistry, key);
    throw TypeError(key + ' is not a symbol!');
  },
  useSetter: function(){ setter = true; },
  useSimple: function(){ setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it){
    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
    var args = [it]
      , i    = 1
      , replacer, $replacer;
    while(arguments.length > i)args.push(arguments[i++]);
    replacer = args[1];
    if(typeof replacer == 'function')$replacer = replacer;
    if($replacer || !isArray(replacer))replacer = function(key, value){
      if($replacer)value = $replacer.call(this, key, value);
      if(!isSymbol(value))return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || require('./_hide')($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);
},{"./_an-object":28,"./_descriptors":49,"./_enum-keys":52,"./_export":53,"./_fails":55,"./_global":59,"./_has":60,"./_hide":61,"./_is-array":68,"./_keyof":78,"./_library":79,"./_meta":83,"./_object-create":87,"./_object-dp":88,"./_object-gopd":91,"./_object-gopn":93,"./_object-gopn-ext":92,"./_object-gops":94,"./_object-keys":97,"./_object-pie":98,"./_property-desc":106,"./_redefine":108,"./_set-to-string-tag":113,"./_shared":115,"./_to-iobject":128,"./_to-primitive":131,"./_uid":135,"./_wks":138,"./_wks-define":136,"./_wks-ext":137}],265:[function(require,module,exports){
'use strict';
var $export      = require('./_export')
  , $typed       = require('./_typed')
  , buffer       = require('./_typed-buffer')
  , anObject     = require('./_an-object')
  , toIndex      = require('./_to-index')
  , toLength     = require('./_to-length')
  , isObject     = require('./_is-object')
  , ArrayBuffer  = require('./_global').ArrayBuffer
  , speciesConstructor = require('./_species-constructor')
  , $ArrayBuffer = buffer.ArrayBuffer
  , $DataView    = buffer.DataView
  , $isView      = $typed.ABV && ArrayBuffer.isView
  , $slice       = $ArrayBuffer.prototype.slice
  , VIEW         = $typed.VIEW
  , ARRAY_BUFFER = 'ArrayBuffer';

$export($export.G + $export.W + $export.F * (ArrayBuffer !== $ArrayBuffer), {ArrayBuffer: $ArrayBuffer});

$export($export.S + $export.F * !$typed.CONSTR, ARRAY_BUFFER, {
  // 24.1.3.1 ArrayBuffer.isView(arg)
  isView: function isView(it){
    return $isView && $isView(it) || isObject(it) && VIEW in it;
  }
});

$export($export.P + $export.U + $export.F * require('./_fails')(function(){
  return !new $ArrayBuffer(2).slice(1, undefined).byteLength;
}), ARRAY_BUFFER, {
  // 24.1.4.3 ArrayBuffer.prototype.slice(start, end)
  slice: function slice(start, end){
    if($slice !== undefined && end === undefined)return $slice.call(anObject(this), start); // FF fix
    var len    = anObject(this).byteLength
      , first  = toIndex(start, len)
      , final  = toIndex(end === undefined ? len : end, len)
      , result = new (speciesConstructor(this, $ArrayBuffer))(toLength(final - first))
      , viewS  = new $DataView(this)
      , viewT  = new $DataView(result)
      , index  = 0;
    while(first < final){
      viewT.setUint8(index++, viewS.getUint8(first++));
    } return result;
  }
});

require('./_set-species')(ARRAY_BUFFER);
},{"./_an-object":28,"./_export":53,"./_fails":55,"./_global":59,"./_is-object":70,"./_set-species":112,"./_species-constructor":116,"./_to-index":126,"./_to-length":129,"./_typed":134,"./_typed-buffer":133}],266:[function(require,module,exports){
var $export = require('./_export');
$export($export.G + $export.W + $export.F * !require('./_typed').ABV, {
  DataView: require('./_typed-buffer').DataView
});
},{"./_export":53,"./_typed":134,"./_typed-buffer":133}],267:[function(require,module,exports){
require('./_typed-array')('Float32', 4, function(init){
  return function Float32Array(data, byteOffset, length){
    return init(this, data, byteOffset, length);
  };
});
},{"./_typed-array":132}],268:[function(require,module,exports){
require('./_typed-array')('Float64', 8, function(init){
  return function Float64Array(data, byteOffset, length){
    return init(this, data, byteOffset, length);
  };
});
},{"./_typed-array":132}],269:[function(require,module,exports){
require('./_typed-array')('Int16', 2, function(init){
  return function Int16Array(data, byteOffset, length){
    return init(this, data, byteOffset, length);
  };
});
},{"./_typed-array":132}],270:[function(require,module,exports){
require('./_typed-array')('Int32', 4, function(init){
  return function Int32Array(data, byteOffset, length){
    return init(this, data, byteOffset, length);
  };
});
},{"./_typed-array":132}],271:[function(require,module,exports){
require('./_typed-array')('Int8', 1, function(init){
  return function Int8Array(data, byteOffset, length){
    return init(this, data, byteOffset, length);
  };
});
},{"./_typed-array":132}],272:[function(require,module,exports){
require('./_typed-array')('Uint16', 2, function(init){
  return function Uint16Array(data, byteOffset, length){
    return init(this, data, byteOffset, length);
  };
});
},{"./_typed-array":132}],273:[function(require,module,exports){
require('./_typed-array')('Uint32', 4, function(init){
  return function Uint32Array(data, byteOffset, length){
    return init(this, data, byteOffset, length);
  };
});
},{"./_typed-array":132}],274:[function(require,module,exports){
require('./_typed-array')('Uint8', 1, function(init){
  return function Uint8Array(data, byteOffset, length){
    return init(this, data, byteOffset, length);
  };
});
},{"./_typed-array":132}],275:[function(require,module,exports){
require('./_typed-array')('Uint8', 1, function(init){
  return function Uint8ClampedArray(data, byteOffset, length){
    return init(this, data, byteOffset, length);
  };
}, true);
},{"./_typed-array":132}],276:[function(require,module,exports){
'use strict';
var each         = require('./_array-methods')(0)
  , redefine     = require('./_redefine')
  , meta         = require('./_meta')
  , assign       = require('./_object-assign')
  , weak         = require('./_collection-weak')
  , isObject     = require('./_is-object')
  , getWeak      = meta.getWeak
  , isExtensible = Object.isExtensible
  , uncaughtFrozenStore = weak.ufstore
  , tmp          = {}
  , InternalMap;

var wrapper = function(get){
  return function WeakMap(){
    return get(this, arguments.length > 0 ? arguments[0] : undefined);
  };
};

var methods = {
  // 23.3.3.3 WeakMap.prototype.get(key)
  get: function get(key){
    if(isObject(key)){
      var data = getWeak(key);
      if(data === true)return uncaughtFrozenStore(this).get(key);
      return data ? data[this._i] : undefined;
    }
  },
  // 23.3.3.5 WeakMap.prototype.set(key, value)
  set: function set(key, value){
    return weak.def(this, key, value);
  }
};

// 23.3 WeakMap Objects
var $WeakMap = module.exports = require('./_collection')('WeakMap', wrapper, methods, weak, true, true);

// IE11 WeakMap frozen keys fix
if(new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7){
  InternalMap = weak.getConstructor(wrapper);
  assign(InternalMap.prototype, methods);
  meta.NEED = true;
  each(['delete', 'has', 'get', 'set'], function(key){
    var proto  = $WeakMap.prototype
      , method = proto[key];
    redefine(proto, key, function(a, b){
      // store frozen objects on internal weakmap shim
      if(isObject(a) && !isExtensible(a)){
        if(!this._f)this._f = new InternalMap;
        var result = this._f[key](a, b);
        return key == 'set' ? this : result;
      // store all the rest on native weakmap
      } return method.call(this, a, b);
    });
  });
}
},{"./_array-methods":33,"./_collection":43,"./_collection-weak":42,"./_is-object":70,"./_meta":83,"./_object-assign":86,"./_redefine":108}],277:[function(require,module,exports){
'use strict';
var weak = require('./_collection-weak');

// 23.4 WeakSet Objects
require('./_collection')('WeakSet', function(get){
  return function WeakSet(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.4.3.1 WeakSet.prototype.add(value)
  add: function add(value){
    return weak.def(this, value, true);
  }
}, weak, false, true);
},{"./_collection":43,"./_collection-weak":42}],278:[function(require,module,exports){
'use strict';
// https://github.com/tc39/Array.prototype.includes
var $export   = require('./_export')
  , $includes = require('./_array-includes')(true);

$export($export.P, 'Array', {
  includes: function includes(el /*, fromIndex = 0 */){
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

require('./_add-to-unscopables')('includes');
},{"./_add-to-unscopables":26,"./_array-includes":32,"./_export":53}],279:[function(require,module,exports){
// https://github.com/rwaldron/tc39-notes/blob/master/es6/2014-09/sept-25.md#510-globalasap-for-enqueuing-a-microtask
var $export   = require('./_export')
  , microtask = require('./_microtask')()
  , process   = require('./_global').process
  , isNode    = require('./_cof')(process) == 'process';

$export($export.G, {
  asap: function asap(fn){
    var domain = isNode && process.domain;
    microtask(domain ? domain.bind(fn) : fn);
  }
});
},{"./_cof":39,"./_export":53,"./_global":59,"./_microtask":85}],280:[function(require,module,exports){
// https://github.com/ljharb/proposal-is-error
var $export = require('./_export')
  , cof     = require('./_cof');

$export($export.S, 'Error', {
  isError: function isError(it){
    return cof(it) === 'Error';
  }
});
},{"./_cof":39,"./_export":53}],281:[function(require,module,exports){
// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export  = require('./_export');

$export($export.P + $export.R, 'Map', {toJSON: require('./_collection-to-json')('Map')});
},{"./_collection-to-json":41,"./_export":53}],282:[function(require,module,exports){
// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var $export = require('./_export');

$export($export.S, 'Math', {
  iaddh: function iaddh(x0, x1, y0, y1){
    var $x0 = x0 >>> 0
      , $x1 = x1 >>> 0
      , $y0 = y0 >>> 0;
    return $x1 + (y1 >>> 0) + (($x0 & $y0 | ($x0 | $y0) & ~($x0 + $y0 >>> 0)) >>> 31) | 0;
  }
});
},{"./_export":53}],283:[function(require,module,exports){
// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var $export = require('./_export');

$export($export.S, 'Math', {
  imulh: function imulh(u, v){
    var UINT16 = 0xffff
      , $u = +u
      , $v = +v
      , u0 = $u & UINT16
      , v0 = $v & UINT16
      , u1 = $u >> 16
      , v1 = $v >> 16
      , t  = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
    return u1 * v1 + (t >> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >> 16);
  }
});
},{"./_export":53}],284:[function(require,module,exports){
// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var $export = require('./_export');

$export($export.S, 'Math', {
  isubh: function isubh(x0, x1, y0, y1){
    var $x0 = x0 >>> 0
      , $x1 = x1 >>> 0
      , $y0 = y0 >>> 0;
    return $x1 - (y1 >>> 0) - ((~$x0 & $y0 | ~($x0 ^ $y0) & $x0 - $y0 >>> 0) >>> 31) | 0;
  }
});
},{"./_export":53}],285:[function(require,module,exports){
// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var $export = require('./_export');

$export($export.S, 'Math', {
  umulh: function umulh(u, v){
    var UINT16 = 0xffff
      , $u = +u
      , $v = +v
      , u0 = $u & UINT16
      , v0 = $v & UINT16
      , u1 = $u >>> 16
      , v1 = $v >>> 16
      , t  = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
    return u1 * v1 + (t >>> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >>> 16);
  }
});
},{"./_export":53}],286:[function(require,module,exports){
'use strict';
var $export         = require('./_export')
  , toObject        = require('./_to-object')
  , aFunction       = require('./_a-function')
  , $defineProperty = require('./_object-dp');

// B.2.2.2 Object.prototype.__defineGetter__(P, getter)
require('./_descriptors') && $export($export.P + require('./_object-forced-pam'), 'Object', {
  __defineGetter__: function __defineGetter__(P, getter){
    $defineProperty.f(toObject(this), P, {get: aFunction(getter), enumerable: true, configurable: true});
  }
});
},{"./_a-function":24,"./_descriptors":49,"./_export":53,"./_object-dp":88,"./_object-forced-pam":90,"./_to-object":130}],287:[function(require,module,exports){
'use strict';
var $export         = require('./_export')
  , toObject        = require('./_to-object')
  , aFunction       = require('./_a-function')
  , $defineProperty = require('./_object-dp');

// B.2.2.3 Object.prototype.__defineSetter__(P, setter)
require('./_descriptors') && $export($export.P + require('./_object-forced-pam'), 'Object', {
  __defineSetter__: function __defineSetter__(P, setter){
    $defineProperty.f(toObject(this), P, {set: aFunction(setter), enumerable: true, configurable: true});
  }
});
},{"./_a-function":24,"./_descriptors":49,"./_export":53,"./_object-dp":88,"./_object-forced-pam":90,"./_to-object":130}],288:[function(require,module,exports){
// https://github.com/tc39/proposal-object-values-entries
var $export  = require('./_export')
  , $entries = require('./_object-to-array')(true);

$export($export.S, 'Object', {
  entries: function entries(it){
    return $entries(it);
  }
});
},{"./_export":53,"./_object-to-array":100}],289:[function(require,module,exports){
// https://github.com/tc39/proposal-object-getownpropertydescriptors
var $export        = require('./_export')
  , ownKeys        = require('./_own-keys')
  , toIObject      = require('./_to-iobject')
  , gOPD           = require('./_object-gopd')
  , createProperty = require('./_create-property');

$export($export.S, 'Object', {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object){
    var O       = toIObject(object)
      , getDesc = gOPD.f
      , keys    = ownKeys(O)
      , result  = {}
      , i       = 0
      , key;
    while(keys.length > i)createProperty(result, key = keys[i++], getDesc(O, key));
    return result;
  }
});
},{"./_create-property":45,"./_export":53,"./_object-gopd":91,"./_own-keys":101,"./_to-iobject":128}],290:[function(require,module,exports){
'use strict';
var $export                  = require('./_export')
  , toObject                 = require('./_to-object')
  , toPrimitive              = require('./_to-primitive')
  , getPrototypeOf           = require('./_object-gpo')
  , getOwnPropertyDescriptor = require('./_object-gopd').f;

// B.2.2.4 Object.prototype.__lookupGetter__(P)
require('./_descriptors') && $export($export.P + require('./_object-forced-pam'), 'Object', {
  __lookupGetter__: function __lookupGetter__(P){
    var O = toObject(this)
      , K = toPrimitive(P, true)
      , D;
    do {
      if(D = getOwnPropertyDescriptor(O, K))return D.get;
    } while(O = getPrototypeOf(O));
  }
});
},{"./_descriptors":49,"./_export":53,"./_object-forced-pam":90,"./_object-gopd":91,"./_object-gpo":95,"./_to-object":130,"./_to-primitive":131}],291:[function(require,module,exports){
'use strict';
var $export                  = require('./_export')
  , toObject                 = require('./_to-object')
  , toPrimitive              = require('./_to-primitive')
  , getPrototypeOf           = require('./_object-gpo')
  , getOwnPropertyDescriptor = require('./_object-gopd').f;

// B.2.2.5 Object.prototype.__lookupSetter__(P)
require('./_descriptors') && $export($export.P + require('./_object-forced-pam'), 'Object', {
  __lookupSetter__: function __lookupSetter__(P){
    var O = toObject(this)
      , K = toPrimitive(P, true)
      , D;
    do {
      if(D = getOwnPropertyDescriptor(O, K))return D.set;
    } while(O = getPrototypeOf(O));
  }
});
},{"./_descriptors":49,"./_export":53,"./_object-forced-pam":90,"./_object-gopd":91,"./_object-gpo":95,"./_to-object":130,"./_to-primitive":131}],292:[function(require,module,exports){
// https://github.com/tc39/proposal-object-values-entries
var $export = require('./_export')
  , $values = require('./_object-to-array')(false);

$export($export.S, 'Object', {
  values: function values(it){
    return $values(it);
  }
});
},{"./_export":53,"./_object-to-array":100}],293:[function(require,module,exports){
'use strict';
// https://github.com/zenparsing/es-observable
var $export     = require('./_export')
  , global      = require('./_global')
  , core        = require('./_core')
  , microtask   = require('./_microtask')()
  , OBSERVABLE  = require('./_wks')('observable')
  , aFunction   = require('./_a-function')
  , anObject    = require('./_an-object')
  , anInstance  = require('./_an-instance')
  , redefineAll = require('./_redefine-all')
  , hide        = require('./_hide')
  , forOf       = require('./_for-of')
  , RETURN      = forOf.RETURN;

var getMethod = function(fn){
  return fn == null ? undefined : aFunction(fn);
};

var cleanupSubscription = function(subscription){
  var cleanup = subscription._c;
  if(cleanup){
    subscription._c = undefined;
    cleanup();
  }
};

var subscriptionClosed = function(subscription){
  return subscription._o === undefined;
};

var closeSubscription = function(subscription){
  if(!subscriptionClosed(subscription)){
    subscription._o = undefined;
    cleanupSubscription(subscription);
  }
};

var Subscription = function(observer, subscriber){
  anObject(observer);
  this._c = undefined;
  this._o = observer;
  observer = new SubscriptionObserver(this);
  try {
    var cleanup      = subscriber(observer)
      , subscription = cleanup;
    if(cleanup != null){
      if(typeof cleanup.unsubscribe === 'function')cleanup = function(){ subscription.unsubscribe(); };
      else aFunction(cleanup);
      this._c = cleanup;
    }
  } catch(e){
    observer.error(e);
    return;
  } if(subscriptionClosed(this))cleanupSubscription(this);
};

Subscription.prototype = redefineAll({}, {
  unsubscribe: function unsubscribe(){ closeSubscription(this); }
});

var SubscriptionObserver = function(subscription){
  this._s = subscription;
};

SubscriptionObserver.prototype = redefineAll({}, {
  next: function next(value){
    var subscription = this._s;
    if(!subscriptionClosed(subscription)){
      var observer = subscription._o;
      try {
        var m = getMethod(observer.next);
        if(m)return m.call(observer, value);
      } catch(e){
        try {
          closeSubscription(subscription);
        } finally {
          throw e;
        }
      }
    }
  },
  error: function error(value){
    var subscription = this._s;
    if(subscriptionClosed(subscription))throw value;
    var observer = subscription._o;
    subscription._o = undefined;
    try {
      var m = getMethod(observer.error);
      if(!m)throw value;
      value = m.call(observer, value);
    } catch(e){
      try {
        cleanupSubscription(subscription);
      } finally {
        throw e;
      }
    } cleanupSubscription(subscription);
    return value;
  },
  complete: function complete(value){
    var subscription = this._s;
    if(!subscriptionClosed(subscription)){
      var observer = subscription._o;
      subscription._o = undefined;
      try {
        var m = getMethod(observer.complete);
        value = m ? m.call(observer, value) : undefined;
      } catch(e){
        try {
          cleanupSubscription(subscription);
        } finally {
          throw e;
        }
      } cleanupSubscription(subscription);
      return value;
    }
  }
});

var $Observable = function Observable(subscriber){
  anInstance(this, $Observable, 'Observable', '_f')._f = aFunction(subscriber);
};

redefineAll($Observable.prototype, {
  subscribe: function subscribe(observer){
    return new Subscription(observer, this._f);
  },
  forEach: function forEach(fn){
    var that = this;
    return new (core.Promise || global.Promise)(function(resolve, reject){
      aFunction(fn);
      var subscription = that.subscribe({
        next : function(value){
          try {
            return fn(value);
          } catch(e){
            reject(e);
            subscription.unsubscribe();
          }
        },
        error: reject,
        complete: resolve
      });
    });
  }
});

redefineAll($Observable, {
  from: function from(x){
    var C = typeof this === 'function' ? this : $Observable;
    var method = getMethod(anObject(x)[OBSERVABLE]);
    if(method){
      var observable = anObject(method.call(x));
      return observable.constructor === C ? observable : new C(function(observer){
        return observable.subscribe(observer);
      });
    }
    return new C(function(observer){
      var done = false;
      microtask(function(){
        if(!done){
          try {
            if(forOf(x, false, function(it){
              observer.next(it);
              if(done)return RETURN;
            }) === RETURN)return;
          } catch(e){
            if(done)throw e;
            observer.error(e);
            return;
          } observer.complete();
        }
      });
      return function(){ done = true; };
    });
  },
  of: function of(){
    for(var i = 0, l = arguments.length, items = Array(l); i < l;)items[i] = arguments[i++];
    return new (typeof this === 'function' ? this : $Observable)(function(observer){
      var done = false;
      microtask(function(){
        if(!done){
          for(var i = 0; i < items.length; ++i){
            observer.next(items[i]);
            if(done)return;
          } observer.complete();
        }
      });
      return function(){ done = true; };
    });
  }
});

hide($Observable.prototype, OBSERVABLE, function(){ return this; });

$export($export.G, {Observable: $Observable});

require('./_set-species')('Observable');
},{"./_a-function":24,"./_an-instance":27,"./_an-object":28,"./_core":44,"./_export":53,"./_for-of":58,"./_global":59,"./_hide":61,"./_microtask":85,"./_redefine-all":107,"./_set-species":112,"./_wks":138}],294:[function(require,module,exports){
var metadata                  = require('./_metadata')
  , anObject                  = require('./_an-object')
  , toMetaKey                 = metadata.key
  , ordinaryDefineOwnMetadata = metadata.set;

metadata.exp({defineMetadata: function defineMetadata(metadataKey, metadataValue, target, targetKey){
  ordinaryDefineOwnMetadata(metadataKey, metadataValue, anObject(target), toMetaKey(targetKey));
}});
},{"./_an-object":28,"./_metadata":84}],295:[function(require,module,exports){
var metadata               = require('./_metadata')
  , anObject               = require('./_an-object')
  , toMetaKey              = metadata.key
  , getOrCreateMetadataMap = metadata.map
  , store                  = metadata.store;

metadata.exp({deleteMetadata: function deleteMetadata(metadataKey, target /*, targetKey */){
  var targetKey   = arguments.length < 3 ? undefined : toMetaKey(arguments[2])
    , metadataMap = getOrCreateMetadataMap(anObject(target), targetKey, false);
  if(metadataMap === undefined || !metadataMap['delete'](metadataKey))return false;
  if(metadataMap.size)return true;
  var targetMetadata = store.get(target);
  targetMetadata['delete'](targetKey);
  return !!targetMetadata.size || store['delete'](target);
}});
},{"./_an-object":28,"./_metadata":84}],296:[function(require,module,exports){
var Set                     = require('./es6.set')
  , from                    = require('./_array-from-iterable')
  , metadata                = require('./_metadata')
  , anObject                = require('./_an-object')
  , getPrototypeOf          = require('./_object-gpo')
  , ordinaryOwnMetadataKeys = metadata.keys
  , toMetaKey               = metadata.key;

var ordinaryMetadataKeys = function(O, P){
  var oKeys  = ordinaryOwnMetadataKeys(O, P)
    , parent = getPrototypeOf(O);
  if(parent === null)return oKeys;
  var pKeys  = ordinaryMetadataKeys(parent, P);
  return pKeys.length ? oKeys.length ? from(new Set(oKeys.concat(pKeys))) : pKeys : oKeys;
};

metadata.exp({getMetadataKeys: function getMetadataKeys(target /*, targetKey */){
  return ordinaryMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
}});
},{"./_an-object":28,"./_array-from-iterable":31,"./_metadata":84,"./_object-gpo":95,"./es6.set":241}],297:[function(require,module,exports){
var metadata               = require('./_metadata')
  , anObject               = require('./_an-object')
  , getPrototypeOf         = require('./_object-gpo')
  , ordinaryHasOwnMetadata = metadata.has
  , ordinaryGetOwnMetadata = metadata.get
  , toMetaKey              = metadata.key;

var ordinaryGetMetadata = function(MetadataKey, O, P){
  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
  if(hasOwn)return ordinaryGetOwnMetadata(MetadataKey, O, P);
  var parent = getPrototypeOf(O);
  return parent !== null ? ordinaryGetMetadata(MetadataKey, parent, P) : undefined;
};

metadata.exp({getMetadata: function getMetadata(metadataKey, target /*, targetKey */){
  return ordinaryGetMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
}});
},{"./_an-object":28,"./_metadata":84,"./_object-gpo":95}],298:[function(require,module,exports){
var metadata                = require('./_metadata')
  , anObject                = require('./_an-object')
  , ordinaryOwnMetadataKeys = metadata.keys
  , toMetaKey               = metadata.key;

metadata.exp({getOwnMetadataKeys: function getOwnMetadataKeys(target /*, targetKey */){
  return ordinaryOwnMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
}});
},{"./_an-object":28,"./_metadata":84}],299:[function(require,module,exports){
var metadata               = require('./_metadata')
  , anObject               = require('./_an-object')
  , ordinaryGetOwnMetadata = metadata.get
  , toMetaKey              = metadata.key;

metadata.exp({getOwnMetadata: function getOwnMetadata(metadataKey, target /*, targetKey */){
  return ordinaryGetOwnMetadata(metadataKey, anObject(target)
    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
}});
},{"./_an-object":28,"./_metadata":84}],300:[function(require,module,exports){
var metadata               = require('./_metadata')
  , anObject               = require('./_an-object')
  , getPrototypeOf         = require('./_object-gpo')
  , ordinaryHasOwnMetadata = metadata.has
  , toMetaKey              = metadata.key;

var ordinaryHasMetadata = function(MetadataKey, O, P){
  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
  if(hasOwn)return true;
  var parent = getPrototypeOf(O);
  return parent !== null ? ordinaryHasMetadata(MetadataKey, parent, P) : false;
};

metadata.exp({hasMetadata: function hasMetadata(metadataKey, target /*, targetKey */){
  return ordinaryHasMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
}});
},{"./_an-object":28,"./_metadata":84,"./_object-gpo":95}],301:[function(require,module,exports){
var metadata               = require('./_metadata')
  , anObject               = require('./_an-object')
  , ordinaryHasOwnMetadata = metadata.has
  , toMetaKey              = metadata.key;

metadata.exp({hasOwnMetadata: function hasOwnMetadata(metadataKey, target /*, targetKey */){
  return ordinaryHasOwnMetadata(metadataKey, anObject(target)
    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
}});
},{"./_an-object":28,"./_metadata":84}],302:[function(require,module,exports){
var metadata                  = require('./_metadata')
  , anObject                  = require('./_an-object')
  , aFunction                 = require('./_a-function')
  , toMetaKey                 = metadata.key
  , ordinaryDefineOwnMetadata = metadata.set;

metadata.exp({metadata: function metadata(metadataKey, metadataValue){
  return function decorator(target, targetKey){
    ordinaryDefineOwnMetadata(
      metadataKey, metadataValue,
      (targetKey !== undefined ? anObject : aFunction)(target),
      toMetaKey(targetKey)
    );
  };
}});
},{"./_a-function":24,"./_an-object":28,"./_metadata":84}],303:[function(require,module,exports){
// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export  = require('./_export');

$export($export.P + $export.R, 'Set', {toJSON: require('./_collection-to-json')('Set')});
},{"./_collection-to-json":41,"./_export":53}],304:[function(require,module,exports){
'use strict';
// https://github.com/mathiasbynens/String.prototype.at
var $export = require('./_export')
  , $at     = require('./_string-at')(true);

$export($export.P, 'String', {
  at: function at(pos){
    return $at(this, pos);
  }
});
},{"./_export":53,"./_string-at":118}],305:[function(require,module,exports){
'use strict';
// https://tc39.github.io/String.prototype.matchAll/
var $export     = require('./_export')
  , defined     = require('./_defined')
  , toLength    = require('./_to-length')
  , isRegExp    = require('./_is-regexp')
  , getFlags    = require('./_flags')
  , RegExpProto = RegExp.prototype;

var $RegExpStringIterator = function(regexp, string){
  this._r = regexp;
  this._s = string;
};

require('./_iter-create')($RegExpStringIterator, 'RegExp String', function next(){
  var match = this._r.exec(this._s);
  return {value: match, done: match === null};
});

$export($export.P, 'String', {
  matchAll: function matchAll(regexp){
    defined(this);
    if(!isRegExp(regexp))throw TypeError(regexp + ' is not a regexp!');
    var S     = String(this)
      , flags = 'flags' in RegExpProto ? String(regexp.flags) : getFlags.call(regexp)
      , rx    = new RegExp(regexp.source, ~flags.indexOf('g') ? flags : 'g' + flags);
    rx.lastIndex = toLength(regexp.lastIndex);
    return new $RegExpStringIterator(rx, S);
  }
});
},{"./_defined":48,"./_export":53,"./_flags":57,"./_is-regexp":71,"./_iter-create":73,"./_to-length":129}],306:[function(require,module,exports){
'use strict';
// https://github.com/tc39/proposal-string-pad-start-end
var $export = require('./_export')
  , $pad    = require('./_string-pad');

$export($export.P, 'String', {
  padEnd: function padEnd(maxLength /*, fillString = ' ' */){
    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
  }
});
},{"./_export":53,"./_string-pad":121}],307:[function(require,module,exports){
'use strict';
// https://github.com/tc39/proposal-string-pad-start-end
var $export = require('./_export')
  , $pad    = require('./_string-pad');

$export($export.P, 'String', {
  padStart: function padStart(maxLength /*, fillString = ' ' */){
    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
  }
});
},{"./_export":53,"./_string-pad":121}],308:[function(require,module,exports){
'use strict';
// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
require('./_string-trim')('trimLeft', function($trim){
  return function trimLeft(){
    return $trim(this, 1);
  };
}, 'trimStart');
},{"./_string-trim":123}],309:[function(require,module,exports){
'use strict';
// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
require('./_string-trim')('trimRight', function($trim){
  return function trimRight(){
    return $trim(this, 2);
  };
}, 'trimEnd');
},{"./_string-trim":123}],310:[function(require,module,exports){
require('./_wks-define')('asyncIterator');
},{"./_wks-define":136}],311:[function(require,module,exports){
require('./_wks-define')('observable');
},{"./_wks-define":136}],312:[function(require,module,exports){
// https://github.com/ljharb/proposal-global
var $export = require('./_export');

$export($export.S, 'System', {global: require('./_global')});
},{"./_export":53,"./_global":59}],313:[function(require,module,exports){
var $iterators    = require('./es6.array.iterator')
  , redefine      = require('./_redefine')
  , global        = require('./_global')
  , hide          = require('./_hide')
  , Iterators     = require('./_iterators')
  , wks           = require('./_wks')
  , ITERATOR      = wks('iterator')
  , TO_STRING_TAG = wks('toStringTag')
  , ArrayValues   = Iterators.Array;

for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
  var NAME       = collections[i]
    , Collection = global[NAME]
    , proto      = Collection && Collection.prototype
    , key;
  if(proto){
    if(!proto[ITERATOR])hide(proto, ITERATOR, ArrayValues);
    if(!proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    for(key in $iterators)if(!proto[key])redefine(proto, key, $iterators[key], true);
  }
}
},{"./_global":59,"./_hide":61,"./_iterators":77,"./_redefine":108,"./_wks":138,"./es6.array.iterator":151}],314:[function(require,module,exports){
var $export = require('./_export')
  , $task   = require('./_task');
$export($export.G + $export.B, {
  setImmediate:   $task.set,
  clearImmediate: $task.clear
});
},{"./_export":53,"./_task":125}],315:[function(require,module,exports){
// ie9- setTimeout & setInterval additional parameters fix
var global     = require('./_global')
  , $export    = require('./_export')
  , invoke     = require('./_invoke')
  , partial    = require('./_partial')
  , navigator  = global.navigator
  , MSIE       = !!navigator && /MSIE .\./.test(navigator.userAgent); // <- dirty ie9- check
var wrap = function(set){
  return MSIE ? function(fn, time /*, ...args */){
    return set(invoke(
      partial,
      [].slice.call(arguments, 2),
      typeof fn == 'function' ? fn : Function(fn)
    ), time);
  } : set;
};
$export($export.G + $export.B + $export.F * MSIE, {
  setTimeout:  wrap(global.setTimeout),
  setInterval: wrap(global.setInterval)
});
},{"./_export":53,"./_global":59,"./_invoke":65,"./_partial":104}],316:[function(require,module,exports){
require('./modules/es6.symbol');
require('./modules/es6.object.create');
require('./modules/es6.object.define-property');
require('./modules/es6.object.define-properties');
require('./modules/es6.object.get-own-property-descriptor');
require('./modules/es6.object.get-prototype-of');
require('./modules/es6.object.keys');
require('./modules/es6.object.get-own-property-names');
require('./modules/es6.object.freeze');
require('./modules/es6.object.seal');
require('./modules/es6.object.prevent-extensions');
require('./modules/es6.object.is-frozen');
require('./modules/es6.object.is-sealed');
require('./modules/es6.object.is-extensible');
require('./modules/es6.object.assign');
require('./modules/es6.object.is');
require('./modules/es6.object.set-prototype-of');
require('./modules/es6.object.to-string');
require('./modules/es6.function.bind');
require('./modules/es6.function.name');
require('./modules/es6.function.has-instance');
require('./modules/es6.parse-int');
require('./modules/es6.parse-float');
require('./modules/es6.number.constructor');
require('./modules/es6.number.to-fixed');
require('./modules/es6.number.to-precision');
require('./modules/es6.number.epsilon');
require('./modules/es6.number.is-finite');
require('./modules/es6.number.is-integer');
require('./modules/es6.number.is-nan');
require('./modules/es6.number.is-safe-integer');
require('./modules/es6.number.max-safe-integer');
require('./modules/es6.number.min-safe-integer');
require('./modules/es6.number.parse-float');
require('./modules/es6.number.parse-int');
require('./modules/es6.math.acosh');
require('./modules/es6.math.asinh');
require('./modules/es6.math.atanh');
require('./modules/es6.math.cbrt');
require('./modules/es6.math.clz32');
require('./modules/es6.math.cosh');
require('./modules/es6.math.expm1');
require('./modules/es6.math.fround');
require('./modules/es6.math.hypot');
require('./modules/es6.math.imul');
require('./modules/es6.math.log10');
require('./modules/es6.math.log1p');
require('./modules/es6.math.log2');
require('./modules/es6.math.sign');
require('./modules/es6.math.sinh');
require('./modules/es6.math.tanh');
require('./modules/es6.math.trunc');
require('./modules/es6.string.from-code-point');
require('./modules/es6.string.raw');
require('./modules/es6.string.trim');
require('./modules/es6.string.iterator');
require('./modules/es6.string.code-point-at');
require('./modules/es6.string.ends-with');
require('./modules/es6.string.includes');
require('./modules/es6.string.repeat');
require('./modules/es6.string.starts-with');
require('./modules/es6.string.anchor');
require('./modules/es6.string.big');
require('./modules/es6.string.blink');
require('./modules/es6.string.bold');
require('./modules/es6.string.fixed');
require('./modules/es6.string.fontcolor');
require('./modules/es6.string.fontsize');
require('./modules/es6.string.italics');
require('./modules/es6.string.link');
require('./modules/es6.string.small');
require('./modules/es6.string.strike');
require('./modules/es6.string.sub');
require('./modules/es6.string.sup');
require('./modules/es6.date.now');
require('./modules/es6.date.to-json');
require('./modules/es6.date.to-iso-string');
require('./modules/es6.date.to-string');
require('./modules/es6.date.to-primitive');
require('./modules/es6.array.is-array');
require('./modules/es6.array.from');
require('./modules/es6.array.of');
require('./modules/es6.array.join');
require('./modules/es6.array.slice');
require('./modules/es6.array.sort');
require('./modules/es6.array.for-each');
require('./modules/es6.array.map');
require('./modules/es6.array.filter');
require('./modules/es6.array.some');
require('./modules/es6.array.every');
require('./modules/es6.array.reduce');
require('./modules/es6.array.reduce-right');
require('./modules/es6.array.index-of');
require('./modules/es6.array.last-index-of');
require('./modules/es6.array.copy-within');
require('./modules/es6.array.fill');
require('./modules/es6.array.find');
require('./modules/es6.array.find-index');
require('./modules/es6.array.species');
require('./modules/es6.array.iterator');
require('./modules/es6.regexp.constructor');
require('./modules/es6.regexp.to-string');
require('./modules/es6.regexp.flags');
require('./modules/es6.regexp.match');
require('./modules/es6.regexp.replace');
require('./modules/es6.regexp.search');
require('./modules/es6.regexp.split');
require('./modules/es6.promise');
require('./modules/es6.map');
require('./modules/es6.set');
require('./modules/es6.weak-map');
require('./modules/es6.weak-set');
require('./modules/es6.typed.array-buffer');
require('./modules/es6.typed.data-view');
require('./modules/es6.typed.int8-array');
require('./modules/es6.typed.uint8-array');
require('./modules/es6.typed.uint8-clamped-array');
require('./modules/es6.typed.int16-array');
require('./modules/es6.typed.uint16-array');
require('./modules/es6.typed.int32-array');
require('./modules/es6.typed.uint32-array');
require('./modules/es6.typed.float32-array');
require('./modules/es6.typed.float64-array');
require('./modules/es6.reflect.apply');
require('./modules/es6.reflect.construct');
require('./modules/es6.reflect.define-property');
require('./modules/es6.reflect.delete-property');
require('./modules/es6.reflect.enumerate');
require('./modules/es6.reflect.get');
require('./modules/es6.reflect.get-own-property-descriptor');
require('./modules/es6.reflect.get-prototype-of');
require('./modules/es6.reflect.has');
require('./modules/es6.reflect.is-extensible');
require('./modules/es6.reflect.own-keys');
require('./modules/es6.reflect.prevent-extensions');
require('./modules/es6.reflect.set');
require('./modules/es6.reflect.set-prototype-of');
require('./modules/es7.array.includes');
require('./modules/es7.string.at');
require('./modules/es7.string.pad-start');
require('./modules/es7.string.pad-end');
require('./modules/es7.string.trim-left');
require('./modules/es7.string.trim-right');
require('./modules/es7.string.match-all');
require('./modules/es7.symbol.async-iterator');
require('./modules/es7.symbol.observable');
require('./modules/es7.object.get-own-property-descriptors');
require('./modules/es7.object.values');
require('./modules/es7.object.entries');
require('./modules/es7.object.define-getter');
require('./modules/es7.object.define-setter');
require('./modules/es7.object.lookup-getter');
require('./modules/es7.object.lookup-setter');
require('./modules/es7.map.to-json');
require('./modules/es7.set.to-json');
require('./modules/es7.system.global');
require('./modules/es7.error.is-error');
require('./modules/es7.math.iaddh');
require('./modules/es7.math.isubh');
require('./modules/es7.math.imulh');
require('./modules/es7.math.umulh');
require('./modules/es7.reflect.define-metadata');
require('./modules/es7.reflect.delete-metadata');
require('./modules/es7.reflect.get-metadata');
require('./modules/es7.reflect.get-metadata-keys');
require('./modules/es7.reflect.get-own-metadata');
require('./modules/es7.reflect.get-own-metadata-keys');
require('./modules/es7.reflect.has-metadata');
require('./modules/es7.reflect.has-own-metadata');
require('./modules/es7.reflect.metadata');
require('./modules/es7.asap');
require('./modules/es7.observable');
require('./modules/web.timers');
require('./modules/web.immediate');
require('./modules/web.dom.iterable');
module.exports = require('./modules/_core');
},{"./modules/_core":44,"./modules/es6.array.copy-within":141,"./modules/es6.array.every":142,"./modules/es6.array.fill":143,"./modules/es6.array.filter":144,"./modules/es6.array.find":146,"./modules/es6.array.find-index":145,"./modules/es6.array.for-each":147,"./modules/es6.array.from":148,"./modules/es6.array.index-of":149,"./modules/es6.array.is-array":150,"./modules/es6.array.iterator":151,"./modules/es6.array.join":152,"./modules/es6.array.last-index-of":153,"./modules/es6.array.map":154,"./modules/es6.array.of":155,"./modules/es6.array.reduce":157,"./modules/es6.array.reduce-right":156,"./modules/es6.array.slice":158,"./modules/es6.array.some":159,"./modules/es6.array.sort":160,"./modules/es6.array.species":161,"./modules/es6.date.now":162,"./modules/es6.date.to-iso-string":163,"./modules/es6.date.to-json":164,"./modules/es6.date.to-primitive":165,"./modules/es6.date.to-string":166,"./modules/es6.function.bind":167,"./modules/es6.function.has-instance":168,"./modules/es6.function.name":169,"./modules/es6.map":170,"./modules/es6.math.acosh":171,"./modules/es6.math.asinh":172,"./modules/es6.math.atanh":173,"./modules/es6.math.cbrt":174,"./modules/es6.math.clz32":175,"./modules/es6.math.cosh":176,"./modules/es6.math.expm1":177,"./modules/es6.math.fround":178,"./modules/es6.math.hypot":179,"./modules/es6.math.imul":180,"./modules/es6.math.log10":181,"./modules/es6.math.log1p":182,"./modules/es6.math.log2":183,"./modules/es6.math.sign":184,"./modules/es6.math.sinh":185,"./modules/es6.math.tanh":186,"./modules/es6.math.trunc":187,"./modules/es6.number.constructor":188,"./modules/es6.number.epsilon":189,"./modules/es6.number.is-finite":190,"./modules/es6.number.is-integer":191,"./modules/es6.number.is-nan":192,"./modules/es6.number.is-safe-integer":193,"./modules/es6.number.max-safe-integer":194,"./modules/es6.number.min-safe-integer":195,"./modules/es6.number.parse-float":196,"./modules/es6.number.parse-int":197,"./modules/es6.number.to-fixed":198,"./modules/es6.number.to-precision":199,"./modules/es6.object.assign":200,"./modules/es6.object.create":201,"./modules/es6.object.define-properties":202,"./modules/es6.object.define-property":203,"./modules/es6.object.freeze":204,"./modules/es6.object.get-own-property-descriptor":205,"./modules/es6.object.get-own-property-names":206,"./modules/es6.object.get-prototype-of":207,"./modules/es6.object.is":211,"./modules/es6.object.is-extensible":208,"./modules/es6.object.is-frozen":209,"./modules/es6.object.is-sealed":210,"./modules/es6.object.keys":212,"./modules/es6.object.prevent-extensions":213,"./modules/es6.object.seal":214,"./modules/es6.object.set-prototype-of":215,"./modules/es6.object.to-string":216,"./modules/es6.parse-float":217,"./modules/es6.parse-int":218,"./modules/es6.promise":219,"./modules/es6.reflect.apply":220,"./modules/es6.reflect.construct":221,"./modules/es6.reflect.define-property":222,"./modules/es6.reflect.delete-property":223,"./modules/es6.reflect.enumerate":224,"./modules/es6.reflect.get":227,"./modules/es6.reflect.get-own-property-descriptor":225,"./modules/es6.reflect.get-prototype-of":226,"./modules/es6.reflect.has":228,"./modules/es6.reflect.is-extensible":229,"./modules/es6.reflect.own-keys":230,"./modules/es6.reflect.prevent-extensions":231,"./modules/es6.reflect.set":233,"./modules/es6.reflect.set-prototype-of":232,"./modules/es6.regexp.constructor":234,"./modules/es6.regexp.flags":235,"./modules/es6.regexp.match":236,"./modules/es6.regexp.replace":237,"./modules/es6.regexp.search":238,"./modules/es6.regexp.split":239,"./modules/es6.regexp.to-string":240,"./modules/es6.set":241,"./modules/es6.string.anchor":242,"./modules/es6.string.big":243,"./modules/es6.string.blink":244,"./modules/es6.string.bold":245,"./modules/es6.string.code-point-at":246,"./modules/es6.string.ends-with":247,"./modules/es6.string.fixed":248,"./modules/es6.string.fontcolor":249,"./modules/es6.string.fontsize":250,"./modules/es6.string.from-code-point":251,"./modules/es6.string.includes":252,"./modules/es6.string.italics":253,"./modules/es6.string.iterator":254,"./modules/es6.string.link":255,"./modules/es6.string.raw":256,"./modules/es6.string.repeat":257,"./modules/es6.string.small":258,"./modules/es6.string.starts-with":259,"./modules/es6.string.strike":260,"./modules/es6.string.sub":261,"./modules/es6.string.sup":262,"./modules/es6.string.trim":263,"./modules/es6.symbol":264,"./modules/es6.typed.array-buffer":265,"./modules/es6.typed.data-view":266,"./modules/es6.typed.float32-array":267,"./modules/es6.typed.float64-array":268,"./modules/es6.typed.int16-array":269,"./modules/es6.typed.int32-array":270,"./modules/es6.typed.int8-array":271,"./modules/es6.typed.uint16-array":272,"./modules/es6.typed.uint32-array":273,"./modules/es6.typed.uint8-array":274,"./modules/es6.typed.uint8-clamped-array":275,"./modules/es6.weak-map":276,"./modules/es6.weak-set":277,"./modules/es7.array.includes":278,"./modules/es7.asap":279,"./modules/es7.error.is-error":280,"./modules/es7.map.to-json":281,"./modules/es7.math.iaddh":282,"./modules/es7.math.imulh":283,"./modules/es7.math.isubh":284,"./modules/es7.math.umulh":285,"./modules/es7.object.define-getter":286,"./modules/es7.object.define-setter":287,"./modules/es7.object.entries":288,"./modules/es7.object.get-own-property-descriptors":289,"./modules/es7.object.lookup-getter":290,"./modules/es7.object.lookup-setter":291,"./modules/es7.object.values":292,"./modules/es7.observable":293,"./modules/es7.reflect.define-metadata":294,"./modules/es7.reflect.delete-metadata":295,"./modules/es7.reflect.get-metadata":297,"./modules/es7.reflect.get-metadata-keys":296,"./modules/es7.reflect.get-own-metadata":299,"./modules/es7.reflect.get-own-metadata-keys":298,"./modules/es7.reflect.has-metadata":300,"./modules/es7.reflect.has-own-metadata":301,"./modules/es7.reflect.metadata":302,"./modules/es7.set.to-json":303,"./modules/es7.string.at":304,"./modules/es7.string.match-all":305,"./modules/es7.string.pad-end":306,"./modules/es7.string.pad-start":307,"./modules/es7.string.trim-left":308,"./modules/es7.string.trim-right":309,"./modules/es7.symbol.async-iterator":310,"./modules/es7.symbol.observable":311,"./modules/es7.system.global":312,"./modules/web.dom.iterable":313,"./modules/web.immediate":314,"./modules/web.timers":315}],317:[function(require,module,exports){
'use strict';

var cssColorNames = require('css-color-names');

module.exports = function cssColorList() {
  return Object.keys(cssColorNames);
}

},{"css-color-names":318}],318:[function(require,module,exports){
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

},{}],319:[function(require,module,exports){
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

},{}],320:[function(require,module,exports){
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

},{"css-color-names":319,"is-blank":322,"is-named-css-color":324,"rgb":328,"wcag-contrast":329}],321:[function(require,module,exports){
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

},{}],322:[function(require,module,exports){
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

},{"is-empty":323,"is-whitespace":325}],323:[function(require,module,exports){

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
},{}],324:[function(require,module,exports){
'use strict'

var cssColors = require('css-color-list')

module.exports = function isNamedCssColor (color) {
  if (typeof color !== 'string') {
    throw new TypeError('is-named-css-color expects a string')
  }

  var cssColorRegex = new RegExp('^' + cssColors().join('|') + '$', 'i')
  return cssColorRegex.test(color)
}

},{"css-color-list":317}],325:[function(require,module,exports){
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

},{}],326:[function(require,module,exports){
(function (global){
/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
 * additional grant of patent rights can be found in the PATENTS file in
 * the same directory.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    if (typeof global.process === "object" && global.process.domain) {
      invoke = global.process.domain.bind(invoke);
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // Among the various tricks for obtaining a reference to the global
  // object, this seems to be the most reliable technique that does not
  // use indirect eval (which violates Content Security Policy).
  typeof global === "object" ? global :
  typeof window === "object" ? window :
  typeof self === "object" ? self : this
);

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],327:[function(require,module,exports){
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

},{}],328:[function(require,module,exports){
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

},{}],329:[function(require,module,exports){
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

},{"hex-rgb":321,"relative-luminance":327}],330:[function(require,module,exports){
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

},{"./color":333,"./util":342}],331:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = card;

var _jsuaStyle = require("@lynx-json/jsua-style");

var _elevation = require("./elevation");

var _elevation2 = _interopRequireDefault(_elevation);

var _background = require("./background");

var _background2 = _interopRequireDefault(_background);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function card() {
  return [_elevation2.default.card(), _background2.default.card(), (0, _jsuaStyle.on)("mouseover", _elevation2.default.cardHover()), (0, _jsuaStyle.on)("mouseout", _elevation2.default.card()), function (el) {
    return el.style.display = "flex";
  }, function (el) {
    return el.style.flexDirection = "column";
  }, function (el) {
    return el.style.borderRadius = "2px";
  }];
}

},{"./background":330,"./elevation":334,"@lynx-json/jsua-style":15}],332:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getColor = getColor;
var colors = {
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
};

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
      return -0.5;
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

  var hue = colors[name];

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

},{}],333:[function(require,module,exports){
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

},{"./color-palette":332}],334:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = elevation;
var shadows = ["none", "0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12)", "0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)", "0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12)", "0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)", "0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12)", "0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)", "0px 4px 5px -2px rgba(0, 0, 0, 0.2), 0px 7px 10px 1px rgba(0, 0, 0, 0.14), 0px 2px 16px 1px rgba(0, 0, 0, 0.12)", "0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12)", "0px 5px 6px -3px rgba(0, 0, 0, 0.2), 0px 9px 12px 1px rgba(0, 0, 0, 0.14), 0px 3px 16px 2px rgba(0, 0, 0, 0.12)", "0px 6px 6px -3px rgba(0, 0, 0, 0.2), 0px 10px 14px 1px rgba(0, 0, 0, 0.14), 0px 4px 18px 3px rgba(0, 0, 0, 0.12)", "0px 6px 7px -4px rgba(0, 0, 0, 0.2), 0px 11px 15px 1px rgba(0, 0, 0, 0.14), 0px 4px 20px 3px rgba(0, 0, 0, 0.12)", "0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12)", "0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 13px 19px 2px rgba(0, 0, 0, 0.14), 0px 5px 24px 4px rgba(0, 0, 0, 0.12)", "0px 7px 9px -4px rgba(0, 0, 0, 0.2), 0px 14px 21px 2px rgba(0, 0, 0, 0.14), 0px 5px 26px 4px rgba(0, 0, 0, 0.12)", "0px 8px 9px -5px rgba(0, 0, 0, 0.2), 0px 15px 22px 2px rgba(0, 0, 0, 0.14), 0px 6px 28px 5px rgba(0, 0, 0, 0.12)", "0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12)", "0px 8px 11px -5px rgba(0, 0, 0, 0.2), 0px 17px 26px 2px rgba(0, 0, 0, 0.14), 0px 6px 32px 5px rgba(0, 0, 0, 0.12)", "0px 9px 11px -5px rgba(0, 0, 0, 0.2), 0px 18px 28px 2px rgba(0, 0, 0, 0.14), 0px 7px 34px 6px rgba(0, 0, 0, 0.12)", "0px 9px 12px -6px rgba(0, 0, 0, 0.2), 0px 19px 29px 2px rgba(0, 0, 0, 0.14), 0px 7px 36px 6px rgba(0, 0, 0, 0.12)", "0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 20px 31px 3px rgba(0, 0, 0, 0.14), 0px 8px 38px 7px rgba(0, 0, 0, 0.12)", "0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 21px 33px 3px rgba(0, 0, 0, 0.14), 0px 8px 40px 7px rgba(0, 0, 0, 0.12)", "0px 10px 14px -6px rgba(0, 0, 0, 0.2), 0px 22px 35px 3px rgba(0, 0, 0, 0.14), 0px 8px 42px 7px rgba(0, 0, 0, 0.12)", "0px 11px 14px -7px rgba(0, 0, 0, 0.2), 0px 23px 36px 3px rgba(0, 0, 0, 0.14), 0px 9px 44px 8px rgba(0, 0, 0, 0.12)", "0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12)"];

function elevation(level) {
  level = level || 0;
  return [function (el) {
    return el.style.boxShadow = shadows[level];
  }, function (el) {
    return el.style.zIndex = level;
  }];
}

elevation.none = function (el) {
  return elevation(0);
};
elevation.card = function (el) {
  return elevation(2);
};
elevation.cardHover = function (el) {
  return elevation(8);
};
elevation.menu = function (el) {
  return elevation(8);
};

},{}],335:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = expansionPanel;

var _util = require("./util");

var _jsuaStyle = require("@lynx-json/jsua-style");

var _color = require("./color");

var _color2 = _interopRequireDefault(_color);

var _text = require("./text");

var _text2 = _interopRequireDefault(_text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function expansionPanel(options) {
  return function (element) {
    var innerHTML = "\n      <div role=\"presentation\">\n        <div data-jsua-style-slot=\"header\" role=\"presentation\"></div>\n        <div data-jsua-style-slot=\"toggle\" role=\"presentation\"><i class=\"material-icons\">keyboard_arrow_down</i></div>\n      </div>\n      <div role=\"presentation\">\n        <div data-jsua-style-slot=\"content\" role=\"presentation\"></div>\n      </div>\n    ";

    (0, _jsuaStyle.query)(element).each([(0, _jsuaStyle.component)("material-expansion-panel", innerHTML)]);

    var textColor = (0, _util.getTextColor)(options);
    var expandCollapseWrapper = element.lastElementChild;
    var headerSlot = element.firstElementChild.firstElementChild;
    var contentContainer = element.lastElementChild.firstElementChild;
    var componentHeader = element.firstElementChild;
    var toggleSlot = componentHeader.lastElementChild;

    (0, _jsuaStyle.query)(element).each([function (el) {
      return el.style.display = "flex";
    }, function (el) {
      return el.style.flexDirection = "column";
    }, function (el) {
      return el.style.alignItems = "stretch";
    }, (0, _jsuaStyle.when)("visibility", "concealed", function (el) {
      return (0, _jsuaStyle.query)(expandCollapseWrapper).each([function (el) {
        return el.style.maxHeight = "0px";
      }, function (el) {
        return el.style.overflowY = "hidden";
      }, function (el) {
        return el.style.opacity = 0;
      }, function (el) {
        return componentHeader.style.minHeight = "48px";
      }, _text2.default.body(textColor), function () {
        return (0, _jsuaStyle.query)(toggleSlot).select("i.material-icons").each(function (el) {
          return el.textContent = "keyboard_arrow_down";
        });
      }]);
    }), (0, _jsuaStyle.when)("visibility", "revealed", function (el) {
      return (0, _jsuaStyle.query)(expandCollapseWrapper).each([function (el) {
        return el.style.maxHeight = contentContainer.offsetHeight + "px";
      }, function (el) {
        return el.style.opacity = 1;
      }, function () {
        return componentHeader.style.minHeight = "64px";
      }, function () {
        return (0, _jsuaStyle.query)(toggleSlot).select(".material-icons").each(function (el) {
          return el.textContent = "keyboard_arrow_up";
        });
      }]);
    }), function (el) {
      if (!element.jsuaStyleHasState) {
        (0, _jsuaStyle.setState)("visibility", "concealed")(el);
      }
    }]);

    (0, _jsuaStyle.query)(contentContainer).each([function (el) {
      return contentContainer.style.display = "flex";
    }, function (el) {
      return contentContainer.flexDirection = "column";
    }, function (el) {
      return contentContainer.style.paddingLeft = "24px";
    }, function (el) {
      return contentContainer.style.paddingRight = "24px";
    }, function (el) {
      return contentContainer.style.paddingBottom = "16px";
    }, function (el) {
      return contentContainer.style.marginRight = "24px";
    }]);

    (0, _jsuaStyle.query)(componentHeader).each([_text2.default.subheading(textColor), function (el) {
      return el.style.cursor = "default";
    }, function (el) {
      return el.style.display = "flex";
    }, function (el) {
      return el.style.flexDirection = "row";
    }, function (el) {
      return el.style.flexWrap = "nowrap";
    }, function (el) {
      return el.style.alignItems = "center";
    }, function (el) {
      return el.style.paddingLeft = "24px";
    }, function (el) {
      return el.style.paddingRight = "24px";
    }, function (el) {
      return el.style.minHeight = "48px";
    }, function (el) {
      return el.style.transition = "min-height 175ms ease-in-out";
    }]);

    headerSlot.style.flexGrow = 1;

    (0, _jsuaStyle.query)(toggleSlot).select("i.material-icons").each([function (el) {
      return el.style.color = textColor;
    }, function (el) {
      return el.style.opacity = (0, _util.getDisabledTextOpacity)(textColor);
    }, function (el) {
      return el.style.width = "24px";
    }, function (el) {
      return el.style.height = "24px";
    }, function (el) {
      return el.style.overflow = "hidden";
    }, function (el) {
      return el.style.cursor = "default";
    }, function (el) {
      return el.style.borderRadius = "2px";
    }, function (el) {
      return el.style.border = "1px solid transparent";
    }, (0, _jsuaStyle.on)("mouseover", function (el) {
      return el.style.border = (0, _util.getDividerStyle)(textColor);
    }), (0, _jsuaStyle.on)("mouseout", function (el) {
      return el.style.border = "1px solid transparent";
    })]);

    expandCollapseWrapper.style.transition = "max-height 175ms ease-in-out, opacity 175ms ease-in-out";

    componentHeader.addEventListener("click", function () {
      toggleSlot.firstElementChild.click();
    });

    // By default, we expand/collapse. If you add your own toggle, you're responsible
    // for maintaining the state.
    (0, _jsuaStyle.query)(toggleSlot.firstElementChild).each([(0, _jsuaStyle.on)("click", function (el, evt) {
      if (element.jsuaStyleHasState && element.jsuaStyleHasState("visibility", "revealed")) {
        (0, _jsuaStyle.setState)("visibility", "concealed")(element);
      } else {
        (0, _jsuaStyle.setState)("visibility", "revealed")(element);
      }

      evt.stopPropagation();
    })]);
  };
}

expansionPanel.header = function () {
  return [_jsuaStyle.component.slot("material-expansion-panel", "header")];
};

expansionPanel.toggle = function () {
  return [_jsuaStyle.component.slot("material-expansion-panel", "toggle"), function (el) {
    return el.parentElement.removeChild(el.previousSibling);
  }];
};

},{"./color":333,"./text":341,"./util":342,"@lynx-json/jsua-style":15}],336:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = grid;

var _util = require("./util");

var gutterPattern = function gutterPattern() {
  return (/^(\d*)([a-z]*)$/
  );
};

function parseGutter(gutter) {
  var parsedGutter = gutterPattern().exec(gutter);
  var gutterValue = +parsedGutter[1];
  var gutterUnits = parsedGutter[2];

  return {
    value: gutterValue,
    units: gutterUnits
  };
}

function grid(columns, gutter) {
  return function (element) {
    var wrapper = (0, _util.wrapChildren)(element);
    var parsedGutter = parseGutter(gutter);

    wrapper.style.margin = "-" + parsedGutter.value / 2 + parsedGutter.units;
    wrapper.style.display = "flex";
    wrapper.style.flexGrow = "1";
    wrapper.style.flexDirection = "row";
    wrapper.style.flexWrap = "wrap";
    wrapper.style.maxWidth = "initial";
    wrapper.setAttribute("role", "presentation");

    wrapper.setAttribute("data-material-grid-columns", columns);
    wrapper.setAttribute("data-material-grid-gutter", gutter);
  };
}

grid.column = function column(span, offset) {
  return function (element) {
    var gridWrapper = element.parentElement;
    var columns = +gridWrapper.getAttribute("data-material-grid-columns");
    var gutter = gridWrapper.getAttribute("data-material-grid-gutter");

    var parsedGutter = parseGutter(gutter);

    var totalColumns = columns / span;
    var columnWidth = "calc((100% - " + gutter + " * " + totalColumns + ") / " + totalColumns + ")";
    element.style.width = columnWidth;
    var margin = parsedGutter.value / 2 + parsedGutter.units;
    element.style.margin = margin;

    if (offset) {
      var percentage = columns / offset;
      var offsetMargin = "calc(((100% - " + gutter + " * " + percentage + ") / " + percentage + ") + " + 1.5 * parsedGutter.value + parsedGutter.units + ")";
      element.style.marginLeft = offsetMargin;
    }
  };
};

},{"./util":342}],337:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.textField = exports.text = exports.raisedButton = exports.menu = exports.grid = exports.expansionPanel = exports.elevation = exports.color = exports.card = exports.background = undefined;

var _background = require("./background");

var _background2 = _interopRequireDefault(_background);

var _card = require("./card");

var _card2 = _interopRequireDefault(_card);

var _color = require("./color");

var _color2 = _interopRequireDefault(_color);

var _elevation = require("./elevation");

var _elevation2 = _interopRequireDefault(_elevation);

var _expansionPanel = require("./expansion-panel");

var _expansionPanel2 = _interopRequireDefault(_expansionPanel);

var _grid = require("./grid");

var _grid2 = _interopRequireDefault(_grid);

var _menu = require("./menu");

var _menu2 = _interopRequireDefault(_menu);

var _raisedButton = require("./raised-button");

var _raisedButton2 = _interopRequireDefault(_raisedButton);

var _text = require("./text");

var _text2 = _interopRequireDefault(_text);

var _textField = require("./text-field");

var _textField2 = _interopRequireDefault(_textField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.background = _background2.default;
exports.card = _card2.default;
exports.color = _color2.default;
exports.elevation = _elevation2.default;
exports.expansionPanel = _expansionPanel2.default;
exports.grid = _grid2.default;
exports.menu = _menu2.default;
exports.raisedButton = _raisedButton2.default;
exports.text = _text2.default;
exports.textField = _textField2.default;

},{"./background":330,"./card":331,"./color":333,"./elevation":334,"./expansion-panel":335,"./grid":336,"./menu":338,"./raised-button":339,"./text":341,"./text-field":340}],338:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = menu;

var _jsuaStyle = require("@lynx-json/jsua-style");

var _elevation = require("./elevation");

var _elevation2 = _interopRequireDefault(_elevation);

var _background = require("./background");

var _background2 = _interopRequireDefault(_background);

var _text = require("./text");

var _text2 = _interopRequireDefault(_text);

var _util = require("./util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var keys = {
  escape: 27,
  spaceBar: 32
};

function menu(options) {
  var textColor = (0, _util.getTextColor)(options);
  var opacity = (0, _util.getPrimaryTextOpacity)(textColor);

  return function (element) {
    var innerHTML = "\n      <div role=\"presentation\">\n        <div data-jsua-style-slot=\"header\" role=\"presentation\"></div>\n        <div data-jsua-style-slot=\"toggle\" role=\"presentation\"><i class=\"material-icons\">arrow_drop_down</i></div>\n      </div>\n      <div role=\"presentation\">\n        <div data-jsua-style-slot=\"content\" role=\"presentation\"></div>\n      </div>\n    ";

    (0, _jsuaStyle.query)(element).each([(0, _jsuaStyle.component)("material-menu", innerHTML), function (el) {
      return el.style.position = "relative";
    }, (0, _jsuaStyle.on)("focusout", function () {
      return element.materialClose();
    }), (0, _jsuaStyle.on)("keyup", function (el, evt) {
      if (evt.keyCode === keys.escape) {
        element.materialClose();
      }

      if (evt.keyCode === keys.spaceBar) {
        element.materialOpen();
      }
    })]);

    var menuHeader = element.firstElementChild;
    var menu = element.lastElementChild;
    var contentContainer = menu.firstElementChild;

    var state = options && options.state || "closed";

    var closedStyle = [function (el) {
      return el.style.maxHeight = "0px";
    }, function (el) {
      return el.style.opacity = 0;
    }, function (el) {
      return el.style.paddingTop = 0;
    }, function (el) {
      return el.style.paddingBottom = 0;
    }, _elevation2.default.none()];
    var openStyle = [function (el) {
      return el.style.maxHeight = contentContainer.offsetHeight + 16 + "px";
    }, function (el) {
      return el.style.opacity = 1;
    }, function (el) {
      return el.style.paddingTop = "8px";
    }, function (el) {
      return el.style.paddingBottom = "8px";
    }, _elevation2.default.menu()];

    element.materialOpen = function () {
      (0, _jsuaStyle.query)(menu).each([function () {
        return state = "open";
      }, openStyle]);
    };

    element.materialClose = function () {
      (0, _jsuaStyle.query)(menu).each([function () {
        return state = "closed";
      }, closedStyle]);
    };

    function toggleState() {
      if (state === "open") {
        element.materialClose();
      } else {
        element.materialOpen();
      }
    }

    (0, _jsuaStyle.query)(menuHeader).each([function (el) {
      return el.style.color = textColor;
    }, function (el) {
      return el.style.opacity = opacity;
    }, function (el) {
      return el.style.cursor = "default";
    }, function (el) {
      return el.style.paddingLeft = "24px";
    }, function (el) {
      return el.style.paddingRight = "24px";
    }, function (el) {
      return el.style.minHeight = "48px";
    }, function (el) {
      return el.style.display = "flex";
    }, function (el) {
      return el.style.flexDirection = "row";
    }, function (el) {
      return el.style.flexWrap = "nowrap";
    }, function (el) {
      return el.firstElementChild.style.flexGrow = 1;
    }, function (el) {
      return el.style.alignItems = "center";
    }, (0, _jsuaStyle.on)("click", toggleState)]);

    var toggleSlot = element.firstElementChild.lastElementChild;
    (0, _jsuaStyle.query)(toggleSlot).select("i.material-icons").each([function (el) {
      return el.style.color = textColor;
    }, function (el) {
      return el.style.opacity = opacity;
    }, function (el) {
      return el.style.width = "24px";
    }, function (el) {
      return el.style.height = "24px";
    }, function (el) {
      return el.style.overflow = "hidden";
    }, function (el) {
      return el.style.cursor = "default";
    }, function (el) {
      return el.style.borderRadius = "2px";
    }, function (el) {
      return el.style.border = "1px solid transparent";
    }, (0, _jsuaStyle.on)("mouseover", function (el) {
      return el.style.border = (0, _util.getDividerStyle)();
    }), (0, _jsuaStyle.on)("mouseout", function (el) {
      return el.style.border = "1px solid transparent";
    })]);

    (0, _jsuaStyle.query)(menu).each([function (el) {
      return el.style.color = textColor;
    }, function (el) {
      return el.style.opacity = opacity;
    }, function (el) {
      return el.style.display = "flex";
    }, function (el) {
      return el.style.flexDirection = "column";
    }, function (el) {
      return el.style.minWidth = "168px";
    }, function (el) {
      return el.tabIndex = -1;
    }, function (el) {
      return el.style.borderRadius = "2px";
    }, function (el) {
      return el.style.outline = "none";
    }, function (el) {
      return el.style.position = "absolute";
    }, function (el) {
      return el.style.top = 0;
    }, function (el) {
      return el.style.right = 0;
    }, function (el) {
      return el.style.transition = "all 175ms ease-in-out";
    }, _background2.default.menu(), function (el) {
      return el.style.overflow = "hidden";
    }]);

    element.materialRefresh = function () {
      if (state === "open") {
        element.materialOpen();
      } else {
        element.materialClose();
      }
    };

    element.materialRefresh();
  };
}

function findMenuComponent(element) {
  var menuComponent = (0, _util.findNearestAncestor)(element, "[data-jsua-style-component=material-menu]");

  if (!menuComponent) {
    throw new Error("The element must be contained within a material menu component.");
  }

  return menuComponent;
}

menu.item = function () {
  return function (element) {
    var menuComponent = findMenuComponent(element);

    (0, _jsuaStyle.query)(element).each([(0, _jsuaStyle.on)("mouseover", _background2.default.hover()), (0, _jsuaStyle.on)("mouseout", function (el) {
      return el.style.backgroundColor = "initial";
    }), function (el) {
      return el.style.display = "flex";
    }, function (el) {
      return el.style.flexDirection = "row";
    }, function (el) {
      return el.style.minHeight = "48px";
    }, function (el) {
      return el.style.paddingLeft = "16px";
    }, function (el) {
      return el.style.paddingBottom = "20px";
    }, function (el) {
      return el.style.paddingTop = "12px";
    }, function (el) {
      return el.style.cursor = "default";
    }, (0, _jsuaStyle.on)("click", function () {
      return menuComponent.materialClose();
    })]);

    menuComponent.materialRefresh();
  };
};

menu.header = function () {
  return [_jsuaStyle.component.slot("material-menu", "header")];
};

},{"./background":330,"./elevation":334,"./text":341,"./util":342,"@lynx-json/jsua-style":15}],339:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = raisedButton;

var _jsuaStyle = require("@lynx-json/jsua-style");

var _util = require("./util");

var _elevation = require("./elevation");

var _elevation2 = _interopRequireDefault(_elevation);

var _text = require("./text");

var _text2 = _interopRequireDefault(_text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function raisedButton(options) {
  var textColor = (0, _util.getTextColor)(options);

  return function (element) {
    (0, _jsuaStyle.query)(element).select("*").each(function (el) {
      return el.style.userSelect = "none";
    });

    (0, _jsuaStyle.query)(element).each([function (el) {
      return el.style.cursor = "default";
    }, function (el) {
      return el.style.display = "flex";
    }, function (el) {
      return el.style.flexDirection = "row";
    }, function (el) {
      return el.style.flexWrap = "wrap";
    }, function (el) {
      return el.style.alignItems = "center";
    }, function (el) {
      return el.style.justifyContent = "center";
    }, function (el) {
      return el.style.minHeight = "36px";
    }, function (el) {
      return el.style.minWidth = "88px";
    }, function (el) {
      return el.style.paddingLeft = "16px";
    }, function (el) {
      return el.style.paddingRight = "16px";
    }, function (el) {
      return el.style.borderRadius = "2px";
    }, function (el) {
      return (0, _elevation2.default)(2);
    }, function (el) {
      var touchTarget = document.createElement("div");
      touchTarget.role = "presentation";
      el.parentElement.replaceChild(touchTarget, el);
      touchTarget.addEventListener("click", function () {
        el.click();
      });
      touchTarget.appendChild(el);
      (0, _jsuaStyle.query)(touchTarget).each([_text2.default.button(textColor), function (el) {
        return el.style.display = "flex";
      }, function (el) {
        return el.style.flexDirection = "column";
      }, function (el) {
        return el.style.alignItems = "stretch";
      }, function (el) {
        return el.style.paddingTop = "6px";
      }, function (el) {
        return el.style.paddingBottom = "6px";
      }, (0, _jsuaStyle.on)("mousedown", function (el) {
        return (0, _jsuaStyle.query)(el.firstElementChild).each((0, _elevation2.default)(8));
      }), (0, _jsuaStyle.on)("mouseup", function (el) {
        return (0, _jsuaStyle.query)(el.firstElementChild).each((0, _elevation2.default)(2));
      }), (0, _jsuaStyle.on)("touchstart", function (el) {
        return (0, _jsuaStyle.query)(el.firstElementChild).each((0, _elevation2.default)(8));
      }), (0, _jsuaStyle.on)("touchend", function (el) {
        return (0, _jsuaStyle.query)(el.firstElementChild).each((0, _elevation2.default)(2));
      })]);
    }]);
  };
}

},{"./elevation":334,"./text":341,"./util":342,"@lynx-json/jsua-style":15}],340:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = textField;

var _jsuaStyle = require("@lynx-json/jsua-style");

var _util = require("./util");

var _text = require("./text");

var _text2 = _interopRequireDefault(_text);

var _color = require("./color");

var _color2 = _interopRequireDefault(_color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function floatingLabel(options) {
  var textColor = (0, _util.getTextColor)(options);
  var opacity = (0, _util.getPrimaryTextOpacity)(options);

  return function (inputElement) {
    if (options && options.floatingLabel === false) return;
    if (inputElement.placeholder === undefined) return;

    var restingStyle = [function (el) {
      return el.style.transform = "translateY(8px)";
    }, function (el) {
      return el.style.opacity = 0;
    }];

    var floatingStyle = [function (el) {
      return el.style.transform = "none";
    }, function (el) {
      return el.style.opacity = opacity;
    }];

    var labelStyle = inputElement.value === "" ? restingStyle : floatingStyle;

    (0, _jsuaStyle.query)(inputElement.parentElement).select("[data-material-component~=text-field-label]").each([function (el) {
      return inputElement.placeholder = el.textContent;
    }, labelStyle]);
  };
}

function textField(options) {
  var hasError = false;
  var hasFocus = false;

  function errorState() {
    return [function (el) {
      return el.materialSetError = function () {
        return (0, _util.raiseEvent)(el, "material-error-on");
      };
    }, function (el) {
      return el.materialClearError = function () {
        return (0, _util.raiseEvent)(el, "material-error-off");
      };
    }, updateStateVisualization()];
  }

  function updateStateVisualization() {
    function getLabelColor() {
      if (hasError) return _color2.default.error;
      if (hasFocus) return _color2.default.primary;

      return (0, _util.getTextColor)(options);
    }

    function getBorderStyle() {
      if (hasFocus && hasError) return "2px solid " + _color2.default.error;
      if (hasError) return "1px solid " + _color2.default.error;
      if (hasFocus) return "2px solid " + _color2.default.primary;
      return (0, _util.getDividerStyle)(options);
    }

    return function (el) {
      (0, _jsuaStyle.query)(el).select("[data-material-component~=text-field-label]").each(function (el) {
        return el.style.color = getLabelColor();
      });

      (0, _jsuaStyle.query)(el).select("[data-material-component~=text-field-control]").each([function (el) {
        return el.style.borderBottom = getBorderStyle();
      }, function (el) {
        if (hasFocus) {
          el.style.paddingBottom = "6px";
        } else {
          el.style.paddingBottom = "7px";
        }
      }]);
    };
  }

  return [errorState(), (0, _jsuaStyle.on)("material-error-on", [function (el) {
    return hasError = true;
  }, updateStateVisualization()]), (0, _jsuaStyle.on)("material-error-off", [function (el) {
    return hasError = false;
  }, updateStateVisualization()]), function (el) {
    return el.style.display = "flex";
  }, function (el) {
    return el.style.flexDirection = "column";
  }, function (el) {
    return el.style.alignItems = "stretch";
  }, (0, _jsuaStyle.on)("focusin", [function (el) {
    return hasFocus = true;
  }, updateStateVisualization()]), (0, _jsuaStyle.on)("focusout", [function (el) {
    return hasFocus = false;
  }, updateStateVisualization()])];
}

textField.label = function (options) {
  return [function (el) {
    return _text2.default.caption(el, options);
  }, function (el) {
    return el.style.marginTop = "16px";
  }, function (el) {
    return el.style.transition = "transform 175ms ease-in-out, opacity 175ms ease-in-out";
  }];
};

textField.control = function (options) {
  return [floatingLabel(options), function (el) {
    return el.style.marginTop = "8px";
  }, function (el) {
    return el.style.marginBottom = "8px";
  }, (0, _jsuaStyle.on)("input", floatingLabel(options))];
};

textField.singleLine = function (options) {
  return [textField.control(options), function (el) {
    return el.style.backgroundColor = "inherit";
  }, function (el) {
    return _text2.default.input(el, options);
  }, function (el) {
    return el.style.outline = "none";
  }, function (el) {
    return el.style.border = "none";
  }, function (el) {
    return el.style.borderBottom = (0, _util.getDividerStyle)(options);
  }, function (el) {
    return el.style.borderRadius = "0px";
  }, function (el) {
    return el.style.paddingBottom = "7px";
  } // 8px - 1px border
  ];
};

textField.dropdown = function (options) {
  return [textField.control(options), function (el) {
    return el.style.backgroundColor = "inherit";
  }, function (el) {
    return _text2.default.input(el, options);
  }, function (el) {
    return el.style.outline = "none";
  }, function (el) {
    return el.style.border = "none";
  }, function (el) {
    return el.style.borderBottom = (0, _util.getDividerStyle)(options);
  }, function (el) {
    return el.style.borderRadius = "0px";
  }, function (el) {
    return el.style.paddingBottom = "7px";
  }, // 8px - 1px border,
  function (el) {
    return el.style.WebkitAppearance = "none";
  }, function (el) {
    return el.style.MozAppearance = "none";
  }, function (el) {
    return el.style.appearance = "none";
  }, function (el) {
    return el.style.backgroundImage = "url(data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMDAwMDAwIiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik03IDEwbDUgNSA1LTV6Ii8+CiAgICA8cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+Cjwvc3ZnPg==)";
  }, function (el) {
    return el.style.backgroundPosition = "right";
  }, function (el) {
    return el.style.backgroundRepeat = "no-repeat";
  }, function (el) {
    return el.style.backgroundSize = "24px 24px";
  }];
};

},{"./color":333,"./text":341,"./util":342,"@lynx-json/jsua-style":15}],341:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = text;

var _util = require("./util");

function text(color, opacity) {
  color = color || (0, _util.getTextColor)();
  opacity = opacity || (0, _util.getPrimaryTextOpacity)(color);

  return [function (el) {
    return el.style.fontFamily = "Roboto, sans-serif";
  }, function (el) {
    return el.style.fontWeight = "400";
  }, function (el) {
    return el.style.fontSize = "14px";
  }, function (el) {
    return el.style.color = color;
  }, function (el) {
    return el.style.opacity = opacity;
  }];
}

text.display4 = function display4(color, opacity) {
  color = color || (0, _util.getTextColor)();
  opacity = opacity || (0, _util.getSecondaryTextOpacity)(color);

  return [text(color, opacity), function (el) {
    return el.style.fontWeight = "300";
  }, function (el) {
    return el.style.fontSize = "112px";
  }];
};

text.display3 = function display3(color, opacity) {
  color = color || (0, _util.getTextColor)();
  opacity = opacity || (0, _util.getSecondaryTextOpacity)(color);

  return [text(color, opacity), function (el) {
    return el.style.fontSize = "56px";
  }];
};

text.display2 = function display2(color, opacity) {
  color = color || (0, _util.getTextColor)();
  opacity = opacity || (0, _util.getSecondaryTextOpacity)(color);

  return [text(color, opacity), function (el) {
    return el.style.fontSize = "45px";
  }, function (el) {
    return el.style.lineHeight = "48px";
  }];
};

text.display = function display(color, opacity) {
  color = color || (0, _util.getTextColor)();
  opacity = opacity || (0, _util.getSecondaryTextOpacity)(color);

  return [text(color, opacity), function (el) {
    return el.style.fontSize = "34px";
  }, function (el) {
    return el.style.lineHeight = "40px";
  }];
};

text.headline = function headline(color, opacity) {
  return [text(color, opacity), function (el) {
    return el.style.fontSize = "24px";
  }, function (el) {
    return el.style.lineHeight = "32px";
  }];
};

text.title = function title(color, opacity) {
  return [text(color, opacity), function (el) {
    return el.style.fontWeight = "500";
  }, function (el) {
    return el.style.fontSize = "20px";
  }];
};

text.subheading2 = function subheading2(color, opacity) {
  return [text(color, opacity), function (el) {
    return el.style.fontSize = "16px";
  }, function (el) {
    return el.style.lineHeight = "28px";
  }];
};

text.subheading = function subheading(color, opacity) {
  return [text(color, opacity), function (el) {
    return el.style.fontSize = "16px";
  }, function (el) {
    return el.style.lineHeight = "24px";
  }];
};

text.body2 = function body2(color, opacity) {
  return [text(color, opacity), function (el) {
    return el.style.fontWeight = "500";
  }, function (el) {
    return el.style.fontSize = "14px";
  }, function (el) {
    return el.style.lineHeight = "28px";
  }];
};

text.body = function body(color, opacity) {
  return [text(color, opacity), function (el) {
    return el.style.fontSize = "14px";
  }, function (el) {
    return el.style.lineHeight = "24px";
  }];
};

text.caption = function caption(color, opacity) {
  return [text(color, opacity), function (el) {
    return el.style.fontSize = "12px";
  }, function (el) {
    return el.style.lineHeight = "14px";
  }];
};

text.button = function button(color, opacity) {
  return [text(color, opacity), function (el) {
    return el.style.fontSize = "14px";
  }, function (el) {
    return el.style.fontWeight = "500";
  }, function (el) {
    return el.style.textTransform = "uppercase";
  }];
};

text.input = function input(color, opacity) {
  return [text(color, opacity), function (el) {
    return el.style.fontSize = "16px";
  }, function (el) {
    return el.style.lineHeight = "18px";
  }];
};

},{"./util":342}],342:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTheme = getTheme;
exports.getDividerStyle = getDividerStyle;
exports.getTextColor = getTextColor;
exports.getPrimaryTextOpacity = getPrimaryTextOpacity;
exports.getSecondaryTextOpacity = getSecondaryTextOpacity;
exports.getDisabledTextOpacity = getDisabledTextOpacity;
exports.wrapChildren = wrapChildren;
exports.clearChildren = clearChildren;
exports.findNearestAncestor = findNearestAncestor;
exports.raiseEvent = raiseEvent;

var _color = require("./color");

var _color2 = _interopRequireDefault(_color);

var _jsuaStyle = require("@lynx-json/jsua-style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var lightTextOpacity = {
  primary: 1,
  secondary: 0.7,
  disabled: 0.5,
  divider: 0.12
};

var darkTextOpacity = {
  primary: 0.87,
  secondary: 0.54,
  disabled: 0.38,
  divider: 0.12
};

function getTheme(theme) {
  if (theme) return _color2.default.getThemeColors(theme);
  return _color2.default.getThemeColors(_color2.default.theme);
}

function getDividerStyle(textColor) {
  if (textColor === "white") {
    return "1px solid rgba(255, 255, 255, .12)";
  } else {
    return "1px solid rgba(0, 0, 0, .12)";
  }
}

function getTextColor(options) {
  if (options && options.textColor) return options.textColor;
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

function getDisabledTextOpacity(color) {
  if (color === "white") return lightTextOpacity.disabled;
  return darkTextOpacity.disabled;
}

function wrapChildren(element) {
  var wrapper = document.createElement("div");
  wrapper.setAttribute("role", "presentation");

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

function matches(element, selector) {
  if (typeof selector === "function") return selector(element);
  return element.matches(selector);
}

function clearChildren(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

function findNearestAncestor(element, selector) {
  var current = element.parentElement;

  while (current !== null && current !== undefined) {
    if (matches(current, selector)) return current;
    current = current.parentElement;
  }

  return null;
}

function raiseEvent(element, name, bubble, cancelable) {
  var evt = document.createEvent("Event");
  evt.initEvent(name, bubble, cancelable);
  element.dispatchEvent(evt);
}

},{"./color":333,"@lynx-json/jsua-style":15}]},{},[6])(6)
});