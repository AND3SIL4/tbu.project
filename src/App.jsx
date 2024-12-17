import Footer from "./components/Footer";
import AppRoutes from "./routes/Routes";
import validAuth from "./routes/validAuthentication";
import HeaderHome from "./components/HeaderHome";
import HeaderLogin from "./components/HeaderLogin";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {validAuth() ? <HeaderHome /> : <HeaderLogin />}
      <main className="flex-1 grid place-items-center">
        <AppRoutes />
      </main>
      <Footer />
    </div>
  );
};

export default App;
