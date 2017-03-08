import * as text from  "./text";
import * as colorPalette from "./color-palette";
import { colorScheme } from "./color-scheme";
import elevation from "./elevation";
import * as layout from "./layout";
import responsiveUI from "./responsive-ui";
import * as buttons from "./buttons";
import { appBar } from "./app-bar";
import { card } from "./card";
import { expansionPanel } from "./expansion-panel";
import { textField } from "./text-field";

function backgroundColor(color) {
  return el => el.style.backgroundColor = color;
}

export {
  layout,
  backgroundColor,
  text,
  colorPalette,
  elevation,
  responsiveUI,
  buttons,
  appBar,
  card,
  expansionPanel,
  textField,
  colorScheme
};
