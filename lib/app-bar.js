"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.appBar = appBar;

var _util = require("./util");

function appBar(options) {
  return [function (el) {
    return el.style.backgroundColor = backgroundColor;
  }, text.title(backgroundColor), elevation(4), function (el) {
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