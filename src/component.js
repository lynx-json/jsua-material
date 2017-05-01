import {
  raiseEvent,
  findNearestAncestor
} from "./util";

import {
  query
} from "jsua-query";

export default function component(name, innerHTML) {
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

      query(componentTemplate)
        .select("[data-material-slot]")
        .each(slot => slots[slot.dataset.materialSlot] = slot);

      var children = [];
      query(element).map(el => el.children).each(function (child) {
        children.push(child);
      });

      query(children).each(el => addToSlot(el));

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
