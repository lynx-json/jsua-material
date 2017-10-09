import {
  getTextColor,
  getPrimaryTextOpacity,
  getSecondaryTextOpacity,
  rgba
} from "./util";

export default function text(color, opacity) {
  color = color || getTextColor();
  opacity = opacity || getPrimaryTextOpacity(color);

  return [
    el => el.style.fontFamily = "Roboto, sans-serif",
    el => el.style.fontWeight = "400",
    el => el.style.fontSize = "14px",
    el => el.style.color = rgba(color, opacity)
  ];
}

text.display4 = function display4(color, opacity) {
  color = color || getTextColor();
  opacity = opacity || getSecondaryTextOpacity(color);

  return [
    text(color, opacity),
    el => el.style.fontWeight = "300",
    el => el.style.fontSize = "112px"
  ];
};

text.display3 = function display3(color, opacity) {
  color = color || getTextColor();
  opacity = opacity || getSecondaryTextOpacity(color);

  return [
    text(color, opacity),
    el => el.style.fontSize = "56px"
  ];
};

text.display2 = function display2(color, opacity) {
  color = color || getTextColor();
  opacity = opacity || getSecondaryTextOpacity(color);

  return [
    text(color, opacity),
    el => el.style.fontSize = "45px",
    el => el.style.lineHeight = "48px"
  ];
};

text.display = function display(color, opacity) {
  color = color || getTextColor();
  opacity = opacity || getSecondaryTextOpacity(color);

  return [
    text(color, opacity),
    el => el.style.fontSize = "34px",
    el => el.style.lineHeight = "40px"
  ];
};

text.headline = function headline(color, opacity) {
  return [
    text(color, opacity),
    el => el.style.fontSize = "24px",
    el => el.style.lineHeight = "32px"
  ];
};

text.title = function title(color, opacity) {
  return [
    text(color, opacity),
    el => el.style.fontWeight = "500",
    el => el.style.fontSize = "20px"
  ];
};

text.subheading2 = function subheading2(color, opacity) {
  return [
    text(color, opacity),
    el => el.style.fontSize = "16px",
    el => el.style.lineHeight = "28px"
  ];
};

text.subheading = function subheading(color, opacity) {
  return [
    text(color, opacity),
    el => el.style.fontSize = "16px",
    el => el.style.lineHeight = "24px"
  ];
};

text.body2 = function body2(color, opacity) {
  return [
    text(color, opacity),
    el => el.style.fontWeight = "500",
    el => el.style.fontSize = "14px",
    el => el.style.lineHeight = "28px"
  ];
};

text.body = function body(color, opacity) {
  return [
    text(color, opacity),
    el => el.style.fontSize = "14px",
    el => el.style.lineHeight = "24px"
  ];
};

text.caption = function caption(color, opacity) {
  return [
    text(color, opacity),
    el => el.style.fontSize = "12px",
    el => el.style.lineHeight = "14px"
  ];
};

text.button = function button(color, opacity) {
  return [
    text(color, opacity),
    el => el.style.fontSize = "14px",
    el => el.style.fontWeight = "500",
    el => el.style.textTransform = "uppercase"
  ];
};

text.input = function input(color, opacity) {
  return [
    text(color, opacity),
    el => el.style.fontSize = "16px",
    el => el.style.lineHeight = "18px"
  ];
};
