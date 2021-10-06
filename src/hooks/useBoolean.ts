import { useState } from "react";

type BooleanActions = {
  on: () => void;
  off: () => void;
  toggle: () => void;
};

const useBoolean = (initialValue = false): [boolean, BooleanActions] => {
  const [value, setValue] = useState(initialValue);

  const on = () => setValue(true);
  const off = () => setValue(false);
  const toggle = () => setValue((prev) => !prev);

  const actions: BooleanActions = {
    on,
    off,
    toggle,
  };

  return [value, actions];
};

export default useBoolean;
