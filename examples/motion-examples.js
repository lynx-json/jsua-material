import * as material from "../src";

import {
  createExample,
  clearExamples
} from "./util";

function createMotionExample(label, cb) {
  createExample(function (el) {
    var contentElement = document.createElement("div");
    contentElement.textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    el.appendChild(contentElement);
    cb(el);
  });
}

export default function motionExamples() {
  clearExamples();

  createMotionExample("Click to Show/Hide", function (el) {
    material.expansionPanel(el);
  });
}
