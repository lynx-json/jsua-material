"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = elevation;

var _elevation = require("./elevation.json");

function shadow(level) {
  return function (el) {
    return el.style.boxShadow = _elevation.shadows[level];
  };
}

function elevation(level) {
  return shadow(level);
}