import * as material from "../src";

import {
  createExample,
  clearExamples
} from "./util";

import {
  query
} from "jsua-query";

function createElevationExample(label, level) {
  createExample(function (el) {
    var labelElement = document.createElement("pre");
    labelElement.textContent = label;
    el.appendChild(labelElement);

    query(el).each([
      material.background.main(),
      material.elevation(level),
      el => el.style.padding = "16px",
      el => el.style.marginBottom = "32px"
    ]);
    query(labelElement).each(material.text.body());
  });
}

export default function backgroundExamples() {
  clearExamples();
  createElevationExample("Elevation 0", 0);
  createElevationExample("Elevation 1", 1);
  createElevationExample("Elevation 2", 2);
  createElevationExample("Elevation 3", 3);
  createElevationExample("Elevation 4", 4);
  createElevationExample("Elevation 5", 5);
  createElevationExample("Elevation 6", 6);
  createElevationExample("Elevation 7", 7);
  createElevationExample("Elevation 8", 8);
  createElevationExample("Elevation 9", 9);
  createElevationExample("Elevation 10", 10);
  createElevationExample("Elevation 11", 11);
  createElevationExample("Elevation 12", 12);
  createElevationExample("Elevation 13", 13);
  createElevationExample("Elevation 14", 14);
  createElevationExample("Elevation 15", 15);
  createElevationExample("Elevation 16", 16);
  createElevationExample("Elevation 17", 17);
  createElevationExample("Elevation 18", 18);
  createElevationExample("Elevation 19", 19);
  createElevationExample("Elevation 20", 20);
  createElevationExample("Elevation 21", 21);
  createElevationExample("Elevation 22", 22);
  createElevationExample("Elevation 23", 23);
  createElevationExample("Elevation 24", 24);
}
