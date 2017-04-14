import * as material from "../src";

import {
  createExample,
  clearExamples
} from "./util";

export default function gridExamples() {
  clearExamples();

  createExample(function (el) {
    material.grid(el, {
      columns: 12,
      gutter: "16px"
    });

    for (var i = 1; i <= 12; i++) {
      let cell = document.createElement("div");
      cell.style.textAlign = "center";
      cell.style.padding = "8px";
      el.firstElementChild.appendChild(cell);

      let cellText = document.createElement("pre");
      cellText.textContent = i;
      material.text.caption(cellText);
      cell.appendChild(cellText);

      material.grid.column(cell, {
        span: i,
        offset: 12 - i
      });
      material.background.primary(cell, {
        shade: 50
      });
    }
  });
}
