import * as material from "../src";

import {
  createExample,
  clearExamples
} from "./util";

import {
  query
} from "@lynx-json/jsua-style";

function createCardExample(label, cb) {
  createExample(function (el) {
    el.style.margin = "16px";
    el.style.padding = "16px";
    var labelElement = document.createElement("pre");
    labelElement.textContent = label;
    labelElement.style.marginBottom = "16px";
    el.appendChild(labelElement);

    var contentElement = document.createElement("div");
    contentElement.textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    el.appendChild(contentElement);

    cb(el);
  });
}

export default function cardExamples() {
  clearExamples();

  createCardExample("Light theme (default)", function (el) {
    query(el).each(material.card());
    query(el.firstElementChild).each(material.text.headline());
    query(el.lastElementChild).each(material.text.body());
  });

  createCardExample("Dark theme", function (el) {
    material.color.theme = "dark";

    query(el).each(material.card());
    query(el.firstElementChild).each(material.text.headline());
    query(el.lastElementChild).each(material.text.body());

    material.color.theme = "light";
  });

  createCardExample("Custom background", function (el) {
    query(el).each([
      material.card(),
      material.background("Orange", 900)
    ]);
    query(el.firstElementChild).each(material.text.headline("white"));
    query(el.lastElementChild).each(material.text.body("white"));
  });
}
