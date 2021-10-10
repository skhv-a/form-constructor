import logo from "assets/logo.svg";
import { useTokenContext } from "contexts/Token";
import { useLocation } from "react-router";
import { Link as RouterLink } from "react-router-dom";
import { joinClassNames } from "utils/utils";
import "./styles.css";

const Navbar = () => {
  const { setToken } = useTokenContext();
  return (
    <div className="navbar-container">
      <div className="navbar">
        <div className="navbar-links">
          <div className="navbar-links__group">
            <img src={logo} alt="logo" className="navbar__logo" />
            <Link to="/schemas">Мои схемы</Link>
            <Link to="/schemas/new">Создать схему</Link>
          </div>
          <div className="navbar-links__group">
            <span className="navbar__link" onClick={() => setToken("")}>
              Выйти
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

function Link({ to, children }: { to: string; children: React.ReactNode }) {
  const { pathname } = useLocation();
  const isActive = pathname === to;

  return (
    <RouterLink
      to={to}
      className={joinClassNames(
        "navbar__link",
        isActive && "navbar__link_active"
      )}
    >
      {children}
    </RouterLink>
  );
}

export default Navbar;
