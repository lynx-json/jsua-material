import {
  blockComponent,
  wrapChildren
} from "./util";

var gutterPattern = () => /^(\d*)([a-z]*)$/;

function parseValue(gutter) {
  var parsedGutter = gutterPattern().exec(gutter);
  var gutterValue = +parsedGutter[1];
  var gutterUnits = parsedGutter[2];

  return {
    value: gutterValue,
    units: gutterUnits
  };
}

export default function grid(columns, gutter, margin, test) {
  margin = margin || "0px";
  return function (element) {
    var wrapper;

    if (element.children.length === 1 && element.firstElementChild.getAttribute("data-material-grid-columns")) {
      wrapper = element.firstElementChild;
    } else {
      wrapper = wrapChildren(element);
    }

    var parsedGutter = parseValue(gutter);
    var parsedMargin = parseValue(margin);

    var calculatedMargin = `calc(-${parsedGutter.value/2}${parsedGutter.units} + ${parsedMargin.value}${parsedMargin.units})`;
    wrapper.style.margin = calculatedMargin;

    if (test) {
      wrapper.setAttribute("data-test-margin", calculatedMargin);
    }

    wrapper.style.display = "flex";
    wrapper.style.flexGrow = "1";
    wrapper.style.flexDirection = "row";
    wrapper.style.flexWrap = "wrap";
    wrapper.style.maxWidth = "initial";
    wrapper.setAttribute("role", "presentation");

    wrapper.setAttribute("data-material-grid-columns", columns);
    wrapper.setAttribute("data-material-grid-gutter", gutter);
    wrapper.setAttribute("data-material-grid-margin", margin);
  };
}

grid.column = function column(span, offset, test) {
  return function (element) {
    var gridWrapper = element.parentElement;
    var columns = +gridWrapper.getAttribute("data-material-grid-columns");
    var gutter = gridWrapper.getAttribute("data-material-grid-gutter");

    var parsedGutter = parseValue(gutter);

    var totalColumns = columns / span;
    var columnWidth = `calc((100% - (${gutter} * ${totalColumns})) / ${totalColumns})`;
    element.style.width = columnWidth;

    if (test) {
      element.setAttribute("data-test-column-width", columnWidth);
    }

    var margin = parsedGutter.value / 2 + parsedGutter.units;
    element.style.margin = margin;

    if (offset) {
      let percentage = columns / offset;
      let offsetMargin = "calc(((100% - " + gutter + " * " + percentage + ") / " + percentage + ") + " + (1.5 * parsedGutter.value) + parsedGutter.units + ")";
      element.style.marginLeft = offsetMargin;
    }
  };
};
