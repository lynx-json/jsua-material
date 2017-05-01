"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = expansionPanel;

var _util = require("./util");

var _jsuaQuery = require("jsua-query");

var _color = require("./color");

var _color2 = _interopRequireDefault(_color);

var _text = require("./text");

var _text2 = _interopRequireDefault(_text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function expansionPanel(options) {
  return function (element) {
    var innerHTML = "\n      <div role=\"presentation\">\n        <div data-material-slot=\"header\" role=\"presentation\"></div>\n        <div data-material-slot=\"toggle\" role=\"presentation\"><i class=\"material-icons\">keyboard_arrow_down</i></div>\n      </div>\n      <div role=\"presentation\">\n        <div data-material-slot=\"content\" role=\"presentation\"></div>\n      </div>\n    ";

    var textColor = (0, _util.getTextColor)(options);

    (0, _jsuaQuery.query)(element).each([(0, _util.component)("expansion-panel", innerHTML), function (el) {
      return el.style.display = "flex";
    }, function (el) {
      return el.style.flexDirection = "column";
    }, function (el) {
      return el.style.alignItems = "stretch";
    }]);

    var expandCollapseWrapper = element.lastElementChild;

    (0, _jsuaQuery.query)(expandCollapseWrapper).each([function (el) {
      return el.style.maxHeight = "0px";
    }, function (el) {
      return el.style.overflowY = "hidden";
    }, function (el) {
      return el.style.opacity = 0;
    }, _text2.default.body(textColor)]);

    var contentContainer = element.lastElementChild.firstElementChild;
    contentContainer.style.display = "flex";
    contentContainer.flexDirection = "column";
    contentContainer.style.paddingLeft = "24px";
    contentContainer.style.paddingRight = "24px";
    contentContainer.style.paddingBottom = "16px";
    contentContainer.style.marginRight = "24px";

    element.materialExpand = function expand() {
      expandCollapseWrapper.style.maxHeight = contentContainer.offsetHeight + "px";
      expandCollapseWrapper.style.opacity = 1;
      componentHeader.style.minHeight = "64px";
      element.dataset.materialExpansionPanelState = "expanded";
      (0, _jsuaQuery.query)(toggleSlot).select("i.material-icons").each(function (el) {
        return el.textContent = "keyboard_arrow_up";
      });
    };

    element.materialCollapse = function collapse() {
      expandCollapseWrapper.style.maxHeight = "0px";
      expandCollapseWrapper.style.opacity = 0;
      componentHeader.style.minHeight = "48px";
      element.dataset.materialExpansionPanelState = "collapsed";
      (0, _jsuaQuery.query)(toggleSlot).select("i.material-icons").each(function (el) {
        return el.textContent = "keyboard_arrow_down";
      });
    };

    var componentHeader = element.firstElementChild;

    (0, _jsuaQuery.query)(componentHeader).each([_text2.default.subheading(textColor), function (el) {
      return el.style.cursor = "default";
    }, function (el) {
      return el.style.display = "flex";
    }, function (el) {
      return el.style.flexDirection = "row";
    }, function (el) {
      return el.style.flexWrap = "nowrap";
    }, function (el) {
      return el.style.alignItems = "center";
    }, function (el) {
      return el.style.paddingLeft = "24px";
    }, function (el) {
      return el.style.paddingRight = "24px";
    }, function (el) {
      return el.style.minHeight = "48px";
    }, function (el) {
      return el.style.transition = "min-height 175ms ease-in-out";
    }]);

    var headerSlot = element.firstElementChild.firstElementChild;
    headerSlot.style.flexGrow = 1;

    var toggleSlot = element.firstElementChild.lastElementChild;

    (0, _jsuaQuery.query)(toggleSlot).select("i.material-icons").each([function (el) {
      return el.style.color = textColor;
    }, function (el) {
      return el.style.opacity = (0, _util.getDisabledTextOpacity)(textColor);
    }, function (el) {
      return el.style.width = "24px";
    }, function (el) {
      return el.style.height = "24px";
    }, function (el) {
      return el.style.overflow = "hidden";
    }, function (el) {
      return el.style.cursor = "default";
    }, function (el) {
      return el.style.borderRadius = "2px";
    }, function (el) {
      return el.style.border = "1px solid transparent";
    }, (0, _jsuaQuery.on)("mouseover", function (el) {
      return el.style.border = (0, _util.getDividerStyle)(textColor);
    }), (0, _jsuaQuery.on)("mouseout", function (el) {
      return el.style.border = "1px solid transparent";
    })]);

    var state = options && options.state || "collapsed";
    if (state === "expanded") {
      element.materialExpand();
    }

    expandCollapseWrapper.style.transition = "max-height 175ms ease-in-out, opacity 175ms ease-in-out";

    componentHeader.addEventListener("click", function () {
      if (element.dataset.materialExpansionPanelState !== "expanded") {
        element.materialExpand();
      } else {
        element.materialCollapse();
      }
    });
  };
}

expansionPanel.header = function () {
  return function (element) {
    var panel = (0, _util.findNearestAncestor)(element, "[data-material-component=expansion-panel]");

    if (!panel) {
      throw new Error("The element must be contained within a material expansion panel component.");
    }

    var headerSlot = panel.firstElementChild.firstElementChild;
    (0, _util.clearChildren)(headerSlot);
    headerSlot.appendChild(element);
  };
};