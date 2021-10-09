import { ValidationItems } from "components/SchemaField/SchemaField";
import Form from "./Form/Form";
import Switch from "./Switch/Switch";

const PhoneValidation: ValidationItems = ({ basePath }) => {
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

export default PhoneValidation;
