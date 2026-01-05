import React from "react";
import {
    FiMail,
    FiMessageCircle,
    FiUsers,
    FiSend,
    FiHeart
} from "react-icons/fi";

export default function UserContactUs() {
    return (
        <div className="min-h-screen bg-gray-50 px-4 py-6 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="mb-8 text-center">
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
                        Contact Us
                    </h1>
                    <p className="text-gray-600 mt-2 text-sm sm:text-base">
                        We’re here to help you build better habits 💙
                    </p>
                </div>

                {/* Hero Card */}
                <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8 mb-6 text-center">
                    <FiHeart className="mx-auto text-red-400 text-4xl mb-3" />
                    <h2 className="text-lg sm:text-xl font-semibold text-gray-700">
                        Let’s Talk
                    </h2>
                    <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
                        Whether you have a question, feedback, or just want to say hello —
                        our team is always happy to hear from you.
                    </p>
                </div>

                {/* Contact Options */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    {/* Email */}
                    <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8 hover:shadow-lg transition">
                        <FiMail className="text-blue-500 text-3xl mb-4" />
                        <h3 className="font-semibold text-gray-700 text-lg mb-1">
                            Email Support
                        </h3>
                        <p className="text-gray-600 text-sm mb-4">
                            Reach out anytime. We usually reply within 24 hours.
                        </p>
                        <a className="text-blue-600 font-medium" href="mailto:support@habitory.com">
                            support@habitory.com
                        </a>
                    </div>

                    {/* Community */}
                    <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8 hover:shadow-lg transition">
                        <FiUsers className="text-green-500 text-3xl mb-4" />
                        <h3 className="font-semibold text-gray-700 text-lg mb-1">
                            Community
                        </h3>
                        <p className="text-gray-600 text-sm mb-4">
                            Join our community to share tips, get updates, and stay motivated.
                        </p>
                        <p className="text-green-600 font-medium">
                            Discord • Reddit • Community Forum
                        </p>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8 mb-6">
                    <h2 className="flex items-center gap-2 text-lg font-semibold text-gray-700 mb-6">
                        <FiMessageCircle className="text-purple-500" />
                        Send Us a Message
                    </h2>

                    <form className="space-y-5">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Your Name
                            </label>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Email Address
                            </label>
                            <input
                                type="email"
                                placeholder="you@example.com"
                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Message
                            </label>
                            <textarea
                                rows="4"
                                placeholder="Tell us how we can help you..."
                                className="w-full px-4 py-3 border border-gray-300 rounded-xl resize-none focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full flex items-center justify-center gap-3 bg-blue-600 text-white font-semibold py-3 rounded-xl hover:bg-blue-700 transition active:scale-95"
                        >
                            <FiSend />
                            Send Message
                        </button>
                    </form>

                    <p className="text-xs text-gray-500 mt-4 text-center">
                        Tip: Including your device model and app version helps us assist you
                        faster.
                    </p>
                </div>

                {/* Footer */}
                <div className="text-center text-xs text-gray-400 mt-10">
                    © {new Date().getFullYear()} Habitory. Made with care for better habits.
                </div>
            </div>
        </div>
    );
}
