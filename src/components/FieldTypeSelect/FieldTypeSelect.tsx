import { FC } from "react";
import { FieldType } from "types/schema";
import Select, { SelectProps } from "../Select/Select";
import { translateFieldType } from "./utils";

const TYPES: FieldType[] = [
  "string",
  "number",
  "password",
  "checkbox",
  "phone",
  "select",
];

const FieldTypeSelect: FC<Omit<SelectProps, "options">> = (props) => {
  return (
    <Select
      {...props}
      options={TYPES.map((type) => ({
        label: translateFieldType(type),
        value: type,
      }))}
    />
  );
};

export default FieldTypeSelect;
