"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = card;

var _jsuaQuery = require("jsua-query");

var _elevation = require("./elevation");

var _elevation2 = _interopRequireDefault(_elevation);

var _background = require("./background");

var _background2 = _interopRequireDefault(_background);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function card() {
  return [_elevation2.default.card(), _background2.default.card(), (0, _jsuaQuery.on)("mouseover", _elevation2.default.cardHover()), (0, _jsuaQuery.on)("mouseout", _elevation2.default.card()), function (el) {
    return el.style.display = "flex";
  }, function (el) {
    return el.style.flexDirection = "column";
  }, function (el) {
    return el.style.borderRadius = "2px";
  }];
}