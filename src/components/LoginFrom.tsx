import React, { useState } from "react";
import axios from "../api/apiClient";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleLogin = async (e: any): Promise<any> => {
    e.preventDefault();
    try {
      const loginUrl = "/v2/authentication";
      const response = await axios.post(loginUrl, credentials);
      localStorage.setItem("token", response.data.token);
      navigate("/home");
    } catch (error) {
      console.error("Loging failed:", error);
      alert("Invalid credentials");
    }
  };
  return (
    <form onSubmit={handleLogin}>
      <h1 className="text-black bg-zinc-50">Login form</h1>
      <input
        type="text"
        placeholder="User name"
        value={credentials.username}
        onChange={(e) =>
          setCredentials({ ...credentials, username: e.target.value })
        }
      />
      <input
        type="password"
        placeholder="Password"
        value={credentials.password}
        onChange={(e) =>
          setCredentials({ ...credentials, password: e.target.value })
        }
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
