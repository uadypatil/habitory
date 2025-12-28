import { Link } from "react-router-dom";
import { FiHome, FiCheckCircle, FiTrendingUp, FiTarget, FiBook, FiExternalLink } from "react-icons/fi";
import { BsFilePerson, BsPerson } from "react-icons/bs";

export default function UserSidebar({ isOpen, setIsOpen }) {
    return (
        <>
            <aside
                className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out
          md:translate-x-0
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
            >
                <div className="h-20 flex items-center justify-center font-bold text-blue-600 text-2xl border-b">
                    Dashboard
                </div>

                {/* Make sidebar flex column and justify-between to push bottom buttons down */}
                <div className="flex flex-col h-[calc(100%-5rem)] justify-between">
                    {/* Top navigation */}
                    <nav className="mt-4 flex flex-col">
                        <Link
                            to="/dashboard"
                            className="flex items-center gap-3 px-6 py-3 text-gray-700 hover:bg-blue-50 transition"
                            onClick={() => setIsOpen(false)}
                        >
                            <FiHome /> Home
                        </Link>
                        <Link
                            to="/task/new"
                            className="flex items-center gap-3 px-6 py-3 text-gray-700 hover:bg-blue-50 transition"
                            onClick={() => setIsOpen(false)}
                        >
                            <FiCheckCircle /> Add Task
                        </Link>
                        <Link
                            to="/tasks"
                            className="flex items-center gap-3 px-6 py-3 text-gray-700 hover:bg-blue-50 transition"
                            onClick={() => setIsOpen(false)}
                        >
                            <FiCheckCircle /> Tasks
                        </Link>
                        <Link
                            to="/streaks"
                            className="flex items-center gap-3 px-6 py-3 text-gray-700 hover:bg-blue-50 transition"
                            onClick={() => setIsOpen(false)}
                        >
                            <FiTrendingUp /> Streaks
                        </Link>
                        <Link
                            to="/goals"
                            className="flex items-center gap-3 px-6 py-3 text-gray-700 hover:bg-blue-50 transition"
                            onClick={() => setIsOpen(false)}
                        >
                            <FiTarget /> Goals
                        </Link>
                        <Link
                            to="/personals"
                            className="flex items-center gap-3 px-6 py-3 text-gray-700 hover:bg-blue-50 transition"
                            onClick={() => setIsOpen(false)}
                        >
                            <BsPerson /> Personals
                        </Link>
                    </nav>
                    
                    {/* Bottom links styled professionally */}
                    <div className="mb-6 px-6 flex flex-col gap-2 border-t border-gray-200 pt-4">
                        <Link
                            to="/license"
                            className="flex items-center gap-2 text-gray-500 hover:text-gray-900 transition text-sm"
                            onClick={() => setIsOpen(false)}
                        >
                            <FiBook className="text-gray-400" /> Licenses
                        </Link>
                        <a
                            href="/"
                            target="_self"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-gray-500 hover:text-gray-900 transition text-sm"
                        >
                            <FiExternalLink className="text-gray-400" /> Portal
                        </a>
                    </div>

                </div>
            </aside>
        </>
    );
}
