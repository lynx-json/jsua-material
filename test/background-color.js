const chai = require("chai");
const should = chai.should();
import { backgroundColor } from "../src"

describe("backgroundColor", function () {
  it("should set the view's background color to the specified color", function () {
    var result = {
      view: {
        style: {}
      }
    };
    
    backgroundColor("#ffffff")(result);
    
    result.view.style.backgroundColor.should.equal("#ffffff");
  });
});
