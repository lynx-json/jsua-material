import {
  component,
  findNearestAncestor,
  clearChildren,
  getTextColor,
  getDividerStyle,
  getDisabledTextOpacity
} from "./util";
import {
  query,
  on
} from "@lynx-json/jsua-style";
import color from "./color";
import text from "./text";

export default function expansionPanel(options) {
  return function (element) {
    var innerHTML = `
      <div role="presentation">
        <div data-material-slot="header" role="presentation"></div>
        <div data-material-slot="toggle" role="presentation"><i class="material-icons">keyboard_arrow_down</i></div>
      </div>
      <div role="presentation">
        <div data-material-slot="content" role="presentation"></div>
      </div>
    `;

    var textColor = getTextColor(options);

    query(element).each([
      component("expansion-panel", innerHTML),
      el => el.style.display = "flex",
      el => el.style.flexDirection = "column",
      el => el.style.alignItems = "stretch"
    ]);

    var expandCollapseWrapper = element.lastElementChild;

    query(expandCollapseWrapper).each([
      el => el.style.maxHeight = "0px",
      el => el.style.overflowY = "hidden",
      el => el.style.opacity = 0,
      text.body(textColor)
    ]);

    var contentContainer = element.lastElementChild.firstElementChild;
    contentContainer.style.display = "flex";
    contentContainer.flexDirection = "column";
    contentContainer.style.paddingLeft = "24px";
    contentContainer.style.paddingRight = "24px";
    contentContainer.style.paddingBottom = "16px";
    contentContainer.style.marginRight = "24px";

    element.materialExpand = function expand() {
      expandCollapseWrapper.style.maxHeight = contentContainer.offsetHeight + "px";
      expandCollapseWrapper.style.opacity = 1;
      componentHeader.style.minHeight = "64px";
      element.dataset.materialExpansionPanelState = "expanded";
      query(toggleSlot)
        .select("i.material-icons")
        .each(el => el.textContent = "keyboard_arrow_up");
    }

    element.materialCollapse = function collapse() {
      expandCollapseWrapper.style.maxHeight = "0px";
      expandCollapseWrapper.style.opacity = 0;
      componentHeader.style.minHeight = "48px";
      element.dataset.materialExpansionPanelState = "collapsed";
      query(toggleSlot)
        .select("i.material-icons")
        .each(el => el.textContent = "keyboard_arrow_down");
    }

    var componentHeader = element.firstElementChild;

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

    var headerSlot = element.firstElementChild.firstElementChild;
    headerSlot.style.flexGrow = 1;

    var toggleSlot = element.firstElementChild.lastElementChild;

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

    var state = (options && options.state) || "collapsed";
    if (state === "expanded") {
      element.materialExpand();
    }

    expandCollapseWrapper.style.transition = "max-height 175ms ease-in-out, opacity 175ms ease-in-out";

    componentHeader.addEventListener("click", function () {
      if (element.dataset.materialExpansionPanelState !== "expanded") {
        element.materialExpand();
      } else {
        element.materialCollapse();
      }
    });
  }
}

expansionPanel.header = function () {
  return function (element) {
    var panel = findNearestAncestor(element, "[data-material-component=expansion-panel]");

    if (!panel) {
      throw new Error("The element must be contained within a material expansion panel component.");
    }

    var headerSlot = panel.firstElementChild.firstElementChild;
    clearChildren(headerSlot);
    headerSlot.appendChild(element);
  }
}
