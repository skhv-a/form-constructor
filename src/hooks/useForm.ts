import { ChangeEvent, useState } from "react";
import { TypeNestedValues, ValueOf } from "types/types";
import { cloneObj, flatObj } from "utils/utils";
import setByPath from "lodash.set";

export type FormErrors<V> = Partial<TypeNestedValues<V, string>>;
export type FormTouched<V> = Partial<TypeNestedValues<V, boolean>>;

type ChangeValue = ChangeEvent<HTMLInputElement> | boolean | string | number;

export type FormHelpers<V> = {
  isFormValid: () => boolean;
  changeHandler: (name: keyof V, value: ChangeValue) => void;
  setValue: (name: keyof V, value: V[keyof V]) => void;
  setError: (name: keyof V, err: string) => void;
  touchField: (name: keyof V, value: boolean) => void;
};

export type IForm<V> = {
  values: V;
  touched: FormTouched<V>;
  errors: FormErrors<V>;
  helpers: FormHelpers<V>;
};

type Args<V> = {
  initialValues: V;
  initialErrors?: FormErrors<V>;
  initialTouched?: {};
  validate?: (values: V) => FormErrors<V>;
};

const useForm = <V extends Record<string, unknown>>({
  initialValues,
  initialErrors = {},
  initialTouched = {},
  validate,
}: Args<V>): IForm<V> => {
  const [values, setValues] = useState<V>(initialValues);
  const [errors, setErrors] = useState<FormErrors<V>>(initialErrors);
  const [touched, setTouched] = useState<FormTouched<V>>(initialTouched);

  const setValue = (path: keyof V, value: ValueOf<V>) => {
    setValues((prev) => setByPath(cloneObj(prev), path, value));
  };

  const setError = (path: keyof V, err: string) =>
    setErrors((prev) => setByPath(cloneObj(prev), path, err));

  const touchField = (path: keyof V, value: boolean) =>
    setTouched((prev) => setByPath(cloneObj(prev), path, value));

  const changeHandler = (name: keyof V, value: ChangeValue) => {
    touchField(name, true);

    switch (typeof value) {
      case "boolean":
        setValue(name, value as ValueOf<V>); // switch/checkbox
        break;
      case "string":
        setValue(name, value as ValueOf<V>); // select
        break;
      case "number":
        setValue(name, value as ValueOf<V>); // number input
        break;
      default:
        setValue(name, value.target.value as ValueOf<V>); // input
        break;
    }
  };

  const isFormValid = () => {
    if (validate) {
      const validateErrs = validate(values);
      setErrors((prev) => ({ ...prev, ...validateErrs }));

      return isNoErrors(validateErrs);
    }

    return isNoErrors(errors);
  };

  const helpers: FormHelpers<V> = {
    changeHandler,
    isFormValid,
    setValue,
    setError,
    touchField,
  };

  return {
    touched,
    values,
    errors,
    helpers,
  };
};

function isNoErrors(errors: Record<string, unknown>): boolean {
  // flatObj for nested validations
  return Object.values(flatObj(errors)).every((err) => err === "");
}

export default useForm;
