import * as text from "./text";
import { query, on } from "jsua-query";
import elevation from "./elevation";
import { colorScheme } from "./color-scheme";

export function raisedButton(element, options) {
  var backgroundColor = (options && options.backgroundColor) || colorScheme.primary;
  
  query(element).each([
    el => el.style.display = "flex",
    el => el.style.flexDirection = "row",
    el => el.style.alignItems = "center",
    el => el.style.minHeight = "36px",
    el => el.style.minWidth = "88px",
    el => el.style.paddingLeft = "16px",
    el => el.style.paddingRight = "16px",
    el => el.style.borderRadius = "2px",
    el => el.style.backgroundColor = backgroundColor,
    text.button(backgroundColor),
    elevation(2),
    // Create a touch target
    el => {
      var wrapper = document.createElement("div");
      wrapper.role = "presentation";
      el.parentElement.replaceChild(wrapper, el);
      wrapper.addEventListener("click", function () {
        el.click();
      });
      wrapper.appendChild(el);
      query(wrapper).each([
        el => el.style.display = "flex",
        el => el.style.flexDirection = "column",
        el => el.style.alignItems = "stretch",
        el => el.style.paddingTop = "6px",
        el => el.style.paddingBottom = "6px",
        on("mousedown", el => query(el.firstElementChild).each(elevation(8))),
        on("mouseup", el => query(el.firstElementChild).each(elevation(2))),
        on("touchstart", el => query(el.firstElementChild).each(elevation(8))),
        on("touchend", el => query(el.firstElementChild).each(elevation(2)))
      ]);
    }
  ]);
}
