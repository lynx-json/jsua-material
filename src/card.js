import {
  query,
  on
} from "jsua-query";
import elevation from "./elevation";

export default function card(element, options) {
  query(element)
    .each([
      elevation.card,
      on("mouseover", elevation.cardHover),
      on("mouseout", elevation.card),
      el => el.style.display = "flex",
      el => el.style.flexDirection = "column",
      el => el.style.borderRadius = "2px"
    ]);
}
