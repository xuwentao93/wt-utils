export function getType(obj) {
  return Object.prototype.toString.call(obj).slice(0, -8);
}