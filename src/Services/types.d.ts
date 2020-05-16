export namespace Util {
  export type SimpleFlatten<T, K = "key"> = T extends object
    ? {
        [P in keyof T]: T[P][K];
      }
    : never;

  export type SimpleFlattenWithArray<T, T = "key"> = T extends object
    ? {
        [P in keyof T]: Array<T[P][K]>;
      }
    : never;
}
