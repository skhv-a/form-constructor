import { cloneElement, FC, ReactElement, useEffect } from "react";
import { useFormContext } from "contexts/Form";
import { joinClassNames } from "utils/utils";
import {
  NumberSchema,
  PhoneSchema,
  SelectSchema,
  StringSchema,
} from "types/schema";
import getByPath from "lodash.get";
import { validateSchema } from "./utils";

type SchemaType = "string" | "phone" | "number" | "select";

type Validate<V> = {
  validate?: (value: V) => string;
};

type TypeWithSchema<T extends SchemaType, S> = { type: T } & S;

export type FormItemSchema =
  | (TypeWithSchema<"string", StringSchema> & Validate<string>)
  | (TypeWithSchema<"phone", PhoneSchema> & Validate<string>)
  | (TypeWithSchema<"number", NumberSchema> & Validate<number>)
  | (TypeWithSchema<"select", SelectSchema> & Validate<string>);

type Props = {
  name: string;
  label?: string;
  schema?: FormItemSchema;
  trigger?: string;
  valuePropName?: string;
  invalidPropName?: string;
  className?: string;
  children: ReactElement;
};

const FormItem: FC<Props> = ({
  name,
  schema,
  label,
  children,
  className,
  trigger = "onChange",
  valuePropName = "value",
  invalidPropName = "isInvalid",
}) => {
  const { values, errors, touched, helpers } = useFormContext<any>();

  const value = getByPath(values, name);
  const error = getByPath(errors, name);
  const isTouched = getByPath(touched, name);

  useEffect(() => {
    if (schema) helpers.setError(name, validateSchema(schema, value));
  }, [value]);

  const isError = error && isTouched;

  const controlledChildren = cloneElement(children, {
    ...children.props,
    [valuePropName]: value,
    [invalidPropName]: isError,
    [trigger]: helpers.changeHandler.bind(null, name),
  });

  return (
    <div className={joinClassNames("form-item", className)}>
      <label
        className={joinClassNames(
          "form-item__label",
          isError && "form-item__label_error",
          label && schema?.required && "form-item__label_required"
        )}
      >
        {label}
      </label>
      {controlledChildren}
      {isError && <div className="form-item__error">{error}</div>}
    </div>
  );
};

export default FormItem;
