import * as material from "../src";

import {
  createExample,
  clearExamples
} from "./util";

import {
  query,
  on
} from "@lynx-json/jsua-style";

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
    query(el.lastElementChild.firstElementChild)
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
    query(el.lastElementChild.firstElementChild)
      .map(el => el.children)
      .each(material.menu.item());

    material.color.theme = "light";
  });

  createMenuExample("Custom color", function (el) {
    var label = el.firstElementChild;
    query(el).each([
      material.menu({
        textColor: "white"
      }),
      material.background("Orange", 900)
    ]);

    query(el.lastElementChild).each(material.background("Orange", 500));

    query(label).each(material.menu.header());
    query(el.lastElementChild.firstElementChild)
      .map(el => el.children)
      .each([
        material.menu.item(),
        on("mouseover", material.background("Orange", 700))
      ]);
  });

  createMenuExample("Open State", function (el) {
    var label = el.firstElementChild;
    query(el).each(material.menu({
      state: "open"
    }));
    query(label).each(material.menu.header());
    query(el.lastElementChild.firstElementChild)
      .map(el => el.children)
      .each(material.menu.item());
  });
}
