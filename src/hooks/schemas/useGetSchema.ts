import { RequestState } from "hooks/useRequest";
import { useState } from "react";
import { ApiSchema } from "types/schema";
import { sleep } from "utils/utils";

type State = RequestState<ApiSchema>;

const initialState: State = {
  response: null,
  error: null,
  isLoading: false,
};

// mocked because of CORS error
const useGetSchema = (): [State, (id: number) => Promise<void>] => {
  const [state, setState] = useState<State>(initialState);

  const getSchema = async (id: number) => {
    setState((prev) => ({ ...prev, isLoading: true }));

    await sleep(500);

    const rawLocalSchemas = localStorage.getItem("schemas") as string;
    const schemas = JSON.parse(rawLocalSchemas) as ApiSchema[];
    const schema = schemas.find((s) => s.id === id) || null;

    setState({
      response: schema,
      isLoading: false,
      error: schema ? null : new Error("Схема не найдена"),
    });
  };

  return [state, getSchema];
};

export default useGetSchema;
