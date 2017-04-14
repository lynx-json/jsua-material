import {
  query,
  on
} from "jsua-query";
import elevation from "./elevation";
import background from "./background";
import text from "./text";
import {
  clearChildren,
  createComponent,
  findNearestAncestor
} from "./util";

export default function menu(element, options) {

  var innerHTML = `
    <div role="presentation">
      <div data-material-slot="header" role="presentation"></div>
      <div data-material-slot="toggle" role="presentation"><i class="material-icons">arrow_drop_down</i></div>
    </div>
    <div role="presentation">
      <div data-material-slot="content" role="presentation"></div>
    </div>
  `;

  // var textColor = getTextColor(options);

  element = createComponent(element, {
    innerHTML: innerHTML,
    name: "material-menu"
  });

  var menuHeader = element.firstElementChild;
  var menu = element.lastElementChild;
  var contentContainer = menu.firstElementChild;

  var state = (options && options.state) || "closed";

  var closedStyle = [
    el => el.style.maxHeight = "0px",
    el => el.style.opacity = 0,
    el => el.style.paddingTop = 0,
    el => el.style.paddingBottom = 0,
    elevation.none
  ];
  var openStyle = [
    el => el.style.maxHeight = `${contentContainer.offsetHeight + 16}px`,
    el => el.style.opacity = 1,
    el => el.style.paddingTop = "8px",
    el => el.style.paddingBottom = "8px",
    elevation.menu
  ];

  element.open = function () {
    query(menu).each([
      () => state = "open",
      openStyle,
      el => el.focus()
    ]);
  };

  element.close = function () {
    query(menu).each([
      () => state = "closed",
      closedStyle
    ])
  };

  function toggleState() {
    if (state === "open") {
      element.close();
    } else {
      element.open();
    }
  }

  query(element).each([
    el => el.style.position = "relative"
  ]);

  query(menuHeader).each([
    el => el.style.cursor = "default",
    el => el.style.minHeight = "48px",
    el => el.style.display = "flex",
    el => el.style.flexDirection = "row",
    el => el.style.flexWrap = "nowrap",
    el => el.firstElementChild.style.flexGrow = 1,
    el => el.style.alignItems = "center",
    on("click", toggleState)
  ]);

  query(menu).each([
    el => el.style.display = "flex",
    el => el.style.flexDirection = "column",
    el => el.style.minWidth = "168px",
    el => el.tabIndex = -1,
    el => el.style.borderRadius = "2px",
    el => el.style.outline = "none",
    el => el.style.position = "absolute",
    el => el.style.top = 0,
    el => el.style.right = 0,
    el => el.style.transition = "max-height 175ms ease-in-out, opacity 175ms ease-in-out",
    background.menu,
    el => el.style.overflow = "hidden",
    on("focusout", () => element.close())
  ]);

  query(menu).filter(() => state === "open")
    .each(openStyle);

  query(menu).filter(() => state === "closed")
    .each(closedStyle);
}

function findMenuComponent(element) {
  var menuComponent = findNearestAncestor(element, "[data-material-component=material-menu]");

  if (!menuComponent) {
    throw new Error("The element must be contained within a material menu component.");
  }

  return menuComponent;
}

menu.item = function (element) {
  var menuComponent = findMenuComponent(element);

  query(element)
    .each([
      on("mouseover", background.hover),
      on("mouseout", el => el.style.backgroundColor = "initial"),
      el => el.style.display = "flex",
      el => el.style.flexDirection = "row",
      el => el.style.minHeight = "48px",
      el => el.style.paddingLeft = "16px",
      el => el.style.paddingBottom = "20px",
      el => el.style.paddingTop = "12px",
      el => el.style.cursor = "default",
      on("click", () => menuComponent.close())
    ]);
};

menu.header = function (element) {
  var menuComponent = findMenuComponent(element);

  var headerSlot = menuComponent.firstElementChild.firstElementChild;
  clearChildren(headerSlot);
  headerSlot.appendChild(element);
};
