import {
  query,
  on
} from "jsua-query";

import {
  component,
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
    component("text-field"),
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
    component("text-field-label"),
    el => text.caption(el, options),
    el => el.style.marginTop = "16px",
    el => el.style.transition = "transform 175ms ease-in-out, opacity 175ms ease-in-out"
  ];
};

textField.control = function (options) {
  return [
    component("text-field-control"),
    floatingLabel(options),
    el => el.style.marginTop = "8px",
    el => el.style.marginBottom = "8px",
    on("input", floatingLabel(options))
  ];
};

textField.singleLine = function (options) {
  return [
    component("text-field-single-line"),
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
    component("text-field-dropdown"),
    textField.control(options),
    el => el.style.backgroundColor = "inherit",
    el => text.input(el, options),
    el => el.style.outline = "none",
    el => el.style.border = "none",
    el => el.style.borderBottom = getDividerStyle(options),
    el => el.style.borderRadius = "0px",
    el => el.style.paddingBottom = "7px", // 8px - 1px border,
    el => el.style.webkitAppearance = "none",
    el => el.style.mozAppearance = "none",
    el => el.style.appearance = "none",
    el => el.style.backgroundImage = "url(data:image/svg+xml;charset=utf-8,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22utf-8%22%3F%3E%0D%0A%3Csvg%20version%3D%221.1%22%20baseProfile%3D%22tiny%22%20id%3D%22Logo_and_Name%22%0D%0A%09%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20%0D%0A%09%20xml%3Aspace%3D%22preserve%22%3E%0D%0A%20%20%20%3Crect%20fill%3D%22%23ccc%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20%2F%3E%0D%0A%3C%2Fsvg%3E)",
    el => el.style.backgroundPosition = "right",
    el => el.style.backgroundRepeat = "no-repeat",
    el => el.style.backgroundSize = "24px 24px"
  ];
};
