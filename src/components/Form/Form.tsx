import { FormEvent, useEffect } from "react";
import { FormProvider } from "contexts/Form";
import useForm, { FormErrors, IForm } from "hooks/useForm";
import { flatObj, joinClassNames } from "utils/utils";
import FormItem from "./Item";
import FormList from "./List";
import "./styles.css";

export type FormProps<V> = {
  initialValues: V;
  initialErrors?: FormErrors<V>;
  className?: string;
  children: (form: IForm<V>) => React.ReactNode;
  validate?: (values: V) => FormErrors<V>;
  onSubmit?: (values: V) => void;
  onFail?: (errors: FormErrors<V>) => void;
  onValuesChange?: (values: V) => void;
};

const Form = <V extends Record<string, unknown>>({
  initialErrors = {},
  initialValues,
  className,
  children,
  validate,
  onSubmit,
  onFail,
  onValuesChange,
}: FormProps<V>) => {
  const form = useForm<V>({
    initialValues,
    initialErrors,
    validate,
  });

  const { values, errors, helpers } = form;

  useEffect(() => {
    onValuesChange?.(values);
  }, [values]);

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();

    const paths = Object.keys(flatObj(values));
    paths.forEach((path) => helpers.touchField(path, true));

    const isValid = helpers.isFormValid();
    if (isValid) {
      onSubmit?.(values);
    } else {
      onFail?.(errors);
    }
  };

  return (
    <form
      className={joinClassNames("form", className)}
      onSubmit={submitHandler}
    >
      <FormProvider {...form}>{children(form)}</FormProvider>
    </form>
  );
};

Form.Item = FormItem;
Form.List = FormList;

export default Form;
