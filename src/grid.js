import {
  blockComponent,
  wrapChildren
} from "./util";

import {
  query,
  component
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

export default function grid(columns, gutter, margin, test) {
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

    query(wrapper).each([
      el => el.style.display = "flex",
      el => el.style.flexDirection = "row",
      el => el.style.flexWrap = "wrap",
      el => el.style.flexGrow = 1,
      el => el.style.maxWidth = "initial",
      el => el.setAttribute("data-material-grid-columns", columns),
      el => el.setAttribute("data-material-grid-gutter", gutter),
      el => el.setAttribute("data-material-grid-margin", margin)
    ]);

    query(element).each([
      el => el.style.display = "flex",
      el => el.style.flexDirection = "column",
      el => el.style.alignItems = "stretch",
      el => query(el.firstElementChild).each([
        el => el.style.display = "flex",
        el => el.style.flexDirection = "column",
        el => el.style.alignItems = "stretch",
        el => el.style.flexGrow = 0
      ]),
      el => query(el.lastElementChild).each([
        el => el.style.display = "flex",
        el => el.style.flexDirection = "column",
        el => el.style.alignItems = "stretch",
        el => el.style.flexGrow = 0
      ])
    ]);
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

grid.header = function () {
  return [
    component.slot("material-grid", "header"),
    el => el.style.margin = "0px",
    el => el.style.maxWidth = "100%",
    el => el.style.width = "initial"
  ];
}

grid.footer = function () {
  return [
    component.slot("material-grid", "footer"),
    el => el.style.margin = "0px",
    el => el.style.maxWidth = "100%",
    el => el.style.width = "initial"
  ];
}
