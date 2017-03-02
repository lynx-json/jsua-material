import { shadows } from "./elevation.json";

function shadow(level) {
  return el => el.style.boxShadow = shadows[level];
}

export default function elevation(level) {
  return shadow(level);
}
