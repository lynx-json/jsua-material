import {
  query,
  on
} from "@lynx-json/jsua-style";
import * as material from "../src";
import {
  matchesMedia
} from "./util";

const largeScreen = "(min-width: 840px)";
const mediumScreen = "(min-width: 600px) and (max-width: 839px)";
const smallScreen = "(max-width: 599px)";

export default function () {
  var appElement = document.getElementById("app");

  query(appElement)
    .filter(matchesMedia(smallScreen))
    .each([
      el => el.dataset.screenSize = "small",
      material.grid(4, "16px")
    ]);

  query(appElement)
    .filter(matchesMedia(mediumScreen))
    .each([
      el => el.dataset.screenSize = "medium",
      material.grid(8, "16px")
    ]);

  query(appElement)
    .filter(matchesMedia(largeScreen))
    .each([
      el => el.dataset.screenSize = "large",
      material.grid(12, "24px")
    ]);

  query(appElement)
    .select("[data-screen-size=small] > * > *")
    .each(material.grid.column(4));

  query(appElement)
    .select("[data-screen-size=medium] > * > *")
    .each(material.grid.column(8));

  query(appElement)
    .select("[data-screen-size=large] > * > *")
    .each(material.grid.column(8, 2));

  query(document.getElementById("menu"))
    .each(material.menu());

  query(document.getElementById("menu-label"))
    .each(material.menu.header());

  query(app)
    .select("[data-material-component=menu] > * > [data-material-slot=content] > *")
    .each(material.menu.item());
}
