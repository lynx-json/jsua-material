import { select, map, mappers, filter, filters } from "@lynx-json/jsua-style";

export default function (options = {}) {
  return [
    el => el.style.display = "grid",
    el => el.style.gridGap = "24px",
    el => el.style.alignContent = "start",
    el => el.style.justifyContent = "start",
    el => el.style.gridAutoFlow = "column",
    el => el.style.gridTemplateColumns = "repeat(auto-fill, )"
    // grid-template-columns: repeat(auto-fit, 186px);
  ];
}
