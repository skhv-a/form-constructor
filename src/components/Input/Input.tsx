import { FC, HTMLProps } from "react";
import { joinClassNames } from "utils/utils";
import "./styles.css";

export type InputProps = HTMLProps<HTMLInputElement> & {
  isInvalid?: boolean;
};

const Input: FC<InputProps> = ({
  className,
  isInvalid,
  ...props
}: InputProps) => {
  return (
    <input
      {...props}
      className={joinClassNames("input", className, isInvalid && "input_error")}
    />
  );
};

export default Input;
