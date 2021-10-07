export type NumberSchema = Partial<{
  required: boolean;
  min: number;
  max: number;
}>;

export type StringSchema = Partial<{
  required: boolean;
  min: number;
  max: number;
  pattern: string;
}>;

type TypeWithSchema<T, S> = { type: T } & S;

export type Schema =
  | TypeWithSchema<"number", NumberSchema>
  | TypeWithSchema<"string", StringSchema>
  | TypeWithSchema<"select", { required?: boolean }>
  | TypeWithSchema<"phone", { required?: boolean }>;
