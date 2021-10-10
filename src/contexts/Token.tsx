import useToken from "hooks/useToken";
import { createContext, useContext } from "react";

type IContext = {
  token: string;
  setToken: (token: string) => void;
};

type ProviderProps = {
  children: React.ReactNode;
};

const Context = createContext<IContext>({} as any);

export const useTokenContext = () => useContext(Context);

export const TokenProvider = ({ children }: ProviderProps) => {
  const [token, setToken] = useToken();

  return (
    <Context.Provider value={{ token, setToken }}>{children}</Context.Provider>
  );
};
