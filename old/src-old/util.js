import * as colorPalette from "./color-palette";

export function wrapChildren(element) {
  if (element.children.length === 1 && element.children[0].role === "presentation") {
    return element.children[0];
  }
  
  var wrapper = document.createElement("div");
  
  var children = [];
  for (var i = 0, max = element.childNodes.length; i < max; i++) {
    children.push(element.childNodes[i]);
  }
    
  children.forEach(function (child) {
    wrapper.appendChild(child);
  });
  
  element.appendChild(wrapper);
  return wrapper;
}

export function getDividerStyle(backgroundColor) {
  var dividerColor = colorPalette.divider(backgroundColor);
  if (dividerColor.color === "#ffffff") {
    return `1px solid rgba(255, 255, 255, ${dividerColor.opacity})`;
  } else {
    return `1px solid rgba(0, 0, 0, ${dividerColor.opacity})`;
  }
}
