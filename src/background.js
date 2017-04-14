// material.background(el, { color: "Indigo", shade: 700 });
import color from "./color";
import * as colorPalette from "./color-palette";
import {
  getTheme
} from "./util";

export default function background(element, options) {
  var theme = getTheme(options);
  options = Object.assign({
    color: theme[2]
  }, options);

  element.style.backgroundColor = colorPalette.getColor(options.color, options.shade);
}

background.primary = function primary(element, options) {
  options = Object.assign({
    color: color.primary
  }, options);

  background(element, options);
};

background.accent = function accent(element, options) {
  options = Object.assign({
    color: color.secondary,
    shade: "A200"
  }, options);

  background(element, options);
};

background.statusBar = function (element, options) {
  var theme = getTheme(options);

  options = Object.assign({
    color: theme[0]
  }, options);

  background(element, options);
};

background.appBar = function (element, options) {
  var theme = getTheme(options);

  options = Object.assign({
    color: theme[1]
  }, options);

  background(element, options);
};

background.card = function (element, options) {
  var theme = getTheme(options);

  options = Object.assign({
    color: theme[3]
  }, options);

  background(element, options);
};

background.menu = function (element, options) {
  var theme = getTheme(options);

  options = Object.assign({
    color: theme[3]
  }, options);

  background(element, options);
};

background.dialog = background.card;
background.hover = background.appBar;
