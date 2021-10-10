import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Button from "components/Button/Button";
import LoginForm from "components/login/LoginForm";
import { useTokenContext } from "contexts/Token";
import useLogin from "hooks/useLogin";
import Alert from "components/Alert/Alert";
import logo from "assets/logo.svg";
import "./styles/login.css";

function LoginPage() {
  const history = useHistory();
  const { token, setToken } = useTokenContext();
  const [loginState, login] = useLogin();

  useEffect(() => {
    if (loginState.response) setToken(loginState.response.access_token);
  }, [loginState]);

  useEffect(() => {
    if (token) history.push("/schemas");
  }, [token]);

  return (
    <div className="login-container">
      <div className="login">
        <img src={logo} alt="logo" className="login__logo" />
        <h3 className="heading-3 login__title">Вход</h3>
        <LoginForm
          className="login-form"
          initialValues={{ username: "", password: "" }}
          onSubmit={login}
          controls={
            <div className="login-form__controls">
              <Button htmlType="submit" disabled={loginState.isLoading}>
                {loginState.isLoading ? "Входим..." : "Войти"}
              </Button>
            </div>
          }
        />
        {loginState.error && (
          <Alert className="login__error" type="error">
            Не удалось войти
          </Alert>
        )}
      </div>
    </div>
  );
}

export default LoginPage;
