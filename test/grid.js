require("./html-document-api");
const chai = require("chai");
const should = chai.should();
import { grid } from "../src";
import {
  query
} from "@lynx-json/jsua-style";

describe("creating a material grid", function () {
  var element;

  beforeEach(function () {
    element = document.createElement("div");
    element.innerHTML = `
      <div></div>
    `;

    query(element).each(grid({
      columns: 12,
      gutter: "16px",
      test: true
    }));
  });

  it("should create a wrapper around the contents of the element", function () {
    element.children[1].getAttribute("role").should.equal("presentation");
  });

  it("should add a half-gutter negative margin to the content wrapper", function () {
    element.children[1].getAttribute("data-test-margin").should.equal("calc(-8px + 0px)");
  });

  describe("when creating a column", function () {
    beforeEach(function () {
      query(element).each([
        el => query(el).map(el => el.children[1].children).each(grid.column({
          span: 4,
          test: true
        }))
      ]);
    });

    it("should calculate the width based on column span (removing gutter width from calculation)", function () {
      // Note that the -0.1px is to compensate for rounding errors in IE and Edge
      element.children[1].firstElementChild.getAttribute("data-test-column-width").should.equal("calc(((100% - (16px * 3)) / 3) - 0.1px)");
    });
  });
});

describe("creating a material grid with a margin", function () {
  var element;

  beforeEach(function () {
    element = document.createElement("div");
    element.innerHTML = `
      <div></div>
    `;

    query(element).each(grid({
      columns: 12,
      gutter: "16px",
      margin: "8px",
      test: true
    }));
  });

  it("should subtract half a gutter width from the margin and add it to the to the content wrapper", function () {
    element.children[1].getAttribute("data-test-margin").should.equal("calc(-8px + 8px)");
  });
});

describe("redefining grid settings for media changes", function () {
  it("should reset all columns to the default column span and offset");
});
