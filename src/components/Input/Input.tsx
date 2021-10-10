import { forwardRef, InputHTMLAttributes } from "react";
import { joinClassNames } from "utils/utils";
import "./styles.css";

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  isInvalid?: boolean;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, isInvalid, ...props }, ref) => {
    return (
      <input
        {...props}
        ref={ref}
        className={joinClassNames(
          "input",
          className,
          isInvalid && "input_error"
        )}
      />
    );
  }
);

export default Input;
