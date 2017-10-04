import { select, map, mappers, filter, filters } from "@lynx-json/jsua-style";

export default function (options = {}) {
  return [
    el => el.style.display = "grid",
    el => el.style.gridGap = "24px",
    el => el.style.alignContent = "center",
    el => el.style.justifyContent = "start",
    el => el.style.gridAutoFlow = "column",
    el => el.style.gridAutoColumns = "max-content"
  ];
}
