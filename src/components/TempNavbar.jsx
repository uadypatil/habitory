import { FiMenu } from "react-icons/fi";

export default function TempNavbar({ setSidebarOpen }) {
    return (
        <nav className="fixed top-0 left-0 right-0 h-20 bg-white/95 backdrop-blur shadow-md z-50 flex items-center justify-between px-4 sm:px-6 md:px-10">
            <div className="flex items-center">
                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-blue-600 mr-4"
                    aria-label="Toggle Sidebar"
                    onClick={() => setSidebarOpen((open) => !open)}
                >
                    <FiMenu className="text-2xl" />
                </button>
                <h1 className="text-xl font-bold text-blue-600">Discipline Tracker</h1>
            </div>
            <div className="hidden md:flex items-center space-x-4 bg-white/30 backdrop-blur-md rounded-md px-3 py-1">
                <span className="text-gray-700">John Doe</span>
                <button className="text-blue-600 font-semibold hover:underline">Logout</button>
            </div>

        </nav>
    );
}
