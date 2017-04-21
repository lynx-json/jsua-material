import * as material from "../src";

import {
  createExample,
  clearExamples
} from "./util";

import {
  query,
  on
} from "jsua-query";

function createInputExample(label, cb) {
  createExample(function (el) {
    el.innerHTML = `
      <div>
        <div>${label}</div>
        <input type="text" value="Hello" />
      </div>
    `;

    el.style.padding = "16px";

    cb(el.firstElementChild);
  });
}

export default function cardExamples() {
  clearExamples();

  createInputExample("Light theme (default)", function (el) {
    query(el).each(material.textField());
    query(el.firstElementChild).each(material.textField.label());
    query(el.lastElementChild).each(material.textField.singleLine());
  });

  createInputExample("Dark theme", function (el) {
    var options = {
      theme: "dark"
    };
    material.background(el.parentElement, options);
    query(el).each(material.textField(options));
    query(el.firstElementChild).each(material.textField.label(options));
    query(el.lastElementChild).each(material.textField.singleLine(options));
  });

  createInputExample("Empty input", function (el) {
    el.lastElementChild.value = "";
    query(el).each(material.textField());
    query(el.firstElementChild).each(material.textField.label());
    query(el.lastElementChild).each(material.textField.singleLine());
  });

  createInputExample("Floating label off", function (el) {
    el.lastElementChild.value = "";
    query(el).each(material.textField());
    query(el.firstElementChild).each(material.textField.label());
    query(el.lastElementChild).each(material.textField.singleLine({
      floatingLabel: false
    }));
  });

  createInputExample("Error state", function (textField) {
    query(textField).each(material.textField());
    query(textField.firstElementChild).each(material.textField.label());
    query(textField.lastElementChild).each([
      material.textField.singleLine(),
      el => textField.materialSetError(),
      on("input", () => textField.materialClearError())
    ]);
  });
}
