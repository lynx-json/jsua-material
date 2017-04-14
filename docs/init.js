import {
  query,
  on
} from "jsua-query";
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
      el => material.grid(el, {
        columns: 4,
        gutter: "16px"
      })
    ]);

  query(appElement)
    .filter(matchesMedia(mediumScreen))
    .each([
      el => el.dataset.screenSize = "medium",
      el => material.grid(el, {
        columns: 8,
        gutter: "16px"
      })
    ]);

  query(appElement)
    .filter(matchesMedia(largeScreen))
    .each([
      el => el.dataset.screenSize = "large",
      el => material.grid(el, {
        columns: 12,
        gutter: "24px"
      })
    ]);

  query(appElement)
    .select("[data-screen-size=small] > * > *")
    .each(el => material.grid.column(el, {
      span: 4
    }));

  query(appElement)
    .select("[data-screen-size=medium] > * > *")
    .each(el => material.grid.column(el, {
      span: 8
    }));

  query(appElement)
    .select("[data-screen-size=large] > * > *")
    .each(el => material.grid.column(el, {
      span: 8,
      offset: 2
    }));

  query(document.getElementById("menu"))
    .each([
      material.menu
    ]);

  query(document.getElementById("menu-label"))
    .each(material.menu.header);

  query(app)
    .select("[data-material-component=material-menu] > * > [data-material-slot=content] > *")
    .each([
      material.menu.item
    ]);
}
