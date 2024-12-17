import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import PrivateRoute from "./PrivateRoute";
import Login from "../views/Login";

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Login />} />
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
