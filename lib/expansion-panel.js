"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.expansionPanel = expansionPanel;

var _text = require("./text");

var text = _interopRequireWildcard(_text);

var _jsuaQuery = require("jsua-query");

var _elevation = require("./elevation");

var _elevation2 = _interopRequireDefault(_elevation);

var _colorPalette = require("./color-palette");

var colorPalette = _interopRequireWildcard(_colorPalette);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function expansionPanel(options) {
  var backgroundColor = options.backgroundColor || "#ffffff";
  var collapsedIcon = options.collapsedIcon || "keyboard_arrow_down";
  var expandedIcon = options.expandedIcon || "keyboard_arrow_up";

  function addShadowDOM() {
    return function (el) {
      var shadow = el.attachShadow({ mode: "open" });
      shadow.innerHTML = "\n        <div id=\"panel\">\n          <div id=\"header\">\n            <slot name=\"header\">\n              <span id=\"sub-heading\"><slot name=\"sub-heading\"></slot></span>\n              <span id=\"secondary\"><slot name=\"secondary\"></slot></span>\n            </slot>\n            <span id=\"dropdown\"><slot name=\"dropdown\"></slot></span>\n          </div>\n          <div id=\"content-container\"><slot></slot></div>\n        </div>\n      ";

      var panel = shadow.getElementById("panel");

      (0, _jsuaQuery.query)(panel).each([function (el) {
        return el.style.display = "flex";
      }, function (el) {
        return el.style.flexDirection = "column";
      }, function (el) {
        return el.style.alignItems = "stretch";
      }, function (el) {
        return el.style.width = "100%";
      }]);

      var header = shadow.getElementById("header");
      (0, _jsuaQuery.query)(header).each([function (el) {
        return el.style.display = "flex";
      }, function (el) {
        return el.style.flexDirection = "row";
      }, function (el) {
        return el.style.flexWrap = "nowrap";
      }, function (el) {
        return el.style.height = "48px";
      }, function (el) {
        return el.style.alignItems = "center";
      }, function (el) {
        return el.style.paddingLeft = "24px";
      }, function (el) {
        return el.style.paddingRight = "24px";
      }, function (el) {
        return el.style.transition = "height 175ms ease-in-out";
      }]);

      if (options.label) {
        (function () {
          var labelElement = document.createElement("span");
          labelElement.textContent = options.label;
          (0, _jsuaQuery.query)(header).select("[name=header]").each(function (el) {
            return el.parentElement.replaceChild(labelElement, el);
          });
        })();
      }

      var contentContainer = shadow.getElementById("content-container");
      (0, _jsuaQuery.query)(contentContainer).each([function (el) {
        return el.style.display = "flex";
      }, function (el) {
        return el.flexDirection = "column";
      }, function (el) {
        return el.style.paddingLeft = "24px";
      }, function (el) {
        return el.style.paddingRight = "24px";
      }, function (el) {
        return el.style.height = "0px";
      }, function (el) {
        return el.style.opacity = 0;
      }, function (el) {
        return el.style.overflow = "hidden";
      }, function (el) {
        return el.style.transition = "height 175ms ease-in-out, opacity 175ms ease-in-out";
      }]);

      (0, _jsuaQuery.query)(header).select("#sub-heading").each([function (el) {
        return el.style.display = "flex";
      }, function (el) {
        return el.style.flexGrow = "1";
      }, text.subHeading(backgroundColor)]);

      (0, _jsuaQuery.query)(header).select("#secondary").each([function (el) {
        return el.style.display = "flex";
      }, function (el) {
        return el.style.flexGrow = "2";
      }, text.caption(backgroundColor)]);

      var dropdownColor = colorPalette.disabledText(backgroundColor);

      (0, _jsuaQuery.query)(header).select("#dropdown").each([function (el) {
        return el.style.display = "flex";
      }, function (el) {
        return el.style.flexGrow = "0";
      }, function (el) {
        return el.style.marginLeft = "auto";
      }, function (el) {
        return el.style.color = dropdownColor.color;
      }, function (el) {
        return el.style.opacity = dropdownColor.opacity;
      }]);
    };
  }

  function addDropdown() {
    return function (el) {
      var dropdown = document.createElement("i");
      dropdown.textContent = collapsedIcon;
      dropdown.className = "material-icons";
      dropdown.id = "dropdown";
      dropdown.setAttribute("slot", "dropdown");
      dropdown.style.cursor = "pointer";
      dropdown.style.width = "24px";
      dropdown.style.height = "24px";
      dropdown.style.overflow = "hidden";

      dropdown.addEventListener("click", function () {
        var header = el.shadowRoot.getElementById("header");
        var contentContainer = el.shadowRoot.getElementById("content-container");
        if (el.getAttribute("mode") === "open") {
          el.setAttribute("mode", "closed");
          dropdown.textContent = collapsedIcon;
          header.style.height = "48px";
          contentContainer.style.height = "0px";
          contentContainer.style.opacity = 0;
        } else {
          el.setAttribute("mode", "open");
          dropdown.textContent = expandedIcon;
          header.style.height = "64px";

          var height = 0;
          (0, _jsuaQuery.query)(el).select(":not([slot])").each(function (child) {
            return height += child.scrollHeight;
          });

          contentContainer.style.height = height + "px";
          // contentContainer.style.height = "auto";
          contentContainer.style.opacity = 1;
        }
      });

      el.appendChild(dropdown);
    };
  }

  return [function (el) {
    return el.flexDirection = "column";
  }, addDropdown(), addShadowDOM()];
}