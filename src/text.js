// material.background(el, { color: "Indigo", shade: 700 });
import color from "./color";
import * as colorPalette from "./color-palette";
import {
  getTheme,
  getTextColor,
  getPrimaryTextOpacity,
  getSecondaryTextOpacity
} from "./util";

export default function text(element, options) {
  var textColor = getTextColor(options);
  var opacity = getPrimaryTextOpacity(textColor);

  options = Object.assign({
    fontFamily: "Roboto, sans-serif",
    fontWeight: "400",
    fontSize: "14px",
    color: textColor,
    opacity: opacity
  }, options);

  element.style.fontFamily = options.fontFamily;
  element.style.fontWeight = options.fontWeight;
  element.style.fontSize = options.fontSize;
  element.style.color = options.color;
  element.style.opacity = options.opacity;

  if (options.lineHeight) {
    element.style.lineHeight = options.lineHeight;
  }
}

text.display4 = function display4(element, options) {
  var textColor = getTextColor(options);
  var opacity = getSecondaryTextOpacity(textColor);

  options = Object.assign({
    fontWeight: "300",
    fontSize: "112px",
    color: textColor,
    opacity: opacity
  }, options);

  text(element, options);
};

text.display3 = function display3(element, options) {
  var textColor = getTextColor(options);
  var opacity = getSecondaryTextOpacity(textColor);

  options = Object.assign({
    fontSize: "56px",
    color: textColor,
    opacity: opacity
  }, options);

  text(element, options);
};

text.display2 = function display2(element, options) {
  var textColor = getTextColor(options);
  var opacity = getSecondaryTextOpacity(textColor);

  options = Object.assign({
    fontSize: "45px",
    color: textColor,
    opacity: opacity,
    lineHeight: "48px"
  }, options);

  text(element, options);
};

text.display = function display(element, options) {
  var textColor = getTextColor(options);
  var opacity = getSecondaryTextOpacity(textColor);

  options = Object.assign({
    fontSize: "34px",
    color: textColor,
    opacity: opacity,
    lineHeight: "40px"
  }, options);

  text(element, options);
};

text.headline = function headline(element, options) {
  options = Object.assign({
    fontSize: "24px",
    lineHeight: "32px"
  }, options);

  text(element, options);
};

text.title = function title(element, options) {
  options = Object.assign({
    fontWeight: "500",
    fontSize: "20px"
  }, options);

  text(element, options);
};

text.subheading2 = function subheading2(element, options) {
  // Desktop font size is 15px per the spec. Ignoring for now.
  options = Object.assign({
    fontSize: "16px",
    lineHeight: "28px"
  }, options);

  text(element, options);
};

text.subheading = function subheading(element, options) {
  // Desktop font size is 15px per the spec. Ignoring for now.
  options = Object.assign({
    fontSize: "16px",
    lineHeight: "24px"
  }, options);

  text(element, options);
};

text.body2 = function body2(element, options) {
  // Desktop font size is 13px per the spec. Ignoring for now.
  options = Object.assign({
    fontWeight: "500",
    fontSize: "14px",
    lineHeight: "28px"
  }, options);

  text(element, options);
};

text.body = function body(element, options) {
  // Desktop font size is 13px per the spec. Ignoring for now.
  options = Object.assign({
    fontSize: "14px",
    lineHeight: "24px"
  }, options);

  text(element, options);
};

text.caption = function caption(element, options) {
  options = Object.assign({
    fontSize: "12px",
    lineHeight: "14px"
  }, options);

  text(element, options);
};

text.button = function button(element, options) {
  options = Object.assign({
    fontSize: "14px",
    fontWeight: "500"
  }, options);

  text(element, options);
  element.style.textTransform = "uppercase";
};

text.input = function input(element, options) {
  options = Object.assign({
    fontSize: "16px",
    lineHeight: "18px"
  }, options);

  text(element, options);
}
