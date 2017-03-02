"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.grid = grid;
exports.column = column;
function grid(columns, gutter) {
  function createGrid(element) {
    function getWrapper() {
      if (element.children.length === 1 && element.children[0].role === "presentation") {
        return element.children[0];
      }

      var wrapper = document.createElement("div");

      var children = [];
      for (var i = 0, max = element.childNodes.length; i < max; i++) {
        children.push(element.childNodes[i]);
      }

      children.forEach(function (child) {
        wrapper.appendChild(child);
      });

      element.appendChild(wrapper);
      return wrapper;
    }

    var wrapper = getWrapper();
    var parsedGutter = parseGutter(gutter);

    wrapper.style.margin = "-" + parsedGutter.value / 2 + parsedGutter.units;
    wrapper.style.display = "flex";
    wrapper.style.flexGrow = "1";
    wrapper.style.flexDirection = "row";
    wrapper.style.flexWrap = "wrap";
    wrapper.style.maxWidth = "initial";
    wrapper.setAttribute("role", "presentation");

    wrapper.setAttribute("data-material-grid-columns", columns);
    wrapper.setAttribute("data-material-grid-gutter", gutter);
  }

  return createGrid;
}

var gutterPattern = function gutterPattern() {
  return (/^(\d*)([a-z]*)$/
  );
};

function parseGutter(gutter) {
  var parsedGutter = gutterPattern().exec(gutter);
  var gutterValue = +parsedGutter[1];
  var gutterUnits = parsedGutter[2];

  return {
    value: gutterValue,
    units: gutterUnits
  };
}

function column(span, offset) {
  function setupColumn(element) {
    var grid = element.parentElement;
    var columns = +grid.getAttribute("data-material-grid-columns");
    var gutter = grid.getAttribute("data-material-grid-gutter");

    var parsedGutter = parseGutter(gutter);

    var columnPercentage = columns / span;
    var columnWidth = "calc((100% - " + gutter + " * " + columnPercentage + ") / " + columnPercentage + ")";
    element.style.width = columnWidth;
    var margin = parsedGutter.value / 2 + parsedGutter.units;
    element.style.margin = margin;

    if (offset) {
      var percentage = columns / offset;
      var offsetMargin = "calc(((100% - " + gutter + " * " + percentage + ") / " + percentage + ") + " + 1.5 * parsedGutter.value + parsedGutter.units + ")";
      element.style.marginLeft = offsetMargin;
    }
  }

  return setupColumn;
}