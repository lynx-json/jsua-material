import { shadows } from "./elevation.json";

function shadow(level) {
  return r => r.view.style.boxShadow = shadows[level];
}

export default function elevation(level) {
  return shadow(level);
}
