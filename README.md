JSUA Material Design Vocabulary
=================================================

X font
X text
X elevation
_ spacing/margin, etc.
_ overflow
_ layout/responsiveness, etc.
_ components
_ motion

Typography
-------------------------------------------------

https://material.io/guidelines/style/typography.html#

```js

var primary = getColor("Red");
var primaryMediumDark = getColor("Red", 700);
var primaryDark = getColor("Red", 800);
var accent = getColor("Green", "A200");

style([
  backgroundColor(primaryDark),
  text.button(primaryDark), // MEDIUM (all caps) 14, Color Primary
  text.caption, // Regular 12, Color Secondary
  text.body1, // Regular 14 (device), Regular 13 (desktop), Leading 20, Color Primary
  text.body2, // Medium 14 (device), Medium 13 (desktop), Leading 24, Color Primary
  text.subHeading1, // Regular 16 (device), Regular 15 (desktop), Leading 24 [Small Labels (paired with text)], Color Primary
  text.subHeading2, // Leading 28, Color Primary
  text.title, // Medium 20 [App Bar], Color Primary
  text.headline, // Regular 24, Leading 32 [Page Title, Section Title], Color Primary
  text.display1, // Regular 34, Leading 40, Color Secondary
  text.display2, // Regular 45, Leading 48, Color Secondary
  text.display3, // Regular 56, Color Secondary
  text.display4 // Light 112, Color Secondary
])
```

Line height:
"Line wrapping only applies to Body, Subhead, Headline, and the smaller Display styles. All other styles should exist as single lines."

Color
-------------------------------------------------

Material Design Color Palette

https://material.io/guidelines/style/color.html#color-color-palette

The colors in the Material Design color palette seem to be individually selected,
but the following code can approximate the palette based on 
a primary and accent color.

http://stackoverflow.com/questions/5560248/programmatically-lighten-or-darken-a-hex-color-or-rgb-and-blend-colors/13542669#13542669

```js
// function shadeColor(color, percent) {   
//     var f=parseInt(color.slice(1),16),t=percent<0?0:255,p=percent<0?percent*-1:percent,R=f>>16,G=f>>8&0x00FF,B=f&0x0000FF;
//     return "#"+(0x1000000+(Math.round((t-R)*p)+R)*0x10000+(Math.round((t-G)*p)+G)*0x100+(Math.round((t-B)*p)+B)).toString(16).slice(1);
// }
// 
// // Pseudo code
// shades.add(new Shade(0.9, "50"));
// shades.add(new Shade(0.7, "100"));
// shades.add(new Shade(0.5, "200"));
// shades.add(new Shade(0.333, "300"));
// shades.add(new Shade(0.166, "400"));
// shades.add(new Shade(0, "500"));
// shades.add(new Shade(-0.125, "600"));
// shades.add(new Shade(-0.25, "700"));
// shades.add(new Shade(-0.375, "800"));
// shades.add(new Shade(-0.5, "900"));
// shades.add(new Shade(0.7, "A100"));
// shades.add(new Shade(0.5, "A200"));
// shades.add(new Shade(0.166, "A400"));
// shades.add(new Shade(-0.25, "A700"));

color.primary() // 500
color.primary(700)
color.accent()
color.accent(200)
color.grey()
color.grey(300)

color.dark // black
color.dark.primary // black, 87% opacity
color.dark.secondary // black, 54% opacity
color.dark.disabled // black 38% opacity
color.dark.divider // black 12%

color.light // white
color.light.primary // white 100%
color.light.secondary // white 70%
color.light.disabled // white 50%
color.light.divider // white 12%

// Themes
// Light
color.grey(300) // status bar
color.grey(100) // app bar
color.grey(50) // background
color.white() // cards/dialogs

// Dark
color.black() // status bar
color.grey(900) // app bar
color("#303030") // #303030 (not a normal palette color) background
color.grey(800) // cards/dialogs

```

Take 2:

```js
var color = colorTheme.dark("#F44336", "#9C27B0"); // or light()

color.primary() // 500
color.primary(700)
color.accent()
color.accent(200)

color.text
color.text.primary
color.text.secondary // complement?
color.text.disabled
color.divider

color.statusBar
color.appBar
color.background
color.cardBackground
color.dialogBackground

Take 3:


// var theme = colorPalette.createLightTheme("Red", "Pink");
// var primary = theme.getPrimaryColor(optionalShade);
// var accent = theme.getAccentColor(optionalShade);
// var error = theme.getColor("Orange", optionalShade);
// 
// accent.color;
// accent.primaryText(); // color, opacity
// accent.secondaryText(); // color, opacity
// accent.disabledText(); // color, opacity
// accent.divider(); // color, opacity
```

> "Text should maintain a minimum contrast ratio of at least 4.5:1 (calculated based on luminance values) for legibility. A ratio of 7:1 is preferred."

> You need to somehow calculate the contrast ratio for primary and accent colors
> you can have appropriate contrast with text color.
> https://github.com/LeaVerou/contrast-ratio

```js
style(color.primaryText());
style(color.secondaryText());
style(color.disabledText());
style(color.dividerColor());
```

Elevation
-------------------------------------------------

```js
elevation.depth(24)
```

Motion
-------------------------------------------------

### Location

```js
location.default
location.offscreenLeft
location.offscreenRight
location.removeLeft
location.removeRight
location.removeBottom

motion.arcUp
motion.arc
motion.offLeft
motion.removeLeft

```

### Ink Ripples

Example Implementations:

http://codepen.io/wisnust10/pen/xVmwRK

http://codepen.io/Craigtut/pen/dIfzv

```js
on("click", ripple)
```
