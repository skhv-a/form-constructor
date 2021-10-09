import { IForm } from "hooks/useForm";
import { createContext, useContext } from "react";

const FormContext = createContext<IForm<any>>({} as any);

export const useFormContext = <F extends any>() =>
  useContext(FormContext) as IForm<F>;

type FormProviderProps<V> = IForm<V> & {
  children: React.ReactNode;
};

export const FormProvider = <V extends Record<string, unknown>>({
  children,
  ...form
}: FormProviderProps<V>) => {
  return <FormContext.Provider value={form}>{children}</FormContext.Provider>;
};
