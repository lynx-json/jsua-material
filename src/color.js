import { filter, filters } from "@lynx-json/jsua-style";
import * as colorPalette from "./color-palette";
import {
  rgba
} from "./util";

export default function color(options = {}) {
  if (options.color) {
    options.color = colorPalette.getColor(options.color);
    options.opacity = options.opacity || 1;
  }

  options.theme = options.theme;
  options.color = options.color || (options.theme === "light" ? "#000000" : "#FFFFFF");
  options.opacity = options.opacity || (options.theme === "light" ? 1 : 0.87);

  return [
    filter(() => !!options.color, el => el.style.color = rgba(options.color, options.opacity))
  ];
}
