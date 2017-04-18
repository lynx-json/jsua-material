import {
  query,
  on
} from "jsua-query";
import text from "./text";
import {
  getDividerStyle
} from "./util";
import color from "./color";

export default function textInput(element, options) {
  query(element).each([
    el => el.style.backgroundColor = "inherit",
    el => text.input(el, options),
    el => el.style.outline = "none",
    el => el.style.border = "none",
    el => el.style.borderBottom = getDividerStyle(options),
    el => el.style.paddingBottom = "7px", // 8px - 1px border
    on("focusin", [
      el => el.style.borderBottom = "2px solid " + color.secondary,
      el => el.style.paddingBottom = "6px"
    ]),
    on("focusout", [
      el => el.style.borderBottom = getDividerStyle(options),
      el => el.style.paddingBottom = "7px"
    ])
  ]);
}
