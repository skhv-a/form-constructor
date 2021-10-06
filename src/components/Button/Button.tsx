import { ButtonHTMLAttributes, FC, HTMLProps } from "react";
import { joinClassNames } from "utils/utils";
import "./styles.css";

type ButtonType = "primary" | "secondary";

type HTMLButtonType = ButtonHTMLAttributes<HTMLButtonElement>["type"];

type Props = HTMLProps<HTMLButtonElement> & {
  type?: ButtonType;
  htmlType?: HTMLButtonType;
};

const Button: FC<Props> = ({
  type = "primary",
  htmlType,
  className,
  ...props
}: Props) => {
  return (
    <button
      type={htmlType}
      className={joinClassNames(
        "button",
        className,
        type === "primary" && "button_primary",
        type === "secondary" && "button_secondary"
      )}
      {...props}
    />
  );
};

export default Button;
