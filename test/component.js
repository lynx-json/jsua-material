const chai = require("chai");
const should = chai.should();

import component from "./src/component";

describe("components", function () {
  describe("when adding an element to a slot", function () {
    beforeEach(function () {
      var el = document.createElement("div");
      component("menu")
    });
    it("should place the element in the appropriate place");
  });
});
