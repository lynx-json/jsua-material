import * as text from  "./text";
import * as colorPalette from "./color-palette";
import elevation from "./elevation";

function backgroundColor(color) {
  return r => r.view.style.backgroundColor = color;
}

export {
  backgroundColor,
  text,
  colorPalette,
  elevation
};
