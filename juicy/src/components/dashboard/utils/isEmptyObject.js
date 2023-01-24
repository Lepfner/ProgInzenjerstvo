export function isEmptyObject(obj) {
  if (typeof obj === "object" && obj != null && Object.keys(obj).length !== 0) {
    return false;
  } else {
    return true;
  }
}
