import React, { FC, ReactElement, useState } from "react";
import arrow from "assets/arrow.svg";
import { joinClassNames } from "utils/utils";
import "./styles.css";

type Props = {
  className?: string;
  defaultOpened?: string[];
  children: ReactElement<ItemProps>[];
};

type IAccordion = FC<Props> & {
  Item: FC<ItemProps>;
};

const Accordion: IAccordion = ({
  className,
  defaultOpened = [],
  children,
}: Props) => {
  const [openedItems, setOpenedItems] = useState<string[]>(defaultOpened);

  const openItem = (id: string) => setOpenedItems((prev) => [...prev, id]);
  const closeItem = (id: string) =>
    setOpenedItems((prev) => prev.filter((i) => i !== id));

  return (
    <div className={joinClassNames("accordion", className)}>
      {children.map((item) => {
        const { id } = item.props;

        const isOpened = openedItems.includes(id);
        const onClick = () => (isOpened ? closeItem(id) : openItem(id));

        return (
          <div key={id}>
            {React.cloneElement(item, {
              ...item.props,
              isOpened,
              onClick,
            })}
          </div>
        );
      })}
    </div>
  );
};

type Title = React.ReactNode | { (isOpened: boolean): React.ReactNode };

type ItemProps = {
  id: string;
  isOpened?: boolean;
  title: Title;
  extra?: React.ReactNode;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
};

const AccordionItem: FC<ItemProps> = ({
  isOpened,
  title,
  extra,
  className,
  children,
  onClick,
}: ItemProps) => {
  return (
    <div
      className={joinClassNames(
        "accordion-item",
        className,
        isOpened && "accordion-item_opened"
      )}
    >
      <div className="accordion-item__header" onClick={onClick}>
        <div className="accordion-item-title">
          <img
            src={arrow}
            alt="arrow"
            className={joinClassNames(
              "accordion-item-title__arrow",
              isOpened && "accordion-item-title__arrow_opened"
            )}
          />
          {typeof title === "function" ? title(!!isOpened) : title}
        </div>
        <div className="accordion-item__extra">{extra}</div>
      </div>
      <div
        className={joinClassNames(
          "accordion-item__body",
          isOpened && "accordion-item__body_opened"
        )}
      >
        {children}
      </div>
    </div>
  );
};

Accordion.Item = AccordionItem;

export default Accordion;
