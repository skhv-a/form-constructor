import { useEffect } from "react";
import { useRouteMatch } from "react-router";
import Navbar from "components/Navbar/Navbar";
import useGetSchema from "hooks/schemas/useGetSchema";
import "pages/styles/schemas/[id].css";
import Alert from "components/Alert/Alert";
import FormFromSchema from "components/schemas[id]/FormFromSchema";
import useBoolean from "hooks/useBoolean";
import Button from "components/Button/Button";

type Params = {
  id: string;
};

const SchemaPage = () => {
  const [state, getSchema] = useGetSchema();
  const { params } = useRouteMatch<Params>();
  const [isValid, setIsValid] = useBoolean(false);
  const [isInvalid, setIsInvalid] = useBoolean(false);

  useEffect(() => {
    getSchema(+params.id);
  }, []);

  const schema = state.response;

  const submitHandler = () => {
    setIsValid.on();
    setIsInvalid.off();
  };

  const failHandler = () => {
    setIsInvalid.on();
    setIsValid.off();
  };

  return (
    <div className="schema-page">
      <Navbar />
      <div className="content">
        <div className="schema-page__container">
          {state.isLoading && "Загрузка..."}
          {state.error && <Alert type="error">{state.error.message}</Alert>}
          {schema && (
            <div className="schema-page-form">
              <h2 className="heading-2 schema-page-form__title">
                {schema.name}
              </h2>
              <FormFromSchema
                schema={schema}
                onSubmit={submitHandler}
                onFail={failHandler}
                controls={
                  <Button className="schema-page-form__controls">
                    Валидация
                  </Button>
                }
              />
              {isValid && (
                <Alert className="schema-page-form__alert" type="success">
                  Валидация пройдена успешно!
                </Alert>
              )}
              {isInvalid && (
                <Alert className="schema-page-form__alert" type="error">
                  Валидация не пройдена.
                </Alert>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SchemaPage;
