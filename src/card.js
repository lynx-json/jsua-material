import * as text from "./text";
import { query, on } from "jsua-query";
import elevation from "./elevation";

export function card(backgroundColor) {
  return [
    el => el.style.backgroundColor = backgroundColor,
    text.body(backgroundColor),
    elevation(2),
    on("mouseover", elevation(8)),
    on("mouseout", elevation(2)),
    el => el.style.display = "flex",
    el => el.style.flexDirection = "row",
    el => el.style.flexWrap = "nowrap",
    el => el.style.borderRadius = "2px"
  ];
}
