import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import config from "../config/config.json";
import { AuthContext } from "../routes/AuthProvider";
import "../styles/LoginForm.css";
import { useEffect } from "react";

const LoginForm = () => {
  // Create the initial credentials
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const { login } = useContext(AuthContext);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      localStorage.removeItem("token");
    }
  }, []);

  const navigate = useNavigate();

  // Call the API to log in
  const handleLogin = async (e) => {
    const loadToast = toast.loading("Validating credentials...");
    e.preventDefault();
    try {
      const response = await axios.post(
        `${config.apiUrl}/api/v2/authentication`,
        credentials,
      );
      console.log(response.data);
      if (response.status == 200) {
        localStorage.setItem("token", response.data.token);
        toast.dismiss(loadToast);
        toast.success(
          `${response.status} Welcome ${response.data.user.username}`,
        );
        navigate("/home");
        login();
      }
    } catch (error) {
      toast.dismiss(loadToast);
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
        <label
          htmlFor="username"
          className="text-custom-gray font-bold cursor-pointer"
        >
          User name
        </label>
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
        <label
          htmlFor="password"
          className="text-custom-gray font-bold cursor-pointer"
        >
          Password
        </label>
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
        className="mt-7 bg-custom-blue rounded-3xl text-white font-medium py-3 px-2 text-base hover:scale-95 hover:opacity-95 transition-all duration-300"
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
