import { Navigate } from "react-router-dom";
import validAuth from "./validAuthentication";

const PrivateRoute = ({ children }) => {
  if (!validAuth()) return <Navigate to={"/"} replace />;
  return children;
};

export default PrivateRoute;
