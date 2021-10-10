import useBoolean from "hooks/useBoolean";
import Input, { InputProps } from "../Input/Input";
import eye from "assets/eye.svg";
import eyeOff from "assets/eye-off.svg";
import "./styles.css";

type Props = Omit<InputProps, "type">;

const PasswordInput = (props: Props) => {
  const [isPassword, setPassword] = useBoolean(true);

  return (
    <div className="password-input">
      <Input type={isPassword ? "password" : "text"} {...props} />
      <img
        className="password-input__eye"
        src={isPassword ? eyeOff : eye}
        alt={isPassword ? "Show password" : "Hide password"}
        onClick={setPassword.toggle}
      />
    </div>
  );
};

export default PasswordInput;
