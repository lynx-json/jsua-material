import * as material from "../src";

import {
  createExample,
  clearExamples
} from "./util";

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
    material.raisedButton(el);
    material.background.primary(el);
    material.text.button(el.firstElementChild, {
      color: "white"
    });
  });

  createRaisedButtonExample("Accent background", function (el) {
    material.raisedButton(el);
    material.background.accent(el);
    material.text.button(el.firstElementChild, {
      color: "black"
    });
  });
}
