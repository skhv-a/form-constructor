import useRequest from "./useRequest";

type Req = {
  username: string;
  password: string;
};

type Res = {
  access_token: string;
};

const useLogin = () =>
  useRequest<Req, Res>({
    axiosRequestConfig: (data) => ({
      url: "/auth/login",
      method: "POST",
      data,
    }),
  });

export default useLogin;
