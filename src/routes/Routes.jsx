import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import LoginForm from "../components/LoginFrom";
import PrivateRoute from "./PrivateRoute";

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
