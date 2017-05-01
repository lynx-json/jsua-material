import {
  query,
  on
} from "jsua-query";
import {
  getTextColor
} from "./util";
import elevation from "./elevation";
import text from "./text";

export default function raisedButton(options) {
  var textColor = getTextColor(options);

  return function (element) {
    query(element).select("*").each(el => el.style.userSelect = "none");

    query(element).each([
      el => el.style.cursor = "default",
      el => el.style.display = "flex",
      el => el.style.flexDirection = "row",
      el => el.style.flexWrap = "wrap",
      el => el.style.alignItems = "center",
      el => el.style.justifyContent = "center",
      el => el.style.minHeight = "36px",
      el => el.style.minWidth = "88px",
      el => el.style.paddingLeft = "16px",
      el => el.style.paddingRight = "16px",
      el => el.style.borderRadius = "2px",
      el => elevation(2),
      el => {
        var touchTarget = document.createElement("div");
        touchTarget.role = "presentation";
        el.parentElement.replaceChild(touchTarget, el);
        touchTarget.addEventListener("click", function () {
          el.click();
        });
        touchTarget.appendChild(el);
        query(touchTarget).each([
          text.button(textColor),
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
  };
}
