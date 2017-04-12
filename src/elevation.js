import {
  shadows
} from "./elevation.json";

export default function elevation(el, options) {
  var level = options && options.level || 0;
  el.style.boxShadow = shadows[level];
}
