import * as text from "./text";
import { query, on } from "jsua-query";
import elevation from "./elevation";

function shadow(style) {
  return el => {
    var shadow = el.attachShadow({ mode: "open" });
    shadow.innerHTML = "<div><slot></slot></div>";
    query(shadow.firstElementChild).each(style);
  }
}

export function flat(color) {
  return [
    shadow([
      el => el.style.minHeight = "36px",
      el => el.style.minWidth = "64px",
      el => el.style.paddingLeft = "8px",
      el => el.style.paddingRight = "8px",
      el => el.style.borderRadius = "2px",
      el => query(el).each(text.button("#ffffff")),
      el => {
        if (color) {
          el.style.color = color;
        }
      }  
    ]),
    el => el.style.paddingTop = "6px",
    el => el.style.paddingBottom = "6px"
  ];
}

export function raised(backgroundColor) {
  return [
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
        el => el.style.paddingTop = "6px",
        el => el.style.paddingBottom = "6px",
        on("mousedown", el => query(el.firstElementChild).each(elevation(8))),
        on("mouseup", el => query(el.firstElementChild).each(elevation(2))),
        on("touchstart", el => query(el.firstElementChild).each(elevation(8))),
        on("touchend", el => query(el.firstElementChild).each(elevation(2)))
      ]);
    }
  ];
}
