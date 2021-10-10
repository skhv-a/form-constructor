import { joinClassNames } from "utils/utils";
import checkmark from "assets/checkmark.svg";
import "./styles.css";
import InlineLabel from "components/InlineLabel/InlineLabel";

type Props = {
  label: string;
  checked?: boolean;
  disabled?: boolean;
  onCheck?: (isChecked: boolean) => void;
};

const Checkbox = ({ label, checked, disabled, onCheck }: Props) => {
  return (
    <div className="checkbox-container">
      <div
        className={joinClassNames("checkbox", disabled && "checkbox_disabled")}
      >
        <input
          className="checkbox__input"
          type="checkbox"
          checked={checked}
          disabled={disabled}
          onChange={(e) => onCheck?.(e.target.checked)}
        />
        <div className="checkbox__control" />
        <img src={checkmark} alt="checkmark" className="checkbox__checkmark" />
      </div>
      <InlineLabel disabled={disabled}>{label}</InlineLabel>
    </div>
  );
};

export default Checkbox;
