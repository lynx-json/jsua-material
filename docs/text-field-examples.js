import * as material from "../src";

import {
  createExample,
  clearExamples
} from "./util";

import {
  query
} from "jsua-query";

function createInputExample(label, cb) {
  createExample(function (el) {
    el.innerHTML = `
      <div>Label</div>
      <input type="text" value="Hello" />
    `;

    cb(el);
  });
}

export default function cardExamples() {
  clearExamples();

  createInputExample("Light theme (default)", function (el) {
    var label = el.firstElementChild;
    var input = el.lastElementChild;
    material.textField(el);
    material.textField.label(label);
    material.textField.input(input);
    material.textInput(input);
  });
}
