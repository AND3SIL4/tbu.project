import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

const PrivateRoute = ({ children }) => {
  const { isLoggedIn } = useContext(AuthContext);
  if (isLoggedIn) {
    return children;
  } else {
    return <Navigate to={"/"} replace />;
  }
};

export default PrivateRoute;
