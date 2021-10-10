import { FC } from "react";
import { FieldType, Schema } from "types/schema";
import FieldRequiredItems from "components/schemas[new]/FieldRequiredItems";
import { useFormContext } from "contexts/Form";
import { getValidationItemsByType } from "./utils";
import getByPath from "lodash.get";
import "./styles.css";

export type ValidationItems = FC<{ basePath: string }>;

type Props = {
  basePath: string;
};

const SchemaFieldComponent = ({ basePath }: Props) => {
  const { values } = useFormContext<Schema>();
  const type = getByPath(values, `${basePath}.type`) as FieldType;

  const ValidationItems = getValidationItemsByType(type);

  return (
    <div className="schema-field">
      <div className="schema-field__required">
        <FieldRequiredItems basePath={basePath} type={type} />
      </div>
      <div className="schema-field__validation">
        <ValidationItems basePath={`${basePath}.validation`} />
      </div>
    </div>
  );
};

export default SchemaFieldComponent;
