import { RequestState } from "hooks/useRequest";
import { useState } from "react";
import { ApiSchema, Schema } from "types/schema";
import { sleep } from "utils/utils";

type State = RequestState<ApiSchema>;

const initialState: State = {
  response: null,
  error: null,
  isLoading: false,
};

// mocked because of CORS error
const useCreateSchema = (): [State, (schema: Schema) => Promise<void>] => {
  const [state, setState] = useState<State>(initialState);

  const createSchema = async (schema: Schema) => {
    setState((prev) => ({ ...prev, isLoading: true }));

    await sleep(500);

    const apiSchema: ApiSchema = { ...schema, id: Date.now() };
    const schemas = JSON.parse(localStorage.getItem("schemas") as string);
    const updatedSchemas = [...schemas, apiSchema];

    localStorage.setItem("schemas", JSON.stringify(updatedSchemas));

    setState({
      response: apiSchema,
      isLoading: false,
      error: schema ? null : new Error("Схема не найдена"),
    });
  };

  return [state, createSchema];
};

export default useCreateSchema;
