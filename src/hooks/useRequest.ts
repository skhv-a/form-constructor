import { useState } from "react";
import { AxiosRequestConfig } from "axios";
import { request } from "utils/request";

export type RequestState<ResponseType> = {
  response: ResponseType | null;
  error: Error | null;
  isLoading: boolean;
};

type Args<RequestType> = {
  axiosRequestConfig: (req: RequestType) => AxiosRequestConfig;
  onError?: (req: RequestType, err: Error) => void;
  onSuccess?: (req: RequestType) => void;
};

const INITIAL_STATE: RequestState<any> = {
  response: null,
  error: null,
  isLoading: false,
};

const useRequest = <Req, Res>({
  axiosRequestConfig,
  onError,
  onSuccess,
}: Args<Req>): [RequestState<Res>, (req: Req) => Promise<void>] => {
  const [state, setState] = useState(INITIAL_STATE);

  const call = async (req: Req) => {
    setState((prev) => ({ ...prev, isLoading: true }));
    try {
      const res = await request<Res>(axiosRequestConfig(req));
      setState({
        response: res,
        isLoading: false,
        error: null,
      });
      if (typeof onSuccess === "function") {
        onSuccess(req);
      }
    } catch (err: any) {
      setState({
        response: null,
        isLoading: false,
        error: err,
      });
      if (typeof onError === "function") {
        onError(req, err);
      }
    }
  };
  return [state, call];
};

export default useRequest;
