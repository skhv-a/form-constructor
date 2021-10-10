import { useEffect } from "react";
import { FieldOption, Schema } from "types/schema";
import Button from "../../Button/Button";
import FormItem from "../../Form/Item";
import FormList from "../../Form/List";
import Input from "../../Input/Input";
import { useFormContext } from "contexts/Form";
import getByPath from "lodash.get";
import cross from "assets/cross.svg";
import "./styles.css";

type Props = {
  basePath: string;
};

const OptionsList = ({ basePath }: Props) => {
  const { errors, helpers } = useFormContext<Schema>();

  const optionsErrors = getByPath(errors, `${basePath}.options`) as
    | string
    | FieldOption[];

  const isInvalidOption = Array.isArray(optionsErrors)
    ? optionsErrors.some((o) => o.key || o.value)
    : false;

  useEffect(() => {
    return () => {
      helpers.setError(`${basePath}.options` as keyof Schema, "");
      // to avoid validation after unmount
    };
  }, []);

  return (
    <FormList<FieldOption> name={`${basePath}.options`}>
      {({ items, push, remove }) => {
        const isRemoveAvailable = items.length > 1;

        return (
          <div className="options-list">
            {items.map((item, idx) => {
              const isDuplicate = (key: keyof FieldOption, val: string) =>
                !!items.find(
                  (o, i) =>
                    idx !== i && o[key].toLowerCase() === val.toLowerCase()
                );

              return (
                <div key={idx} className="options-list-item">
                  <FormItem
                    name={`${basePath}.options[${idx}].key`}
                    schema={{
                      type: "string",
                      required: true,
                      validate: (val: string) =>
                        isDuplicate("key", val)
                          ? "Такой ключ уже существует"
                          : "",
                    }}
                  >
                    <Input placeholder="Ключ" />
                  </FormItem>
                  <FormItem
                    name={`${basePath}.options[${idx}].value`}
                    schema={{
                      type: "string",
                      required: true,
                      validate: (val: string) =>
                        isDuplicate("value", val)
                          ? "Такое название уже существует"
                          : "",
                    }}
                  >
                    <Input placeholder="Название" />
                  </FormItem>
                  {isRemoveAvailable && (
                    <img
                      src={cross}
                      alt="cross"
                      className="options-list-item__cross"
                      onClick={() => remove(idx)}
                    />
                  )}
                </div>
              );
            })}
            <Button
              htmlType="button"
              type="secondary"
              className="options-list__button"
              disabled={isInvalidOption}
              onClick={() => push({ key: "", value: "" })}
            >
              Новый вариант
            </Button>
          </div>
        );
      }}
    </FormList>
  );
};

export default OptionsList;
