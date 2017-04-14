import * as material from "../src";

import {
  createExample,
  clearExamples
} from "./util";

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
    material.card(el);
    material.background.card(el);
    material.text.headline(el.firstElementChild);
    material.text.body(el.lastElementChild);
  });

  createCardExample("Dark theme", function (el) {
    var options = {
      theme: "dark"
    };
    material.card(el, options);
    material.background.card(el, options);
    material.text.headline(el.firstElementChild, options);
    material.text.body(el.lastElementChild, options);
  });

  createCardExample("Custom background", function (el) {
    var options = {
      color: "black"
    };
    material.card(el);
    material.background.accent(el);
    material.text.headline(el.firstElementChild, options);
    material.text.body(el.lastElementChild, options);
  });
}
