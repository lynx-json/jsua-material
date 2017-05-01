"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = raisedButton;

var _jsuaQuery = require("jsua-query");

var _util = require("./util");

var _elevation = require("./elevation");

var _elevation2 = _interopRequireDefault(_elevation);

var _text = require("./text");

var _text2 = _interopRequireDefault(_text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function raisedButton(options) {
  var textColor = (0, _util.getTextColor)(options);

  return function (element) {
    (0, _jsuaQuery.query)(element).select("*").each(function (el) {
      return el.style.userSelect = "none";
    });

    (0, _jsuaQuery.query)(element).each([function (el) {
      return el.style.cursor = "default";
    }, function (el) {
      return el.style.display = "flex";
    }, function (el) {
      return el.style.flexDirection = "row";
    }, function (el) {
      return el.style.flexWrap = "wrap";
    }, function (el) {
      return el.style.alignItems = "center";
    }, function (el) {
      return el.style.justifyContent = "center";
    }, function (el) {
      return el.style.minHeight = "36px";
    }, function (el) {
      return el.style.minWidth = "88px";
    }, function (el) {
      return el.style.paddingLeft = "16px";
    }, function (el) {
      return el.style.paddingRight = "16px";
    }, function (el) {
      return el.style.borderRadius = "2px";
    }, function (el) {
      return (0, _elevation2.default)(2);
    }, function (el) {
      var touchTarget = document.createElement("div");
      touchTarget.role = "presentation";
      el.parentElement.replaceChild(touchTarget, el);
      touchTarget.addEventListener("click", function () {
        el.click();
      });
      touchTarget.appendChild(el);
      (0, _jsuaQuery.query)(touchTarget).each([_text2.default.button(textColor), function (el) {
        return el.style.display = "flex";
      }, function (el) {
        return el.style.flexDirection = "column";
      }, function (el) {
        return el.style.alignItems = "stretch";
      }, function (el) {
        return el.style.paddingTop = "6px";
      }, function (el) {
        return el.style.paddingBottom = "6px";
      }, (0, _jsuaQuery.on)("mousedown", function (el) {
        return (0, _jsuaQuery.query)(el.firstElementChild).each((0, _elevation2.default)(8));
      }), (0, _jsuaQuery.on)("mouseup", function (el) {
        return (0, _jsuaQuery.query)(el.firstElementChild).each((0, _elevation2.default)(2));
      }), (0, _jsuaQuery.on)("touchstart", function (el) {
        return (0, _jsuaQuery.query)(el.firstElementChild).each((0, _elevation2.default)(8));
      }), (0, _jsuaQuery.on)("touchend", function (el) {
        return (0, _jsuaQuery.query)(el.firstElementChild).each((0, _elevation2.default)(2));
      })]);
    }]);
  };
}