import * as material from "../src";

import {
  createExample
} from "./util";

function createBackgroundExample(label, cb) {
  createExample(function (el) {
    var labelElement = document.createElement("pre");
    labelElement.textContent = label;
    el.appendChild(labelElement);

    el.style.padding = "16px";
    cb(el);
  });
}

export default function backgroundExamples() {
  createBackgroundExample("Color: #CCCCCC", function (el) {
    material.background(el, {
      color: "#CCCCCC"
    });
  });

  createBackgroundExample("Primary Color, Shade: 500 (default)", function (el) {
    material.background.primary(el);
  });

  createBackgroundExample("Primary Color, Shade: 50", function (el) {
    material.background.primary(el, {
      shade: 50
    });
  });

  createBackgroundExample("Primary Color, Shade: 100", function (el) {
    material.background.primary(el, {
      shade: 100
    });
  });

  createBackgroundExample("Primary Color, Shade: 200", function (el) {
    material.background.primary(el, {
      shade: 200
    });
  });

  createBackgroundExample("Primary Color, Shade: 300", function (el) {
    material.background.primary(el, {
      shade: 300
    });
  });

  createBackgroundExample("Primary Color, Shade: 400", function (el) {
    material.background.primary(el, {
      shade: 400
    });
  });

  createBackgroundExample("Primary Color, Shade: 500", function (el) {
    material.background.primary(el, {
      shade: 500
    });
  });

  createBackgroundExample("Primary Color, Shade: 600", function (el) {
    material.background.primary(el, {
      shade: 600
    });
  });

  createBackgroundExample("Primary Color, Shade: 700", function (el) {
    material.background.primary(el, {
      shade: 700
    });
  });

  createBackgroundExample("Primary Color, Shade: 800", function (el) {
    material.background.primary(el, {
      shade: 800
    });
  });

  createBackgroundExample("Primary Color, Shade: 900", function (el) {
    material.background.primary(el, {
      shade: 900
    });
  });

  createBackgroundExample("Accent Color, Shade: A200 (default)", function (el) {
    material.background.accent(el);
  });

  createBackgroundExample("Accent Color, Shade: A100", function (el) {
    material.background.accent(el, {
      shade: "A100"
    });
  });

  createBackgroundExample("Accent Color, Shade: A200", function (el) {
    material.background.accent(el, {
      shade: "A200"
    });
  });

  createBackgroundExample("Accent Color, Shade: A400", function (el) {
    material.background.accent(el, {
      shade: "A400"
    });
  });

  createBackgroundExample("Accent Color, Shade: A700", function (el) {
    material.background.accent(el, {
      shade: "A700"
    });
  });

  createBackgroundExample("Status bar, light theme (default)", function (el) {
    material.background.statusBar(el);
  });

  createBackgroundExample("App bar, light theme (default)", function (el) {
    material.background.appBar(el);
  });

  createBackgroundExample("Main background, light theme (default)", function (el) {
    material.background(el);
  });

  createBackgroundExample("Card/Dialog, light theme (default)", function (el) {
    material.background.card(el);
  });

  createBackgroundExample("Status bar, dark theme", function (el) {
    material.background.statusBar(el, {
      theme: "dark"
    });
  });

  createBackgroundExample("App bar, dark theme", function (el) {
    material.background.appBar(el, {
      theme: "dark"
    });
  });

  createBackgroundExample("Main background, dark theme", function (el) {
    material.background(el, {
      theme: "dark"
    });
  });

  createBackgroundExample("Card/Dialog, dark theme", function (el) {
    material.background.dialog(el, {
      theme: "dark"
    });
  });
}
