export function createExample(cb) {
  var examplesElement = document.getElementById("examples");

  var element = document.createElement("div");
  examplesElement.appendChild(element);
  cb(element);
}

export function clearExamples() {
  var examplesElement = document.getElementById("examples");

  while (examplesElement.firstChild) {
    examplesElement.removeChild(examplesElement.firstChild);
  }
}
