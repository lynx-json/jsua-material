"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = textField;

var _jsuaQuery = require("jsua-query");

var _util = require("./util");

var _text = require("./text");

var _text2 = _interopRequireDefault(_text);

var _color = require("./color");

var _color2 = _interopRequireDefault(_color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function floatingLabel(options) {
  var textColor = (0, _util.getTextColor)(options);
  var opacity = (0, _util.getPrimaryTextOpacity)(options);

  return function (inputElement) {
    if (options && options.floatingLabel === false) return;
    if (inputElement.placeholder === undefined) return;

    var restingStyle = [function (el) {
      return el.style.transform = "translateY(8px)";
    }, function (el) {
      return el.style.opacity = 0;
    }];

    var floatingStyle = [function (el) {
      return el.style.transform = "none";
    }, function (el) {
      return el.style.opacity = opacity;
    }];

    var labelStyle = inputElement.value === "" ? restingStyle : floatingStyle;

    (0, _jsuaQuery.query)(inputElement.parentElement).select("[data-material-component~=text-field-label]").each([function (el) {
      return inputElement.placeholder = el.textContent;
    }, labelStyle]);
  };
}

function textField(options) {
  var hasError = false;
  var hasFocus = false;

  function errorState() {
    return [function (el) {
      return el.materialSetError = function () {
        return (0, _util.raiseEvent)(el, "material-error-on");
      };
    }, function (el) {
      return el.materialClearError = function () {
        return (0, _util.raiseEvent)(el, "material-error-off");
      };
    }, updateStateVisualization()];
  }

  function updateStateVisualization() {
    function getLabelColor() {
      if (hasError) return _color2.default.error;
      if (hasFocus) return _color2.default.primary;

      return (0, _util.getTextColor)(options);
    }

    function getBorderStyle() {
      if (hasFocus && hasError) return "2px solid " + _color2.default.error;
      if (hasError) return "1px solid " + _color2.default.error;
      if (hasFocus) return "2px solid " + _color2.default.primary;
      return (0, _util.getDividerStyle)(options);
    }

    return function (el) {
      (0, _jsuaQuery.query)(el).select("[data-material-component~=text-field-label]").each(function (el) {
        return el.style.color = getLabelColor();
      });

      (0, _jsuaQuery.query)(el).select("[data-material-component~=text-field-control]").each([function (el) {
        return el.style.borderBottom = getBorderStyle();
      }, function (el) {
        if (hasFocus) {
          el.style.paddingBottom = "6px";
        } else {
          el.style.paddingBottom = "7px";
        }
      }]);
    };
  }

  return [(0, _util.component)("text-field"), errorState(), (0, _jsuaQuery.on)("material-error-on", [function (el) {
    return hasError = true;
  }, updateStateVisualization()]), (0, _jsuaQuery.on)("material-error-off", [function (el) {
    return hasError = false;
  }, updateStateVisualization()]), function (el) {
    return el.style.display = "flex";
  }, function (el) {
    return el.style.flexDirection = "column";
  }, function (el) {
    return el.style.alignItems = "stretch";
  }, (0, _jsuaQuery.on)("focusin", [function (el) {
    return hasFocus = true;
  }, updateStateVisualization()]), (0, _jsuaQuery.on)("focusout", [function (el) {
    return hasFocus = false;
  }, updateStateVisualization()])];
}

textField.label = function (options) {
  return [(0, _util.component)("text-field-label"), function (el) {
    return _text2.default.caption(el, options);
  }, function (el) {
    return el.style.marginTop = "16px";
  }, function (el) {
    return el.style.transition = "transform 175ms ease-in-out, opacity 175ms ease-in-out";
  }];
};

textField.control = function (options) {
  return [(0, _util.component)("text-field-control"), floatingLabel(options), function (el) {
    return el.style.marginTop = "8px";
  }, function (el) {
    return el.style.marginBottom = "8px";
  }, (0, _jsuaQuery.on)("input", floatingLabel(options))];
};

textField.singleLine = function (options) {
  return [(0, _util.component)("text-field-single-line"), textField.control(options), function (el) {
    return el.style.backgroundColor = "inherit";
  }, function (el) {
    return _text2.default.input(el, options);
  }, function (el) {
    return el.style.outline = "none";
  }, function (el) {
    return el.style.border = "none";
  }, function (el) {
    return el.style.borderBottom = (0, _util.getDividerStyle)(options);
  }, function (el) {
    return el.style.borderRadius = "0px";
  }, function (el) {
    return el.style.paddingBottom = "7px";
  } // 8px - 1px border
  ];
};

textField.dropdown = function (options) {
  return [(0, _util.component)("text-field-dropdown"), textField.control(options), function (el) {
    return el.style.backgroundColor = "inherit";
  }, function (el) {
    return _text2.default.input(el, options);
  }, function (el) {
    return el.style.outline = "none";
  }, function (el) {
    return el.style.border = "none";
  }, function (el) {
    return el.style.borderBottom = (0, _util.getDividerStyle)(options);
  }, function (el) {
    return el.style.borderRadius = "0px";
  }, function (el) {
    return el.style.paddingBottom = "7px";
  }, // 8px - 1px border,
  function (el) {
    return el.style.WebkitAppearance = "none";
  }, function (el) {
    return el.style.MozAppearance = "none";
  }, function (el) {
    return el.style.appearance = "none";
  }, function (el) {
    return el.style.backgroundImage = "url(data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMDAwMDAwIiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik03IDEwbDUgNSA1LTV6Ii8+CiAgICA8cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+Cjwvc3ZnPg==)";
  }, function (el) {
    return el.style.backgroundPosition = "right";
  }, function (el) {
    return el.style.backgroundRepeat = "no-repeat";
  }, function (el) {
    return el.style.backgroundSize = "24px 24px";
  }];
};