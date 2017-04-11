JSUA Material
=================================================

Color
-------------------------------------------------

### Color Scheme

```js

material.color.primary = "Indigo";
material.color.secondary = "Yellow";
material.color.theme = "light";

```

### Background Color

```js

// Common background colors.
material.background(el, { color: "Indigo", shade: 700 });
material.background(el, { color: "Indigo" });
material.background.primary(el);

material.background.accent(el);
material.background.accent(el, { shade: "A400" });

material.background.statusBar(el);
material.background.statusBar(el, { theme: "dark" });

material.background.appBar(el);
material.background.appBar(el, { theme: "dark" });

material.background.card(el);
material.background.card(el, { theme: "dark" });

```

<!-- ### Text Color

```js

// Themes
material.textColor(el, { color: "light", opacity: 1 });
material.textColor.light(el);
material.textColor.primary(el); // Based on theme.
material.textColor.secondary(el); // Based on theme.
material.textColor(el, { color: "dark", opacity: .87 });
material.textColor.dark(el);

material.textColor(el, { color: "Red" });

``` -->

Typography
-------------------------------------------------

```js

material.text(el, { weight: "regular", size: "56px", color: "light", opacity: 1 });
material.text.display(el);

```

Elevation
-------------------------------------------------

```js
material.elevation(el, { level: 24 });
material.elevation.card(el);
```

Components
-------------------------------------------------

```js
material.card(el);

// Card implementation

function card(el, options) {
  query(el).each([
    background.card,
    el => elevation(el, { level: 2 }),
    on("mouseover", el => elevation(el, { level: 8 }))
  ])
}

// or

function card(el, options) {
  background.card(el);
  elevation(el, { level: 2 });
  on("mouseover", el => elevation(el, { level: 8 }))(el);
}
```
