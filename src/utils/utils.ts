export type Falsy = false | 0 | "" | null | undefined;

export const withoutFalsy = <T>(arr: T[]): T[] => arr.filter((e) => !!e);

type RawClassName = string | number | Falsy;

export const joinClassNames = (...classNames: RawClassName[]): string =>
  withoutFalsy(classNames).join(" ");
