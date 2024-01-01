import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="hero">
      <div className="text-center hero-content">
        <div className="max-w-lg">
          <h1 className="text-5xl font-bold mb-8">Oops!</h1>
          <p className="text-3xl mb-8">
            404 - The page you are looking for doesn't exist.
          </p>
          <Link to="/" className="btn btn-primary">
            <FaHome className="mr-2 size-5" /> Go Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
