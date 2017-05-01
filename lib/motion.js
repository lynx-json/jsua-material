"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.show = show;
exports.hide = hide;
// requirements
// content element has no padding
// content element is not resized
// wrapper has maxHeight of the content element's offset height

function show(element) {
  element.style.transition = "max-height 175ms ease-in-out, opacity 175ms ease-in-out";
  element.style.maxHeight = "100px";
  element.style.opacity = 1;
}

function hide(element) {
  element.style.transition = "max-height 175ms ease-in-out, opacity 175ms ease-in-out";
  element.style.maxHeight = "0px";
  element.style.opacity = 0;
}