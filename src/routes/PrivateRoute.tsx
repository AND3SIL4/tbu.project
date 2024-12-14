import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }: { children: any }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    // If the token does not exist, then redirect to login
    return <Navigate to="/" replace />;
  }
  // If the token exist render the children
  return children;
};

export default PrivateRoute;
