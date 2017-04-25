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

  createInputExample("Dropdown", function (el) {
    query(el).each(material.textField());
    query(el.firstElementChild).each(material.textField.label());

    var select = document.createElement("select");
    select.innerHTML = `
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    `;
    el.replaceChild(select, el.lastElementChild);

    query(el.lastElementChild).each(material.textField.dropdown());
  });

  createInputExample("Dropdown with error state", function (field) {
    query(field).each(material.textField());
    query(field.firstElementChild).each(material.textField.label());

    var select = document.createElement("select");
    select.innerHTML = `
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    `;
    field.replaceChild(select, field.lastElementChild);

    query(field.lastElementChild).each([
      material.textField.dropdown(),
      el => field.materialSetError(),
      on("input", () => field.materialClearError())
    ]);
  });
  // createInputExample("Required state");?
  // createInputExample("Multiline");?
}
