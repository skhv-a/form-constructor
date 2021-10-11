import { RequestState } from "hooks/useRequest";
import { useState } from "react";
import { ApiSchema } from "types/schema";
import { getSchemasFromLocalStorage } from "utils/localStorageSchemas";
import { sleep } from "utils/utils";

type State = RequestState<ApiSchema[]>;

const initialState: State = {
  response: null,
  error: null,
  isLoading: false,
};

// mocked because of CORS error
const useGetSchemas = (): [State, () => Promise<void>] => {
  const [state, setState] = useState<State>(initialState);

  const getSchemas = async () => {
    setState((prev) => ({ ...prev, isLoading: true }));

    await sleep(500);

    const schemas = getSchemasFromLocalStorage();
    setState((prev) => ({ ...prev, response: schemas, isLoading: false }));
  };

  return [state, getSchemas];
};

export default useGetSchemas;
