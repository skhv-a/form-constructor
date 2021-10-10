import { Schema, SchemaField } from "types/schema";
import { flatObj } from "utils/utils";
import Button from "../../Button/Button";
import FieldsAccordion from "../FieldsAccordion/FieldsAccordion";
import Form from "../../Form/Form";
import Input from "../../Input/Input";
import "./styles.css";

const BLANK_FIELD: SchemaField = {
  key: "",
  label: "",
  type: "string",
  validation: {},
  options: [...[{ key: "", value: "" }]],
};

const INITIAL_VALUES = {
  name: "",
  fields: [{ ...BLANK_FIELD }],
};

type Props = {
  initialValues?: Schema;
  controls: React.ReactNode;
  onSubmit: (values: Schema) => void;
};

const NewSchemaForm = ({
  initialValues = INITIAL_VALUES,
  controls,
  onSubmit,
}: Props) => {
  return (
    <Form<Schema> initialValues={initialValues} onSubmit={onSubmit}>
      {({ values, errors }) => {
        const isInvalidField =
          errors.fields &&
          errors.fields.some((errs) =>
            Object.values(flatObj(errs)).some((e) => !!e)
          );

        return (
          <>
            <Form.Item
              name="name"
              label="Название схемы"
              className="schema-name"
              schema={{ type: "string", required: true }}
            >
              <Input />
            </Form.Item>
            <div className="divider"></div>
            <div className="schema-fields">
              <h2 className="heading-2">Свойства схемы</h2>
              <p className="schema-fields__subtitle">
                Схема должна содержать хотя бы одно свойство
              </p>
              <Form.List<SchemaField> name="fields">
                {({ items, push, remove }) => (
                  <>
                    <FieldsAccordion
                      fields={items}
                      removeField={remove}
                      className="schema-fields__accordion"
                    />
                    <div className="schema-fields__controls">
                      <Button
                        htmlType="button"
                        type="secondary"
                        disabled={isInvalidField}
                        onClick={() => push({ ...BLANK_FIELD })}
                      >
                        Добавить новое свойство
                      </Button>
                      {controls}
                    </div>
                  </>
                )}
              </Form.List>
            </div>
          </>
        );
      }}
    </Form>
  );
};

export default NewSchemaForm;
