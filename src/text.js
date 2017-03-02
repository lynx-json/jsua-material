import * as colorPalette from "./color-palette";

function primaryText(backgroundColor) {
  var textColor = colorPalette.primaryText(backgroundColor);
  return [
    el => el.style.color = textColor.color,
    el => el.style.opacity = textColor.opacity
  ];
}

function secondaryText(backgroundColor) {
  var textColor = colorPalette.secondaryText(backgroundColor);
  return [
    el => el.style.color = textColor.color,
    el => el.style.opacity = textColor.opacity
  ];
}

export function button(backgroundColor) {
  return [
    el => el.style.fontFamily = "Roboto, sans-serif",
    el => el.style.fontWeight = "500",
    el => el.style.fontSize = "14px",
    el => el.style.textTransform = "uppercase",
    primaryText(backgroundColor)
  ];
}

export function caption(backgroundColor) {
  return [
    el => el.style.fontFamily = "Roboto, sans-serif",
    el => el.style.fontWeight = "400",
    el => el.style.fontSize = "12px",
    secondaryText(backgroundColor)
  ];
}

export function body(backgroundColor, desktop) {
  var fontSize = desktop ? "13px" : "14px";
  return [
    el => el.style.fontFamily = "Roboto, sans-serif",
    el => el.style.fontWeight = "400",
    el => el.style.fontSize = fontSize,
    el => el.style.lineHeight = "20px",
    primaryText(backgroundColor)
  ];
}

export function body2(backgroundColor, desktop) {
  var fontSize = desktop ? "13px" : "14px";
  return [
    el => el.style.fontFamily = "Roboto, sans-serif",
    el => el.style.fontWeight = "400",
    el => el.style.fontSize = fontSize,
    el => el.style.lineHeight = "24px",
    primaryText(backgroundColor)
  ];
}

export function subHeading(backgroundColor, desktop) {
  var fontSize = desktop ? "15px" : "16px";
  return [
    el => el.style.fontFamily = "Roboto, sans-serif",
    el => el.style.fontWeight = "400",
    el => el.style.fontSize = fontSize,
    el => el.style.lineHeight = "24px",
    primaryText(backgroundColor)
  ];
}

export function subHeading2(backgroundColor, desktop) {
  var fontSize = desktop ? "15px" : "16px";
  return [
    el => el.style.fontFamily = "Roboto, sans-serif",
    el => el.style.fontWeight = "400",
    el => el.style.fontSize = fontSize,
    el => el.style.lineHeight = "28px",
    primaryText(backgroundColor)
  ];
}

export function title(backgroundColor) {
  return [
    el => el.style.fontFamily = "Roboto, sans-serif",
    el => el.style.fontWeight = "500",
    el => el.style.fontSize = "20px",
    // el => el.style.lineHeight = "24px",
    primaryText(backgroundColor)
  ];
}

export function headline(backgroundColor) {
  return [
    el => el.style.fontFamily = "Roboto, sans-serif",
    el => el.style.fontWeight = "400",
    el => el.style.fontSize = "24px",
    el => el.style.lineHeight = "32px",
    primaryText(backgroundColor)
  ];
}

export function display(backgroundColor) {
  return [
    el => el.style.fontFamily = "Roboto, sans-serif",
    el => el.style.fontWeight = "400",
    el => el.style.fontSize = "34px",
    el => el.style.lineHeight = "40px",
    secondaryText(backgroundColor)
  ];
}

export function display2(backgroundColor) {
  return [
    el => el.style.fontFamily = "Roboto, sans-serif",
    el => el.style.fontWeight = "400",
    el => el.style.fontSize = "45px",
    el => el.style.lineHeight = "48px",
    secondaryText(backgroundColor)
  ];
}

export function display3(backgroundColor) {
  return [
    el => el.style.fontFamily = "Roboto, sans-serif",
    el => el.style.fontWeight = "400",
    el => el.style.fontSize = "56px",
    secondaryText(backgroundColor)
  ];
}

export function display4(backgroundColor) {
  return [
    el => el.style.fontFamily = "Roboto, sans-serif",
    el => el.style.fontWeight = "400",
    el => el.style.fontSize = "112px",
    secondaryText(backgroundColor)
  ];
}
