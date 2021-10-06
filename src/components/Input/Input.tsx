import { FC, HTMLProps } from "react";
import { joinClassNames } from "utils/utils";
import "./styles.css";

type Props = HTMLProps<HTMLInputElement> & {
  isInvalid?: boolean;
};

const Input: FC<Props> = ({ className, isInvalid, ...props }: Props) => {
  return (
    <input
      {...props}
      className={joinClassNames("input", className, isInvalid && "input_error")}
    />
  );
};

export default Input;
