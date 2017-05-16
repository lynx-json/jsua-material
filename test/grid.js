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

    query(element).each(grid(12, "16px", null, true));
  });

  it("should create a wrapper around the contents of the element", function () {
    element.firstElementChild.getAttribute("role").should.equal("presentation");
  });

  it("should add a half-gutter negative margin to the content wrapper", function () {
    element.firstElementChild.getAttribute("data-test-margin").should.equal("calc(-8px + 0px)");
  });

  describe("when creating a column", function () {
    beforeEach(function () {
      query(element).each([
        el => query(el).map(el => el.firstElementChild.children).each(grid.column(4, 0, true))
      ]);
    });

    it("should calculate the width based on column span (removing gutter width from calculation)", function () {
      element.firstElementChild.firstElementChild.getAttribute("data-test-column-width").should.equal("calc((100% - (16px * 3)) / 3)");
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

    query(element).each(grid(12, "16px", "8px", true));
  });

  it("should subtact half a gutter width from the margin and add it to the to the content wrapper", function () {
    element.firstElementChild.getAttribute("data-test-margin").should.equal("calc(-8px + 8px)");
  });
});
