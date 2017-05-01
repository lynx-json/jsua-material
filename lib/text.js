"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = text;

var _util = require("./util");

function text(color, opacity) {
  color = color || (0, _util.getTextColor)();
  opacity = opacity || (0, _util.getPrimaryTextOpacity)(color);

  return [function (el) {
    return el.style.fontFamily = "Roboto, sans-serif";
  }, function (el) {
    return el.style.fontWeight = "400";
  }, function (el) {
    return el.style.fontSize = "14px";
  }, function (el) {
    return el.style.color = color;
  }, function (el) {
    return el.style.opacity = opacity;
  }];
}

text.display4 = function display4(color, opacity) {
  color = color || (0, _util.getTextColor)();
  opacity = opacity || (0, _util.getSecondaryTextOpacity)(color);

  return [text(color, opacity), function (el) {
    return el.style.fontWeight = "300";
  }, function (el) {
    return el.style.fontSize = "112px";
  }];
};

text.display3 = function display3(color, opacity) {
  color = color || (0, _util.getTextColor)();
  opacity = opacity || (0, _util.getSecondaryTextOpacity)(color);

  return [text(color, opacity), function (el) {
    return el.style.fontSize = "56px";
  }];
};

text.display2 = function display2(color, opacity) {
  color = color || (0, _util.getTextColor)();
  opacity = opacity || (0, _util.getSecondaryTextOpacity)(color);

  return [text(color, opacity), function (el) {
    return el.style.fontSize = "45px";
  }, function (el) {
    return el.style.lineHeight = "48px";
  }];
};

text.display = function display(color, opacity) {
  color = color || (0, _util.getTextColor)();
  opacity = opacity || (0, _util.getSecondaryTextOpacity)(color);

  return [text(color, opacity), function (el) {
    return el.style.fontSize = "34px";
  }, function (el) {
    return el.style.lineHeight = "40px";
  }];
};

text.headline = function headline(color, opacity) {
  return [text(color, opacity), function (el) {
    return el.style.fontSize = "24px";
  }, function (el) {
    return el.style.lineHeight = "32px";
  }];
};

text.title = function title(color, opacity) {
  return [text(color, opacity), function (el) {
    return el.style.fontWeight = "500";
  }, function (el) {
    return el.style.fontSize = "20px";
  }];
};

text.subheading2 = function subheading2(color, opacity) {
  return [text(color, opacity), function (el) {
    return el.style.fontSize = "16px";
  }, function (el) {
    return el.style.lineHeight = "28px";
  }];
};

text.subheading = function subheading(color, opacity) {
  return [text(color, opacity), function (el) {
    return el.style.fontSize = "16px";
  }, function (el) {
    return el.style.lineHeight = "24px";
  }];
};

text.body2 = function body2(color, opacity) {
  return [text(color, opacity), function (el) {
    return el.style.fontWeight = "500";
  }, function (el) {
    return el.style.fontSize = "14px";
  }, function (el) {
    return el.style.lineHeight = "28px";
  }];
};

text.body = function body(color, opacity) {
  return [text(color, opacity), function (el) {
    return el.style.fontSize = "14px";
  }, function (el) {
    return el.style.lineHeight = "24px";
  }];
};

text.caption = function caption(color, opacity) {
  return [text(color, opacity), function (el) {
    return el.style.fontSize = "12px";
  }, function (el) {
    return el.style.lineHeight = "14px";
  }];
};

text.button = function button(color, opacity) {
  return [text(color, opacity), function (el) {
    return el.style.fontSize = "14px";
  }, function (el) {
    return el.style.fontWeight = "500";
  }, function (el) {
    return el.style.textTransform = "uppercase";
  }];
};

text.input = function input(color, opacity) {
  return [text(color, opacity), function (el) {
    return el.style.fontSize = "16px";
  }, function (el) {
    return el.style.lineHeight = "18px";
  }];
};