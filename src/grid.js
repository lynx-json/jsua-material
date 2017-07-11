import {
  blockComponent,
  wrapChildren
} from "./util";

import {
  query,
  component,
  slot,
  map,
  mappers,
  when,
  setState
} from "@lynx-json/jsua-style";

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

function header() {
  return [
    el => el.style.margin = "0px",
    el => el.style.maxWidth = "100%",
    el => el.style.width = "auto"
  ];
}

function footer() {
  return [
    el => el.style.margin = "0px",
    el => el.style.maxWidth = "100%",
    el => el.style.width = "auto"
  ];
}

function column(options) {
  options = options || {};
  var span = options.span,
    offsetLeft = options.offsetLeft,
    offsetRight = options.offsetRight,
    test = options.test;

  function wrapInCell(element) {
    var cell = document.createElement("div");
    cell.style.display = "flex";
    cell.style.flexDirection = "column";
    cell.setAttribute("role", "presentation");
    cell.setAttribute("data-material-grid-cell", "true");
    element.style.flexShrink = 0;

    element.parentElement.replaceChild(cell, element);
    cell.appendChild(element);

    return cell;
  }

  return function (element) {
    var cell;
    if (!element.parentElement.hasAttribute("data-material-grid-cell")) {
      cell = wrapInCell(element);
    } else {
      cell = element.parentElement;
    }

    var gridWrapper = cell.parentElement;
    var columns = +gridWrapper.getAttribute("data-material-grid-columns");
    var gutter = gridWrapper.getAttribute("data-material-grid-gutter");

    var parsedGutter = parseValue(gutter);

    var totalColumns = columns / span;
    var columnWidth = `calc((100% - (${gutter} * ${totalColumns})) / ${totalColumns})`;
    cell.style.width = columnWidth;

    if (test) {
      cell.setAttribute("data-test-column-width", columnWidth);
    }

    var margin = parsedGutter.value / 2 + parsedGutter.units;
    cell.style.margin = margin;

    if (offsetLeft) {
      let percentage = parseInt(columns / offsetLeft);
      let offsetMargin = "calc(((100% - " + gutter + " * " + percentage + ") / " + percentage + ") + " + (1.5 * parsedGutter.value) + parsedGutter.units + ")";
      cell.style.marginLeft = offsetMargin;
    }

    if (offsetRight) {
      let percentage = parseInt(columns / offsetRight);
      let offsetMargin = "calc(((100% - " + gutter + " * " + percentage + ") / " + percentage + ") + " + (1.5 * parsedGutter.value) + parsedGutter.units + ")";
      cell.style.marginRight = offsetMargin;
    }
  };
}

export default function grid(options = {}) {
  var columns = options.columns,
    gutter = options.gutter,
    margin = options.margin,
    defaultColumnSpan = options.defaultColumnSpan,
    defaultOffsetLeft = options.defaultOffsetLeft,
    defaultOffsetRight = options.defaultOffsetRight,
    test = options.test,
    mapHeader = options.mapHeader,
    mapFooter = options.mapFooter;

  var innerHTML = `
    <div role="presentation" data-jsua-style-slot="header"></div>
    <div role="presentation" data-jsua-style-slot="content"></div>
    <div role="presentation" data-jsua-style-slot="footer"></div>
  `;

  margin = margin || "0px";
  return function (element) {
    if (!element.matches("[data-jsua-style-component~=material-grid]")) {
      query(element).each(component("material-grid", innerHTML));
    }

    var wrapper = element.children[1];

    var parsedGutter = parseValue(gutter);
    var parsedMargin = parseValue(margin);

    var calculatedMargin = `calc(-${parsedGutter.value/2}${parsedGutter.units} + ${parsedMargin.value}${parsedMargin.units})`;
    wrapper.style.margin = calculatedMargin;

    if (test) {
      wrapper.setAttribute("data-test-margin", calculatedMargin);
    }

    query(element).each([

      slot("header", mapHeader),
      slot("footer", mapFooter),
      el => el.style.display = "flex",
      el => el.style.flexDirection = "column",
      el => el.style.alignItems = "stretch",
      map(mappers.slot("header"), [
        el => el.style.display = "flex",
        el => el.style.flexDirection = "column",
        el => el.style.alignItems = "stretch",
        el => el.style.flexGrow = 0
      ]),
      map(mappers.slot("content"), [
        el => el.style.display = "flex",
        el => el.style.flexDirection = "row",
        el => el.style.alignItems = "stretch",
        el => el.style.flexWrap = "wrap",
        el => el.style.flexGrow = 1,
        el => el.style.maxWidth = "initial",
        el => el.setAttribute("data-material-grid-columns", columns),
        el => el.setAttribute("data-material-grid-gutter", gutter),
        el => el.setAttribute("data-material-grid-margin", margin),
        map(mappers.realChildren(), [
          column({
            span: defaultColumnSpan,
            offsetLeft: defaultOffsetLeft,
            offsetRight: defaultOffsetRight
          })
        ])
      ]),
      map(mappers.slot("footer"), [
        el => el.style.display = "flex",
        el => el.style.flexDirection = "column",
        el => el.style.alignItems = "stretch",
        el => el.style.flexGrow = 0
      ]),
      when("normal", el => el.style.display = "flex"),
      when("visibility", "hidden", el => el.style.display = "none"),
      setState("normal")
    ]);
  };
}

grid.column = column;
