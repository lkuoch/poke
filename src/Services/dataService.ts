export function RetrieveObjectKeysAsArray(obj: Object): Array<string> {
  return Object.keys(obj);
}

export function ObjectMapper<T>(obj: Object, fn: (x: string, _1, _2) => any): T {
  return Object.fromEntries(Object.entries(obj).map(([k, v], i) => [k, fn(v, k, i)])) as T;
}

export function RetrieveEnumKeyValues(enumObj: Object): Array<string> {
  return Object.keys(enumObj).filter((x) => typeof x === "string");
}