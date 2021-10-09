import { ValidationItems } from "components/SchemaField/SchemaField";
import { FieldType } from "types/schema";
import NumberValidation from "components/NumberValidation";
import PhoneValidation from "components/PhoneValidation";
import SelectValidation from "components/SelectValidation";
import StringValidation from "components/StringValidation/StringValidation";
import CheckboxValidation from "components/CheckboxValidation";

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
