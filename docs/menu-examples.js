import * as material from "../src";

import {
  createExample,
  clearExamples
} from "./util";

import {
  query
} from "jsua-query";

function createMenuExample(label, cb) {
  createExample(function (el) {
    var labelElement = document.createElement("pre");
    labelElement.textContent = label;
    el.appendChild(labelElement);

    for (var i = 0; i < 5; i++) {
      let item = document.createElement("div");
      item.appendChild(document.createElement("pre"))
      item.firstElementChild.textContent = `Item ${i}`;
      el.appendChild(item);
    }

    cb(el);
  });
}

export default function cardExamples() {
  clearExamples();

  createMenuExample("Light theme (default)", function (el) {
    material.menu(el);
    material.menu.header(el.querySelector("pre"));
    query(el.getSlot("content"))
      .map(el => el.children)
      .each(material.menu.item);
  });

  createMenuExample("Dark theme", function (el) {
    var options = {
      theme: "dark"
    };
    material.menu(el, options);
    material.background(el, options);

    material.menu.header(el.querySelector("pre"), options);
    material.text.subheading(el.querySelector("pre"), options);

    query(el.getSlot("content"))
      .map(el => el.children)
      .each([
        el => material.menu.item(el, options),
        el => material.text.body(el.firstElementChild, options)
      ]);
  });

  createMenuExample("Open State", function (el) {
    material.menu(el, {
      state: "open"
    });
    material.menu.header(el.querySelector("pre"));
    query(el.getSlot("content"))
      .map(el => el.children)
      .each(material.menu.item);
  });
}
