## Color Revisited

- no more static settings?

```js
const colors: {
  primary: colorPalette.getColor("#ff0000"),
  secondary: colorPalette.getColor("#00ff00"),
  error: colorPalette.getColor("#ff0000"),
  theme: "light"
}

background.primary({ color: colors.primary });
background.accent({ color: colors.secondary });
background.card({ theme: colors.theme });


```
