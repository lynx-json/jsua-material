import * as material from "../src";

import {
  createExample
} from "./util";

function createTextExample(label, cb) {
  createExample(function (el) {
    var labelElement = document.createElement("pre");
    labelElement.textContent = label;
    el.appendChild(labelElement);
    material.background(el);
    el.style.padding = "16px";

    cb(labelElement);
  });
}

export default function textExamples() {
  createTextExample("Display 4", function (el) {
    material.text.display4(el);
  });

  createTextExample("Display 3", function (el) {
    material.text.display3(el);
  });

  createTextExample("Display 2", function (el) {
    material.text.display2(el);
  });

  createTextExample("Display", function (el) {
    material.text.display(el);
  });

  createTextExample("Headline", function (el) {
    material.text.headline(el);
  });

  createTextExample("Title", function (el) {
    material.text.title(el);
  });

  createTextExample("Subheading 2", function (el) {
    material.text.subheading2(el);
  });

  createTextExample("Subheading", function (el) {
    material.text.subheading(el);
  });

  createTextExample("Body 2", function (el) {
    material.text.body2(el);
  });

  createTextExample("Body", function (el) {
    material.text.body(el);
  });

  createTextExample("Caption", function (el) {
    material.text.caption(el);
  });

  createTextExample("Button", function (el) {
    material.text.button(el);
  });
}
