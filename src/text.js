import * as colorPalette from "./color-palette";

function primaryText(backgroundColor) {
  var textColor = colorPalette.primaryText(backgroundColor);
  return [
    r => r.view.style.color = textColor.color,
    r => r.view.style.opacity = textColor.opacity
  ];
}

function secondaryText(backgroundColor) {
  var textColor = colorPalette.secondaryText(backgroundColor);
  return [
    r => r.view.style.color = textColor.color,
    r => r.view.style.opacity = textColor.opacity
  ];
}

export function button(backgroundColor) {
  return [
    r => r.view.style.fontFamily = "Roboto, sans-serif",
    r => r.view.style.fontWeight = "500",
    r => r.view.style.fontSize = "14px",
    r => r.view.style.textTransform = "uppercase",
    primaryText(backgroundColor)
  ];
}

export function caption(backgroundColor) {
  return [
    r => r.view.style.fontFamily = "Roboto, sans-serif",
    r => r.view.style.fontWeight = "400",
    r => r.view.style.fontSize = "12px",
    secondaryText(backgroundColor)
  ];
}

export function body(backgroundColor, desktop) {
  var fontSize = desktop ? "13px" : "14px";
  return [
    r => r.view.style.fontFamily = "Roboto, sans-serif",
    r => r.view.style.fontWeight = "400",
    r => r.view.style.fontSize = fontSize,
    r => r.view.style.lineHeight = "20px",
    primaryText(backgroundColor)
  ];
}

export function body2(backgroundColor, desktop) {
  var fontSize = desktop ? "13px" : "14px";
  return [
    r => r.view.style.fontFamily = "Roboto, sans-serif",
    r => r.view.style.fontWeight = "400",
    r => r.view.style.fontSize = fontSize,
    r => r.view.style.lineHeight = "24px",
    primaryText(backgroundColor)
  ];
}

export function subHeading(backgroundColor, desktop) {
  var fontSize = desktop ? "15px" : "16px";
  return [
    r => r.view.style.fontFamily = "Roboto, sans-serif",
    r => r.view.style.fontWeight = "400",
    r => r.view.style.fontSize = fontSize,
    r => r.view.style.lineHeight = "24px",
    primaryText(backgroundColor)
  ];
}

export function subHeading2(backgroundColor, desktop) {
  var fontSize = desktop ? "15px" : "16px";
  return [
    r => r.view.style.fontFamily = "Roboto, sans-serif",
    r => r.view.style.fontWeight = "400",
    r => r.view.style.fontSize = fontSize,
    r => r.view.style.lineHeight = "28px",
    primaryText(backgroundColor)
  ];
}

export function title(backgroundColor) {
  return [
    r => r.view.style.fontFamily = "Roboto, sans-serif",
    r => r.view.style.fontWeight = "500",
    r => r.view.style.fontSize = "20px",
    // r => r.view.style.lineHeight = "24px",
    primaryText(backgroundColor)
  ];
}

export function headline(backgroundColor) {
  return [
    r => r.view.style.fontFamily = "Roboto, sans-serif",
    r => r.view.style.fontWeight = "400",
    r => r.view.style.fontSize = "24px",
    r => r.view.style.lineHeight = "32px",
    primaryText(backgroundColor)
  ];
}

export function display(backgroundColor) {
  return [
    r => r.view.style.fontFamily = "Roboto, sans-serif",
    r => r.view.style.fontWeight = "400",
    r => r.view.style.fontSize = "34px",
    r => r.view.style.lineHeight = "40px",
    secondaryText(backgroundColor)
  ];
}

export function display2(backgroundColor) {
  return [
    r => r.view.style.fontFamily = "Roboto, sans-serif",
    r => r.view.style.fontWeight = "400",
    r => r.view.style.fontSize = "45px",
    r => r.view.style.lineHeight = "48px",
    secondaryText(backgroundColor)
  ];
}

export function display3(backgroundColor) {
  return [
    r => r.view.style.fontFamily = "Roboto, sans-serif",
    r => r.view.style.fontWeight = "400",
    r => r.view.style.fontSize = "56px",
    secondaryText(backgroundColor)
  ];
}

export function display4(backgroundColor) {
  return [
    r => r.view.style.fontFamily = "Roboto, sans-serif",
    r => r.view.style.fontWeight = "400",
    r => r.view.style.fontSize = "112px",
    secondaryText(backgroundColor)
  ];
}
