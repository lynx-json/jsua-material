```js
function textField(el, options) {
  query(el).each([
    on("focusin", raiseEvent(element.label, "material-focus"))
  ]);
}

function input(el, options) {
  query(el).each([
    on("material-focus", focusedInput)
  ]);
}

function label(el, options) {
  query(el).each([
    
    on("material-float", floatingLabel),
    on("material-focus", focusedLabel),
    on("material-resting", restingLabel)
  ]);
}
```

```js
query("label").each([
  label,
  el => label(el, options)
]);
```
