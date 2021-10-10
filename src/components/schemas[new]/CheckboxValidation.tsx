import { ValidationItems } from "components/schemas[new]/SchemaField/SchemaField";
import Form from "../Form/Form";
import Switch from "../Switch/Switch";

const CheckboxValidation: ValidationItems = ({ basePath }) => {
  return (
    <Form.Item
      name={`${basePath}.required`}
      valuePropName="checked"
      trigger="onCheck"
    >
      <Switch label="Обязательно для заполнения" />
    </Form.Item>
  );
};

export default CheckboxValidation;
