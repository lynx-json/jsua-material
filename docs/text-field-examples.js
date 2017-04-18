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
      <input type="text" value="Hello" />
    `;

    el.style.padding = "16px";
    cb(el.firstElementChild);
  });
}

export default function cardExamples() {
  clearExamples();

  createInputExample("Light theme (default)", function (el) {
    material.textInput(el);
  });

  createInputExample("Dark theme", function (el) {
    var options = {
      theme: "dark"
    };

    material.background(el.parentElement, options);
    material.textInput(el, options);
  });

  createInputExample("Custom background", function (el) {
    material.background.primary(el.parentElement);
    material.textInput(el, {
      color: "white"
    });
  });
}
