const chai = require("chai");
const should = chai.should();
import { backgroundColor } from "../src"

describe("backgroundColor", function () {
  it("should set the view's background color to the specified color", function () {
    var el = {
      style: {}
    };
    
    backgroundColor("#ffffff")(el);
    
    el.style.backgroundColor.should.equal("#ffffff");
  });
});
