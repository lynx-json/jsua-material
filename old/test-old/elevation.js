const chai = require("chai");
const should = chai.should();
import { shadows } from "../src/elevation.json";
import { elevation } from "../src";
import { exec } from "./util";

describe("elevation", function () {
  var el;
  
  beforeEach(function () {
    el = {
      style: {}
    }
  });
  
  it("should apply a shadow appropriate to the specified elevation level", function () {
    exec(el, elevation(1));
    el.style.boxShadow.should.equal(shadows[1]);
  });
  
  it("should apply no shadow at level 0", function () {
    exec(el, elevation(0));
    el.style.boxShadow.should.equal("none");
  });
});
