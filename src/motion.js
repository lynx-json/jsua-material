// requirements
// content element has no padding
// content element is not resized
// wrapper has maxHeight of the content element's offset height

export function show(element) {
  element.style.transition = "max-height 175ms ease-in-out, opacity 175ms ease-in-out";
  element.style.maxHeight = "100px";
  element.style.opacity = 1;
}

export function hide(element) {
  element.style.transition = "max-height 175ms ease-in-out, opacity 175ms ease-in-out";
  element.style.maxHeight = "0px";
  element.style.opacity = 0;
}
