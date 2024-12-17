import Footer from "../components/Footer";
import HeaderLogin from "../components/HeaderLogin";
import LoginForm from "../components/LoginFrom";

const Login = () => {
  return (
    <div className="h-full">
      <HeaderLogin />
      <section className="grid place-items-center m-auto">
        <LoginForm />
      </section>
      <Footer />
    </div>
  );
};

export default Login;
