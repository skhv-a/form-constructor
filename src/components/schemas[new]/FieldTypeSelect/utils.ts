import { FieldType } from "types/schema";

export const translateFieldType = (type: FieldType): string => {
  switch (type) {
    case "string":
      return "Текстовое поле";
    case "number":
      return "Числовое поле";
    case "password":
      return "Пароль";
    case "checkbox":
      return "Чекбокс";
    case "phone":
      return "Номер телефона";
    case "select":
      return "Выпадающий список";
    default:
      return type;
  }
};
