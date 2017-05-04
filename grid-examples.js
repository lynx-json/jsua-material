import * as material from "../src";

import {
  createExample,
  clearExamples
} from "./util";

import {
  query
} from "@lynx-json/jsua-style";

export default function gridExamples() {
  clearExamples();

  createExample(function (el) {
    query(el).each(material.grid(12, "16px"));

    for (var i = 1; i <= 12; i++) {
      let cell = document.createElement("div");
      cell.style.textAlign = "center";
      cell.style.padding = "8px";
      el.firstElementChild.appendChild(cell);

      let cellText = document.createElement("pre");
      cellText.textContent = i;
      material.text.caption(cellText);
      cell.appendChild(cellText);

      query(cell).each([
        material.grid.column(i, 12 - i),
        material.background.primary(50)
      ]);
    }
  });
}
