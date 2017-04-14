import {
  blockComponent,
  wrapChildren
} from "./util";

var gutterPattern = () => /^(\d*)([a-z]*)$/;

function parseGutter(gutter) {
  var parsedGutter = gutterPattern().exec(gutter);
  var gutterValue = +parsedGutter[1];
  var gutterUnits = parsedGutter[2];

  return {
    value: gutterValue,
    units: gutterUnits
  };
}

export default function grid(element, options) {
  var wrapper = wrapChildren(element);
  var parsedGutter = parseGutter(options.gutter);

  wrapper.style.margin = "-" + (parsedGutter.value / 2) + parsedGutter.units;
  wrapper.style.display = "flex";
  wrapper.style.flexGrow = "1";
  wrapper.style.flexDirection = "row";
  wrapper.style.flexWrap = "wrap";
  wrapper.style.maxWidth = "initial";
  wrapper.setAttribute("role", "presentation");

  wrapper.setAttribute("data-material-grid-columns", options.columns);
  wrapper.setAttribute("data-material-grid-gutter", options.gutter);
}

grid.column = function column(element, options) {
  var gridWrapper = element.parentElement;
  var columns = +gridWrapper.getAttribute("data-material-grid-columns");
  var gutter = gridWrapper.getAttribute("data-material-grid-gutter");

  var parsedGutter = parseGutter(gutter);

  var totalColumns = columns / options.span;
  var columnWidth = "calc((100% - " + gutter + " * " + totalColumns + ") / " + totalColumns + ")";
  element.style.width = columnWidth;
  var margin = parsedGutter.value / 2 + parsedGutter.units;
  element.style.margin = margin;

  if (options.offset) {
    let percentage = columns / options.offset;
    let offsetMargin = "calc(((100% - " + gutter + " * " + percentage + ") / " + percentage + ") + " + (1.5 * parsedGutter.value) + parsedGutter.units + ")";
    element.style.marginLeft = offsetMargin;
  }
}
