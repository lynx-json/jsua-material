"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flat = flat;
exports.raised = raised;

var _util = require("./util");

var _text = require("./text");

var text = _interopRequireWildcard(_text);

var _jsuaQuery = require("jsua-query");

var _elevation = require("./elevation");

var _elevation2 = _interopRequireDefault(_elevation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function shadow(style) {
  return function (el) {
    var shadow = el.attachShadow({ mode: "open" });
    shadow.innerHTML = "<div><slot></slot></div>";
    (0, _jsuaQuery.query)(shadow.firstElementChild).each(style);
  };
}

function flat(color) {
  return [shadow([function (el) {
    return el.style.minHeight = "36px";
  }, function (el) {
    return el.style.minWidth = "64px";
  }, function (el) {
    return el.style.paddingLeft = "8px";
  }, function (el) {
    return el.style.paddingRight = "8px";
  }, function (el) {
    return el.style.borderRadius = "2px";
  }, function (el) {
    return (0, _jsuaQuery.query)(el).each(text.button("#ffffff"));
  }, function (el) {
    if (color) {
      el.style.color = color;
    }
  }]), function (el) {
    return el.style.paddingTop = "6px";
  }, function (el) {
    return el.style.paddingBottom = "6px";
  }];
}

function raised(backgroundColor) {
  return [shadow([function (el) {
    return el.style.display = "flex";
  }, function (el) {
    return el.style.flexDirection = "row";
  }, function (el) {
    return el.style.alignItems = "center";
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
    return el.style.backgroundColor = backgroundColor;
  }, text.button(backgroundColor), (0, _elevation2.default)(2)]), function (el) {
    return el.style.paddingTop = "6px";
  }, function (el) {
    return el.style.paddingBottom = "6px";
  }, function (el) {
    return el.style.cursor = "pointer";
  }, (0, _jsuaQuery.on)("mousedown", function (el) {
    return (0, _jsuaQuery.query)(el.shadowRoot.firstElementChild).each((0, _elevation2.default)(8));
  }), (0, _jsuaQuery.on)("mouseup", function (el) {
    return (0, _jsuaQuery.query)(el.shadowRoot.firstElementChild).each((0, _elevation2.default)(2));
  }), (0, _jsuaQuery.on)("touchstart", function (el) {
    return (0, _jsuaQuery.query)(el.shadowRoot.firstElementChild).each((0, _elevation2.default)(8));
  }), (0, _jsuaQuery.on)("touchend", function (el) {
    return (0, _jsuaQuery.query)(el.shadowRoot.firstElementChild).each((0, _elevation2.default)(2));
  })];
}