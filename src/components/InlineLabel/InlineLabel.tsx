import { FC, HTMLProps } from "react";
import { joinClassNames } from "utils/utils";
import "./styles.css";

type Props = HTMLProps<HTMLLabelElement>;

const InlineLabel: FC<Props> = ({ className, disabled, ...props }: Props) => {
  return (
    <label
      className={joinClassNames(
        "inline-label",
        disabled && "inline-label_disabled",
        className
      )}
      {...props}
    />
  );
};

export default InlineLabel;
