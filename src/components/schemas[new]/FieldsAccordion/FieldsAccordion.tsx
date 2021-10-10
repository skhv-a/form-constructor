import { Schema, SchemaField } from "types/schema";
import Accordion from "components/Accordion/Accordion";
import SchemaFieldComponent from "components/schemas[new]/SchemaField/SchemaField";
import { useFormContext } from "contexts/Form";
import { translateFieldType } from "components/schemas[new]/FieldTypeSelect/utils";
import { flatObj, joinClassNames } from "utils/utils";
import deleteIco from "assets/delete.svg";
import getByPath from "lodash.get";
import "./styles.css";

type Props = {
  className?: string;
  fields: SchemaField[];
  removeField: (idx: number) => void;
};

const FieldsAccordion = ({ className, fields, removeField }: Props) => {
  const { errors, touched } = useFormContext<Schema>();
  const isRemoveAvailable = fields.length > 1;

  return (
    <Accordion className={className}>
      {fields.map((field, idx) => {
        const fieldErrs = errors.fields?.[idx] ?? {};
        const isInvalid = Object.entries(flatObj(fieldErrs)).some(
          ([path, error]) => {
            const isTouched = getByPath(touched, `fields[${idx}].${path}`);
            return error && isTouched;
          }
        );

        return (
          <Accordion.Item
            key={idx}
            id={idx.toString()}
            className="fields-list-item"
            title={(isOpened) => (
              <FieldHeader
                field={field}
                index={idx + 1}
                isOpened={isOpened}
                isInvalid={isInvalid}
              />
            )}
            extra={
              isRemoveAvailable && (
                <img
                  src={deleteIco}
                  alt="delete"
                  onClick={() => removeField(idx)}
                  className="fields-list-item__remove"
                />
              )
            }
          >
            <SchemaFieldComponent basePath={`fields[${idx}]`} />
          </Accordion.Item>
        );
      })}
    </Accordion>
  );
};

type HeaderProps = {
  index: number;
  field: SchemaField;
  isOpened: boolean;
  isInvalid: boolean;
};

function FieldHeader({ index, field, isOpened, isInvalid }: HeaderProps) {
  return (
    <div className="field-header">
      <div
        className={joinClassNames(
          "field-header__main",
          isInvalid && !isOpened && "field-header__main_invalid"
          // To see closed invalid fields
        )}
      >
        Свойство {index}: {field.label}
        {field.type && !isOpened && (
          <p className="fields-list-item__subtitle">
            {translateFieldType(field.type)}; {field.key}
          </p>
        )}
      </div>
      <div className="fields-header__validation">{isOpened && "Валидация"}</div>
    </div>
  );
}

export default FieldsAccordion;
