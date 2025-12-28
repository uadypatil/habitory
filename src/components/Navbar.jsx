import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white/90 backdrop-blur shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          to="/"
          className="text-xl font-bold text-blue-600"
        >
          DisciplineTracker
        </Link>

        <div className="hidden md:flex space-x-8 text-gray-600 font-medium">
          <Link
            to="/#features"
            className="hover:text-blue-600"
          >
            Features
          </Link>
          <Link
            to="/#workflow"
            className="hover:text-blue-600"
          >
            Workflow
          </Link>
          <Link
            to="/#faq"
            className="hover:text-blue-600"
          >
            FAQ
          </Link>
          <Link
            to="/help"
            className="hover:text-blue-600"
          >
            Help
          </Link>
        </div>

        <Link
          to="/login"
          className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          User Account
        </Link>
      </div>
    </nav>
  );
}
