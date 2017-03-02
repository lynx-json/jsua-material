const chai = require("chai");
const should = chai.should();
const sinon = require("sinon");
const colorPalette = require("../src/color-palette");

describe("colorPalette", function () {
  describe("getColor(name, shade)", function () {
    it("should return a primary color by name and shade number", function () {
      colorPalette.getColor("Red", "500").should.equal("#F44336");
      colorPalette.getColor("Red", 500).should.equal("#F44336");
    });
    
    it("should return a 500 shade color by name", function () {
      colorPalette.getColor("Red").should.equal("#F44336");
    });
    
    it("should return an accent color by name and shade number", function () {
      colorPalette.getColor("Red", "A200").should.equal("#FF5252");
    });
    
    it("should return an unknown color by hex value (hue) and shade number", function () {
      colorPalette.getColor("#ff00ff", 300).should.equal("#ff55ff");
    });
  });
  
  describe("primaryText(backgroundColor)", function () {
    it("should return a contrasting text color and opacity for a specified background color", function () {
      var textColor = colorPalette.primaryText("#ffffff");
      textColor.color.should.equal("#000000");
      textColor.opacity.should.equal(.87);
      
      var textColor = colorPalette.primaryText("#000000");
      textColor.color.should.equal("#ffffff");
      textColor.opacity.should.equal(1);
    });
  });
  
  describe("secondaryText(backgroundColor)", function () {
    it("should return a contrasting text color and opacity for a specified background color", function () {
      var textColor = colorPalette.secondaryText("#ffffff");
      textColor.color.should.equal("#000000");
      textColor.opacity.should.equal(.54);
      
      var textColor = colorPalette.secondaryText("#000000");
      textColor.color.should.equal("#ffffff");
      textColor.opacity.should.equal(.7);
    });
  });
  
  describe("disabledText(backgroundColor)", function () {
    it("should return a contrasting text color and opacity for a specified background color", function () {
      var textColor = colorPalette.disabledText("#ffffff");
      textColor.color.should.equal("#000000");
      textColor.opacity.should.equal(.38);
      
      var textColor = colorPalette.disabledText("#000000");
      textColor.color.should.equal("#ffffff");
      textColor.opacity.should.equal(.5);
    });
  });
  
  describe("divider(backgroundColor)", function () {
    it("should return a contrasting text color and opacity for a specified background color", function () {
      var textColor = colorPalette.divider("#ffffff");
      textColor.color.should.equal("#000000");
      textColor.opacity.should.equal(.12);
      
      var textColor = colorPalette.divider("#000000");
      textColor.color.should.equal("#ffffff");
      textColor.opacity.should.equal(.12);
    });
  });
});
