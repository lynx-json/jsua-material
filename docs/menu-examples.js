import * as material from "../src";

import {
  createExample,
  clearExamples
} from "./util";

function createMenuExample(label, cb) {
  createExample(function (el) {
    var labelElement = document.createElement("pre");
    labelElement.textContent = label;
    labelElement.style.marginBottom = "16px";
    el.appendChild(labelElement);

    cb(el);
  });
}

export default function cardExamples() {
  clearExamples();

  createMenuExample("Light theme (default)", function (el) {
    material.menu(el);
    material.background.card(el);
    material.text.headline(el.firstElementChild);
    material.text.body(el.lastElementChild);
  });
}
