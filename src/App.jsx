import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Toaster } from "sonner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import LoginForm from "./components/LoginForm";
import { AuthProvider } from "./routes/AuthProvider";
import PrivateRoute from "./routes/PrivateRoute";
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Toaster richColors closeButton position="bottom-right" />
          <Header />
          <main className="flex-1 grid place-items-center">
            <Routes>
              <Route path="/" exact element={<LoginForm />} />
              <Route
                path="/home"
                element={
                  <PrivateRoute>
                    <Home />
                  </PrivateRoute>
                }
              />
              {/*<Route path="*" element={<NotFound />} />*/}
              <Route path="*" element={<Home />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
