import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/LoginForm.css";
import config from "../config/config.json";
import { toast } from "sonner";

const LoginForm = () => {
  // Create the initial credentials
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  // Initialize the navigate object
  const navigate = useNavigate();

  // Call the API to log in
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      toast.info("Validating credentials...");
      const response = await axios.post(
        `${config.apiUrl}/api/v2/authentication`,
        credentials,
      );
      console.log(response.data);
      if (response.status == 200) {
        localStorage.setItem("token", response.data.token);
        navigate("/home");
        toast.success(
          `${response.status} Welcome ${response.data.user.username}`,
        );
      }
    } catch (error) {
      toast.error(`Error: ${error.message} during authentication`);
    }
  };
  return (
    <form className="flex flex-col gap-5" onSubmit={handleLogin}>
      <div className="grid place-items-center gap-1 p-5 mb-2">
        <h1 className="text-4xl font-bold">Login</h1>
        <p className="text-sm text-custom-gray">
          Login using your Automation Anywhere credentials
        </p>
      </div>
      <div className="flex flex-col">
        <label htmlFor="username">User name</label>
        <input
          required
          id="username"
          type="text"
          placeholder="Ex: dev_01"
          value={credentials.username}
          onChange={(e) =>
            setCredentials({ ...credentials, username: e.target.value })
          }
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="password">Password</label>
        <input
          required
          id="password"
          type="password"
          placeholder="Password"
          value={credentials.password}
          onChange={(e) =>
            setCredentials({ ...credentials, password: e.target.value })
          }
        />
      </div>
      <button
        type="submit"
        className="mt-7 bg-custom-blue rounded-3xl text-white font-medium py-3 px-2 text-base"
      >
        Login to see your bots
      </button>
      <div className="flex items-center">
        <div className="flex-grow border-t border-custom-gray"></div>
        <span className="mx-2 text-custom-gray text-xs">
          If you can not access, pleace contact your admin
        </span>
        <div className="flex-grow border-t border-custom-gray"></div>
      </div>
    </form>
  );
};

export default LoginForm;
