import colors from "./color-palette.json";
import contrast from "get-contrast";

function getPercent(shade) {
  switch (shade.toString()) {
    case "50":
      return 0.9;
    case "100":
      return 0.7;
    case "200":
      return 0.5;
    case "300":
      return 0.333;
    case "400":
      return 0.166;
    case "500": 
      return 0;
    case "600":
      return -0.125;
    case "700":
      return -0.25;
    case "800":
      return -0.375;
    case "900":
      return -.5;
    case "A100":
      return 0.7;
    case "A200":
      return 0.5;
    case "A400":
      return 0.166;
    case "A700":
      return -0.25;
    default:
      throw new Error("Unknown shade value: " + shade);
  }
}

function shadeColor(color, shade) {
  var percent = getPercent(shade);   
  var f=parseInt(color.slice(1),16),t=percent<0?0:255,p=percent<0?percent*-1:percent,R=f>>16,G=f>>8&0x00FF,B=f&0x0000FF;
  return "#"+(0x1000000+(Math.round((t-R)*p)+R)*0x10000+(Math.round((t-G)*p)+G)*0x100+(Math.round((t-B)*p)+B)).toString(16).slice(1);
}

export function getColor(name, shade) {
  if (name === "White") return "#FFFFFF";
  if (name === "Black") return "#000000";
  
  shade = shade || 500;
  var color;
  
  var hue = colors[name];
  
  if (hue) {
    color = hue[shade];
  } else if (name.startsWith("#")) {
    color = shadeColor(name, shade);
  }
  
  if (!color) {
    throw new Error("Unable to get requested color: " + name);
  }
  
  return color;
}

function getTextColor(name, shade, category) {
  var backgroundColor = getColor(name, shade);
  var black = "#000000";
  var white = "#ffffff";
  
  var lightTextOpacity = {
    primary: 1,
    secondary: .7,
    disabled: .5,
    divider: .12
  };

  var darkTextOpacity = {
    primary: .87,
    secondary: .54,
    disabled: .38,
    divider: .12
  };
  
  var darkRatio = contrast.ratio(backgroundColor, black);
  var lightRatio = contrast.ratio(backgroundColor, white);
  
  if (darkRatio > lightRatio) {
    return {
      color: black,
      opacity: darkTextOpacity[category]
    };
  } else {
    return {
      color: white,
      opacity: lightTextOpacity[category]
    };
  }
}

export function primaryText(name, shade) {
  return getTextColor(name, shade, "primary");
}

export function secondaryText(name, shade) {
  return getTextColor(name, shade, "secondary");
}

export function disabledText(name, shade) {
  return getTextColor(name, shade, "disabled");
}

export function divider(name, shade) {
  return getTextColor(name, shade, "divider");
}
