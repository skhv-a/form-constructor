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
  selected: Option | null;
  options: Option[];
  placeholder: string;
  onSelect: (option: Option | null) => void;
};

const Select: FC<Props> = ({
  options,
  selected,
  placeholder,
  onSelect,
}: Props) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isOpened, setOpened] = useBoolean();

  useOnOutsideClick(ref, setOpened.off);

  return (
    <div ref={ref} className="select">
      <div
        className={joinClassNames(
          "select__header",
          isOpened && "select__header_opened"
        )}
        onClick={setOpened.toggle}
      >
        {selected ? (
          <div className="select__value">{selected.value}</div>
        ) : (
          <div className="select__placeholder">{placeholder}</div>
        )}
        <img src={arrow} alt="arrow" />
      </div>
      {isOpened && (
        <div className="select__body">
          {options.map((option) => {
            const isSelected = option.key === selected?.key;
            const clickHandler = () => {
              onSelect(isSelected ? null : option); // null to reset selected value
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
