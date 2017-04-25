import {
  on
} from "jsua-query";
import elevation from "./elevation";
import background from "./background";

export default function card() {
  return [
    elevation.card(),
    background.card(),
    on("mouseover", elevation.cardHover()),
    on("mouseout", elevation.card()),
    el => el.style.display = "flex",
    el => el.style.flexDirection = "column",
    el => el.style.borderRadius = "2px"
  ];
}
