import * as material from "../src";

import {
  createExample,
  clearExamples
} from "./util";

import {
  query
} from "jsua-query";

function createTextExample(label, cb) {
  createExample(function (el) {
    var labelElement = document.createElement("pre");
    labelElement.textContent = label;
    el.appendChild(labelElement);

    el.style.padding = "16px";

    cb(el);
  });
}

export default function textExamples() {
  clearExamples();

  createTextExample("Display 4", function (el) {
    query(el.firstElementChild).each(material.text.display4());
  });

  createTextExample("Display 3", function (el) {
    query(el.firstElementChild).each(material.text.display3());
  });

  createTextExample("Display 2", function (el) {
    query(el.firstElementChild).each(material.text.display2());
  });

  createTextExample("Display", function (el) {
    query(el.firstElementChild).each(material.text.display());
  });

  createTextExample("Headline", function (el) {
    query(el.firstElementChild).each(material.text.headline());
  });

  createTextExample("Title", function (el) {
    query(el.firstElementChild).each(material.text.title());
  });

  createTextExample("Subheading 2", function (el) {
    query(el.firstElementChild).each(material.text.subheading2());
  });

  createTextExample("Subheading", function (el) {
    query(el.firstElementChild).each(material.text.subheading());
  });

  createTextExample("Body 2", function (el) {
    query(el.firstElementChild).each(material.text.body2());
  });

  createTextExample("Body", function (el) {
    query(el.firstElementChild).each(material.text.body());
  });

  createTextExample("Caption", function (el) {
    query(el.firstElementChild).each(material.text.caption());
  });

  createTextExample("Button", function (el) {
    query(el.firstElementChild).each(material.text.button());
  });

  createTextExample("Display 4", function (el) {
    query(el).each(material.background.main("dark"));
    query(el.firstElementChild).each(material.text.display4("white"));
  });

  createTextExample("Display 3", function (el) {
    query(el).each(material.background.main("dark"));
    query(el.firstElementChild).each(material.text.display3("white"));
  });

  createTextExample("Display 2", function (el) {
    query(el).each(material.background.main("dark"));
    query(el.firstElementChild).each(material.text.display2("white"));
  });

  createTextExample("Display", function (el) {
    query(el).each(material.background.main("dark"));
    query(el.firstElementChild).each(material.text.display("white"));
  });

  createTextExample("Headline", function (el) {
    query(el).each(material.background.main("dark"));
    query(el.firstElementChild).each(material.text.headline("white"));
  });

  createTextExample("Title", function (el) {
    query(el).each(material.background.main("dark"));
    query(el.firstElementChild).each(material.text.title("white"));
  });

  createTextExample("Subheading 2", function (el) {
    query(el).each(material.background.main("dark"));
    query(el.firstElementChild).each(material.text.subheading2("white"));
  });

  createTextExample("Subheading", function (el) {
    query(el).each(material.background.main("dark"));
    query(el.firstElementChild).each(material.text.subheading("white"));
  });

  createTextExample("Body 2", function (el) {
    query(el).each(material.background.main("dark"));
    query(el.firstElementChild).each(material.text.body2("white"));
  });

  createTextExample("Body", function (el) {
    query(el).each(material.background.main("dark"));
    query(el.firstElementChild).each(material.text.body("white"));
  });

  createTextExample("Caption", function (el) {
    query(el).each(material.background.main("dark"));
    query(el.firstElementChild).each(material.text.caption("white"));
  });

  createTextExample("Button", function (el) {
    query(el).each(material.background.main("dark"));
    query(el.firstElementChild).each(material.text.button("white"));
  });
}
