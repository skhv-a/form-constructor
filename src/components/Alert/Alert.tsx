import check from "assets/check.svg";
import cross from "assets/cross.svg";
import { joinClassNames } from "utils/utils";
import "./styles.css";

type AlertType = "success" | "error";

type Props = {
  type: AlertType;
  children: React.ReactNode;
};

const Alert = ({ type, children }: Props) => {
  return (
    <div className={joinClassNames("alert", `alert_${type}`)}>
      <div className={joinClassNames("alert__icon", `alert__icon_${type}`)}>
        <img
          src={type === "success" ? check : cross}
          alt={type === "success" ? "check" : "cross"}
        />
      </div>
      <div className="alert__content">{children}</div>
    </div>
  );
};

export default Alert;
