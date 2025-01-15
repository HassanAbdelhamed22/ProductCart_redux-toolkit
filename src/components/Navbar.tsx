import { Link } from "react-router-dom";
import Button from "./ui/Button";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 p-4 text-gray-100 shadow-lg rounded-lg mt-5 max-w-screen-xl container mx-auto flex">
      <div className=" justify-between items-center max-w-screen-lg container mx-auto flex">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-blue-400 hover:text-blue-300"
        >
          My Shop
        </Link>

        {/* Navigation Links */}
        <ul className="flex space-x-6 text-md">
          <li>
            <Link
              to="/"
              className="hover:text-blue-300 transition duration-200"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/pricing"
              className="hover:text-blue-300 transition duration-200"
            >
              Pricing
            </Link>
          </li>
          <li>
            <Link
              to="/features"
              className="hover:text-blue-300 transition duration-200"
            >
              Features
            </Link>
          </li>
          <li>
            <Link
              to="/cart"
              className="hover:text-blue-300 transition duration-200"
            >
              Cart
            </Link>
          </li>
        </ul>

        {/* Login Button */}
        <Button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md shadow-md">
          Login
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
