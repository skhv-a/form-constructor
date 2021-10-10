import { FieldType, SchemaField } from "types/schema";
import FieldTypeSelect from "./FieldTypeSelect/FieldTypeSelect";
import Form from "../Form/Form";
import Input from "../Input/Input";
import OptionsList from "./FieldOptionsList/OptionsList";

export type ISchemaFieldForm = Omit<SchemaField, "validation">;

type Props = {
  basePath: string;
  type: FieldType;
};

const FieldRequiredItems = ({ basePath, type }: Props) => {
  const isSelect = type === "select";
  return (
    <>
      <Form.Item
        name={`${basePath}.key`}
        label="Ключ свойства"
        schema={{ type: "string", required: true }}
      >
        <Input placeholder="Укажите ключ свойства" />
      </Form.Item>
      <Form.Item
        name={`${basePath}.label`}
        label="Название свойства"
        schema={{ type: "string", required: true }}
      >
        <Input placeholder="Укажите название свойства" />
      </Form.Item>
      <Form.Item
        name={`${basePath}.type`}
        label="Поле для отображения"
        schema={{ type: "select", required: true }}
        valuePropName="selected"
        trigger="onSelect"
      >
        <FieldTypeSelect placeholder="Выберите поле для отображения" />
      </Form.Item>
      {isSelect && <OptionsList basePath={basePath} />}
    </>
  );
};

export default FieldRequiredItems;
