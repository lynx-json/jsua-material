import {
  findNearestAncestor,
  clearChildren,
  getTextColor,
  getDividerStyle,
  getDisabledTextOpacity
} from "./util";
import {
  component,
  query,
  on,
  when,
  setState
} from "@lynx-json/jsua-style";
import color from "./color";
import text from "./text";

export default function expansionPanel(options) {
  return function (element) {
    var innerHTML = `
      <div role="presentation">
        <div data-jsua-style-slot="header" role="presentation"></div>
        <div data-jsua-style-slot="toggle" role="presentation"><i class="material-icons">keyboard_arrow_down</i></div>
      </div>
      <div role="presentation">
        <div data-jsua-style-slot="content" role="presentation"></div>
      </div>
    `;

    query(element).each([
      component("material-expansion-panel", innerHTML)
    ]);

    var textColor = getTextColor(options);
    var expandCollapseWrapper = element.lastElementChild;
    var headerSlot = element.firstElementChild.firstElementChild;
    var contentContainer = element.lastElementChild.firstElementChild;
    var componentHeader = element.firstElementChild;
    var toggleSlot = componentHeader.lastElementChild;

    query(element).each([
      el => el.style.display = "flex",
      el => el.style.flexDirection = "column",
      el => el.style.alignItems = "stretch",
      when("visibility", "concealed", el => query(expandCollapseWrapper).each([
        el => el.style.maxHeight = "0px",
        el => el.style.overflowY = "hidden",
        el => el.style.opacity = 0,
        el => componentHeader.style.minHeight = "48px",
        text.body(textColor),
        () => query(toggleSlot).select("i.material-icons").each(el => el.textContent = "keyboard_arrow_down")
      ])),
      when("visibility", "revealed", el => query(expandCollapseWrapper).each([
        el => el.style.maxHeight = contentContainer.offsetHeight + "px",
        el => el.style.opacity = 1,
        () => componentHeader.style.minHeight = "64px",
        () => query(toggleSlot).select(".material-icons").each(el => el.textContent = "keyboard_arrow_up")
      ])),
      el => {
        if (!element.jsuaStyleHasState) {
          setState("visibility", "concealed")(el);
        }
      }
    ]);

    query(contentContainer).each([
      el => contentContainer.style.display = "flex",
      el => contentContainer.flexDirection = "column",
      el => contentContainer.style.paddingLeft = "24px",
      el => contentContainer.style.paddingRight = "24px",
      el => contentContainer.style.paddingBottom = "16px",
      el => contentContainer.style.marginRight = "24px"
    ]);

    query(componentHeader)
      .each([
        text.subheading(textColor),
        el => el.style.cursor = "default",
        el => el.style.display = "flex",
        el => el.style.flexDirection = "row",
        el => el.style.flexWrap = "nowrap",
        el => el.style.alignItems = "center",
        el => el.style.paddingLeft = "24px",
        el => el.style.paddingRight = "24px",
        el => el.style.minHeight = "48px",
        el => el.style.transition = "min-height 175ms ease-in-out"
      ]);

    headerSlot.style.flexGrow = 1;

    query(toggleSlot)
      .select("i.material-icons")
      .each([
        el => el.style.color = textColor,
        el => el.style.opacity = getDisabledTextOpacity(textColor),
        el => el.style.width = "24px",
        el => el.style.height = "24px",
        el => el.style.overflow = "hidden",
        el => el.style.cursor = "default",
        el => el.style.borderRadius = "2px",
        el => el.style.border = "1px solid transparent",
        on("mouseover", el => el.style.border = getDividerStyle(textColor)),
        on("mouseout", el => el.style.border = "1px solid transparent")
      ]);

    expandCollapseWrapper.style.transition = "max-height 175ms ease-in-out, opacity 175ms ease-in-out";

    componentHeader.addEventListener("click", function () {
      toggleSlot.firstElementChild.click();
    });

    // By default, we expand/collapse. If you add your own toggle, you're responsible
    // for maintaining the state.
    query(toggleSlot.firstElementChild).each([
      on("click", function (el, evt) {
        if (element.jsuaStyleHasState && element.jsuaStyleHasState("visibility", "revealed")) {
          setState("visibility", "concealed")(element);
        } else {
          setState("visibility", "revealed")(element);
        }

        evt.stopPropagation();
      })
    ]);
  };
}

expansionPanel.header = function () {
  return [
    component.slot("material-expansion-panel", "header")
  ]
};

expansionPanel.toggle = function () {
  return [
    component.slot("material-expansion-panel", "toggle"),
    el => el.parentElement.removeChild(el.previousSibling)
  ]
}
