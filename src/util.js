import colorPalette from "./color-palette";
import {
  query,
  on
} from "@lynx-json/jsua-style";

export function getDividerStyle(textColor) {
  if (textColor === "white") {
    return `1px solid rgba(255, 255, 255, .12)`;
  } else {
    return `1px solid rgba(0, 0, 0, .12)`;
  }
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
