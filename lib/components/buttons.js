"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flat = undefined;

var _util = require("../util");

var flat = exports.flat = [function (el) {
  return (0, _util.wrapChildren)(el);
}, function (el) {
  return console.log(el);
}, function (el) {
  return el.style.paddingTop = "6px";
}, function (el) {
  return el.style.paddingBottom = "6px";
}, function (el) {
  return el.children[0].style.minHeight = "36px";
}, function (el) {
  return el.children[0].style.paddingLeft = "16px";
}, function (el) {
  return el.children[0].style.paddingRight = "16px";
}, function (el) {
  return el.children[0].style.minWidth = "64px";
}];