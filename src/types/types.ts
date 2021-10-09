export type ValueOf<T> = T[keyof T];

export type TypeNestedValues<Values, T> = {
  [K in keyof Values]: Values[K] extends any[]
    ? Values[K][number] extends object
      ? TypeNestedValues<Values[K][number], T>[]
      : T[]
    : Values[K] extends object
    ? TypeNestedValues<Values[K], T>
    : T;
};
