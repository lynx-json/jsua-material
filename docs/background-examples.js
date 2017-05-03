import * as material from "../src";
import contrast from "get-contrast";

import {
  createExample,
  clearExamples
} from "./util";

import {
  query
} from "@lynx-json/jsua-style";

function createBackgroundExample(label, cb) {

  createExample(function (el) {
    var labelElement = document.createElement("pre");
    labelElement.textContent = label;
    el.appendChild(labelElement);

    el.style.padding = "16px";
    cb(el);
  });
}

function calculateTextColor(backgroundColor, shade) {
  backgroundColor = material.color.getColor(backgroundColor, shade);
  var darkRatio = contrast.ratio(backgroundColor, "#000000");
  var lightRatio = contrast.ratio(backgroundColor, "#ffffff");
  return (darkRatio > lightRatio ? "black" : "white");
}

export default function backgroundExamples() {
  clearExamples();

  createBackgroundExample("Known color and shade (Blue Grey, 900)", function (el) {
    query(el).each(material.background("Blue Grey", 900));
    query(el.firstElementChild).each(material.text.body("white"));
  });

  createBackgroundExample("Custom color and shade (#ff0000, 300)", function (el) {
    query(el).each(material.background("#ff0000", 300));
    query(el.firstElementChild).each(material.text.body());
  });

  createBackgroundExample("Primary Color, Shade: 500 (default)", function (el) {
    query(el).each(material.background.primary());
    query(el.firstElementChild).each(material.text.body("white"));
  });

  createBackgroundExample("Primary Color, Shade: 50", function (el) {
    query(el).each(material.background.primary(50));
    query(el.firstElementChild).each(material.text.body());
  });

  createBackgroundExample("Primary Color, Shade: 100", function (el) {
    query(el).each(material.background.primary(100));
    query(el.firstElementChild).each(material.text.body());
  });

  createBackgroundExample("Primary Color, Shade: 200", function (el) {
    query(el).each(material.background.primary(200));
    query(el.firstElementChild).each(material.text.body());
  });

  createBackgroundExample("Primary Color, Shade: 300", function (el) {
    query(el).each(material.background.primary(300));
    query(el.firstElementChild).each(material.text.body());
  });

  createBackgroundExample("Primary Color, Shade: 400", function (el) {
    query(el).each(material.background.primary(400));
    query(el.firstElementChild).each(material.text.body("white"));
  });

  createBackgroundExample("Primary Color, Shade: 500", function (el) {
    query(el).each(material.background.primary(500));
    query(el.firstElementChild).each(material.text.body("white"));
  });

  createBackgroundExample("Primary Color, Shade: 600", function (el) {
    query(el).each(material.background.primary(600));
    query(el.firstElementChild).each(material.text.body("white"));
  });

  createBackgroundExample("Primary Color, Shade: 700", function (el) {
    query(el).each(material.background.primary(700));
    query(el.firstElementChild).each(material.text.body("white"));
  });

  createBackgroundExample("Primary Color, Shade: 800", function (el) {
    query(el).each(material.background.primary(800));
    query(el.firstElementChild).each(material.text.body("white"));
  });

  createBackgroundExample("Primary Color, Shade: 900", function (el) {
    query(el).each(material.background.primary(900));
    query(el.firstElementChild).each(material.text.body("white"));
  });

  createBackgroundExample("Accent Color, Shade: A200 (default)", function (el) {
    query(el).each(material.background.accent());
    query(el.firstElementChild).each(material.text.body());
  });

  createBackgroundExample("Accent Color, Shade: A100", function (el) {
    query(el).each(material.background.accent("A100"));
    query(el.firstElementChild).each(material.text.body());
  });

  createBackgroundExample("Accent Color, Shade: A200", function (el) {
    query(el).each(material.background.accent("A200"));
    query(el.firstElementChild).each(material.text.body());
  });

  createBackgroundExample("Accent Color, Shade: A400", function (el) {
    query(el).each(material.background.accent("A400"));
    query(el.firstElementChild).each(material.text.body());
  });

  createBackgroundExample("Accent Color, Shade: A700", function (el) {
    query(el).each(material.background.accent("A700"));
    query(el.firstElementChild).each(material.text.body());
  });

  createBackgroundExample("Status bar, light theme (default)", function (el) {
    query(el).each(material.background.statusBar());
    query(el.firstElementChild).each(material.text.body());
  });

  createBackgroundExample("App bar, light theme (default)", function (el) {
    query(el).each(material.background.appBar());
    query(el.firstElementChild).each(material.text.body());
  });

  createBackgroundExample("Main background, light theme (default)", function (el) {
    query(el).each(material.background.main());
    query(el.firstElementChild).each(material.text.body());
  });

  createBackgroundExample("Card/Dialog, light theme (default)", function (el) {
    query(el).each(material.background.card());
    query(el.firstElementChild).each(material.text.body());
  });

  createBackgroundExample("Status bar, dark theme", function (el) {
    query(el).each(material.background.statusBar("dark"));
    query(el.firstElementChild).each(material.text.body("white"));
  });

  createBackgroundExample("App bar, dark theme", function (el) {
    query(el).each(material.background.appBar("dark"));
    query(el.firstElementChild).each(material.text.body("white"));
  });

  createBackgroundExample("Main background, dark theme", function (el) {
    query(el).each(material.background.main("dark"));
    query(el.firstElementChild).each(material.text.body("white"));
  });

  createBackgroundExample("Card/Dialog, dark theme", function (el) {
    query(el).each(material.background.card("dark"));
    query(el.firstElementChild).each(material.text.body("white"));
  });
}
