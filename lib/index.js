"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.colorScheme = exports.textField = exports.expansionPanel = exports.card = exports.appBar = exports.buttons = exports.responsiveUI = exports.elevation = exports.colorPalette = exports.text = exports.backgroundColor = exports.layout = undefined;

var _text = require("./text");

var text = _interopRequireWildcard(_text);

var _colorPalette = require("./color-palette");

var colorPalette = _interopRequireWildcard(_colorPalette);

var _colorScheme = require("./color-scheme");

var _elevation = require("./elevation");

var _elevation2 = _interopRequireDefault(_elevation);

var _layout = require("./layout");

var layout = _interopRequireWildcard(_layout);

var _responsiveUi = require("./responsive-ui");

var _responsiveUi2 = _interopRequireDefault(_responsiveUi);

var _buttons = require("./buttons");

var buttons = _interopRequireWildcard(_buttons);

var _appBar = require("./app-bar");

var _card = require("./card");

var _expansionPanel = require("./expansion-panel");

var _textField = require("./text-field");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function backgroundColor(color) {
  return function (el) {
    return el.style.backgroundColor = color;
  };
}

exports.layout = layout;
exports.backgroundColor = backgroundColor;
exports.text = text;
exports.colorPalette = colorPalette;
exports.elevation = _elevation2.default;
exports.responsiveUI = _responsiveUi2.default;
exports.buttons = buttons;
exports.appBar = _appBar.appBar;
exports.card = _card.card;
exports.expansionPanel = _expansionPanel.expansionPanel;
exports.textField = _textField.textField;
exports.colorScheme = _colorScheme.colorScheme;