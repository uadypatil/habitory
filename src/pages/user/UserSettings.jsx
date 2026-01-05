import React from "react";
import {
    FiMoon,
    FiSun,
    FiLock,
    FiHelpCircle,
    FiMail,
    FiChevronRight
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { toggleTheme } from "../../utils/themeManager";
import { THEME_STATE_DARK, THEME_STATE_LIGHT } from "../../data/literals";

export default function UserSettings() {
    const navigate = useNavigate();

    const handlePrivacyPolicyRedirection = () => {
        navigate('/privacy-policy');
    }

    const handleHelpAndSupportRedirect = () => {
        navigate("/help-support");
    }

    const handleContactUsRedirect = () => {
        navigate("/contact-us");
    }

    const handleToggleTheme = (themeState) => {
        // console.log("theme = " + themeState)
        toggleTheme(themeState);
    }

    return (
        <div className="min-h-screen bg-gray-50 px-4 py-6 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
                        Settings
                    </h1>
                    <p className="text-gray-600 mt-1 text-sm sm:text-base">
                        Manage your preferences and app information
                    </p>
                </div>

                {/* Settings Sections */}
                <div className="space-y-6">
                    {/* Theme Settings */}
                    <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8">
                        <h2 className="text-lg sm:text-xl font-semibold text-gray-700 mb-4">
                            Appearance
                        </h2>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="flex-1 flex items-center justify-between border rounded-xl px-4 py-3 hover:bg-gray-50 transition" onClick={() => handleToggleTheme(THEME_STATE_LIGHT)}>
                                <div className="flex items-center gap-3">
                                    <FiSun className="text-yellow-500 text-xl" />
                                    <span className="font-medium text-gray-700">Light Theme</span>
                                </div>
                                <FiChevronRight className="text-gray-400" />
                            </button>

                            <button className="flex-1 flex items-center justify-between border rounded-xl px-4 py-3 hover:bg-gray-50 transition" onClick={() => handleToggleTheme(THEME_STATE_DARK)}>
                                <div className="flex items-center gap-3">
                                    <FiMoon className="text-blue-500 text-xl" />
                                    <span className="font-medium text-gray-700">Dark Theme</span>
                                </div>
                                <FiChevronRight className="text-gray-400" />
                            </button>
                        </div>

                        <p className="text-xs text-gray-500 mt-3">
                            Theme preference will be saved automatically.
                        </p>
                    </div>

                    {/* Privacy Policy */}
                    <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8" onClick={handlePrivacyPolicyRedirection}>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <FiLock className="text-blue-500 text-xl" />
                                <div>
                                    <h2 className="font-semibold text-gray-700">
                                        Privacy Policy
                                    </h2>
                                    <p className="text-sm text-gray-500">
                                        Learn how we handle your data
                                    </p>
                                </div>
                            </div>
                            <FiChevronRight className="text-gray-400" />
                        </div>
                    </div>

                    {/* Help & Support */}
                    <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8" onClick={handleHelpAndSupportRedirect}>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <FiHelpCircle className="text-green-500 text-xl" />
                                <div>
                                    <h2 className="font-semibold text-gray-700">
                                        Help & Support
                                    </h2>
                                    <p className="text-sm text-gray-500">
                                        Get help using the app
                                    </p>
                                </div>
                            </div>
                            <FiChevronRight className="text-gray-400" />
                        </div>
                    </div>

                    {/* Contact Us */}
                    <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8" onClick={handleContactUsRedirect}>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <FiMail className="text-purple-500 text-xl" />
                                <div>
                                    <h2 className="font-semibold text-gray-700">
                                        Contact Us
                                    </h2>
                                    <p className="text-sm text-gray-500">
                                        Reach out with feedback or questions
                                    </p>
                                </div>
                            </div>
                            <FiChevronRight className="text-gray-400" />
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="text-center text-xs text-gray-400 mt-12">
                    © {new Date().getFullYear()} Your App Name. All rights reserved.
                </div>
            </div>
        </div>
    );
}
