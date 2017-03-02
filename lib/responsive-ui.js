"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (element) {
  (0, _jsuaQuery.query)(element).filter(matchMedia("(max-width: 599px)")).each((0, _layout.grid)(4, "16px"));

  (0, _jsuaQuery.query)(element).filter(matchMedia("(min-width: 600px) and (max-width: 839px)")).each((0, _layout.grid)(8, "16px")); // 24px gutter in some circumstances, according to spec. Simplifying for now.

  (0, _jsuaQuery.query)(element).filter(matchMedia("(min-width: 840px)")).each((0, _layout.grid)(12, "24px")); // 16px gutter in some cases, according to spec. Simplifying for now.
};

var _jsuaQuery = require("jsua-query");

var _layout = require("./layout");

function matchMedia(mediaQuery) {
  return function (el) {
    if (window.matchMedia(mediaQuery).matches) return el;
  };
}