import { NumberSchema, StringSchema } from "types/schema";
import { FormItemSchema } from "./Item";

export const validateSchema = (
  schema: FormItemSchema,
  value: string | number | boolean | undefined
): string => {
  const isEmptyValue =
    typeof value === "undefined" || value === "" || value === false;

  if (schema.required && isEmptyValue) return "Заполните поле";
  if (!schema.required && isEmptyValue) return "";

  let error = "";

  switch (schema.type) {
    case "string":
      error = validateString((value as string) ?? "", schema);
      error = schema.validate?.(value as string) || error;
      break;
    case "number":
      error = validateNumber(value as number, schema);
      error = schema.validate?.(value as number) || error;
      break;
    case "phone":
      error = validatePhoneNumber((value as string) ?? "");
      error = schema.validate?.(value as string) || error;
      break;
    case "select":
      error = schema.validate?.(value as string) || error;
      break;
  }

  return error;
};

export const validateString = (value: string, schema: StringSchema): string => {
  let errorMessage = "";

  if (schema.min && value.length < schema.min) {
    errorMessage = `Минимум ${schema.min} символов`;
  }

  if (schema.max && value.length > schema.max) {
    errorMessage = `Максимум ${schema.max} символов`;
  }

  if (schema.pattern) {
    const regExp = new RegExp(schema.pattern);
    if (!isCompletelyMatches(value, regExp)) {
      errorMessage = "Значение не соответствует шаблону ввода";
    }
  }

  return errorMessage;
};

export const validateNumber = (value: number, schema: NumberSchema): string => {
  let errorMessage = "";

  if (isNaN(value)) {
    errorMessage = "Введите число";
  }

  if (!!schema.min && value < schema.min) {
    errorMessage = `Минимум ${schema.min}`;
  }

  if (!!schema.max && value > schema.max) {
    errorMessage = `Максимум ${schema.max}`;
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
