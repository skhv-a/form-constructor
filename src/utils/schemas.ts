import { Schema, StringSchema } from "types/schemas";

export const validateSchema = (
  schema: Schema,
  value: string | number | undefined
): string => {
  const isEmptyValue = typeof value === "undefined" || value === "";

  if (schema.required && isEmptyValue) return "Поле не может быть пустым";
  if (!schema.required && isEmptyValue) return "";

  let error = "";

  switch (schema.type) {
    case "string":
      error = validateString((value as string) ?? "", schema);
      break;
    case "number":
      error = validateNumber(value as number, schema);
      break;
    case "phone":
      error = validatePhoneNumber((value as string) ?? "");
      break;
  }

  return error;
};

export const validateString = (value: string, schema: StringSchema): string => {
  let errorMessage = "";

  switch (true) {
    case !!schema.min:
      if (value.length < schema.min!) {
        errorMessage = `Минимум ${schema.min} символов`;
      }
      break;
    case !!schema.max:
      if (value.length > schema.max!) {
        errorMessage = `Максимум ${schema.max} символов`;
      }
      break;
    case !!schema.pattern:
      const regExp = new RegExp(schema.pattern!);
      if (!isCompletelyMatches(value, regExp)) {
        errorMessage = "Значение не соответствует шаблону ввода";
      }
      break;
  }

  return errorMessage;
};

export const validateNumber = (value: number, schema: StringSchema): string => {
  let errorMessage = "";

  switch (true) {
    case isNaN(value):
      errorMessage = "Введите число";
      break;
    case !!schema.min:
      if (value < schema.min!) {
        errorMessage = `Минимум ${schema.min}`;
      }
      break;
    case !!schema.max:
      if (value > schema.max!) {
        errorMessage = `Максимум ${schema.max}`;
      }
      break;
  }

  return errorMessage;
};

export const validatePhoneNumber = (phone: string): string => {
  const regExp = /(\+7|8)\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}/;
  return isCompletelyMatches(phone, regExp)
    ? ""
    : "Введите валидный номер телефона";
};

function isCompletelyMatches(string: string, regExp: RegExp) {
  const [regExpMatched] = string.match(regExp) ?? [];
  return regExpMatched === string;
}
