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

var theme = lightTheme;
var primary = theme[1];
var accent = theme[0];
var error = colorPalette.getColor("Red");

export const colorScheme = {
  get theme() {
    return theme;
  },
  set theme(val) {
    if (val === "light") {
      theme = lightTheme;
    } else if (val === "dark") {
      theme = darkTheme;
    } else {
      throw new Error("Theme must be either 'light' or 'dark'");
    }
  },
  get primary() {
    return primary;
  },
  set primary(val) {
    primary = colorPalette.getColor(val);
  },
  get accent() {
    return accent;
  },
  set accent(val) {
    accent = colorPalette.getColor(val);
  },
  get error() {
    return error;
  },
  set error(val) {
    error = colorPalette.getColor(val);
  }
};
