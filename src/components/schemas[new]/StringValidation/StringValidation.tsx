import { ValidationItems } from "components/schemas[new]/SchemaField/SchemaField";
import Form from "../../Form/Form";
import Input from "../../Input/Input";
import NumberInput from "../../NumberInput";
import Switch from "../../Switch/Switch";
import "./styles.css";

const StringValidation: ValidationItems = ({ basePath }) => {
  return (
    <div className="string-validation-form">
      <Form.Item
        name={`${basePath}.required`}
        valuePropName="checked"
        trigger="onCheck"
      >
        <Switch label="Обязательно для заполнения" />
      </Form.Item>
      <div className="string-validation-form__min-max">
        <Form.Item name={`${basePath}.min`} label="Мин. кол-во символов">
          <NumberInput />
        </Form.Item>
        <Form.Item name={`${basePath}.max`} label="Макс. кол-во символов">
          <NumberInput />
        </Form.Item>
      </div>
      <Form.Item name={`${basePath}.pattern`} label="Шаблон ввода">
        <Input />
      </Form.Item>
    </div>
  );
};

export default StringValidation;
