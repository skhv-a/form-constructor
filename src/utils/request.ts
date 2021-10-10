import axios, { AxiosRequestConfig } from "axios";
import { getUserToken } from "./token";

const api = axios.create({
  baseURL: process.env["REACT_APP_API_URL"],
});

export const request = async <R>(config: AxiosRequestConfig): Promise<R> => {
  try {
    const token = getUserToken();

    config = {
      ...config,
      headers: {
        ...config.headers,
        Authorization: `Bearer ${token}`,
      },
    };

    const resp = await api(config);

    return resp.data as R;
  } catch (error) {
    throw error;
  }
};
