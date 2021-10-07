import { ChangeEvent, useState } from "react";
import { Schema } from "types/schemas";
import { validateSchema } from "utils/schemas";

type Errors<V> = Partial<Record<keyof V, string>>;

type ChangeValue = ChangeEvent<HTMLInputElement> | boolean | string | number;

type FormHelpers<V> = {
  changeHandler: (name: keyof V, value: ChangeValue) => void;
  isFormValid: () => boolean;
};

const useForm = <V extends Record<string, unknown>>(initialValues: V) => {
  const [values, setValues] = useState<V>(initialValues);
  const [errors, setErrors] = useState<Errors<V>>({});
  const schemas = new Map<keyof V, Schema>();

  const setValue = (name: keyof V, value: string | boolean | number) =>
    setValues((prev) => ({ ...prev, [name]: value }));

  const setError = (name: keyof V, err: string) =>
    setErrors((prev) => ({ ...prev, [name]: err }));

  const changeHandler = (name: keyof V, value: ChangeValue) => {
    switch (typeof value) {
      case "boolean":
        setValue(name, value); // switch/checkbox
        break;
      case "string":
        setValue(name, value); // select
        break;
      case "number":
        setValue(name, value); // number input
        break;
      default:
        setValue(name, value.target.value); // input
        break;
    }
  };

  const isFormValid = () => {
    let isValid = true;

    for (const [name, schema] of schemas) {
      const value = values[name] as string | number | undefined;
      const error = validateSchema(schema, value);

      if (error) isValid = false;

      setError(name, error);
    }

    return isValid;
  };

  const helpers: FormHelpers<V> = {
    changeHandler,
    isFormValid,
  };

  return {
    values,
    errors,
    schemas,
    helpers,
  };
};

export default useForm;
