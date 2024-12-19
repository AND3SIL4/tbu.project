import config from "../config/config.json";
import { useContext } from "react";
import { AuthContext } from "../routes/AuthProvider";
import { useNavigate } from "react-router-dom";
import CloseSessionIcon from "../icons/CloseSession";
import Cookies from "js-cookie";

const HeaderLogin = () => {
  const { isLoggedIn, logout } = useContext(AuthContext);
  // Instance Navigate
  const navigate = useNavigate();
  const handleLogOut = () => {
    Cookies.remove("token");
    // Got to he login form after log out
    logout();
    navigate("/", { replace: true });
  };
  return (
    <header>
      <nav>
        <ul className="flex items-center justify-between py-5 px-9">
          <li>
            <img
              className="aspect-[79/22] w-[180px]"
              src={`/${config.logoCompany}`}
              alt="Company logo"
            />
          </li>
          {isLoggedIn ? (
            <li>
              <CloseSessionIcon closeSession={handleLogOut} />
            </li>
          ) : (
            <li className="text-sm text-[#171A1FFF]">
              TBU | Trigger by yourself
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default HeaderLogin;
