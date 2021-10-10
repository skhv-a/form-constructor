import { ReactNode } from "react";
import Form, { FormProps } from "./Form/Form";
import Input from "./Input/Input";

type Values = {
  username: string;
  password: string;
};

type Props = Omit<FormProps<Values>, "children"> & {
  controls: ReactNode;
};

const LoginForm = ({ controls, ...formProps }: Props) => {
  return (
    <Form {...formProps}>
      {() => (
        <>
          <Form.Item label="Логин" name="username">
            <Input placeholder="admin" />
          </Form.Item>
          <Form.Item label="Пароль" name="password">
            <Input placeholder="****" />
          </Form.Item>
          {controls}
        </>
      )}
    </Form>
  );
};

export default LoginForm;
