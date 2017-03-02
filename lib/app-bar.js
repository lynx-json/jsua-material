"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.appBar = appBar;

var _text = require("./text");

var text = _interopRequireWildcard(_text);

var _jsuaQuery = require("jsua-query");

var _elevation = require("./elevation");

var _elevation2 = _interopRequireDefault(_elevation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function appBar(backgroundColor) {
  return [function (el) {
    return el.style.backgroundColor = backgroundColor;
  }, text.title(backgroundColor), (0, _elevation2.default)(4), function (el) {
    return el.style.height = "56px";
  }, function (el) {
    return el.style.paddingLeft = "16px";
  }, function (el) {
    return el.style.paddingRight = "16px";
  }, function (el) {
    return el.style.display = "flex";
  }, function (el) {
    return el.style.flexDirection = "row";
  }, function (el) {
    return el.style.flexWrap = "nowrap";
  }, function (el) {
    return el.style.alignItems = "center";
  } // 20px below title is per spec. Simplifying for now.
  ];
}