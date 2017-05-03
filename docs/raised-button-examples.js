import * as material from "../src";

import {
  createExample,
  clearExamples
} from "./util";

import {
  query
} from "@lynx-json/jsua-style";

function createRaisedButtonExample(label, cb) {
  createExample(function (el) {
    var labelElement = document.createElement("pre");
    labelElement.textContent = label;
    el.appendChild(labelElement);
    material.background(el);
    el.style.padding = "16px";

    cb(el);
  });
}

export default function raisedButtonExamples() {
  clearExamples();

  createRaisedButtonExample("Primary background", function (el) {
    query(el).each([
      material.raisedButton({
        textColor: "white"
      }),
      material.background.primary()
    ]);
  });

  createRaisedButtonExample("Accent background", function (el) {
    query(el).each([
      material.raisedButton(),
      material.background.accent()
    ]);
  });
}
