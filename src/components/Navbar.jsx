import { Link } from "react-router-dom";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/90 backdrop-blur shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-blue-600">
          DisciplineTracker
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 text-gray-600 font-medium">
          <Link to="/#features" className="hover:text-blue-600">
            Features
          </Link>
          <Link to="/#workflow" className="hover:text-blue-600">
            Workflow
          </Link>
          <Link to="/#faq" className="hover:text-blue-600">
            FAQ
          </Link>
          <Link to="/help" className="hover:text-blue-600">
            Help
          </Link>
        </div>

        {/* Desktop Button */}
        <Link
          to="/login"
          className="hidden md:inline-block bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          User Account
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 text-2xl"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t shadow-sm">
          <div className="flex flex-col px-6 py-4 space-y-4 text-gray-700 font-medium">
            <Link onClick={() => setIsOpen(false)} to="/#features">
              Features
            </Link>
            <Link onClick={() => setIsOpen(false)} to="/#workflow">
              Workflow
            </Link>
            <Link onClick={() => setIsOpen(false)} to="/#faq">
              FAQ
            </Link>
            <Link onClick={() => setIsOpen(false)} to="/help">
              Help
            </Link>

            <Link
              onClick={() => setIsOpen(false)}
              to="/login"
              className="mt-2 bg-blue-600 text-white text-center px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              User Account
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
