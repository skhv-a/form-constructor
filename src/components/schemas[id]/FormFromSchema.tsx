import { ReactNode } from "react";
import { Schema } from "types/schema";
import { FormErrors } from "hooks/useForm";
import Form from "components/Form/Form";
import FieldFormItem from "./FieldFormItem";

type Props = {
  schema: Schema;
  controls: ReactNode;
  onSubmit: (values: any) => void;
  onFail: (errors: FormErrors<any>) => void;
};

const FormFromSchema = ({ schema, controls, onSubmit, onFail }: Props) => {
  const { fields } = schema;

  const initialValues: any = fields.reduce((acc, field) => {
    acc[field.key] = undefined;
    return acc;
  }, {} as any);

  return (
    <Form<any>
      initialValues={initialValues}
      onSubmit={onSubmit}
      onFail={onFail}
    >
      {() => (
        <>
          {fields.map((field) => (
            <FieldFormItem key={field.key} field={field} />
          ))}
          {controls}
        </>
      )}
    </Form>
  );
};

export default FormFromSchema;
