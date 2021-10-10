import Checkbox from "components/Checkbox/Checkbox";
import FormItem from "components/Form/Item";
import Input from "components/Input/Input";
import NumberInput from "components/NumberInput";
import PasswordInput from "components/PasswordInput/PasswordInput";
import Select from "components/Select/Select";
import { SchemaField } from "types/schema";

type Props = { field: SchemaField };

const FieldFromSchema = ({ field }: Props) => {
  switch (field.type) {
    case "string":
      return (
        <FormItem
          name={field.key}
          label={field.label}
          schema={{ type: "string", ...field.validation }}
        >
          <Input placeholder={placeholderFromLabel(field.label)} />
        </FormItem>
      );
    case "password":
      return (
        <FormItem
          name={field.key}
          label={field.label}
          schema={{ type: "string", ...field.validation }}
        >
          <PasswordInput placeholder={placeholderFromLabel(field.label)} />
        </FormItem>
      );
    case "phone":
      return (
        <FormItem
          name={field.key}
          label={field.label}
          schema={{ type: "phone", ...field.validation }}
        >
          <Input placeholder={placeholderFromLabel(field.label)} />
        </FormItem>
      );
    case "number":
      return (
        <FormItem
          name={field.key}
          label={field.label}
          schema={{ type: "number", ...field.validation }}
        >
          <NumberInput placeholder={placeholderFromLabel(field.label)} />
        </FormItem>
      );
    case "select":
      return (
        <FormItem
          name={field.key}
          label={field.label}
          schema={{ type: "select", ...field.validation }}
          valuePropName="selected"
          trigger="onSelect"
        >
          <Select
            placeholder={placeholderFromLabel(field.label)}
            options={field.options!.map((option) => ({
              label: option.value,
              value: option.key,
            }))}
          />
        </FormItem>
      );
    case "checkbox":
      return (
        <FormItem
          name={field.key}
          schema={{ type: "checkbox", ...field.validation }}
          valuePropName="checked"
          trigger="onCheck"
        >
          <Checkbox label={field.label} />
        </FormItem>
      );
    default:
      return null;
  }
};

function placeholderFromLabel(label: string): string {
  return `Введите ${label.toLowerCase()}`;
}

export default FieldFromSchema;
