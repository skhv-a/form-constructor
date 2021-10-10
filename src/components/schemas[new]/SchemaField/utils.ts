import { ValidationItems } from "components/schemas[new]/SchemaField/SchemaField";
import { FieldType } from "types/schema";
import NumberValidation from "components/schemas[new]/NumberValidation";
import PhoneValidation from "components/schemas[new]/PhoneValidation";
import SelectValidation from "components/schemas[new]/SelectValidation";
import StringValidation from "components/schemas[new]/StringValidation/StringValidation";
import CheckboxValidation from "components/schemas[new]/CheckboxValidation";

export const getValidationItemsByType = (type: FieldType): ValidationItems => {
  switch (type) {
    case "string":
    case "password":
      return StringValidation;
    case "number":
      return NumberValidation;
    case "phone":
      return PhoneValidation;
    case "checkbox":
      return CheckboxValidation;
    case "select":
      return SelectValidation;
    default:
      return () => null;
  }
};
