const chai = require("chai");
const should = chai.should();
import {responsiveUI} from "../src";
import {createElement} from "./util";

global.window = global.window || {};

global.document = global.document || {
  createElement: createElement
};

describe("when setting up a responsive UI", function () {
  it("should set a screen size below 600px to a 4-column grid with 16px gutters", function () {
    window.matchMedia = query => {
      if (query === "(max-width: 599px)") return { matches: true};
      return false;
    };
    
    var element = createElement();
    
    responsiveUI(element);
    
    element.childNodes[0]["data-material-grid-columns"].should.equal(4);
    element.childNodes[0]["data-material-grid-gutter"].should.equal("16px");
  });
  
  it("should set a 600px-839px screen to an 8-column grid with 16px gutters", function () {
    window.matchMedia = query => {
      if (query === "(min-width: 600px) and (max-width: 839px)") return { matches: true};
      return false;
    };
    
    var element = createElement();
    
    responsiveUI(element);
    
    element.childNodes[0]["data-material-grid-columns"].should.equal(8);
    element.childNodes[0]["data-material-grid-gutter"].should.equal("16px");
  });
  
  it("should set a screen size above 840px to a 12-column grid with 24px gutters", function () {
    window.matchMedia = query => {
      if (query === "(min-width: 840px)") return { matches: true };
      return false;
    };
    
    var element = createElement();
    
    responsiveUI(element);
    
    element.childNodes[0]["data-material-grid-columns"].should.equal(12);
    element.childNodes[0]["data-material-grid-gutter"].should.equal("24px");
  });
});
