import {
  shadows
} from "./elevation.json";

export default function elevation(el, options) {
  var level = options && options.level || 0;
  el.style.boxShadow = shadows[level];
}

elevation.card = function (el, options) {
  options = Object.assign({
    level: 2
  }, options);

  elevation(el, options);
}

elevation.cardHover = function (el, options) {
  options = Object.assign({
    level: 8
  }, options);

  elevation(el, options);
}
