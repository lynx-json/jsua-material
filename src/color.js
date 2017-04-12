import * as colorPalette from "./color-palette";

var lightTheme = [
  colorPalette.getColor("Grey", 300),
  colorPalette.getColor("Grey", 100),
  colorPalette.getColor("Grey", 50),
  colorPalette.getColor("White")
];

var darkTheme = [
  colorPalette.getColor("Black"),
  colorPalette.getColor("Grey", 900),
  colorPalette.getColor("#303030"),
  colorPalette.getColor("Grey", 800)
];

var theme = "light";
var primary = colorPalette.getColor("Indigo");
var secondary = colorPalette.getColor("Amber");

const colorScheme = {
  get primary() {
    return primary;
  },
  set primary(val) {
    primary = colorPalette.getColor(val);
  },
  get secondary() {
    return secondary;
  },
  set secondary(val) {
    secondary = colorPalette.getColor(val);
  },
  get theme() {
    return theme;
  },
  set theme(val) {
    theme = val;
  },
  getThemeColors(theme) {
    if (theme === "light") {
      return lightTheme;
    } else if (theme === "dark") {
      return darkTheme
    } else {
      throw new Error("Theme must be either 'light' or 'dark'");
    }
  },
  getColor(options) {
    return colorPalette.getColor(options.color, options.shade)
  }
}

export default colorScheme;
