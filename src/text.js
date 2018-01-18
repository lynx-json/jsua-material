import { filter, filters } from "@lynx-json/jsua-style";
import * as colorPalette from "./color-palette";
import {
  rgba
} from "./util";

export default function text(options = {}) {
  if (options.color || options.theme) {
    if (options.color) {
      options.opacity = options.opacity || 1;
    }

    options.theme = options.theme;
    options.color = options.color || (options.theme === "light" ? "#000000" : "#FFFFFF");
    options.opacity = options.opacity || (options.theme === "light" ? 1 : 0.87);
  }

  return [
    el => el.style.fontFamily = "Roboto, sans-serif",
    el => el.style.fontWeight = "400",
    el => el.style.fontSize = "14px",
    filter(() => !!options.color, function (el) {
      var color = options.color;

      // TODO: Remove. Obsolete.
      if (typeof color === 'function') {
        color = options.color();
      }
      color = colorPalette.getColor(color);
      el.style.color = rgba(color, options.opacity);
    })
  ];
}

text.display4 = function display4(options = {}) {
  options.opacity = options.opacity || (options.theme === "light" ? 0.7 : 0.54);

  return [
    text(options),
    el => el.style.fontWeight = "300",
    el => el.style.fontSize = "112px"
  ];
};

text.display3 = function display3(options = {}) {
  options.opacity = options.opacity || (options.theme === "light" ? 0.7 : 0.54);

  return [
    text(options),
    el => el.style.fontSize = "56px"
  ];
};

text.display2 = function display2(options = {}) {
  options.opacity = options.opacity || (options.theme === "light" ? 0.7 : 0.54);

  return [
    text(options),
    el => el.style.fontSize = "45px",
    el => el.style.lineHeight = "48px"
  ];
};

text.display = function display(options = {}) {
  options.opacity = options.opacity || (options.theme === "light" ? 0.7 : 0.54);

  return [
    text(options),
    el => el.style.fontSize = "34px",
    el => el.style.lineHeight = "40px"
  ];
};

text.headline = function headline(options = {}) {
  return [
    text(options),
    el => el.style.fontSize = "24px",
    el => el.style.lineHeight = "32px"
  ];
};

text.title = function title(options = {}) {
  return [
    text(options),
    el => el.style.fontWeight = "500",
    el => el.style.fontSize = "20px"
  ];
};

text.subheading2 = function subheading2(options = {}) {
  return [
    text(options),
    el => el.style.fontSize = "16px",
    el => el.style.lineHeight = "28px"
  ];
};

text.subheading = function subheading(options = {}) {
  return [
    text(options),
    el => el.style.fontSize = "16px",
    el => el.style.lineHeight = "24px"
  ];
};

text.body2 = function body2(options = {}) {
  return [
    text(options),
    el => el.style.fontWeight = "500",
    el => el.style.fontSize = "14px",
    el => el.style.lineHeight = "28px"
  ];
};

text.body = function body(options = {}) {
  return [
    text(options),
    el => el.style.fontSize = "14px",
    el => el.style.lineHeight = "24px"
  ];
};

text.caption = function caption(options = {}) {
  return [
    text(options),
    el => el.style.fontSize = "12px",
    el => el.style.lineHeight = "14px"
  ];
};

text.button = function button(options = {}) {
  return [
    text(options),
    el => el.style.fontSize = "14px",
    el => el.style.fontWeight = "500",
    el => el.style.textTransform = "uppercase"
  ];
};

text.input = function input(options = {}) {
  return [
    text(options),
    el => el.style.fontSize = "16px",
    el => el.style.lineHeight = "18px"
  ];
};
