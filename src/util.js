import color from "./color";
import {
  query,
  on
} from "jsua-query";

var lightTextOpacity = {
  primary: 1,
  secondary: .7,
  disabled: .5,
  divider: .12
};

var darkTextOpacity = {
  primary: .87,
  secondary: .54,
  disabled: .38,
  divider: .12
};

export function getTheme(options) {
  if (options && options.theme) return color.getThemeColors(options.theme);
  return color.getThemeColors(color.theme);
}

export function getDividerStyle(options) {
  var textColor = getTextColor(options);

  if (textColor === "white") {
    return `1px solid rgba(255, 255, 255, .12)`;
  } else {
    return `1px solid rgba(0, 0, 0, .12)`;
  }
}

export function getTextColor(options) {
  if (options && options.color) return options.color;

  if (options && options.theme === "light") return "black";
  if (options && options.theme === "dark") return "white";
  if (color.theme === "light") return "black";
  if (color.theme === "dark") return "white";

  throw new Error("Unknown text color");
}

export function getPrimaryTextOpacity(color) {
  if (color === "white") return lightTextOpacity.primary;
  return darkTextOpacity.primary;
}

export function getSecondaryTextOpacity(color) {
  if (color === "white") return lightTextOpacity.secondary;
  return darkTextOpacity.secondary;
}

export function getDisabledTextOpacity(color) {
  if (color === "white") return lightTextOpacity.disabled;
  return darkTextOpacity.disabled;
}

export function blockComponent(el, name) {
  if (el.dataset.materialComponent) {
    throw new Error(`The element has already been assigned the component ${el.dataset.materialComponent}`);
  }

  el.dataset.materialComponent = name;
}

export function wrapChildren(element) {
  var wrapper = document.createElement("div");
  wrapper.setAttribute("role", "presentation");

  var children = [];
  for (var i = 0, max = element.childNodes.length; i < max; i++) {
    children.push(element.childNodes[i]);
  }

  children.forEach(function (child) {
    wrapper.appendChild(child);
  });

  element.appendChild(wrapper);
  return wrapper;
}

export function createComponent(element, options) {
  var componentTemplate = document.createElement("div");
  var slots = {};
  element.getSlot = function (name) {
    return slots[name];
  };

  if (options.innerHTML) {
    componentTemplate.innerHTML = options.innerHTML;

    query(componentTemplate)
      .select("[data-material-slot]")
      .each(slot => {
        slots[slot.dataset.materialSlot] = slot;
      });

    query(componentTemplate)
      .select("[data-material-slot=content]")
      .each(function (contentSlot) {
        while (element.firstChild) {
          contentSlot.appendChild(element.firstChild);
        }
      });

    while (componentTemplate.firstChild) {
      element.appendChild(componentTemplate.firstChild);
    }
  }

  if (options.name) {
    blockComponent(element, options.name);
  }

  return element;
}

function matches(element, selector) {
  if (typeof selector === "function") return selector(element);
  return element.matches(selector);
}

export function clearChildren(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

export function findNearestAncestor(element, selector) {
  var current = element.parentElement;

  while (current !== null && current !== undefined) {
    if (matches(current, selector)) return current;
    current = current.parentElement;
  }

  return null;
}
