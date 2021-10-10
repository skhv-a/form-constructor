import { useTokenContext } from "contexts/Token";
import { Route, RouteProps, Redirect } from "react-router-dom";

const AuthedRoute = ({ children, ...props }: RouteProps) => {
  const { token } = useTokenContext();

  return <Route {...props}>{token ? children : <Redirect to="/" />}</Route>;
};

export default AuthedRoute;
