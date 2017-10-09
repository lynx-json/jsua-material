import * as colorPalette from "./color-palette";
import {
  rgba
} from "./util";

export default function background(options = {}) {
  options.opacity = options.opacity || 1;
  return el => el.style.backgroundColor = rgba(colorPalette.getColor(options.backgroundColor, options.shade), options.opacity);
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
  options.backgroundColor = options.backgroundColor || colorPalette.getThemeColors(options.theme)[0];
  return background(options);
};

background.appBar = function (options = {}) {
  options.theme = options.theme || "light";
  options.backgroundColor = options.backgroundColor || colorPalette.getThemeColors(options.theme)[1];
  return background(options);
};

background.main = function (options = {}) {
  options.theme = options.theme || "light";
  options.backgroundColor = options.backgroundColor || colorPalette.getThemeColors(options.theme)[2];
  return background(options);
};

background.card = function (options = {}) {
  options.theme = options.theme || "light";
  options.backgroundColor = options.backgroundColor || colorPalette.getThemeColors(options.theme)[3];
  return background(options);
};

background.menu = function (options = {}) {
  options.theme = options.theme || "light";
  options.backgroundColor = options.backgroundColor || colorPalette.getThemeColors(options.theme)[3];
  return background(options);
};

background.dialog = background.card;
background.hover = background.appBar;
