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
    var label = el.firstElementChild;
    query(el).each(material.menu());
    query(label).each(material.menu.header());
    query(el.getSlot("content"))
      .map(el => el.children)
      .each(material.menu.item());
  });

  createMenuExample("Dark theme", function (el) {
    material.color.theme = "dark";

    var label = el.firstElementChild;
    query(el).each([
      material.menu(),
      material.background.main()
    ]);
    query(label).each(material.menu.header());
    query(el.getSlot("content"))
      .map(el => el.children)
      .each(material.menu.item());

    material.color.theme = "light";
  });
  // 
  // createMenuExample("Open State", function (el) {
  //   material.menu(el, {
  //     state: "open"
  //   });
  //   material.menu.header(el.querySelector("pre"));
  //   query(el.getSlot("content"))
  //     .map(el => el.children)
  //     .each(material.menu.item);
  // });
}
