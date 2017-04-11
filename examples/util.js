export function createExample(cb) {
  var examplesElement = document.getElementById("examples");
  var element = document.createElement("div");
  examplesElement.appendChild(element);
  cb(element);
}
