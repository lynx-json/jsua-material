import {
  createComponent,
  findNearestAncestor,
  clearChildren,
  getDividerStyle,
  getDisabledTextOpacity,
  getTextColor
} from "./util";
import {
  query,
  on
} from "jsua-query";
import color from "./color";

export default function expansionPanel(element, options) {
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

  createComponent(element, {
    innerHTML: innerHTML,
    name: "material-expansion-panel"
  });

  element.style.display = "flex";
  element.style.flexDirection = "column";
  element.style.alignItems = "stretch";

  var expandCollapseWrapper = element.lastElementChild;
  expandCollapseWrapper.style.maxHeight = "0px";
  expandCollapseWrapper.style.overflowY = "hidden";
  expandCollapseWrapper.style.opacity = 0;

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
      on("mouseover", el => el.style.border = getDividerStyle()),
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

expansionPanel.header = function (element) {
  var panel = findNearestAncestor(element, "[data-material-component=material-expansion-panel]");

  if (!panel) {
    throw new Error("The element must be contained within a material expansion panel component.");
  }

  var headerSlot = panel.firstElementChild.firstElementChild;
  clearChildren(headerSlot);
  headerSlot.appendChild(element);
}
