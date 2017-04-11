import * as text from "./text";
import { query, on } from "jsua-query";
import { getDividerStyle } from "./util";
import { colorScheme } from "./color-scheme";

export function textInput(element, options) {
  var backgroundColor = (options && options.backgroundColor) || colorScheme.theme[2];
  
  query(element).each([
    el => el.style.borderBottom = getDividerStyle(backgroundColor),
    el => el.style.paddingBottom = "7px", // 8px - 1px border
    text.input(backgroundColor),
    on("focusin", [
      el => el.style.borderBottom = "2px solid " + colorScheme.accent,
      el => el.style.paddingBottom = "6px"
    ]),
    on("focusout", [
      el => el.style.borderBottom = getDividerStyle(backgroundColor),
      el => el.style.paddingBottom = "7px"
    ])
  ]);
}
