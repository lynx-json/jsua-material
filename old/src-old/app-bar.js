import * as text from "./text";
import { query, on } from "jsua-query";
import elevation from "./elevation";

export function appBar(backgroundColor) {
  return [
    el => el.style.backgroundColor = backgroundColor,
    text.title(backgroundColor),
    elevation(4),
    el => el.style.height = "56px",
    el => el.style.paddingLeft = "16px",
    el => el.style.paddingRight = "16px",
    el => el.style.display = "flex",
    el => el.style.flexDirection = "row",
    el => el.style.flexWrap = "nowrap",
    el => el.style.alignItems = "center" // 20px below title is per spec. Simplifying for now.
  ];
}
