export function RetrieveObjectKeysAsArray(obj: Object) {
  return Object.keys(obj);
}

export function RetrieveEnumKeyValues(enumObj: Object) {
  return Object.keys(enumObj).filter((x) => typeof x === "string");
}

export function RetrieveIndexes<T>(obj: Object, fn: (x: string, _y, _z) => any): T {
  return Object.fromEntries(Object.entries(obj).map(([k, v], i) => [k, fn(v, k, i)])) as T;
}

export function IsObjectEmpty(obj: Object) {
  return Object.keys(obj).length === 0 && obj.constructor === Object;
}
