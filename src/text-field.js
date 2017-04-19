import {
  query,
  on
} from "jsua-query";
import {
  getDividerStyle,
  createComponent,
  findNearestAncestor
} from "./util";
import text from "./text";

export default function textField(element, options) {
  element.materialRefresh = function () {
    var input = element.getSlot("input").firstElementChild;
    var label = element.getSlot("label");

    if (input && label) {
      if (input.placeholder !== undefined) {
        input.placeholder = label.textContent;
      }

      if (input.value === "") {
        label.style.transform = "translateY(8px)";
        label.style.opacity = 0;
      }

      function onInput() {
        if (input.value === "") {
          label.style.transform = "translateY(8px)";
          label.style.opacity = 0;
        } else {
          label.style.transform = "none";
          label.style.opacity = 1;
        }
      }

      input.removeEventListener("input", onInput);
      input.addEventListener("input", onInput);
    }
  }

  var innerHTML = `
      <div data-material-slot="label" role="presentation"></div>
      <div data-material-slot="input" role="presentation"></div>
      <div data-material-slot="content" role="presentation"></div>
    `;

  createComponent(element, {
    innerHTML: innerHTML,
    name: "text-field"
  });

  query(element).each([
    el => el.style.display = "flex",
    el => el.style.flexDirection = "column",
    el => el.style.alignItems = "stretch",
    el => el.style.width = "100%"
  ]);

  query(element.getSlot("label")).each([
    el => el.style.marginTop = "16px",
    el => el.style.transition = "transform 175ms ease-in-out, opacity 175ms ease-in-out"
  ]);

  query(element.getSlot("input")).each([
    el => el.style.display = "flex",
    el => el.style.flexDirection = "column",
    el => el.style.alignItems = "stretch",
    el => el.style.marginTop = "8px",
    el => el.style.marginBottom = "8px"
  ]);
}

function findTextFieldComponent(element) {
  var component = findNearestAncestor(element, "[data-material-component=text-field]");

  if (!component) {
    throw new Error("The element must be contained within a material text field component.");
  }

  return component;
}

textField.label = function (element, options) {
  var component = findTextFieldComponent(element);
  component.addToSlot("label", element);
  text.caption(element, options);
  component.materialRefresh();
};

textField.input = function (element) {
  var component = findTextFieldComponent(element);
  component.addToSlot("input", element);
  component.materialRefresh();
};
