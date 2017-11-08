import * as colorPalette from "./color-palette";
import {
  rgba
} from "./util";

export default function background(options = {}) {
  options.opacity = options.opacity || 1;
  return function (el) {
    var backgroundColor = options.backgroundColor;
    if (typeof options.backgroundColor === 'function') {
      backgroundColor = options.backgroundColor();
    }
    el.style.backgroundColor = rgba(colorPalette.getColor(backgroundColor, options.shade), options.opacity);
  }
}

background.primary = function primary(options = {}) {
  options.shade = options.shade || "500";
  return background(options);
};

background.accent = function accent(options = {}) {
  options.shade = options.shade || "A200";
  return background(options);
};

background.statusBar = function (options = {}) {
  options.theme = options.theme || "light";
  options.backgroundColor = options.backgroundColor || (options.theme === "light" ? colorPalette.getColor("Grey", 300) : colorPalette.getColor("Black"));
  return background(options);
};

background.appBar = function (options = {}) {
  options.theme = options.theme || "light";
  options.backgroundColor = options.backgroundColor || (options.theme === "light" ? colorPalette.getColor("Grey", 100) : colorPalette.getColor("Grey", 900));
  return background(options);
};

background.main = function (options = {}) {
  options.theme = options.theme || "light";
  options.backgroundColor = options.backgroundColor || (options.theme === "light" ? colorPalette.getColor("Grey", 50) : colorPalette.getColor("#303030"));
  return background(options);
};

background.card = function (options = {}) {
  options.theme = options.theme || "light";
  options.backgroundColor = options.backgroundColor || (options.theme === "light" ? colorPalette.getColor("White") : colorPalette.getColor("Grey", 800));
  return background(options);
};

background.menu = background.card;
background.dialog = background.card;
background.hover = background.appBar;
