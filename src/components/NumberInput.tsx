import { FC } from "react";
import Input, { InputProps } from "./Input/Input";

type Props = Omit<InputProps, "type" | "onChange"> & {
  onChange?: (value: number) => void;
};

const NumberInput: FC<Props> = ({ onChange, ...props }: Props) => {
  return (
    <Input
      type="number"
      onChange={(e) => onChange?.(+e.currentTarget.value)}
      {...props}
    />
  );
};

export default NumberInput;
