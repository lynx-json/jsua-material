import * as material from "../src";

import {
  createExample,
  clearExamples
} from "./util";

import {
  query
} from "jsua-query";

function createExpansionPanelExample(label, cb) {
  createExample(function (el) {
    var labelElement = document.createElement("pre");
    labelElement.textContent = label;
    el.appendChild(labelElement);

    var contentElement = document.createElement("div");
    contentElement.textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    el.appendChild(contentElement);
    cb(el);
  });
}

export default function motionExamples() {
  clearExamples();

  createExpansionPanelExample("Light theme (default)", function (el) {
    var header = el.firstElementChild;

    query(el).each([
      material.expansionPanel(),
      material.elevation(2),
      el => el.style.margin = "24px"
    ]);

    query(header).each(material.expansionPanel.header());
  });

  createExpansionPanelExample("Dark theme", function (el) {
    var header = el.firstElementChild;

    material.color.theme = "dark";

    query(el).each([
      material.expansionPanel(),
      material.background.main(),
      el => el.style.margin = "24px",
      material.elevation(2)
    ]);

    query(header).each(material.expansionPanel.header());

    material.color.theme = "light";
  });

  createExpansionPanelExample("Custom background", function (el) {
    var header = el.firstElementChild;

    query(el).each([
      material.expansionPanel({
        textColor: "white"
      }),
      material.background("Orange", 800),
      el => el.style.margin = "24px",
      material.elevation(2)
    ]);

    query(header).each(material.expansionPanel.header());
  });

  createExpansionPanelExample("Expanded", function (el) {
    var header = el.firstElementChild;
    query(el).each([
      material.expansionPanel({
        state: "expanded"
      }),
      material.elevation(2),
      el => el.style.margin = "24px"
    ]);

    query(header).each(material.expansionPanel.header());
  });

  createExpansionPanelExample("Large header", function (el) {
    var header = el.firstElementChild;
    header.textContent = `
${header.textContent}

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      `;

    query(el).each([
      material.expansionPanel(),
      material.elevation(2),
      el => el.style.margin = "24px"
    ]);

    query(header).each(material.expansionPanel.header());
  });
}
