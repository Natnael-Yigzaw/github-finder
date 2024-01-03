import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = ({ title }) => {
  return (
    <nav className="navbar mb-12 shadow-lg bg-neutral text-neutral-content">
      <div className="container mx-auto">
        <div className="flex-none px-2 mx-2">
          <Link to="/" className="text-lg font-bold align-middle">
            <FaGithub className="inline pr-2 text-5xl" />
            {title}
          </Link>
        </div>
        <div className="flex-1 px-2 mx-2">
          <div className="flex justify-end">
            <Link
              to="/"
              className="btn btn-ghost btn-sm rounded-btn px-5 text-base font-bold"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="btn btn-ghost btn-sm rounded-btn px-5 text-base font-bold"
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

Navbar.defaultProps = {
  title: "GitHub Finder",
};

export default Navbar;
