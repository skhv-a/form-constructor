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

export type SelectSchema = Partial<{
  required: boolean;
}>;

export type PhoneSchema = Partial<{
  required: boolean;
}>;

export type CheckboxSchema = Partial<{
  required: boolean;
}>;

export type FieldType =
  | "string"
  | "number"
  | "password"
  | "checkbox"
  | "phone"
  | "select";

export type FieldOption = {
  key: string;
  value: string;
};

export type SchemaValidation =
  | NumberSchema
  | StringSchema
  | SelectSchema
  | PhoneSchema;

export type SchemaField = {
  key: string;
  label: string;
  type: FieldType;
  validation: SchemaValidation;
  options?: FieldOption[];
};

export type Schema = {
  name: string;
  fields: SchemaField[];
};

export type ApiSchema = Schema & {
  id: number;
};
