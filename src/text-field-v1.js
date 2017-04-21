import {
  query,
  on
} from "jsua-query";
import {
  getDividerStyle,
  createComponent,
  findNearestAncestor
} from "./util";
import color from "./color";
import text from "./text";

export default function textField(element, options) {
  var isLabelFloating = false;

  var labelStyles = {
    focus: null,
    floating: [

    ],
    resting: [
      el => label.style.transform = "translateY(8px)",
      el => label.style.opacity = 0
    ]
  };

  element.materialRefresh = function () {
    var input = element.getSlot("input").firstElementChild;
    var label = element.getSlot("label");

    function restLabel() {
      query(label).each(labelStyles.resting);
      isLabelFloating = false;
    }

    if (input && label) {
      if (input.placeholder !== undefined) {
        input.placeholder = label.textContent;
      }

      if (input.value === "") {
        restLabel()
      }

      function onInput() {
        if (input.value === "") {
          restLabel();
        } else {
          label.style.transform = "none";
          text.caption(label, options);
          isLabelFloating = true;
        }
      }

      input.removeEventListener("input", onInput);
      input.addEventListener("input", onInput);
    }
  }

  var focusColor = (options && options.focusColor) || color.secondary;

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
    el => el.style.width = "100%",
    on("focusin", el => {
      if (isLabelFloating) {
        text.caption(el.getSlot("label"), {
          color: focusColor
        });
      }
    }),
    on("focusout", el => {
      if (isLabelFloating) {
        text.caption(el.getSlot("label"), options)
      }
    })
  ]);

  query(element.getSlot("label")).each([
    el => text.caption(el, options),
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
  component.materialRefresh();
};

textField.input = function (element) {
  var component = findTextFieldComponent(element);
  component.addToSlot("input", element);
  component.materialRefresh();
};
