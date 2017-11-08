import * as colorPalette from "./color-palette";

import {
  rgba
} from "./util";

function getDividerColor(options) {
  var color = options.color;

  if (typeof color === 'function') {
    color = color();
  }

  if (color) {
    color = colorPalette.getColor(color);
  }

  options.theme = options.theme || "light";
  color = color || (options.theme === "light" ? "#000000" : "#FFFFFF");
  options.opacity = options.opacity || 0.12;

  return rgba(color, options.opacity);
}

export default function border(options = {}) {
  return el => el.style.border = `${options.width || '1px'} solid ${getDividerColor(options)}`;
}

border.top = function topBorder(options = {}) {
  return el => el.style.borderTop = `${options.width || '1px'} solid ${getDividerColor(options)}`;
}

border.bottom = function bottomBorder(options = {}) {
  return el => el.style.borderBottom = `${options.width || '1px'} solid ${getDividerColor(options)}`;
}

border.left = function leftBorder(options = {}) {
  return el => el.style.borderLeft = `${options.width || '1px'} solid ${getDividerColor(options)}`;
}

border.right = function rightBorder(options = {}) {
  return el => el.style.borderRight = `${options.width || '1px'} solid ${getDividerColor(options)}`;
}
