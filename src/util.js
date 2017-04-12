import color from "./color";

var lightTextOpacity = {
  primary: 1,
  secondary: .7,
  disabled: .5,
  divider: .12
};

var darkTextOpacity = {
  primary: .87,
  secondary: .54,
  disabled: .38,
  divider: .12
};

export function getTheme(options) {
  if (options && options.theme) return color.getThemeColors(options.theme);
  return color.getThemeColors(color.theme);
}

export function getTextColor(options) {
  if (options && options.color) return options.color;

  if (options && options.theme === "light") return "black";
  if (options && options.theme === "dark") return "white";
  if (color.theme === "light") return "black";
  if (color.theme === "dark") return "white";

  throw new Error("Unknown text color");
}

export function getPrimaryTextOpacity(color) {
  if (color === "white") return lightTextOpacity.primary;
  return darkTextOpacity.primary;
}

export function getSecondaryTextOpacity(color) {
  if (color === "white") return lightTextOpacity.secondary;
  return darkTextOpacity.secondary;
}
