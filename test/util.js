
export function exec(result, fn) {
  if (Array.isArray(fn)) {
    return fn.forEach(f => exec(result, f));
  }
  
  fn(result);
}
