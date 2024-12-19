import axios from "axios";
import Cookies from "js-cookie";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import config from "../config/config.json";
import { AuthContext } from "../routes/AuthProvider";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Label from "./ui/Label";

const LoginForm = () => {
  // Create the initial credentials
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const { login } = useContext(AuthContext);
  useEffect(() => {
    Cookies.remove("token", { path: "" });
    // Delete user data when the component is loaded for firts time
    localStorage.removeItem("user_data");
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
      if (response.status === 200) {
        // Get token
        const token = response.data.token;
        Cookies.set("token", token, {
          expires: 1,
          secure: true,
          sameSite: "Strict",
        });

        localStorage.setItem("user_data", JSON.stringify(response.data.user));
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
      <div className="grid place-items-center gap-1 px-5 mb-2">
        <h1 className="text-5xl font-bold">Login</h1>
        <p className="text-sm text-custom-gray">
          Login using your Automation Anywhere credentials
        </p>
      </div>
      <div className="flex flex-col">
        <Label labelName="User name" labelFor="username" />
        <Input
          type="text"
          value={credentials.username}
          id="username"
          placeHolder="Ex: dev_01"
          onInputChange={(value) => {
            setCredentials({ ...credentials, username: value });
          }}
        />
      </div>
      <div className="flex flex-col">
        <Label labelFor="password" labelName="Password" />
        <Input
          type="password"
          value={credentials.password}
          id="password"
          placeHolder="Password"
          onInputChange={(value) =>
            setCredentials({ ...credentials, password: value })
          }
        />
      </div>
      <Button type="submit" className="w-full">
        Login to see your bots
      </Button>
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
