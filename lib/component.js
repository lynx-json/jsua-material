"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = component;

var _util = require("./util");

var _jsuaQuery = require("jsua-query");

function component(name, innerHTML) {
  return function (element) {
    var slots = {};

    function addToSlot(el) {
      var slotName = el.dataset.materialSlotName || "content";

      if (slots[slotName]) {
        slots[slotName].appendChild(el);
      }
    }

    if (innerHTML) {
      var componentTemplate = document.createElement("div");
      componentTemplate.innerHTML = innerHTML;

      (0, _jsuaQuery.query)(componentTemplate).select("[data-material-slot]").each(function (slot) {
        return slots[slot.dataset.materialSlot] = slot;
      });

      var children = [];
      (0, _jsuaQuery.query)(element).map(function (el) {
        return el.children;
      }).each(function (child) {
        children.push(child);
      });

      (0, _jsuaQuery.query)(children).each(function (el) {
        return addToSlot(el);
      });

      while (componentTemplate.firstChild) {
        element.appendChild(componentTemplate.firstChild);
      }
    }

    element.addEventListener("material-slot", function (evt) {
      if (!evt.componentName === name) return;

      addToSlot(evt.element);
      evt.stopPropagation();
    });

    var components = element.dataset.materialComponent ? element.dataset.materialComponent.split(" ") : [];
    if (components.includes(name)) return;

    components.push(name);
    element.dataset.materialComponent = components.join(" ");
  };
}

component.slot = function (componentName, slotName) {
  return function (element) {
    var evt = document.createEvent("Event");
    evt.componentName = componentName;
    evt.element = element;
    element.dataset.materialSlotName = slotName;
    evt.initEvent("material-slot", true, true);
    element.dispatchEvent(evt);
  };
};