import { FC, useRef } from "react";
import arrow from "assets/arrow.svg";
import { joinClassNames } from "utils/utils";
import useBoolean from "hooks/useBoolean";
import useOnOutsideClick from "hooks/useOnOutsideClick";
import "./styles.css";

export type Option = {
  label: string;
  value: string;
};

export type SelectProps = {
  selected?: string;
  options: Option[];
  placeholder: string;
  isInvalid?: boolean;
  onSelect?: (option: string) => void;
};

const Select: FC<SelectProps> = ({
  options,
  selected: selectedValue,
  placeholder,
  isInvalid,
  onSelect,
}: SelectProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isOpened, setOpened] = useBoolean();

  useOnOutsideClick(ref, setOpened.off);

  const selected = options.find((o) => o.value === selectedValue);

  return (
    <div ref={ref} className="select">
      <div
        className={joinClassNames(
          "select__header",
          isInvalid && "select__header_error",
          isOpened && "select__header_opened"
        )}
        onClick={setOpened.toggle}
      >
        {selected ? (
          <div className="select__value">{selected.label}</div>
        ) : (
          <div
            className={joinClassNames(
              "select__placeholder",
              isInvalid && "select__placeholder_error"
            )}
          >
            {placeholder}
          </div>
        )}
        <img src={arrow} alt="arrow" />
      </div>
      {isOpened && (
        <div
          className={joinClassNames(
            "select__body",
            isInvalid && "select__body_error"
          )}
        >
          {options.map((option) => {
            const isSelected = option.value === selectedValue;
            const clickHandler = () => {
              onSelect?.(isSelected ? "" : option.value);
              // '' to reset selected value
              setOpened.off();
            };

            return (
              <OptionItem
                {...option}
                key={option.value}
                isSelected={isSelected}
                onClick={clickHandler}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

type OptionProps = Option & {
  isSelected: boolean;
  onClick: () => void;
};

function OptionItem({ label, value, isSelected, onClick }: OptionProps) {
  return (
    <div
      key={value}
      onClick={onClick}
      className={joinClassNames(
        "select__option",
        isSelected && "select__option_active"
      )}
    >
      {label}
    </div>
  );
}

export default Select;
