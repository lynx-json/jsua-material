const chai = require("chai");
const should = chai.should();
import { shadows } from "../src/elevation.json";
import { elevation } from "../src";
import { exec } from "./util";

describe("elevation", function () {
  var result;
  
  beforeEach(function () {
    result = {
      view: {
        style: {}
      }
    };
  });
  
  it("should apply a shadow appropriate to the specified elevation level", function () {
    exec(result, elevation(1));
    result.view.style.boxShadow.should.equal(shadows[1]);
  });
  
  it("should apply no shadow at level 0", function () {
    exec(result, elevation(0));
    result.view.style.boxShadow.should.equal("none");
  });
});
