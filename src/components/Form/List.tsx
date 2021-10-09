import { useFormContext } from "contexts/Form";
import getByPath from "lodash.get";

type ListHelpers<V> = {
  items: V[];
  push: (item: V) => void;
  remove: (idx: number) => void;
};

type ListProps<V> = {
  name: string;
  children: (helpers: ListHelpers<V>) => JSX.Element;
};

const FormList = <V extends unknown>({ name, children }: ListProps<V>) => {
  const { values, helpers } = useFormContext<any>();
  const items = getByPath(values, name);

  const remove = (idx: number): void => {
    const clone = [...items] as V[];
    clone.splice(idx, 1);

    helpers.setError(name, "");
    helpers.setValue(name, clone);
    helpers.touchField(name, false);
  };

  const push = (item: V): void => {
    helpers.setValue(name, [...items, item] as V[]);
  };

  return children({ items, remove, push });
};

export default FormList;
