import { filter, filters } from "@lynx-json/jsua-style";
import * as colorPalette from "./color-palette";
import {
  rgba
} from "./util";

export default function color(options = {}) {
  if (options.color) {
    options.opacity = options.opacity || 1;
  }

  options.theme = options.theme;
  options.color = options.color || (options.theme === "light" ? "#000000" : "#FFFFFF");
  options.opacity = options.opacity || (options.theme === "light" ? 1 : 0.87);

  return [
    filter(() => !!options.color, function (el) {
      var color = options.color;

      if (typeof color === 'function') {
        color = options.color();
      }
      color = colorPalette.getColor(color, options.shade);
      el.style.color = rgba(color, options.opacity);
    })
  ];
}
