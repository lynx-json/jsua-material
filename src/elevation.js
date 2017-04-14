import {
  shadows
} from "./elevation.json";

export default function elevation(el, options) {
  var level = options && options.level || 0;
  el.style.boxShadow = shadows[level];
  el.style.zIndex = level;
}

elevation.none = el => elevation(el, {
  level: 0
});
elevation.card = el => elevation(el, {
  level: 2
});
elevation.cardHover = el => elevation(el, {
  level: 8
});
elevation.menu = el => elevation(el, {
  level: 8
});
