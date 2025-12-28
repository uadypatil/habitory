import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import UserSidebar from "../components/UserSidebar";
import UserNavbar from "../components/UserNavbar";
import { Outlet } from "react-router-dom";

export default function UserDashboardLayout() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const sidebarWidth = 64; // 16rem = 256px in Tailwind (w-64)

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <>
            {/* Overlay for mobile when sidebar open */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 md:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            <div className="min-h-screen flex">

                {/* Sidebar */}
                <UserSidebar
                    isOpen={sidebarOpen}
                    setIsOpen={setSidebarOpen}
                    className="fixed md:static top-0 left-0 h-full bg-white shadow-md z-50 w-64 transform md:translate-x-0 transition-transform duration-300"
                // use transform for slide in/out on mobile inside TempSidebar
                />

                {/* Main content wrapper with margin-left to prevent overlap */}
                <div
                    className={`flex-1 flex flex-col min-h-screen transition-all duration-300 ${sidebarOpen ? "ml-64" : "ml-0"
                        } md:ml-64`}
                >
                    {/* Navbar aligned with main content */}
                    <UserNavbar setSidebarOpen={setSidebarOpen} />

                    {/* Content */}
                    <main className="pt-25 px-6">
                        <Outlet />
                    </main>
                </div>
            </div>
        </>
    );
}
