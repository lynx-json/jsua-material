"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.textField = textField;

var _text = require("./text");

var text = _interopRequireWildcard(_text);

var _jsuaQuery = require("jsua-query");

var _elevation = require("./elevation");

var _elevation2 = _interopRequireDefault(_elevation);

var _util = require("./util");

var _colorScheme = require("./color-scheme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function textField(element, options) {
  var backgroundColor = options && options.backgroundColor || _colorScheme.colorScheme.theme[2];

  function addShadowDOM(el) {
    function floatLabel() {
      var input = el.querySelector("[slot=input]");
      var label = el.querySelector("[slot=label]");

      if (input && label) {
        if (input.placeholder !== undefined) {
          input.placeholder = label.textContent;
        }

        label.style.transition = "transform 175ms ease-in-out, opacity 175ms ease-in-out";

        if (input.value === "") {
          label.style.transform = "translateY(8px)";
          label.style.opacity = 0;
        }

        input.addEventListener("input", function () {
          if (input.value === "") {
            label.style.transform = "translateY(8px)";
            label.style.opacity = 0;
          } else {
            label.style.transform = "none";
            label.style.opacity = 1;
          }
        });
      }
    }

    var shadow = el.attachShadow({ mode: "open" });
    shadow.innerHTML = "\n      <div id=\"group\">\n        <div id=\"label\"><slot name=\"label\"></slot></div>\n        <div id=\"input\"><slot name=\"input\"></slot></div>\n        <div id=\"other\"><slot></slot></div>\n      </div>\n    ";

    var group = shadow.getElementById("group");
    (0, _jsuaQuery.query)(group).each([function (el) {
      return el.style.display = "flex";
    }, function (el) {
      return el.style.flexDirection = "column";
    }]);

    var label = shadow.getElementById("label");
    (0, _jsuaQuery.query)(label).each([text.caption(backgroundColor), function (el) {
      return el.style.marginTop = "16px";
    }]);
    label.addEventListener("slotchange", floatLabel);

    var input = shadow.getElementById("input");
    (0, _jsuaQuery.query)(input).each([function (el) {
      return el.style.borderBottom = (0, _util.getDividerStyle)(backgroundColor);
    }, function (el) {
      return el.style.paddingBottom = "7px";
    }, // 8px - 1px border
    function (el) {
      return el.style.marginTop = "8px";
    }, function (el) {
      return el.style.marginBottom = "8px";
    }, text.input(backgroundColor)]);
    input.addEventListener("slotchange", floatLabel);
    input.addEventListener("focusin", function () {
      input.style.borderBottom = "2px solid " + _colorScheme.colorScheme.accent;
      input.style.paddingBottom = "6px";
    });
    input.addEventListener("focusout", function () {
      input.style.borderBottom = (0, _util.getDividerStyle)(backgroundColor);
      input.style.paddingBottom = "7px";
    });
  }

  addShadowDOM(element);
}