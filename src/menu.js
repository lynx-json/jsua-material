import {
  component,
  query,
  on
} from "@lynx-json/jsua-style";
import elevation from "./elevation";
import background from "./background";
import text from "./text";
import {
  clearChildren,
  findNearestAncestor,
  getDividerStyle,
  getTextColor,
  getPrimaryTextOpacity
} from "./util";

const keys = {
  escape: 27,
  spaceBar: 32
};

export default function menu(options) {
  var textColor = getTextColor(options);
  var opacity = getPrimaryTextOpacity(textColor);

  return function (element) {
    var innerHTML = `
      <div role="presentation">
        <div data-jsua-style-slot="header" role="presentation"></div>
        <div data-jsua-style-slot="toggle" role="presentation"><i class="material-icons">arrow_drop_down</i></div>
      </div>
      <div role="presentation">
        <div data-jsua-style-slot="content" role="presentation"></div>
      </div>
    `;

    query(element).each([
      component("material-menu", innerHTML),
      el => el.style.position = "relative",
      on("focusout", () => element.materialClose()),
      on("keyup", (el, evt) => {
        if (evt.keyCode === keys.escape) {
          element.materialClose();
        }

        if (evt.keyCode === keys.spaceBar) {
          element.materialOpen();
        }
      })
    ]);

    var menuHeader = element.firstElementChild;
    var menu = element.lastElementChild;
    var contentContainer = menu.firstElementChild;

    var state = (options && options.state) || "closed";

    var closedStyle = [
      el => el.style.maxHeight = "0px",
      el => el.style.opacity = 0,
      el => el.style.paddingTop = 0,
      el => el.style.paddingBottom = 0,
      elevation.none()
    ];
    var openStyle = [
      el => el.style.maxHeight = `${contentContainer.offsetHeight + 16}px`,
      el => el.style.opacity = 1,
      el => el.style.paddingTop = "8px",
      el => el.style.paddingBottom = "8px",
      elevation.menu()
    ];

    element.materialOpen = function () {
      query(menu).each([
        () => state = "open",
        openStyle,
        // el => el.focus() // This was causing problems with rux dropdown... investigate.
      ]);
    };

    element.materialClose = function () {
      query(menu).each([
        () => state = "closed",
        closedStyle
      ]);
    };

    function toggleState() {
      if (state === "open") {
        element.materialClose();
      } else {
        element.materialOpen();
      }
    }

    query(menuHeader).each([
      el => el.style.color = textColor,
      el => el.style.opacity = opacity,
      el => el.style.cursor = "default",
      el => el.style.paddingLeft = "24px",
      el => el.style.paddingRight = "24px",
      el => el.style.minHeight = "48px",
      el => el.style.display = "flex",
      el => el.style.flexDirection = "row",
      el => el.style.flexWrap = "nowrap",
      el => el.firstElementChild.style.flexGrow = 1,
      el => el.style.alignItems = "center",
      on("click", toggleState)
    ]);

    var toggleSlot = element.firstElementChild.lastElementChild;
    query(toggleSlot)
      .select("i.material-icons")
      .each([
        el => el.style.color = textColor,
        el => el.style.opacity = opacity,
        el => el.style.width = "24px",
        el => el.style.height = "24px",
        el => el.style.overflow = "hidden",
        el => el.style.cursor = "default",
        el => el.style.borderRadius = "2px",
        el => el.style.border = "1px solid transparent",
        on("mouseover", el => el.style.border = getDividerStyle()),
        on("mouseout", el => el.style.border = "1px solid transparent")
      ]);

    query(menu).each([
      el => el.style.color = textColor,
      el => el.style.opacity = opacity,
      el => el.style.display = "flex",
      el => el.style.flexDirection = "column",
      el => el.style.minWidth = "168px",
      el => el.tabIndex = -1,
      el => el.style.borderRadius = "2px",
      el => el.style.outline = "none",
      el => el.style.position = "absolute",
      el => el.style.top = 0,
      el => el.style.right = 0,
      el => el.style.transition = "all 175ms ease-in-out",
      background.menu(),
      el => el.style.overflow = "hidden"
    ]);

    element.materialRefresh = function () {
      if (state === "open") {
        element.materialOpen();
      } else {
        element.materialClose();
      }
    };

    element.materialRefresh();
  };
}

function findMenuComponent(element) {
  var menuComponent = findNearestAncestor(element, "[data-jsua-style-component=material-menu]");

  if (!menuComponent) {
    throw new Error("The element must be contained within a material menu component.");
  }

  return menuComponent;
}

menu.item = function () {
  return function (element) {
    var menuComponent = findMenuComponent(element);

    query(element)
      .each([
        on("mouseover", background.hover()),
        on("mouseout", el => el.style.backgroundColor = "initial"),
        el => el.style.display = "flex",
        el => el.style.flexDirection = "row",
        el => el.style.minHeight = "48px",
        el => el.style.paddingLeft = "16px",
        el => el.style.paddingBottom = "20px",
        el => el.style.paddingTop = "12px",
        el => el.style.cursor = "default",
        on("click", () => menuComponent.materialClose())
      ]);

    menuComponent.materialRefresh();
  };
};

menu.header = function () {
  return [
    component.slot("material-menu", "header")
  ];
};
