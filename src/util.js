import colorPalette from "./color-palette";
import {
  query,
  on
} from "@lynx-json/jsua-style";

var lightTextOpacity = {
  primary: 1,
  secondary: 0.7,
  disabled: 0.5,
  divider: 0.12
};

var darkTextOpacity = {
  primary: 0.87,
  secondary: 0.54,
  disabled: 0.38,
  divider: 0.12
};

export function getDividerStyle(textColor) {
  if (textColor === "white") {
    return `1px solid rgba(255, 255, 255, .12)`;
  } else {
    return `1px solid rgba(0, 0, 0, .12)`;
  }
}

// TODO: Refactor and remove.
export function getTextColor(options = {}) {
  if (options.color) return options.color;

  if (options.theme === "dark") return "white";

  return "black";
}

export function getPrimaryTextOpacity(color) {
  if (color === "white") return lightTextOpacity.primary;
  return darkTextOpacity.primary;
}

export function getSecondaryTextOpacity(color) {
  if (color === "white") return lightTextOpacity.secondary;
  return darkTextOpacity.secondary;
}

export function getDisabledTextOpacity(color) {
  if (color === "white") return lightTextOpacity.disabled;
  return darkTextOpacity.disabled;
}

export function wrapChildren(element) {
  var wrapper = document.createElement("div");
  wrapper.setAttribute("role", "presentation");

  var children = [];
  for (var i = 0, max = element.childNodes.length; i < max; i++) {
    children.push(element.childNodes[i]);
  }

  children.forEach(function (child) {
    wrapper.appendChild(child);
  });

  element.appendChild(wrapper);
  return wrapper;
}

function matches(element, selector) {
  if (typeof selector === "function") return selector(element);
  return element.matches(selector);
}

export function clearChildren(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

export function findNearestAncestor(element, selector) {
  var current = element.parentElement;

  while (current !== null && current !== undefined) {
    if (matches(current, selector)) return current;
    current = current.parentElement;
  }

  return null;
}

export function raiseEvent(element, name, bubble, cancelable) {
  var evt = document.createEvent("Event");
  evt.initEvent(name, bubble, cancelable);
  element.dispatchEvent(evt);
}

export function rgba(color, opacity) {
  color = parseInt(color.slice(1), 16);
  var r = color >> 16;
  var g = color >> 8 & 0x00FF;
  var b = color & 0x0000ff;

  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}
