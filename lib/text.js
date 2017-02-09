"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.button = button;
exports.caption = caption;
exports.body = body;
exports.body2 = body2;
exports.subHeading = subHeading;
exports.subHeading2 = subHeading2;
exports.title = title;
exports.headline = headline;
exports.display = display;
exports.display2 = display2;
exports.display3 = display3;
exports.display4 = display4;

var _colorPalette = require("./color-palette");

var colorPalette = _interopRequireWildcard(_colorPalette);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function primaryText(backgroundColor) {
  var textColor = colorPalette.primaryText(backgroundColor);
  return [function (r) {
    return r.view.style.color = textColor.color;
  }, function (r) {
    return r.view.style.opacity = textColor.opacity;
  }];
}

function secondaryText(backgroundColor) {
  var textColor = colorPalette.secondaryText(backgroundColor);
  return [function (r) {
    return r.view.style.color = textColor.color;
  }, function (r) {
    return r.view.style.opacity = textColor.opacity;
  }];
}

function button(backgroundColor) {
  return [function (r) {
    return r.view.style.fontFamily = "Roboto, sans-serif";
  }, function (r) {
    return r.view.style.fontWeight = "500";
  }, function (r) {
    return r.view.style.fontSize = "14px";
  }, function (r) {
    return r.view.style.textTransform = "uppercase";
  }, primaryText(backgroundColor)];
}

function caption(backgroundColor) {
  return [function (r) {
    return r.view.style.fontFamily = "Roboto, sans-serif";
  }, function (r) {
    return r.view.style.fontWeight = "400";
  }, function (r) {
    return r.view.style.fontSize = "12px";
  }, secondaryText(backgroundColor)];
}

function body(backgroundColor, desktop) {
  var fontSize = desktop ? "13px" : "14px";
  return [function (r) {
    return r.view.style.fontFamily = "Roboto, sans-serif";
  }, function (r) {
    return r.view.style.fontWeight = "400";
  }, function (r) {
    return r.view.style.fontSize = fontSize;
  }, function (r) {
    return r.view.style.lineHeight = "20px";
  }, primaryText(backgroundColor)];
}

function body2(backgroundColor, desktop) {
  var fontSize = desktop ? "13px" : "14px";
  return [function (r) {
    return r.view.style.fontFamily = "Roboto, sans-serif";
  }, function (r) {
    return r.view.style.fontWeight = "400";
  }, function (r) {
    return r.view.style.fontSize = fontSize;
  }, function (r) {
    return r.view.style.lineHeight = "24px";
  }, primaryText(backgroundColor)];
}

function subHeading(backgroundColor, desktop) {
  var fontSize = desktop ? "15px" : "16px";
  return [function (r) {
    return r.view.style.fontFamily = "Roboto, sans-serif";
  }, function (r) {
    return r.view.style.fontWeight = "400";
  }, function (r) {
    return r.view.style.fontSize = fontSize;
  }, function (r) {
    return r.view.style.lineHeight = "24px";
  }, primaryText(backgroundColor)];
}

function subHeading2(backgroundColor, desktop) {
  var fontSize = desktop ? "15px" : "16px";
  return [function (r) {
    return r.view.style.fontFamily = "Roboto, sans-serif";
  }, function (r) {
    return r.view.style.fontWeight = "400";
  }, function (r) {
    return r.view.style.fontSize = fontSize;
  }, function (r) {
    return r.view.style.lineHeight = "28px";
  }, primaryText(backgroundColor)];
}

function title(backgroundColor) {
  return [function (r) {
    return r.view.style.fontFamily = "Roboto, sans-serif";
  }, function (r) {
    return r.view.style.fontWeight = "500";
  }, function (r) {
    return r.view.style.fontSize = "20px";
  },
  // r => r.view.style.lineHeight = "24px",
  primaryText(backgroundColor)];
}

function headline(backgroundColor) {
  return [function (r) {
    return r.view.style.fontFamily = "Roboto, sans-serif";
  }, function (r) {
    return r.view.style.fontWeight = "400";
  }, function (r) {
    return r.view.style.fontSize = "24px";
  }, function (r) {
    return r.view.style.lineHeight = "32px";
  }, primaryText(backgroundColor)];
}

function display(backgroundColor) {
  return [function (r) {
    return r.view.style.fontFamily = "Roboto, sans-serif";
  }, function (r) {
    return r.view.style.fontWeight = "400";
  }, function (r) {
    return r.view.style.fontSize = "34px";
  }, function (r) {
    return r.view.style.lineHeight = "40px";
  }, secondaryText(backgroundColor)];
}

function display2(backgroundColor) {
  return [function (r) {
    return r.view.style.fontFamily = "Roboto, sans-serif";
  }, function (r) {
    return r.view.style.fontWeight = "400";
  }, function (r) {
    return r.view.style.fontSize = "45px";
  }, function (r) {
    return r.view.style.lineHeight = "48px";
  }, secondaryText(backgroundColor)];
}

function display3(backgroundColor) {
  return [function (r) {
    return r.view.style.fontFamily = "Roboto, sans-serif";
  }, function (r) {
    return r.view.style.fontWeight = "400";
  }, function (r) {
    return r.view.style.fontSize = "56px";
  }, secondaryText(backgroundColor)];
}

function display4(backgroundColor) {
  return [function (r) {
    return r.view.style.fontFamily = "Roboto, sans-serif";
  }, function (r) {
    return r.view.style.fontWeight = "400";
  }, function (r) {
    return r.view.style.fontSize = "112px";
  }, secondaryText(backgroundColor)];
}