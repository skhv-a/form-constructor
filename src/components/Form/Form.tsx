import { cloneElement, FormEvent, Fragment, ReactElement } from "react";
import { Schema } from "types/schemas";
import useForm from "hooks/useForm";
import { joinClassNames } from "utils/utils";
import "./styles.css";

type Props<V> = {
  initialValues: V;
  children: ReactElement<ItemProps | unknown>[];
  onSubmit: (values: V) => void;
};

const Form = <V extends Record<string, unknown>>({
  initialValues,
  children,
  onSubmit,
}: Props<V>) => {
  const { values, errors, schemas, helpers } = useForm<V>(initialValues);

  const renderFormItem = (item: ReactElement<ItemProps>) => {
    const {
      name,
      schema,
      children,
      valuePropName = "value",
      trigger = "onChange",
    } = item.props as ItemProps;

    if (schema) schemas.set(name, schema);

    const controlledChildren = cloneElement(children, {
      ...children.props,
      [valuePropName]: values[name],
      [trigger]: helpers.changeHandler.bind(null, name),
    });

    const error = errors[name];

    return cloneElement(item, { ...item.props, error }, controlledChildren);
  };

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    
    const isValid = helpers.isFormValid();
    if (isValid) onSubmit(values);
  };

  return (
    <form className="form" onSubmit={submitHandler}>
      {children.map((el, idx) =>
        isFormItemElement(el) ? (
          renderFormItem(el as ReactElement<ItemProps>)
        ) : (
          <Fragment key={idx}>{el}</Fragment>
        )
      )}
    </form>
  );
};

// for another elements support
function isFormItemElement(element: ReactElement) {
  return (
    typeof element.type === "function" &&
    (element.type as Function).name === "FormItem"
  );
}

type ItemProps = {
  name: string;
  label?: string;
  error?: string;
  schema?: Schema;
  trigger?: string;
  valuePropName?: string;
  invalidPropName?: string;
  children: ReactElement;
};

Form.Item = function FormItem({
  schema,
  label,
  error,
  children,
  invalidPropName = "isInvalid",
}: ItemProps) {
  return (
    <div className="form-item">
      <div
        className={joinClassNames(
          "form-item__label",
          error && "form-item__label_error",
          schema?.required && "form-item__label_required"
        )}
      >
        {label}
      </div>
      {cloneElement(children, {
        ...children.props,
        [invalidPropName]: !!error,
      })}
      <div className="form-item__error">{error}</div>
    </div>
  );
};

export default Form;
