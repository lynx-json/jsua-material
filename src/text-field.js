import {
  query,
  on,
  component
} from "@lynx-json/jsua-style";

import {
  getTextColor,
  getPrimaryTextOpacity,
  getDividerStyle,
  raiseEvent
} from "./util";

import text from "./text";
import color from "./color";

function floatingLabel(options) {
  var textColor = getTextColor(options);
  var opacity = getPrimaryTextOpacity(options);

  return function (inputElement) {
    if (options && options.floatingLabel === false) return;
    if (inputElement.placeholder === undefined) return;

    var restingStyle = [
      el => el.style.transform = "translateY(8px)",
      el => el.style.opacity = 0
    ];

    var floatingStyle = [
      el => el.style.transform = "none",
      el => el.style.opacity = opacity
    ];

    var labelStyle = inputElement.value === "" ? restingStyle : floatingStyle;

    query(inputElement.parentElement)
      .select("[data-material-component~=text-field-label]")
      .each([
        el => inputElement.placeholder = el.textContent,
        labelStyle
      ]);
  };
}

export default function textField(options) {
  var hasError = false;
  var hasFocus = false;

  function errorState() {
    return [
      el => el.materialSetError = () => raiseEvent(el, "material-error-on"),
      el => el.materialClearError = () => raiseEvent(el, "material-error-off"),
      updateStateVisualization()
    ];
  }

  function updateStateVisualization() {
    function getLabelColor() {
      if (hasError) return color.error;
      if (hasFocus) return color.primary;

      return getTextColor(options);
    }

    function getBorderStyle() {
      if (hasFocus && hasError) return `2px solid ${color.error}`;
      if (hasError) return `1px solid ${color.error}`;
      if (hasFocus) return `2px solid ${color.primary}`;
      return getDividerStyle(options);
    }

    return function (el) {
      query(el)
        .select("[data-material-component~=text-field-label]")
        .each(el => el.style.color = getLabelColor());

      query(el)
        .select("[data-material-component~=text-field-control]")
        .each([
          el => el.style.borderBottom = getBorderStyle(),
          el => {
            if (hasFocus) {
              el.style.paddingBottom = "6px"
            } else {
              el.style.paddingBottom = "7px"
            }
          }
        ]);
    };
  }

  return [
    errorState(),
    on("material-error-on", [
      el => hasError = true,
      updateStateVisualization()
    ]),
    on("material-error-off", [
      el => hasError = false,
      updateStateVisualization()
    ]),
    el => el.style.display = "flex",
    el => el.style.flexDirection = "column",
    el => el.style.alignItems = "stretch",
    on("focusin", [
      el => hasFocus = true,
      updateStateVisualization()
    ]),
    on("focusout", [
      el => hasFocus = false,
      updateStateVisualization()
    ])
  ];
}

textField.label = function (options) {
  return [
    el => text.caption(el, options),
    el => el.style.marginTop = "16px",
    el => el.style.transition = "transform 175ms ease-in-out, opacity 175ms ease-in-out"
  ];
};

textField.control = function (options) {
  return [
    floatingLabel(options),
    el => el.style.marginTop = "8px",
    el => el.style.marginBottom = "8px",
    on("input", floatingLabel(options))
  ];
};

textField.singleLine = function (options) {
  return [
    textField.control(options),
    el => el.style.backgroundColor = "inherit",
    el => text.input(el, options),
    el => el.style.outline = "none",
    el => el.style.border = "none",
    el => el.style.borderBottom = getDividerStyle(options),
    el => el.style.borderRadius = "0px",
    el => el.style.paddingBottom = "7px" // 8px - 1px border
  ];
};

textField.dropdown = function (options) {
  return [
    textField.control(options),
    el => el.style.backgroundColor = "inherit",
    el => text.input(el, options),
    el => el.style.outline = "none",
    el => el.style.border = "none",
    el => el.style.borderBottom = getDividerStyle(options),
    el => el.style.borderRadius = "0px",
    el => el.style.paddingBottom = "7px", // 8px - 1px border,
    el => el.style.WebkitAppearance = "none",
    el => el.style.MozAppearance = "none",
    el => el.style.appearance = "none",
    el => el.style.backgroundImage = "url(data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMDAwMDAwIiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik03IDEwbDUgNSA1LTV6Ii8+CiAgICA8cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+Cjwvc3ZnPg==)",
    el => el.style.backgroundPosition = "right",
    el => el.style.backgroundRepeat = "no-repeat",
    el => el.style.backgroundSize = "24px 24px"
  ];
};
