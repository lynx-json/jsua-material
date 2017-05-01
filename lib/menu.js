"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = menu;

var _jsuaQuery = require("jsua-query");

var _elevation = require("./elevation");

var _elevation2 = _interopRequireDefault(_elevation);

var _background = require("./background");

var _background2 = _interopRequireDefault(_background);

var _text = require("./text");

var _text2 = _interopRequireDefault(_text);

var _util = require("./util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var keys = {
  escape: 27,
  spaceBar: 32
};

function menu(options) {
  var textColor = (0, _util.getTextColor)(options);
  var opacity = (0, _util.getPrimaryTextOpacity)(textColor);

  return function (element) {
    var innerHTML = "\n      <div role=\"presentation\">\n        <div data-material-slot=\"header\" role=\"presentation\"></div>\n        <div data-material-slot=\"toggle\" role=\"presentation\"><i class=\"material-icons\">arrow_drop_down</i></div>\n      </div>\n      <div role=\"presentation\" data-material-slot=\"menu\">\n        <div data-material-slot=\"content\" role=\"presentation\"></div>\n      </div>\n    ";

    (0, _jsuaQuery.query)(element).each([(0, _util.component)("menu", innerHTML), function (el) {
      return el.style.position = "relative";
    }, (0, _jsuaQuery.on)("focusout", function () {
      return element.materialClose();
    }), (0, _jsuaQuery.on)("keyup", function (el, evt) {
      if (evt.keyCode === keys.escape) {
        element.materialClose();
      }

      if (evt.keyCode === keys.spaceBar) {
        element.materialOpen();
      }
    })]);

    var menuHeader = element.firstElementChild;
    var menu = element.lastElementChild;
    var contentContainer = menu.firstElementChild;

    var state = options && options.state || "closed";

    var closedStyle = [function (el) {
      return el.style.maxHeight = "0px";
    }, function (el) {
      return el.style.opacity = 0;
    }, function (el) {
      return el.style.paddingTop = 0;
    }, function (el) {
      return el.style.paddingBottom = 0;
    }, _elevation2.default.none()];
    var openStyle = [function (el) {
      return el.style.maxHeight = contentContainer.offsetHeight + 16 + "px";
    }, function (el) {
      return el.style.opacity = 1;
    }, function (el) {
      return el.style.paddingTop = "8px";
    }, function (el) {
      return el.style.paddingBottom = "8px";
    }, _elevation2.default.menu()];

    element.materialOpen = function () {
      (0, _jsuaQuery.query)(menu).each([function () {
        return state = "open";
      }, openStyle]);
    };

    element.materialClose = function () {
      (0, _jsuaQuery.query)(menu).each([function () {
        return state = "closed";
      }, closedStyle]);
    };

    function toggleState() {
      if (state === "open") {
        element.materialClose();
      } else {
        element.materialOpen();
      }
    }

    (0, _jsuaQuery.query)(menuHeader).each([function (el) {
      return el.style.color = textColor;
    }, function (el) {
      return el.style.opacity = opacity;
    }, function (el) {
      return el.style.cursor = "default";
    }, function (el) {
      return el.style.paddingLeft = "24px";
    }, function (el) {
      return el.style.paddingRight = "24px";
    }, function (el) {
      return el.style.minHeight = "48px";
    }, function (el) {
      return el.style.display = "flex";
    }, function (el) {
      return el.style.flexDirection = "row";
    }, function (el) {
      return el.style.flexWrap = "nowrap";
    }, function (el) {
      return el.firstElementChild.style.flexGrow = 1;
    }, function (el) {
      return el.style.alignItems = "center";
    }, (0, _jsuaQuery.on)("click", toggleState)]);

    var toggleSlot = element.getSlot("toggle");
    (0, _jsuaQuery.query)(toggleSlot).select("i.material-icons").each([function (el) {
      return el.style.color = textColor;
    }, function (el) {
      return el.style.opacity = opacity;
    }, function (el) {
      return el.style.width = "24px";
    }, function (el) {
      return el.style.height = "24px";
    }, function (el) {
      return el.style.overflow = "hidden";
    }, function (el) {
      return el.style.cursor = "default";
    }, function (el) {
      return el.style.borderRadius = "2px";
    }, function (el) {
      return el.style.border = "1px solid transparent";
    }, (0, _jsuaQuery.on)("mouseover", function (el) {
      return el.style.border = (0, _util.getDividerStyle)();
    }), (0, _jsuaQuery.on)("mouseout", function (el) {
      return el.style.border = "1px solid transparent";
    })]);

    (0, _jsuaQuery.query)(menu).each([function (el) {
      return el.style.color = textColor;
    }, function (el) {
      return el.style.opacity = opacity;
    }, function (el) {
      return el.style.display = "flex";
    }, function (el) {
      return el.style.flexDirection = "column";
    }, function (el) {
      return el.style.minWidth = "168px";
    }, function (el) {
      return el.tabIndex = -1;
    }, function (el) {
      return el.style.borderRadius = "2px";
    }, function (el) {
      return el.style.outline = "none";
    }, function (el) {
      return el.style.position = "absolute";
    }, function (el) {
      return el.style.top = 0;
    }, function (el) {
      return el.style.right = 0;
    }, function (el) {
      return el.style.transition = "all 175ms ease-in-out";
    }, _background2.default.menu(), function (el) {
      return el.style.overflow = "hidden";
    }]);

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
  var menuComponent = (0, _util.findNearestAncestor)(element, "[data-material-component=menu]");

  if (!menuComponent) {
    throw new Error("The element must be contained within a material menu component.");
  }

  return menuComponent;
}

menu.item = function () {
  return function (element) {
    var menuComponent = findMenuComponent(element);

    (0, _jsuaQuery.query)(element).each([(0, _jsuaQuery.on)("mouseover", _background2.default.hover()), (0, _jsuaQuery.on)("mouseout", function (el) {
      return el.style.backgroundColor = "initial";
    }), function (el) {
      return el.style.display = "flex";
    }, function (el) {
      return el.style.flexDirection = "row";
    }, function (el) {
      return el.style.minHeight = "48px";
    }, function (el) {
      return el.style.paddingLeft = "16px";
    }, function (el) {
      return el.style.paddingBottom = "20px";
    }, function (el) {
      return el.style.paddingTop = "12px";
    }, function (el) {
      return el.style.cursor = "default";
    }, (0, _jsuaQuery.on)("click", function () {
      return menuComponent.materialClose();
    })]);

    menuComponent.materialRefresh();
  };
};

menu.header = function () {
  return function (element) {
    var menuComponent = findMenuComponent(element);

    var headerSlot = menuComponent.getSlot("header");
    (0, _util.clearChildren)(headerSlot);
    headerSlot.appendChild(element);

    menuComponent.materialRefresh();
  };
};