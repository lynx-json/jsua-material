import {
  query,
  on
} from "jsua-query";
import * as colorPalette from "./color-palette";
import {
  colorScheme
} from "./color-scheme";

var primaryCache = {};
var secondaryCache = {};

function getTheme(options) {
  options = options || {};

  if (options.theme) {
    return (options.theme === "light" ? colorScheme.lightTheme : colorScheme.darkTheme);
  }

  return colorScheme.theme;
}

function primaryText(backgroundColor) {
  var textColor = primaryCache[backgroundColor] || colorPalette.primaryText(backgroundColor);
  primaryCache[backgroundColor] = textColor;

  return [
    el => el.style.color = textColor.color,
    el => el.style.opacity = textColor.opacity
  ];
}

function secondaryText(backgroundColor) {
  var textColor = secondaryCache[backgroundColor] || colorPalette.secondaryText(backgroundColor);
  secondaryCache[backgroundColor] = textColor;
  return [
    el => el.style.color = textColor.color,
    el => el.style.opacity = textColor.opacity
  ];
}

export function button(element, options) {
  options = options || {};
  var backgroundColor = options.backgroundColor || getTheme(options)[2];

  query(element).each([
    el => el.style.fontFamily = "Roboto, sans-serif",
    el => el.style.fontWeight = "500",
    el => el.style.fontSize = "14px",
    el => el.style.textTransform = "uppercase",
    primaryText(backgroundColor)
  ]);
}

export function caption(element, options) {
  options = options || {};
  var backgroundColor = options.backgroundColor || getTheme(options)[2];

  query(element).each([
    el => el.style.fontFamily = "Roboto, sans-serif",
    el => el.style.fontWeight = "400",
    el => el.style.fontSize = "12px",
    el => el.style.lineHeight = "14px",
    secondaryText(backgroundColor)
  ]);
}

export function body(element, options) {
  options = options || {};
  var fontSize = options.desktop ? "13px" : "14px";
  var backgroundColor = options.backgroundColor || getTheme(options)[2];

  query(element).each([
    el => el.style.fontFamily = "Roboto, sans-serif",
    el => el.style.fontWeight = "400",
    el => el.style.fontSize = fontSize,
    el => el.style.lineHeight = "20px",
    primaryText(backgroundColor)
  ]);
}

export function body2(element, options) {
  options = options || {};
  var fontSize = options.desktop ? "13px" : "14px";
  var backgroundColor = options.backgroundColor || getTheme(options)[2];

  query(element).each([
    el => el.style.fontFamily = "Roboto, sans-serif",
    el => el.style.fontWeight = "400",
    el => el.style.fontSize = fontSize,
    el => el.style.lineHeight = "24px",
    primaryText(backgroundColor)
  ]);
}

export function subHeading2(element, options) {
  options = options || {};
  var fontSize = options.desktop ? "15px" : "16px";
  var backgroundColor = options.backgroundColor || getTheme(options)[2];

  query(element).each([
    el => el.style.fontFamily = "Roboto, sans-serif",
    el => el.style.fontWeight = "400",
    el => el.style.fontSize = fontSize,
    el => el.style.lineHeight = "28px",
    primaryText(backgroundColor)
  ]);
}

export function subHeading(element, options) {
  options = options || {};
  var fontSize = options.desktop ? "15px" : "16px";
  var backgroundColor = options.backgroundColor || getTheme(options)[2];

  query(element).each([
    el => el.style.fontFamily = "Roboto, sans-serif",
    el => el.style.fontWeight = "400",
    el => el.style.fontSize = fontSize,
    el => el.style.lineHeight = "24px",
    primaryText(backgroundColor)
  ]);
}

export function title(element, options) {
  options = options || {};
  var backgroundColor = options.backgroundColor || getTheme(options)[2];

  query(element).each([
    el => el.style.fontFamily = "Roboto, sans-serif",
    el => el.style.fontWeight = "500",
    el => el.style.fontSize = "20px",
    primaryText(backgroundColor)
  ]);
}

export function headline(element, options) {
  options = options || {};
  var backgroundColor = options.backgroundColor || getTheme(options)[2];

  query(element).each([
    el => el.style.fontFamily = "Roboto, sans-serif",
    el => el.style.fontWeight = "400",
    el => el.style.fontSize = "24px",
    el => el.style.lineHeight = "32px",
    primaryText(backgroundColor)
  ]);
}

export function display(element, options) {
  options = options || {};
  var backgroundColor = options.backgroundColor || getTheme(options)[2];

  query(element).each([
    el => el.style.fontFamily = "Roboto, sans-serif",
    el => el.style.fontWeight = "400",
    el => el.style.fontSize = "34px",
    el => el.style.lineHeight = "40px",
    secondaryText(backgroundColor)
  ]);
}

export function display2(element, options) {
  options = options || {};
  var backgroundColor = options.backgroundColor || getTheme(options)[2];

  query(element).each([
    el => el.style.fontFamily = "Roboto, sans-serif",
    el => el.style.fontWeight = "400",
    el => el.style.fontSize = "45px",
    el => el.style.lineHeight = "48px",
    secondaryText(backgroundColor)
  ]);
}

export function display3(element, options) {
  options = options || {};
  var backgroundColor = options.backgroundColor || getTheme(options)[2];

  query(element).each([
    el => el.style.fontFamily = "Roboto, sans-serif",
    el => el.style.fontWeight = "400",
    el => el.style.fontSize = "56px",
    secondaryText(backgroundColor)
  ]);
}

export function display4(element, options) {
  options = options || {};
  var backgroundColor = options.backgroundColor || getTheme(options)[2];

  query(element).each([
    el => el.style.fontFamily = "Roboto, sans-serif",
    el => el.style.fontWeight = "400",
    el => el.style.fontSize = "112px",
    secondaryText(backgroundColor)
  ]);
}

export function input(element, options) {
  options = options || {};
  var backgroundColor = options.backgroundColor || getTheme(options)[2];

  query(element).each([
    el => el.style.fontFamily = "Roboto, sans-serif",
    el => el.style.fontWeight = "400",
    el => el.style.fontSize = "16px",
    el => el.style.lineHeight = "18px",
    primaryText(backgroundColor)
  ]);
}
