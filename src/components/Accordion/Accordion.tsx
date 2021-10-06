import React, { FC, ReactElement, useState } from "react";
import arrow from "assets/arrow.svg";
import { joinClassNames } from "utils/utils";
import "./styles.css";

type Props = {
  defaultOpened?: string[];
  children: ReactElement<ItemProps>[];
};

type IAccordion = FC<Props> & {
  Item: FC<ItemProps>;
};

const Accordion: IAccordion = ({ defaultOpened = [], children }: Props) => {
  const [openedItems, setOpenedItems] = useState<string[]>(defaultOpened);

  const openItem = (id: string) => setOpenedItems((prev) => [...prev, id]);
  const closeItem = (id: string) =>
    setOpenedItems((prev) => prev.filter((i) => i !== id));

  return (
    <div className="accordion">
      {children.map((item) => {
        const { id } = item.props;

        const isOpened = openedItems.includes(id);
        const clickHandler = () => (isOpened ? closeItem(id) : openItem(id));

        return (
          <div key={id} onClick={clickHandler}>
            {React.cloneElement(item, { ...item.props, isOpened })}
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
  children: React.ReactNode;
};

const AccordionItem: FC<ItemProps> = ({
  isOpened,
  title,
  extra,
  children,
}: ItemProps) => {
  return (
    <div
      className={joinClassNames(
        "accordion-item",
        isOpened && "accordion-item_opened"
      )}
    >
      <div className="accordion-item__header">
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
      {isOpened && <div className="accordion-item__body">{children}</div>}
    </div>
  );
};

Accordion.Item = AccordionItem;

export default Accordion;
