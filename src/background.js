import colorScheme from "./color-scheme";
import {
  getTheme
} from "./util";

export default function background(backgroundColor, shade) {
  return el => el.style.backgroundColor = colorScheme.getColor(backgroundColor, shade);
}

background.primary = function primary(shade) {
  return background(colorScheme.primary, shade);
};

background.accent = function accent(shade) {
  shade = shade || "A200";
  return background(colorScheme.secondary, shade);
};

background.statusBar = function (theme) {
  var themeColors = getTheme(theme);
  return background(themeColors[0]);
};

background.appBar = function (theme) {
  var themeColors = getTheme(theme);
  return background(themeColors[1]);
};

background.main = function (theme) {
  var themeColors = getTheme(theme);
  return background(themeColors[2]);
};

background.card = function (theme) {
  var themeColors = getTheme(theme);
  return background(themeColors[3]);
};

background.menu = function (theme) {
  var themeColors = getTheme(theme);
  return background(themeColors[3]);
};

background.dialog = background.card;
background.hover = background.appBar;
