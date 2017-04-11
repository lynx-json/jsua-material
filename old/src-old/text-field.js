import * as text from "./text";
import { query, on } from "jsua-query";
import elevation from "./elevation";
import { getDividerStyle } from "./util";
import { colorScheme } from "./color-scheme";

export function textField(element, options) {
  var backgroundColor = (options && options.backgroundColor) || colorScheme.theme[2];
  
  function addShadowDOM(el) {
    function floatLabel() {
      var input = el.querySelector("[slot=input]");
      var label = el.querySelector("[slot=label]");
      
      if (input && label) {
        if (input.placeholder !== undefined) {
          input.placeholder = label.textContent;
        }
        
        label.style.transition = "transform 175ms ease-in-out, opacity 175ms ease-in-out";
        
        if (input.value === "") {
          label.style.transform = "translateY(8px)";
          label.style.opacity = 0;
        }
        
        input.addEventListener("input", function () {
          if (input.value === "") {
            label.style.transform = "translateY(8px)";
            label.style.opacity = 0;
          } else {
            label.style.transform = "none";
            label.style.opacity = 1;
          }
        });
      }
    }
    
    var shadow = el.attachShadow({ mode: "open" });
    shadow.innerHTML = `
      <div id="group">
        <div id="label"><slot name="label"></slot></div>
        <div id="input"><slot name="input"></slot></div>
        <div id="other"><slot></slot></div>
      </div>
    `;
    
    var group = shadow.getElementById("group");
    query(group).each([
      el => el.style.display = "flex",
      el => el.style.flexDirection = "column",
      el => el.style.alignItems = "stretch",
      el => el.style.width = "100%"
    ]);
    
    var label = shadow.getElementById("label");
    query(label).each([
      text.caption(backgroundColor),
      el => el.style.marginTop = "16px"
    ]);
    label.addEventListener("slotchange", floatLabel);
    
    var input = shadow.getElementById("input");
    query(input).each([
      el => el.style.display = "flex",
      el => el.style.flexDirection = "column",
      el => el.style.alignItems = "stretch",
      el => el.style.marginTop = "8px",
      el => el.style.marginBottom = "8px"
    ]);
    input.addEventListener("slotchange", floatLabel);
  }
  
  addShadowDOM(element);
}
