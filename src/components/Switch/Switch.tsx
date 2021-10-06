import { joinClassNames } from "utils/utils";
import "./styles.css";
import InlineLabel from "components/InlineLabel/InlineLabel";

type Props = {
  label: string;
  checked: boolean;
  disabled?: boolean;
  onCheck: (isChecked: boolean) => void;
};

const Switch = ({ label, checked, disabled, onCheck }: Props) => {
  return (
    <div className="switch-container">
      <button
        disabled={disabled}
        onClick={() => onCheck(!checked)}
        className={joinClassNames(
          "switch",
          checked && "switch_checked",
          checked && disabled && "switch_disabled-checked",
          !checked && disabled && "switch_disabled"
        )}
      >
        <div
          className={joinClassNames(
            "switch__indicator",
            checked && "switch__indicator_checked"
          )}
        />
      </button>
      <InlineLabel disabled={disabled}>{label}</InlineLabel>
    </div>
  );
};

export default Switch;
