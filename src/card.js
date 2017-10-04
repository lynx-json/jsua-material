import { on, setState, clearState, when } from "@lynx-json/jsua-style";
import elevation from "./elevation";
import background from "./background";

export default function card(options = {}) {
  return [
    elevation.card(),
    background.card(),
    el => el.style.borderRadius = "2px",
    el => el.style.flexDirection = "column",
    when("normal", [
      elevation.card(),
      el => el.style.display = "flex"
    ]),
    when("visibility", "hidden", el => el.style.display = "none"),
    when("hover", elevation.cardHover()),
    on("mouseenter", setState("hover")),
    on("mouseleave", clearState("hover")),
    setState("normal")
  ];
}
