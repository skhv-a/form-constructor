import { FC, useRef } from "react";
import arrow from "assets/arrow.svg";
import { joinClassNames } from "utils/utils";
import useBoolean from "hooks/useBoolean";
import useOnOutsideClick from "hooks/useOnOutsideClick";
import "./styles.css";

export type Option = {
  key: string;
  value: string;
};

type Props = {
  selected?: string;
  options: Option[];
  placeholder: string;
  isInvalid?: boolean;
  onSelect?: (option: string) => void;
};

const Select: FC<Props> = ({
  options,
  selected: selectedKey,
  placeholder,
  isInvalid,
  onSelect,
}: Props) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isOpened, setOpened] = useBoolean();

  useOnOutsideClick(ref, setOpened.off);

  const selected = options.find((o) => o.key === selectedKey);

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
          <div className="select__value">{selected.value}</div>
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
            const isSelected = option.key === selectedKey;
            const clickHandler = () => {
              onSelect?.(isSelected ? "" : option.key); // '' to reset selected value
              setOpened.off();
            };

            return (
              <OptionItem
                {...option}
                key={option.key}
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

function OptionItem({ key, value, isSelected, onClick }: OptionProps) {
  return (
    <div
      key={key}
      onClick={onClick}
      className={joinClassNames(
        "select__option",
        isSelected && "select__option_active"
      )}
    >
      {value}
    </div>
  );
}

export default Select;
