import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center text-gray-800">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-lg mb-6">
        Oops! The page you are looking for does not exist.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
