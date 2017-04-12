import * as material from "../src";
import contrast from "get-contrast";

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

function calculateTextColor(options) {
  var backgroundColor = material.color.getColor(options);
  var darkRatio = contrast.ratio(backgroundColor, "#000000");
  var lightRatio = contrast.ratio(backgroundColor, "#ffffff");
  return (darkRatio > lightRatio ? "black" : "white");
}

export default function backgroundExamples() {
  createBackgroundExample("Known color and shade (Blue Grey, 900)", function (el) {
    var options = {
      color: "Blue Grey",
      shade: 900
    };
    material.background(el, options);

    material.text.body(el.firstElementChild, {
      color: calculateTextColor(options)
    });
  });

  createBackgroundExample("Custom color and shade (#ff0000, 300)", function (el) {
    var options = {
      color: "#ff0000",
      shade: 300
    };
    material.background(el, options);

    material.text.body(el.firstElementChild, {
      color: calculateTextColor(options)
    });
  });

  createBackgroundExample("Primary Color, Shade: 500 (default)", function (el) {
    var options = {
      color: material.color.primary
    };

    material.background.primary(el, options);
    material.text.body(el.firstElementChild, {
      color: calculateTextColor(options)
    });
  });

  createBackgroundExample("Primary Color, Shade: 50", function (el) {
    var options = {
      color: material.color.primary,
      shade: 50
    };

    material.background.primary(el, options);
    material.text.body(el.firstElementChild, {
      color: calculateTextColor(options)
    });
  });

  createBackgroundExample("Primary Color, Shade: 100", function (el) {
    var options = {
      color: material.color.primary,
      shade: 100
    };

    material.background.primary(el, options);
    material.text.body(el.firstElementChild, {
      color: calculateTextColor(options)
    });
  });

  createBackgroundExample("Primary Color, Shade: 200", function (el) {
    var options = {
      color: material.color.primary,
      shade: 200
    };

    material.background.primary(el, options);
    material.text.body(el.firstElementChild, {
      color: calculateTextColor(options)
    });
  });

  createBackgroundExample("Primary Color, Shade: 300", function (el) {
    var options = {
      color: material.color.primary,
      shade: 300
    };

    material.background.primary(el, options);
    material.text.body(el.firstElementChild, {
      color: calculateTextColor(options)
    });
  });

  createBackgroundExample("Primary Color, Shade: 400", function (el) {
    var options = {
      color: material.color.primary,
      shade: 400
    };

    material.background.primary(el, options);
    material.text.body(el.firstElementChild, {
      color: calculateTextColor(options)
    });
  });

  createBackgroundExample("Primary Color, Shade: 500", function (el) {
    var options = {
      color: material.color.primary,
      shade: 500
    };

    material.background.primary(el, options);
    material.text.body(el.firstElementChild, {
      color: calculateTextColor(options)
    });
  });

  createBackgroundExample("Primary Color, Shade: 600", function (el) {
    var options = {
      color: material.color.primary,
      shade: 600
    };

    material.background.primary(el, options);
    material.text.body(el.firstElementChild, {
      color: calculateTextColor(options)
    });
  });

  createBackgroundExample("Primary Color, Shade: 700", function (el) {
    var options = {
      color: material.color.primary,
      shade: 700
    };

    material.background.primary(el, options);
    material.text.body(el.firstElementChild, {
      color: calculateTextColor(options)
    });
  });

  createBackgroundExample("Primary Color, Shade: 800", function (el) {
    var options = {
      color: material.color.primary,
      shade: 800
    };

    material.background.primary(el, options);
    material.text.body(el.firstElementChild, {
      color: calculateTextColor(options)
    });
  });

  createBackgroundExample("Primary Color, Shade: 900", function (el) {
    var options = {
      color: material.color.primary,
      shade: 900
    };

    material.background.primary(el, options);
    material.text.body(el.firstElementChild, {
      color: calculateTextColor(options)
    });
  });

  createBackgroundExample("Accent Color, Shade: A200 (default)", function (el) {
    var options = {
      color: material.color.secondary
    };

    material.background.accent(el, options);
    material.text.body(el.firstElementChild, {
      color: calculateTextColor(options)
    });
  });

  createBackgroundExample("Accent Color, Shade: A100", function (el) {
    var options = {
      color: material.color.secondary,
      shade: "A100"
    };

    material.background.accent(el, options);
    material.text.body(el.firstElementChild, {
      color: calculateTextColor(options)
    });
  });

  createBackgroundExample("Accent Color, Shade: A200", function (el) {
    var options = {
      color: material.color.secondary,
      shade: "A200"
    };

    material.background.accent(el, options);
    material.text.body(el.firstElementChild, {
      color: calculateTextColor(options)
    });
  });

  createBackgroundExample("Accent Color, Shade: A400", function (el) {
    var options = {
      color: material.color.secondary,
      shade: "A400"
    };

    material.background.accent(el, options);
    material.text.body(el.firstElementChild, {
      color: calculateTextColor(options)
    });
  });

  createBackgroundExample("Accent Color, Shade: A700", function (el) {
    var options = {
      color: material.color.secondary,
      shade: "A700"
    };

    material.background.accent(el, options);
    material.text.body(el.firstElementChild, {
      color: calculateTextColor(options)
    });
  });

  createBackgroundExample("Status bar, light theme (default)", function (el) {
    material.background.statusBar(el);
    material.text.body(el.firstElementChild, {
      color: "black"
    });
  });

  createBackgroundExample("App bar, light theme (default)", function (el) {
    material.background.appBar(el);
    material.text.body(el.firstElementChild, {
      color: "black"
    });
  });

  createBackgroundExample("Main background, light theme (default)", function (el) {
    material.background(el);
    material.text.body(el.firstElementChild, {
      color: "black"
    });
  });

  createBackgroundExample("Card/Dialog, light theme (default)", function (el) {
    material.background.card(el);
    material.text.body(el.firstElementChild, {
      color: "black"
    });
  });

  createBackgroundExample("Status bar, dark theme", function (el) {
    material.background.statusBar(el, {
      theme: "dark"
    });
    material.text.body(el.firstElementChild, {
      color: "white"
    });
  });

  createBackgroundExample("App bar, dark theme", function (el) {
    material.background.appBar(el, {
      theme: "dark"
    });
    material.text.body(el.firstElementChild, {
      color: "white"
    });
  });

  createBackgroundExample("Main background, dark theme", function (el) {
    material.background(el, {
      theme: "dark"
    });
    material.text.body(el.firstElementChild, {
      color: "white"
    });
  });

  createBackgroundExample("Card/Dialog, dark theme", function (el) {
    material.background.dialog(el, {
      theme: "dark"
    });
    material.text.body(el.firstElementChild, {
      color: "white"
    });
  });
}
