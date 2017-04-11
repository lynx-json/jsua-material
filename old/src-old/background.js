import { query, on } from "jsua-query";
import * as colorPalette from "./color-palette";
import { colorScheme } from "./color-scheme";

function getTheme(options) {
  options = options || {};
  
  if (options.theme) {
    return (options.theme === "light" ? colorScheme.lightTheme : colorScheme.darkTheme);
  }
  
  return colorScheme.theme;
}

function getShade(options, defaultShade) {
  options = options || {};
  return options.shade || defaultShade;
}

export function statusBar(element, options) {
  var theme = getTheme(options);
  query(element).each(el => el.style.backgroundColor = theme[0]);
};

export function appBar(element, options) {
  var theme = getTheme(options);
  query(element).each(el => el.style.backgroundColor = theme[1]);
};

export function main(element, options) {
  var theme = getTheme(options);
  query(element).each(el => el.style.backgroundColor = theme[2]);
};

export function dialog(element, options) {
  var theme = getTheme(options);
  query(element).each(el => el.style.backgroundColor = theme[3]);
};

export function card(element, options) {
  var theme = getTheme(options);
  query(element).each(el => el.style.backgroundColor = theme[3]);
};

export function accent(element, options) {
  var shade = getShade(options, "A200");
  var color = colorPalette.getColor(colorScheme.accent, shade);
  query(element).each(el => el.style.backgroundColor = color);
};

export function primary(element, options) {
  var shade = getShade(options, 500);
  var color = colorPalette.getColor(colorScheme.primary, shade);
  query(element).each(el => el.style.backgroundColor = color);
};
