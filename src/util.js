import color from "./color";
import {
  query,
  on
} from "@lynx-json/jsua-style";

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

export function getTheme(theme) {
  if (theme) return color.getThemeColors(theme);
  return color.getThemeColors(color.theme);
}

export function getDividerStyle(textColor) {
  if (textColor === "white") {
    return `1px solid rgba(255, 255, 255, .12)`;
  } else {
    return `1px solid rgba(0, 0, 0, .12)`;
  }
}

export function getTextColor(options) {
  if (options && options.textColor) return options.textColor;
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

export function component(name, innerHTML) {
  return function (element) {
    if (innerHTML) {
      var componentTemplate = document.createElement("div");
      componentTemplate.innerHTML = innerHTML;

      var slots = {};

      function getSlot(name) {
        return slots[name];
      };
      element.getSlot = getSlot;

      element.clearSlot = function (name) {
        var slot = getSlot(name);

        if (!slot) {
          throw new Error(`Slot ${name} does not exist.`);
        }

        while (slot.firstElementChild) {
          slot.removeChild(slot.firstElementChild);
        }
      };

      element.addToSlot = function (name, element) {
        var slot = getSlot(name);

        if (!slot) {
          throw new Error(`Slot ${name} does not exist.`);
        }

        slot.appendChild(element);
      };

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

    var components = element.dataset.materialComponent ? element.dataset.materialComponent.split(" ") : [];
    if (components.includes(name)) return;

    components.push(name);
    element.dataset.materialComponent = components.join(" ");
  };
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

export function raiseEvent(element, name, bubble, cancelable) {
  var evt = document.createEvent("Event");
  evt.initEvent(name, bubble, cancelable);
  element.dispatchEvent(evt);
}
