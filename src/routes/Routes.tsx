import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginForm from "../components/LoginFrom";
import Home from "../components/Home";
import PrivateRoute from "../routes/PrivateRoute";

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<LoginForm />} />
      {/*Protected home path*/}
      <Route
        path="/home"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />
    </Routes>
  </Router>
);

export default AppRoutes;
