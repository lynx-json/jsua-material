import { query, on } from "jsua-query";
import { grid, column } from "./layout";

function matchMedia(mediaQuery) {
  return function (el) {
    if (window.matchMedia(mediaQuery).matches) return el;
  };
}

export default function(element) {
  query(element)
    .filter(matchMedia("(max-width: 599px)"))
    .each(grid(4, "16px"));
  
  query(element)
    .filter(matchMedia("(min-width: 600px) and (max-width: 839px)"))
    .each(grid(8, "16px")); // 24px gutter in some circumstances, according to spec. Simplifying for now.
  
  query(element)
    .filter(matchMedia("(min-width: 840px)"))
    .each(grid(12, "24px")); // 16px gutter in some cases, according to spec. Simplifying for now.
}
