import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import config from "../config/config.json";
import { AuthContext } from "../routes/AuthProvider";
import { useEffect } from "react";
import Label from "./ui/Label";
import Input from "./ui/Input";
import Button from "./ui/Button";

const LoginForm = () => {
  // Create the initial credentials
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const { login } = useContext(AuthContext);
  useEffect(() => {
    // Delete token when the component is loaded for firts time
    localStorage.removeItem("token");
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
      if (response.status === 200) {
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
