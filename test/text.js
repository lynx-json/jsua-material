const chai = require("chai");
const should = chai.should();
import { text } from "../src";
import { exec } from "./util";

describe("text", function () {
  var result, 
    backgroundColor = "#ffffff", 
    robotoFont = "Roboto, sans-serif",
    medium = "500",
    light = "300",
    regular = "400",
    primary = .87,
    secondary = .54;
  
  beforeEach(function () {
    result = {
      view: {
        style: {}
      }
    };
  });
  
  describe("button", function () {
    it("should apply Primary MEDIUM (ALL CAPS) 14px", function () {
      exec(result, text.button(backgroundColor));
      result.view.style.fontFamily.should.equal(robotoFont);
      result.view.style.fontWeight.should.equal(medium);
      result.view.style.fontSize.should.equal("14px");
      result.view.style.textTransform.should.equal("uppercase");
      result.view.style.color.should.equal("#000000");
      result.view.style.opacity.should.equal(primary);
    });
  });
  
  describe("caption", function () {
    it("should apply Secondary Regular 12px", function () {
      exec(result, text.caption(backgroundColor));
      result.view.style.fontFamily.should.equal(robotoFont);
      result.view.style.fontWeight.should.equal(regular);
      result.view.style.fontSize.should.equal("12px");
      result.view.style.color.should.equal("#000000");
      result.view.style.opacity.should.equal(secondary);
    });
  });
  
  describe("body", function () {
    it("should apply Primary Regular 14px with 20px line height", function () {
      exec(result, text.body(backgroundColor));
      result.view.style.fontFamily.should.equal(robotoFont);
      result.view.style.fontWeight.should.equal(regular);
      result.view.style.fontSize.should.equal("14px");
      result.view.style.color.should.equal("#000000");
      result.view.style.opacity.should.equal(primary);
      result.view.style.lineHeight.should.equal("20px");
    });
    
    it("should apply 13px font for desktop", function () {
      exec(result, text.body(backgroundColor, true));
      result.view.style.fontSize.should.equal("13px");
    });
  });
  
  describe("body2", function () {
    it("should apply Primary Regular 14px with 24px line height", function () {
      exec(result, text.body2(backgroundColor));
      result.view.style.fontFamily.should.equal(robotoFont);
      result.view.style.fontWeight.should.equal(regular);
      result.view.style.fontSize.should.equal("14px");
      result.view.style.color.should.equal("#000000");
      result.view.style.opacity.should.equal(primary);
      result.view.style.lineHeight.should.equal("24px");
    });
    
    it("should apply 13px font for desktop", function () {
      exec(result, text.body2(backgroundColor, true));
      result.view.style.fontSize.should.equal("13px");
    });
  });
  
  describe("subHeading", function () {
    // text.subHeading1, // Regular 16 (device), Regular 15 (desktop), Leading 24 [Small Labels (paired with text)], Color Primary
    it("should apply Primary Regular 16px with 24px line height", function () {
      exec(result, text.subHeading(backgroundColor));
      result.view.style.fontFamily.should.equal(robotoFont);
      result.view.style.fontWeight.should.equal(regular);
      result.view.style.fontSize.should.equal("16px");
      result.view.style.color.should.equal("#000000");
      result.view.style.opacity.should.equal(primary);
      result.view.style.lineHeight.should.equal("24px");
    });
    
    it("should apply 13px font for desktop", function () {
      exec(result, text.subHeading(backgroundColor, true));
      result.view.style.fontSize.should.equal("15px");
    });
  });
  
  describe("subHeading2", function () {
    it("should apply Primary Regular 16px with 28px line height", function () {
      exec(result, text.subHeading2(backgroundColor));
      result.view.style.fontFamily.should.equal(robotoFont);
      result.view.style.fontWeight.should.equal(regular);
      result.view.style.fontSize.should.equal("16px");
      result.view.style.color.should.equal("#000000");
      result.view.style.opacity.should.equal(primary);
      result.view.style.lineHeight.should.equal("28px");
    });
    
    it("should apply 13px font for desktop", function () {
      exec(result, text.subHeading2(backgroundColor, true));
      result.view.style.fontSize.should.equal("15px");
    });
  });
  
  describe("title", function () {
    it("should apply Primary Medium 20px", function () {
      exec(result, text.title(backgroundColor));
      result.view.style.fontFamily.should.equal(robotoFont);
      result.view.style.fontWeight.should.equal(medium);
      result.view.style.fontSize.should.equal("20px");
      result.view.style.color.should.equal("#000000");
      result.view.style.opacity.should.equal(primary);
    });
  });
  
  describe("headline", function () {
    it("should apply Primary Regular 24px", function () {
      exec(result, text.headline(backgroundColor));
      result.view.style.fontFamily.should.equal(robotoFont);
      result.view.style.fontWeight.should.equal(regular);
      result.view.style.fontSize.should.equal("24px");
      result.view.style.color.should.equal("#000000");
      result.view.style.opacity.should.equal(primary);
      result.view.style.lineHeight.should.equal("32px");
    });
  });
  
  // text.display1, // Regular 34, Leading 40, Color Secondary
  describe("display", function () {
    it("should apply Secondary Regular 34px with 40px line height", function () {
      exec(result, text.display(backgroundColor));
      result.view.style.fontFamily.should.equal(robotoFont);
      result.view.style.fontWeight.should.equal(regular);
      result.view.style.fontSize.should.equal("34px");
      result.view.style.color.should.equal("#000000");
      result.view.style.opacity.should.equal(secondary);
      result.view.style.lineHeight.should.equal("40px");
    });
  });
  
  describe("display2", function () {
    it("should apply Secondary Regular 45px with 48px line height", function () {
      exec(result, text.display2(backgroundColor));
      result.view.style.fontFamily.should.equal(robotoFont);
      result.view.style.fontWeight.should.equal(regular);
      result.view.style.fontSize.should.equal("45px");
      result.view.style.color.should.equal("#000000");
      result.view.style.opacity.should.equal(secondary);
      result.view.style.lineHeight.should.equal("48px");
    });
  });
  
  describe("display3", function () {
    it("should apply Secondary Regular 56px", function () {
      exec(result, text.display3(backgroundColor));
      result.view.style.fontFamily.should.equal(robotoFont);
      result.view.style.fontWeight.should.equal(regular);
      result.view.style.fontSize.should.equal("56px");
      result.view.style.color.should.equal("#000000");
      result.view.style.opacity.should.equal(secondary);
    });
  });
  
  describe("display4", function () {
    it("should apply Secondary Regular 112px", function () {
      exec(result, text.display4(backgroundColor));
      result.view.style.fontFamily.should.equal(robotoFont);
      result.view.style.fontWeight.should.equal(regular);
      result.view.style.fontSize.should.equal("112px");
      result.view.style.color.should.equal("#000000");
      result.view.style.opacity.should.equal(secondary);
    });
  });
});
