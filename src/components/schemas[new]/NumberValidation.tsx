import { ValidationItems } from "components/schemas[new]/SchemaField/SchemaField";
import Form from "../Form/Form";
import NumberInput from "../NumberInput";
import Switch from "../Switch/Switch";

const NumberValidation: ValidationItems = ({ basePath }) => {
  return (
    <>
      <Form.Item
        name={`${basePath}.required`}
        valuePropName="checked"
        trigger="onCheck"
      >
        <Switch label="Обязательно для заполнения" />
      </Form.Item>
      <Form.Item name={`${basePath}.min`} label="Мин. значение">
        <NumberInput />
      </Form.Item>
      <Form.Item name={`${basePath}.max`} label="Макс. значение">
        <NumberInput />
      </Form.Item>
    </>
  );
};

export default NumberValidation;
