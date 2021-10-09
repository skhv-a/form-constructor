export type Falsy = false | 0 | "" | null | undefined;

export const withoutFalsy = <T>(arr: T[]): T[] => arr.filter((e) => !!e);

type RawClassName = string | number | Falsy;

export const joinClassNames = (...classNames: RawClassName[]): string =>
  withoutFalsy(classNames).join(" ");

export const isEmpty = <T>(arr: T[]): boolean => !!arr.length;

export const flatObj = (
  obj: Record<string, any>,
  parent: string | null = null,
  res: Record<string, any> = {}
) => {
  for (let key in obj) {
    let propName = parent
      ? Array.isArray(obj)
        ? `${parent}[${key}]`
        : `${parent}.${key}`
      : key;
    if (typeof obj[key] === "object") {
      flatObj(obj[key], propName, res);
    } else {
      res[propName] = obj[key];
    }
  }
  return res;
};
