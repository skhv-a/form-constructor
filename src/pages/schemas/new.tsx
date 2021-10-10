import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Button from "components/Button/Button";
import Navbar from "components/Navbar/Navbar";
import NewSchemaForm from "components/schemas[new]/NewSchemaForm/NewSchemaForm";
import useCreateSchema from "hooks/schemas/useCreateSchema";

function NewSchemaPage() {
  const history = useHistory();
  const [state, createSchema] = useCreateSchema();

  useEffect(() => {
    if (state.response) history.push(`/schemas/${state.response.id}`);
  }, [state]);

  return (
    <>
      <Navbar />
      <div className="content">
        <NewSchemaForm
          onSubmit={createSchema}
          controls={
            <Button disabled={state.isLoading}>
              {state.isLoading ? "Сохраняем..." : "Сохранить схему"}
            </Button>
          }
        />
      </div>
    </>
  );
}

export default NewSchemaPage;
