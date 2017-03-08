const chai = require("chai");
const should = chai.should();
import { text } from "../src";
import { exec } from "./util";

describe("text", function () {
  var el, 
    backgroundColor = "#ffffff", 
    robotoFont = "Roboto, sans-serif",
    medium = "500",
    light = "300",
    regular = "400",
    primary = .87,
    secondary = .54;
  
  beforeEach(function () {
    el = {
      style: {}
    };
  });
  
  describe("button", function () {
    it("should apply Primary MEDIUM (ALL CAPS) 14px", function () {
      exec(el, text.button(backgroundColor));
      el.style.fontFamily.should.equal(robotoFont);
      el.style.fontWeight.should.equal(medium);
      el.style.fontSize.should.equal("14px");
      el.style.textTransform.should.equal("uppercase");
      el.style.color.should.equal("#000000");
      el.style.opacity.should.equal(primary);
    });
  });
  
  describe("caption", function () {
    it("should apply Secondary Regular 12px", function () {
      exec(el, text.caption(backgroundColor));
      el.style.fontFamily.should.equal(robotoFont);
      el.style.fontWeight.should.equal(regular);
      el.style.fontSize.should.equal("12px");
      el.style.color.should.equal("#000000");
      el.style.opacity.should.equal(secondary);
    });
  });
  
  describe("body", function () {
    it("should apply Primary Regular 14px with 20px line height", function () {
      exec(el, text.body(backgroundColor));
      el.style.fontFamily.should.equal(robotoFont);
      el.style.fontWeight.should.equal(regular);
      el.style.fontSize.should.equal("14px");
      el.style.color.should.equal("#000000");
      el.style.opacity.should.equal(primary);
      el.style.lineHeight.should.equal("20px");
    });
    
    it("should apply 13px font for desktop", function () {
      exec(el, text.body(backgroundColor, true));
      el.style.fontSize.should.equal("13px");
    });
  });
  
  describe("body2", function () {
    it("should apply Primary Regular 14px with 24px line height", function () {
      exec(el, text.body2(backgroundColor));
      el.style.fontFamily.should.equal(robotoFont);
      el.style.fontWeight.should.equal(regular);
      el.style.fontSize.should.equal("14px");
      el.style.color.should.equal("#000000");
      el.style.opacity.should.equal(primary);
      el.style.lineHeight.should.equal("24px");
    });
    
    it("should apply 13px font for desktop", function () {
      exec(el, text.body2(backgroundColor, true));
      el.style.fontSize.should.equal("13px");
    });
  });
  
  describe("subHeading", function () {
    // text.subHeading1, // Regular 16 (device), Regular 15 (desktop), Leading 24 [Small Labels (paired with text)], Color Primary
    it("should apply Primary Regular 16px with 24px line height", function () {
      exec(el, text.subHeading(backgroundColor));
      el.style.fontFamily.should.equal(robotoFont);
      el.style.fontWeight.should.equal(regular);
      el.style.fontSize.should.equal("16px");
      el.style.color.should.equal("#000000");
      el.style.opacity.should.equal(primary);
      el.style.lineHeight.should.equal("24px");
    });
    
    it("should apply 13px font for desktop", function () {
      exec(el, text.subHeading(backgroundColor, true));
      el.style.fontSize.should.equal("15px");
    });
  });
  
  describe("subHeading2", function () {
    it("should apply Primary Regular 16px with 28px line height", function () {
      exec(el, text.subHeading2(backgroundColor));
      el.style.fontFamily.should.equal(robotoFont);
      el.style.fontWeight.should.equal(regular);
      el.style.fontSize.should.equal("16px");
      el.style.color.should.equal("#000000");
      el.style.opacity.should.equal(primary);
      el.style.lineHeight.should.equal("28px");
    });
    
    it("should apply 13px font for desktop", function () {
      exec(el, text.subHeading2(backgroundColor, true));
      el.style.fontSize.should.equal("15px");
    });
  });
  
  describe("title", function () {
    it("should apply Primary Medium 20px", function () {
      exec(el, text.title(backgroundColor));
      el.style.fontFamily.should.equal(robotoFont);
      el.style.fontWeight.should.equal(medium);
      el.style.fontSize.should.equal("20px");
      el.style.color.should.equal("#000000");
      el.style.opacity.should.equal(primary);
    });
  });
  
  describe("headline", function () {
    it("should apply Primary Regular 24px", function () {
      exec(el, text.headline(backgroundColor));
      el.style.fontFamily.should.equal(robotoFont);
      el.style.fontWeight.should.equal(regular);
      el.style.fontSize.should.equal("24px");
      el.style.color.should.equal("#000000");
      el.style.opacity.should.equal(primary);
      el.style.lineHeight.should.equal("32px");
    });
  });
  
  // text.display1, // Regular 34, Leading 40, Color Secondary
  describe("display", function () {
    it("should apply Secondary Regular 34px with 40px line height", function () {
      exec(el, text.display(backgroundColor));
      el.style.fontFamily.should.equal(robotoFont);
      el.style.fontWeight.should.equal(regular);
      el.style.fontSize.should.equal("34px");
      el.style.color.should.equal("#000000");
      el.style.opacity.should.equal(secondary);
      el.style.lineHeight.should.equal("40px");
    });
  });
  
  describe("display2", function () {
    it("should apply Secondary Regular 45px with 48px line height", function () {
      exec(el, text.display2(backgroundColor));
      el.style.fontFamily.should.equal(robotoFont);
      el.style.fontWeight.should.equal(regular);
      el.style.fontSize.should.equal("45px");
      el.style.color.should.equal("#000000");
      el.style.opacity.should.equal(secondary);
      el.style.lineHeight.should.equal("48px");
    });
  });
  
  describe("display3", function () {
    it("should apply Secondary Regular 56px", function () {
      exec(el, text.display3(backgroundColor));
      el.style.fontFamily.should.equal(robotoFont);
      el.style.fontWeight.should.equal(regular);
      el.style.fontSize.should.equal("56px");
      el.style.color.should.equal("#000000");
      el.style.opacity.should.equal(secondary);
    });
  });
  
  describe("display4", function () {
    it("should apply Secondary Regular 112px", function () {
      exec(el, text.display4(backgroundColor));
      el.style.fontFamily.should.equal(robotoFont);
      el.style.fontWeight.should.equal(regular);
      el.style.fontSize.should.equal("112px");
      el.style.color.should.equal("#000000");
      el.style.opacity.should.equal(secondary);
    });
  });
  
  describe("input", function () {
    // text.subHeading1, // Regular 16 (device), Regular 15 (desktop), Leading 24 [Small Labels (paired with text)], Color Primary
    it("should apply Primary Regular 16px with 18px line height", function () {
      exec(el, text.input(backgroundColor));
      el.style.fontFamily.should.equal(robotoFont);
      el.style.fontWeight.should.equal(regular);
      el.style.fontSize.should.equal("16px");
      el.style.color.should.equal("#000000");
      el.style.opacity.should.equal(primary);
      el.style.lineHeight.should.equal("18px");
    });
  });
});
