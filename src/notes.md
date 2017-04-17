# Notes

## Components

```js
var innerHTML = `
  <div>
    <div data-material-slot="header"></div>
    <div data-material-slot="content"></div>
  </div>
`;

element = createComponent("material-menu", innerHTML);

var headerSlot = element.getSlot("header");
clearChildren(headerSlot);
headerSlot.appendChild(el);

// State
element.materialExpand();


menu(element, { theme: "dark" });
// Should set the background? There's no background specified.
// Should set the default foreground on each child (typically a slot).
menu.item(element, { })

```
