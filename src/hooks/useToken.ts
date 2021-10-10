import { useState } from "react";
import { getUserToken, setUserToken } from "utils/token";

interface IUseToken {
  (): [string, (token: string) => void];
}

const useToken: IUseToken = () => {
  const [token, setToken] = useState(getUserToken());

  const setTokenWrapper = (token: string): void => {
    setToken(token);
    setUserToken(token);
  };

  return [token, setTokenWrapper];
};

export default useToken;
