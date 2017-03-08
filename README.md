JSUA Material
=================================================

```js
material.setColorScheme({
  theme: "light",
  primary: "#ff0000",
  accent: "#00ff00",
  error: "#ff0000"
});

var options = {
  backgroundColor: "#00ff00",
  textColor: "white"
};

// fall back to a backgroundColor defined by the spec for each component.

material.card(element, options); // options override default scheme
material.raisedButton(element, options);

```
