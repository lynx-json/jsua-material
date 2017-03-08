import * as text from "./text";
import { query, on } from "jsua-query";
import elevation from "./elevation";
import * as colorPalette from "./color-palette";
import { getDividerStyle } from "./util";

export function expansionPanel(options) {
  var backgroundColor = options.backgroundColor || "#ffffff";
  var collapsedIcon = options.collapsedIcon || "keyboard_arrow_down";
  var expandedIcon = options.expandedIcon || "keyboard_arrow_up";
  
  function addShadowDOM(el) {
    var shadow = el.attachShadow({ mode: "open" });
    shadow.innerHTML = `
      <div id="panel">
        <div id="header">
          <slot name="header">
            <span id="sub-heading"><slot name="sub-heading"></slot></span>
            <span id="secondary"><slot name="secondary"></slot></span>
          </slot>
          <span id="dropdown"><slot name="dropdown"></slot></span>
        </div>
        <div id="content-container"><slot></slot></div>
      </div>
    `;
    
    var panel = shadow.getElementById("panel");
    
    query(panel).each([
      el => el.style.display = "flex",
      el => el.style.flexDirection = "column",
      el => el.style.alignItems = "stretch",
      el => el.style.width = "100%"
    ]);
    
    var header = shadow.getElementById("header");
    query(header)
      .each([
        el => el.style.display = "flex",
        el => el.style.flexDirection = "row",
        el => el.style.flexWrap = "nowrap",
        el => el.style.height = "48px",
        el => el.style.alignItems = "center",
        el => el.style.paddingLeft = "24px",
        el => el.style.paddingRight = "24px",
        el => el.style.transition = "height 175ms ease-in-out"
      ]);
      
    if (options.label) {
      let labelElement = document.createElement("span");
      labelElement.textContent = options.label;
      query(header).select("[name=header]").each(el => el.parentElement.replaceChild(labelElement, el));
    }
    
    var contentContainer = shadow.getElementById("content-container");
    query(contentContainer)
      .each([
        el => el.style.display = "flex",
        el => el.flexDirection = "column",
        el => el.style.paddingLeft = "24px",
        el => el.style.paddingRight = "24px",
        el => el.style.height = "0px",
        el => el.style.opacity = 0,
        el => el.style.overflow = "hidden",
        el => el.style.transition = "height 175ms ease-in-out, opacity 175ms ease-in-out"
      ]);
      
    query(header)
      .select("#sub-heading")
      .each([
        el => el.style.display = "flex",
        el => el.style.flexGrow = "1",
        text.subHeading(backgroundColor)
      ]);
    
    query(header)
      .select("#secondary")
      .each([
        el => el.style.display = "flex",
        el => el.style.flexGrow = "2",
        text.caption(backgroundColor)
      ]);
    
    var dropdownColor = colorPalette.disabledText(backgroundColor);
    
    query(header)
      .select("#dropdown")
      .each([
        el => el.style.display = "flex",
        el => el.style.flexGrow = "0",
        el => el.style.marginLeft = "auto",
        el => el.style.color = dropdownColor.color,
        el => el.style.opacity = dropdownColor.opacity
      ]);
  }

  function addDropdown(el) {
    var dropdown = document.createElement("i");
    dropdown.textContent = collapsedIcon;
    dropdown.className = "material-icons";
    dropdown.id = "dropdown";
    dropdown.setAttribute("slot", "dropdown");
    dropdown.style.width = "24px";
    dropdown.style.height = "24px";
    dropdown.style.overflow = "hidden";
    dropdown.style.cursor = "pointer";
    dropdown.style.borderRadius = "2px";
    dropdown.style.border = "1px solid " + backgroundColor;
    
    query(dropdown).each([
      on("mouseover", el => el.style.border = getDividerStyle(backgroundColor)),
      on("mouseout", el => el.style.border = "1px solid " + backgroundColor)
    ]);
    
    dropdown.addEventListener("click", () => {
      var header = el.shadowRoot.getElementById("header");
      var contentContainer = el.shadowRoot.getElementById("content-container");
      if (el.getAttribute("mode") === "open") {
        el.setAttribute("mode", "closed");
        dropdown.textContent = collapsedIcon;
        header.style.height = "48px";
        contentContainer.style.height = "0px";
        contentContainer.style.opacity = 0;
      } else {
        el.setAttribute("mode", "open");
        dropdown.textContent = expandedIcon;
        header.style.height = "64px";
        
        let height = 0;
        query(el).select(":not([slot])").each(child => height += child.scrollHeight);
        
        contentContainer.style.height = height + "px";
        // contentContainer.style.height = "auto";
        contentContainer.style.opacity = 1;
      }
    });
    
    el.appendChild(dropdown);
  }
  
  return [
    el => el.flexDirection = "column",
    el => el.style.backgroundColor = backgroundColor,
    text.body(backgroundColor),
    addDropdown,
    addShadowDOM
  ];
}
