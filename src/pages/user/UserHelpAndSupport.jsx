import React from "react";
import {
    FiHelpCircle,
    FiTrendingUp,
    FiUser,
    FiAlertCircle,
    FiMail,
    FiUsers
} from "react-icons/fi";

export default function UserHelpAndSupport() {
    return (
        <div className="min-h-screen bg-gray-50 px-4 py-6 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
                        Help & Support
                    </h1>
                    <p className="text-gray-600 mt-1 text-sm sm:text-base">
                        Habitory Help & Support Center
                    </p>
                </div>

                {/* Intro Card */}
                <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8 mb-6">
                    <p className="text-gray-700 font-medium text-lg">
                        Master your habits. Master your life.
                    </p>
                    <p className="text-gray-600 mt-2">
                        Find answers to common questions and learn how to get the most out of
                        Habitory.
                    </p>
                </div>

                {/* Getting Started */}
                <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8 mb-6">
                    <h2 className="flex items-center gap-2 text-lg font-semibold text-gray-700 mb-4">
                        <FiHelpCircle className="text-blue-500" />
                        1. Getting Started
                    </h2>

                    <div className="space-y-4 text-gray-600">
                        <p>
                            <strong>How do I create my first habit?</strong>
                            <br />
                            Tap the (+) icon on the home screen. Give your habit a name, choose
                            a frequency (daily, weekly, or specific days), and set a reminder
                            time.
                        </p>

                        <p>
                            <strong>What are “Streaks”?</strong>
                            <br />
                            A streak is the number of consecutive times you’ve successfully
                            completed a habit. Keep the chain going to build long-term
                            discipline!
                        </p>

                        <p>
                            <strong>Can I categorize my habits?</strong>
                            <br />
                            Yes. You can use tags like <em>Health</em>, <em>Work</em>, or{" "}
                            <em>Mindfulness</em> to group your routines and view
                            category-specific progress.
                        </p>
                    </div>
                </div>

                {/* Tracking & Progress */}
                <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8 mb-6">
                    <h2 className="flex items-center gap-2 text-lg font-semibold text-gray-700 mb-4">
                        <FiTrendingUp className="text-green-500" />
                        2. Tracking & Progress
                    </h2>

                    <div className="space-y-4 text-gray-600">
                        <p>
                            <strong>How do I log a habit?</strong>
                            <br />
                            Simply swipe right on the habit card from your dashboard to mark it
                            as complete. To undo, tap the habit and edit the history.
                        </p>

                        <p>
                            <strong>What happens if I miss a day?</strong>
                            <br />
                            Life happens! You can manually log a <em>Skip</em> if you had a
                            valid reason (like illness). This pauses your streak without
                            breaking it entirely.
                        </p>

                        <p>
                            <strong>Where can I see my long-term stats?</strong>
                            <br />
                            Head to the <em>Insights</em> tab to view heatmaps, completion
                            rates, and monthly growth charts.
                        </p>
                    </div>
                </div>

                {/* Account & Syncing */}
                <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8 mb-6">
                    <h2 className="flex items-center gap-2 text-lg font-semibold text-gray-700 mb-4">
                        <FiUser className="text-purple-500" />
                        3. Account & Syncing
                    </h2>

                    <div className="space-y-4 text-gray-600">
                        <p>
                            <strong>Is my data backed up?</strong>
                            <br />
                            If you have an account, your data syncs automatically to the
                            cloud. Guest Mode stores data only on your device.
                        </p>

                        <p>
                            <strong>How do I sync with Apple Health or Google Fit?</strong>
                            <br />
                            Go to <em>Settings → Integrations</em> and enable the services you
                            want to connect.
                        </p>

                        <p>
                            <strong>I forgot my password. What now?</strong>
                            <br />
                            Tap <em>Forgot Password</em> on the login screen and follow the
                            email instructions.
                        </p>
                    </div>
                </div>

                {/* Troubleshooting */}
                <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8 mb-6">
                    <h2 className="flex items-center gap-2 text-lg font-semibold text-gray-700 mb-4">
                        <FiAlertCircle className="text-red-500" />
                        4. Troubleshooting
                    </h2>

                    <div className="space-y-4 text-gray-600">
                        <p>
                            <strong>I’m not receiving reminders:</strong>
                        </p>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Ensure notifications are enabled in Habitory settings.</li>
                            <li>Check your phone’s system permissions.</li>
                            <li>Disable Do Not Disturb or Focus Mode if active.</li>
                        </ul>

                        <p>
                            <strong>The app is lagging or crashing:</strong>
                        </p>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Update to the latest version of Habitory.</li>
                            <li>Clear app cache or restart your device.</li>
                        </ul>
                    </div>
                </div>

                {/* Still Need Help */}
                <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8">
                    <h2 className="text-lg font-semibold text-gray-700 mb-4">
                        Still need help?
                    </h2>

                    <p className="text-gray-600 mb-4">
                        If you couldn’t find the answer you were looking for, our team is
                        here to support your journey.
                    </p>

                    <div className="space-y-3 text-gray-600">
                        <p className="flex items-center gap-2">
                            <FiMail className="text-blue-500" />
                            <strong>Email:</strong> support@habitory.com (Response within 24
                            hours)
                        </p>

                        <p className="flex items-center gap-2">
                            <FiUsers className="text-green-500" />
                            <strong>Community Forum:</strong> Discord / Reddit / Community
                        </p>

                        <p>
                            <strong>Twitter/X:</strong> @HabitorySupport
                        </p>

                        <p className="text-sm text-gray-500 mt-4">
                            Tip: When contacting support, please include your device model and
                            a screenshot of the issue if possible.
                        </p>
                    </div>
                </div>

                {/* Footer */}
                <div className="text-center text-xs text-gray-400 mt-10">
                    © {new Date().getFullYear()} Habitory. All rights reserved.
                </div>
            </div>
        </div>
    );
}
