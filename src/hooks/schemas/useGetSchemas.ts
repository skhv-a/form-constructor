import { RequestState } from "hooks/useRequest";
import { useState } from "react";
import { ApiSchema } from "types/schema";
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

    const rawLocalSchemas = localStorage.getItem("schemas") as string;
    setState((prev) => ({ ...prev, response: JSON.parse(rawLocalSchemas) }));

    setState((prev) => ({ ...prev, isLoading: false }));
  };

  return [state, getSchemas];
};

export default useGetSchemas;
