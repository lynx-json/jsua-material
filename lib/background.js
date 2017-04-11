"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = background;
// material.background(el, { color: "Indigo", shade: 700 });
// import color from "./color";

function background(element, options) {
  element.style.backgroundColor = options.color;
}

background.primary = function primary(element, options) {
  // element.style.backgroundColor = color.primary;
};