
export function exec(el, fn) {
  if (Array.isArray(fn)) {
    return fn.forEach(f => exec(el, f));
  }
  
  fn(el);
}

export function createElement() {
  var element = {
    childNodes: [],
    setAttribute: (name, value) => {
      element[name] = value;
    },
    style: {},
    appendChild: child => {
      console.log(child);
      element.childNodes.push(child);
    }
  };
  
  return element;
}
